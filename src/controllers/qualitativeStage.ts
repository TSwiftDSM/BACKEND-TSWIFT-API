/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { number, string } from "joi";

const prisma = new PrismaClient();

class QualitativeStageController {

  async PersistenciaDados(req: Request, res: Response) {
    let qualidadeProdutos;
    if (typeof req.query.qualidadeProdutos === 'string') {
      qualidadeProdutos = JSON.parse(req.query.qualidadeProdutos);
      console.log('TESTE 1')
  } else {
      qualidadeProdutos = JSON.parse(req.body.qualidadeProdutos);
      console.log(qualidadeProdutos)
      console.log('TESTE 2')
    }


  // for (const produtos of qualidadeProdutos){
  //    const nomeChkSim = `qualidadeSim${produtos.Produto.id}-${produtos.TesteQualidade.id}`
  //    const nomeChkNao = `qualidadeNao${produtos.Produto.id}-${produtos.TesteQualidade.id}`
  //    //console.log(nomeChkSim)
  //    //console.log(nomeChkSim)
  //    //const aprovadoSim = req.body.Record
  //    //const aprovadoNao = req.body[nomeChkNao]
  //    //console.log(aprovadoSim)
  //    //console.log(aprovadoNao)
  // }

  
  //   const statusDeliveries: {
  //     approved: typeof qualidadeProdutos.Approved
  //     deliveryId: typeof qualidadeProdutos.idDelivery
  //     stepName: 'ETAPA QUALITATIVA'
  //     userId: 1
  //   }
  //   let aprovado = 0 
  //   for (const testeProduto of  qualidadeProdutos){
  //      if (testeProduto.Approved == false){
  //        // Ação caso um dos produtos não tenha sido aprovado e não seja obrigatorio
  //        aprovado = aprovado+1;
  //       }
  //     }
  //   if (aprovado >0){
  //     // Ação caso um dos produtos não tenha sido aprovado e não seja obrigatorio
  //   }
  //   else{
  //     // Ação caso todos os produtos tenham sido aprovados
  //     const statusEntrega = await prisma.StatusDelivery.create({ data: statusDeliveries })
  //   }
  
  }
  async post(req: Request, res: Response) {
    const { idDelivery } = req.body;

    const deliveryProduct = await prisma.entregaProduto.findMany({
      where: {
        EntregaId: parseInt(idDelivery),
      },
      select: {
        produtoId: true,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products: Array<any> = [];

    // Transformando deliveryProduct Em uma lista de números com os valores dos ID's
    (await deliveryProduct).forEach((idProdutcts: { produtoId: any; }) => {
      products.push(idProdutcts.produtoId);
    });

    const listDeliveryProducts: Array<number> = products;

    const qualidadeProdutos = await prisma.qualidadeProduto.findMany({
      where: {
        Produto: {
          id: {
            in: listDeliveryProducts,
          },
        },
      },
      select: {
        Produto: {
          select: {
            id: true,
            nomeProduto: true,
          },
        },
        TesteQualidade: {
          select: {
            id: true,
            nomeTeste: true,
          },
        },
      },
    });
    for (const produtos of qualidadeProdutos) {
      Object.defineProperty(produtos, 'EntregaId', {
        value: idDelivery,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
    //res.send(qualidadeProdutos)
    res.render("qualityStage", { qualidadeProdutos: qualidadeProdutos });
  }
}

export default new QualitativeStageController();
