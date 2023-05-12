import { Router } from "express";

import { PermissaoController } from "../controllers";

const routes = Router();

routes.get("/", PermissaoController.get);
routes.get("/:id", PermissaoController.getPorId);
routes.post("/", PermissaoController.post);
routes.put("/:id", PermissaoController.update);
routes.delete("/:id", PermissaoController.delete);

export default routes;
