import { Router } from "express";
import { CadastroFornecedorController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.post("/", Autenticador, CadastroFornecedorController.post);

export default routes;
