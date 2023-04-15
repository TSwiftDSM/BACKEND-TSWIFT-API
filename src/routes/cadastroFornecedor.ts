import { Router } from "express";
import { CadastroFornecedorController } from "../controllers";

const routes = Router();

routes.post("/",CadastroFornecedorController.post);

export default routes;