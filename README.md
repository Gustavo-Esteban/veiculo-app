# Veiculo App

## Teste Prático - Infosistemas

Este projeto foi desenvolvido como parte do processo seletivo para a empresa **Infosistemas**. O objetivo é demonstrar habilidades técnicas na criação de uma aplicação full-stack, utilizando **Node.js** para o backend e **Angular 16+** para o frontend. A aplicação consiste em um sistema de gerenciamento de veículos, com operações de CRUD (Create, Read, Update, Delete) e integração entre frontend e backend.

## Objetivos do Projeto

### Backend (Node.js)
- Criar um CRUD de veículos com os seguintes atributos:
  - `id`
  - `placa`
  - `chassi`
  - `renavam`
  - `modelo`
  - `marca`
  - `ano`
- Implementar recursos REST para acesso aos dados dos veículos.
- Desenvolver testes unitários utilizando **Mocha**.

### Frontend (Angular 16+)
- Criar uma interface para listagem de veículos.
- Integrar com o backend para exibir, adicionar, editar e excluir veículos.
- Garantir uma experiência de usuário fluida e responsiva.

### Versionamento e Disponibilização
- Disponibilizar o projeto no GitHub, com um README detalhado explicando a estrutura, configuração e execução do projeto.

## Tecnologias Utilizadas

### Backend (Node.js)
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs RESTful.
- **Mocha**: Framework para testes unitários.

### Frontend (Angular 16+)
- **Angular 16+**: Framework para construção de interfaces web.
- **RxJS**: Para programação reativa e gerenciamento de estados.
- **HttpClient**: Para comunicação com a API do backend.

### Ferramentas Adicionais
- **Git**: Controle de versionamento.
- **GitHub**: Hospedagem do repositório e documentação.

## Funcionalidades Implementadas

### Backend
- **CRUD de Veículos**:
  - **Create**: Adicionar um novo veículo.
  - **Read**: Listar todos os veículos ou buscar um veículo específico por ID.
  - **Update**: Atualizar os dados de um veículo existente.
  - **Delete**: Remover um veículo.
- **API REST**:
  - Endpoints para todas as operações de CRUD.
  - Respostas em formato JSON.
- **Testes Unitários**:
  - Testes para cada operação do CRUD utilizando **Mocha**.

### Frontend
- **Listagem de Veículos**:
  - Exibe todos os veículos cadastrados em uma tabela.
- **Formulário de Cadastro e Edição**:
  - Interface para adicionar novos veículos ou editar veículos existentes.
- **Integração com Backend**:
  - Comunicação com a API REST para carregar, adicionar, editar e excluir veículos.
- **Implementação de Lazy Loading**:
  - Para otimizar o desempenho da aplicação e melhorar a experiência do usuário.

## Como Executar o Projeto

### Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior)
- **Angular CLI** (para o frontend)
- **Git** (para clonar o repositório)

### Passos para Execução

#### Clone o Repositório:
```sh
git clone https://github.com/Gustavo-Esteban/veiculo-app.git
```

#### Backend:
```sh
# Navegue até a pasta do backend:
cd back-end

# Instale as dependências:
npm install

# Inicie o servidor:
npm run start
```

#### Frontend:
```sh
# Navegue até a pasta do frontend:
cd front-end/veiculo-app

# Instale as dependências:
npm install

# Inicie a aplicação:
ng serve
```

### Acesse a Aplicação
- **Frontend**: Abra o navegador e acesse [http://localhost:4200](http://localhost:4200).
- **Backend (API)**: A API estará disponível em [http://localhost:3000](http://localhost:3000).

### Testes Unitários (Backend)
Para executar os testes unitários do backend, navegue até a pasta do backend e execute:
```sh
npm run test
```

## Conclusão

Este projeto demonstra a capacidade de desenvolver uma aplicação full-stack funcional, seguindo boas práticas de desenvolvimento e integração entre frontend e backend.
Agradeço à **Infosistemas** pela oportunidade de participar deste processo seletivo e espero que este trabalho atenda às expectativas.

