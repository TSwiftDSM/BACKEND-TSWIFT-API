//import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

class VerificarPermissao {
  async validaPermissao(authorization: string, permissaoAcesso: number) {
    try {
      const token = authorization.replace("Bearer", "").trim();
      const permissao = (await jwt.verify(token, "segredo")) as any; // Supondo que a interface Usuario seja definida corretamente

      let acessar = false;

      for (const acesso of permissao.usuarioPermissao.PermissaoUsuario) {
        if (acesso.permissaoId === permissaoAcesso) {
          acessar = true;
          break;
        }
      }
      return acessar;
    } catch {
      return false;
    }
  }
}

export default new VerificarPermissao();
