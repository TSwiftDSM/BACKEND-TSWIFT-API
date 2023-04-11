import { Router } from "express";
import { DeclineTwoController } from "../controllers";

const routes = Router();

// routes.get("/",DeclineTwoController.get);
routes.post("/:entregaId",DeclineTwoController.post)





export default routes;