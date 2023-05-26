/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import verificaPermissao from "../services/verificaPermissao";
import { Permissoes } from "../data/permissoes";

const prisma = new PrismaClient();

class ProdutoController {
  async post(req: Request, res: Response) {
    const nomeProduto = req.body.nomeProduto;
    const unidade = req.body.unidade;
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.PRODUTOS)
      if (!permissao) {
        return res.status(401)
      }
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
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.PRODUTOS)
      if (!permissao) {
        return res.status(401)
      }
      
      const produtos = await prisma.produto.findMany();
      res.json(produtos);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.PRODUTOS)
      if (!permissao) {
        return res.status(401)
      }
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
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.PRODUTOS)
      if (!permissao) {
        return res.status(401)
      }
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
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.PRODUTOS)
      if (!permissao) {
        return res.status(401)
      }
      const id = req.params.id;
      const nomeProduto = req.body.nomeProduto;
      const unidade = req.body.unidade;
      const produto = await prisma.produto.update({
        where: { id: parseInt(id) },
        data: {
          nomeProduto: nomeProduto,
          unidade: unidade,
        },
      });
      res.json(produto);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401)
      }
      const permissao = await verificaPermissao.validaPermissao(authorization, Permissoes.PRODUTOS)
      if (!permissao) {
        return res.status(401)
      }
      const id = parseInt(req.params.id);
      await prisma.$transaction([
        prisma.fornecedorProduto.deleteMany({
          where: {
            produtoId: id, // o ID do registro em ModeloB correspondente que deseja excluir
          },
        }),
        prisma.entregaProduto.deleteMany({
          where: {
            produtoId: id,
          },
        }),
        prisma.qualidadeProduto.deleteMany({
          where: {
            produtoId: id,
          },
        }),
        prisma.produto.deleteMany({
          where: {
            id: id,
          },
        }),
      ]);
      res.status(200).json("Produto deletado");
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

export default new ProdutoController();
