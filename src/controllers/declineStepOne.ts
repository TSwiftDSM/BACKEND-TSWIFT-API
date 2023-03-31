import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

//Função para persistencia de dados das inconsistencias e motivos da recusa da entrega
async function declineDelivery(motivoCompleto:string,entregaId:number){
  try{
    const reprovarEntrega =await prisma.entregaDesparovada.create({
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

type StatusDelivery = {
  id: number;
}

async function findIdStatusDelivery(entregaId:number){
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
async function declineStatusDelivery(idStatusEntrega:number){
  try{
    const alterarStatusEntrega = await prisma.statusEntrega.update({
      where: {
        id: idStatusEntrega,
      },
      data: {
        approved: false,
      },
    })
  }catch(exception){
      console.log(`Uma exceção ocorreu: ${exception}`)
      return {}
  }
}



class  DeclineDeliveryStepOneController{
  
 
//Criação da função get
  async get (req: Request, res: Response) {
    res.render("declineStepOne")
  };
//Criação da função post
    async post (req: Request, res: Response) {
      let inconsistencia = req.body.inconsistencia; //Pegar o valor que vem do front para a variavel inconsistencia
      if (inconsistencia == "Selecione") { //if para o caso de um valor invalido para o banco de dados
        res.status(400).send("Campos obrigatórios não preenchidos");
        return;
      }
      const motivo = req.body.motivo; // Pegar o valor que vem do front para a variavel motivo
      const motivoCompleto = inconsistencia + ': ' + motivo; // Concatena as duas variáveis
      console.log( `${motivoCompleto}`);
      declineDelivery(motivoCompleto,1) // Função para recusar a entrega
      const idStatusDelivery= await findIdStatusDelivery(1)
      console.log(`${idStatusDelivery}`)
      const idObj = JSON.parse(JSON.stringify(idStatusDelivery)) as StatusDelivery; // pegar o id da função findIdStatusDelivery pelo atributo id 
      const idInt = idObj.id;
      
      await declineStatusDelivery(idInt); // ele altera o status de aprovado de acordo com o id do status
      
      res.send("Entrega Recusada")
  };
        
        
}
 

export default new DeclineDeliveryStepOneController();