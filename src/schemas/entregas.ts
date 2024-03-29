import Joi from "joi";

class EntregaSchema {
  readonly joi = Joi.object({
    tipoFrete: Joi.string().required(),
    formaPagamento: Joi.string().required(),
    etapaEntrega: Joi.string(),
    fornecedorId: Joi.number(),
    dataEntrega: Joi.date().required(),
    transportadoraId: Joi.number(),
  });
}

export default new EntregaSchema();
