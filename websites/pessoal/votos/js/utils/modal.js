import { criarImg } from "./criarImg.js";
import { mostrarPartidos } from "../mvc/view/mostrarPartidos.js";
import { mostrarDeputados } from "../mvc/view/mostrarDeputados.js"
import { trancarConfiguracoes } from "./trancarConfiguracoes.js";

export function modal(id, codigo, dados, escolhaUsuario){
    const modal = document.querySelector('dialog');
    modal.innerHTML = ''
    let filtro = dados.find( dado => dado.id == codigo) 
    criarTela(id, modal, filtro)
    modal.appendChild(criarBotoes(id))
    modal.showModal()
    salvar(id, filtro, escolhaUsuario, modal)
    cancelar(modal)
}

function criarTela(id, modal, filtro){
    if(id == 'partidos'){
        modal.appendChild(criarImg(`./img/partidos/${filtro.foto}`, filtro.nome)) 
        modal.appendChild(criarTextoPartido(filtro))
    }else{
        modal.appendChild(criarImg(filtro.foto, filtro.nome))
        modal.appendChild(criarTextoDeputado(filtro))
    }
    return modal
}

function criarTextoPartido(partido){
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = `${partido.nome} - ${partido.sigla}`
    div.appendChild(p)
    return div
}

function criarTextoDeputado(deputado){
    let ul = document.createElement('ul')
    ul.appendChild( criarLi('Deputado', deputado.nome))
    ul.appendChild( criarLiImg('Estado', deputado.estado, deputado.fotoEstado))
    ul.appendChild( criarLiImg('Partido', deputado.partido, deputado.fotoPartido))
    return ul
}

function criarLi(titulo, texto){
  let li = document.createElement('li')
  li.appendChild(criarP(titulo))
  li.appendChild(criarP(texto))
  return li
}

function criarLiImg(titulo, texto, img){
  let li = document.createElement('li')
  li.appendChild(divLi(titulo, texto))
  titulo == 'Estado' ? li.appendChild(criarImg(`./img/estados/${img}`, texto)) : li.appendChild(criarImg(`./img/partidos/${img}`, texto))
  return li
}

function divLi(titulo, texto){
    let div = document.createElement('div')
    div.appendChild(criarP(titulo))
    div.appendChild(criarP(texto))
    return div
}

function criarP(texto){
  let p = document.createElement('p')
  p.textContent = texto
  return p
}

function criarBotoes(id){
    let botoes = [
        { nome: 'Adicionar', id: `adicionar-${id}`},
        { nome: 'Cancelar', id: 'cancelar'}
    ]
    let div = document.createElement('div')
    div.id = 'div-button'
    botoes.forEach( botao => {
        let button = document.createElement('button')
        button.textContent = botao.nome
        button.id = botao.id
        div.appendChild(button)
    })
    return div
}

function salvar(id, filtro, escolhaUsuario, modal){
    let botao = document.getElementById(id.includes('partidos') ? `adicionar-${id}` : `adicionar-${id}`)
    botao.addEventListener('click', () => {
        if(id.includes('partidos')){
            escolhaUsuario.partidos.push(filtro)
            mostrarPartidos(escolhaUsuario)
        }else{
            escolhaUsuario.deputados.push(filtro)
            mostrarDeputados(escolhaUsuario)
        }
        trancarConfiguracoes()
        modal.close()
    })
}

function cancelar(modal){
    let botao = document.getElementById('cancelar')
    botao.addEventListener('click', () => {
        modal.close()
    })
}


