import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GetFornecedorPorID {
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
}

export default new GetFornecedorPorID();
