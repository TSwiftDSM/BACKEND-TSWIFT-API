import { Request, Response } from "express";
import EntradaMaterialServices from "../services/entradaMaterialServices";

const entradaMaterial = new EntradaMaterialServices();

class EntradaMaterial {
  async post(req: Request, res: Response) {
    //
  
    const pedido = await entradaMaterial.PesquisaEntradaMaterial(req);

    const aprovado = await entradaMaterial.VerificacaoEntradaMaterial(req, pedido);

    let retorno

    if (await aprovado) {
      await entradaMaterial.cadastroStatusEntrega(
        true,
        req.body.idEntrega,
        1,
        "ENTRADA DE MATERIAL"
      );
      retorno = 'APROVADO'
    } else {
      await entradaMaterial.cadastroStatusEntrega(
        false,
        req.body.idEntrega,
        1,
        "ENTRADA DE MATERIAL"
      );
      retorno = 'REPROVADO'
      
    }
    res.send(retorno);
  }
}

export default new EntradaMaterial();
