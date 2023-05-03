import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class Fornecedor {
  async get() {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          fornecedor: true,
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async getPorId(id: number) {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          fornecedor: true,
          id: id,
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async getPorNome(nomeFantasia: string) {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          fornecedor: true,
          nomeFantasia: {
            startsWith: nomeFantasia,
          },
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async getTransportadora() {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          transportadora: true,
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async getPorIdTransportadora(id: number) {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          transportadora: true,
          id: id,
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async getPorNomeTransportadora(nomeFantasia: string) {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          transportadora: true,
          nomeFantasia: {
            startsWith: nomeFantasia,
          },
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async post(data: any) {
    try {
      const novoFornecedor = await prisma.fornecedor.create({
        data: {
          nomeFantasia: data.nomeFantasia,
          fornecedorCNPJ: data.fornecedorCNPJ,
          razaoSocial: data.razaoSocial,
          endereco: data.endereco,
          transportadora: data.transporadora,
          fornecedor: data.fornecedor,
        },
      });
      return novoFornecedor;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar fornecedor");
    }
  }
  async update(data: any, id: number) {
    try {
      const fornecedorAtualizado = await prisma.fornecedor.update({
        where: {
          id: id,
        },
        data: data,
      });
      return fornecedorAtualizado;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar fornecedor");
    }
  }
  async delete(id: number) {
    try {
      const fornecedorDeletado = await prisma.fornecedor.delete({
        where: {
          id: id,
        },
      });
      return fornecedorDeletado;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao excluir fornecedor");
    }
  }
}

export default new Fornecedor();
