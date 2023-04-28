import { Request, Response } from "express";
import { default as ServiceStatusEntrega } from "../services/serviceStatusEntrega";

class ControllerStatusEntrega {
  async get(req: Request, res: Response) {
    const url_params = req.params;
    if (url_params.idStatusEntrega) {
      const status_entrega_unico =
        await ServiceStatusEntrega.getManyStatusEntrega(
          Number(req.params.idStatusEntrega)
        );
      res.send(status_entrega_unico);
    } else {
      const status_entrega = await ServiceStatusEntrega.getStatusEntrega();
      res.send(status_entrega);
    }
  }

  async post(req: Request, res: Response) {
    const body_params = req.body;
    const respCode = await ServiceStatusEntrega.postStatusEntrega(body_params);
    res.sendStatus(respCode);
  }

  async put(req: Request, res: Response) {
    const url_params = req.params;
    const body_params = req.body;
    if (url_params.idStatusEntrega) {
      const respCode = await ServiceStatusEntrega.putStatusEntrega(
        body_params,
        Number(url_params.idStatusEntrega)
      );
      res.sendStatus(respCode);
    } else {
      res.sendStatus(400);
    }
  }

  async delete(req: Request, res: Response) {
    const url_params = req.params;
    if (url_params.idStatusEntrega) {
      const respCode = await ServiceStatusEntrega.deleteStatusEntrega(
        Number(url_params.idStatusEntrega)
      );
      res.sendStatus(respCode);
    } else {
      res.sendStatus(400);
    }
  }
}

export default new ControllerStatusEntrega();
