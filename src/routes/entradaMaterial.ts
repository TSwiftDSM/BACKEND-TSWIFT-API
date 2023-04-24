import { Router } from "express";

import { EntradaMaterial } from "../controllers";

const routes = Router();

routes.post("/api/EntradaMaterial", EntradaMaterial.post);

routes.get("/api/EntradaMaterial/:idEntrega", EntradaMaterial.get);

export default routes;
