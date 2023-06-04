/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Etapas } from "../data/EnumEtapa";

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions

interface dataObject {
  id_entrega_produto: number;
  especificacao: string;
  quantidade: number;
  peso_previsto: number;
  valorTotal: number;
}

// Objeto de entrada
interface reqObject {
  id_entrega: number;
  id_usuario: number;
  update_objects: Array<dataObject>;
}

async function testeRecusaQuantitativa(
  dataObj: Array<dataObject>,
  id_delivery: number
): Promise<boolean> {
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          nomeTeste: "O valor total informado ultrapassou o limite de +-5%",
          esperado: false,
          obtido: true,
        },
      ],
    }),
  };

  for (let cont = 0; cont < dataObj.length; cont++) {
    if (
      dataObj[cont].valorTotal < dataObj[cont].peso_previsto * 0.95 ||
      dataObj[cont].valorTotal > dataObj[cont].peso_previsto * 1.05
    ) {
      try {
        await fetch(
          `http://localhost:3000/recusar/quantitativa/${id_delivery}`,
          methods
        );
        return true;
      } catch (exception) {
        return false;
      }
    }
  }

  return false;
}

async function getProducts(id: number): Promise<object> {
  try {
    const products = await prisma.entregaProduto.findMany({
      where: {
        EntregaId: id,
      },
      select: {
        id: true,
        pesoPrevisto: true,
        Produto: {
          select: {
            id: true,
            nomeProduto: true,
          },
        },
      },
    });
    return products;
  } catch (exception) {
    console.log(`Uma exceção ocorreu: ${exception}`);
    return {};
  }
}

async function updateQuantitative(
  body: reqObject,
  id_entrega: number
): Promise<boolean> {
  const update_data: Array<dataObject> = body.update_objects;

  await prisma.entrega.update({
    data: {
      etapaEntrega: Etapas.ETAPA2,
    },
    where: {
      id: id_entrega,
    },
  });

  for (let cont = 0; cont <= update_data.length - 1; cont++) {
    try {
      await prisma.entregaProduto.update({
        where: {
          id: update_data[cont].id_entrega_produto,
        },
        data: {
          especificacao: update_data[cont].especificacao,
          quantidade: update_data[cont].quantidade,
          pesoReal: update_data[cont].valorTotal,
        },
      });

      await prisma.statusEntrega.create({
        data: {
          etapaEntrega: Etapas.ETAPA2,
          aprovado: true,
          entregaId: id_entrega,
          usuarioId: body.id_usuario,
        },
      });
    } catch (exception) {
      console.log(`Um erro aconteceu: ${exception}`);
      return false;
    }
  }
  return true;
}

class QuantitativeController {
  async get(req: Request, res: Response) {
    const id = {
      id: Number(req.params.deliveryId),
    };

    let products = await getProducts(id["id"]);
    products = Object.assign(products, id);
    res.json(products);
  }

  async post(req: Request, res: Response) {
    const id_entrega = Number(req.params.deliveryId);
    const req_json: reqObject = req.body;
    const recusado: boolean = await testeRecusaQuantitativa(
      req_json.update_objects,
      id_entrega
    );
    if (recusado == true) {
      res.send("Etapa Recusada");
    } else {
      const status_update: boolean = await updateQuantitative(
        req_json,
        id_entrega
      );
      if (status_update == false) {
        res.send("Um erro ocorreu");
      } else {
        res.send("Etapa Concluida");
      }
    }
  }
}

export default new QuantitativeController();
