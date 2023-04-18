import { Router } from "express";

import { EntregaController } from "../controllers";
import { EntregaSchema } from "../schemas";

import { schemaValidator } from "../middlewares";

const routes = Router();

routes.get("/", EntregaController.get);
routes.post("/", schemaValidator(EntregaSchema.joi), EntregaController.post);

routes.get("/:id", EntregaController.getById);
routes.put(
  "/:id",
  schemaValidator(EntregaSchema.joi),
  EntregaController.update
);
routes.delete("/:id", EntregaController.delete);

export default routes;
