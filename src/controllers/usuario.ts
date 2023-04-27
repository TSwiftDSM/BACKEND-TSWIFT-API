import { Request, Response } from "express";
import UsuarioServices from "../services/usuario";

class UsuarioController {
  async get(req: Request, res: Response) {
    try {
      const tipoUsuarioId = req.body.tipoUsuarioId;
      const usuarios = await UsuarioServices.get(parseInt(tipoUsuarioId));
      return res.status(200).json(usuarios);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async post(req: Request, res: Response) {
    try {
      const data = req.body;
      await UsuarioServices.post(data);
      return res.send("Usuario cadastrado com sucesso").status(200);
    } catch {
      res.send("Erro ao cadastrar usuário");
    }
  }

  async getPorId(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;
      const usuario = await UsuarioServices.getPorId(parseInt(idUsuario));
      return res.status(200).json(usuario);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;
      const data = req.body;
      await UsuarioServices.update(parseInt(idUsuario), data);
      return res.send("Usuario atualizado com sucesso").status(200);
    } catch {
      res.send("Erro ao atualizar usuário");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;
      await UsuarioServices.delete(parseInt(idUsuario));
      return res.send("Usuario apagado com sucesso").status(200);
    } catch {
      res.send("Erro ao apagar usuário");
    }
  }
}

export default new UsuarioController();
