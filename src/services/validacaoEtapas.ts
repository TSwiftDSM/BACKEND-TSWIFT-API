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

  async testeRecusaQuantitativa(dataObj: Array<dataObject>) {
    try {
      const resultados = [];

      const porcentagem = await prisma.regraQuantitativa.findUnique({
        where: {
          id: 1
        },
        select: {
          porcentagem: true
        }
      });
      let porcentagemPositiva = 0
      if (porcentagem?.porcentagem) {
        porcentagemPositiva = (porcentagem?.porcentagem / 100)
      }

      for (let cont = 0; cont < dataObj.length; cont++) {
        const obj = dataObj[cont];
        const recusado =
          obj.valorTotal < obj.peso_previsto * (1 - porcentagemPositiva) ||
          obj.valorTotal > obj.peso_previsto * (1 + porcentagemPositiva);

        resultados.push(recusado);
      }

      return resultados;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  public async VerificandoRecusaQualitativa(testeProdutos: TesteProdutos) {
    const aprovados: { [idProduto: number]: number[] } = {};
    const reprovados: { [idProduto: number]: number[] } = {};

    for (const testeProduto of testeProdutos.testeProdutos) {
      const idProduto = testeProduto.idProduto;
      const idQualidade = testeProduto.idQualidade;

      if (!testeProduto.status && testeProduto.Obrigatorio) {
        if (reprovados[idProduto]) {
          reprovados[idProduto].push(idQualidade);
        } else {
          reprovados[idProduto] = [idQualidade];
        }
      } else {
        if (aprovados[idProduto]) {
          aprovados[idProduto].push(idQualidade);
        } else {
          aprovados[idProduto] = [idQualidade];
        }
      }
    }

    return { Aprovados: aprovados, Reprovados: reprovados };
  }
}

export default new validacaoEtapasServices();
