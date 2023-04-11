import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import DeclineStepsServices from "../services/declineSteps"

const prisma = new PrismaClient()


interface Teste {
    nomeTeste: string;
    esperado: boolean;
    obtido: boolean;
  }

  type StatusDelivery = {
    id: number;
  }
  
class  DeclineDeliveryStepThreeController{
    async post (req: Request, res: Response){
        const dados: Teste[] = req.body; // Pega o objeto JSON
          const nomesTestes: string[] = dados // Pega os testes que não passaram no teste
          .filter((teste) => teste.obtido === true)
          .map((teste) => teste.nomeTeste); // retira o "?" no final de cada teste
        const motivo = JSON.stringify(nomesTestes).replace(/\"/g, ""); //Salva cada teste recusado na variavel
        const motivoCompleto = "Inconsistências encontradas:" + motivo
        console.log(motivoCompleto)
        const entregaId= parseInt(req.params.entregaId);
        console.log(req.params.entregaId)
        DeclineStepsServices.declineDelivery(motivoCompleto,entregaId) // Função para recusar a entrega
        const idStatusDelivery= await DeclineStepsServices.findIdStatusDelivery(entregaId)
        console.log(`${idStatusDelivery}`)
        const idObj = JSON.parse(JSON.stringify(idStatusDelivery)) as StatusDelivery; // pegar o id da função findIdStatusDelivery pelo atributo id 
        const idInt = idObj.id;
        
        await DeclineStepsServices.declineStatusDelivery(idInt); // ele altera o status de aprovado de acordo com o id do status
        
        res.json(nomesTestes).status(200)
      };
}

export default new DeclineDeliveryStepThreeController();