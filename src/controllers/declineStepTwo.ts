import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

interface Teste {
    nomeTeste: string;
    esperado: boolean;
    obtido: boolean;
  }

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
  
class  DeclineDeliveryStepTwoController{
    
  
    async post (req: Request, res: Response){
      const dados: Teste[] = req.body; // Pega o objeto JSON

        
        const nomesTestes: string[] = dados // Pega os testes que não passaram no teste
        .filter((teste) => teste.obtido === true)
        .map((teste) => teste.nomeTeste.replace("?", "")); // retira o "?" no final de cada teste
    
        res.json(nomesTestes);
      const motivo = JSON.stringify(nomesTestes).replace(/\"/g, ""); //Salva cada teste recusado na variavel
      const observacoes = JSON.stringify(req.body.observacoes); //Salva as observações escritas pelo usuario
      const motivoCompleto = "Inconsistências encontradas:" + motivo + " " + "Observações:" + observacoes // Junta os testes e as observações
      console.log(motivoCompleto)
      const entregaId= parseInt(req.params.entregaId);
      console.log(req.params.entregaId)
      declineDelivery(motivoCompleto,entregaId) // Função para recusar a entrega
      const idStatusDelivery= await findIdStatusDelivery(entregaId)
      console.log(`${idStatusDelivery}`)
      const idObj = JSON.parse(JSON.stringify(idStatusDelivery)) as StatusDelivery; // pegar o id da função findIdStatusDelivery pelo atributo id 
      const idInt = idObj.id;
      
      await declineStatusDelivery(idInt); // ele altera o status de aprovado de acordo com o id do status

      

    }
}

export default new DeclineDeliveryStepTwoController();