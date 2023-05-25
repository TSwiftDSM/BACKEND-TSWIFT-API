import { Router } from "express";
import { UsuarioController } from "../controllers";
import { schemaValidator } from "../middlewares";
import { UsuarioSchema } from "../schemas";
import Autenticador from "../middlewares/autenticadorMiddleware"

const routes = Router();

routes.get("/",Autenticador, UsuarioController.get);
routes.get("/tipoUsuario/:tipoUsuarioId",Autenticador, UsuarioController.getPorTipoUsuario);
routes.get("/:nomeUsuario",Autenticador, UsuarioController.getPorNome);
routes.get("/id/:idUsuario",Autenticador, UsuarioController.getPorId);
routes.delete("/:idUsuario",Autenticador, UsuarioController.delete);
routes.put(
  "/:idUsuario",Autenticador,
  schemaValidator(UsuarioSchema.joi),
  UsuarioController.update
);
routes.post("/",Autenticador, schemaValidator(UsuarioSchema.joi), UsuarioController.post);

export default routes;
