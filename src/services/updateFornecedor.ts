import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UpdateFornecedor {

    async update(data: any, id: number) {
        try {
            const fornecedorAtualizado = await prisma.fornecedor.update({
                where: {
                    id: id
                },
                data: data
            });
            return fornecedorAtualizado;
        } catch (error: any) {
            console.error(error);
            throw new Error('Erro ao atualizar fornecedor');
        }
    }


}

export default new UpdateFornecedor();