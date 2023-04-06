import { Router } from "express";
import { DeclineThreeController } from "../controllers";

const routes = Router();

// routes.get("/",DeclineTwoController.get);
routes.post("/",DeclineThreeController.post)





export default routes;