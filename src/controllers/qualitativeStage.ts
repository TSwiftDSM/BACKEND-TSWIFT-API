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
    console.log('teste get')
    console.log(qualitiesProducts);
  
    // Resto do código da rota
  }
  async post(req: Request, res: Response) {
    const { idDelivery } = req.body;

    const deliveryProduct = await prisma.deliveryProduct.findMany({
      where: {
        idDelivery: parseInt(idDelivery),
      },
      select: {
        idProduct: true,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products: Array<any> = [];

    // Transformando deliveryProduct Em uma lista de números com os valores dos ID's
    (await deliveryProduct).forEach((idProdutcts) => {
      products.push(idProdutcts.idProduct);
    });

    const listDeliveryProducts: Array<number> = products;

    const qualitiesProducts = await prisma.qualityProduct.findMany({
      where: {
        Product: {
          id: {
            in: listDeliveryProducts,
          },
        },
      },
      select: {
        Product: {
          select: {
            id: true,
            productName: true,
          },
        },
        QualityTest: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    for (const x of qualitiesProducts) {
      Object.defineProperty(x, 'Approved', {
        value: false,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }

    //console.log(qualitiesProducts)
    //res.send(qualitiesProducts)
    res.render("qualityStage", { qualitiesProducts: qualitiesProducts });
  }
}

export default new QualitativeStageController();
