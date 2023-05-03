import { Router } from "express";
import { FornecedorProduto } from "../controllers";

const router = Router();

router.get("/", FornecedorProduto.get);
router.get("/:id", FornecedorProduto.getPorIdFornecedor);
router.get(
  "/:idProduto/:idFornecedor",
  FornecedorProduto.getPorIdProdutoFornecedor
);
router.post("/", FornecedorProduto.post);
router.delete("/:idProduto/:idFornecedor", FornecedorProduto.delete);

export default router;
