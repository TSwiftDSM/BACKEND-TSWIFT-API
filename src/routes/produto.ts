import { Router } from "express";
import { ProdutoController } from "../controllers";

const routes = Router();

routes.get("/", ProdutoController.get);
routes.post("/", ProdutoController.post);
routes.delete("/:id", ProdutoController.delete);
routes.get("/:id", ProdutoController.getById);
routes.get("/porNome/:nomeProduto", ProdutoController.getByNome);
routes.put("/:id", ProdutoController.put);

export default routes;
