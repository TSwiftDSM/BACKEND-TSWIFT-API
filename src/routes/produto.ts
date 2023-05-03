import { Router } from "express";
import { ProdutoController } from "../controllers";

const routes = Router();

routes.get("/", ProdutoController.get);
routes.post("/", ProdutoController.post);

routes.get("/:id", ProdutoController.getById);
routes.put("/:id", ProdutoController.put);

export default routes;
