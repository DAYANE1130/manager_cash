# Cashforce Project

Projeto técnico para exibir notas fiscais utilizando uma API REST e uma interface frontend desenvolvida em React.

## 📌 Objetivo

O projeto tem como objetivo exibir uma lista de notas fiscais consumidas a partir de uma API. A aplicação foi construída com foco em boas práticas de desenvolvimento, organização de camadas e uso semântico de HTML.

---

## 🧰 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MySQL
- Sequelize
- Middleware de erro customizado

### Frontend
- React
- Bootstrap 5
- Fetch API (sem uso de axios)
- Componentização semântica

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js (v16+)
- MySQL
- npm ou yarn

---

### 🔧 Backend

1. Acesse a pasta do backend:

```bash
cd app/backend
```
    Instale as dependências:

npm install

    Configure o banco de dados:

    Crie um banco no MySQL (por exemplo: cashforce_db)

    Preencha suas credenciais no arquivo .env (você pode usar .env.example como base)

    Execute as migrations (caso esteja utilizando Sequelize CLI)

    Inicie o servidor:

npm start

    O backend estará disponível em http://localhost:3001

💻 Frontend

    Acesse a pasta do frontend:

cd app/frontend

    Instale as dependências:

npm install

    Inicie a aplicação:

npm start

    O frontend estará disponível em http://localhost:3000

📂 Estrutura do Projeto

app
├── backend
│   ├── controllers
│   ├── services
│   ├── models
│   ├── interfaces
│   ├── middlewares
│   └── ...
└── frontend
    ├── components
    ├── pages
    ├── services
    ├── assets
    └── ...

🔄 Fluxo do Backend

    GET /orders → Retorna uma lista de notas fiscais

    Middleware de erro centralizado trata erros de forma consistente

    Estrutura em camadas: controller → service → model

✅ Funcionalidades do Frontend

    Página principal com layout semântico

    Sidebar e Header separados em componentes

    Tabela de exibição das notas fiscais

    Estilização com Bootstrap

    Tratamento de erros da API

🧪 Melhorias Futuras

    Adicionar testes automatizados

    Adicionar filtros e paginação na tabela

    Implementar autenticação


