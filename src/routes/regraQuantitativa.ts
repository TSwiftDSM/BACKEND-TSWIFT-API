import { Router } from "express";
import { regraQuantitativa } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get("/", Autenticador,regraQuantitativa.get)
routes.put("/", Autenticador ,regraQuantitativa.put)

export default routes;