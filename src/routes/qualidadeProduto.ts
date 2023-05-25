import { Router } from "express";
import { ControllerQualidadeProduto } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get(
  "/:idQualidadeProduto",
  Autenticador,
  ControllerQualidadeProduto.get
);
routes.post("/", Autenticador, ControllerQualidadeProduto.post);
routes.put("/", Autenticador, ControllerQualidadeProduto.put);
routes.delete("/", Autenticador, ControllerQualidadeProduto.delete);

export default routes;
