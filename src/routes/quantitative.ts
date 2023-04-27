import { Router } from "express";
import { QuantitativeController } from "../controllers";

const routes = Router();

routes.get("/:deliveryId", QuantitativeController.get);
routes.post("/:deliveryId", QuantitativeController.post);

export default routes;
