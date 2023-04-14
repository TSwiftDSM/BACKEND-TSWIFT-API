import { Router } from "express";
import { CadastroProdutoController } from "../controllers";

const routes = Router();

routes.post("/",CadastroProdutoController.post);

export default routes;