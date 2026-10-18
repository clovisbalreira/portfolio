const painelSistema = document.querySelector(
    "#painel-sistema"
);

const visualizadorCodigo = document.querySelector(
    "#visualizador-codigo"
);

const abaSistema = document.querySelector(
    "#aba-sistema"
);

const abaCodigo = document.querySelector(
    "#aba-codigo"
);

function mostrarSistema() {
    painelSistema.hidden = false;
    visualizadorCodigo.hidden = true;

    abaSistema.classList.add("ativa");
    abaCodigo.classList.remove("ativa");
}

function mostrarCodigo() {
    painelSistema.hidden = true;
    visualizadorCodigo.hidden = false;

    abaSistema.classList.remove("ativa");
    abaCodigo.classList.add("ativa");
}

abaSistema.addEventListener(
    "click",
    mostrarSistema
);

abaCodigo.addEventListener(
    "click",
    mostrarCodigo
);