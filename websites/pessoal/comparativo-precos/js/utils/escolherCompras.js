import { criarBotao } from "../telas/criarBotao.js"
import { criarInputTexto } from "../telas/criarInputTexto.js"
import { criarInputNumber } from "../telas/criarInputNumber.js"
import { criarRadioMais } from "../telas/criarRadioMais.js"
import { criarLegend } from "../telas/criarLegend.js"
import { mostrarErro } from "../telas/mostrarErro.js"
import { ordenarProdutos } from "./ordenarProdutos.js"

export function escolherCompras(lojas, compras, compra, variavelBotoes, sujestaoCompras){
    let fieldset = document.getElementById('fieldset-compras')
    fieldset.innerHTML = ''
    fieldset.appendChild(comprasSujestao(compras, sujestaoCompras))
    fieldset.appendChild(criarLegend('Compra'))
    fieldset.appendChild(divPrincipal(compra))
    fieldset.appendChild(divsegundario(lojas, compra))
    fieldset.appendChild(botoes(variavelBotoes))
    fieldset.appendChild(mostrarErro('erro-compra'))
    acaoProdutoSujestao(sujestaoCompras)
}

function acaoProdutoSujestao(sujestaoCompras){
    let ps = document.querySelectorAll('.produto-essecial')
    ps.forEach( p => {
        p.addEventListener( 'click', () => {
            let compraProcurada = sujestaoCompras.find( essencial => essencial.produto == p.textContent)
            let produto = document.getElementById('nome-produto')
            let quantidade = document.getElementById('quantidade-produto')
            produto.value = compraProcurada.produto
            quantidade.value = parseFloat(compraProcurada.quantidade)
        })
    })
}

function comprasSujestao(compras, sujestaoCompras){
    let div = document.createElement('div')
    div.id = 'sujestao'
    ordenarProdutos(sujestaoCompras).forEach( sujestao => {
        let produtoProcurado = compras.some( compra => compra.produto == sujestao.produto)
        if(!produtoProcurado){
            let p = document.createElement('p')
            p.textContent = sujestao.produto
            p.classList.add('produto-essecial')
            div.appendChild(p)
        }
    })
    return div
}

function divPrincipal(compra){
    let div = document.createElement('div')
    div.id = 'div-descricao-principal'
    div.appendChild(criarInputTexto(compra == '' ? '' : compra.produto, 'Produto', 'nome-produto'))
    div.appendChild(criarInputNumber(compra == '' ? 0 : compra.quantidade, 'Quantidade Produto', 'quantidade-produto'))
    div.appendChild(criarRadioMais(compra == '' ? false : compra.escolher, 'Pode ser quantidade maior', 'resposta-mais'))
    return div
}

function divsegundario(lojas, compra){
    let div = document.createElement('div')
    div.id = 'div-descricao-segundario'
    if(compra == ''){
        lojas.forEach( loja => { 
            div.appendChild(inputsVazios(loja))
        })
    }else{
        lojas.forEach( loja => {
            let existe = compra.produtoDescricao.find( descricaoProduto => loja.nome == descricaoProduto.loja.nome)
            existe != undefined ? div.appendChild(inputsCheio(existe)) : div.appendChild(inputsVazios(loja))
        })
    }
    return div
}

function criarH3(produto, id){
    let h3 = document.createElement('h3')
    h3.id = id
    h3.classList.add(id)
    h3.textContent = produto
    return h3
}

function botoes(variavelBotoes){
    let div = document.createElement('div')
    div.id = 'btns'
    variavelBotoes.forEach( botao => {
        div.appendChild(criarBotao(botao.id, botao.texto, botao.visivel))
    })
    return div
}

function inputsVazios(loja){
    let article = document.createElement('article')
    article.appendChild(criarH3(loja.nome, 'loja-produto'))
    article.appendChild(criarInputTexto('', 'Descrição', 'descricao-produto'))
    article.appendChild(criarInputNumber('', 'Tamanho Produto', 'tamanho-produto'))
    article.appendChild(criarInputNumber('', 'Valor Produto', 'valor-produto'))
    return article
}

function inputsCheio(descricaoProduto){
    let article = document.createElement('article')
    article.appendChild(criarH3(descricaoProduto.loja.nome, 'loja-produto'))
    article.appendChild(criarInputTexto(descricaoProduto.descricao, 'Descrição', 'descricao-produto'))
    article.appendChild(criarInputNumber(descricaoProduto.tamanho, 'Tamanho Produto', 'tamanho-produto'))
    article.appendChild(criarInputNumber(descricaoProduto.valor, 'Valor Produto', 'valor-produto'))
    return article
}