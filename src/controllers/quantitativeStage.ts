import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface updateObject {
  id_entrega_produto: number;
  especificacao: string;
  quantidade: number;
}

async function getProducts(id: number): Promise<object> {
  try {
    const products = await prisma.entregaProduto.findMany({
      where: {
        EntregaId: id,
      },
      select: {
        id: true,
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
  body: Array<updateObject>
): Promise<Array<object>> {
  const response_array: Array<object> = [];

  for (let cont = 0; cont <= body.length - 1; cont++) {
    try {
      const updatedDeliveryProduct = await prisma.entregaProduto.update({
        where: {
          id: body[cont].id_entrega_produto,
        },
        data: {
          especificacao: body[cont].especificacao,
          quantidade: body[cont].quantidade,
          pesoReal: body[cont].quantidade,
        },
      });
      response_array.push(updatedDeliveryProduct);
    } catch (exception) {
      response_array.push({});
    }
  }

  return response_array;
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
    const req_json: Array<updateObject> = req.body.data;

    console.log(req_json);

    const res_array: Array<object> = await updateQuantitative(req_json);

    res.send(res_array);
  }
}

export default new QuantitativeController();
