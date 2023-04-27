import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


interface objQualidadeProduto {
    obrigatorio: boolean,
    produtoId: number,
    testeQualidadeId: number
}

class ServiceQualidadeProduto {
    public async getQualidadeProduto(mod: string, id: number){
        if (mod == "p"){
            try {
                const resp = await this.getProdutoQualidadeProduto(id);
                return resp;
            } catch(exception) {
                console.log(exception)
                return 400;
            }
        } else {
            try {
                const resp = await this.getQualidadeQualidadeProduto(id);
                return resp;
            } catch(exception) {
                console.log(exception)
                return 400
            }
        }
    }

    private async getProdutoQualidadeProduto(id: number) {
            const resp = await prisma.qualidadeProduto.findMany({
                where:{
                    produtoId: id
                }
            })

            return resp;
    }

    private async getQualidadeQualidadeProduto(id: number) {
        const resp = await prisma.qualidadeProduto.findMany({
            where:{
                testeQualidadeId: id
            }
        })

        return resp;
    }

    public async postQualidadeProduto(obj: objQualidadeProduto){
        try{
            await prisma.qualidadeProduto.create({
                data: {
                    obrigatorio: obj.obrigatorio,
                    testeQualidadeId: obj.testeQualidadeId,
                    produtoId: obj.produtoId
                }
            });

            return 201;
        } catch(exception) {
            console.log(exception);
            return 400;
        }
    }
}

export default new ServiceQualidadeProduto();