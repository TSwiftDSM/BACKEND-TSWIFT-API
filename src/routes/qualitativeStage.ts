import { Router } from "express";

import { QualitativeStageController } from "../controllers";

const routes = Router();

routes.post("/api/PersistenciaQualitativa", QualitativeStageController.post);

routes.get("/api/qualitativa/:id", QualitativeStageController.get);

export default routes;
