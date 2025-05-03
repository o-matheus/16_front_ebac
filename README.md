# Módulo 16 - Gulp

## Menu
[Aula 1 - Configuração do Gulp](#aula-1--configuração-do-gulp)  
[Aula 2 - ](#aula-)  
[Aula 3 - ](#aula-)  
[Aula 4 - ](#aula-)  
[Aula 5 - ](#aula-)  
[Aula 6 - ](#aula-)  


## Aula 1 – Configuração do Gulp

Neste módulo do curso da EBAC, aprendemos a automatizar tarefas utilizando o Gulp, uma ferramenta poderosa para agilizar fluxos de trabalho no desenvolvimento front-end. Esta primeira aula foi dedicada à configuração inicial do ambiente.

### 1. Objetivo da Aula

O foco foi configurar o Gulp, realizar sua instalação global e como dependência de desenvolvimento, iniciar o projeto Node, configurar os arquivos iniciais e conectar o repositório ao GitHub.

### 2. O que é o Gulp?

O Gulp é uma ferramenta de automação de processos. Com ela, podemos compilar Sass e Less, minificar arquivos JavaScript, comprimir imagens, entre outras tarefas repetitivas que otimizam o fluxo de desenvolvimento.

### 3. Instalação Global

O primeiro passo foi acessar o site oficial do Gulp e, no terminal, instalar o CLI globalmente:

```bash
npm install --global gulp-cli
```

### 4. Criação da Pasta do Projeto

Como ainda não estou familiarizado com navegação via terminal, usei a interface gráfica do Windows para criar uma nova pasta dedicada ao projeto Gulp. Após isso, abri o terminal dentro dessa pasta.

### 5. Inicialização do Projeto Node

Com o terminal aberto, inicializamos o projeto Node com o comando:

```bash
npm init
```

Durante esse processo, o terminal fez algumas perguntas, como nome do pacote, versão, descrição, entry point, comando de testes, repositório, palavras-chave, autor e licença. Após preencher (ou deixar em branco), confirmei com `yes`, e o arquivo `package.json` foi gerado.

### 6. Instalação do Gulp como Dependência de Desenvolvimento

Em seguida, instalamos o Gulp como dependência de desenvolvimento com o comando:

```bash
npm install --save-dev gulp
```

O `--save-dev` indica que essa dependência será usada apenas durante o desenvolvimento, não sendo necessária em produção. Isso mantém o ambiente de produção mais leve e seguro.

### 7. Estrutura Inicial do Projeto

Ao abrir o projeto no VS Code, foram criados automaticamente:

- A pasta `node_modules/`
- O arquivo `package.json`
- O arquivo `package-lock.json`

O `package.json` registra as dependências e scripts do projeto, enquanto o `package-lock.json` especifica exatamente quais versões dessas dependências foram instaladas, garantindo a replicação correta em outras máquinas.

### 8. Criação do .gitignore

Neste ponto, criamos também o arquivo `.gitignore`, adicionando a pasta `node_modules/` para que ela não seja enviada ao repositório do GitHub, evitando assim o versionamento desnecessário de centenas de arquivos.

### 9. Configuração do Script no package.json

Adicionamos o script do Gulp dentro da seção `"scripts"` do `package.json`:

```json
"scripts": {
  "gulp": "gulp"
}
```

Com isso, podemos executar o Gulp com:

```bash
npm run gulp
```

Ao executar esse comando pela primeira vez, um erro é exibido informando que o arquivo `gulpfile.js` não foi encontrado.

### 10. Criação do gulpfile.js

Criamos então o arquivo `gulpfile.js` na raiz do projeto. Apesar da extensão `.js`, o VS Code reconhece esse arquivo automaticamente como um arquivo de configuração do Gulp, atribuindo a ele um ícone especial (um copo com canudo).

### 11. Criação e Publicação do Repositório no GitHub

Após configurar o ambiente, inicializamos o Git localmente:

```bash
git init .
git add .
git commit -m "Criação do repositório do módulo Gulp"
```

Em seguida, criamos um repositório no GitHub com o nome `16_front_ebac` e utilizamos os comandos sugeridos na página do repositório para enviar o projeto local:

```bash
git remote add origin <URL-do-repositório>
git branch -M main
git push -u origin main
```

### 12. Criação do README.md

Por fim, criamos o arquivo `README.md`, onde posteriormente será adicionado este conteúdo revisado e convertido em Markdown, servindo como documentação da aula.

### 13. Conclusão

Com a sincronização finalizada no GitHub, encerramos a primeira aula do módulo sobre automação de tarefas com Gulp.
