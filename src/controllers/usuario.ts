import { Request, Response } from "express";
import UsuarioServices from "../services/usuario";

class UsuarioController {
  async get(req: Request, res: Response) {
    //GET para pegar todos os usuários
    try {
      const usuarios = await UsuarioServices.getTodosUsuarios();
      return res.status(200).json(usuarios);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorTipoUsuario(req: Request, res: Response) {
    // GET para pegar os usuários de acordo com o tipo de usuário
    try {
      const { tipoUsuarioId } = req.params;
      const usuarios = await UsuarioServices.getPorTipoUsuario(
        parseInt(tipoUsuarioId)
      );
      return res.status(200).json(usuarios);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async post(req: Request, res: Response) {
    // POST para cadastrar Usuário
    try {
      const data = req.body;
      await UsuarioServices.post(data);
      return res.send("Usuario cadastrado com sucesso").status(200);
    } catch {
      res.send("Erro ao cadastrar usuário");
    }
  }

  async getPorId(req: Request, res: Response) {
    // GET para pegar um unico usuário pelo ID
    try {
      const { idUsuario } = req.params;
      const usuario = await UsuarioServices.getPorId(parseInt(idUsuario));
      return res.status(200).json(usuario);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async update(req: Request, res: Response) {
    // UPDATE para atualizar informações do usuário pelo ID
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
    // DELETE para deletar um usuário pelo ID
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
