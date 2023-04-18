import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// async function cadastrarFornecedor(nomeFantasia:string,fornecedorCNPJ:string,razaoSocial:string,endereco:string){
//     try{
//       const cadastrarFornecedor =await prisma.fornecedor.create({
//         data: {
//           nomeFantasia: nomeFantasia ,
//           fornecedorCNPJ: fornecedorCNPJ,
//           razaoSocial: razaoSocial,
//           endereco: endereco,
//           transportadora: false,
//           fornecedor: true,
//         },
//       })
//     }catch(exception){
//         console.log(`Uma exceção ocorreu: ${exception} CNPJ já cadastrado`)
//         return res.json("CNPJ já cadastrado")
//     }
//   };

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
            return res.json("CNPJ já cadastrado").status(400) //Se ocorrer uma exeção retorna 'CNPJ já cadastrado'
        }
        res.json("Fornecedor Cadastrado").status(200);
    };
}

export default new CadastroFornecedor();