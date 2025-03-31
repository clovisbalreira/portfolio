function conversor(){
    let valorWons = document.getElementById('moeda').value
    let unwonCotacao = document.getElementById('wons').value
    let resposta = document.getElementById('resposta')
    if( valorWons == '' || unwonCotacao == '')
        resposta.textContent = 'Os campos estão invalidos.'
    else
        resposta.textContent = `O valor de Wons ${valorWons} com cotação de R$: ${unwonCotacao} é R$ ${(valorWons * unwonCotacao).toFixed(unwonCotacao.includes('.') ? unwonCotacao.toString().split(".")[1].length > 2 ? unwonCotacao.toString().split(".")[1].length : 2 : 2)}`
}