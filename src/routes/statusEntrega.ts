import { Router } from "express";
import { ControllerStatusEntrega } from "../controllers";

const routes = Router();

routes.get("/:idStatusEntrega", ControllerStatusEntrega.get);
routes.get("/", ControllerStatusEntrega.get);
routes.post("/", ControllerStatusEntrega.post);
routes.put("/:idStatusEntrega", ControllerStatusEntrega.put);
routes.put("/", ControllerStatusEntrega.put);
routes.delete("/:idStatusEntrega", ControllerStatusEntrega.delete);
routes.delete("/", ControllerStatusEntrega.delete);

export default routes;
