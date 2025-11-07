import { deputados, carregarDadosDeputados } from "../controll/deputados.js";
import { criarTd } from "../../utils/criarTd.js"
import { criarImg } from "../../utils/criarImg.js";
import { filtros } from "../controll/filtros.js";
import { selecionar } from "../../utils/selecionar.js";
import { escolhaUsuario } from "../controll/escolhaUsuario.js";
import { configuracoes } from "../controll/configuracoes.js"
import { liberarLeis } from "./mostrarLeis.js";

export async function inicializarDeputados(){
  await carregarDadosDeputados()
  mostrarDeputados(escolhaUsuario)
}

export function mostrarDeputados(escolhaUsuario) {
  let section = document.getElementById('deputados')
  section.innerHTML = ''
  if(escolhaUsuario.deputados.length < configuracoes.deputados && escolhaUsuario.deputados.length < deputados.length){
    let divSelects = document.createElement('div')
    let selects = [
      {id: 'deputado-estado', uf: 'Estados', dados: [...new Set(deputados.map(dep => dep.estado))].sort(), filtro: filtros.estado},
      {id: 'deputado-partido', uf: 'Partidos', dados: [...new Set(deputados.map(dep => dep.partido))].sort(), filtro: filtros.partido},
    ]
    selects.forEach( select => {
      divSelects.appendChild(criarDivSelect(select.id, select.uf, select.dados, select.filtro))
      section.appendChild(divSelects)
    })
    let divDeputados = document.createElement('div')
    let filtro = filtrarDados(deputados, filtros)
    filtro.length == 0 ? divDeputados.appendChild(criarSpan()) : section.appendChild(criarTabela(filtro, escolhaUsuario))
    section.appendChild(divDeputados)
    selecionarSelect(selects)
    selecionar('deputados', deputados, escolhaUsuario)
  }else{
    let p = document.createElement('p')
    p.textContent = `Voce já selecionou os ${deputados.length < configuracoes.deputados ? deputados.length : configuracoes.deputados} deputados`
    section.appendChild(p)
    liberarLeis()
  }
}

function criarSpan(){
  let span = document.createElement('span')
  span.textContent = 'Esse estado não possui nenhum deputado com nesse partido.'
  return span
}

function criarTabela(filtro, escolhaUsuario){
  let table = document.createElement('table')
  table.appendChild(criarThead())
  table.appendChild(criarTbody(filtro, escolhaUsuario))
  return table
}

function criarThead(){
  let thead = document.createElement('thead')
  let tr = document.createElement('tr')
  let titulos = ['Nome', 'Partido', 'Estado']
  titulos.forEach( titulo => {
    let th = document.createElement('th')
    th.colSpan = 2
    th.textContent = titulo
    tr.appendChild(th)
  })
  thead.appendChild(tr)
  return thead
}

function criarTbody(deputados, escolhaUsuario){
  let tbody = document.createElement('tbody')
  deputados.forEach( deputado => {
    let contem = escolhaUsuario.deputados.find( dep => {
      return dep.id == deputado.id
    })
    if(contem == undefined){
      let tr = document.createElement('tr')
      tr.dataset.deputado = deputado.id
      tr.appendChild(criarTd(criarImg(deputado.foto, deputado.nome)))
      tr.appendChild(criarTd(deputado.nome))
      tr.appendChild(criarTd(criarImg(`./img/estados/${deputado.fotoEstado}`, deputado.estado)))
      tr.appendChild(criarTd(deputado.estado))
      tr.appendChild(criarTd(criarImg(`./img/partidos/${deputado.fotoPartido}`, deputado.partido)))
      tr.appendChild(criarTd(deputado.partido))
      tbody.appendChild(tr)
    }
  })
  return tbody
}

function criarDivSelect(id, textoLabel, array, filtro){
  let div = document.createElement('div')
  div.appendChild(criarLabel(id, textoLabel))
  div.appendChild(criarSelect(id, array, filtro))
  return div
}

function criarLabel(id, textoLabel){
  let label = document.createElement('label')
  label.for = id
  label.textContent = textoLabel
  return label
}

function criarSelect(id, array, filtro){
  let select = document.createElement('select')
  select.id = id
  let option = document.createElement('option')
  option.textContent = 'Selecione'
  option.value = ''
  select.appendChild(option)
  array.forEach( dado => {
    let option = document.createElement('option')
    option.textContent = dado
    if(filtro == dado) option.selected = true
    select.appendChild(option)
  })
  return select
}

function filtrarDados(deputados, filtros) {
  let filtrados = [...deputados];
  filtros.estado ? filtrados = filtrados.filter(dep => dep.estado === filtros.estado) : filtrados
  filtros.partido ? filtrados = filtrados.filter(dep => dep.partido === filtros.partido) : filtrados
  return filtrados;
}

function selecionarSelect(selects){
  selects.forEach( sel => {
    let select = document.getElementById(sel.id)
      select.addEventListener( 'change', (e) => {
        sel.id.includes("estado") ? filtros.estado = e.target.value : filtros.partido = e.target.value
        mostrarDeputados(escolhaUsuario)
      })
  })
}
