import { Router } from "express";
import { RecusarEntradaController } from "../controllers";

const routes = Router();

// routes.post("/:entregaId",RecusarEntradaController.get)
routes.post("/:entregaId",RecusarEntradaController.post)


export default routes;

