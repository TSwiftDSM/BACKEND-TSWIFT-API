import { Request, Response } from "express";
import EntradaMaterialServices from "../services/entradaMaterialServices";
import { Etapas } from "../data/EnumEtapa";
import verificaPermissao from "../services/verificaPermissao";
import { Permissoes } from "../data/permissoes";

const entradaMaterial = new EntradaMaterialServices();

class EntradaMaterial {
  async get(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401);
    }
    const permissao = await verificaPermissao.validaPermissao(
      authorization,
      Permissoes.RECEBIMENTO
    );
    if (!permissao) {
      return res.status(401);
    }
    const idEntrega = parseInt(req.params.idEntrega);
    const pedido = await entradaMaterial.PesquisaEntradaMaterial(idEntrega);
    res.send(pedido);
  }

  async post(req: Request, res: Response) {
    //
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401);
    }
    const permissao = await verificaPermissao.validaPermissao(
      authorization,
      Permissoes.RECEBIMENTO
    );
    if (!permissao) {
      return res.status(401);
    }
    const idEntrega = req.body.idEntrega;
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
