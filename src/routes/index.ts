import { Router } from "express";


import { default as qualitativeStageRoutes } from "./qualitativeStage";

import { default as cadastroFornecedorRoutes } from "./cadastroFornecedor";

const router = Router();

router.use("/qualitativeStage", qualitativeStageRoutes);

router.use("/cadastrar/fornecedor",cadastroFornecedorRoutes );

export default router;
