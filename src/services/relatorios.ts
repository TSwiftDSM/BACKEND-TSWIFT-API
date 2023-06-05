import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RelatoriosServices {
    async getNumeroPedido(numeroPedido: string) {
        try {
            const dadosPedidos = await prisma.entrega.findUnique({
                where: {
                    numeroPedido: numeroPedido,
                },
            });
            if (!dadosPedidos){
                throw new Error("Nenhum pedido encontrado com o numero informado");
            }

            const entregaProduto = await prisma.entregaProduto.findMany({
                where: {
                    Entrega: {
                        numeroPedido: numeroPedido,
                    }
                },
                select: {
                    pesoPrevisto: true,
                    pesoReal: true,
                    especificacao: true,
                    quantidade: true,
                    
                    Produto: {
                        select: {
                            nomeProduto: true,
                        }
                    },
                }
            });
            if (!entregaProduto){
                throw new Error("Nenhuma entregaProduto encontrada com o numero informado");
            }
            
            const dadosFornecedor = await prisma.entrega.findUnique({
                where: {
                    numeroPedido: numeroPedido
                },
                select: {
                    StatusEntrega: true,
                    Fornecedor: {
                        select: {
                            nomeFantasia: true
                        }
                    }
                }
            });
            if (!dadosFornecedor){
                throw new Error("Nenhum dadosFornecedor encontrada com o numero informado");
            }

            return {
                dadosPedido: dadosPedidos,
                entregaProduto: entregaProduto,
                dadosFornecedor: dadosFornecedor
            }

        } catch (e: any) {
            console.log(e)
        }
    }
}

export default new RelatoriosServices();