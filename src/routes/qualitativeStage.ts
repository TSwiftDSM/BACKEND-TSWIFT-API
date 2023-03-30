import { Router } from "express";

import { QualitativeStageController } from "../controllers";

const routes = Router();

routes.post("/", QualitativeStageController.PersistenciaDados);

routes.post("/conferencia/qualitativa", QualitativeStageController.post);

export default routes;
