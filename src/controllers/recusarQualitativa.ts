import { Request, Response } from "express";
import DeclineStepsServices from "../services/declineSteps";

interface Teste {
  nomeTeste: string;
  esperado: boolean;
  obtido: boolean;
}

interface TestData {
  data: (Teste | { observacoes: string })[];
}

type StatusDelivery = {
  id: number;
};

class RecusarQualitativaController {
  async post(req: Request, res: Response) {
    const objeto: TestData = req.body;
    let nomesTestes: string = "";
    let observacoes: string = "";
    for (const item of objeto.data) {
      if ("nomeTeste" in item && "obtido" in item && item.obtido) {
        nomesTestes += `${item.nomeTeste},`;
      } // Percorre todo o objeto e salva os testes reprovados e a observação
      if ("observacoes" in item) {
        observacoes += `${item.observacoes},`;
      }
    }
    nomesTestes = nomesTestes.slice(0, -1); // remover última vírgula
    observacoes = observacoes.slice(0, -1); // remover última vírgula
    const motivoCompleto =
      "Inconsistências encontradas:" +
      nomesTestes +
      "  " +
      "Observações:" +
      observacoes; // Junta os testes e as observações
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
    res.send("Entrega Recusada").status(200);
  }
}

export default new RecusarQualitativaController();
