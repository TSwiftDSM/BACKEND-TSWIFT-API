import { Router } from "express";
import { DeclineController } from "../controllers";

const routes = Router();

routes.get("/",DeclineController.get);
routes.post("/",DeclineController.post)





export default routes;

