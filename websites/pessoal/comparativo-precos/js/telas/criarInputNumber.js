export function criarInputNumber(quantidade, titulo, id){
    let div = document.createElement('div')
    let label = document.createElement('label')
    label.textContent = titulo
    label.setAttribute('for', id)
    div.appendChild(label)
    let input = document.createElement('input')
    input.id = id
    input.classList.add(id)
    input.type = 'number'
    input.min = 0
    input.step = '0.001'
    input.value = quantidade
    div.appendChild(input)
    return div
}