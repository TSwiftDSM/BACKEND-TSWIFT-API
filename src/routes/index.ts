import { Router } from "express";
import { default as recusarEntradaRoutes } from "./recusarEntrada";
import { default as recusarQualitativaRoutes } from "./recusarQualitativa";
import { default as recusarQuantitativaRoutes } from "./recusarQuantitativa";
import  {default as Menu }  from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";


const router = Router();

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

router.use("/recusar/entradaMateriais",recusarEntradaRoutes );
router.use("/recusar/qualitativa",recusarQualitativaRoutes );
router.use("/recusar/quantitativa",recusarQuantitativaRoutes );


export default router;
