import { Router } from "express";
import { UsuarioController } from "../controllers";

const routes = Router();

routes.get("/get", UsuarioController.get);
routes.get("/getPorId/:idUsuario", UsuarioController.getPorId);
routes.delete("/deletar/:idUsuario", UsuarioController.delete);
routes.put("/atualizar/:idUsuario", UsuarioController.update);
routes.post("/cadastrar/", UsuarioController.post);

export default routes;
