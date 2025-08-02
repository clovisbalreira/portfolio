export function adicionarTotais(texto, valores){
    texto.push('Total:')
    let valoresTotais = []
    valores.forEach( (valor, index) => {
        if(index == 1 || index == 3){
            texto.push(valor.textContent)
            valoresTotais.push(parseFloat(valor.textContent.match(/\d+(\.\d+)?/)[0]))
        }
    })
    texto.push('%0A')

    texto.push('Total a Pagar:')
    texto.push(`R$ ${(valoresTotais[1] - valoresTotais[0]).toFixed(2)}`)
    return texto
}