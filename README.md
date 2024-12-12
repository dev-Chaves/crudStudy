# Formulário CRUD Backend

Este repositório contém o backend de um formulário simples que implementa as operações básicas de um CRUD (Create, Read, Update, Delete) utilizando Node.js, Express, Sequelize e SQL. O objetivo deste projeto é fornecer um exemplo prático de como desenvolver uma API RESTful com as tecnologias mencionadas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express**: Framework para construção de APIs RESTful em Node.js.
- **Sequelize**: ORM (Object-Relational Mapping) para comunicação com bancos de dados SQL.
- **SQL**: Banco de dados relacional para armazenar dados.

## Funcionalidades

Este projeto permite realizar as seguintes operações:

- **Create**: Criar novos registros.
- **Read**: Obter registros existentes.
- **Update**: Atualizar registros.
- **Delete**: Excluir registros.

## Estrutura do Projeto

- **/models**: Contém os modelos definidos com Sequelize para as tabelas do banco de dados.
- **/routes**: Define as rotas da API para realizar as operações CRUD.
- **/controllers**: Contém a lógica dos controladores que manipulam as requisições.
- **/config**: Configurações do banco de dados e ambiente.

## Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

- **Node.js**: [Instalar o Node.js](https://nodejs.org/)
- **MySQL** ou **PostgreSQL** (ou outro banco de dados relacional compatível com Sequelize).

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JoaoVitor/repo-backend-formulario-crud.git
   cd repo-backend-formulario-crud
   
Instale as dependências:

npm install

Configure o banco de dados. Edite o arquivo de configuração do Sequelize para adicionar suas credenciais de banco de dados.

Crie as tabelas no banco de dados:


npx sequelize-cli db:create
npx sequelize-cli db:migrate

Inicie o servidor:
npm start
O servidor estará rodando em http://localhost:3000.

Endpoints da API
POST /api/form: Cria um novo registro no formulário.
GET /api/form: Obtém todos os registros do formulário.
GET /api/form/:id: Obtém um registro específico pelo ID.
PUT /api/form/:id: Atualiza um registro específico pelo ID.
DELETE /api/form/:id: Exclui um registro específico pelo ID.

Testando a API
Você pode testar a API usando ferramentas como Postman ou Insomnia, enviando requisições para os endpoints definidos.
