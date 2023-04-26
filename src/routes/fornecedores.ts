import { Router } from "express";

import { Fornecedor } from "../controllers";
import { schemaValidator } from "../middlewares";
import { FornecedorSchema } from "../schemas";

const routes = Router();

routes.get("/", Fornecedor.get);
routes.post("/", schemaValidator(FornecedorSchema.joi), Fornecedor.post)
routes.delete("/:id", Fornecedor.delete)
routes.put("/:id", schemaValidator(FornecedorSchema.joi), Fornecedor.update)

export default routes;