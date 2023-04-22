import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class EntradaMaterialServices {
  public async cadastroStatusEntrega(
    aprovado: boolean,
    entregaId: number,
    usuarioId: number,
    etapaEntrega: string
  ) {
    await prisma.statusEntrega.create({
      data: {
        aprovado: aprovado,
        entregaId: entregaId,
        usuarioId: usuarioId,
        etapaEntrega: etapaEntrega,
      },
    });
  }

  public async VerificacaoEntradaMaterial(data: any, pedido: any) {
    let aprovado = false;
    if (data.laudo) {
      if (
        data.numeroPedido == pedido.numeroPedido &&
        data.notaFiscal == pedido.nfe &&
        data.fornecedor == pedido.Fornecedor.nomeFantasia &&
        data.transportadora ==
          pedido.Transportadora.FornecedorTransportadora.nomeFantasia &&
        data.tipoFrete == pedido.tipoFrete &&
        data.condicaoPagamento == pedido.formaPagamento
      ) {
        aprovado = true;
      }
    }
    return aprovado;
  }

  public async PesquisaEntradaMaterial(data: any) {
    //
    return await prisma.entrega.findFirst({
      where: {
        id: data.idEntrega
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
      },
    });
  }
}
