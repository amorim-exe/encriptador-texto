var botaoEncriptar = document.querySelector(".btn-criptografar");
var botaoDesencriptar = document.querySelector(".btn-descriptografar");
var boneco = document.querySelector(".boneco");
var paragrafo = document.querySelector(".paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoEncriptar.onclick = criptografar;
botaoDesencriptar.onclick = descriptografar;

function criptografar() {
    ocultarElementos();
    var caixaTexto = recuperarTexto();
    resultado.textContent = criptografarTexto(caixaTexto);
}

function descriptografar() {
    ocultarElementos();
    var caixaTexto = recuperarTexto();
    resultado.textContent = descriptografarTexto(caixaTexto);
}

function recuperarTexto() {
    var caixaTexto = document.querySelector(".caixa");
    return caixaTexto.value;
}

function ocultarElementos() {
    boneco.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function descriptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", function() {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Texto copiado para a área de transferência");
});
