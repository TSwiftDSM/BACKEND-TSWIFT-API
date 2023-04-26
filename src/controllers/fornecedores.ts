import { Request, Response } from "express";

import getFornecedores from "../services/getFornecedores";
import postFornecedor from "../services/postFornecedor";
import deleteFornecedores from "../services/deleteFornecedores";
import updateFornecedor from "../services/updateFornecedor";


class FornecedorController {
    //

    async get(req: Request, res: Response) {
        try {
            const fornecedores = await getFornecedores.get()
            return res.status(200).json(fornecedores)
        } catch {
            res.send("Erro ao retornar dados");
        }
    }
    async post(req: Request, res: Response) {
        try {
            const data = req.body
            const fornecedor = await postFornecedor.post(data)
            return res.status(201).json(fornecedor)
        } catch {
            res.send("Erro ao criar Fornecedor");
        }
    }
    async delete(req: Request, res: Response) {

        try {
            const { id } = req.params
            await deleteFornecedores.delete(parseInt(id))
            res.status(200).send("Fornecedor deletada");
        } catch {
            res.send("Erro ao deletar Fornecedor");
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body;
            const fornecedorAtualizado = await updateFornecedor.update(data, parseInt(id))
            res.status(201).json(fornecedorAtualizado);
        } catch {
            res.send("Erro ao Alterar Fornecedore")
        }
    }

}

export default new FornecedorController();