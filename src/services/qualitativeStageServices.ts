/*
STD DOCTEXT TEMPLATE
---------------------
    Linha 1 - O que o módulo faz
    Linha 2 - Entradas e saídas esperadas
    Linha 3 - Exemplo de utilização

Módulo HelloWorld
------------------
    - 1. Módulo que gerencia e retorna uma mensagem de boas vindas
    - 2. IN(
            constructor message[string],
            setMessage() newMessage[string]
         ),
         OU(
            getMessage()[string]
         )
    - 3. let hello = new HelloWorld("Bem vindo")
            console.log(hello.getMessage())
            >> "Bem vindo"
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CadastroStatusEntrega {
  //Cadastra O Status da Entrega, pegando se foi aprovado ou Não pelo argumento "Aprovado"

  public async cadastroRecusa(testeProdutos: any) {
    //
    await testeProdutos.forEach(
      async (testeProduto: {
        idEntrega: number;
        idQualidade: number;
        idProduto: number;
        status: boolean;
      }) => {
        if (!testeProduto.status) {
          await prisma.entregaDesaprovada.create({
            data: {
              motivo: "Produto: " + testeProduto.idProduto,
              testeQualidadeId: testeProduto.idQualidade,
              entregaId: testeProduto.idEntrega,
            },
          });
        }
      }
    );
  }

  //Cadastra O Status da Entrega, pegando se foi aprovado ou Não pelo argumento "Aprovado"
  public async cadastroStatusEntrega(
    aprovado: boolean,
    entregaId: number,
    usuarioId: number,
    etapaEntrega: string
  ) {
    const teste = await prisma.statusEntrega.create({
      data: {
        aprovado: aprovado,
        entregaId: entregaId,
        usuarioId: usuarioId,
        etapaEntrega: etapaEntrega,
      },
    });
    await prisma.entrega.update({
      data: {
        etapaEntrega: etapaEntrega
      },
      where: {
        id: entregaId
      }
    });
    console.log(teste);
  }

  public async SelecionarEntregaProduto(idEntrega: number) {
    return await prisma.entregaProduto.findMany({
      where: {
        EntregaId: idEntrega,
      },
      select: {
        produtoId: true,
      },
    });
  }

  public async SelecionarQualidadeProduto(listaProdutos: Array<number>) {
    const qualidadeProdutoSelecao = await prisma.qualidadeProduto.findMany({
      where: {
        Produto: {
          id: {
            in: listaProdutos,
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

    const produtosAgrupados = qualidadeProdutoSelecao.reduce(
      (acc: any, { Produto, TesteQualidade }: any) => {
        (acc as any)[Produto.id] ??= { ...Produto, TesteQualidade: [] };
        (acc as any)[Produto.id].TesteQualidade.push(TesteQualidade);
        return acc;
      },
      {}
    );

    return produtosAgrupados;
  }

  public async VerificandoRecusa(testeProdutos: any) {
    let aprovado = true;

    for (const testeProduto of testeProdutos) {
      if (!testeProduto.status) {
        const obrigatorio = await prisma.qualidadeProduto.findFirst({
          where: {
            Produto: {
              id: testeProduto.idProduto,
            },
            TesteQualidade: {
              id: testeProduto.idQualidade,
            },
          },
          select: {
            obrigatorio: true,
          },
        });
        if (obrigatorio?.obrigatorio) {
          aprovado = false;
          testeProduto.Obrigatorio = true;
        } else {
          //Caso não seja obrigatório apenas adiciona o elemento "Obrigatorio" como false
          testeProduto.Obrigatorio = false;
        }
        
      } else {
        testeProduto.Obrigatorio = true;
      }
    }
    return aprovado;
  }
}
