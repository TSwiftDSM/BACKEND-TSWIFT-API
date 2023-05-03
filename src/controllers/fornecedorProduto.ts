import { Request, Response } from "express";
import fornecedorProdutoServices from "../services/fornecedorProdutoServices";

class FornecedorProduto {
  async getPorIdProdutoFornecedor(req: Request, res: Response) {
    try {
      const { idProduto, idFornecedor } = req.params;
      const fornecedorProduto =
        await fornecedorProdutoServices.getPorIdProdutoIdFornecedor(
          parseInt(idProduto),
          parseInt(idFornecedor)
        );
      return res.status(200).json(fornecedorProduto);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorIdFornecedor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fornecedorProduto =
        await fornecedorProdutoServices.getPorIdFornecedor(parseInt(id));
      return res.status(200).json(fornecedorProduto);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const fornecedorProduto = await fornecedorProdutoServices.get();
      return res.status(200).json(fornecedorProduto);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async post(req: Request, res: Response) {
    try {
      const data = req.body;
      const fornecedorProduto = await fornecedorProdutoServices.post(data);
      return res.status(201).json(fornecedorProduto);
    } catch {
      res.send("Erro ao Cadastrar o Produto do Fornecedor");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { idProduto, idFornecedor } = req.params;
      await fornecedorProdutoServices.delete(
        parseInt(idProduto),
        parseInt(idFornecedor)
      );
      res.status(200).send("Produto do Fornecedor deletado");
    } catch {
      res.send("Erro ao Deletar o Produto do Fornecedor");
    }
  }
}

export default new FornecedorProduto();
