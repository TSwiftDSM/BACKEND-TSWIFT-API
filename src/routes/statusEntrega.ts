import { Router } from "express";
import { ControllerStatusEntrega } from "../controllers";

const routes = Router();

routes.get("/:idStatusEntrega", ControllerStatusEntrega.get);
routes.get("/", ControllerStatusEntrega.get);

export default routes;