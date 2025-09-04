import { programas } from "../control/programas.js"

export function mostrarLocutor(selecao){
    let locutorProgramas = programas.filter( programa => programa.locutor.nome === selecao.nome)
    let section = document.getElementById('locutor')
    let divPrincipal = document.createElement('div')
    let img = document.createElement('img')
    img.src = selecao.foto 
    divPrincipal.appendChild(img)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = `Locutor: ${selecao.nome}`
    div.appendChild(h2)
    let divUl = document.createElement('div')
    let h3 = document.createElement('h3')
    if(selecao.descricao != ''){
        let p = document.createElement('p')
        p.textContent = `Descrição: ${selecao.descricao}`
        div.appendChild(p)
    }
    h3.textContent = `Programa${locutorProgramas.length > 0 ? 's' : ''}:`
    divUl.appendChild(h3)
    let ul = document.createElement('ul')
    locutorProgramas.forEach( programa => {
        let li = document.createElement('li')
        li.textContent = programa.nome
        li.classList.add('nome-programa-select')
        ul.appendChild(li)
    })
    divUl.appendChild(ul)
    div.appendChild(divUl)
    divPrincipal.appendChild(div)
    section.appendChild(divPrincipal)
}