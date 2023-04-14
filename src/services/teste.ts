
const teste = [
    {
      Produto: {
        id: 4,
        nomeProduto: "PRODUTO 1",
      },
      TesteQualidade: {
        id: 1,
        nomeTeste: "TESTE QUALIDADE 1",
      },
    },
    {
      Produto: {
        id: 1,
        nomeProduto: "PRODUTO 1",
      },
      TesteQualidade: {
        id: 2,
        nomeTeste: "TESTE QUALIDADE 2",
      },
    },
    {
      Produto: {
        id: 2,
        nomeProduto: "PRODUTO 2",
      },
      TesteQualidade: {
        id: 1,
        nomeTeste: "TESTE QUALIDADE 1",
      },
    },
]


const a = teste.reduce((acc, { Produto, TesteQualidade }) => {
    acc[Produto.id] ??= { Produto: Produto.id, nome: Produto.nomeProduto, TesteQualidade: [] }
    acc[Produto.id].TesteQualidade.push(TesteQualidade);
    return acc;
}, {});



const b = teste.reduce((acc, curr) => {
  const produtoId = curr.Produto.id;
  if (!(produtoId in acc)) {
      acc[produtoId] = {
          Produto: curr.Produto,
          TesteQualidade: [],
      };
  }
  acc[produtoId].TesteQualidade.push(curr.TesteQualidade.id);
  return acc;
}, {});

console.log(a)
console.log(b)


