import { Compra } from "../mvc/model/Compra.js"

export function incluirCompra(compras, nomeProduto, quantidade, escolher, produtos){
    let compra = new Compra(nomeProduto, quantidade, escolher)
    compra.adicionarProdutos(produtos)
    compra.adicionarMaioresMenoresIguais(compra)
    compras.push(compra)
}