import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type data = {
  nome: string;
  login: string;
  senha: string;
  cpf: string;
  dataNascimento: Date;
  tipoUsuarioId: number;
};

class UsuarioServices {
  async getTodosUsuarios() {
    try {
      const usuarios = await prisma.usuario.findMany({
        select: {
          id: true,
          nome: true,
          login: true,
          senha: true,
          cpf: true,
          dataNascimento: true,
          tipoUsuarioId: true,
        },
      });
      if (usuarios.length === 0) {
        throw new Error("Nenhum usuário encontrado");
      }
      return usuarios;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getPorTipoUsuario(tipoUsuarioId: number) {
    try {
      const usuarios = await prisma.usuario.findMany({
        where: {
          tipoUsuarioId: tipoUsuarioId,
        },
        select: {
          id: true,
          nome: true,
          login: true,
          senha: true,
          cpf: true,
          dataNascimento: true,
          tipoUsuarioId: true,
        },
      });
      if (usuarios.length === 0) {
        throw new Error("Nenhum usuário encontrado");
      }
      return usuarios;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getPorNome(nome: string) {
    try {
      const usuario = await prisma.usuario.findMany({
        where: {
          nome: {
            startsWith: nome,
          },
        },
        select: {
          id: true,
          nome: true,
          login: true,
          senha: true,
          cpf: true,
          dataNascimento: true,
          tipoUsuarioId: true,
        },
      });
      if (usuario.length === 0) {
        throw new Error("Nenhum usuário encontrado");
      }
      return usuario;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async post(data: data) {
    try {
      const novoUsuario = await prisma.usuario.create({
        data: {
          nome: data.nome,
          login: data.login,
          senha: data.senha,
          cpf: data.cpf,
          dataNascimento: new Date(data.dataNascimento),
          tipoUsuarioId: data.tipoUsuarioId,
        },
      });
      return novoUsuario;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar novo usuário");
    }
  }

  async getPorId(idUsuario: number) {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: {
          id: idUsuario,
        },
        select: {
          id: true,
          nome: true,
          login: true,
          senha: true,
          cpf: true,
          dataNascimento: true,
          tipoUsuarioId: true,
        },
      });
      if (!usuario) {
        throw new Error("Nenhum usuário encontrado");
      }
      return usuario;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async update(idUsuario: number, data: data) {
    try {
      const atualizarUsuario = await prisma.usuario.update({
        where: {
          id: idUsuario,
        },
        data: {
          nome: data.nome,
          login: data.login,
          senha: data.senha,
          cpf: data.cpf,
          dataNascimento: new Date(data.dataNascimento),
          tipoUsuarioId: data.tipoUsuarioId,
        },
      });
      return atualizarUsuario;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar usuário");
    }
  }

  async delete(idUsuario: number) {
    try {
      const deletarUsuario = await prisma.usuario.delete({
        where: {
          id: idUsuario,
        },
      });
      return deletarUsuario;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao excluir usuário");
    }
  }
}

export default new UsuarioServices();
