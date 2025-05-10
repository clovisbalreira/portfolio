function nomeCarta(nome){
    if(nome == 'ACE'){
        nome = 'AS'
    }else if(nome == 'JACK'){ 
        nome = 'Cavalo'
    }else if(nome == 'QUEEN'){
        nome = 'Dama'
    }else if(nome == 'KING'){
        nome = 'Rei'
    }
    return nome
}

function nomeNaipe(nome){
    if(nome == 'DIAMONDS'){
        nome = 'Ouro'
    }else if(nome == 'HEARTS'){ 
        nome = 'Copas'
    }else if(nome == 'SPADES'){
        nome = 'Espadas'
    }else if(nome == 'CLUBS'){
        nome = 'Paus'
    }
    return nome
}

function nomeOrdem(ordem){
    let texto = nomeCarta(ordem[0]) + ' a ' + nomeCarta(ordem[4])
    if(ordem[0] == '01' && ordem[1] == '10'){
        texto = nomeCarta(ordem[1]) + ' a ' + nomeCarta(ordem[0])
    }
    return texto
}

function cartaMaior(cartas){
    let carta = ''
    if(cartas[0] == '01'){
        carta = 'ACE'
        return cartaFinal(carta)
    }else{
        carta = cartas[4]
        if(cartas[4] == '11'){ 
            carta = 'JACK' 
        }else if(cartas[4] == '12'){ 
            carta = 'QUEEN' 
        }else if(cartas[4] == '13'){ 
            carta = 'KING' 
        }
        return cartaFinal(carta)
    }
}