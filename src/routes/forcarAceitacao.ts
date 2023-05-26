import { Router } from "express";
import { ForcarAceitacaoController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.post(
  "/:entregaId/:usuarioId",
  Autenticador,
  ForcarAceitacaoController.post
);

export default routes;
