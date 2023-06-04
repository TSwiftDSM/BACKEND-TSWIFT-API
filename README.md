![banner](https://github.com/TSwiftDSM/BACKEND-TSWIFT-API/assets/111094893/099533d2-510a-4194-9d5e-e0db1443fe04)


<p align="center">
 <a href="#sobre">Projeto</a> •
 <a href="#api">Sobre a API</a> • 
 <a href="#backlog">Product Backlog</a> • 
 <a href="#doddor">DoD e DoR</a> • 
 <a href="#equipe">Equipe</a>
</p>

<p align="center">
 <a href="#s1">Sprint 1</a> •
 <a href="#s2">Sprint 2</a> • 
 <a href="#s3">Sprint 3</a> • 
 <a href="#s4">Sprint 4</a> • 
</p>

<hr>

# :page_facing_up:  Sobre o Projeto <a id="sobre"></a>
Baseado nos requisitos apresentados pelo cliente a TSwift desenvolveu o projeto que consiste no desenvolvimento de um sistema de inspeção de entrada para controle de recebimento de grãos no setor agroindustrial, com três perfis de usuários: administrativo, operacional e gerencial. O objetivo principal do sistema é gerenciar o processo de entrada, inspeção e recebimento de mercadorias, permitindo o acompanhamento em tempo real do status de entrega. O sistema conta com funcionalidades de cadastro de usuários, produtos e transportadoras garantindo a organização e a gestão das informações relacionadas às transações comerciais. Além disso, o sistema permite a criação de perfis de acesso distintos, de acordo com as funções desempenhadas pelos usuários, o que contribui para a segurança e a eficiência das operações.Na prática, o sistema funciona da seguinte forma: quando um fornecedor entrega uma carga de grãos, o operador responsável pelo recebimento utiliza o sistema para registrar a entrada da mercadoria e as informações relacionadas, como quantidade e tipo de produto. Em seguida, é realizada a inspeção da carga, que é avaliada quanto à qualidade e conformidade com as normas técnicas. Por fim, o sistema oferece relatórios gerenciais que permitem o acompanhamento e a análise dos dados.

## Timeline de entregas <a id="tml"></a>

<img src="/doc/img/timeline.png">

# :bookmark_tabs: Sobre a API <a id="api"></a>
### :black_flag: Sprint 1: <a id="s1"></a>
Na primeira sprint, foram criados protótipos navegáveis de todas as interfaces, o organograma com as funcionalidades do sistema, o modelo conceitual do banco de dados, e a implementação de testes unitários e gitworkflow. O gitworkflow é um conjunto de práticas e fluxos de trabalho que permitem o desenvolvimento colaborativo e organizado do código-fonte em projetos de software usando o Git. Ele envolve a utilização de branches, revisão e aprovação de código antes da integração, e fluxos de trabalho específicos como o Gitflow. A criação de branches permitem que diferentes membros da equipe trabalhem simultaneamente em suas próprias versões do código sem afetar o código principal. Dentre as branches, destacam-se a "main", a "develop" e as "features".

A branch "main" é a branch principal do projeto e representa a versão estável do produto final. Nesta branch, são integradas apenas as alterações que passaram por uma revisão e foram aprovadas, garantindo a qualidade e a segurança do produto final.

A branch "develop", por sua vez, é utilizada como uma área de preparação para a próxima versão do produto. Nesta branch, são integradas as alterações que ainda estão em desenvolvimento, mas que foram consideradas estáveis o suficiente para serem testadas em conjunto com outras funcionalidades.

Por fim, as "features" são branches individuais criadas para desenvolver funcionalidades específicas do projeto. Cada funcionalidade é desenvolvida em sua própria branch e é integrada à branch "develop" apenas após ter sido revisada e testada, garantindo a qualidade e a estabilidade do código.

Esse ambiente de desenvolvimento permitiu uma colaboração mais eficiente entre a equipe, garantindo a qualidade do produto final e agilizando o processo de desenvolvimento e entrega.

### :octocat: Gif do protótipo entregue na Sprint 1:

<img src="/doc/img/Desktop.gif">

#### Mockup no Figma:
https://www.figma.com/file/iy9b2cY2hmpDLlnXDOKI2h/agro-%C3%A9-tec?node-id=0%3A1&t=Fc2jGCh2zCfoWF6M-1
#

### :black_flag: Sprint 2: <a id="s2"></a>
Nessa sprint, a equipe concentrou seus esforços na criação da interface administrativa do projeto, que é responsável por fornecer todas as funcionalidades do sistema. O que foi trabalhado durante esse período foi a identificação dos requisitos da interface a implementação do front-end e a integração com o back-end. No final, a equipe conseguiu entregar uma interface administrativa funcional que permite receber pedidos e processá-los, o que representa um avanço significativo no desenvolvimento do projeto.

### :octocat: Vídeo do produto entregue na Sprint 2:

https://youtu.be/6gblBDUkuOE

#
### :black_flag: Sprint 3: <a id="s3"></a>
Durante a Sprint 3, foram implementadas no sistema funcionalidades de cadastro de colaboradores, produtos, pedidos e fornecedores, além das opções de edição e exclusão dos registros cadastrados. Também foram criadas tabelas para cada categoria de cadastro (colaboradores, produtos, pedidos e fornecedores), onde é possível visualizar todos os registros cadastrados. Na listagem, também foram incluídas opções de filtro e busca para facilitar a localização dos registros desejados.


### :octocat: Gif do protótipo entregue na Sprint 3:

<img src="/doc/img/gifs3.gif">

#
### :black_flag: Sprint 4: <a id="s4"></a>
Na última sprint, a equipe concluiu a implementação do controle de acesso personalizado para os usuários do sistema. Cada colaborador agora possui um nível de acesso específico, determinado com base nas informações registradas em seu cadastro. Isso permite que os colaboradores acessem interfaces específicas, sendo elas a interfaces de produtos, fornecedores, pedidos, colaboradores, recebimento e regras. Essa abordagem personalizada garante maior flexibilidade e segurança, assegurando que cada usuário tenha acesso apenas às áreas relevantes para sua função no sistema. Além disso, também foi desenvolvido a funcionalidade de geração de relatórios, com destaque para o relatório de pedidos, que fornece detalhes sobre os pedidos realizados, e o relatório geral, que oferece uma visão abrangente do sistema. Com isso, foi entregue o produto final, um sistema de controle de recebimento de grãos no setor agroindustrial, com três perfis de usuários, que permite o registro de entrada de mercadorias, realização de inspeções, geração de relatórios gerenciais e funcionalidades personalizadas para cada colaborador.


### :octocat: Gif do protótipo entregue na Sprint 4:

<img src="/doc/img/">

#

# :memo: Product Backlog Total: <a id="backlog"></a>

<img src="/doc/BacklogTotal.jpg">

#

# :white_check_mark: DoD e DoR: <a id="doddor"></a>
|Artefato|Definição|Critério|
|--------|---------|--------|
|Mockup| Identifica funcionalidades antes de começar a codificá-las| DoD |
|Modelo Lógico do Banco de dados | É usado como a base de dados para criação do modelo físico| DoD|
|Critério de Aceitação| lista de requisitos claros e específicos que devem ser atendidos | DoD|
|Teste de Aceitação| Testes que devem ser realizados para garantir que ela atenda aos critérios| DoD|
| Modelo Físico do Banco de dados | É a representação da estrutura de dados em um banco | DoR |
|Protótipo Navegável| Navegação das Interfaces baseadas no Mockup| DoR|



# :busts_in_silhouette: Equipe: <a id="equipe"></a>
|| Nome | Github | Função |
|--------|------|--------|-|
<a href="https://github.com/ymosena"><img src="https://avatars.githubusercontent.com/u/111094893?v=4" align="center" height="50" width="50"></a>| Yasmin Mosena|https://github.com/ymosena| Scrum Master |
<a href="https://github.com/JacklesKerley"><img src="https://avatars.githubusercontent.com/u/100358141?v=4" align="center" height="50" width="50"></a>|Jackles Kerley|https://github.com/JacklesKerley| Product Owner |
<a href="https://github.com/Vitaog"><img src="https://avatars.githubusercontent.com/u/86271800?v=4" align="center" height="50" width="50"></a>|Vitor Garcez|https://github.com/Vitaog| Desenvolvedor |
<a href="https://github.com/dosantos-ogabriel"><img src="https://avatars.githubusercontent.com/u/92482112?v=4" align="center" height="50" width="50"></a>|Gabriel Santos|https://github.com/dosantos-ogabriel| Desenvolvedor |
<a href="https://github.com/otavioabreu27"><img src="https://avatars.githubusercontent.com/u/54289303?v=4" align="center" height="50" width="50"></a>|Otávio Abreu|https://github.com/otavioabreu27| Desenvolvedor |
<a href="https://github.com/Miguel-C1"><img src ="https://avatars.githubusercontent.com/u/104818982?v=4" align="center" height="50" width="50"></a>|Miguel Soares|https://github.com/Miguel-C1| Desenvolvedor |
<a href="https://github.com/dmssjk"><img src="https://avatars.githubusercontent.com/u/106353031?v=4" align="center" height="50" width="50"></a>|Daniel Machado|https://github.com/dmssjk| Desenvolvedor |


