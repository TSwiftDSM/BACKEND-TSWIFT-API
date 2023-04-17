import { Router } from "express";
import { default as quantitativeRoutes } from "./quantitative";

const router = Router();

router.use("/conferencia/quantitativa", quantitativeRoutes);
import  {default as Menu }  from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

export default router;
