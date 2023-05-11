import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type dataObject = {
  id_entrega_produto: number;
  especificacao: string;
  quantidade: number;
  peso_previsto: number;
  peso_unitario: number;
  valorTotal: number;
};

type TesteProduto = {
  idProduto: number;
  idQualidade: number;
  status: boolean;
  Obrigatorio: boolean;
};

type TesteProdutos = {
  testeProdutos: TesteProduto[];
};
class validacaoEtapasServices {
  public async VerificacaoEntradaMaterial(data: any, pedido: any) {
    let aprovado = false;
    if (data.laudo == true) {
      if (
        data.numeroPedido == pedido.numeroPedido &&
        data.nfe == pedido.nfe &&
        data.fornecedor == pedido.Fornecedor.nomeFantasia &&
        data.transportadora ==
          pedido.Transportadora.FornecedorTransportadora.nomeFantasia &&
        data.tipoFrete == pedido.tipoFrete &&
        data.formaPagamento == pedido.formaPagamento
      )
        aprovado = true;
    }
    return aprovado;
  }

  public async PesquisaEntradaMaterial(data: number) {
    //
    return await prisma.entrega.findFirst({
      where: {
        id: data,
      },
      select: {
        numeroPedido: true,
        nfe: true,
        tipoFrete: true,
        formaPagamento: true,
        Fornecedor: {
          select: {
            nomeFantasia: true,
          },
        },
        Transportadora: {
          select: {
            FornecedorTransportadora: {
              select: {
                nomeFantasia: true,
              },
            },
          },
        },
        transportadoraId: true,
      },
    });
  }

  async testeRecusaQuantitativa(dataObj: Array<dataObject>): Promise<boolean> {
    try {
      for (let cont = 0; cont < dataObj.length; cont++) {
        if (
          dataObj[cont].valorTotal < dataObj[cont].peso_previsto * 0.95 ||
          dataObj[cont].valorTotal > dataObj[cont].peso_previsto * 1.05
        ) {
          return true;
        }
      }
      return false;
    } catch (error) {
      // Lidar com exceções ou erros caso ocorram
      console.error(error);
      return false;
    }
  }

  public async VerificandoRecusaQualitativa(testeProdutos: TesteProdutos) {
    let aprovado = true;

    for (const testeProduto of testeProdutos.testeProdutos) {
      if (!testeProduto.status) {
        const obrigatorio = await prisma.qualidadeProduto.findFirst({
          where: {
            Produto: {
              id: testeProduto.idProduto,
            },
            TesteQualidade: {
              id: testeProduto.idQualidade,
            },
          },
          select: {
            obrigatorio: true,
          },
        });
        if (obrigatorio?.obrigatorio) {
          aprovado = false;
          testeProduto.Obrigatorio = true;
        } else {
          testeProduto.Obrigatorio = false;
        }
      } else {
        testeProduto.Obrigatorio = true;
      }
    }

    return aprovado;
  }
}

export default new validacaoEtapasServices();
