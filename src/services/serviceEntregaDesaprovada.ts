import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
}

export default new ServiceEntregaDesaprovada();