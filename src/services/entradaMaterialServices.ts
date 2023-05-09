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
    await prisma.entrega.update({
      data: {
        etapaEntrega: etapaEntrega,
      },
      where: {
        id: entregaId,
      },
    });
  }

  public async VerificacaoEntradaMaterial(data: any, pedido: any) {
    let aprovado = false;
    if (data.body.laudo) {
      if (
        data.body.numeroPedido == pedido.numeroPedido &&
        data.body.fornecedor == pedido.Fornecedor.nomeFantasia &&
        data.body.transportadora == pedido.Transportadora.FornecedorTransportadora.nomeFantasia &&
        data.body.tipoFrete == pedido.tipoFrete &&
        data.body.condicaoPagamento == pedido.formaPagamento
      ) {
        aprovado = true;
      }
    }
    return aprovado;
  }

  public async VerificacaoEntradaMaterialNovo(data: any, pedido: any) {
    let aprovado = false;
    if (data.body.laudo) {
      if (
        data.body.numeroPedido == pedido.numeroPedido &&
        data.body.fornecedor == pedido.fornecedorId &&
        data.body.transportadora == pedido.transportadoraId &&
        data.body.tipoFrete == pedido.tipoFrete &&
        data.body.condicaoPagamento == pedido.formaPagamento
      ) {
        aprovado = true;
      }
    }
    return aprovado;
  }

  public async PesquisaEntradaMateriacNovo(data: number) {
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
        fornecedorId: true,
        transportadoraId: true,
      },
    });
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
}
