/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Request, Response } from "express";
import DeclineStepsServices from "../services/declineSteps";
import { Etapas } from "../data/EnumEtapa";

interface Teste {
  nomeTeste: string;
  esperado: boolean;
  obtido: boolean;
}

type StatusDelivery = {
  id: number;
};

class RecusarQuantitativaController {
  async post(req: Request, res: Response) {
    const objeto: Array<Teste> = req.body.data;
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    let nomesTestes: string = "";
    for (const item of objeto) {
      if ("nomeTeste" in item && "obtido" in item && item.obtido) {
        nomesTestes += `${item.nomeTeste},`;
      } // Percorre todo o objeto e salva os testes reprovados e a observação
    }
    nomesTestes = nomesTestes.slice(0, -1); // remover última vírgula
    const motivoCompleto = "Inconsistências encontradas:" + nomesTestes; // Junta os testes
    console.log(motivoCompleto);
    const entregaId = parseInt(req.params.entregaId); //Pega o Id da entrega
    console.log(`EntregaID = ${req.params.entregaId}`);
    DeclineStepsServices.declineDelivery(motivoCompleto, entregaId); // Função para recusar a entrega
    const idStatusDelivery = await DeclineStepsServices.findIdStatusDelivery(
      entregaId
    ); // Função para pegar o Id do statusEntrega
    const idObj = JSON.parse(
      JSON.stringify(idStatusDelivery)
    ) as StatusDelivery; // pegar o id da função findIdStatusDelivery pelo atributo id
    const idInt = idObj.id;
    await DeclineStepsServices.declineStatusDelivery(idInt); // ele altera o status de aprovado de acordo com o id do status
    await DeclineStepsServices.updateDeliveryStep(entregaId, Etapas.ETAPA2);
    res.send("Entrega Recusada").status(200);
  }
}

export default new RecusarQuantitativaController();
