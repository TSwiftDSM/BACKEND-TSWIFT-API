import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TesteQualidadeServices {
  async getPorId(id: number) {
    try {
      const testeQualidade = await prisma.testeQualidade.findUnique({
        where: {
          id: id,
        },
      });
      if (!testeQualidade) {
        throw new Error("Nenhum Teste Qualidade encontrado");
      }
      return testeQualidade;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async getPorNome(nome: string) {
    try {
      const testeQualidade = await prisma.testeQualidade.findMany({
        where: {
          nomeTeste: {
            startsWith: nome
          }
        },
      });
      if (!testeQualidade) {
        throw new Error("Nenhum Teste Qualidade encontrado");
      }
      return testeQualidade;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async get() {
    try {
      const testeQualidades = await prisma.testeQualidade.findMany();
      if (testeQualidades.length === 0) {
        throw new Error("Nenhum Teste Qualidade encontrado");
      }
      return testeQualidades;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  async post(data: any) {
    try {
      //
      const testeQualidade = await prisma.testeQualidade.create({
        data: {
          nomeTeste: data.nomeTeste,
        },
      });
      return testeQualidade;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar Teste de Qualidade");
    }
  }
  async delete(id: number) {
    try {
      const testeQualidade = await prisma.testeQualidade.delete({
        where: {
          id: id,
        },
      });
      return testeQualidade;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar Teste de Qualidade");
    }
  }
  async update(data: any, id: number) {
    try {
      const testeQualidade = await prisma.testeQualidade.update({
        where: {
          id: id,
        },
        data: {
          nomeTeste: data.nomeTeste,
        },
      });
      return testeQualidade;
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao Alterar Teste de Qualidade");
    }
  }
}

export default new TesteQualidadeServices();
