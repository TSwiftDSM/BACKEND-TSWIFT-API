import { Request, Response } from "express";
import entregaProdutosServices from "../services/entregaProdutosServices";

class EntregaProduto {
  async getPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const entregasProdutos = await entregaProdutosServices.getPorId(
        parseInt(id)
      );
      res.status(200).json(entregasProdutos);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async getPorIdEntrega(req: Request, res: Response) {
    try {
      const { idEntrega } = req.params;
      const entregasProdutos = await entregaProdutosServices.getPorIdEntrega(
        parseInt(idEntrega)
      );
      res.status(200).json(entregasProdutos);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async get(req: Request, res: Response) {
    try {
      const entregasProdutos = await entregaProdutosServices.get();
      res.status(200).json(entregasProdutos);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async post(req: Request, res: Response) {
    try {
      //
      const data = req.body;
      const novoEntregaProduto = await entregaProdutosServices.post(data);
      return res.status(201).json(novoEntregaProduto);
    } catch {
      res.status(401);
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await entregaProdutosServices.delete(parseInt(id));
      res.status(200).send("EntregaProduto deletado");
    } catch {
      res.send("Erro ao deletar EntregaProduto");
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const entregaProduto = await entregaProdutosServices.update(
        data,
        parseInt(id)
      );
      res.status(201).json(entregaProduto);
    } catch {
      res.send("Erro ao alterar EntregaProduto");
    }
  }
}

export default new EntregaProduto();
