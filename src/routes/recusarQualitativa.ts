import { Router } from "express";
import { RecusarQualitativaController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware"

const routes = Router();

// routes.get("/",Autenticador,DeclineTwoController.get);
routes.post("/:entregaId",Autenticador, RecusarQualitativaController.post);

export default routes;
