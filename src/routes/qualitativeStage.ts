import { Router } from "express";

import { QualitativeStageController } from "../controllers";

const routes = Router();

routes.get("/", QualitativeStageController.get);

routes.post("/", QualitativeStageController.post);

export default routes;
