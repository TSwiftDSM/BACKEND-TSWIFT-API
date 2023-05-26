import { Request, Response } from "express";
import autenticadorServices from "../services/autenticadorServices";

class Autenticador {
  async autenticar(req: Request, res: Response) {
    try {
      const { login, senha } = req.body;
      const usuario = await autenticadorServices.autenticarUsuario(
        login,
        senha
      );
      const tokenUsuario = await autenticadorServices.geradorToken(usuario);
      res.json({
        usuario,
        tokenUsuario,
      });
    } catch {
      res.status(401);
    }
  }
}

export default new Autenticador();
