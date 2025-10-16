import { selects } from "../mvc/controll/selects.js"

export function inputSomar(){
    let div = document.createElement('div')
    let label = document.createElement('label')
    label.textContent = 'Top'
    label.for = 'top'
    div.appendChild(label)
    let button = document.createElement('button')
    button.textContent = '-'
    button.id = 'diminuir'
    button.classList.add('btn-calcular')
    div.appendChild(button)
    let p = document.createElement('p')
    p.textContent = selects.top
    p.id = 'valor'
    p.classList.add('btn-calcular')
    div.appendChild(p)
    button = document.createElement('button')
    button.textContent = '+'
    button.id = 'somar'
    button.classList.add('btn-calcular')
    div.appendChild(button)
    return div
}