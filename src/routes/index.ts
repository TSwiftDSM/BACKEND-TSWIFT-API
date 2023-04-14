import { Router } from "express";

import { default as productRoutes } from "./product";

import { default as qualitativeStageRoutes } from "./qualitativeStage";

const router = Router();

router.use("/produto", productRoutes);

router.use("/qualitativeStage", qualitativeStageRoutes);

export default router;
