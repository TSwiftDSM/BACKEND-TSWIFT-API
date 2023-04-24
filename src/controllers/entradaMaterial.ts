import { Request, Response } from "express";
import EntradaMaterialServices from "../services/entradaMaterialServices";
import { Etapas } from "../data/EnumEtapa";

const entradaMaterial = new EntradaMaterialServices();

class EntradaMaterial {

  async get(req: Request, res: Response) {
    const idEntrega =  parseInt(req.params.idEntrega)
    const pedido = await entradaMaterial.PesquisaEntradaMaterial(idEntrega);
    res.send(pedido)
  }

  async post(req: Request, res: Response) {
    //
    const idEntrega = req.body.idEntrega
    const pedido = await entradaMaterial.PesquisaEntradaMaterial(idEntrega);

    const aprovado = await entradaMaterial.VerificacaoEntradaMaterial(
      req,
      pedido
    );

    let retorno;

    if (await aprovado) {
      await entradaMaterial.cadastroStatusEntrega(
        true,
        req.body.idEntrega,
        1,
        Etapas.ETAPA1
      );
      retorno = "APROVADO";
    } else {
      await entradaMaterial.cadastroStatusEntrega(
        false,
        req.body.idEntrega,
        1,
        Etapas.ETAPA1
      );
      retorno = "REPROVADO";
    }
    res.send(retorno);
  }
}

export default new EntradaMaterial();
