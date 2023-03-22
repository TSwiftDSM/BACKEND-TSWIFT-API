import { Router } from "express";

import { QuantitativeController } from "../controllers";

const routes = Router();

routes.get("/", QuantitativeController.get);
routes.post("/", QuantitativeController.post);

// routes.post("/conferencia/quantitativa", console.log("Post"))

export default routes;