import { Request, Response } from "express";
import permissaoServices from "../services/permissaoServices";

class Permissao {

    async get(req: Request, res: Response) {
        try {
            const permissao = await permissaoServices.get()
            return res.status(200).json(permissao);
        } catch {
            res.send("Erro ao retornar dados");
        }
    }

    async getPorId(req: Request, res: Response) {
        try {
            const { id } = req.params
            const permissao = await permissaoServices.getPorId(parseInt(id))
            return res.status(200).json(permissao);
        } catch {
            res.send("Erro ao retornar dados");
        }
    }

    async post(req: Request, res: Response) {
        try {
            const data = req.body
            const novaPermissao = await permissaoServices.post(data);
            return res.status(201).json(novaPermissao);
        } catch {
            res.send("Erro ao Cadastrar Permissao");
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = req.body
            const permissaoAlterada = await permissaoServices.update(data, parseInt(id));
            return res.status(200).json(permissaoAlterada);
        } catch {
            res.send("Erro ao Alterar Permissao");
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            permissaoServices.delte(parseInt(id))
            res.status(200).send("Fornecedor deletada");
        } catch {
            res.send("Erro ao Deletar Permissao");
        }
    }
}

export default new Permissao();