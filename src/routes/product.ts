import { Router } from "express";

import { ProductController } from "../controllers";

const routes = Router();

routes.get("/", ProductController.get);

export default routes;
