/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { number, string } from "joi";

const prisma = new PrismaClient();

class QualitativeStageController {

  async get(req: Request, res: Response) {
    
    
    const { qualityTests = {
      idProducts: Number, // Id dos produtos
      idQuality: Number, // Id dos testes de qualidade
      approved: Boolean, // Se foi aprovado ou não
      mandatory: Boolean // Se é obrigatório ou não ser aprovado
    } } = req.body

    //res.render("test");
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
    //res.send(qualitiesProducts)
    res.render("qualityStage", { qualitiesProducts: qualitiesProducts });
  }
}

export default new QualitativeStageController();
