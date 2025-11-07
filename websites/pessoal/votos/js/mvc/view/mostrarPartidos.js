import { partidos, carregarDadosPartidos } from "../controll/partidos.js";
import { criarTd } from "../../utils/criarTd.js";
import { criarImg } from "../../utils/criarImg.js";
import { selecionar } from "../../utils/selecionar.js";
import { escolhaUsuario } from "../controll/escolhaUsuario.js";
import { configuracoes } from "../controll/configuracoes.js";
import { liberarLeis } from "./mostrarLeis.js";

export async function inicializarPartidos(){
  await carregarDadosPartidos()
  mostrarPartidos(escolhaUsuario)
}

export function mostrarPartidos(escolhaUsuario) {
  let section = document.getElementById('partidos')
  section.innerHTML = ''
  if(escolhaUsuario.partidos.length < configuracoes.partidos && escolhaUsuario.partidos.length < partidos.length){
    section.appendChild(criarTabela(partidos, escolhaUsuario))
    selecionar('partidos', partidos, escolhaUsuario)
  }else{
    let p = document.createElement('p')
    p.textContent = `Voce já selecionou os ${partidos.length < configuracoes.partidos ? partidos.length : configuracoes.partidos} partidos`
    section.appendChild(p)
    liberarLeis()
  }
}

function criarTabela(partidos, escolhaUsuario){
  let table = document.createElement('table')
  table.appendChild(criarThead())
  table.appendChild(criarTbody(partidos, escolhaUsuario))
  return table
}

function criarThead(){
  let thead = document.createElement('thead')
  let tr = document.createElement('tr')
  let titulos = ['Nome', 'Partido']
  titulos.forEach( (titulo, index) => {
    let th = document.createElement('th')
    th.colSpan = index == 0 ? 1 : 2
    th.textContent = titulo
    tr.appendChild(th)
  })
  thead.appendChild(tr)
  return thead
}

function criarTbody(partidos, escolhaUsuario){
  let tbody = document.createElement('tbody')
  partidos.forEach( partido => {
    let contem = escolhaUsuario.partidos.find( par => {
      return par.id == partido.id
    })
    if(contem == undefined){
      let tr = document.createElement('tr')
      tr.dataset.partido = partido.id
      tr.appendChild(criarTd(partido.nome))
      tr.appendChild(criarTd(criarImg(`./img/partidos/${partido.foto}`, partido.nome)))
      tr.appendChild(criarTd(partido.sigla))
      tbody.appendChild(tr)
    }
  })
  return tbody
}    