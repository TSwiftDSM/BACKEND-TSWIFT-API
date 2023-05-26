import { Router } from "express";
import { ProdutoController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get("/", Autenticador, ProdutoController.get);
routes.post("/", Autenticador, ProdutoController.post);
routes.delete("/:id", Autenticador, ProdutoController.delete);
routes.get("/:id", Autenticador, ProdutoController.getById);
routes.get("/porNome/:nomeProduto", Autenticador, ProdutoController.getByNome);
routes.put("/:id", Autenticador, ProdutoController.put);

export default routes;
