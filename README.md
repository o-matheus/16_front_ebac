# Módulo 16 - Gulp

## Menu
[Aula 1 - Configuração do Gulp](#aula-1--configuração-do-gulp)  
[Aula 2 - Crie Tarefas ](#aula-2--crie-tarefas)  
[Aula 3 - Execute tarefas em série ](#aula-3--execute-tarefas-em-série)  
[Aula 4 - Execute tarefas em paralelo ](#aula-4--execute-tarefas-em-paralelo)  
[Aula 5 - Use o gulp para compilar SASS ](#aula-5--use-gulp-para-compilar-sass)  
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

## Aula 2 – Crie Tarefas

Nesta aula, aprendemos como criar tarefas no Gulp e compreender melhor o funcionamento da automação de processos. A seguir, estão os principais pontos abordados:

### 1. Objetivos da aula

- Compreender o conceito de automação de tarefas;
- Criar tarefas no Gulp utilizando funções;
- Entender como essas tarefas podem ser executadas automaticamente;
- Distinguir entre tarefas públicas e privadas no Gulp.

### 2. Introdução ao ES Modules

Antes de iniciar com o Gulp, foi apresentada a tecnologia **ES Modules**, uma forma de modularizar arquivos JavaScript. Com ela, é possível escrever múltiplos arquivos JS e importar funções entre eles.

Exemplo:
- Criamos o arquivo `sum.js` contendo a função `somar(a, b)`.
- Usamos `console.log(somar(10, 10))` para testar.
- Executamos o script com `node sum.js`.

### 3. Exportação e importação com CommonJS

Para importar a função `somar` em outro arquivo (`arithmetic.js`):

- Exportamos no `sum.js`:

```js
module.exports = somar;
```

- Importamos no `arithmetic.js`:

```js
const somar = require('./sum.js');
console.log('Resultado:', somar(10, 20));
```

> Observação: o uso de `./` indica que o arquivo está no mesmo diretório.

### 4. Primeira tarefa no Gulp

Iniciamos o `gulpfile.js` com uma função padrão:

```js
function funcaoPadrao(callback) {
  console.log('Executando via Gulp');
  callback();
}

exports.default = funcaoPadrao;
```

Executamos com:

```bash
npm run gulp
```

#### Erros comuns

O Gulp exige que a tarefa sinalize quando termina. O erro "A tarefa 'default' não foi concluída" ocorre quando não usamos o `callback` corretamente.

> O parâmetro `callback` pode ser abreviado para `cb`, como em `function funcaoPadrao(cb)`. O funcionamento é o mesmo, apenas mais conciso.

### 5. Criando múltiplas tarefas

Criamos outra função chamada `dizOi`:

```js
function dizOi(callback) {
  console.log('Olá Gulp!');
  callback();
}

exports.dizOi = dizOi;
```

- Para executar:

```bash
npm run gulp dizOi
```

> O nome da tarefa no terminal deve corresponder ao nome definido na exportação (`exports.nome = função`).

### 6. Tarefas públicas vs. tarefas privadas

- **Tarefa pública**: tem `callback` e é exportada. Pode ser chamada no terminal.
- **Tarefa privada**: não tem `callback` e não é exportada. Só pode ser usada dentro de outra tarefa.

Exemplo:

```js
function dizTchau() {
  console.log('Tchau!');
}

function dizOi(callback) {
  dizTchau();
  callback();
}

exports.dizOi = dizOi;
```

Aqui, `dizTchau` é uma função privada que só pode ser executada por meio da função `dizOi`.

> Observação: o `callback` continua sendo obrigatório apenas para as tarefas públicas.

### Conclusão da Aula 2

Com isso, finalizamos a segunda aula, onde aprendemos a criar e executar tarefas no Gulp, modularizar o código com JavaScript, entender a diferença entre tarefas públicas e privadas, e estruturar corretamente nossas automações com `callback`.

## Aula 3 – Execute Tarefas em Série

Nesta terceira aula do módulo sobre Gulp, aprendemos como executar tarefas em **série**, ou seja, garantindo que uma tarefa só comece após a anterior ser concluída.

### Objetivos da aula

- Compreender o conceito e a importância da execução de tarefas em série no Gulp;
- Configurar e executar tarefas em série utilizando o método `gulp.series()`.

### Tarefas em série vs. tarefas em paralelo

As tarefas do Gulp podem ser classificadas em dois tipos:

- **Tarefas executadas em série**: seguem uma ordem específica, uma após a outra;
- **Tarefas executadas em paralelo**: são executadas simultaneamente.

Nesta aula, focamos na **execução em série**.

### Importação do pacote Gulp

O primeiro passo foi importar o pacote do Gulp que já havia sido instalado no repositório local. Para isso, usamos o `require`:

```js
const gulp = require('gulp');
```

> Observação: o nome da constante pode ser qualquer um (ex: `gulpJS`, `pacoteGulp`, etc.), mas é comum usar `gulp` para manter clareza e padronização.

### Usando o gulp.series()

Em seguida, substituímos a exportação padrão por uma chamada à função `gulp.series()`, que recebe como argumentos as funções que devem ser executadas em sequência:

```js
exports.default = gulp.series(funcaoPadrao, dizOi);
```

Com isso, ao executar `npm run gulp`, o Gulp irá:
1. Executar `funcaoPadrao`;
2. Em seguida, executar `dizOi`.

A execução respeita **exatamente a ordem** definida dentro dos parênteses do `gulp.series()`.

### Considerações finais

Quando usamos `gulp.series()`, garantimos que cada tarefa só será iniciada **depois que a anterior terminar**. Isso é útil quando a ordem das ações importa para o fluxo da aplicação.

Nos momentos finais da aula, o professor apenas mostrou a execução no terminal, destacando que os `console.log` confirmam o funcionamento em série conforme o esperado.

---

Com isso, finalizamos a terceira aula do módulo, consolidando o uso do `gulp.series()` para automatizar tarefas sequenciais de forma controlada.

## Aula 4 – Execute Tarefas em Paralelo

Nesta quarta aula do módulo sobre Gulp, aprendemos como executar tarefas em **paralelo**, ou seja, ao mesmo tempo. Essa abordagem ajuda a reduzir o tempo total de execução quando as tarefas não dependem umas das outras.

### Objetivos da aula

- Executar tarefas em paralelo utilizando o Gulp;
- Compreender quando essa abordagem é vantajosa em relação às tarefas em série.

### Estrutura básica para execução paralela

Assim como nas aulas anteriores, o primeiro passo é importar o pacote do Gulp no topo do arquivo:

```js
const gulp = require('gulp');
```

> Observação: o nome da constante pode ser qualquer um (como `gulpJS`, `pacote`, etc.), mas o mais comum é usar `gulp`.

A diferença está no método utilizado para definir as tarefas. Em vez de `gulp.series()`, usamos:

```js
exports.default = gulp.parallel(funcaoPadrao, tarefa18);
```

As funções passadas dentro do `gulp.parallel()` serão executadas **simultaneamente**.

### Diferença perceptível na execução

Ao executar `gulp.series()`, o terminal mostra:
- Início da tarefa `default`;
- Execução completa da `funcaoPadrao`;
- Execução da `tarefa18`;
- Finalização da `default`.

Já com `gulp.parallel()`, o Gulp:
- Inicia `default`;
- Executa `funcaoPadrao` e `tarefa18` ao mesmo tempo;
- Finaliza `default` somente após ambas terminarem.

### Demonstração com `setTimeout`

Para evidenciar a diferença, o professor usou `setTimeout`:

- `funcaoPadrao` com 2 segundos de espera;
- `tarefa18` com 1 segundo de espera.

#### Em série (`gulp.series()`):
Tempo total de execução: **3 segundos** (2s + 1s).

#### Em paralelo (`gulp.parallel()`):
Tempo total de execução: **2 segundos** (a função mais lenta).

Essa demonstração torna visível a economia de tempo ao usar tarefas em paralelo quando possível.

### Quando não usar tarefas em paralelo

Apesar das vantagens, o professor destaca que **nem todas as tarefas podem ser executadas simultaneamente**. Há casos em que uma tarefa depende da outra. Por exemplo:

- Compilar um arquivo Sass primeiro;
- Só depois renomeá-lo ou movê-lo.

Se essas tarefas forem paralelizadas, a segunda pode tentar agir sobre um arquivo que ainda nem foi gerado, gerando erros no processo.

---

Com isso, finalizamos a quarta aula, compreendendo o uso correto e estratégico do `gulp.parallel()` para otimizar o tempo de execução das tarefas sem comprometer a lógica do fluxo.

## Aula 5 – Use Gulp para compilar SASS

Nesta aula, aprendemos como automatizar a tarefa de compilar arquivos Sass para CSS utilizando o Gulp, além de configurar compressão, mapeamento de origem e observação de alterações em tempo real.

### Objetivos da aula

1. Compreender o propósito da automação de tarefas com o Gulp no desenvolvimento front-end;
2. Instalar e configurar os plugins necessários para compilar arquivos Sass e realizar outras tarefas comuns como compressão;
3. Criar tarefas personalizadas no Gulp para automatizar o processo de desenvolvimento.

---

### 1. Instalação dos plugins necessários

Primeiramente, instalamos dois pacotes essenciais:

```bash
npm install --save-dev gulp-sass
npm install --save-dev sass
```

A instalação de `gulp-sass` permite que o Gulp interaja com arquivos `.scss`, enquanto o pacote `sass` serve como motor de compilação.

A importação desses pacotes é feita da seguinte forma:

```js
const sass = require('gulp-sass')(require('sass'));
```

Essa estrutura permite passar o motor `sass` como parâmetro do `gulp-sass`, garantindo a compatibilidade.

---

### 2. Criando a função `compilaSass`

A função responsável por compilar os arquivos Sass é criada da seguinte forma:

```js
function compilaSass() {
  return gulp
    .src('./src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'compressed' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}
```

**Explicação:**

* `.src(...)`: Define os arquivos Sass a serem compilados.
* `.pipe(sourcemaps.init())`: Inicia o mapeamento de origem para o DevTools.
* `.pipe(sass({ style: 'compressed' }))`: Compila e minifica o Sass.
* `.pipe(sourcemaps.write('./maps'))`: Gera os arquivos `.map` na pasta indicada.
* `.pipe(gulp.dest(...))`: Salva o CSS compilado.

**Importações necessárias:**

```js
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
```

Essa estrutura garante que o navegador consiga mapear os estilos aplicados ao código Sass original ao inspecionar o site pelo DevTools.

---

### 3. Criando a tarefa `watch`

Para não precisarmos executar manualmente o `npm run gulp sass` a cada alteração, criamos uma tarefa de observação:

```js
exports.watch = function () {
  gulp.watch(
    './src/styles/*.scss',
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
};
```

**Detalhes:**

* O primeiro parâmetro define os arquivos a serem observados.
* `{ ignoreInitial: false }` garante que o `compilaSass` será executado assim que o `watch` for iniciado.
* `gulp.series(compilaSass)` define que a função será executada em sequência sempre que houver uma alteração.

Com isso, basta executar:

```bash
npm run gulp watch
```

E o Gulp cuidará de compilar automaticamente o CSS toda vez que um `.scss` for alterado.

Para interromper a execução do `watch`, basta pressionar `Ctrl + C` no terminal.

---

### Conclusão

Com essa aula, encerramos a primeira tarefa prática realmente útil com Gulp: transformar arquivos Sass em CSS de forma automatizada, minificada e com mapeamento de origem. Também aprendemos a monitorar alterações em tempo real com o `watch`, otimizando o fluxo de trabalho no front-end.
