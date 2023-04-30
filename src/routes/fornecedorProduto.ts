import { Router } from "express";
import { FornecedorProduto } from "../controllers";

const router = Router();

router.get("/", FornecedorProduto.get)


export default router;
