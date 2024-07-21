let elementosDuvida = document.querySelectorAll('.duvida')
elementosDuvida.forEach( duvida => {
    duvida.addEventListener('click', () => {
        duvida.classList.toggle('ativa')
    })

})