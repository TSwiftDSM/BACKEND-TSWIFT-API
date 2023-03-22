import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class QualitativeStageController {
    async get(req: Request, res: Response) {
        const { idDelivery } = req.body
        const deliveryProduct = await prisma.deliveriesProducts.findMany({
            where: {
                idDelivery: idDelivery
            },
            select: {
                idProduct: true
            }
        })
        const qualitiesProducts = await prisma.qualitiesProducts.findMany({
            where: {
                idProduct: { in: [deliveryProduct] },
            },
            include: {
                qualitiesTests: {
                    select: {
                        name: true
                    }
                },
                products: {
                    select: {
                        productName: true
                    }
                }
            }

        })



    }
}

export default new QualitativeStageController();