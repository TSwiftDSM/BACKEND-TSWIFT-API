import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function Autenticador(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.sendStatus(401);
    }
    const token = authorization.replace("Bearer", "").trim();
    const data = jwt.verify(token, "segredo");
    console.log(data);
    return next();
  } catch {
    return res.sendStatus(401);
  }
}
