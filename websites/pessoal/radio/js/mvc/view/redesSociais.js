import { publicidade } from "../../utils/publicidade.js";
import { redesSociais } from "../control/redesSociais.js";
import { links } from "../control/links.js";
import { Links } from "../model/Links.js";

export function mostrarRedesSociais(dado){
    let redes = document.getElementById('redes-sociais')
    redes.style.display = 'flex'
    redes.appendChild(publicidade())
    let ul = document.createElement('ul')
    ul.id = 'logo-redes'
    let contem = true
    redesSociais.forEach( rede => {
        const chave = rede.nome.toLowerCase();
        if (dado[chave] && dado[chave].trim() !== "") {
            contem = false
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.href = pegarLink(dado, rede)
            a.target = '_blank'
            a.innerHTML = rede.imagem
            li.appendChild(a)
            ul.appendChild(li)
        }
    })
    if(contem){
        redes.innerHTML = ''
    }else{
        links.push(new Links('Redes Sociais', 'logo-redes'))
        redes.appendChild(ul)
        let h2 = document.createElement('h2')
        h2.textContent = 'Segue a gente e fique por dentro das novidades!'
        redes.appendChild(h2)
    } 
}

function pegarLink(dado, rede){
    switch(rede.nome){
        case 'Facebook':
            return dado.facebook
        case 'Mensseger':
            return dado.mensseger
        case 'Instagram':
            return dado.instagram
        case 'Twitter':
            return dado.twitter
        case 'PlayStore':
            return dado.playstore
        case 'Tiktok':
            return dado.tiktok
        case 'Whatsapp':
            return `https://wa.me/${dado.whatsapp}?text=Olá! Aqui quem fala é da sua rádio preferida ${dado.nomeCompleto.toUpperCase()}, trazendo música boa, alegria e lembranças que marcaram épocas.
            Sintonize, aumente o volume e deixe a música embalar o seu dia!`
    }
}

