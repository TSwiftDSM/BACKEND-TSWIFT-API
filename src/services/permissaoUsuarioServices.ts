import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PermissaoServices {

    async get() {
        try {
            const permissao = await prisma.permissaoUsuario.findMany()
            if (permissao.length === 0) {
                throw new Error("Nenhum fornecedor encontrado");
            }
            return permissao
        } catch (e: any) {
            console.log(e.message);
        }
    }

    async getPorId(id: number) {
        try {
            const permissao = await prisma.permissaoUsuario.findMany({
                where: {
                    usuarioId: id
                },
                select: {
                    permissaoId: true
                }
            });
            if (permissao.length === 0) {
                throw new Error("Nenhum fornecedor encontrado");
            }
            return permissao
        } catch (e: any) {
            console.log(e.message);
        }
    }

    async post(data: any) {
        try {
            const novaPermissao = await prisma.permissaoUsuario.create({
                data: {
                    usuarioId: data.usuarioId,
                    permissaoId: data.usuarioId
                }
            });
            return novaPermissao
        } catch (error: any) {
            console.error(error);
            throw new Error("Erro ao criar Permissão");
        }
    }

    async delete(idUsuario: number, idPermissao: number) {
        try {
            await prisma.permissaoUsuario.delete({
                where: {
                    permissaoId_usuarioId: {
                        usuarioId: idUsuario,
                        permissaoId: idPermissao
                    }
                }
            });
        } catch (error: any) {
            console.error(error);
            throw new Error("Erro ao Deletar Permissão");
        }
    }
}

export default new PermissaoServices();