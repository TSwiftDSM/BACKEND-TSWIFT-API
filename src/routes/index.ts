import { Router } from "express";
import { default as cadastroFornecedorRoutes } from "./cadastroFornecedor";
import  {default as Menu }  from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";


const router = Router();

router.use("/menu", Menu)

router.use("/qualitativeStage", qualitativeStageRoutes);

router.use("/cadastrar/fornecedor",cadastroFornecedorRoutes );

export default router;
