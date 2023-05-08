import Joi from "joi";

class UsuarioSchema {
  readonly joi = Joi.object({
    nome: Joi.string().required(),
    login: Joi.string().required(),
    senha: Joi.string().required(),
    cpf: Joi.string().required(),
    dataNascimento: Joi.date().required(),
    tipoUsuarioId: Joi.number().required(),
  });
}

export default new UsuarioSchema();
