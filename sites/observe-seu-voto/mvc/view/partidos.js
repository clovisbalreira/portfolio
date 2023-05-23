const mostrarDadosPartidos = async() => {
    const data = await pegarDadosPartidos()
    mostrarPartidos(data, '.partidos')
}

const mostrarDadosEstadosPartidosDeputados = async(id) => {
    const data = await pegarDadosPartidos()
    mostrarPartidos(data, id)
}

function mostrarPartidos(data, id){
    /* pegando secao no html */
    let sectionPartidos = document.querySelector(id)
    for(let i = 0; i < data.dados.length; i++){
        /* criando div */
        let divPartido = document.createElement('div')
        let divDadosPartido = document.createElement('div')
        let sectionDeputados = document.createElement('section')
        if(id == '.partidos'){
            sectionDeputados.setAttribute('id', `${data.dados[i].sigla}`)
        }else{
            sectionDeputados.setAttribute('id', `${id.replace('#','').toUpperCase()}-${data.dados[i].sigla}`)
        }
        sectionDeputados.classList.add('deputados')
        sectionDeputados.classList.add('apagar')
        
        /* criando h2 */
        let h2 = document.createElement('h2')
        
        /* criando imagem */
        let img = document.createElement('img')
        
        /* criando acordion */
        let acordion = document.createElement('span')
        
        /* adicionando texto */
        h2.innerHTML = data.dados[i].nome
        
        /* adicionando imagem */
        img.setAttribute('alt', data.dados[i].sigla)
        img.setAttribute('src', `./img/partidos/${data.dados[i].sigla == 'UNIÃO' ? 'uniao' : data.dados[i].sigla.toLowerCase()}.png`)
        
        /* adicionando acordion */
        acordion.innerHTML = '+'
        acordion.style.fontWeight = 'bold'
        acordion.style.fontSize = '20px'
        acordion.style.cursor = 'pointer'
        acordion.classList.add('acordion')
        
        /* adiconando tags */    
        divDadosPartido.appendChild(h2)
        divDadosPartido.appendChild(img)
        divDadosPartido.appendChild(acordion)
        divPartido.appendChild(divDadosPartido)
        divPartido.appendChild(sectionDeputados)
        sectionPartidos.appendChild(divPartido)
        if(id == '.partidos'){                              
            mostrarDadosPartidosDeputados(data.dados[i].sigla, `#${data.dados[i].sigla}`)
        }else{
            mostrarDadosPartidosDeputados(id, data.dados[i].sigla)
        }
    }
    acordionPartidos()
}