import { posts } from "../control/posts.js"
import { mostrarPost } from "../view/post.js"
import { publicidade } from "../../utils/publicidade.js"
import { scroll } from "../../utils/scroll.js"

export function mostrarSocialMidia(selecao, titulo){
    let section = document.getElementById('social-midia')
    section.innerHTML = ''
    let divPrincipal = document.createElement('div')
    let img = document.createElement('img')
    img.src = selecao.foto 
    divPrincipal.appendChild(img)
    let div = document.createElement('div')
    div.id = 'div-h2'
    let h2 = document.createElement('h2')
    h2.textContent = `autor${selecao.foto.includes('women') ? 'a' : ''} ${selecao.nome}`
    div.appendChild(h2)
    let divUl = document.createElement('div')
    let h3 = document.createElement('h3')
    if(selecao.descricao != ''){
        let p = document.createElement('p')
        p.textContent = `Descrição ${selecao.descricao}`
        div.appendChild(p)
    }
    h3.textContent = `Materia${selecao.length > 0 ? 's' : ''}`
    divUl.appendChild(h3)
    let radio = posts.find( post => post.titulo == titulo).radio
    let materias = posts.filter( post => post.radio == radio && selecao.nome == post.socialMidia.nome)
    let ul = document.createElement('ul')
    materias.forEach( materia => {
        let li = document.createElement('li')
        li.textContent = materia.titulo
        li.classList.add('materia-single')
        ul.appendChild(li)
    })
    divUl.appendChild(ul)
    div.appendChild(divUl)
    divPrincipal.appendChild(div)
    section.appendChild(divPrincipal)
    section.appendChild(publicidade())
    escolherPost(materias)
    scroll('social-midia')
}

function escolherPost(materias){
    let classes = document.querySelectorAll('.materia-single')
    classes.forEach( classe => {
        classe.addEventListener('click', () => {
            let selecao = materias.find( materia => materia.titulo == classe.textContent)
            mostrarPost(selecao)
            scroll('div-post')
        })
    })
}