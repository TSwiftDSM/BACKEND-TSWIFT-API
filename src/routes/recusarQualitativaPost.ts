import { Router } from "express";
import Autenticador from "../middlewares/autenticadorMiddleware";
import { RecusarQualitativaControllerPost } from "../controllers"

const routes = Router();

routes.post("/simples", Autenticador,  RecusarQualitativaControllerPost.post)

export default routes;
