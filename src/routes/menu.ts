import { Router } from "express";
import menu from "../controllers/menu";
import Autenticador from "../middlewares/autenticadorMiddleware"


const routes = Router();

routes.get("/api/PesquisarPedidos",Autenticador, menu.PesquisaPedidos);

export default routes;
