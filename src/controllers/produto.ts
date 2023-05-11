/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProdutoController {
  async post(req: Request, res: Response) {
    const nomeProduto = req.body.nomeProduto;
    const unidade = req.body.unidade;
    try {
      const produto = await prisma.produto.create({
        data: {
          nomeProduto: nomeProduto,
          unidade: unidade,
        },
      });
      res.status(200).json(produto);
    } catch (exception) {
      console.log(`Uma exceção ocorreu: ${exception}`);
      res.status(500).json(exception);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const produtos = await prisma.produto.findMany();
      res.json(produtos);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const produto = await prisma.produto.findFirst({
        where: { id: parseInt(id) },
      });
      res.json(produto);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  async getByNome(req: Request, res: Response) {
    try {
      const nomeProduto = req.params.nomeProduto;
      const produto = await prisma.produto.findMany({
        where: {
          nomeProduto: {
            startsWith: nomeProduto,
          },
        },
      });
      res.status(200).json(produto);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async put(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const nomeProduto = req.body.nomeProduto;
      const unidadeMedida = req.body.unidadeMedida;
      const produto = await prisma.produto.update({
        where: { id: parseInt(id) },
        data: {
          nomeProduto: nomeProduto,
          unidade: unidadeMedida,
        },
      });
      res.json(produto);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}

export default new ProdutoController();
