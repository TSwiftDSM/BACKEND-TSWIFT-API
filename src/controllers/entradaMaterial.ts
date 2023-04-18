import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import EntradaMaterialServices from "../services/entradaMaterialServices";

const prisma = new PrismaClient();

const entradaMaterial = new EntradaMaterialServices()

class EntradaMaterial {
    async post(req: Request, res: Response) {
        //
        const data = req.body.data;
        const pedido = entradaMaterial.PesquisaEntradaMaterial(data)

        const aprovado = entradaMaterial.VerificacaoEntradaMaterial(data, pedido)

        if (await aprovado) {
            //
        }

    }
}

export default new EntradaMaterial();
