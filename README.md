# Random Number Custom Node para n8n

Este repositório contém um **custom node do n8n** chamado `Random Number`, que gera números aleatórios entre um valor mínimo e máximo, utilizando a **API do Random.org**.  

O projeto também inclui um **Docker Compose** para subir o n8n e uma instância PostgreSQL para armazenamento de dados do n8n.

---

## 🔹 Funcionalidades do Node

- Node: **Random Number**
- Operação: **True Random Number Generator**
- Inputs:
  - `Min` (número mínimo)
  - `Max` (número máximo)
- Output:
  - Número aleatório gerado via API Random.org
- Ícone personalizado: `random.svg`

---

## 🔹 Pré-requisitos

- Node.js >= 22 (LTS)
- Docker & Docker Compose
- Navegador para acessar a interface do n8n
- Conta ou acesso à internet para a API Random.org

---

## 🔹 Estrutura do projeto

```text
.
├── docker-compose.yml
├── .n8n/
│   └── custom/
│       └── RandomNumber.node.ts
├── README.md
└── package.json
```

## HOW TO USE

# Digite os comandos dentro da pasta custom/nodes:

```yaml

npm install
npm run build

```

# Inicie os serviços com Docker Compose na pasta raiz:

```yaml

docker-compose up

```


## 🔹 Como usar o n8n e testar o Random Number Node

Após subir os serviços com o `docker-compose up`, siga estes passos rápidos:

1. Abra o navegador e acesse o n8n em:  **http://localhost:5678**

2. Na primeira vez, o n8n pedirá para **configurar usuário e senha**. Apenas escolha seus dados e continue.

3. Crie um novo **workflow** clicando em **New Workflow**.

4. No editor, clique em **+** para adicionar um node e selecione o node **Random Number**.

5. Preencha os campos:
- `Min`: número mínimo
- `Max`: número máximo

6. Clique em **Execute Node** no canto superior direito.

7. O node irá gerar e mostrar um **número aleatório** dentro do intervalo definido, utilizando a API Random.org.
