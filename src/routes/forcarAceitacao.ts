import { Router } from "express";
import { ForcarAceitacaoController } from "../controllers";

const routes = Router();

routes.post("/:entregaId/:usuarioId", ForcarAceitacaoController.post);

export default routes;
