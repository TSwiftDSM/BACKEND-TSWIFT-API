/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { number, string } from "joi";

const prisma = new PrismaClient();

class QualitativeStageController {

  async get(req: Request, res: Response) {
    let qualitiesProducts;
    if (typeof req.query.qualitiesProducts === 'string') {
      qualitiesProducts = JSON.parse(req.query.qualitiesProducts);
  } else {
      qualitiesProducts = req.query.qualitiesProducts;
    }
    console.log('----- TESTE GET -----')
    console.log(qualitiesProducts);
  
    // Resto do código da rota
  }
  async post(req: Request, res: Response) {
    const { idDelivery } = req.body;

    const deliveryProduct = await prisma.entregaProduto.findMany({
      where: {
        EntregaId: parseInt(idDelivery),
      },
      select: {
        produtoId: true,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products: Array<any> = [];

    // Transformando deliveryProduct Em uma lista de números com os valores dos ID's
    (await deliveryProduct).forEach((idProdutcts) => {
      products.push(idProdutcts.produtoId);
    });

    const listDeliveryProducts: Array<number> = products;

    const qualitiesProducts = await prisma.qualidadeProduto.findMany({
      where: {
        Produto: {
          id: {
            in: listDeliveryProducts,
          },
        },
      },
      select: {
        Produto: {
          select: {
            id: true,
            nomeProduto: true,
          },
        },
        TesteQualidade: {
          select: {
            id: true,
            nomeTeste: true,
          },
        },
      },
    });
    for (const produtos of qualitiesProducts) {
      Object.defineProperty(produtos, 'Aprovado', {
        value: false,
        writable: true,
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(produtos, 'EntregaId', {
        value: idDelivery,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }

    res.render("qualityStage", { qualitiesProducts: qualitiesProducts });
  }
}

export default new QualitativeStageController();
