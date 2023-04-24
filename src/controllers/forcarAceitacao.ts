import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type StatusEntrega = {
  id: number;
};

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
    const idStatusEntrega = statusEntrega[0]?.id;
    // return JSON.stringify({ id: idStatusEntrega });
    return { id: idStatusEntrega };
  } catch (exception) {
    console.log(`Uma exceção ocorreu: ${exception}`);
    return {};
  }
}

async function alterarStatusEntrega(
  idStatusEntrega: number,
  usuarioId: number
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const alterarStatusEntrega = await prisma.statusEntrega.update({
      where: {
        id: idStatusEntrega,
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
    const idStatusEntrega = await buscarIdStatusEntrega(entregaId); //busca o id do statusEntrega
    const idObj = JSON.parse(JSON.stringify(idStatusEntrega)) as StatusEntrega; // pegar o id da função buscarIdStatusEntrega pelo atributo id
    const idInt = idObj.id; // transforma o id em inteiro
    await alterarStatusEntrega(idInt, usuarioId); // ele altera o status de reprovado para aprovado de acordo com o id do status
    res.send("Forçar Aceitação concluida").status(200);
  }
}

export default new ForcarAceitacaoController();
