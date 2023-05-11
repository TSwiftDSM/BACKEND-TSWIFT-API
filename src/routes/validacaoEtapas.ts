import { Router } from "express";
import { ValidacaoEtapasController } from "../controllers";

const routes = Router();

routes.post(
  "/entradaMateriais/:idEntrega/",
  ValidacaoEtapasController.validacaoEntradaMateriais
);
routes.post("/quantitativa", ValidacaoEtapasController.validacaoQuantitativa);
routes.post("/qualitativa", ValidacaoEtapasController.validacaoQualitativa);

export default routes;
