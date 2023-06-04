import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class RegraQuantitativa {

    async get(req: Request, res: Response) {
        //
        const regraQuantitativa = await prisma.regraQuantitativa.findUnique({
            where: {
                id: 1
            },
            select: {
                porcentagem: true
            }
        });
        return res.status(200).json(regraQuantitativa);
    }
    async put(req: Request, res: Response) {
        const { data } = req.body
        const regraQuantitativa = await prisma.regraQuantitativa.update({
            where: {
                id: 1
            },
            data: {
                porcentagem: data.porcentagem
            }
        });
        return res.status(201).json(regraQuantitativa);
    }


}

export default new RegraQuantitativa();