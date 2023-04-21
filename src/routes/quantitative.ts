import { Router } from "express";

import { QuantitativeController } from "../controllers";

const routes = Router();

routes.get("/:deliveryId", QuantitativeController.get);
routes.post("/", QuantitativeController.post);

export default routes;
