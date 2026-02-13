import { incluirCompra } from "../utils/incluirCompra.js"
import { incluirLojas } from "../utils/incluirLojas.js"
import { mostrarCompras } from "../mvc/view/mostrarCompras.js"
import { acaoErro } from "../telas/acaoErro.js"
import { esconderAparecer } from "../utils/esconderAparecer.js"

export function acoesBotoes(lojas, compras, compra, variavelBotoes, sujestaoCompras){
    botaoSalvar(lojas, compras, variavelBotoes, sujestaoCompras)
    botaoEditar(lojas, compras, compra, variavelBotoes, sujestaoCompras)
    botaoDeletar(lojas, compras, compra, variavelBotoes, sujestaoCompras)
    adicionarLoja(lojas, compras, variavelBotoes, sujestaoCompras)
}

function botaoSalvar(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-salvar')
    botao.addEventListener( 'click', () => {
        let erro = incluirInputs(compras, lojas)
        if(erro){
            acaoErro('Preencha todos os dados', 'erro-compra') 
        }else{
            mostrarCompras(lojas, compras, variavelBotoes, 'section-total', sujestaoCompras)
        }
    })
}

function botaoEditar(lojas, compras, compra, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-editar')
    botao.addEventListener( 'click', () => {
        let erro = incluirInputs(compras, lojas)
        if(erro){
            acaoErro('Preencha todos os dados', 'erro-compra') 
        }else{
            compras.splice(procurarIndice(compras, compra), 1)
            mostrarCompras(lojas, compras, variavelBotoes, 'section-total', sujestaoCompras)
        }
    })
}

function botaoDeletar(lojas, compras, compra, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-deletar')
    botao.addEventListener( 'click', () => {
        compras.splice(procurarIndice(compras, compra), 1)
        mostrarCompras(lojas, compras, variavelBotoes, 'section-total', sujestaoCompras)
    })
}

function adicionarLoja(lojas, compras, variavelBotoes, sujestaoCompras){
    let botao = document.getElementById('btn-adicionar-loja')
    botao.addEventListener( 'click', () => {
        incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras)
        esconderAparecer('fieldset-lojas','flex')
        esconderAparecer('fieldset-compras','none')
        esconderAparecer('section-total','none')
    })
}

function pegarValorRadio() {
    let r = document.querySelector('input[name="resposta-mais"]:checked');
    return r.value == 'Sim' ? true : false
}

function pegarLoja(lojas, nome){
    return lojas.find( loja => loja.nome == nome)
}

function incluirInputs(compras, lojas){
    let nome = document.getElementById('nome-produto').value
    let quantidade = parseFloat(document.getElementById('quantidade-produto').value)
    let escolha = pegarValorRadio()
    let loja = document.querySelectorAll('.loja-produto')
    let descricao = document.querySelectorAll('.descricao-produto')
    let tamanho = document.querySelectorAll('.tamanho-produto')
    let valor = document.querySelectorAll('.valor-produto')
    let totallojas = loja.length
    let lista = []
    let erroAcao = false
    for(let i = 0; i < totallojas; i++){
        if(quantidade < tamanho[i].value && !escolha) {
            erroAcao = true 
        }else if(tamanho[i].value != '' && valor[i].value != '' && loja[i].textContent != ''){
            lista.push({ descricao: descricao[i].value, tamanho: parseFloat(tamanho[i].value), valor: parseFloat(valor[i].value), loja : pegarLoja(lojas, loja[i].textContent)})
        } 
    }
    if(!(nome != '' && quantidade > 0 && lista.length > 0)){
        erroAcao = true
    }else{
        incluirCompra(compras, nome, quantidade, escolha, lista)
    }
    return erroAcao
}

function procurarIndice(compras, compra){
    const indice = compras.findIndex(item =>
        item.produto === compra.produto &&
        item.quantidade === parseFloat(compra.quantidade) &&
        item.produtoDescricao.some(desc =>
            desc.descricao === compra.produtoDescricao[0].descricao
        ))
    return indice
}