import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ServiceStatusEntrega{
    public async getStatusEntrega(){
        try {
            const resp = await prisma.statusEntrega.findMany();
            return resp;
        } catch (exception){
            console.log(exception)
            return {};
        }
    };

    public async getManyStatusEntrega(id: number){
        try {
            const resp = await prisma.statusEntrega.findUnique({
                where:{
                    id: id
                }
            });
            return resp;
        } catch (exception){
            console.log(exception)
            return {};
        }
    };
}

export default new ServiceStatusEntrega();
 
