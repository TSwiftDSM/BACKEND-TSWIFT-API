import { Router } from "express";
import Autenticador from "../middlewares/autenticadorMiddleware";

import { EntradaMaterial } from "../controllers";

const routes = Router();

routes.post("/api/EntradaMaterial", Autenticador, EntradaMaterial.post);

routes.get(
  "/api/EntradaMaterial/:idEntrega",
  Autenticador,
  EntradaMaterial.get
);

export default routes;
