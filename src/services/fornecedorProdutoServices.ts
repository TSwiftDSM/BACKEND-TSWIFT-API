import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FornecedorProdutoServices {
  async getPorIdProdutoIdFornecedor(idProduto: number, idFornecedor: number) {
    try {
      const fornecedorProduto = await prisma.fornecedorProduto.findMany({
        where: {
          fornecedorId: idFornecedor,
          produtoId: idProduto,
        },
        select: {
          Produto: {
            select: {
              id: true,
              nomeProduto: true,
            },
          },
          Fornecedor: {
            select: {
              id: true,
              nomeFantasia: true,
            },
          },
        },
      });
      if (fornecedorProduto.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      const fornecedorPorProduto = fornecedorProduto.reduce(
        (acc: any, { Fornecedor, Produto }: any) => {
          (acc as any)[Fornecedor.id] ??= { ...Fornecedor, Produto: [] };
          (acc as any)[Fornecedor.id].Produto.push(Produto);
          return acc;
        },
        {}
      );

      return fornecedorPorProduto;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getPorIdFornecedor(id: number) {
    try {
      const fornecedorProduto = await prisma.fornecedorProduto.findMany({
        where: {
          fornecedorId: id,
        },
        select: {
          Produto: {
            select: {
              id: true,
              nomeProduto: true,
            },
          },
          Fornecedor: {
            select: {
              id: true,
              nomeFantasia: true,
            },
          },
        },
      });
      if (fornecedorProduto.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      const fornecedorPorProduto = fornecedorProduto.reduce(
        (acc: any, { Fornecedor, Produto }: any) => {
          (acc as any)[Fornecedor.id] ??= { ...Fornecedor, Produto: [] };
          (acc as any)[Fornecedor.id].Produto.push(Produto);
          return acc;
        },
        {}
      );

      return fornecedorPorProduto;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async get() {
    try {
      const fornecedorProduto = await prisma.fornecedorProduto.findMany({
        select: {
          Produto: {
            select: {
              id: true,
              nomeProduto: true,
            },
          },
          Fornecedor: {
            select: {
              id: true,
              nomeFantasia: true,
            },
          },
        },
      });
      if (fornecedorProduto.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      const fornecedorPorProduto = fornecedorProduto.reduce(
        (acc: any, { Fornecedor, Produto }: any) => {
          (acc as any)[Fornecedor.id] ??= { ...Fornecedor, Produto: [] };
          (acc as any)[Fornecedor.id].Produto.push(Produto);
          return acc;
        },
        {}
      );

      return fornecedorPorProduto;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async post(data: any) {
    try {
      const fornecedorProduto = await prisma.fornecedorProduto.create({
        data: {
          produtoId: data.idProduto,
          fornecedorId: data.idFornecedor,
        },
      });
      return fornecedorProduto;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar fornecedor");
    }
  }

  async delete(idProduto: number, idFornecedor: number) {
    try {
      const fornecedorProduto = await prisma.fornecedorProduto.delete({
        where: {
          produtoId_fornecedorId: {
            produtoId: idProduto,
            fornecedorId: idFornecedor,
          },
        },
      });
      return fornecedorProduto;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar fornecedor");
    }
  }
}

export default new FornecedorProdutoServices();
