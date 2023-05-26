import { Router } from "express";

import { EntregaController } from "../controllers";
import { EntregaSchema } from "../schemas";

import { schemaValidator } from "../middlewares";
import Autenticador from "../middlewares/autenticadorMiddleware";
const routes = Router();

routes.get("/", Autenticador, EntregaController.get);
routes.post(
  "/",
  Autenticador,
  schemaValidator(EntregaSchema.joi),
  EntregaController.post
);
routes.get(
  "/numeroPedido/:numeroPedido",
  Autenticador,
  EntregaController.getPorNumeropedido
);
routes.get("/:id", Autenticador, EntregaController.getById);
routes.put(
  "/:id",
  Autenticador,
  schemaValidator(EntregaSchema.joi),
  EntregaController.update
);
routes.delete("/:id", Autenticador, EntregaController.delete);

export default routes;
