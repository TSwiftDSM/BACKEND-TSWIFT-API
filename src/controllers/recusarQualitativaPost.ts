
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RecusarQualitativaControllerPost {

  async post(req: Request, res: Response) {
    const data = req.body

    const post = await prisma.entregaDesaprovada.create({
      data: {
        entregaId: data.idEntrega,
        motivo: data.motivo
      }
    });
    return res.json(post)
  }

}

export default new RecusarQualitativaControllerPost();
