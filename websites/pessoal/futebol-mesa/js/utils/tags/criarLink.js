export function criarLink(texto, link, abrir, imagem){
    let a = document.createElement('a')
    a.textContent = texto
    a.href = link
    a.target = abrir
    return a
}