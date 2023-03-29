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
      console.log('TESTE 1')
  } else {
      qualitiesProducts = req.query.qualitiesProducts;
      console.log('TESTE 2')
    }
    const statusDeliveries: {
      approved: typeof qualitiesProducts.Approved
      deliveryId: typeof qualitiesProducts.idDelivery
      stepName: 'ETAPA QUALITATIVA'
      userId: 1
    }
    let aprovado = 0 
    for (const testeProduto of  qualitiesProducts){
       if (testeProduto.Approved == false){
         // Ação caso um dos produtos não tenha sido aprovado e não seja obrigatorio
         aprovado = aprovado+1;
        }
      }
    if (aprovado >0){
      // Ação caso um dos produtos não tenha sido aprovado e não seja obrigatorio
    }
    else{
      // Ação caso todos os produtos tenham sido aprovados
      const statusEntrega = await prisma.StatusDelivery.create({ data: statusDeliveries })
    }
   
    console.log('----- TESTE GET -----')
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
    (await deliveryProduct).forEach((idProdutcts: { idProduct: any; }) => {
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
      Object.defineProperty(x, 'idDelivery', {
        value: idDelivery,
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
