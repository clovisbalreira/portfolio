import { projetos } from "../controll/projetos.js"
import { acaoNavegacao } from "../../utils/acaoNavegacao.js"

export function criarDashbord(projeto = projetos[0]){
    let main = document.querySelector('main')
    main.innerHTML = ''
    main.appendChild(criarIframe(projeto))
    acaoNavegacao()
}

function criarIframe(projeto){
    let iframe = document.createElement('iframe')
    mudarAtributos(iframe, projeto)
    mudarCores(projeto)
    return iframe
}

function mudarAtributos(iframe, projeto){
    iframe.src = projeto.src
    iframe.setAttribute('title', projeto.title)
    iframe.setAttribute('frameborder', 0)
}

function mudarCores(projeto){
    document.querySelector('h1').style.color = projeto.color
    document.querySelectorAll('i').forEach( i => { i.style.color = projeto.color })
    document.querySelector('body').style.backgroundColor = projeto.cor
}

