import { projetos } from "../controll/projetos.js"

export function criarNavegacao(){
    let ul = document.querySelector('ul')
    projetos.forEach( (link, index) => {
        let li = document.createElement('li')
        let button = document.createElement('button')
        button.textContent = link.nome
        if( index == 0) button.classList.add('ativo');
        li.appendChild(button)
        ul.appendChild(li)
    })
}