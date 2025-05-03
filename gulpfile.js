function funcaoPadrao(callback) {
    console.log ("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Diz tchau")
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;
