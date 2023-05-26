import { Request, Response } from "express";
import { default as ServiceEntregaDesaprovada } from "../services/serviceEntregaDesaprovada";
import verificaPermissao from "../services/verificaPermissao";
import { Permissoes } from "../data/permissoes";

class ControllerEntregaDesaprovada {
  async get(req: Request, res: Response) {
    const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.RECEBIMENTO)
      if (!permissao) {
        return res.status(401)
      }
    if (req.params.idEntregaDesaprovada) {
      const url_params = Number(req.params.idEntregaDesaprovada);
      const resp = await ServiceEntregaDesaprovada.getEntregaDesaprovadaUnique(
        url_params
      );

      res.send(resp);
    } else {
      const resp_code = await ServiceEntregaDesaprovada.getEntregaDesaprovada();
      res.send(resp_code);
    }
  }

  async post(req: Request, res: Response) {
    const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.RECEBIMENTO)
      if (!permissao) {
        return res.status(401)
      }
    const body = req.body;
    const resp_code = await ServiceEntregaDesaprovada.postEntregaDesaprovada(
      body
    );

    res.sendStatus(resp_code);
  }

  async put(req: Request, res: Response) {
    const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.RECEBIMENTO)
      if (!permissao) {
        return res.status(401)
      }
    if (req.params.idEntregaDesaprovada) {
      const url_params = Number(req.params.idEntregaDesaprovada);
      const body = req.body;
      const resp_code = await ServiceEntregaDesaprovada.putEntregaDesaprovada(
        url_params,
        body
      );

      res.sendStatus(resp_code);
    } else {
      res.status(400).send("Missing ID in url params");
    }
  }

  async delete(req: Request, res: Response) {
    const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.RECEBIMENTO)
      if (!permissao) {
        return res.status(401)
      }
    if (req.params.idEntregaDesaprovada) {
      const url_params = Number(req.params.idEntregaDesaprovada);
      const resp_code =
        await ServiceEntregaDesaprovada.deleteEntregaDesaprovada(url_params);

      res.sendStatus(resp_code);
    } else {
      res.status(400).send("Missing ID in url params");
    }
  }
}

export default new ControllerEntregaDesaprovada();
