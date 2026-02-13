import { acoesBotoes } from "../../acao/acoesBotoes.js"
import { acoesTabelas } from "../../acao/acoesTabelas.js"
import { criarTabela } from "../../telas/criarTabela.js"
import { mudarVariavelBotao } from "../../utils/mudarVariaveisBotao.js"
import { incluirLojas } from "../../utils/incluirLojas.js"
import { escolherCompras } from "../../utils/escolherCompras.js"
import { criarBotao } from "../../telas/criarBotao.js"
import { acoesTabelasBotoes } from "../../acao/acoesTabelasBotoes.js"
import { esconderAparecer } from "../../utils/esconderAparecer.js"
import { ordenarProdutos } from "../../utils/ordenarProdutos.js"
import { salvarDadosNavegador } from "../../navegador/salvarDadosNavegador.js";

export function mostrarCompras(lojas, compras, variavelBotoes, id, sujestaoCompras){
    salvarDadosNavegador('Lojas', lojas)
    salvarDadosNavegador('Compras', compras)
    let section = document.getElementById(id)
    section.innerHTML = ''
    if(lojas.length <= 1) {
        incluirLojas(lojas, compras, variavelBotoes, sujestaoCompras)
        esconderAparecer('fieldset-compras', 'none')
    } else if(lojas.length > 1 && compras.length == 0){
        escolherCompras(lojas, compras, '', variavelBotoes, sujestaoCompras)
        acoesBotoes(lojas, compras, '', variavelBotoes, sujestaoCompras)
        esconderAparecer('fieldset-compras', 'flex')
        esconderAparecer('fieldset-lojas', 'none')
    } else if(lojas.length > 0 && compras.length > 0){
        esconderAparecer('fieldset-lojas', 'none')
        let total = 0
        lojas.forEach( loja => {
            let listaCompras = listaDeCompras(id, compras, loja)
            if(listaCompras.length > 0){
                let valorTotal = valoresTotais(id, listaCompras)
                total += valorTotal
                section.appendChild(criarTabela(loja, valorTotal, ordenarProdutos(listaCompras, id), id))
            }
        })
        section.appendChild(criarDiv(id, total))
        atualizar(lojas, compras, variavelBotoes, sujestaoCompras)
        if(id == 'section-total') {
            mudarVariavelBotao(variavelBotoes, 'salvar')
            escolherCompras(lojas, compras, '', variavelBotoes, sujestaoCompras)
            acoesBotoes(lojas, compras, '', variavelBotoes, sujestaoCompras)
            acoesTabelas(lojas, compras, variavelBotoes, sujestaoCompras)
        }
        acoesTabelasBotoes(lojas, compras, variavelBotoes, sujestaoCompras)
    }
}

function criarDiv(id, total){
    let div = document.createElement('div')
    div.id = 'div-titulo'
    let h2 = document.createElement('h2')
    h2.innerHTML = titulo(id)
    if(id == 'section-pesquisados') div.appendChild(criarBotao('voltar-compra', 'voltar compra', 'block'))
    if(id == 'section-lista-compras') div.appendChild(criarBotao('voltar-finalizar', 'voltar finalizar', 'block'))
    if(id != 'section-total') h2.textContent += ` R$ ${total.toFixed(2)}`
    div.appendChild(h2)
    if(id == 'section-total') div.appendChild(criarBotao('analizar-compra', 'analizar compra', 'block'))
    if(id == 'section-pesquisados') div.appendChild(criarBotao('finalizar-compra', 'finalizar compra', 'block'))
    if(id == 'section-lista-compras') div.appendChild(criarBotao('reset', 'fazer nova pesquisa', 'block'))
    return div
}

function titulo(id){
    let texto
    if(id == 'section-total') texto = 'Compras'
    else if(id == 'section-pesquisados') texto = 'Lista'
    else texto = 'Lista Final'
    return texto
}

function listaDeCompras(id, compras, loja){
    if(id == 'section-total'){
        return compras.flatMap(compra => compra.produtoDescricao.filter(descricao => descricao.loja.nome === loja.nome).map(descricao => ({
                produto: compra.produto,
                quantidadeProduto: compra.quantidade,
                descricao: descricao.descricao,
                tamanho: descricao.tamanho,
                quantidade: descricao.quantidade,
                valor: descricao.valor,
                valorTotal: descricao.valorTotal,
                loja: descricao.loja.nome,
                maior: descricao.maior,
                menor: descricao.menor,
                igual: descricao.igual
            }))
        )
    }else if(id == 'section-pesquisados'){
        return compras.flatMap(compra => compra.produtoDescricao.filter(descricao => descricao.loja.nome === loja.nome).map(descricao => ({
            produto: compra.produto,
            quantidadeProduto: compra.quantidade,
            descricao: descricao.descricao,
            tamanho: descricao.tamanho,
            quantidade: descricao.quantidade,
            valor: descricao.valor,
            valorTotal: descricao.valorTotal,
            loja: descricao.loja.nome,
            maior: descricao.maior,
            menor: descricao.menor,
            igual: descricao.igual
        }))).sort((a, b) => {
            if (a.menor !== b.menor) return b.menor - a.menor;
            if (a.igual !== b.igual) return b.igual - a.igual;
            if (a.maior !== b.maior) return a.maior - b.maior;
            return 0;
        })   
    }else{
        return compras.flatMap(compra => compra.produtoDescricao.filter(descricao => descricao.loja.nome === loja.nome && descricao.menor).map(descricao => ({
                produto: compra.produto,
                quantidadeProduto: compra.quantidade,
                descricao: descricao.descricao,
                tamanho: descricao.tamanho,
                quantidade: descricao.quantidade,
                valor: descricao.valor,
                valorTotal: descricao.valorTotal,
                loja: descricao.loja.nome,
                maior: descricao.maior,
                menor: descricao.menor,
                igual: descricao.igual
            }))
        ).sort((a, b) => {
            if (a.menor !== b.menor) return b.menor - a.menor;
            if (a.igual !== b.igual) return b.igual - a.igual;
            if (a.maior !== b.maior) return a.maior - b.maior;
            return 0;
        })  
    }
}

function valoresTotais(id, listaCompras){
    if(id == 'section-total'){
        return listaCompras.reduce((total, compra) => total += parseFloat(compra.valorTotal), 0)
    }else{
        return listaCompras.reduce((total, compra) => total += compra.menor ? parseFloat(compra.valorTotal) : 0, 0)
    }
}

function atualizar(lojas, compras, variavelBotoes, sujestaoCompras){
    let inputs = document.querySelectorAll('.input')
    inputs.forEach( input => {
        input.addEventListener( 'change', () => {
            let loja = input.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('caption').textContent.split(' - ')[0]
            let produtoEncontrado = input.parentElement.parentElement.textContent
            compras.forEach( compra => {
                compra.produtoDescricao.forEach( produto => {
                    if(produto.loja.nome == loja && produtoEncontrado.includes(produto.descricao)){
                        produto.menor = input.checked
                    }
                })
            })   
            mostrarCompras(lojas, compras, variavelBotoes, 'section-pesquisados', sujestaoCompras)
        })
    })
}