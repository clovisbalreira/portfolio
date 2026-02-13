import { criarInputTexto } from "../telas/criarInputTexto.js"
import { criarInputNumber } from "../telas/criarInputNumber.js"
import { criarRadioMais } from "../telas/criarRadioMais.js"
import { criarBotao } from "../telas/criarBotao.js"
import { criarLegend } from "../telas/criarLegend.js"
import { mostrarCompras } from "../mvc/view/mostrarCompras.js"
import { mostrarErro } from "../telas/mostrarErro.js"
import { acaoErro } from "../telas/acaoErro.js"
import { esconderAparecer } from "./esconderAparecer.js"
import { Loja } from "../mvc/model/Loja.js"

export function incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras){
    let fieldset = document.getElementById('fieldset-lojas')
    fieldset.innerHTML = ''
    fieldset.appendChild(criarLegend('Loja'))
    fieldset.appendChild(adicionarPrincipal())
    fieldset.appendChild(adicionarTeleEntrega())
    if(lojas.length > 0) fieldset.appendChild(mostrarlojas(lojas))
    fieldset.appendChild(adicionarBotoes(lojas))
    fieldset.appendChild(mostrarErro('erro-loja'))
    salvarLoja(lojas, compras, variavelBotoes, sujestaoCompras)
    irCompras(lojas, compras, variavelBotoes, sujestaoCompras)
    escolherLoja(lojas, compras, variavelBotoes, sujestaoCompras)
}

function adicionarPrincipal(){
    let div = document.createElement('div')
    div.appendChild(criarInputTexto('', 'Loja', 'nome-loja'))
    div.appendChild(criarRadioMais('', 'Tela Entrega', 'tele-entrega')) 
    return div
}

function adicionarTeleEntrega() {
    const radios = document.querySelectorAll('input[name="tele-entrega"]');
    let div = document.createElement('div')
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            div.innerHTML = '';
            const valor = document.querySelector('input[name="tele-entrega"]:checked').value;
            if (valor === 'Sim') {
                div.appendChild(criarInputNumber(0, 'Valor minímo tele entrega', 'valor-minimo-tele-entrega'))
                div.appendChild(criarInputNumber(0, 'Valor tele entrega', 'valor-tele-entrega'))
            }
        })
    })
    return div
}

function adicionarBotoes(lojas){
    let div = document.createElement('div')
    div.id = 'botoes-mercados'
    div.appendChild(criarBotao('btn-loja', 'salvar', 'block'))
    div.appendChild(criarBotao('btn-ir-compras', 'ir as compras', lojas.length > 1 ? 'block' : 'none')) 
    return div
}

function salvarLoja(lojas, compras,  variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-loja')
    botao.addEventListener('click', () => {
        let loja = document.getElementById('nome-loja').value
        let teleEntrega = teleEntregaValor()
        if(loja == ''){
            acaoErro('Preencha todos os dados', 'erro-loja')
            return
        }else{
            if(teleEntrega){
                let valorMinimoTeleEntrega = document.getElementById('valor-minimo-tele-entrega').value
                let valorTeleEntrega = document.getElementById('valor-tele-entrega').value
                lojas.push(new Loja(loja, teleEntrega, parseFloat(valorMinimoTeleEntrega), parseFloat(valorTeleEntrega)))
            }else{
                lojas.push(new Loja(loja, teleEntrega, 0, 0))
            }
        }
        incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras)
    })
}

function irCompras(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-ir-compras')
    botao.addEventListener('click', () => {
        mostrarCompras(lojas, compras, variavelBotoes, 'section-total', sujestaoCompras)
        esconderAparecer('section-total', 'grid')
        esconderAparecer('fieldset-compras', 'flex')
    })
}

function teleEntregaValor(){
    let radio = document.querySelector('input[name="tele-entrega"]:checked').value
    return radio == 'Sim' ? true : false
}

function mostrarlojas(lojas){
    let div = document.createElement('div')
    div.id = 'lojas-incluidos'
    let h2 = document.createElement('h2')
    h2.textContent = 'Lojas'
    div.appendChild(h2)
    let divUl = document.createElement('div')
    lojas.forEach( loja => {
        let ul = document.createElement('ul')
        ul.appendChild(criarLi(`Loja: ${loja.nome}`))
        ul.appendChild(criarLi(`Tele entrega: ${loja.teleEntrega == true ? 'Sim' : 'Não'}`))
        if(loja.teleEntrega == true){
            ul.appendChild(criarLi(`Valor tele entrega: R$ ${loja.valor}`))
            ul.appendChild(criarLi(`Valor minímo tele entrega: R$ ${loja.valorMinimo}`))
        }
        divUl.appendChild(ul)
    })
    div.appendChild(divUl)
    return div
}

function criarLi(texto){
    let li = document.createElement('li')
    li.textContent = texto
    return li
}

function escolherLoja(lojas, compras, variavelBotoes, sujestaoCompras){
    let lojasSelecionada = document.querySelectorAll('#lojas-incluidos div ul')
    lojasSelecionada.forEach( selecionada => {
        selecionada.addEventListener( 'click', () => {
            let nomeLoja = lojas.find( loja => selecionada.querySelector('li').textContent.includes(loja.nome))
            let botoes = document.getElementById('botoes-mercados')
            botoes.innerHTML =''
            botoes.appendChild(criarBotao('btn-loja-editar', 'editar', 'block'))
            botoes.appendChild(criarBotao('btn-loja-deletar', 'deletar', 'block'))
            editar(nomeLoja, lojas, compras, variavelBotoes, sujestaoCompras)
            deletar(nomeLoja, lojas, compras, variavelBotoes, sujestaoCompras)
            let nome = document.getElementById('nome-loja')
            nome.value = nomeLoja.nome
            nome.disabled = true
            let teleEntrega = document.querySelectorAll('input[name="tele-entrega"]')
            teleEntrega.forEach(entrega => {
                if (nomeLoja.teleEntrega === true && entrega.value === 'Sim') { 
                    entrega.checked = true 
                    entrega.dispatchEvent(new Event('change'))
                    setTimeout(() => {
                        document.getElementById('valor-minimo-tele-entrega').value = nomeLoja.valorMinimo;
                        document.getElementById('valor-tele-entrega').value = nomeLoja.valor;
                    }, 0)
                    let valorMinimo = document.getElementById('valor-minimo-tele-entrega')
                    valorMinimo.value = nomeLoja.valorMinimo
                    let valor = document.getElementById('valor-tele-entrega')
                    valor.value = nomeLoja.valor
                    apagarDivValores()
                } 
                if (nomeLoja.teleEntrega === false && entrega.value === 'Não') { entrega.checked = true }
            })
        })
    })
}

function apagarDivValores(){
    let valoresDiv = document.querySelectorAll('.valores-televendas')
    if(valoresDiv.length > 1) valoresDiv[1].remove()
}

function editar(nomeLoja, lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-loja-editar')
    botao.addEventListener( 'click', () => { 
        let teleEntrega = teleEntregaValor()
        nomeLoja.teleEntrega = teleEntrega
        if(teleEntrega){
            let valorMinimoTeleEntrega = document.getElementById('valor-minimo-tele-entrega').value
            let valorTeleEntrega = document.getElementById('valor-tele-entrega').value
            nomeLoja.valorMinimo = parseFloat(valorMinimoTeleEntrega)
            nomeLoja.valor = parseFloat(valorTeleEntrega)
        }else{
            nomeLoja.valorMinimo = 0
            nomeLoja.valor = 0
        }
        incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras)
    })
}

function deletar(nomeLoja, lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-loja-deletar')
    botao.addEventListener( 'click', () => {
        lojas.splice(procurarIndice(lojas, nomeLoja), 1)
        compras = deletarCompras(compras, nomeLoja)
        incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras)
    })
}

function procurarIndice(lojas, loja){
    const indice = lojas.findIndex(item => item.nome == loja.nome)
    return indice
}

function deletarCompras(compras, loja) {
    compras.forEach(compra => {
        compra.produtoDescricao = compra.produtoDescricao.filter(descricao => 
            descricao.loja.nome !== loja.nome
        );
    });
    return compras;
}