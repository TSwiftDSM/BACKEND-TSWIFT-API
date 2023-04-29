import { Router } from "express";
import { default as Menu } from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";
import { default as EntradaMaterial } from "./entradaMaterial";
import { default as quantitativeRoutes } from "./quantitative";
import { default as entregas } from "./entregas";
import { default as cadastroProdutoRoutes } from "./cadastroProduto";
import { default as cadastroFornecedorRoutes } from "./cadastroFornecedor";
import { default as recusarEntradaRoutes } from "./recusarEntrada";
import { default as recusarQualitativaRoutes } from "./recusarQualitativa";
import { default as recusarQuantitativaRoutes } from "./recusarQuantitativa";
import { default as forcarAceitacaoRoutes } from "./forcarAceitacao";
import { default as fornecedor } from "./fornecedores";
import { default as testeQualidade } from "./testeQualidade";
import { default as entregaProduto } from "./entregaProduto"


const router = Router();

router.use("/menu", Menu);
router.use("/entregas", entregas);
router.use("/conferencia/quantitativa", quantitativeRoutes);
router.use("/conferencia/qualitativa", qualitativeStageRoutes);
router.use("/cadastrar/material", EntradaMaterial);
router.use("/cadastrar/produto", cadastroProdutoRoutes);
router.use("/cadastrar/fornecedor", cadastroFornecedorRoutes);
router.use("/recusar/entradaMateriais", recusarEntradaRoutes);
router.use("/recusar/qualitativa", recusarQualitativaRoutes);
router.use("/recusar/quantitativa", recusarQuantitativaRoutes);
router.use("/alterar/forcarAceitacao", forcarAceitacaoRoutes);
router.use("/fornecedores", fornecedor);
router.use("/testeQualidade", testeQualidade)
router.use("/entregaProduto", entregaProduto)


export default router;
