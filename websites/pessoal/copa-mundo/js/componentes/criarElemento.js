export function criarElemento(forma, texto, classe = ''){
    let elemento = document.createElement(forma)
    if(classe != '') elemento.classList.add('x')
    elemento.textContent = texto
    return elemento
}