import Joi from "joi";

class FornecedorSchema {
  readonly joi = Joi.object({
    nomeFantasia: Joi.string().required(),
    fornecedorCNPJ: Joi.string().required(),
    razaoSocial: Joi.string().required(),
    endereco: Joi.string().required(),
    transportadora: Joi.boolean(),
    fornecedor: Joi.boolean(),
  });
}

export default new FornecedorSchema();
