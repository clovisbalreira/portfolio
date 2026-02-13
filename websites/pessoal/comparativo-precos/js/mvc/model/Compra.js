export class Compra{
    constructor(produto, quantidade, escolher){
        this.produto = produto
        this.quantidade = quantidade
        this.escolher = escolher
        this.produtoDescricao = []
    }

    adicionarDescricao(descricao){
        this.produtoDescricao.push(descricao)
    }

    adicionarProdutos(produtos){
        produtos.forEach( produto => {
            let quantidadeComprar = this.quantidadeCompra(this.quantidade, produto.tamanho)
            this.adicionarDescricao({descricao: produto.descricao , tamanho: produto.tamanho, quantidade: quantidadeComprar, valor: produto.valor, valorTotal: produto.valor * quantidadeComprar, loja: produto.loja, maior: false, menor: false, igual: false})
        })
    }

    quantidadeCompra(quantidade, tamanho){
        let qtd = 0
        if(quantidade == tamanho){
            qtd = 1
        }else{
            let quantidadeProdutos = []
            let quantidadeAlterado = !this.escolher ? quantidade : quantidade * 2
            for(let i = tamanho; i <= quantidadeAlterado; i+= tamanho){
                quantidadeProdutos.push(i)
            }
            qtd = quantidadeProdutos.length
        }
        return qtd
    }

    adicionarMaioresMenoresIguais(compra){
        const maior = compra.produtoDescricao.reduce( (maior, item) => item.valorTotal > maior ? item.valorTotal : maior, 0);
        const repeticoesMaior = compra.produtoDescricao.filter(
        item => item.valorTotal === maior
        ).length;
        const menor = compra.produtoDescricao.reduce((menor, item) => item.valorTotal < menor ? item.valorTotal : menor, Infinity);
        const repeticoesMenor = compra.produtoDescricao.filter(
        item => item.valorTotal === menor
        ).length;
        compra.produtoDescricao.forEach( produto => {
            if(repeticoesMaior > 1 && produto.valorTotal == maior || repeticoesMenor > 1 && produto.valorTotal == menor){
                produto.igual = true
            }else if(produto.valorTotal == maior){
                produto.maior = true
            }else if(produto.valorTotal == menor){
                produto.menor = true
            }
        })
    }
}