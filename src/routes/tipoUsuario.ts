import { Router } from "express";
import { TipoUsuarioController } from "../controllers";

const routes = Router();

routes.get("/", TipoUsuarioController.get);
routes.get("/pesquisa", TipoUsuarioController.getPorNome);
routes.post("/", TipoUsuarioController.post);
routes.put("/:idTipoUsuario", TipoUsuarioController.update);
routes.delete("/:idTipoUsuario", TipoUsuarioController.delete);

export default routes;
