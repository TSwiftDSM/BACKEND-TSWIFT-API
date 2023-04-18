import { Router } from "express";
import { default as cadastroProdutoRoutes } from "./cadastroProduto";
import  {default as Menu }  from "./menu";

import { default as qualitativeStageRoutes } from "./qualitativeStage";


const router = Router();

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

router.use("/cadastrar/produto",cadastroProdutoRoutes );

export default router;
