import { Router } from "express";

import { EntregaProduto } from "../controllers";
import { schemaValidator } from "../middlewares";
import { EntregaProdutoSchema } from "../schemas";

const routes = Router();

routes.get("/", EntregaProduto.get);
routes.get("/porIdEntrega/:idEntrega", EntregaProduto.getPorIdEntrega);
routes.get("/porId/:id", EntregaProduto.getPorId);
routes.post("/", schemaValidator(EntregaProdutoSchema.joi), EntregaProduto.post);
routes.put("/:id", schemaValidator(EntregaProdutoSchema.joi), EntregaProduto.update);
routes.delete("/:id", EntregaProduto.delete);

export default routes;
