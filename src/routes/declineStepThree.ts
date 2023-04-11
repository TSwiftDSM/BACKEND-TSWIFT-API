import { Router } from "express";
import { DeclineThreeController } from "../controllers";

const routes = Router();

// routes.get("/",DeclineThreeController.get);
routes.post("/:entregaId",DeclineThreeController.post)





export default routes;