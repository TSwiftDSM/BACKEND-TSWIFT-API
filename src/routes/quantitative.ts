import { Router } from "express";
import { QuantitativeController } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware"

const routes = Router();

routes.get("/:deliveryId",Autenticador, QuantitativeController.get);
routes.post("/:deliveryId",Autenticador, QuantitativeController.post);

export default routes;
