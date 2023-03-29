import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const schemaValidator = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      res.status(400).json({ error: message });
    } else {
      next();
    }
  };
};
