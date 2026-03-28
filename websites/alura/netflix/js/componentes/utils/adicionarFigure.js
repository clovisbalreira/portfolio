import { adicionarImagem } from "./adicionarImagem.js"
export function adicionarFigure(perfil){
    let figure = document.createElement('figure')
    figure.appendChild(adicionarImagem(perfil))
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = perfil.titulo
    figure.appendChild(figCaption)
    return figure
}