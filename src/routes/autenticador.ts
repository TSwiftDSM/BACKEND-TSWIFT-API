import { Router } from "express";
import { autenticarUsuario } from "../controllers";

const routes = Router();

routes.post('/', autenticarUsuario.autenticar)

export default routes;
