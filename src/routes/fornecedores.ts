import { Router } from "express";

import { Fornecedor } from "../controllers";
import { schemaValidator } from "../middlewares";
import { FornecedorSchema } from "../schemas";

const routes = Router();

routes.get("/", Fornecedor.get);
routes.get("/nome/porNome/:nomeFantaisa", Fornecedor.getNomePornome)
routes.get("/porId/:id", Fornecedor.getPorId);
routes.get("/porNome/:nomeFantasia", Fornecedor.getPorNome);
routes.get("/porId/:id/transportadora", Fornecedor.getTransportadoraPorId);
routes.get(
  "/porNome/:nomeFantasia/transportadora",
  Fornecedor.getTransportadoraPorNome
);
routes.get("/transportadora", Fornecedor.getTransportadora);
routes.post("/", schemaValidator(FornecedorSchema.joi), Fornecedor.post);
routes.delete("/:id", Fornecedor.delete);
routes.put("/:id", schemaValidator(FornecedorSchema.joi), Fornecedor.update);

export default routes;
