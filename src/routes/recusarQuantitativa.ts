import { Router } from "express";
import { RecusarQuantitativaController } from "../controllers";

const routes = Router();

// routes.get("/",DeclineThreeController.get);
routes.post("/:entregaId",RecusarQuantitativaController.post)





export default routes;