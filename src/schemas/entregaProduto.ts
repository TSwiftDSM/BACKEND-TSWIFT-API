import Joi from "joi";

class EntregaProdutoSchema {
  readonly joi = Joi.object({
    quantidade: Joi.number().required(),
    pesoPrevisto: Joi.number().required(),
    pesoReal: Joi.number().required(),
    especificacao: Joi.string().required(),
    produtoId: Joi.number(),
    EntregaId: Joi.number(),
  });
}

export default new EntregaProdutoSchema();
