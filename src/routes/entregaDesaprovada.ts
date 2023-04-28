import { Router } from "express";
import { ControllerEntregaDesaprovada } from "../controllers";

const routes = Router();

routes.get("/:idEntregaDesaprovada", ControllerEntregaDesaprovada.get);
routes.get("/", ControllerEntregaDesaprovada.get);
routes.post("/", ControllerEntregaDesaprovada.post);
routes.put("/:idEntregaDesaprovada", ControllerEntregaDesaprovada.put);
routes.put("/", ControllerEntregaDesaprovada.put);
routes.delete("/:idEntregaDesaprovada", ControllerEntregaDesaprovada.delete);
routes.delete("/", ControllerEntregaDesaprovada.delete);

export default routes;
