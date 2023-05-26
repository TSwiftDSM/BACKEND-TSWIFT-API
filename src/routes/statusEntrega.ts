import { Router } from "express";
import { ControllerStatusEntrega } from "../controllers";
import Autenticador from "../middlewares/autenticadorMiddleware";

const routes = Router();

routes.get("/:idStatusEntrega", Autenticador, ControllerStatusEntrega.get);
routes.get("/", Autenticador, ControllerStatusEntrega.get);
routes.post("/", Autenticador, ControllerStatusEntrega.post);
routes.put("/:idStatusEntrega", Autenticador, ControllerStatusEntrega.put);
routes.put("/", Autenticador, ControllerStatusEntrega.put);
routes.delete(
  "/:idStatusEntrega",
  Autenticador,
  ControllerStatusEntrega.delete
);
routes.delete("/", Autenticador, ControllerStatusEntrega.delete);

export default routes;
