import { adicionarFigure } from "./adicionarFigure.js"
import { adicionarArticle } from "./adicionarArticle.js"
import { adicionarUl } from "./adicionarUl.js"

export function adicionarLink(perfil){
    let temaAtual = document.body.classList.value
    let a = document.createElement('a')
    a.classList.add('profile')
    if (temaAtual == '') {
        a.href = "./js/catalogo/catalogo.html"
    }
    a.appendChild(adicionarFigure(perfil))
    a.appendChild(adicionarArticle(perfil))
    if (temaAtual == 'tema-verde') {
        a.appendChild(adicionarUl(perfil, false))
    }
     a.addEventListener('click', () => {
        localStorage.setItem('perfilAtivoNome', perfil.titulo)
        localStorage.setItem('perfilAtivoImagem', perfil.imagem)
    })
    return a
}