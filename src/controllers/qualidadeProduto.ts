import { Request, Response } from "express";
import { default as ServiceQualidadeProduto } from "../services/serviceQualidadeProduto"

class ControllerQualidadeProduto{
    async get (req: Request, res: Response) {
        const query_params = req.query;
        const url_params = req.params.idQualidadeProduto;
        if (query_params.m){
            res.send(await ServiceQualidadeProduto.getQualidadeProduto(
                String(query_params.m), Number(url_params))
            );
        } else {
            res.sendStatus(400);
        }
    }

    async post (req: Request, res: Response) {
        const body = req.body;
        const resp_code = await ServiceQualidadeProduto.postQualidadeProduto(body);
        res.sendStatus(resp_code);
    }
}

export default new ControllerQualidadeProduto();