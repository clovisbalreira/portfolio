export function exibirMensagem(elemento, texto) {

    const paragrafo = document.createElement("p");

    paragrafo.className = "mensagem";
    paragrafo.textContent = texto;

    elemento.replaceChildren(paragrafo);
}
