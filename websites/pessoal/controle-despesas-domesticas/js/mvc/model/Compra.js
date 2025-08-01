import { Loja } from "./Loja.js"
import { Produto } from "./Produto.js"

export class Compra{
    constructor(data, valor, quantidade){
        this.data = data,
        this.valor = valor,
        this.quantidade = quantidade,
        this.valorTotal = valor * quantidade,
        this.loja = null,
        this.produto = null
    }

    adicionarLoja(nome){
        if(nome instanceof Loja){
            this.loja = nome
        }
    }

    adicionarProduto(nome){
        if(nome instanceof Produto){
            this.produto = nome
        }
    }
}