import { Request, Response } from "express";
import EntradaMaterialServices from "../services/entradaMaterialServices";

const entradaMaterial = new EntradaMaterialServices();

class EntradaMaterial {
  async post(req: Request, res: Response) {
    //
    let data;
    if (typeof req.query.data === "string") {
      data = JSON.parse(req.query.data);
    } else {
      // Transforma o que veio de Front em um Json
      data = req.body.data;
    }

    const pedido = await entradaMaterial.PesquisaEntradaMaterial(data);

    res.send(pedido);

    const aprovado = entradaMaterial.VerificacaoEntradaMaterial(data, pedido);

    if (await aprovado) {
      entradaMaterial.cadastroStatusEntrega(
        true,
        data.idEntrega,
        1,
        "ENTRADA DE MATERIAL"
      );
    } else {
      entradaMaterial.cadastroStatusEntrega(
        false,
        data.idEntrega,
        1,
        "ENTRADA DE MATERIAL"
      );
    }
  }
}

export default new EntradaMaterial();
