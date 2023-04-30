import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UpdateFornecedor {
  async update(data: any, id: number) {
    try {
      const fornecedorAtualizado = await prisma.fornecedor.update({
        where: {
          id: id,
        },
        data: {
          nomeFantasia: data.nomeFantasia,
          fornecedorCNPJ: data.fornecedorCNPJ,
          razaoSocial: data.razaoSocial,
          endereco: data.endereco,
          transportadora: data.transporadora,
          fornecedor: data.fornecedor,
        },
      });
      return fornecedorAtualizado;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar fornecedor");
    }
  }
}

export default new UpdateFornecedor();
