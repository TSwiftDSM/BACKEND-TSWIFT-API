import { Router } from "express";
import { ControllerRelatorios } from "../controllers";

const routes = Router();

routes.get("/:numeroPedido", ControllerRelatorios.get);

export default routes;