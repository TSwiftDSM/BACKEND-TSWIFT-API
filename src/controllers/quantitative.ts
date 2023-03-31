import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function getProducts(id: number): Promise<object>{
    try{
        const products = await prisma.entregaProduto.findMany({
            where:{
                EntregaId: id
            },
            select:{
                id: true,
                Produto:{
                    select:{
                        id:true,
                        nomeProduto:true
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

async function updateQuantitative(body: Array<string>): Promise<Array<object>> {
    const response_array: Array<object> = [];

    for(let i=1; i < body.length; i = i + 5){
        const id_dp = Number(body[i])
        try{
            const updatedDeliveryProduct = await prisma.entregaProduto.update({
                where: { 
                        id: id_dp
                },
                data: {
                    especificacao: body[i+1],
                    unidade: body[i+2],
                    quantidade: Number(body[i+3]),
                    pesoReal: (Number(body[i+3]) * Number(body[i+4])),
                }
            });
            response_array.push(updatedDeliveryProduct);
        } catch(exception){
            response_array.push({});
        }
    }
    return response_array;
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

        const res_array: Array<object> = await updateQuantitative(array_body)

        res.send(res_array)     
    }
}

export default new QuantitativeController;
