import { Router } from "express";
import { UsuarioController } from "../controllers";
import { schemaValidator } from "../middlewares";
import { UsuarioSchema } from "../schemas";

const routes = Router();

routes.get("/", UsuarioController.get);
routes.get("/tipoUsuario/:tipoUsuarioId", UsuarioController.getPorTipoUsuario);
routes.get("/pesquisa", UsuarioController.getPorNome);
routes.get("/id/:idUsuario", UsuarioController.getPorId);
routes.delete("/:idUsuario", UsuarioController.delete);
routes.put(
  "/:idUsuario",
  schemaValidator(UsuarioSchema.joi),
  UsuarioController.update
);
routes.post("/", schemaValidator(UsuarioSchema.joi), UsuarioController.post);

export default routes;
