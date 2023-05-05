import Joi from "joi";

class TipoUsuarioSchema {
  readonly joi = Joi.object({
    tipoUsuario: Joi.string().required(),
  });
}

export default new TipoUsuarioSchema();
