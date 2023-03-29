import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function getProducts(id: number): Promise<object>{
    try{
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
        return products
    }catch(exception){
        console.log(`Uma exceção ocorreu: ${exception}`)
        return {}
    }
}

class QuantitativeController {
    async get (req: Request, res: Response) {
        const id = {
            id: Number(req.params.deliveryId)
        };

        let products = await getProducts(id["id"]);

        products = Object.assign(products, id);
        console.log(products)
        res.render("quantitative", {products_object: products})
    }
    
    async post (req: Request, res: Response) {
        const body = req.body
        const array_body: Array<string> = []
        
        for (const key in body) {
            array_body.push(body[key])    
        }

        res.send(array_body)     
    }
}

export default new QuantitativeController;
