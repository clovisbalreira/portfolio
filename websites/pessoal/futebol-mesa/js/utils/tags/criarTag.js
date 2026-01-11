export function criarTag(codigo, associacao){
    let tag = document.createElement(codigo)
    tag.innerHTML = associacao
    return tag
}