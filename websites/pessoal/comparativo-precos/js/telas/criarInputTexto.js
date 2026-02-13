export function criarInputTexto(texto, titulo, id){
    let div = document.createElement('div')
    let label = document.createElement('label')
    label.textContent = titulo
    label.setAttribute('for', id)
    div.appendChild(label)
    let input = document.createElement('input')
    input.id = id
    input.classList.add(id)
    input.type = 'text'
    input.value = texto
    id == 'nome-produto' && texto != '' ? input.disabled = true : input.disabled = false
    div.appendChild(input)
    return div
}