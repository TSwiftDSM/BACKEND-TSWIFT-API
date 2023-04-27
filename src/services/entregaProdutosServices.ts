import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EntregasProdutosServices {
    async getPorId(id: number) {
        try {
            const entregasProdutos = await prisma.entregaProduto.findMany({
                where: {
                    id: id
                }
            });
            if (entregasProdutos.length === 0) {
                throw new Error("Nenhum fornecedor encontrado");
            }
            return entregasProdutos;
        } catch (e: any) {
            console.log(e.message);
        }
    }
    async getPorIdEntrega(idEntrega: number) {
        try {
            const entregasProdutos = await prisma.entregaProduto.findMany({
                where: {
                    EntregaId: idEntrega
                }
            });
            if (entregasProdutos.length === 0) {
                throw new Error("Nenhum fornecedor encontrado");
            }
            return entregasProdutos;
        } catch (e: any) {
            console.log(e.message);
        }
    }
    async get() {
        try {
            const entregasProdutos = await prisma.entregaProduto.findMany()
            if (entregasProdutos.length === 0) {
                throw new Error("Nenhum fornecedor encontrado");
            }
            return entregasProdutos;
        } catch (e: any) {
            console.log(e.message);
        }
    }
    async post(data: any) {
        try {
            //
            const novoEntregaProduto = await prisma.entregaProduto.create({
                data: {
                    quantidade: data.quantidade,
                    pesoPrevisto: data.pesoPrevisto,
                    pesoReal: data.pesoReal,
                    especificacao: data.especificacao,
                    produtoId: data.produtoId,
                    EntregaId: data.entregaId
                }
            });
            return novoEntregaProduto
        } catch (error: any) {
            console.error(error);
            throw new Error("Erro ao criar fornecedor");
        }
    }
    async delete(id: number) {
        try {
            const entregaProduto = await prisma.entregaProduto.delete({
                where: {
                    id: id
                }
            });
            return entregaProduto
        } catch (error: any) {
            console.error(error);
            throw new Error("Erro ao excluir fornecedor");
        }
    }
    async update(data: any, id: number) {
        try {
            const entregaProduto = await prisma.entregaProduto.update({
                where: {
                    id: id
                },
                data: {
                    quantidade: data.quantidade,
                    pesoPrevisto: data.pesoPrevisto,
                    pesoReal: data.pesoReal,
                    especificacao: data.especificacao,
                    produtoId: data.produtoId,
                    EntregaId: data.entregaId
                }
            });
            return entregaProduto
        } catch (error: any) {
            console.error(error);
            throw new Error("Erro ao excluir fornecedor");
        }
    }
}

export default new EntregasProdutosServices();