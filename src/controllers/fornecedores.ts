import { Request, Response } from "express";
import fornecedorServices from "../services/fornecedorServices";
import verificaPermissao from "../services/verificaPermissao";
import { Permissoes } from "../data/permissoes";

class FornecedorController {
  async getTransportadora(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const transportadoras = await fornecedorServices.getTransportadora();
      return res.status(200).json(transportadoras);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async getTransportadoraPorId(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { id } = req.params;
      const transportadoras = await fornecedorServices.getPorIdTransportadora(
        parseInt(id)
      );
      return res.status(200).json(transportadoras);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getTransportadoraPorNome(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { nomeFantasia } = req.params;
      const transportadora = await fornecedorServices.getPorNomeTransportadora(
        nomeFantasia
      );
      return res.status(200).json(transportadora);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorId(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { id } = req.params;
      const fornecedores = await fornecedorServices.getPorId(parseInt(id));
      return res.status(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getNomePornome(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { nomeFantasia } = req.params;
      const fornecedores = await fornecedorServices.getPornomeNome(
        nomeFantasia
      );
      return res.status(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorNome(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { nomeFantasia } = req.params;
      const fornecedores = await fornecedorServices.getPorNome(nomeFantasia);
      return res.status(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const fornecedores = await fornecedorServices.get();
      return res.status(200).json(fornecedores);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }
  async post(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const data = req.body;
      const fornecedor = await fornecedorServices.post(data);
      return res.status(201).json(fornecedor);
    } catch {
      res.send("Erro ao criar Fornecedor");
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { id } = req.params;
      const resp = await fornecedorServices.delete(parseInt(id));
      res.status(200).send(resp);
    } catch {
      res.status(400).send("Erro ao deletar Fornecedor");
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.FORNECEDORES)
      if (!permissao) {
        return res.status(401)
      }
      const { id } = req.params;
      const data = req.body;
      const fornecedorAtualizado = await fornecedorServices.update(
        data,
        parseInt(id)
      );
      res.status(201).json(fornecedorAtualizado);
    } catch {
      res.send("Erro ao Alterar Fornecedor");
    }
  }
}

export default new FornecedorController();
