import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import DeclineStepsServices from "../services/declineSteps"

const prisma = new PrismaClient()


interface Teste {
    nomeTeste: string;
    esperado: boolean;
    obtido: boolean;
  }
  
interface TestData {
    data: (Teste)[];
  }

type StatusDelivery = {
    id: number;
  }
  
class  DeclineDeliveryStepThreeController{
    async post (req: Request, res: Response){
      const objeto: TestData = req.body;
      let nomesTestes: string = "";
      for (const item of objeto.data) {
        if ('nomeTeste' in item && 'obtido' in item && item.obtido) {
          nomesTestes += `${item.nomeTeste},`;
        }                                                                 // Percorre todo o objeto e salva os testes reprovados e a observação
      }
      nomesTestes = nomesTestes.slice(0, -1); // remover última vírgula
      const motivoCompleto = "Inconsistências encontradas:" + nomesTestes;// Junta os testes 
      console.log(motivoCompleto);
      const entregaId= parseInt(req.params.entregaId); //Pega o Id da entrega
      console.log(`EntregaID = ${req.params.entregaId}`);
      DeclineStepsServices.declineDelivery(motivoCompleto,entregaId); // Função para recusar a entrega
      const idStatusDelivery= await DeclineStepsServices.findIdStatusDelivery(entregaId); // Função para pegar o Id do statusEntrega
      const idObj = JSON.parse(JSON.stringify(idStatusDelivery)) as StatusDelivery; // pegar o id da função findIdStatusDelivery pelo atributo id 
      const idInt = idObj.id;
      await DeclineStepsServices.declineStatusDelivery(idInt); // ele altera o status de aprovado de acordo com o id do status
      res.send("Entrega Recusada").status(200);
      };
}

export default new DeclineDeliveryStepThreeController();