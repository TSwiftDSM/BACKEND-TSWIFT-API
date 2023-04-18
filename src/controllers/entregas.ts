import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EntregaController {
  async get(req: Request, res: Response) {
    try {
      const entregas = await prisma.entrega.findMany();
      return res.status(200).json(entregas);
    } catch {
      res.send("Erro ao retornar dados");
    }
  }

  async post(req: Request, res: Response) {
    try {
      const data = req.body;

      const entrega = await prisma.entrega.create({
        data: data,
      });
      res.status(201).json(entrega);
    } catch (e) {
      console.log(e);
      res.send("Erro ao criar entrega");
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.entrega.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json(user);
    } catch {
      res.status(400).send("Entrega não encontrada");
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;

      const entrega = await prisma.entrega.update({
        where: {
          id: parseInt(id),
        },
        data: data,
      });
      res.status(201).json(entrega);
    } catch (e) {
      console.log(e);
      res.send("Erro ao editar entrega");
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.entrega.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).send("Entrega deletada");
    } catch {
      res.status(400).send("Erro ao deletar entrega");
    }
  }
}

export default new EntregaController();
