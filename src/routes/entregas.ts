import { Router } from "express";

import { EntregaController } from "../controllers";
import { EntregaSchema } from "../schemas";

import { schemaValidator } from "../middlewares";
import Autenticador from "../middlewares/autenticadorMiddleware"
const routes = Router();

routes.get("/", Autenticador, EntregaController.get);
routes.post("/", schemaValidator(EntregaSchema.joi), EntregaController.post);
routes.get("/numeroPedido/:numeroPedido", EntregaController.getPorNumeropedido);
routes.get("/:id", EntregaController.getById);
routes.put(
  "/:id",
  schemaValidator(EntregaSchema.joi),
  EntregaController.update
);
routes.delete("/:id", EntregaController.delete);

export default routes;
