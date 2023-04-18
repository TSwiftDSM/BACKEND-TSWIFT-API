import { Router } from "express";
import { default as Menu } from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";
import { default as EntradaMaterial } from "./entradaMaterial";
import { default as quantitativeRoutes } from "./quantitative";
import { default as entregas } from "./entregas";

const router = Router();

router.use("/menu", Menu);
router.use("/entregas", entregas);
router.use("/conferencia/quantitativa", quantitativeRoutes);
router.use("/qualitativeStage", qualitativeStageRoutes);
router.use("/entradaMaterial", EntradaMaterial);

export default router;
