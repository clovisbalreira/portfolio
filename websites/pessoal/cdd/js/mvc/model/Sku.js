import { Marca } from "./Marca.js";
import { Produto } from "./Produto.js";
import { TipoProduto } from "./TipoProduto.js";
import { SaborAromaPeca } from "./SaborAromaPeca.js";
import { Metragem } from "./Metragem.js"

export class Sku{
    constructor(tamanho){
        this.tamanho = tamanho
        this.produto = null,
        this.metragem = null,
        this.marca = null,
        this.tipoProduto = []
        this.saborAromaPeca = []
    }

    adicionarMetragem(nome){
        if(nome instanceof Metragem){
            this.metragem = nome
        }
    }

    adicionarMarca(nome){
        if(nome instanceof Marca){
            this.marca = nome
        }
    }

    adicionarTipoProdutos(tipoProdutos){
        tipoProdutos.forEach(nome => {
            if(nome instanceof TipoProduto){
                this.tipoProduto.push(nome)
            }
        });
    }

    adicionarSaborAromaPecas(saborAromaPecas){
        saborAromaPecas.forEach(nome => {
            if(nome instanceof SaborAromaPeca){
                this.saborAromaPeca.push(nome)
            }
        });
    }

    adicionarProdutos(nome){
        if(nome instanceof Produto){
            this.produto = nome
        }
    }
}