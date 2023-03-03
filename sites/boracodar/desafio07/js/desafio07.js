const filterElement = document.getElementById('name')
const cards = document.querySelectorAll('.cards .card')
filterElement.addEventListener('input', filterCards)
function filterCards(){
    if(filterElement.value != ''){
        for(let card of cards){
            let title = card.querySelector('.content h3')
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
            card.style.display = 'block'
        }
    }
}

const filterSelect = document.querySelector('select')
filterSelect.addEventListener('click',filterSelectAction)
function filterSelectAction(){
    if(filterSelect.value != 0){
        for(let card of cards){
            let title = card.querySelector('.content .location p')
            title = title.textContent.toLowerCase()
            console.log(title)
            let filterText = filterSelect.value.toLowerCase()
            if(!title.includes(filterText)){
                card.style.display = 'none'
            }else{
                card.style.display = 'block'
            }
        }
    }else{
        for(let card of cards){
            card.style.display = 'block'
        }
    }
}