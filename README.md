## Atividade EBAC – Automação com Gulp

### 1. Objetivo da Atividade

Nesta atividade, o objetivo foi configurar um `gulpfile.js` com as seguintes funcionalidades:

- Compilação de arquivos Sass (SCSS)
- Compressão de imagens fornecidas no material de apoio
- Compressão (minificação) de arquivos JavaScript

Além disso, foi solicitado:

- A criação de uma branch chamada `exercicio-learning-group`
- O armazenamento do projeto completo (incluindo o `gulpfile.js`) nessa branch
- O envio do link do repositório pela plataforma da EBAC

### 2. Estrutura do `gulpfile.js`

#### 2.1 Importações

Os plugins utilizados no projeto foram importados da seguinte forma:

```javascript
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
````

#### 2.2 Compilação do Sass

A função `compilaSass` compila o arquivo principal SCSS e gera o CSS correspondente com o uso de sourcemaps:

```javascript
function compilaSass() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/styles'));
}
```

#### 2.3 Compressão de Imagens

A função `comprimeImagens` reduz o tamanho de todos os arquivos de imagem da pasta `src/images`:

```javascript
function comprimeImagens() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}
```

#### 2.4 Compressão de JavaScript

A função `comprimeJavascript` minifica os arquivos `.js` e os salva em `build/scripts`:

```javascript
function comprimeJavascript() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}
```

### 3. Considerações Finais

* Todos os plugins necessários já estavam instalados anteriormente.
* As imagens foram copiadas manualmente para o diretório correto antes da execução.
* Os testes foram realizados com o comando `gulp` para garantir que todas as tarefas estavam funcionando corretamente.

