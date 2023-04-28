import { Router } from "express";
import { ControllerEntregaDesaprovada } from "../controllers";

const routes = Router();

routes.get("/:idEntregaDesaprovada", ControllerEntregaDesaprovada.get);
routes.get("/", ControllerEntregaDesaprovada.get);


export default routes;