import { Request, Response } from "express";
import { default as ServiceEntregaDesaprovada } from "../services/serviceEntregaDesaprovada";

class ControllerEntregaDesaprovada{
    async get (req: Request, res: Response) {
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

    async post (req: Request, res: Response) {
        const body = req.body;
        const resp_code = await ServiceEntregaDesaprovada.postEntregaDesaprovada(
            body
        );

        res.sendStatus(resp_code);
    }
}


export default new ControllerEntregaDesaprovada();