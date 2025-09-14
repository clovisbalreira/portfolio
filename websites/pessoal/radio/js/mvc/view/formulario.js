import { publicidade } from "../../utils/publicidade.js";
import { pegarPaises, pegarEstados, pegarCidades } from "../../api/apis.js";
import { fazerPedido } from "../../utils/fazerPedido.js";
import { links } from "../control/links.js";
import { Links } from "../model/Links.js";

export function mostrarFormulario(){
    links.push(new Links('Peça seu Som', 'form'))
    let section = document.getElementById('formulario')
    section.style.display = 'flex'
    let form = document.createElement('form')
    form.id = 'form'
    let fieldset = document.createElement('fieldset')
    let legend = document.createElement('legend')
    legend.textContent = 'Peça o seu som'
    fieldset.appendChild(legend)
    let divFormularioDados = document.createElement('div')
    divFormularioDados.id = 'formulario-dados'
    divFormularioDados.appendChild(input('nome', 'text', 'Qual o seu nome?', 'Digite seu nome completo', ''))
    divFormularioDados.appendChild(input('idade', 'number', 'Qual sua idade?', 'Digite sua idade', '0'))
    divFormularioDados.appendChild(input('email', 'email', 'Qual o seu email?', 'Digite seu email', ''))
    fieldset.appendChild(divFormularioDados)
    let divFormularioLocalizacao = document.createElement('div')
    divFormularioLocalizacao.id = 'formulario-localizacao'
    divFormularioLocalizacao.appendChild(select('paises', 'Qual seu Pais?'))
    divFormularioLocalizacao.appendChild(span('estados', 'Qual seu estado?', 'divEstados'))
    divFormularioLocalizacao.appendChild(span('divCidades', 'Qual seu cidade?', 'divCidades'))
    fieldset.appendChild(divFormularioLocalizacao)
    let divPedidos = document.createElement('div')
    divPedidos.id = 'pedidos'
    divPedidos.appendChild(label('playlist', 'Você que montar sua playlist? Deixe nome das musicas e artistas ( Máximo de 5 musicas )'))
    let divFormularioPedido = document.createElement('div')
    divFormularioPedido.id = 'formulario-pedido'
    let divInputPedido = document.createElement('div')
    divInputPedido.id = 'input-pedido'
    let div = document.createElement('div')
    div.appendChild(inputPedido('Música', 'input-musica', 'text', 'Digite a música'))
    div.appendChild(inputPedido('Interprete', 'input-interprete', 'text', 'Digite o interprete'))
    divInputPedido.appendChild(div)
    let divFormularioBotoes = document.createElement('div')
    divFormularioBotoes.id = 'formulario-botoes'
    divFormularioBotoes.appendChild(botao('btn-adicionar', 'Adicionar', ''))
    divFormularioBotoes.appendChild(botao('btn-excluir', 'Excluir', 'excluir'))
    divInputPedido.appendChild(divFormularioBotoes)
    divFormularioPedido.appendChild(divInputPedido)
    divPedidos.appendChild(divFormularioPedido)
    fieldset.appendChild(divPedidos)
    fieldset.appendChild(botao('enviar', 'Enviar', ''))
    form.appendChild(fieldset)
    section.appendChild(form)
    section.appendChild(publicidade())
    pegarPaises()
    pegarEstados()
    pegarCidades()
    fazerPedido(new Date())
}

function label(id, texto){
    let label = document.createElement('label')
    label.setAttribute('for', id)
    label.textContent = texto
    return label
}

function input(id, type, texto, place, min){
    let div = document.createElement('div')
    div.appendChild(label(id, texto))
    let input = document.createElement('input')
    input.id = id
    input.type = type
    input.placeholder = place
    input.required = true;
    if(min != '') input.setAttribute('min', min)
    div.appendChild(input)
    return div
}

function select(id, texto){
    let div = document.createElement('div')
    div.appendChild(label(id, texto))
    let select = document.createElement('select')
    select.id = id
    select.name = id
    select.required = true;
    div.appendChild(select)
    return div
}

function span(f, texto, id){
    let div = document.createElement('div')
    div.appendChild(label(f, texto))
    let span = document.createElement('span')
    span.id = id
    span.required = true;
    div.appendChild(span)
    return div
}

function inputPedido(texto, classe, type, place){
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = texto
    div.appendChild(p)
    let input = document.createElement('input')
    input.classList.add(classe)
    input.type = type
    input.placeholder = place
    input.required = true;
    div.appendChild(input)
    return div
}

function botao(id, texto, classe){
    let button = document.createElement('button')
    button.id = id 
    if(classe != '') button.classList.add(classe)
    button.textContent = texto
    return button
}