function contarCartas(numbers, cartas){
    for(let i = 0; i < numbers.length; i++){
        let quantidade = 0
        for(let k = 0; k < numbers.length; k++){
            if(numbers[i] == numbers[k]){
                quantidade++
            }
        }
        for(let l = 0; l < cartas.length; l++){
            if(cartas[l].carta != numbers[i]){
                cartas.push({carta: numbers[i], numero: quantidade})
            }    
        }
        if(cartas.length == 0){
            cartas.push({carta: numbers[i], numero: quantidade})
        }
    }
}

function removerRepetidos(cartas, numbers){
    for(let i = 0; i < cartas.length; i++){
        if(i + 1 < cartas.length){
            if(cartas[i].carta == cartas[i + 1].carta){   
                cartas.splice(i, 1);             
            }
        }
    }
    let quantidadeCartas = cartas.reduce( ( total, c) => {
        return total += c.numero
    }, 0)
    if(quantidadeCartas == 6){
        cartas.pop()
    }else if(quantidadeCartas > 6){
        cartas = numbers
    }
}

function cartaFinal(valor){
    let v = valor
    if(valor == '01'){
        v = "ACE"
    }else if(valor == '11'){ 
        v = 'JACK'
    }else if(valor == '12'){ 
        v = 'QUEEN'
    }
    else if(valor == '13'){ 
        v = 'KING'
    }
    return v
}

function filtrarCartasRepetidas(cartas, pair, three, four){
    cartas.filter( c => {
        if(c.numero == 2){
            if(pair.length < 3){
                pair.push(cartaFinal(c.carta))
            }
        }else if(c.numero == 3){
            if(three.length == 0){
                three.push(cartaFinal(c.carta))
            }
        }else if(c.numero == 4){
            if(four.length == 0){
                four.push(cartaFinal(c.carta))
            }
        }
    })
    if(pair[0] == pair[1] && pair[0] == pair[2]){
        pair.splice(1,1)
        pair.splice(1,1)
    }else if(pair.length == 2 || pair.length == 3){
        pair.splice(1,1)
    }
}

function ordenarCartas(ordenando){
    sequencia = 0
    resposta = false
    for(let i = 0; i < ordenando.length - 1; i++){
        if(Number(ordenando[i]) + 1 === Number(ordenando[i+1])){
            sequencia++
        }
    }
    if((ordenando[0] == '01' && ordenando[1] == '10' && ordenando[2] == '11' && ordenando[3] == '12' && ordenando[4] == '13') || sequencia == 4 ){
        resposta = true
    }
    return resposta
}