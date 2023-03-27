/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { number, string } from "joi";

const prisma = new PrismaClient();

class QualitativeStageController {
  async selectDeliveryProduct(idDelivery: number) {
    const deliveryProduct = await prisma.deliveryProduct.findMany({
      where: {
        idDelivery: idDelivery,
      },
      select: {
        idProduct: true,
      },
    });
    return deliveryProduct;
  }
  async selectDelivertProducts(listDeliveryProducts: Array<number>) {
    const qualitiesProducts = await prisma.qualityProduct.findMany({
      where: {
        Product: {
          id: {
            in: listDeliveryProducts,
          },
        },
      },
      select: {
        QualityTest: {
          select: {
            id: true,
            name: true,
          },
        },
        Product: {
          select: {
            id: true,
            productName: true,
          },
        },
      },
    });
    return qualitiesProducts;
  }
  async get(req: Request, res: Response) {
    res.render("test");
  }
  async post(req: Request, res: Response) {
    const { idDelivery } = req.body;

    console.log(req.body);

    console.log(idDelivery);
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
    //res.send(qualitiesProducts)
    res.render("qualityTest", { qualitiesProducts: qualitiesProducts });
  }
}

export default new QualitativeStageController();
