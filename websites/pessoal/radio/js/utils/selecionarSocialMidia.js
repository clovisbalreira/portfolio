import { socialMidia } from "../mvc/control/socialMidia.js"
import { mostrarSocialMidia } from "../mvc/view/social-midia.js"

export function selecionarSocialMidia(){
    document.getElementById('social-midia').style.display = 'flex'
    const texto_nome = document.querySelectorAll('.social-Midias')
    texto_nome.forEach( texto => {
        texto.addEventListener( 'click', () => {
            let titulo = texto.parentNode.parentNode.parentNode.querySelector('h2').textContent
            let selecao = socialMidia.find( social => social.nome == texto.textContent.replace('Escrito por ', '') )
            mostrarSocialMidia(selecao, titulo)
        })
    })
}

