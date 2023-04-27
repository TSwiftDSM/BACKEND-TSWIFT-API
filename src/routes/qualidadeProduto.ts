import { Router } from "express";
import { ControllerQualidadeProduto } from "../controllers";

const routes = Router();

routes.get("/:idQualidadeProduto", ControllerQualidadeProduto.get);
routes.post("/", ControllerQualidadeProduto.post);

export default routes;