
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


class Menu {
    //
    async PesquisaPedidos(req: Request, res: Response) {
        //
        const numeroPedido: string = req.body.numeroPedido
        
        const pedidos = await prisma.entrega.findMany({
            where: {
                numeroPedido: {
                    startsWith: numeroPedido
                }
            }
        })
        res.send(pedidos)
    }
}

export default new Menu();