function mostrarCarta(carta){
    let textoMao = document.querySelector('p')
    let img = document.querySelectorAll('img')
    let flush = '';
    let valorJogo = ''
    let straight = false
    let naipes = []
    let numbers = []
    let ordenando = []
    let naipesCartas = []
    let cartas = []
    let pair = []
    let three = []
    let four = []
    let nomeJogo = [
        { nome : 'Straight Flush ' , forma : ' ( Cinco cartas consecutivas do mesmo naipe )'},
        { nome : 'Four of a Kind ' , forma : ' ( Quatro cartas do mesmo valor e uma carta aleatória  )'},
        { nome : 'Full House ' , forma : ' ( Três cartas do mesmo valor e outras duas cartas do mesmo valor  )'},
        { nome : 'Flush ' , forma : ' ( Cinco cartas do mesmo naipe, não necessariamente consecutivas  )'},
        { nome : 'Straight ' , forma : ' ( Cinco cartas consecutivas de naipes diferentes  )'},
        { nome : 'Three of a Kind ' , forma : ' ( Três cartas do mesmo valor e duas cartas aleatórias  )'},
        { nome : 'Two Pair ' , forma : ' ( Duas cartas do mesmo valor, duas outras cartas do mesmo valor e uma carta aleatória  )'},
        { nome : 'One Pair ' , forma : ' ( Duas cartas do mesmo valor e três cartas aleatórias  )'},
        { nome : 'High Card ' , forma : ' ( Nenhuma das combinações acima. A mão é definida pela carta mais alta )'}                    
    ]
    sortearCartas(img, carta, naipes, numbers)    
    contarNaipes(naipes, naipesCartas)
    flush = jogoFlush(naipesCartas)
    contarCartas(numbers, cartas)
    removerRepetidos(cartas, numbers)
    filtrarCartasRepetidas(cartas, pair, three, four)
    ordenando = numbers.sort()
    straight = ordenarCartas(ordenando)       
    mostrarJogos(valorJogo, textoMao, flush, straight, four, three, pair, valorJogo, nomeJogo, ordenando, img)         
}