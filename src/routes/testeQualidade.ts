import { Router } from "express";

import { TesteQualidade } from "../controllers";
import { schemaValidator } from "../middlewares";
import { TesteQualidadeSchema } from "../schemas";

const routes = Router();

routes.get("/", TesteQualidade.get);
routes.get("/porId/:id", TesteQualidade.getPorId);
routes.get("/porNome/:nome", TesteQualidade.getPorNome);
routes.post(
  "/",
  schemaValidator(TesteQualidadeSchema.joi),
  TesteQualidade.post
);
routes.put(
  "/:id",
  schemaValidator(TesteQualidadeSchema.joi),
  TesteQualidade.update
);
routes.delete("/:id", TesteQualidade.delete);

export default routes;
