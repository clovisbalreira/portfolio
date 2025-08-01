export function criarTabela(n, id, index){
    let td = document.createElement('td')
    td.classList.add('zerar-padding')
    if(n > 1){ td.colSpan = n}
    let table = document.createElement('table')
    table.setAttribute('id', `${id}-${index}`)
    table.classList.add(id)
    td.appendChild(table)
    return td
}