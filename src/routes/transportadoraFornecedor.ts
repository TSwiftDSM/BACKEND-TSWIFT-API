import { Router } from "express";
import { TransportadoraFornecedorController } from "../controllers";
import { schemaValidator } from "../middlewares";
import { TransportadoraFornecedorSchema } from "../schemas";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get("/", Autenticador, TransportadoraFornecedorController.get);
routes.post(
  "/",
  Autenticador,
  schemaValidator(TransportadoraFornecedorSchema.joi),
  TransportadoraFornecedorController.post
);
routes.delete(
  "/:idTransportadoraFornecedor",
  Autenticador,
  TransportadoraFornecedorController.delete
);

export default routes;
