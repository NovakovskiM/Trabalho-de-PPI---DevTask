# Trabalho-de-PPI---DevTask
Avaliação Processual de PPI - DevTask
# DevTask

## Integrantes

* Lucas Novokovic Medeiros
* Uanderson da Silva Ramos Junior
* Pedro Henrique Machado Gomes
* Daniel Rodrigues Cricco

---

## Tema Escolhido

**DevTask - Sistema de Gerenciamento de Tarefas para Equipes de TI**

O DevTask é uma aplicação Full Stack desenvolvida para auxiliar equipes de Tecnologia da Informação no gerenciamento de tarefas. O sistema permite cadastrar e listar tarefas, facilitando o acompanhamento das atividades e do status de execução.

---

## Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* TypeScript
* Fetch API

### Back-end

* Node.js
* Express.js
* TypeScript
* CORS

---

## Funcionalidades

* Cadastro de tarefas.
* Listagem de tarefas.
* Atualização automática da lista após o cadastro.
* Comunicação entre cliente e servidor utilizando requisições HTTP.
* Armazenamento temporário em memória.

---

## Estrutura do Projeto

```text
devtask/
│
├── client/
│   ├── index.html
│   ├── styles.css
│   ├── app.ts
│   └── app.js
│
├── server/
│   ├── src/
│   │   ├── server.ts
│   │   └── ITarefa.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Instalar as dependências do servidor

```bash
cd server
npm install
```

### 3. Executar o servidor

```bash
npm run dev
```

O servidor será iniciado em:

```text
http://localhost:3000
```

### 4. Executar o Front-end

Abra o arquivo `index.html` no navegador ou utilize uma extensão como Live Server no Visual Studio Code.

---

## Rotas da API

### GET /tarefas

Retorna todas as tarefas cadastradas.

Exemplo de resposta:

```json
[
  {
    "id": "1",
    "titulo": "Preparar apresentação",
    "descricao": "Explicar o funcionamento do DevTask",
    "status": "Em andamento"
  }
]
```

### POST /tarefas

Cadastra uma nova tarefa.

Exemplo de requisição:

```json
{
  "titulo": "Criar documentação",
  "descricao": "Documentar o projeto DevTask",
  "status": "Pendente"
}
```

---

## Conceitos Aplicados

* Arquitetura Cliente-Servidor
* Requisições HTTP
* Métodos GET e POST
* Programação Assíncrona com Async/Await
* Manipulação de DOM
* TypeScript e Tipagem Estática
* APIs REST

---

## Disciplina

Programação para Internet

Curso: Sistemas de Informação

Professor: Edgard da Cunha Pontes

Multivix - 2026/1
