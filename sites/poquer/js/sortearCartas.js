function sortearCartas(img, carta, naipes, numbers){
    for(let i = 0; i < img.length; i++){
        img[i].setAttribute('src', carta.cards[i].image)
        cardId = carta.cards[i].value
        if(cardId < 10){
            cardId = '0' + cardId
        }
        img[i].setAttribute('class',  cardId )
        naipes.push(carta.cards[i].suit)

        if(carta.cards[i].value == 'ACE'){
            converterNumero = '01'
        }else if(carta.cards[i].value == '10'){
            converterNumero = '10'
        }else if(carta.cards[i].value == 'JACK'){
            converterNumero = '11'
        }else if(carta.cards[i].value == 'QUEEN'){
            converterNumero = '12'   
        }else if(carta.cards[i].value == 'KING'){
            converterNumero = '13'
        }else{
            converterNumero = '0' + carta.cards[i].value
        }    
        numbers.push(converterNumero)
    }
}