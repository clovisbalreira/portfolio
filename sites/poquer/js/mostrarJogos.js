function mostrarJogos(valorJogo, textoMao, flush, straight, four, three, pair, valorJogo, nomeJogo, ordenando, img){
    if(flush != '' && straight){
        aumentarCarta(img, flush, straight)
        valorJogo = nomeJogo[0].nome + ' de '
        valorJogo += nomeOrdem(ordenando)
        valorJogo += ' de ' + nomeNaipe(flush) + nomeJogo[0].forma
    }else if(four.length == 1){
        aumentarCarta(img, flush, four)
        valorJogo = nomeJogo[1].nome + ' de ' + nomeCarta(four[0]) + nomeJogo[1].forma 
    }else if(three.length == 1 && pair.length == 1){
        aumentarCarta(img, three, pair)
        valorJogo = nomeJogo[2].nome + ' três ' + nomeCarta(three[0]) + ' e dois ' + nomeCarta(pair[0]) + nomeJogo[2].forma 
    }else if(flush != ''){
        aumentarCarta(img, flush, straight)
        valorJogo = nomeJogo[3].nome + ' de ' + nomeNaipe(flush) + nomeJogo[3].forma
    }else if(straight){
        aumentarCarta(img, flush, straight)
        valorJogo = nomeJogo[4].nome + ' de '
        valorJogo += nomeOrdem(ordenando)
        valorJogo += nomeJogo[4].forma
    }else if(three.length == 1){
        aumentarCarta(img, flush, three)
        valorJogo = nomeJogo[5].nome + ' de ' + nomeCarta(three[0]) + nomeJogo[5].forma
    }else if(pair.length == 2){
        aumentarCarta(img, flush, pair)
        valorJogo = nomeJogo[6].nome + ' de ' +  nomeCarta(pair[0]) +' e ' + nomeCarta(pair[1]) + nomeJogo[6].forma
    }else if(pair.length == 1){
        aumentarCarta(img, flush, pair)
        valorJogo = nomeJogo[7].nome + ' de ' +  nomeCarta(pair[0]) + nomeJogo[7].forma
    }else{
        aumentarCarta(img, flush, maior = cartaMaior(ordenando))
        valorJogo = nomeJogo[8].nome + ' é '
        valorJogo += nomeCarta(cartaMaior(ordenando)) 
        valorJogo += nomeJogo[8].forma
    }
    textoMao.innerHTML = 'Você tem ' + valorJogo 
}
