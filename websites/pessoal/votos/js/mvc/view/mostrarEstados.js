import { estados } from "../controll/estados.js";
import { init } from "../../api//buscarEstados.js"
import { escolhaUsuario } from "../controll/escolhaUsuario.js";

export async function inicializarEstados(){
    let estado = await init()
    mostrarEstados(estado)
}

function mostrarEstados(estado){
    let header = document.querySelector('header')
    header.appendChild(criarDiv(estado))
    atualizarEscolha(estados, escolhaUsuario)
    pegarEstado()
}

function criarDiv(estado){
    let div = document.createElement('div')
    div.id = 'buscando-localizacao'
    let id = 'localizacao'
    div.appendChild(criarLabel(id))
    div.appendChild(criarSelect(id, estado))
    return div
}

function criarLabel(id){
    let label = document.createElement('label')
    label.for = id
    label.textContent = 'Estado'
    return label
}

function criarSelect(id, nomeEstado){
    let select = document.createElement('select')
    select.id = id
    estados.forEach( estado => {
        select.appendChild(criarOption(estado, nomeEstado))
    })
    return select
}

function criarOption(texto, nomeEstado){
    let option = document.createElement('option')
    option.textContent = texto.sigla
    if(texto.nome == nomeEstado) option.selected = true
    return option
}

function pegarEstado(){
    let localizacao = document.getElementById('localizacao')
    
    localizacao.addEventListener('click', (e) => {
        estados.forEach( est => {
            if(est.sigla == e.target.value) escolhaUsuario.estado = est
        })
    })
}

function atualizarEscolha(estados, escolhaUsuario){
    let localizacao = document.getElementById('localizacao')
    estados.forEach( est => {
        if(est.sigla == localizacao.value) escolhaUsuario.estado = est
    })
}