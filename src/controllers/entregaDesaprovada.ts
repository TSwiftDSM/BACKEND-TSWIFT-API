import { Request, Response } from "express";
import { default as ServiceEntregaDesaprovada } from "../services/serviceEntregaDesaprovada";

class ControllerEntregaDesaprovada{
    async get (req: Request, res: Response) {
        if (req.params.idEntregaDesaprovada) {
            const url_params = Number(req.params.idEntregaDesaprovada);
            const resp_code = await ServiceEntregaDesaprovada.getEntregaDesaprovadaUnique(
                url_params
            );

            res.send(resp_code); 
        } else {
            const resp_code = await ServiceEntregaDesaprovada.getEntregaDesaprovada();
            res.send(resp_code);
        }
    }
}

export default new ControllerEntregaDesaprovada();