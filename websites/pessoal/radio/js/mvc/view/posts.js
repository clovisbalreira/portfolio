import { radios } from "../control/radios.js"
import { variavelGlobal } from "../control/global.js"
import { aumentarPosts } from "../../utils/aumentarPosts.js";
import { postSelecionado } from "../../utils/postSelecionado.js";
import { formatarData } from "../../utils/formatarData.js"
import { selecionarSocialMidia } from "../../utils/selecionarSocialMidia.js";
import { publicidade } from "../../utils/publicidade.js";
import { links } from "../control/links.js";
import { Links } from "../model/Links.js";

export const mostrarPosts = (posts, radio) => { 
    links.push(new Links('Posts', 'h2-posts'))
    const artigos = posts.filter(post => post.radio === radio);
    let divPost = document.getElementById('posts')
    divPost.style.display = 'flex'
    divPost.innerHTML = ''
    divPost.appendChild(publicidade())
    let h2 = document.createElement('h2')
    h2.textContent = 'Posts'
    divPost.appendChild(h2)
    h2.id = 'h2-posts'
    let divP = document.createElement('div')
    let artigoTotal = artigos.length
    let botaoSection = document.getElementById('section-post')
    if(variavelGlobal.conta > artigoTotal){
        botaoSection.style.display = 'none'
        variavelGlobal.conta = artigoTotal
    }else{
        if(artigos.length > 0) botaoSection.style.display = 'flex'
    }
    for(let i = 0; i < variavelGlobal.conta; i++){
        let div = document.createElement('div')
        div.classList.add('post')
        let div1 = document.createElement('div')
        let img = document.createElement('img')
        img.src = artigos[i].imagem
        div1.appendChild(img)
        let divAutor = document.createElement('div')
        divAutor.classList.add('div-social-Midias')
        let social = document.createElement('p')
        social.classList.add('social-Midias')
        social.textContent = `Escrito por ${artigos[i].socialMidia.nome}`
        divAutor.appendChild(social)
        let data = document.createElement('p')
        data.textContent = `Data: ${formatarData(artigos[i].data)}`
        divAutor.appendChild(data)
        div1.appendChild(divAutor)
        div.appendChild(div1)
        let div2 = document.createElement('div')
        let h2 = document.createElement('h2')
        h2.textContent = artigos[i].titulo
        div2.appendChild(h2)
        div.appendChild(div2)
        let div3 = document.createElement('div')
        let p = document.createElement('p')
        p.textContent = artigos[i].descricao
        div3.appendChild(p)
        let button = document.createElement('button')
        button.textContent = 'Leia Mais'
        button.classList.add('btn-post')
        div3.appendChild(button)
        div.appendChild(div3)
        divP.appendChild(div)
    }
    divPost.appendChild(divP)
    mostrarBotao()
    aumentarPosts(posts, radios)
    postSelecionado(posts)
    selecionarSocialMidia()
}

function mostrarBotao(){
    let section = document.getElementById('section-post')
    section.innerHTML = ''
    let button = document.createElement('button')
    button.id = 'btn-mais'
    button.classList.add('btn-mais')
    button.textContent = 'Mais Posts'
    section.appendChild(button)
}