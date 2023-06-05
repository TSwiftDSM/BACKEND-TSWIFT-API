import { Request, Response } from "express";
import RelatoriosServices from "../services/relatorios";

class RelatoriosController {
    async get(req: Request, res: Response){
        try {
            const numeroPedido = req.params.numeroPedido;
            const dataRelatorios = await RelatoriosServices.getNumeroPedido(numeroPedido);
            res.send(dataRelatorios).status(200)
        } catch(e){
            res.send(e).status(400)
        }
    }
}

export default new RelatoriosController();