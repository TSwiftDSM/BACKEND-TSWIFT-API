import { Router } from "express";
import { ControllerRelatorios } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get("/:numeroPedido", ControllerRelatorios.get);

export default routes;