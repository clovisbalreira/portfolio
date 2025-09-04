import { mostrarProgramacao } from "./programacao.js";
import { mostrarPosts } from "./posts.js";
import { mostrarParada } from "./parada.js";
import { variavelGlobal } from "../control/global.js";
import { programacao } from "../control/programacao.js";
import { posts } from "../control/posts.js";
import { parada } from "../control/parada.js";
import { dados } from "../control/dados.js";
import { mostrarPlayer } from "../../utils/player.js";
import { mostrarRadios } from "../../utils/radios.js";
import { escolherRadio } from "../../utils/botoes-radios.js";
import { pegarPaises, pegarEstados, pegarCidades } from "../../api/apis.js";
import { fazerPedido, atualizarPedido } from "../../utils/fazerPedido.js";
import { gravarFavoritos, atualizarFavorito } from "../../utils/like.js";

export function atualizarDados(radio){
    let data = new Date()
    let urlRadio = document.getElementById('radioPlayer')
    urlRadio.src = radio.url
    let imagemPlayer = document.getElementById('audio-imagem')
    imagemPlayer.alt = radio.nome 
    imagemPlayer.src = radio.imagem
    let imagemLogo = document.getElementById('imagem-logo')
    imagemLogo.alt = radio.nome
    imagemLogo.src = radio.imagemLogo
    let inicio = document.getElementById('ano')
    inicio.textContent = radio.fundacao
    let atual = document.getElementById('atual')
    atual.textContent = data.getFullYear()
    let nome = document.getElementById('nome-radio')
    nome.textContent = radio.nomeCompleto
    let slogan = document.getElementById('slogan-radio')
    slogan.textContent = radio.slogan
    let facebook = document.getElementById('facebook')
    facebook.href = radio.facebook
    let instagram = document.getElementById('instagram')
    instagram.href = radio.instagram
    let twitter = document.getElementById('twitter')
    twitter.href = radio.twitter
    let playstore = document.getElementById('playstore')
    playstore.href = radio.playstore
    let post = document.getElementById('post')
    post.innerHTML = ''
    mostrarPlayer(programacao[variavelGlobal.indexRadio])
    mostrarParada(parada[variavelGlobal.indexRadio])
    mostrarProgramacao(programacao[variavelGlobal.indexRadio])
    mostrarPosts(posts, dados[variavelGlobal.indexRadio].nome)
    mostrarRadios()
    escolherRadio()
    pegarPaises()
    pegarEstados()
    pegarCidades()
    fazerPedido(data)
    gravarFavoritos()
    setInterval(() => { 
        atualizarFavorito()
        atualizarPedido()
    }, 1000);
}