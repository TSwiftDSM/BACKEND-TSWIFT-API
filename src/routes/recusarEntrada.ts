import { Router } from "express";
import { RecusarEntradaController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware"

const routes = Router();

// routes.post("/:entregaId",Autenticador,RecusarEntradaController.get)
routes.post("/:entregaId",Autenticador, RecusarEntradaController.post);

export default routes;
