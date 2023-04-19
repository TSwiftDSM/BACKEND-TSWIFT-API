import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class CadastroFornecedor{
    async post (req: Request, res: Response) {
        const nomeFantasia = req.body.nomeFantasia;
        const fornecedorCNPJ = req.body.fornecedorCNPJ;
        const razaoSocial = req.body.razaoSocial;
        const endereco = req.body.endereco;
        try{
          const cadastrarFornecedor = await prisma.fornecedor.create({  //Função para cadastrar Fornecedor
            data: {
              nomeFantasia: nomeFantasia ,
              fornecedorCNPJ: fornecedorCNPJ,
              razaoSocial: razaoSocial,
              endereco: endereco,
              transportadora: false,
              fornecedor: true,
            },
          })
        }catch(exception){
            console.log(`Uma exceção ocorreu: ${exception} CNPJ já cadastrado`)
            return res.send("CNPJ já cadastrado").status(400) //Se ocorrer uma exeção retorna 'CNPJ já cadastrado'
        }
        res.send("Fornecedor Cadastrado").status(200);
    };
}

export default new CadastroFornecedor();