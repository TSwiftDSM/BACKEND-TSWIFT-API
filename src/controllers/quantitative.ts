import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class QuantitativeController {
    private async getProducts(id: number): Promise<object>{
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

    // private async createResponseObject(body: Array<string>): Promise<Array<object>>{
    //     const resp_object: Array<object> = [];

    //     for (let i=1; i <= Object.keys(body).length; i=i+4){
    //         const id_produto: string = body[i].substring(0,1)
    //         resp_object.push({
    //             idDelivery: body[0],
    //             idProduct: id_produto,
    //             specification: body[i],
    //             unit: Number(body[i+1]),
    //             quantity: Number(body[i+2]),
    //             actualWeight: Number(body[i+1]) + Number(body[i+2])
    //         })
    //     }

    //     console.log(resp_object)
    //     return resp_object
    // }

    async get (req: Request, res: Response) {
        const id = {
            id: Number(req.params.deliveryId)
        };

        let products = this.getProducts(id["id"]);

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

        const resp_object: Array<object> = [];

        for (let i=1; i <= Object.keys(array_body).length; i=i+4){
            const id_produto: string = array_body[i].substring(0,1)
            resp_object.push({
                idDelivery: array_body[0],
                idProduct: id_produto,
                specification: array_body[i],
                unit: Number(array_body[i+1]),
                quantity: Number(array_body[i+2]),
                actualWeight: Number(array_body[i+1]) + Number(array_body[i+2])
            })
        }  

        res.send(resp_object)     
    }
}

export default new QuantitativeController;
