import { escolherCompras } from "../utils/escolherCompras.js"
import { acoesBotoes } from "./acoesBotoes.js"
import { mudarVariavelBotao } from "../utils/mudarVariaveisBotao.js"

export function acoesTabelas(mercados, compras, variavelBotoes, sujestaoCompras){
    let trs = document.querySelectorAll('table tbody tr')
    trs.forEach( tr => {
        tr.addEventListener('click', () => {
            let tds = tr.querySelectorAll('td')
            let nome = tds[0].textContent.split(' - ')[0]
            let descricao = tds[0].textContent.split(' - ')[1]
            let valor = parseFloat(tds[3].textContent.replace('R$', '').trim())
            let valorTotal = parseFloat(tds[4].textContent.replace('R$', '').trim())
            let filtroCompra = ''
            compras.forEach( compra => {
                if(compra.produto == nome){
                    compra.produtoDescricao.forEach( descricoes => {
                        if(descricoes.descricao == descricao && descricoes.valor == valor && descricoes.valorTotal == valorTotal){
                            filtroCompra = compra
                        }
                    })
                }
            })
            mudarVariavelBotao(variavelBotoes, 'editar-deletar')
            escolherCompras(mercados, compras, filtroCompra, variavelBotoes, sujestaoCompras)
            acoesBotoes(mercados, compras, filtroCompra, variavelBotoes, sujestaoCompras)
        })
    })
}