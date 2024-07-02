let elementScroll = document.querySelector('.scroll')
let elementContainer = document.querySelector('.scroll_container')
let elementFilhos = Array.from(elementContainer.children)
elementFilhos.forEach( item => {
    let elementDuplicado = item.cloneNode(true)
    elementDuplicado.setAttribute('aria-hidden', true)
    elementContainer.appendChild(elementDuplicado)
})