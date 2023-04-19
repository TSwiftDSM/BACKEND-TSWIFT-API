import { Router } from "express";
import { RecusarQualitativaController } from "../controllers";

const routes = Router();

// routes.get("/",DeclineTwoController.get);
routes.post("/:entregaId",RecusarQualitativaController.post)





export default routes;