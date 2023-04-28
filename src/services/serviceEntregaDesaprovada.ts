import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST
interface ObjPostEntregaDesaprovada {
    id: string,
    motivo: string,
    testeQualidadeId: string,
    entregaId: string   
}
class ServiceEntregaDesaprovada {
    async getEntregaDesaprovadaUnique(id: number) {
        try {
            const resp = prisma.entregaDesaprovada.findUnique({
                where:{
                    id: id
                }
            });

            return resp;
        } catch(exception) {
            console.log(exception);
            return 400;
        }
    }

    async getEntregaDesaprovada() {
        try {
            const resp = prisma.entregaDesaprovada.findMany();
            return resp;
        } catch(exception) {
            console.log(exception);
            return 400;
        }
    }

    async postEntregaDesaprovada(body: any) {
        try {
            await prisma.entregaDesaprovada.create({
                data:{
                    motivo: body.motivo,
                    testeQualidadeId: Number(body.testeQualidadeId),
                    entregaId: Number(body.entregaId)
                } 
            })

            return 201;
        } catch(exception) {
            console.log(exception)
            return 400;
        }
    }

    async putEntregaDesaprovada(id: number, body: any) {
        try {
            await prisma.entregaDesaprovada.update({
                where:{
                    id: id
                },
                data: {
                    motivo: body.motivo,
                    testeQualidadeId: body.testeQualidadeId,
                    entregaId: body.entregaId
                }
            });

            return 200;
        } catch(exception){
            console.log(exception);
            return 400;
        }
    }

    async deleteEntregaDesaprovada(id: number) {
        try {
            await prisma.entregaDesaprovada.delete({
                where:{
                    id: id
                }
            });
            
            return 200;
        } catch(exception) {
            console.log(exception);
            return 400;
        }
    }
    
}

export default new ServiceEntregaDesaprovada();