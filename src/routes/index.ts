import { Router } from "express";
import { default as declineOneRoutes } from "./declineStepOne";
import { default as declineTwoRoutes } from "./declineStepTwo";
import { default as declineThreeRoutes } from "./declineStepThree";
import  {default as Menu }  from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";


const router = Router();

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

router.use("/recusar/entradaMateriais",declineOneRoutes );
router.use("/recusar/qualitativa",declineTwoRoutes );
router.use("/recusar/quantitativa",declineThreeRoutes );


export default router;
