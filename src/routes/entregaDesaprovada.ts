import { Router } from "express";
import { ControllerEntregaDesaprovada } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware"

const routes = Router();

routes.get("/:idEntregaDesaprovada",Autenticador, ControllerEntregaDesaprovada.get);
routes.get("/",Autenticador, ControllerEntregaDesaprovada.get);
routes.post("/",Autenticador, ControllerEntregaDesaprovada.post);
routes.put("/:idEntregaDesaprovada",Autenticador, ControllerEntregaDesaprovada.put);
routes.put("/",Autenticador, ControllerEntregaDesaprovada.put);
routes.delete("/:idEntregaDesaprovada",Autenticador, ControllerEntregaDesaprovada.delete);
routes.delete("/",Autenticador, ControllerEntregaDesaprovada.delete);

export default routes;
