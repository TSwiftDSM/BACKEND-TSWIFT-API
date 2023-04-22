/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { number, string } from "joi";
import { CadastroStatusEntrega } from "../services/qualitativeStageServices";

const cadastroStatusEntrega = new CadastroStatusEntrega();

class QualitativeStageController {
  async post(req: Request, res: Response) {
    const data = req.body.qualidadeProdutos;

    const aprovado = await cadastroStatusEntrega.VerificandoRecusa(data);

    //Verifica se teve algum deste obrigatorio que foi recusado
    if (await !aprovado) {
      //Caso sim ele chama a tela de recusa qualitativa
      // Função que chama o cadastro de Recusa da entrega
      cadastroStatusEntrega.cadastroRecusa(data);
      cadastroStatusEntrega.cadastroStatusEntrega(
        false,
        parseInt(data[0].idEntrega),
        1,
        "QUALITATIVA"
      );
      res.status(201).send("Entrega Recusada");
    } else {
      //Caso não ele cadastra que foi aprovado
      cadastroStatusEntrega.cadastroStatusEntrega(
        true,
        parseInt(data[0].idEntrega),
        1,
        "QUALITATIVA"
      );
      cadastroStatusEntrega.cadastroRecusa(data);
      res.status(201).send("Entrega Aprovada");
    }
  }

  async get(req: Request, res: Response) {
    const idEntrega = parseInt(req.body.idEntrega);

    const deliveryProduct =
      cadastroStatusEntrega.SelecionarEntregaProduto(idEntrega);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const produtos: Array<any> = [];

    // Transformando deliveryProduct Em uma lista de números com os valores dos ID's
    (await deliveryProduct).forEach((idProdutcts: { produtoId: any }) => {
      produtos.push(idProdutcts.produtoId);
    });

    const listDeliveryProducts: Array<number> = produtos;

    const qualidadeProdutos =
      await cadastroStatusEntrega.SelecionarQualidadeProduto(
        listDeliveryProducts
      );

    res.send(qualidadeProdutos);
  }
}

export default new QualitativeStageController();
