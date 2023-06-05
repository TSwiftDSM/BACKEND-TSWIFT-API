/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Formatos do Objeto PUT
interface putBodyObj {
  obrigatorio: boolean;
}

// Formato de Objeto Padrão
interface objQualidadeProduto {
  obrigatorio: boolean;
  produtoId: number;
  testeQualidadeId: number;
}

class ServiceQualidadeProduto {
  public async getQualidadeProduto(mod: string, id: number) {
    if (mod == "p") {
      try {
        const resp = await this.getProdutoQualidadeProduto(id);
        return resp;
      } catch (exception) {
        console.log(exception);
        return 400;
      }
    } else {
      try {
        const resp = await this.getQualidadeQualidadeProduto(id);
        return resp;
      } catch (exception) {
        console.log(exception);
        return 400;
      }
    }
  }

  private async getProdutoQualidadeProduto(id: number) {
    const resp = await prisma.qualidadeProduto.findMany({
      where: {
        produtoId: id,
      },
    });

    return resp;
  }

  private async getQualidadeQualidadeProduto(id: number) {
    const resp = await prisma.qualidadeProduto.findMany({
      where: {
        testeQualidadeId: id,
      },
    });

    return resp;
  }

  public async postQualidadeProduto(obj: objQualidadeProduto) {
    try {
      const regraQualidade = await prisma.testeQualidade.aggregate({
        _max: {
          id: true
        }
      })
      if (regraQualidade._max.id) {
        await prisma.qualidadeProduto.create({
          data: {
            obrigatorio: obj.obrigatorio,
            testeQualidadeId: regraQualidade._max.id,
            produtoId: obj.produtoId,
          },
        });
      }
     

      return 201;
    } catch (exception) {
      console.log(exception);
      return 400;
    }
  }

  public async putQualidadeProduto(query: any, body: putBodyObj) {
    try {
      await prisma.qualidadeProduto.update({
        where: {
          testeQualidadeId_produtoId: {
            testeQualidadeId: Number(query.q),
            produtoId: Number(query.p),
          },
        },
        data: {
          obrigatorio: body.obrigatorio,
        },
      });

      return 200;
    } catch (exception) {
      console.log(exception);
      return 400;
    }
  }

  public async deleteQualidadeProduto(query: any) {
    try {
      await prisma.qualidadeProduto.delete({
        where: {
          testeQualidadeId_produtoId: {
            testeQualidadeId: Number(query.q),
            produtoId: Number(query.p),
          },
        },
      });

      return 200;
    } catch (exception) {
      console.log(exception);
      return 400;
    }
  }
}

export default new ServiceQualidadeProduto();
