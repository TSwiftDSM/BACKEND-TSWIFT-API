import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type data = {
  tipoUsuario: string;
};

class TipoUsuarioServices {
  async getTodosTiposUsuario() {
    try {
      const tipoUsuarios = await prisma.tipoUsuario.findMany({
        select: {
          id: true,
          tipoUsuario: true,
        },
      });
      if (tipoUsuarios.length === 0) {
        throw new Error("Nenhum Tipo de Usuário encontrado");
      }
      return tipoUsuarios;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getPorNome(nome: string) {
    try {
      const TipoUsuario = await prisma.tipoUsuario.findMany({
        where: {
          tipoUsuario: {
            startsWith: nome,
          },
        },
        select: {
          id: true,
          tipoUsuario: true,
        },
      });
      if (TipoUsuario.length === 0) {
        throw new Error("Nenhum Tipo de Usuário encontrado");
      }
      return TipoUsuario;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async post(data: data) {
    try {
      const novoTipoUsuario = await prisma.tipoUsuario.create({
        data: {
          tipoUsuario: data.tipoUsuario,
        },
      });
      return novoTipoUsuario;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar novo Tipo de Usuário");
    }
  }

  async update(idTipoUsuario: number, data: data) {
    try {
      const atualizarTipoUsuario = await prisma.tipoUsuario.update({
        where: {
          id: idTipoUsuario,
        },
        data: {
          tipoUsuario: data.tipoUsuario,
        },
      });
      return atualizarTipoUsuario;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar Tipo de Usuário");
    }
  }

  async delete(idTipoUsuario: number) {
    try {
      const deletarTipoUsuario = await prisma.tipoUsuario.delete({
        where: {
          id: idTipoUsuario,
        },
      });
      return deletarTipoUsuario;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao excluir Tipo de Usuário");
    }
  }
}

export default new TipoUsuarioServices();
