import { Router } from "express";
import { DeclineController } from "../controllers";

const routes = Router();

routes.get("/:entregaId",DeclineController.get);
routes.post("/:entregaId",DeclineController.post)





export default routes;

