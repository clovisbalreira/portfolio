export function anuncio(comercial){
    let div = document.createElement('div')
    div.classList.add('comercial')
    div.innerHTML = comercial
    return div
}