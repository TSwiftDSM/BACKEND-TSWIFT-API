import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function cadastrarProduto(nome:string,unidadeMedida:string){
    try{
      const cadastrarProduto =await prisma.produto.create({
        data: {
          nomeProduto: nome ,
          unidade: unidadeMedida,
        },
      })
    }catch(exception){
        console.log(`Uma exceção ocorreu: ${exception}`)
        return {}
    }
  };

class CadastroProduto{
    async post (req: Request, res: Response) {
        const nome = req.body.nome;
        const unidadeMedida = req.body.unidadeMedida;
        cadastrarProduto(nome,unidadeMedida);
        res.send("Produto Cadastrado").status(200);
    };
}

export default new CadastroProduto();