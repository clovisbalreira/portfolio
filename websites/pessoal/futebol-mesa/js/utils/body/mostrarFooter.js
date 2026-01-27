import { criarTag } from "../tags/criarTag.js"
//import { criarLink } from "../tags/criarLink.js"

export function mostrarFooter(){
    let footer = document.querySelector('footer')
    footer.innerHTML = ''
    footer.appendChild(criarTag('p', 'Criado por Clóvis Balreira Rodrigues'))
    //footer.appendChild(criarLink('Linkedin', 'https://www.linkedin.com/in/clovis-balreira-rodrigues-dev/'))
}