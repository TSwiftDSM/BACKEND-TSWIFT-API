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
      const resultados: boolean[] =
        await ValidacaoEtapasServices.testeRecusaQuantitativa(
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
        Id_entrega_produtos_reprovados: reprovados,
      };

      res.json(resposta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro na validação quantitativa." });
    }
  }

  async validacaoQualitativa(req: Request, res: Response) {
    const data = req.body;
    const resultado =
      await ValidacaoEtapasServices.VerificandoRecusaQualitativa(data);

    const resposta = {
      Aprovados: [] as { id_Produto: number; id_Qualidade: number[] }[],
      Reprovados: [] as { id_Produto: number; id_Qualidade: number[] }[],
    };

    for (const idProduto in resultado.Aprovados) {
      const idQualidades = resultado.Aprovados[idProduto];
      resposta.Aprovados.push({
        id_Produto: parseInt(idProduto),
        id_Qualidade: idQualidades,
      });
    }

    for (const idProduto in resultado.Reprovados) {
      const idQualidades = resultado.Reprovados[idProduto];
      resposta.Reprovados.push({
        id_Produto: parseInt(idProduto),
        id_Qualidade: idQualidades,
      });
    }

    res.status(201).json(resposta);
  }
}

export default new ValidacaoEtapasController();
