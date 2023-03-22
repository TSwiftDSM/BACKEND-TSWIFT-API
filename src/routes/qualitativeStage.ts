import { Router } from "express";

import { QualitativeStageController } from "../controllers";


const routes = Router();


routes.get("/", QualitativeStageController.get);

export default routes;