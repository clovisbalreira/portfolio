function contarNaipes(naipes, naipesCartas ){
    for(let i = 0; i < naipes.length; i++){
        if(naipesCartas.length == 0){
            naipesCartas[i] = {nome : naipes[i] , numero : '1'}
        }else{
            naipesCartas.forEach( n => {
                if(n.nome == naipes[i]){
                    for(let k = 0; k < naipesCartas.length; k++){
                        n = { nome : n.nome , numero : n.numero++ }
                    }
                }else{
                    naipesCartas[i] = {nome : naipes[i] , numero : '1'}
                }
            })
        }
    }
}

function jogoFlush(naipesCartas){
    naipe = ''
    naipesCartas.filter( n => {
        if(n.numero == 5 ){
            naipe =n.nome
        }
    })
    return naipe
}
