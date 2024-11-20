
# 📊 Simulador de Finanças Pessoais

Um sistema robusto para gerenciar finanças pessoais. Permite acompanhar receitas, despesas e metas financeiras, com recursos avançados de simulação de investimentos e geração de relatórios.

----------

## **📋 Funcionalidades**

-   Gerenciamento de receitas e despesas.
-   Relatórios dinâmicos com gráficos sobre fluxo de caixa.
-   Simulação de crescimento de investimentos com base em taxas configuráveis.
-   Criação de metas financeiras com alertas e notificações.
-   Exportação de relatórios em PDF e Excel.
-   Integração com uma API de mercado financeiro para obter cotações em tempo real.

----------

## **🚀 Tecnologias Utilizadas**

-   **Node.js** com **Express**: backend para APIs RESTful.
-   **PostgreSQL**: banco de dados relacional para armazenamento de informações financeiras.
-   **Sequelize**: ORM para manipulação do banco de dados.
-   **Chart.js** ou **D3.js**: para visualização de dados (opcional no front).
-   **PDFKit** e **xlsx**: para geração de relatórios.
-   **Axios**: para integração com APIs externas (mercado financeiro).

----------

## **📦 Como Executar o Projeto**

### **Pré-requisitos**

1.  Node.js instalado (v16+).
2.  PostgreSQL instalado e configurado.
3.  Conta de API para cotações financeiras (ex.: Alpha Vantage, Yahoo Finance).

### **Passo a Passo**

1.  Clone o repositório:

    `git clone https://github.com/Matheus-Freitas0/personal-finance-graph.git
    cd personal-finance-graph` 
    
2.  Instale as dependências:
    
    `npm install` 
    
3.  Configure o banco de dados:
    
    -   Crie um banco no PostgreSQL.
    -   Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente:

        `DB_HOST=localhost
        DB_USER=seu_usuario
        DB_PASSWORD=sua_senha
        DB_NAME=finance_simulator
        DB_PORT=5432
        API_KEY=chave_da_api_financeira` 
        
4.  Rode as migrações para criar as tabelas:

    `npx sequelize db:migrate` 
    
5.  Inicie o servidor:

    `npm start` 
    
    O servidor estará disponível em: `http://localhost:3000`
    

----------

## **📖 Endpoints da API**

### **1. Usuários**

-   **`POST /users`**: Criação de um novo usuário.
-   **`POST /auth/login`**: Autenticação de usuário com JWT.

### **2. Receitas e Despesas**

-   **`POST /transactions`**: Criar uma receita ou despesa.
-   **`GET /transactions`**: Listar todas as transações.
-   **`GET /transactions/:id`**: Detalhar uma transação específica.
-   **`PUT /transactions/:id`**: Atualizar uma transação.
-   **`DELETE /transactions/:id`**: Remover uma transação.

### **3. Metas Financeiras**

-   **`POST /goals`**: Criar uma meta financeira.
-   **`GET /goals`**: Listar metas.
-   **`GET /goals/:id`**: Detalhar uma meta.

### **4. Simulação de Investimentos**

-   **`POST /simulation`**: Simular crescimento de investimentos.
    -   Parâmetros: `valorInicial`, `taxaAnual`, `anos`.

----------

## **📂 Estrutura do Projeto**

finance-simulator/

├── src/

│   ├── config/          # Configuração do banco de dados

│   ├── controllers/     # Lógica dos endpoints

│   ├── models/          # Modelos Sequelize

│   ├── routes/          # Definição das rotas

│   └── utils/           # Funções auxiliares

├── migrations/          # Migrações do banco de dados

├── .env.example         # Exemplo do arquivo de variáveis de ambiente

├── package.json         # Configurações do projeto

└── README.md            # Documentação

----------

## **📈 Próximos Passos**

-   Implementar autenticação com OAuth (Google, Facebook).
-   Criar interface web com React ou Vue.js.
-   Adicionar notificações por e-mail.

----------

## **🧑‍💻 Contribuição**

Sinta-se à vontade para contribuir!

1.  Faça um fork do repositório.
2.  Crie uma branch para sua feature:

    `git checkout -b minha-feature` 
    
3.  Envie suas alterações:

    `git push origin minha-feature` 
    

----------

## **📄 Licença**

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
