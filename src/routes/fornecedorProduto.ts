import { Router } from "express";
import { FornecedorProduto } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware"

const router = Router();

router.get("/",Autenticador, FornecedorProduto.get);
router.get("/:id",Autenticador, FornecedorProduto.getPorIdFornecedor);
router.get(
  "/:idProduto/:idFornecedor",Autenticador,
  FornecedorProduto.getPorIdProdutoFornecedor
);
router.post("/",Autenticador, FornecedorProduto.post);
router.delete("/:idProduto/:idFornecedor",Autenticador, FornecedorProduto.delete);

export default router;
