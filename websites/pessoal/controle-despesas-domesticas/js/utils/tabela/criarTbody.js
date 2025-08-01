export function criarTbody(index){
    let tbody = document.createElement('tbody')
    tbody.setAttribute('id', index )
    if(index.length > 1) tbody.classList.add(index.split('-').slice(0, 2).join('-'))
    return tbody
}