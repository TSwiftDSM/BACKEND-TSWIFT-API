import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostFornecedor {
  async post(data: any) {
    try {
      const novoFornecedor = await prisma.fornecedor.create({
        data: data,
      });
      return novoFornecedor;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar fornecedor");
    }
  }
}

export default new PostFornecedor();
