export function mostrarGravacao(gravacoes) {
    let section = document.querySelector('section')
    let h2 = document.createElement('h2')
    h2.textContent = 'Interprete - Musica'
    section.appendChild(h2)
    gravacoes.forEach( gravacao => {
        let p = document.createElement('p')
        p.textContent = `${gravacao.interprete.interprete.interprete} - ${gravacao.musica.musica.musica}`
        section.appendChild(p)
    });
}

export function mostrarGravaçoesPorArtista(gravacoes, interpretes, setLists){
    interpretes.forEach( (interprete, index) => {
        let section = document.querySelector('section')
        let h2 = document.createElement('h2')
        h2.textContent = `${index} - ${interprete.interprete}`
        section.appendChild(h2)
        let ul = document.createElement('ul')
        let total = 0
        gravacoes.forEach( (gravacao, index) => {
            if(interprete.interprete === gravacao.interprete.interprete.interprete){
                let li = document.createElement('li')
                li.textContent = `${index} - ${gravacao.musica.musica.musica}` 
                setLists.forEach( set => {
                    set.musicas.forEach( musica => {
                        if(musica[0].interprete.interprete.interprete == interprete.interprete && musica[0].musica.musica.musica == gravacao.musica.musica.musica){
                            total +=1
                            li.textContent += ` - ${set.dia}`
                        }
                    })
                })
                ul.appendChild(li)
            }
        })
        section.appendChild(ul)
        let p = document.createElement('P')
        p.textContent = `Esse artista tocou : ${total == 0 ? 'nenhuma' : total} vez${total > 1 ? 'es' : ''}`
        section.appendChild(p)
    })
}