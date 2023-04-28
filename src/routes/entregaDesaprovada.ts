import { Router } from "express";
import { ControllerEntregaDesaprovada } from "../controllers";

const routes = Router();

routes.get("/:idEntregaDesaprovada", ControllerEntregaDesaprovada.get);
routes.get("/", ControllerEntregaDesaprovada.get);
routes.post("/", ControllerEntregaDesaprovada.post);

export default routes;