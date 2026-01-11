export function menuCampeonatos(campeonatos){
    let nav = document.createElement('nav')
    let ul = document.createElement('ul')
    ul.id = 'menu-campeonato'
    ul.innerHTML = ''
    campeonatos.forEach( campeonato => {
        let li = document.createElement('li')
        li.textContent = campeonato.nome
        li.classList.add('lista-campeonato')
        ul.appendChild(li)
    })
    nav.appendChild(ul)
    return nav
}