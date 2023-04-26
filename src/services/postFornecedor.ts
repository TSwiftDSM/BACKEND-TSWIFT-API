import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostFornecedor {
  async post(data: any) {
    try {
      const novoFornecedor = await prisma.fornecedor.create({
          data: {
              nomeFantasia: data.nomeFantasia,
              fornecedorCNPJ: data.fornecedorCNPJ,
              razaoSocial: data.razaoSocial,
              endereco: data.endereco,
              transportadora: data.transporadora,
              fornecedor: data.fornecedor
        }
      });
      return novoFornecedor;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar fornecedor");
    }
  }
}

export default new PostFornecedor();
