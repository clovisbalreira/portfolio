export function criarElemento(tag, classe){
  let elemento = document.createElement(tag)
  elemento.classList.add(classe)
  return elemento
}