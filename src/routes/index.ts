import { Router } from "express";
import  menuRoutes from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";


const router = Router();

router.get("/", (req, res) => {
  res.render("test");
});


router.use("/menu", menuRoutes)

router.use("/qualitativeStage", qualitativeStageRoutes);

export default router;
