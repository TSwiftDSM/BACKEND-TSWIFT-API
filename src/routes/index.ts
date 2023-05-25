import { Router } from "express";
import { default as Menu } from "./menu";
import { default as qualitativeStageRoutes } from "./qualitativeStage";
import { default as EntradaMaterial } from "./entradaMaterial";
import { default as quantitativeRoutes } from "./quantitative";
import { default as entregas } from "./entregas";
import { default as produto } from "./produto";
import { default as cadastroFornecedorRoutes } from "./cadastroFornecedor";
import { default as recusarEntradaRoutes } from "./recusarEntrada";
import { default as recusarQualitativaRoutes } from "./recusarQualitativa";
import { default as recusarQuantitativaRoutes } from "./recusarQuantitativa";
import { default as forcarAceitacaoRoutes } from "./forcarAceitacao";
import { default as fornecedor } from "./fornecedores";
import { default as testeQualidade } from "./testeQualidade";
import { default as entregaProduto } from "./entregaProduto";
import { default as fornecedorProduto } from "./fornecedorProduto";
import { default as qualidadeProduto } from "./qualidadeProduto";
import { default as usuariosRoutes } from "./usuario";
import { default as statusEntrega } from "./statusEntrega";
import { default as entregaDesaprovada } from "./entregaDesaprovada";
import { default as tiposUsuariosRoutes } from "./tipoUsuario";
import { default as transportadoraFornecedorRoutes } from "./transportadoraFornecedor";
import { default as permissao } from "./permissao";
import { default as permissaoUsuario } from "./permissaoUsuario";
import { default as validacaoEtapasRoutes } from "./validacaoEtapas";
import {default as autenticador } from "./autenticador"

const router = Router();

router.use("/menu", Menu);
router.use("/entregas", entregas);
router.use("/conferencia/quantitativa", quantitativeRoutes);
router.use("/conferencia/qualitativa", qualitativeStageRoutes);
router.use("/cadastrar/material", EntradaMaterial);
router.use("/produto", produto);
router.use("/cadastrar/fornecedor", cadastroFornecedorRoutes);
router.use("/recusar/entradaMateriais", recusarEntradaRoutes);
router.use("/recusar/qualitativa", recusarQualitativaRoutes);
router.use("/recusar/quantitativa", recusarQuantitativaRoutes);
router.use("/alterar/forcarAceitacao", forcarAceitacaoRoutes);
router.use("/fornecedores", fornecedor);
router.use("/testeQualidade", testeQualidade);
router.use("/entregaProduto", entregaProduto);
router.use("/fornecedorProduto", fornecedorProduto);
router.use("/usuarios", usuariosRoutes);
router.use("/statusEntrega", statusEntrega);
router.use("/qualidadeProduto", qualidadeProduto);
router.use("/entregaDesaprovada", entregaDesaprovada);
router.use("/tiposUsuarios", tiposUsuariosRoutes);
router.use("/transportadorasFornecedores", transportadoraFornecedorRoutes);
router.use("/permissao", permissao);
router.use("/permissaoUsuario", permissaoUsuario);
router.use("/validacao", validacaoEtapasRoutes);
router.use("/autenticacao", autenticador)

export default router;
