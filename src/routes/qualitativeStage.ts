import { Router } from "express";

import { QualitativeStageController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.post(
  "/api/PersistenciaQualitativa",
  Autenticador,
  QualitativeStageController.post
);

routes.get(
  "/api/qualitativa/:id",
  Autenticador,
  QualitativeStageController.get
);

export default routes;
