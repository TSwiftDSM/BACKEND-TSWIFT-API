import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PermissaoServices {
  async get() {
    try {
      const permissao = await prisma.permissao.findMany();
      if (permissao.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return permissao;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getPorId(id: number) {
    try {
      const permissao = await prisma.permissao.findMany({
        where: {
          id: id,
        },
        select: {
          id: true,
          descricao: true,
        },
      });
      if (permissao.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return permissao;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async post(data: any) {
    try {
      const novaPermissao = await prisma.permissao.create({
        data: {
          descricao: data.descricao,
        },
      });
      return novaPermissao;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar Permissão");
    }
  }

  async delte(id: number) {
    try {
      await prisma.permissao.delete({
        where: {
          id: id,
        },
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao Deletar Permissão");
    }
  }

  async update(data: any, id: number) {
    try {
      const permissaoAlterada = await prisma.permissao.update({
        where: {
          id: id,
        },
        data: {
          descricao: data.descricao,
        },
      });
      return permissaoAlterada;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao Alterar Permissão");
    }
  }
}

export default new PermissaoServices();
