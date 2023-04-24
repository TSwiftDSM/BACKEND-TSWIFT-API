import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function buscarIdStatusEntrega(entregaId: number) {
  try {
    const statusEntrega = await prisma.statusEntrega.findMany({
      select: {
        id: true,
      },
      where: {
        entregaId: entregaId,
      },
    });
    if (statusEntrega.length === 0) {
      throw new Error(
        `Nenhum resultado encontrado para entregaId: ${entregaId}`
      );
    }
    const idStatusEntrega = statusEntrega.map((s) => s.id);
    return idStatusEntrega;
  } catch (exception) {
    console.log(`Uma exceção ocorreu: ${exception}`);
    return [];
  }
}

async function alterarStatusEntrega(
  idStatusEntrega: Array<number>,
  usuarioId: number
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await prisma.statusEntrega.updateMany({
      where: {
        id: {
          in: idStatusEntrega,
        },
      },
      data: {
        aprovado: true,
        usuarioId: usuarioId,
      },
    });
  } catch (exception) {
    console.log(`Uma exceção ocorreu: ${exception}`);
    return {};
  }
}

class ForcarAceitacaoController {
  async post(req: Request, res: Response) {
    const entregaId = parseInt(req.params.entregaId); // pega a entregaId pelo parametro da url
    const usuarioId = parseInt(req.params.usuarioId); // pega a usuarioId pelo parametro da url
    const idStatusEntrega: Array<number> = await buscarIdStatusEntrega(
      entregaId
    ); //busca o id do statusEntrega
    await alterarStatusEntrega(idStatusEntrega, usuarioId); // ele altera o status de reprovado para aprovado de acordo com o id do status
    res.send("Forçar Aceitação concluida").status(200);
  }
}

export default new ForcarAceitacaoController();
