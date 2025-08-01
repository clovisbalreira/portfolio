export function criarTd(dado, n, dinheiro, cor){
    let td = document.createElement('td')
    td.textContent = dinheiro ? `R$ ${dado.toFixed(2)}` : dado
    if(n > 1) td.colSpan = n
    if(cor != undefined) td.style.color = cor
    return td
}