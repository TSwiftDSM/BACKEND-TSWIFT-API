import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class AutenticadorServices {
  async geradorToken(usuario: any) {
    try {
      const token = await jwt.sign({ usuarioPermissao: usuario }, "segredo", {
        expiresIn: "1d",
      });
      return token;
    } catch {
      console.log("Não foi possível gerar o Token");
    }
  }
  async autenticarUsuario(login: string, senha: string) {
    try {
      const usuario = await prisma.usuario.findFirst({
        where: {
          login: login,
          senha: senha,
        },
        select: {
          id: true,
          PermissaoUsuario: {
            select: {
              permissaoId: true,
            },
          },
        },
      });

      if (!usuario) {
        throw new Error("Nenhum usuario encontrado");
      }
      return usuario;
    } catch (e: any) {
      console.log(e.message);
    }
  }
}

export default new AutenticadorServices();
