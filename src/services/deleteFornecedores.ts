import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class DeleteFornecedor {

    async delete(id: number) {
        try {
            const fornecedorDeletado = await prisma.fornecedor.delete({
                where: {
                    id: id
                }
            });
            return fornecedorDeletado;
        } catch (error: any) {
            console.error(error);
            throw new Error('Erro ao excluir fornecedor');
        }
    }


}

export default new DeleteFornecedor();