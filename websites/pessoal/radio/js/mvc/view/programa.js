import { publicidade } from "../../utils/publicidade.js"
import { locutores } from "../control/locutores.js"
import { mostrarLocutor } from "./locutor.js"
import { scroll } from "../../utils/scroll.js"

export function mostrarPrograma(selecao){
    let section = document.getElementById('programa')
    section.innerHTML = ''
    let divPrincipal = document.createElement('div')
    let img = document.createElement('img')
    img.src = selecao.foto 
    divPrincipal.appendChild(img)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    h2.textContent = `Programa ${selecao.nome}`
    div.appendChild(h2)
    if(selecao.descricao != ''){
        let p = document.createElement('p')
        p.textContent = `Descrição: ${selecao.descricao}`
        div.appendChild(p)
    }
    let h3 = document.createElement('h3')
    h3.textContent = `Locutor ${selecao.locutor.nome}`
    h3.classList.add('locutor-single')
    div.appendChild(h3)
    divPrincipal.appendChild(div)
    section.appendChild(divPrincipal)
    section.appendChild(publicidade())
    escolherLocutor()
    scroll('programa')
}

function escolherLocutor(){
    let classes = document.querySelectorAll('.locutor-single')
    classes.forEach( classe => {
        classe.addEventListener('click', () => {
            let selecao = locutores.find( locutor => locutor.nome == classe.textContent.replace('Locutor ', ''))
            mostrarLocutor(selecao)
        })
    })
}