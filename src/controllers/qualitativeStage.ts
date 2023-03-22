/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { number, string } from "joi";

const prisma = new PrismaClient()

class QualitativeStageController {
    async get(req: Request, res: Response) {
        const { idDelivery } = req.body
        const deliveryProduct = await prisma.deliveryProduct.findMany({
            where: {
                idDelivery: idDelivery
            },
            select: {
                idProduct: true
            }
        });

        let products: Array<any> = [];

        deliveryProduct.forEach(idProdutcts => {
            products.push(idProdutcts.idProduct)
        });

        const listDeliveryProducts: Array<number> = products

        const qualitiesProducts = await prisma.qualityProduct.findMany({
            where: {
                Product: {
                    id: {
                        in: listDeliveryProducts
                    }
                }
            },
            include: {
                
                QualityTest: {
                    select: {
                        name: true
                    }
                },
                Product: {
                    select: {
                        productName: true
                    }
                }
            }

        });
        res.send(qualitiesProducts)
    }
    
}

export default new QualitativeStageController();