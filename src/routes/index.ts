import { Router } from "express";
import { default as Menu } from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";
import { default as EntradaMaterial } from "./entradaMaterial";
import { default as quantitativeRoutes } from "./quantitative";
import { default as entregas } from "./entregas";
import { default as cadastroProdutoRoutes } from "./cadastroProduto";
import { default as cadastroFornecedorRoutes } from "./cadastroFornecedor";

const router = Router();

router.use("/menu", Menu);
router.use("/entregas", entregas);
router.use("/conferencia/quantitativa", quantitativeRoutes);
router.use("/qualitativeStage", qualitativeStageRoutes);
router.use("/entradaMaterial", EntradaMaterial);
router.use("/cadastrar/produto",cadastroProdutoRoutes );
router.use("/cadastrar/fornecedor",cadastroFornecedorRoutes );

export default router;
