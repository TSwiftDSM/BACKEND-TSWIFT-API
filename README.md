# Processo de instalação

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



