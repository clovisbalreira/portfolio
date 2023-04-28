const filterElement = document.getElementById('filter')
const cards = document.querySelectorAll('.person')
filterElement.addEventListener('input', filterCards)
function filterCards(){
    if(filterElement.value != ''){
        for(let card of cards){
            let first = card.parentElement.parentElement.parentElement.querySelector('.letter')
            first.style.display = 'none'
            let title = card.querySelector('.contact h3')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)){
                card.style.display = 'none'
            }else{
                card.style.display = 'block'
            }
        }
    }else{
        for(let card of cards){
            let first = card.parentElement.parentElement.parentElement.querySelector('.letter')
            first.style.display = 'block'
            card.style.display = 'block'
        }
    }
}