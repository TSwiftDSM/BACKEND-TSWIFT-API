import { Router } from "express";
import { TransportadoraFornecedorController } from "../controllers";

const routes = Router();

routes.get("/", TransportadoraFornecedorController.get);
routes.post("/", TransportadoraFornecedorController.post);
routes.delete(
  "/:idTransportadoraFornecedor",
  TransportadoraFornecedorController.delete
);

export default routes;
