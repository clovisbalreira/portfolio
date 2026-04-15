const cardBoard = document.querySelector('#cardboard')
const imagens = [
    'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'
]

let cardHTML = ''

imagens.forEach(img => {
    cardHTML += `
        <div class="memory-card" data-card="${img}">
            <img class="front-face" src="./img/${img}">
            <img class="back-face" src="./img/js-badge.svg">
        </div>
    `
})

cardBoard.innerHTML = cardHTML + cardHTML

let firstCard, secondCard
let lockCard = false
const cards = document.querySelectorAll('.memory-card')
function flipCard() {
    if (lockCard) return false
    this.classList.add('flip')
    if (!firstCard) {
        firstCard = this
        return false
    }
    secondCard = this
    checkForMatch()
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card
    !isMatch ? disebleCards() : resetCards(isMatch)
}

function disebleCards() {
    lockCard = true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetCards()
    }, 3000)
}
(function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12)
        card.style.order = rand
    })
})()
function resetCards(isMatch = false) {
    if (isMatch) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    }
    /* [firstCard, secondCard,lockCard] = [null,null,false] */
    firstCard = ''
    secondCard = ''
    lockCard = false
}
cards.forEach(card => {
    card.addEventListener('click', flipCard)
})