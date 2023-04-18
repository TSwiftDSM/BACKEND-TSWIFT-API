import { Router } from "express";
import  {default as Menu }  from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";
import { default as EntradaMaterial } from "./entradaMaterial"

const router = Router();

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

router.use("/entradaMaterial", EntradaMaterial)

export default router;
