let quantidadeBaralho = 1
function baralho(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(response => response.json()).then(data => {
        carta(data.deck_id)
        }
    ).catch(error => console.log(error))
}

function carta(baralho){
    fetch(`https://deckofcardsapi.com/api/deck/${baralho}/draw/?count=5`).then(response => response.json())
    .then(data => {
        mostrarCarta(data)
        }
    ).catch(error => console.log(error))
}
