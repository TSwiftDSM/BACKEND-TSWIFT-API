import { Router } from "express";
import { RecusarQuantitativaController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

// routes.get("/",Autenticador,DeclineThreeController.get);
routes.post("/:entregaId", Autenticador, RecusarQuantitativaController.post);

export default routes;
