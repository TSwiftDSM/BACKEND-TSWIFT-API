import { Request, Response } from "express";
import getTransportadora from "../services/fornecedores/getTransportadora";
import getTransportadoraPorId from "../services/fornecedores/getTransportadoraPorId";
import getTransportadoraPorNome from "../services/fornecedores/getTransportadoraPorNome";
import getFornecedoresPorId from "../services/fornecedores/getFornecedoresPorId";
import getFornecedoresPorNome from "../services/fornecedores/getFornecedoresPorNome";
import getFornecedores from "../services/fornecedores/getFornecedores";
import postFornecedor from "../services/fornecedores/postFornecedor";
import deleteFornecedores from "../services/fornecedores/deleteFornecedores";
import updateFornecedor from "../services/fornecedores/updateFornecedor";



class FornecedorController {
  async getTransportadora(req: Request, res: Response) {
    try {
      const transporadoras = await getTransportadora.get();
      return res.sendStatus(200).json(transporadoras);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async getTransportadoraPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const transporadoras = await getTransportadoraPorId.getPorId(
        parseInt(id)
      );
      return res.sendStatus(200).json(transporadoras);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getTransporadoraPorNome(req: Request, res: Response) {
    try {
      const { nomeFantasia } = req.params;
      const transporadora = await getTransportadoraPorNome.getPorNome(
        nomeFantasia
      );
      return res.sendStatus(200).json(transporadora);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const fornecedores = await getFornecedoresPorId.getPorId(parseInt(id));
      return res.sendStatus(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorNome(req: Request, res: Response) {
    try {
      const { nomeFantasia } = req.params;
      const fornecedores = await getFornecedoresPorNome.getPorNome(
        nomeFantasia
      );
      return res.sendStatus(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const fornecedores = await getFornecedores.get();
      return res.status(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async post(req: Request, res: Response) {
    try {
      const data = req.body;
      const fornecedor = await postFornecedor.post(data);
      return res.status(201).json(fornecedor);
    } catch {
      res.send("Erro ao criar Fornecedor");
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await deleteFornecedores.delete(parseInt(id));
      res.status(200).send("Fornecedor deletada");
    } catch {
      res.send("Erro ao deletar Fornecedor");
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const fornecedorAtualizado = await updateFornecedor.update(
        data,
        parseInt(id)
      );
      res.status(201).json(fornecedorAtualizado);
    } catch {
      res.send("Erro ao Alterar Fornecedore");
    }
  }
}

export default new FornecedorController();
