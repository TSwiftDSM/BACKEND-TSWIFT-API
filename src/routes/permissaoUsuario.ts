import { Router } from "express";

import { PermissaoUsuarioController } from "../controllers";

const routes = Router();

routes.get("/", PermissaoUsuarioController.get)
routes.get("/:id", PermissaoUsuarioController.getPorId)
routes.post("/", PermissaoUsuarioController.post)
routes.delete("/:idUsuario/:idPermissao", PermissaoUsuarioController.delete)

export default routes;
