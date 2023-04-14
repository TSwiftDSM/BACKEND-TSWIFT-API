/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { number, string } from "joi";
import  { CadastroStatusEntrega }  from "../services/qualitativeStageServices"
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const cadastroStatusEntrega = new CadastroStatusEntrega

class QualitativeStageController { 

  async PersistenciaDados(req: Request, res: Response) {
    
    let qualidadeProdutos;
    // Pega o Objeto que vem do Front e verrifica se ele é uma String
    if (typeof req.query.qualidadeProdutos === 'string') {
      qualidadeProdutos = JSON.parse(req.query.qualidadeProdutos);
    } else {
      // Transforma o que veio de Front em um Json
      qualidadeProdutos = JSON.parse(req.body.qualidadeProdutos);
    }
  
    const recusado = await cadastroStatusEntrega.VerificandoRecusa(qualidadeProdutos)   

    //Verifica se teve algum deste obrigatorio que foi recusado
   // if (await contadorObrigatorio) {
      //Caso sim ele chama a tela de recusa qualitativa
      // Função que chama o cadastro de Recusa da entrega
      console.log('Entrega recusada')
    //}
   // else {
      //Caso não ele cadastra que foi aprovado     
     // cadastroStatusEntrega.cadastroStatusEntrega(true, parseInt(qualidadeProdutos[0].EntregaId), parseInt('1'), 'Qualitativa')
    //}
  }

  async post(req: Request, res: Response) {
    const  idEntrega  = parseInt(req.body.idEntrega);

    const deliveryProduct = cadastroStatusEntrega.SelecionarEntregaProduto(idEntrega)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const produtos: Array<any> = [];

    // Transformando deliveryProduct Em uma lista de números com os valores dos ID's
    (await deliveryProduct).forEach((idProdutcts: { produtoId: any; }) => {
      produtos.push(idProdutcts.produtoId);
    });

    const listDeliveryProducts: Array<number> = produtos;

    const qualidadeProdutos = await cadastroStatusEntrega.SelecionarQualidadeProduto(listDeliveryProducts)

    res.send(qualidadeProdutos);
  }
}

export default new QualitativeStageController();
