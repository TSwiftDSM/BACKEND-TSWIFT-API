import { Router } from "express";
import { TransportadoraFornecedorController } from "../controllers";
import { schemaValidator } from "../middlewares";
import { TransportadoraFornecedorSchema } from "../schemas";

const routes = Router();

routes.get("/", TransportadoraFornecedorController.get);
routes.post(
  "/",
  schemaValidator(TransportadoraFornecedorSchema.joi),
  TransportadoraFornecedorController.post
);
routes.delete(
  "/:idTransportadoraFornecedor",
  TransportadoraFornecedorController.delete
);

export default routes;
