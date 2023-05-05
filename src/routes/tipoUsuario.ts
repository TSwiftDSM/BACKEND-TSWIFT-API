import { Router } from "express";
import { TipoUsuarioController } from "../controllers";
import { schemaValidator } from "../middlewares";
import { TipoUsuarioSchema } from "../schemas";

const routes = Router();

routes.get("/", TipoUsuarioController.get);
routes.get("/pesquisa", TipoUsuarioController.getPorNome);
routes.post(
  "/",
  schemaValidator(TipoUsuarioSchema.joi),
  TipoUsuarioController.post
);
routes.put(
  "/:idTipoUsuario",
  schemaValidator(TipoUsuarioSchema.joi),
  TipoUsuarioController.update
);
routes.delete("/:idTipoUsuario", TipoUsuarioController.delete);

export default routes;
