from pyscript import document

def exibir_mensagem(elemento, texto):

    paragrafo = document.createElement("p")
    paragrafo.className = "mensagem"
    paragrafo.textContent = texto

    elemento.replaceChildren()
    elemento.appendChild(paragrafo)

