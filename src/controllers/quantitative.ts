import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class QuantitativeController {
    async get (req: Request, res: Response) {
        const id = Number(req.params.deliveryId);
        const products = await prisma.deliveryProduct.findMany({
            where:{
                idDelivery: id
            },
            select:{
                Product:{
                    select:{
                        id:true,
                        productName:true
                    }
                }
            }
        })
        console.log(products)
        res.render("quantitative", {products_object: products})
    }
    
    async post (req: Request, res: Response) {

        res.send(req.body)
    }
}

export default new QuantitativeController;
