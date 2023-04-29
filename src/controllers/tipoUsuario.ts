import { Request, Response } from "express";
import TipoUsuarioServices from "../services/tipoUsuario";

class TipoUsuarioController {
  async get(req: Request, res: Response) {
    //GET para pegar todos os tipos de usuários
    try {
      const TipoUsuarios = await TipoUsuarioServices.getTodosTiposUsuario();
      return res.status(200).json(TipoUsuarios);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async getPorNome(req: Request, res: Response) {
    // GET para pegar os tipos de usuários de acordo com o nome
    try {
      const nome = req.query.nome;
      const TipoUsuarios = await TipoUsuarioServices.getPorNome(String(nome));
      return res.status(200).json(TipoUsuarios);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async post(req: Request, res: Response) {
    // POST para cadastrar Tipo de Usuário
    try {
      const data = req.body;
      await TipoUsuarioServices.post(data);
      return res.send("Tipo de Usuario cadastrado com sucesso").status(200);
    } catch {
      res.send("Erro ao cadastrar Tipo de usuário");
    }
  }

  async update(req: Request, res: Response) {
    // UPDATE para atualizar informações do Tipo de usuário pelo ID
    try {
      const { idTipoUsuario } = req.params;
      const data = req.body;
      await TipoUsuarioServices.update(parseInt(idTipoUsuario), data);
      return res.send("Tipo de Usuario atualizado com sucesso").status(200);
    } catch {
      res.send("Erro ao atualizar Tipo de usuário");
    }
  }

  async delete(req: Request, res: Response) {
    // DELETE para deletar um Tipo de usuário pelo ID
    try {
      const { idTipoUsuario } = req.params;
      await TipoUsuarioServices.delete(parseInt(idTipoUsuario));
      return res.send("Tipo de Usuario apagado com sucesso").status(200);
    } catch {
      res.send("Erro ao apagar Tipo de usuário");
    }
  }
}

export default new TipoUsuarioController();
