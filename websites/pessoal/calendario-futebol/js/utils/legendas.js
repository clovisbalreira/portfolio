export function legendas(campeonatos){
    let section = document.getElementById('legendas')
    section.innerHTML = '' 
    let localizacaoAnterior = ''
    campeonatos.tabela.forEach( campeonato => {
        if(localizacaoAnterior !== campeonato.local){
            let div = document.createElement('div')
            let divCampeonato = document.createElement('div')
            divCampeonato.style.backgroundColor = campeonato.cor
            div.appendChild(divCampeonato)
            let p = document.createElement('p')
            p.textContent = campeonato.local
            div.appendChild(p)
            section.appendChild(div)
        }    
        localizacaoAnterior = campeonato.local
    })
}