
# :page_facing_up:  Sobre o Projeto
Baseado nos requisitos apresentados pelo cliente a TSwift desenvolveu o projeto que consiste no desenvolvimento de um sistema de inspeção de entrada para controle de recebimento de grãos no setor agroindustrial, com três perfis de usuários: administrativo, operacional e gerencial. O objetivo principal do sistema é gerenciar o processo de entrada, inspeção e recebimento de mercadorias, permitindo o acompanhamento em tempo real do status de entrega. O sistema conta com funcionalidades de cadastro de usuários, produtos e transportadoras garantindo a organização e a gestão das informações relacionadas às transações comerciais. Além disso, o sistema permite a criação de perfis de acesso distintos, de acordo com as funções desempenhadas pelos usuários, o que contribui para a segurança e a eficiência das operações.Na prática, o sistema funciona da seguinte forma: quando um fornecedor entrega uma carga de grãos, o operador responsável pelo recebimento utiliza o sistema para registrar a entrada da mercadoria e as informações relacionadas, como quantidade e tipo de produto. Em seguida, é realizada a inspeção da carga, que é avaliada quanto à qualidade e conformidade com as normas técnicas. Por fim, o sistema oferece relatórios gerenciais que permitem o acompanhamento e a análise dos dados.

# :bookmark_tabs: Sobre a API
### :black_flag: Sprint 1:
Na primeira sprint, foram criados protótipos navegáveis de todas as interfaces, o organograma com as funcionalidades do sistema, o modelo conceitual do banco de dados, e a implementação de testes unitários e gitworkflow.
#### Gitworkflow
O gitworkflow é um conjunto de práticas e fluxos de trabalho que permitem o desenvolvimento colaborativo e organizado do código-fonte em projetos de software usando o Git. Ele envolve a utilização de branches, revisão e aprovação de código antes da integração, e fluxos de trabalho específicos como o Gitflow.

<img src="/doc/img/gitworkflow.jpg">

A criação de branches permitem que diferentes membros da equipe trabalhem simultaneamente em suas próprias versões do código sem afetar o código principal. Dentre as branches, destacam-se a "main", a "develop" e as "features".

A branch "main" é a branch principal do projeto e representa a versão estável do produto final. Nesta branch, são integradas apenas as alterações que passaram por uma revisão e foram aprovadas, garantindo a qualidade e a segurança do produto final.

A branch "develop", por sua vez, é utilizada como uma área de preparação para a próxima versão do produto. Nesta branch, são integradas as alterações que ainda estão em desenvolvimento, mas que foram consideradas estáveis o suficiente para serem testadas em conjunto com outras funcionalidades.

Por fim, as "features" são branches individuais criadas para desenvolver funcionalidades específicas do projeto. Cada funcionalidade é desenvolvida em sua própria branch e é integrada à branch "develop" apenas após ter sido revisada e testada, garantindo a qualidade e a estabilidade do código.

Esse ambiente de desenvolvimento permitiu uma colaboração mais eficiente entre a equipe, garantindo a qualidade do produto final e agilizando o processo de desenvolvimento e entrega.

#### Mockup no Figma:
https://www.figma.com/file/iy9b2cY2hmpDLlnXDOKI2h/agro-%C3%A9-tec?node-id=0%3A1&t=Fc2jGCh2zCfoWF6M-1

### :chart_with_upwards_trend: **Burndown Chart da Sprint 1**:

<img src="/doc/img/burndownsprint1.jpg">

# :memo: Product Backlog Total:

| ID | UserStory | Requisitos | Sprint |
|----|-----------|------------|--------|
|US_01|Eu, como empresa, preciso de um software para recebimento de mercadoria| Realizar o mapeamento de entrega| S1|
|US_02|Eu, como empresa, preciso de um software para recebimento de mercadoria| Montar um protótipo navegável | S1|
|US_03|Eu, como empresa, preciso cadastrar perfil administrativo para manipular o sistema| Ter cadastrado o perfil de administrador cadastrado| S2 |
|US_04|Eu, como administrador, preciso de uma interface para acesso as rotinas administrativas| Na interface é necessário ter um painel/link que leva para outra interface de cadastro(cada uma para um propósito)| S3 |
|US_05|Eu, como administrador, preciso de uma interface para cadastrar produtos| "Cadastro de produtos: Código, Nome, Unidade de medida" | S3 |
|US_06|Eu, como administrador, preciso de uma interface para cadastrar fornecedores/transportadora|"Para se tornar um fornecedor é necessário os seguintes dados: Código, Nome da empresa (fantasia), CNPJ, Razão, Social Endereço" |  S3 |
|US_07|Eu, como administrador, preciso de uma interface para cadastrar colaboradores| "Para todo colaborador é necessário os seguintes dados: Matrícula, Nome, CPF, Data, Nascimento, Cargo" | S3 |
|US_08|Eu, como administrador preciso de uma interface para cadastrar compras| "Pedido de compra necessário: Nº do pedido, Cód do produto, Nome do produto, Cód do fornecedor, Nome do fornecedor, Tipo de frete, Condição de pagamento" | S3 |
|US_09|Eu, como conferente, preciso de uma interface para fazer login| Interface com os campos Matrícula, senha e um botão para entrar |  S2 |
|US_10|Eu, como conferente, preciso de uma interface para dar entrada no recebimento de mercadoria| Interfaces com os processos de entrada | S2 |
|US_11|Eu, como gerente, preciso de um interface para acompanhar o status da entrega| Interface de acompanhamento de entrega | S4 |
|US_12|Eu, como gerente, preciso gerar relatórios para analise| Botão correspondente ao pedido | S4 |
|US_13|Eu, como gerente, preciso de uma interface onde posso inserir regras de recebimento| Interface de cadastro de regras | S4 |


# :hammer: Processo de instalação:

### Passo 1. Instalação das dependências

Para instalar as dependências clone o repositório, navegue até sua raíz e execute o código a seguir:

```bash
npm install
```



### Passo 2. Criando o banco

Crie um database no mysql, para isso , utilizando um client de banco de dados (MySQL Workbench, DBeaver) faça uma quarry no banco com o seguinte comando:

```sql
CREATE DATABASE <nome_banco>;
```



### Passo 3. Criando o .env

Crie um arquivo e escreva a string de credenciais de banco dessa forma:

```js
DATABASE_URL="mysql://<user>:<password>@localhost:3306/<database>"
```

Lembrando que tudo que está dentro de "<>"  deve ser alterado para um valor que contemple a variável em questão.



### Passo 4. Migrando o esquema prisma

Para migrar o esquema prisma atual, execute o seguinte comando no terminal do seu sistema operacional:

```bash
npx prisma migrate dev --name init
```



### Passo 5. Inserindo massa de testes

No client do banco de dados abra o script test_mass.sql que fica dentro do diretório prisma e execute, ingestando os dados de teste.



### Passo 6. Rodando a aplicação

Execute o código:

```bash
npm run dev
```



