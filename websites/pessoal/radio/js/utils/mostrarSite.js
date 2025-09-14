import { mostrarRedesSociais } from "../mvc/view/redesSociais.js";
import { mostrarParada } from "../mvc/view/parada.js";
import { mostrarProgramacao } from "../mvc/view/programacao.js";
import { mostrarPosts } from "../mvc/view/posts.js";
import { mostrarFormulario } from "../mvc/view/formulario.js";
import { links } from "../mvc/control/links.js";
import { Links } from "../mvc/model/Links.js";
import { mostrarPlayer } from "./player.js";
import { mostrarNavegacao } from "./navegacao.js";
import { mostrarRadios } from "./radios.js";
import { mostrarFooter } from "./mostrarFooter.js";
import { atualizando } from "./atualizando.js";

export function mostrarSite(radio, programacao, radios, parada, posts, variavelGlobal){
    let data = new Date()
    links.push(new Links('Home', 'radios'))
    mostrarFundo(radio)
    mostrarPlayer(radio, programacao[variavelGlobal.indexRadio])
    mostrarRadios() 
    mostrarRedesSociais(radios[variavelGlobal.indexRadio])
    mostrarParada(parada[variavelGlobal.indexRadio])
    mostrarProgramacao(programacao[variavelGlobal.indexRadio])
    mostrarPosts(posts, radios[variavelGlobal.indexRadio].nome)
    mostrarFormulario() 
    mostrarFooter(radio, data)
    atualizando()
    mostrarNavegacao(radio)
}

function mostrarFundo(radio){
    if(radio.imagemFundo.includes('.')){
        document.querySelector('body').style.background =  `var(--fundo-transparente) url('./img/fundo/${radio.imagemFundo}') no-repeat fixed center center`
        document.querySelector('body').style.height = '100vh'
        document.querySelector('body').style.backgroundSize = 'cover'
        document.querySelector('body').style.backgroundColor = 'var(--fundo)'
    }else{
        document.querySelector('body').style.background = radio.imagemFundo == '' ? 'var(--fundo)' : radio.imagemFundo
    }
}