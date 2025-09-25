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

```

# Inicie os serviços com Docker Compose na pasta raiz:

```yaml

npm run build

```