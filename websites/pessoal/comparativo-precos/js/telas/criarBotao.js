export function criarBotao(id, texto, visivel){
    let button = document.createElement('button')
    button.id = id
    button.textContent = texto
    button.style.display = visivel
    return button
}