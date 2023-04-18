import { Router } from "express";
import { default as entregas } from "./entregas";
import { default as Menu } from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";

const router = Router();

router.use("/entregas", entregas);

router.use("/menu", Menu);

router.use("/qualitativeStage", qualitativeStageRoutes);

export default router;
