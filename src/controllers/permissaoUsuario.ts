import { Request, Response } from "express";
import permissaoUsuarioServices from "../services/permissaoUsuarioServices";
import verificaPermissao from "../services/verificaPermissao";
import { Permissoes } from "../data/permissoes";

class PermissaoUsuario {
  async get(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.COLABORADORES)
      if (!permissao) {
        return res.status(401)
      }
      const permissaoUsuario = await permissaoUsuarioServices.get();
      return res.status(200).json(permissaoUsuario);
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
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.COLABORADORES)
      if (!permissao) {
        return res.status(401)
      }
      const { id } = req.params;
      const permissaoUsuario = await permissaoUsuarioServices.getPorId(
        parseInt(id)
      );
      return res.status(200).json(permissaoUsuario);
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
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.COLABORADORES)
      if (!permissao) {
        return res.status(401)
      }
      const data = req.body;
      const novaPermissaoUsuario = await permissaoUsuarioServices.post(data);
      return res.status(201).json(novaPermissaoUsuario);
    } catch {
      res.send("Erro ao Cadastrar Permissao de Usuário");
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.COLABORADORES)
      if (!permissao) {
        return res.status(401)
      }
      const { idUsuario, idPermissao } = req.params;
      permissaoUsuarioServices.delete(
        parseInt(idUsuario),
        parseInt(idPermissao)
      );
      res.status(200).send("Fornecedor deletada");
    } catch {
      res.send("Erro ao Deletar Permissao de Usuário");
    }
  }
}

export default new PermissaoUsuario();
