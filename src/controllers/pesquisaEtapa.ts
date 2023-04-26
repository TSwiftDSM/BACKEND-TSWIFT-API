import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PesquisaEtapa {
  //
  async PesquisarEtapa(req: Request, res: Response) {
    //
    const idEntrega: number = parseInt(req.params.idEntrega);

    const etapas = await prisma.statusEntrega.findMany({
      where: {
        entregaId: idEntrega,
      },
      select: {
        etapaEntrega: true,
        aprovado: true,
      },
    });
    res.send(etapas);
  }
}

export default new PesquisaEtapa();
