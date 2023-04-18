import { Router } from "express";

import { EntradaMaterial } from "../controllers";

const routes = Router();

routes.post("/api/EntradaMaterial", EntradaMaterial.post);


export default routes;