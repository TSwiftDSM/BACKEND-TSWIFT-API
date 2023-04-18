import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default class EntradaMaterialServices{

    public async VerificacaoEntradaMaterial(data: any, pedido: any) {
        return { data, pedido }
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
                Fornecedor: {
                    select: {
                        nomeFantasia: true
                    }
                },
                Transportadora: {
                    select: {
                        FornecedorTransportadora: {
                            select: {
                                nomeFantasia: true
                            }
                        }
                    }
                }                
            }
        });
    }
}