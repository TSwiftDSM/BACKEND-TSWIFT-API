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
          razaoSocial: true,
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
      const fornecedores = await prisma.fornecedor.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          nomeFantasia: true,
          fornecedorCNPJ: true,
          endereco: true,
          transportadora: true,
          fornecedor: true,
          razaoSocial: true,
        },
      });
      if (!fornecedores) {
        throw new Error("Nenhum fornecedor encontrado");
      }
      return fornecedores;
    } catch (e: any) {
      console.log(e.message);
    }
  }

  async getPornomeNome(nomeFantasia: string) {
    try {
      const fornecedores = await prisma.fornecedor.findMany({
        where: {
          fornecedor: true,
          nomeFantasia: {
            startsWith: nomeFantasia,
          },
        },
        select: {
          nomeFantasia: true,
        },
      });
      if (fornecedores.length === 0) {
        throw new Error("Nenhum fornecedor encontrado");
      }
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
          razaoSocial: true,
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
          razaoSocial: true,
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
          razaoSocial: true,
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
          razaoSocial: true,
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
      const fornecedor = await prisma.fornecedor.findUnique({
        where: {
          fornecedorCNPJ: data.fornecedorCNPJ
        }
      });
      if (!fornecedor) {
        return await prisma.fornecedor.create({
          data: {
            nomeFantasia: data.nomeFantasia,
            fornecedorCNPJ: data.fornecedorCNPJ,
            razaoSocial: data.razaoSocial,
            endereco: data.endereco,
            transportadora: data.transportadora,
            fornecedor: data.fornecedor,
          },
        });
      } 
      if (fornecedor) {
        const updateData: { fornecedor?: boolean; transportadora?: boolean } = {};
    
        if (data.transportadora) {
          updateData.transportadora = true;
        }
    
        if (data.fornecedor) {
          updateData.fornecedor = true;
        }
        return await prisma.fornecedor.update({
          where: {
            fornecedorCNPJ: data.fornecedorCNPJ
          },
          data: updateData
        });
      }
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
      const res = await prisma.$transaction([
        prisma.fornecedorProduto.deleteMany({
          where: {
            fornecedorId: id, // o ID do registro em ModeloB correspondente que deseja excluir
          },
        }),
        prisma.transportadoraFornecedor.deleteMany({
          where: {
            fornecedorId: id,
          },
        }),
        prisma.fornecedor.deleteMany({
          where: {
            id: id,
          },
        }),
      ]);
      return res;
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao atualizar fornecedor");
    }
  }
}

export default new Fornecedor();
