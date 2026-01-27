import { criarTag } from "../tags/criarTag.js"

export function menuCampeonatos(campeonatos, tipos, regras){
    let nav = document.createElement('nav')
    nav.id = 'menu-campeonato'
    nav.appendChild(criarTag('h3', 'Regras'))
    regras.forEach(regra => {
        let details = document.createElement('details')
        let summary = document.createElement('summary')
        summary.textContent = regra.nome
        details.appendChild(summary)
        let temConteudo = false
        tipos.forEach(tipo => {
            let lista = campeonatos.filter(
                campeonato =>
                    campeonato.tipo.nome === tipo.nome &&
                    campeonato.regra.nome === regra.nome
            )
            if (lista.length > 0) {
                temConteudo = true
                let ul = document.createElement('ul')
                ul.classList.add('menu-campeonato')
                lista.forEach(campeonato => {
                    let li = document.createElement('li')
                    li.textContent = `${campeonato.nome} (${campeonato.tipo.nome})`
                    li.classList.add('lista-campeonato')
                    ul.appendChild(li)
                })
                details.appendChild(ul)
            }
        })
        if (temConteudo) {
            nav.appendChild(details)
        }
    })

    return nav
}
