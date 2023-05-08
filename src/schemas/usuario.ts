import Joi from "joi";

class UsuarioSchema {
  readonly joi = Joi.object({
    nome: Joi.string().required(),
    login: Joi.string(),
    senha: Joi.string(),
    cpf: Joi.string().required(),
    dataNascimento: Joi.date().required(),
    tipoUsuarioId: Joi.number().required(),
  });
}

export default new UsuarioSchema();
