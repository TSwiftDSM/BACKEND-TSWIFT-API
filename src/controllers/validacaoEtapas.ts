import { Request, Response } from "express";
import ValidacaoEtapasServices from "../services/validacaoEtapas";

class ValidacaoEtapasController {
  async validacaoEntradaMateriais(req: Request, res: Response) {
    const { idEntrega } = req.params;
    const data = req.body;
    const pedido = await ValidacaoEtapasServices.PesquisaEntradaMaterial(
      parseInt(idEntrega)
    );
    const aprovado = await ValidacaoEtapasServices.VerificacaoEntradaMaterial(
      data,
      pedido
    );
    let retorno;
    if (aprovado) {
      retorno = "Etapa Aprovada";
    } else {
      retorno = "Etapa Recusada";
    }
    res.send(retorno);
  }

  async validacaoQuantitativa(req: Request, res: Response) {
    const req_json = req.body;
  try {
    const resultados: boolean[] = await ValidacaoEtapasServices.testeRecusaQuantitativa(
      req_json.update_objects
    );

    const aprovados: number[] = [];
    const reprovados: number[] = [];

    for (let i = 0; i < resultados.length; i++) {
      if (resultados[i]) {
        reprovados.push(req_json.update_objects[i].id_entrega_produto);
      } else {
        aprovados.push(req_json.update_objects[i].id_entrega_produto);
      }
    }

    const resposta = {
      Id_entrega_produtos_aprovados: aprovados,
      Id_entrega_produtos_reprovados: reprovados
    };

    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na validação quantitativa.' });
  }
  }

  async validacaoQualitativa(req: Request, res: Response) {
    const data = req.body;
    const aprovado = await ValidacaoEtapasServices.VerificandoRecusaQualitativa(
      data
    );
    //Verifica se teve algum deste obrigatorio que foi recusado
    if (aprovado != true) {
      res.status(201).send("Entrega Recusada");
    } else {
      //Caso não ele cadastra que foi aprovado
      res.status(201).send("Entrega Aprovada");
    }
  }
}

export default new ValidacaoEtapasController();
