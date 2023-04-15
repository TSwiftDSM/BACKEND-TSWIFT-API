import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function cadastrarFornecedor(nomeFantasia:string,fornecedorCNPJ:string,razaoSocial:string,endereco:string){
    try{
      const cadastrarFornecedor =await prisma.fornecedor.create({
        data: {
          nomeFantasia: nomeFantasia ,
          fornecedorCNPJ: fornecedorCNPJ,
          razaoSocial: razaoSocial,
          endereco: endereco,
          transportadora: true,
          fornecedor: true,
        },
      })
    }catch(exception){
        console.log(`Uma exceção ocorreu: ${exception}`)
        return {}
    }
  };

class CadastroFornecedor{
    async post (req: Request, res: Response) {
        const nomeFantasia = req.body.nomeFantasia;
        const fornecedorCNPJ = req.body.fornecedorCNPJ;
        const razaoSocial = req.body.razaoSocial;
        const endereco = req.body.endereco;
        cadastrarFornecedor(nomeFantasia,fornecedorCNPJ,razaoSocial,endereco);
        res.json("Fornecedor Cadastrado").status(200);
    };
}

export default new CadastroFornecedor();