import { Router } from "express";
import  {default as Menu }  from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";


const router = Router();

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

export default router;
