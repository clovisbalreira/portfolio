export function criarTd(texto){
  let td = document.createElement('td')
  texto instanceof HTMLElement ? td.appendChild(texto) : td.textContent = texto
  return td
}