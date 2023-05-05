import Joi from "joi";

class TransportadoraFornecedorSchema {
  readonly joi = Joi.object({
    fornecedorId: Joi.number().required(),
    transportadoraId: Joi.number().required(),
  });
}

export default new TransportadoraFornecedorSchema();
