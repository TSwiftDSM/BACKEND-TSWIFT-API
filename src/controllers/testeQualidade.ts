import { Request, Response } from "express";
import testeQualidadeServices from "../services/testeQualidadeServices";

class TesteQualidade {
    async get(req: Request, res: Response) {
        try {
            const testeQualidades = await testeQualidadeServices.get()
            res.status(200).json(testeQualidades)
        } catch {
            res.send("Erro ao retornar dados");
        }
    }
    async getPorId(req: Request, res: Response) {
        try {
            const { id } = req.params
            const testeQualidade = await testeQualidadeServices.getPorId(parseInt(id))
            res.status(200).json(testeQualidade)
        } catch {
            res.send("Erro ao retornar dados");
        }
    }
    async post(req: Request, res: Response) {
        try {
            const data = req.body;
            const testeQualidade = testeQualidadeServices.post(data)
            return res.status(201).json(testeQualidade);
        } catch {
            res.send("Erro ao criar Teste de Qualidade");
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = req.body
            const testeQualidade = await testeQualidadeServices.update(data, parseInt(id))
            res.status(201).json(testeQualidade);
        } catch {
            res.send("Erro ao Alterar Teste Qualidade");
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            await testeQualidadeServices.delete(parseInt(id))
            res.status(200).send("Fornecedor deletada");
        } catch {
            res.send("Erro ao Deletar Teste Qualidade");
        }
    }
}

export default new TesteQualidade();