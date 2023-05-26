import { Router } from "express";

import { EntregaProduto } from "../controllers";
import { schemaValidator } from "../middlewares";
import { EntregaProdutoSchema } from "../schemas";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get("/", Autenticador, EntregaProduto.get);
routes.get(
  "/porIdEntrega/:idEntrega",
  Autenticador,
  EntregaProduto.getPorIdEntrega
);
routes.get("/porId/:id", Autenticador, EntregaProduto.getPorId);
routes.post(
  "/",
  Autenticador,
  schemaValidator(EntregaProdutoSchema.joi),
  EntregaProduto.post
);
routes.put(
  "/:id",
  Autenticador,
  schemaValidator(EntregaProdutoSchema.joi),
  EntregaProduto.update
);
routes.delete("/:id", Autenticador, EntregaProduto.delete);

export default routes;
