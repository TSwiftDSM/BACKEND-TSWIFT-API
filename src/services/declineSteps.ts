import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

class DeclineStepServices{
    //Função para persistencia de dados das inconsistencias e motivos da recusa da entrega
public async  declineDelivery(motivoCompleto:string,entregaId:number){
    try{
      const reprovarEntrega =await prisma.entregaDesaprovada.create({
        data: {
          motivo: motivoCompleto ,
          testeQualidadeId: null,
          entregaId:entregaId
        },
      })
    }catch(exception){
        console.log(`Uma exceção ocorreu: ${exception}`)
        return {}
    }
  }
  
  
  
public async  findIdStatusDelivery(entregaId:number){
    try{
      const statusEntrega = await prisma.statusEntrega.findMany({
        select: {
          id: true,
        },
        where: {
          entregaId: entregaId,
        },
      });
      if (statusEntrega.length === 0) {
        throw new Error(`Nenhum resultado encontrado para entregaId: ${entregaId}`);
      }
      const idStatusEntrega = statusEntrega[0]?.id;
      // return JSON.stringify({ id: idStatusEntrega });
      return { id: idStatusEntrega };
  }catch(exception){
    console.log(`Uma exceção ocorreu: ${exception}`)
    return {}
  }
  }
  
  
  //Função para alterar o status da entrega para desaprovado
  public async declineStatusDelivery(idStatusEntrega:number){
    try{
      const alterarStatusEntrega = await prisma.statusEntrega.update({
        where: {
          id: idStatusEntrega,
        },
        data: {
          aprovado: false,
        },
      })
    }catch(exception){
        console.log(`Uma exceção ocorreu: ${exception}`)
        return {}
    }
  }
}


export default new DeclineStepServices();