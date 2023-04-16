import { Router } from "express";
import menu from "../controllers/menu";

const routes = Router();

routes.get("/api/PesquisarPedidos", menu.PesquisaPedidos);


export default routes;