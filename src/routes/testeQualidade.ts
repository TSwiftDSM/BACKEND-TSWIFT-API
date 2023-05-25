import { Router } from "express";

import { TesteQualidade } from "../controllers";
import { schemaValidator } from "../middlewares";
import { TesteQualidadeSchema } from "../schemas";
import Autenticador from "../middlewares/autenticadorMiddleware"


const routes = Router();

routes.get("/",Autenticador, TesteQualidade.get);
routes.get("/porId/:id",Autenticador, TesteQualidade.getPorId);
routes.post(
  "/",Autenticador,
  schemaValidator(TesteQualidadeSchema.joi),
  TesteQualidade.post
);
routes.put(
  "/:id",Autenticador,
  schemaValidator(TesteQualidadeSchema.joi),
  TesteQualidade.update
);
routes.delete("/:id",Autenticador, TesteQualidade.delete);

export default routes;
