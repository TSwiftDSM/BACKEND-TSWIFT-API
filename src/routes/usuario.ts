import { Router } from "express";
import { UsuarioController } from "../controllers";

const routes = Router();

routes.get("/", UsuarioController.get);
routes.get("/tipoUsuario/:tipoUsuarioId", UsuarioController.getPorTipoUsuario);
routes.get("/pesquisa", UsuarioController.getPorNome);
routes.get("/id/:idUsuario", UsuarioController.getPorId);
routes.delete("/:idUsuario", UsuarioController.delete);
routes.put("/:idUsuario", UsuarioController.update);
routes.post("/", UsuarioController.post);

export default routes;
