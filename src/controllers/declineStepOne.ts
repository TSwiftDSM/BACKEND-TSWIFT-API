import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

//Função para persistencia de dados para recusar entrada de materiais
async function declineDelivery(motivo:string,inconsistencia:string,entregaId:number){
  try{
    const reprovarEntrega =await prisma.entregaDesparovada.create({
      data: {
        motivo: motivo ,
        testeQualidadeId: parseInt(inconsistencia),
        entregaId:entregaId
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
      let inconsistencia = req.body.inconsistencia //Pegar o valor que vem do front para a variavel inconsistencia
      if (inconsistencia == "Selecione") { //if e else para converter os dados do select para um valor valido para o banco de dados
        res.status(400).send("Campos obrigatórios não preenchidos");
        return;
      }
      else if (inconsistencia == "Condição de pagamento" ){
        inconsistencia = 4
      }
      else if (inconsistencia == "Fornecedor"){
        inconsistencia = 1
      }
      else if (inconsistencia == "Transportadora"){
        inconsistencia = 2
      }
      else if (inconsistencia == "Tipo de frete"){
        inconsistencia = 3
      }
      
      const motivo = req.body.motivo // Pegar o valor que vem do front para a variavel motivo
      console.log(`Valor de inconsistencia: ${inconsistencia}`);
      declineDelivery(motivo,inconsistencia,1) // Função para recusar a entrega
      
      res.send("Entrega Recusada")
  };
        
        
}
 

export default new DeclineDeliveryStepOneController();