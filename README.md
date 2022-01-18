# Projeto API GraphQL Node.js backend-Bagy

Este projeto é um desafio técnico proposto pela empresa bagy, no qual tive o prazer de fazer parte do processo seletivo.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto para fins de teste.

O projeto utiliza o [prisma](http://prisma.io) orm para a manipulação do banco de dados relacional, nesta oportinidade está sendo utilizado o banco SqLite3.

A API GraphQL está sendo utilizado o [Apollo-server](https://www.apollographql.com/docs/apollo-server/), rodando em http://localhost:4000

### 📋 Pré-requisitos

De que você precisa para instalar o software e como instalá-lo?

```
Neste projeto precisa ter o SqLite3 instalado na sua máquina
```
Para mais detalhes de como instalar o [sqlite3](https://www.sqlite.org/download.html) consulte a página oficial

### Diagrama ER
Segue abaixo o Diagrama de Entidade e Relacionamento.

![Diagrama de ER](./assets/readme/DER.png)

### 🔧 Instalação

Nesta sessão vamos dar os passos para a aplicação funcionar

Instalação das dependências do projeto:

```
yarn start

npm start
```
Usaremos o prisma para toda a manipulação do banco sqlite3

Para executar as migrations:

```
yarn prisma migrate dev

npx prisma migrate dev
```

Para qualquer alteração no schema do prisma, caso necessário
```
yarn prisma db push

npx prisma db push
```

Termine com um exemplo de como obter dados do sistema ou como usá-los para uma pequena demonstração.

## 📦 Desenvolvimento

Todas as ferramentas que foram utilizado para desenvolvimento

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Node.js](https://nodejs.org/en/docs/) - runtime javascript
* [yarn](https://yarnpkg.com/) - Gerenciador de dependências
* [Prisma](http://prisma.io) - Orm Prisma
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Usada para gerar RSS
* [GraphQL](https://graphql.org/) Linguagem query para a API

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺 
* Obrigado publicamente 🤓.
* etc.


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊