import { esconderAparecer } from "./esconderAparecer.js"
import { criarBotao } from "../telas/criarBotao.js"
import { mostrarCompras } from "../mvc/view/mostrarCompras.js"

export function criarModal(lojas, compras, variavelBotoes, idSection, sujestaoCompras){
    esconderFieldset('block', 'none', 'none')
    let modal = document.getElementById('meuModal')
    modal.style.display = 'flex'
    let modalConteudo = document.querySelector('.modal-conteudo')
    modalConteudo.appendChild(criarBotoes('Deseja apagar as lojas e ficar com sujestão de compras.', 'modal-apagar-loja', 'apagar loja'))
    modalConteudo.appendChild(criarBotoes('Deseja apagar as compras e ficar com as lojas para analisar novas compras nas lojas.', 'modal-apagar-compra', 'apagar compra'))
    modalConteudo.appendChild(criarBotoes('Deseja apagar nada.', 'modal-apagar-nada', 'apagar nada'))
    modalConteudo.appendChild(criarBotoes('Deseja apagar as lojas e as compras.', 'modal-apagar-tudo', 'apagar tudo'))
    acaoApagarLoja(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    acaoApagarCompra(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    acaoApagarNada(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    acaoApagarTudo(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
}

function esconderFieldset(modal, loja, compra){
    esconderAparecer('meuModal', modal)
    esconderAparecer('fieldset-lojas', loja)
    esconderAparecer('fieldset-compras', compra)
}

function criarBotoes(textoP, idButton, textoButton){
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = textoP
    div.appendChild(p)
    div.appendChild(criarBotao(idButton, textoButton, 'block'))
    return div
}

function acaoApagarLoja(lojas, compras, variavelBotoes, idSection, sujestaoCompras){
    let button = document.getElementById('modal-apagar-loja')
    button.addEventListener( 'click', () => {        
        sujestaoCompras = []
        compras.forEach( compra => {
            sujestaoCompras.push({ produto: compra.produto, quantidade: compra.quantidade})
        })
        lojas = []
        compras = []
        esconderFieldset('none', 'flex', 'none')
        mostrarCompras(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    })
}

function acaoApagarCompra(lojas, compras, variavelBotoes, idSection, sujestaoCompras){
    let button = document.getElementById('modal-apagar-compra')
    button.addEventListener( 'click', () => {    
        compras = []    
        esconderFieldset('none', 'none', 'flex')
        mostrarCompras(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    })
}

function acaoApagarNada(lojas, compras, variavelBotoes, idSection, sujestaoCompras){
    let button = document.getElementById('modal-apagar-nada')
    button.addEventListener( 'click', () => {  
        esconderFieldset('none', 'none', 'flex')
        mostrarCompras(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    })
}

function acaoApagarTudo(lojas, compras, variavelBotoes, idSection, sujestaoCompras){
    let button = document.getElementById('modal-apagar-tudo')
    button.addEventListener( 'click', () => {    
        compras = []
        lojas = []    
        esconderFieldset('none', 'flex', 'flex')
        mostrarCompras(lojas, compras, variavelBotoes, idSection, sujestaoCompras)
    })
}