import { Router } from "express";

import { Fornecedor } from "../controllers";
import { schemaValidator } from "../middlewares";
import { FornecedorSchema } from "../schemas";
import Autenticador from "../middlewares/autenticadorMiddleware"

const routes = Router();

routes.get("/",Autenticador, Fornecedor.get);
routes.get("/nome/porNome/:nomeFantaisa",Autenticador, Fornecedor.getNomePornome);
routes.get("/porId/:id",Autenticador, Fornecedor.getPorId);
routes.get("/porNome/:nomeFantasia",Autenticador, Fornecedor.getPorNome);
routes.get("/porId/:id/transportadora",Autenticador, Fornecedor.getTransportadoraPorId);
routes.get(
  "/porNome/:nomeFantasia/transportadora",Autenticador,
  Fornecedor.getTransportadoraPorNome
);
routes.get("/transportadora",Autenticador, Fornecedor.getTransportadora);
routes.post("/",Autenticador, schemaValidator(FornecedorSchema.joi), Fornecedor.post);
routes.delete("/:id",Autenticador, Fornecedor.delete);
routes.put("/:id",Autenticador, schemaValidator(FornecedorSchema.joi), Fornecedor.update);

export default routes;
