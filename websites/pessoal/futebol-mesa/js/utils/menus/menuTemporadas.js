export function menuTemporadas(filtrarTemporadas){
    let nav = document.createElement('nav')
    nav.id = 'menu-temporada'
    let ul = document.createElement('ul')
    filtrarTemporadas.forEach( temporada => {
        if(temporada.tabelaClassificacaoGeral[0].j != 0){
            let li = document.createElement('li')
            li.classList.add('lista-temporada')
            li.textContent = `${temporada.nome} ${temporada.campeonato.nome}`
            ul.appendChild(li)
        } 
    })
    nav.appendChild(ul)
    return nav
}