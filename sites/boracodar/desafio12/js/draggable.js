const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.cards')
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag',drag)
    card.addEventListener('dragend', dragend)
})
function dragstart(){
    dropzones.forEach(dropzone => dropzone.classList.add('heightlight'))
    this.classList.add('is-dragging')
}
function drag(){
}
function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('heightlight'))
    this.classList.remove('is-dragging')
}

dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})
function dragenter(){
}
function dragover(){
    this.classList.add('over')
    const cardBerinDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBerinDragged)
}
function dragleave(){
    this.classList.remove('over')
}
function drop(){
    this.classList.remove('over')
}