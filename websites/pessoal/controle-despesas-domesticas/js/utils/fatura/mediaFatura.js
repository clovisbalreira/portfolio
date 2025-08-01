export function mediaFatura(contasAtualizadas){
    let consumos = contasAtualizadas.map((conta) => {
        return conta.valorTotal.map( consumo => consumo.consumo  
        )
    })
    let maiorConsumo = Math.max(...consumos[0])
    let menorConsumo = Math.min(...consumos[0])
    let mediaConsumo = contasAtualizadas.map( conta => { return conta.valorTotal.reduce( ( total, consumo ) => total += consumo.consumo, 0) / conta.valorTotal.length })
    
    let valores = contasAtualizadas.map((conta) => {
        return conta.valorTotal.map( valor => valor.valor  
        )
    })
    let maiorValor = Math.max(...valores[0])
    let menorValor = Math.min(...valores[0])
    let mediaValor = contasAtualizadas.map( conta => { return conta.valorTotal.reduce( ( total, valor ) => total += valor.valor, 0) / conta.valorTotal.length })
    
    let tabela = [
        { nome: contasAtualizadas[0].nome, condicao: 'Maior: ', consumo: maiorConsumo, cor: 'red', formaPagamento: { nome: contasAtualizadas[0].formaPagamento.nome},  valorTotal: [{valor:menorValor[0]}]},
        { nome: contasAtualizadas[0].nome, condicao: 'Menor: ', consumo: menorConsumo, cor: 'green', formaPagamento: { nome: contasAtualizadas[0].formaPagamento.nome},  valorTotal: [{valor:maiorValor[0]}]},
        { nome: contasAtualizadas[0].nome, condicao: 'Média: ', consumo: mediaConsumo[0], cor: 'yellow', formaPagamento: { nome: contasAtualizadas[0].formaPagamento.nome}, valorTotal: [{valor:mediaValor[0]}]},
    ]
    return tabela
}