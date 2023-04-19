import Joi from "joi";

class EntregaSchema {
  readonly joi = Joi.object({
    nfe: Joi.string().required(),
    numeroPedido: Joi.string().required(),
    tipoFrete: Joi.string().required(),
    formaPagamento: Joi.string().required(),
    etapaEntrega: Joi.string(),
    fornecedorId: Joi.number(),
    transportadoraId: Joi.number(),
  });
}

export default new EntregaSchema();
