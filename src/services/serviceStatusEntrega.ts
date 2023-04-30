import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface objStatusEntrega {
  etapaEntrega: string;
  aprovado: boolean;
  entregaId: number;
  usuarioId: number;
}

class ServiceStatusEntrega {
  public async getStatusEntrega() {
    try {
      const resp = await prisma.statusEntrega.findMany();
      return resp;
    } catch (exception) {
      console.log(exception);
      return {};
    }
  }

  public async getManyStatusEntrega(id: number) {
    try {
      const resp = await prisma.statusEntrega.findUnique({
        where: {
          id: id,
        },
      });
      return resp;
    } catch (exception) {
      console.log(exception);
      return {};
    }
  }

  public async postStatusEntrega(obj: objStatusEntrega) {
    try {
      await prisma.statusEntrega.create({
        data: {
          etapaEntrega: obj.etapaEntrega,
          aprovado: obj.aprovado,
          entregaId: obj.entregaId,
          usuarioId: obj.usuarioId,
        },
      });

      return 201;
    } catch (exception) {
      console.log(exception);
      return 400;
    }
  }

  public async putStatusEntrega(obj: objStatusEntrega, id: number) {
    try {
      await prisma.statusEntrega.update({
        where: {
          id: id,
        },
        data: {
          etapaEntrega: obj.etapaEntrega,
          aprovado: obj.aprovado,
          entregaId: obj.entregaId,
          usuarioId: obj.usuarioId,
        },
      });

      return 200;
    } catch (exception) {
      console.log(exception);
      return 400;
    }
  }

  public async deleteStatusEntrega(id: number) {
    try {
      await prisma.statusEntrega.delete({
        where: {
          id: id,
        },
      });

      return 200;
    } catch (exception) {
      console.log(exception);
      return 400;
    }
  }
}

export default new ServiceStatusEntrega();
