
# :page_facing_up:  Sobre o Projeto
Baseado nos requisitos apresentados pelo cliente a TSwift desenvolveu o projeto que consiste no desenvolvimento de um sistema de inspeção de entrada para controle de recebimento de grãos no setor agroindustrial, com três perfis de usuários: administrativo, operacional e gerencial. O objetivo principal do sistema é gerenciar o processo de entrada, inspeção e recebimento de mercadorias, permitindo o acompanhamento em tempo real do status de entrega. O sistema conta com funcionalidades de cadastro de usuários, produtos e transportadoras garantindo a organização e a gestão das informações relacionadas às transações comerciais. Além disso, o sistema permite a criação de perfis de acesso distintos, de acordo com as funções desempenhadas pelos usuários, o que contribui para a segurança e a eficiência das operações.Na prática, o sistema funciona da seguinte forma: quando um fornecedor entrega uma carga de grãos, o operador responsável pelo recebimento utiliza o sistema para registrar a entrada da mercadoria e as informações relacionadas, como quantidade e tipo de produto. Em seguida, é realizada a inspeção da carga, que é avaliada quanto à qualidade e conformidade com as normas técnicas. Por fim, o sistema oferece relatórios gerenciais que permitem o acompanhamento e a análise dos dados.

## Timeline de entregas



# :bookmark_tabs: Sobre a API
### :black_flag: Sprint 1:
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

### :black_flag: Sprint 2:
Nessa sprint, a equipe concentrou seus esforços na criação da interface administrativa do projeto, que é responsável por fornecer todas as funcionalidades do sistema. O que foi trabalhado durante esse período foi a identificação dos requisitos da interface a implementação do front-end e a integração com o back-end. No final, a equipe conseguiu entregar uma interface administrativa funcional que permite receber pedidos e processá-los, o que representa um avanço significativo no desenvolvimento do projeto.

### :octocat: Vídeo do produto entregue na Sprint 2:

https://youtu.be/6gblBDUkuOE

#

# :memo: Product Backlog Total:

| ID | UserStory | Requisitos | Sprint |
|----|-----------|------------|--------|
|US_01|Eu, como empresa, preciso de um software para recebimento de mercadoria| Realizar o mapeamento de entrega| S1|
|US_02|Eu, como empresa, preciso de um software para recebimento de mercadoria| O sistema precisa ter 3 interfaces diferentes para cada perfil cadastrado, cada um com sua própria função | S1|
|US_03|Eu, como empresa, preciso cadastrar perfil administrativo para manipular o sistema| Para todo colaborador é necessário os seguintes dados: Matricula,Nome, CPF, Data Nascimento, Cargo| S2 |
|US_04|Eu, como administrador, preciso de uma interface para acesso as rotinas administrativas| Na interface é necessário ter um painel/link que leva para outra interface de cadastro(cada uma para um propósito)| S3 |
|US_05|Eu, como administrador, preciso de uma interface para cadastrar produtos| Cadastro de produtos: Código, Nome, Unidade de medida | S3 |
|US_06|Eu, como administrador, preciso de uma interface para cadastrar fornecedores/transportadora|"Para se tornar um fornecedor é necessário os seguintes dados: Código, Nome da empresa (fantasia), CNPJ, Razão, Social Endereço" |  S3 |
|US_07|Eu, como administrador, preciso de uma interface para cadastrar colaboradores| "Para todo colaborador é necessário os seguintes dados: Matrícula, Nome, CPF, Data, Nascimento, Cargo" | S3 |
|US_08|Eu, como administrador preciso de uma interface para cadastrar compras| "Pedido de compra necessário: Nº do pedido, Cód do produto, Nome do produto, Cód do fornecedor, Nome do fornecedor, Tipo de frete, Condição de pagamento" | S3 |
|US_09|Eu, como conferente, preciso de uma interface para fazer login| Interface com os campos Matrícula, senha e um botão para entrar |  S2 |
|US_10|Eu, como conferente, preciso de uma interface para dar entrada no recebimento de mercadoria| Interfaces com os processos de entrada | S2 |
|US_11|Eu, como gerente, preciso de um interface para acompanhar o status da entrega| Interface de acompanhamento de entrega | S4 |
|US_12|Eu, como gerente, preciso gerar relatórios para analise| Botão correspondente ao pedido | S4 |
|US_13|Eu, como gerente, preciso de uma interface onde posso inserir regras de recebimento| Interface de cadastro de regras | S4 |
|US_14|Eu, como gerente, preciso realizar recebimento forçado caso seja recusada a entrega conforme as regras cadastradas| Botão na interface do gerente | S2 |

# :busts_in_silhouette: Equipe:
|| Nome | Github |
|--------|------|--------|
<a href="https://github.com/ymosena"><img src="https://avatars.githubusercontent.com/u/111094893?v=4" align="center" height="50" width="50"></a>| Yasmin Mosena|https://github.com/ymosena|
<a href="https://github.com/JacklesKerley"><img src="https://avatars.githubusercontent.com/u/100358141?v=4" align="center" height="50" width="50"></a>|Jackles Kerley|https://github.com/JacklesKerley|
<a href="https://github.com/Vitaog"><img src="https://avatars.githubusercontent.com/u/86271800?v=4" align="center" height="50" width="50"></a>|Vitor Garcez|https://github.com/Vitaog|
<a href="https://github.com/dosantos-ogabriel"><img src="https://avatars.githubusercontent.com/u/92482112?v=4" align="center" height="50" width="50"></a>|Gabriel Santos|https://github.com/dosantos-ogabriel|
<a href="https://github.com/otavioabreu27"><img src="https://avatars.githubusercontent.com/u/54289303?v=4" align="center" height="50" width="50"></a>|Otávio Abreu|https://github.com/otavioabreu27|
<a href="https://github.com/Miguel-C1"><img src ="https://avatars.githubusercontent.com/u/104818982?v=4" align="center" height="50" width="50"></a>|Miguel Soares|https://github.com/Miguel-C1|
<a href="https://github.com/dmssjk"><img src="https://avatars.githubusercontent.com/u/106353031?v=4" align="center" height="50" width="50"></a>|Daniel Machado|https://github.com/dmssjk|


