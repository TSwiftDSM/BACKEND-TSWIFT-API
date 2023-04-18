import { Router } from "express";
import { default as Menu } from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";
import { default as quantitativeRoutes } from "./quantitative";

const router = Router();

router.use("/menu", Menu);
router.use("/conferencia/quantitativa", quantitativeRoutes);
router.use("/qualitativeStage", qualitativeStageRoutes);

export default router;
