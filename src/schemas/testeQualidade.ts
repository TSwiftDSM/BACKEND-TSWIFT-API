import Joi from "joi";

class TesteQualidadeSchema {
  readonly joi = Joi.object({
    nomeTeste: Joi.string().required(),
  });
}

export default new TesteQualidadeSchema();
