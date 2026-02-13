import { mostrarCompras } from "../mvc/view/mostrarCompras.js"
import { esconderAparecer } from "../utils/esconderAparecer.js"
import { incluirLojas } from "../utils/incluirLojas.js"
import { salvarDadosNavegador } from "../navegador/salvarDadosNavegador.js"

export function acoesTabelasBotoes(lojas, compras, variavelBotoes, sujestaoCompras){
    botaoAnalizar(lojas, compras, variavelBotoes, sujestaoCompras)
    botaoVoltarCompra(lojas, compras, variavelBotoes, sujestaoCompras)
    botaoFinalizar(lojas, compras, variavelBotoes, sujestaoCompras)
    botaoVoltarFinalizar(lojas, compras, variavelBotoes, sujestaoCompras)
    reset(lojas, compras, variavelBotoes, sujestaoCompras)
}

function botaoAnalizar(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('analizar-compra')
    if(botao == null) return
    botao.addEventListener('click', () => {
        mostrarCompras(lojas, compras, variavelBotoes, 'section-pesquisados', sujestaoCompras)
        esconderAparecer('fieldset-compras', 'none')
        esconderAparecer('section-total', 'none')
        esconderAparecer('section-pesquisados', 'grid')
    })
}

function botaoVoltarCompra(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('voltar-compra')
    if(botao == null) return
    botao.addEventListener('click', () => {
        mostrarCompras(lojas, compras, variavelBotoes, 'section-total', sujestaoCompras)
        esconderAparecer('fieldset-compras', 'flex')
        esconderAparecer('section-total', 'grid')
        esconderAparecer('section-pesquisados', 'none')
    })
}

function botaoFinalizar(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('finalizar-compra')
    if(botao == null) return
    botao.addEventListener('click', () => {
        mostrarCompras(lojas, compras, variavelBotoes, 'section-lista-compras', sujestaoCompras)
        esconderAparecer('section-lista-compras', 'grid')
        esconderAparecer('section-pesquisados', 'none')
    })
}

function botaoVoltarFinalizar(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('voltar-finalizar')
    if(botao == null) return
    botao.addEventListener('click', () => {
        mostrarCompras(lojas, compras, variavelBotoes, 'section-pesquisados', sujestaoCompras)
        esconderAparecer('section-pesquisados', 'grid')
        esconderAparecer('section-lista-compras', 'none')
    })
}

function reset(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('reset')
    if(botao == null) return
    botao.addEventListener('click', () => {
        lojas = []
        compras = []
        salvarDadosNavegador('Lojas', lojas)
        salvarDadosNavegador('Compras', compras)
        esconderAparecer('section-lista-compras', 'none')
        incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras)
        esconderAparecer('fieldset-lojas', 'flex')
    })
}