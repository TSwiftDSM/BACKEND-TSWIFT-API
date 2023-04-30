import { Router } from "express";
import { ControllerQualidadeProduto } from "../controllers";

const routes = Router();

routes.get("/:idQualidadeProduto", ControllerQualidadeProduto.get);
routes.post("/", ControllerQualidadeProduto.post);
routes.put("/", ControllerQualidadeProduto.put);
routes.delete("/", ControllerQualidadeProduto.delete);

export default routes;
