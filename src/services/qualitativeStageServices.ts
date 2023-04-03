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

import { Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CadastroStatusEntrega {
    //Cadastra O Status da Entrega, pegando se foi aprovado ou Não pelo argumento "Aprovado"
    public async cadastroStatusEntrega(aprovado: boolean, entregaId: number, usuarioId: number, etapaEntrega: string) {

        await prisma.statusEntrega.create({
            data: {
                aprovado: aprovado,
                entregaId: entregaId,
                usuarioId: usuarioId,
                etapaEntrega: etapaEntrega
            }
        })
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

    public async SelecionarQualidadeProduto(listaProdutos: Array<number>, idEntrega: number) {
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
        for (const produtos of qualidadeProdutoSelecao) {
            Object.defineProperty(produtos, 'EntregaId', {
              value: idEntrega,
              writable: true,
              enumerable: true,
              configurable: true
            });
        }
        return qualidadeProdutoSelecao
    }

    public async VerificandoRecusa(req: Request, qualidadeProdutos: any) {
        let contador = 0 //Contador que controla em qual endereço da lista de arrays será acessado dentro do loop
        let contadorObrigatorio = 0 //Contador que controla se um teste de qualidade obrigatório não passou no teste de qualidade
        // O req.body funciona com chave e valor, sendo "key a chave"
        for (const key in req.body) {
            //Estamos procurando toda a chave que começa com "aprovado" pois as chaves do body serão variadas
            if (key.startsWith(`aprovado`)) {
                const idProduto = parseInt(qualidadeProdutos[contador].Produto.id)
                const idTesteQualiadade = parseInt(qualidadeProdutos[contador].TesteQualidade.id)
                const recusado = req.body[key];

                // Verifica se ele foi aprovado ou não, caso recusado = true quer dizer que ele foi recusado
                if (recusado == 'true') {
                    // Adiciona um elemento "Aprovado" dentro do Objeto
                    qualidadeProdutos[contador].Aprovado = false
                    // Pega o campo "obrigatorio" para verificar se o teste qualidade daquele Produto é obrigatório ou não
                    const obrigatorio = await prisma.qualidadeProduto.findFirst({
                        where: {
                            Produto: {
                                id: idProduto
                            },
                            TesteQualidade: {
                                id: idTesteQualiadade
                            }
                        },
                        select: {
                            obrigatorio: true
                        }
                    })
                    //Verifica se o teste de qualidade é obrigatório ou não quando o teste de qualidade foi recusado
                    if (obrigatorio?.obrigatorio && recusado == 'true') {
                        //Caso seja obrigatório ele adiciona o elemento "Obrigatorio"  como true e adiciona 1 no contador
                        qualidadeProdutos[contador].Obrigatorio = true
                        contadorObrigatorio = contadorObrigatorio + 1
                    } else {
                        //Caso não seja obrigatório apenas adiciona o elemnto "Obrigatorio" como false
                        qualidadeProdutos[contador].Obrigatorio = false
                    }
                }
                // Adiciona 1 no contador
                contador = contador + 1;
            }
        }
        return contadorObrigatorio
    }

}