import { publicidade } from "../../utils/publicidade.js"
import { formatarData } from "../../utils/formatarData.js"
import { selecionarSocialMidia } from "../../utils/selecionarSocialMidia.js"

export const mostrarPost = (post) => {
    let section = document.getElementById('post')
    section.innerHTML = ''
    section.appendChild(publicidade())
    let divPrincipal = document.createElement('div')
    divPrincipal.id = 'div-post'
    let div = document.createElement('div')
    let divImagemTitulo = document.createElement('div')
    divImagemTitulo.classList.add('imagem-titulo')
    let img = document.createElement('img')
    img.classList.add('imagem-post')
    img.src = post.imagem
    divImagemTitulo.appendChild(img)
    let h2 = document.createElement('h2')
    h2.textContent = post.titulo
    divImagemTitulo.appendChild(h2)
    let social = document.createElement('p')
    social.classList.add('social-Midias')
    social.textContent = `Escrito por ${post.socialMidia.nome}`
    divImagemTitulo.appendChild(social)
    let data = document.createElement('p')
    data.textContent = `Data: ${formatarData(post.data)}`
    divImagemTitulo.appendChild(data)
    div.appendChild(divImagemTitulo)
    let divDescricao = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = post.descricao
    divDescricao.appendChild(p)
    div.appendChild(divDescricao)
    divPrincipal.appendChild(div)
    section.appendChild(divPrincipal)
    selecionarSocialMidia()
}