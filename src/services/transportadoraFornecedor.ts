import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type data = {
  fornecedorId: number;
  transportadoraId: number;
};

class TrasportadoraFornecedorServices {
  async get() {
    try {
      const transportadoraFornecedor =
        await prisma.transportadoraFornecedor.findMany({
          select: {
            id: true,
            fornecedorId: true,
            transportadoraId: true,
          },
        });
      if (transportadoraFornecedor.length === 0) {
        throw new Error("Nenhuma TransportadoraFornecedor encontrada");
      }
      return transportadoraFornecedor;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async post(data: data) {
    try {
      const transportadoraFornecedor =
        await prisma.transportadoraFornecedor.create({
          data: {
            fornecedorId: data.fornecedorId,
            transportadoraId: data.transportadoraId,
          },
        });
      return transportadoraFornecedor;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar TransportadoraFornecedor");
    }
  }

  async delete(idTransportadoraFornecedor: number) {
    try {
      const deletarTransportadoraFornecedor =
        await prisma.transportadoraFornecedor.delete({
          where: {
            id: idTransportadoraFornecedor,
          },
        });
      return deletarTransportadoraFornecedor;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao excluir TransportadoraFornecedor");
    }
  }
}

export default new TrasportadoraFornecedorServices();
