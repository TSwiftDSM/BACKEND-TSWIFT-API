import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class QualitativeStageController {
    async get(req: Request, res: Response) {
        const {idDelivery} = req.body
        const deliveryProduct = await prisma.deliveriesProducts.findMany({
            where: {
                idDelivery: idDelivery
            },
            select: {
                idProduct: true
            }
        })
        const Products = await prisma.products.findMany({
            where: {
                idProduct: { in: [deliveryProduct] },
            },
            
        })



    }
}

export default new QualitativeStageController();