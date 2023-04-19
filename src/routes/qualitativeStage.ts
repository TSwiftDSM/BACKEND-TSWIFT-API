import { Router } from "express";

import { QualitativeStageController } from "../controllers";

const routes = Router();

routes.post(
  "/api/PersistenciaQualitativa",
  QualitativeStageController.PersistenciaDados
);

routes.post("/api/qualitativa", QualitativeStageController.post);

export default routes;
