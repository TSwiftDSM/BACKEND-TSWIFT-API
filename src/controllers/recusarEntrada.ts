import { Request, Response } from "express";
import DeclineStepsServices from "../services/declineSteps"




type StatusDelivery = {
  id: number;
}

class  RecusarEntradaMateriasController{
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
      const entregaId= parseInt(req.params.entregaId);
      console.log(`EntregaID = ${req.params.entregaId}`);
      DeclineStepsServices.declineDelivery(motivoCompleto,entregaId); // Função para recusar a entrega
      const idStatusDelivery= await DeclineStepsServices.findIdStatusDelivery(entregaId);
      const idObj = JSON.parse(JSON.stringify(idStatusDelivery)) as StatusDelivery; // pegar o id da função findIdStatusDelivery pelo atributo id 
      const idInt = idObj.id;
      
      await DeclineStepsServices.declineStatusDelivery(idInt); // ele altera o status de aprovado de acordo com o id do status
      
      res.send("Entrega Recusada").status(200)
  };
             
}
 

export default new RecusarEntradaMateriasController();