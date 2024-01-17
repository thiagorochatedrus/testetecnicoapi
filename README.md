<h1 align="center">Testes Automatizados API</h1>
<p align="center"> 💻Teste técnico destinado aos Testes Automatizados utilizando o Cypress💻 </p>

[![Generic badge](https://img.shields.io/badge/Cypress-v12.8.1-blue.svg)](https://docs.cypress.io/guides/references/changelog#12-8-1)
[![Generic badge](https://img.shields.io/badge/JavaScript--blue.svg)](https://devdocs.io/javascript/)

<h1 align="center">Pré-requisitos</h1>

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:

[![Generic badge](https://img.shields.io/badge/Node-Download-green.svg)](https://nodejs.org/en/download/)
[![Generic badge](https://img.shields.io/badge/Git-Download-green.svg)](https://git-scm.com)
[![Generic badge](https://img.shields.io/badge/VS_Code-Download-green.svg)](https://code.visualstudio.com/download)


## Testando Suas Configurações
Se você quiser testar as suas configurações, você pode usar o comando git config --list para listar todas as configurações que o Git conseguir encontrar naquele momento:

1. Abrir o Git Bash
2. Executar os comandos no Git Bash: 
```bash
$ git config --list
```
Irá exibir o resultado da seguinte forma:
```bash
user.name=Fulano de Tal
user.email=fulanodetal@exemplo.br
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

<h1 align="center">Git Clone</h1>

## Clone este repositório

1. Executar o git bash
2. Navegue entre as pastas para definir em qual pasta ficarão os arquivos do projeto
    - Ex.: CD C:/   <-Aqui o bash está acessando o disco C, ou seja, os arquivos ficarão aqui
    - Ex2.: CD C:/MeuTudo <-Aqui o bash está acessando a pasta MeuTudo, ou seja, os arquivos ficarão aqui
3. Executar o comando
```bash
$ git clone https://github.com/thiagorochatedrus/testetecnicoapi.git
```


<h1 align="center">Executando os Testes</h1>



## Abrir projeto no VS Code
1. Abra o VS Code
2. Clique em arquivo > abrir pasta
3. Selecione a pasta que foi clonada

## Instalar Node
1. Clique em Terminal > Novo Terminal
2. Instalar o node_modulos (Esta pasta não precisa ser versionada, portanto foi adicionada ao arquivo .gitignore.)
```bash
$ npm install 
```

## Comando para abrir o Cypress
```bash
$ npx cypress open
```

## Para executar os testes no terminal
```bash
$ npx cypress run
```
