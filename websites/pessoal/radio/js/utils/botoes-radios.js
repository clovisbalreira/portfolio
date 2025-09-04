import { dados } from "../mvc/control/dados.js";
import { programacao } from "../mvc/control/programacao.js";
import { parada } from "../mvc/control/parada.js";
import { posts } from "../mvc/control/posts.js";
import { variavelGlobal } from "../mvc/control/global.js";
import { mostrarPlayer } from "./player.js";
import { atualizarDados } from "../mvc/view/dados.js";
import { mostrarParada } from "../mvc/view/parada.js";
import { mostrarProgramacao } from "../mvc/view/programacao.js";
import { mostrarPosts } from "../mvc/view/posts.js";

export function escolherRadio(){
    const botoes = document.querySelectorAll('.button-radios')
    botoes.forEach( botao => {
        botao.addEventListener('click', (e) => {
            dados.forEach( (dado, index) => {
                variavelGlobal.indexRadio = index
                if(e.target.alt == dado.nome){
                    variavelGlobal.conta = 3
                    mostrarPlayer(programacao[variavelGlobal.indexRadio])
                    atualizarDados(dados[variavelGlobal.indexRadio])
                    mostrarParada(parada[variavelGlobal.indexRadio])
                    mostrarProgramacao(programacao[variavelGlobal.indexRadio])
                    mostrarPosts(posts, dados[variavelGlobal.indexRadio].nome)
                    document.getElementById('coracao-cheio').style.display = 'none'
                }
            })
        })
    })
}