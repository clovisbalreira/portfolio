const mostrarDadosPartidos = async(condicao) => {
    const data = await pegarDadosPartidos()
    if(condicao.includes('estados-partidos')){
        let partido = condicao.split("-")
        id = `#${partido[0]}`
    }else{
        id = `.${condicao}`
    }
    mostrarPartidos(data, id, condicao)
}

function mostrarPartidos(data, id, condicao){
    /* pegando secao no html */
    let sectionPartidos = document.querySelector(id)
    for(let i = 0; i < data.dados.length; i++){
        /* criando div */
        let divPartido = document.createElement('div')
        let divDadosPartido = document.createElement('div')
        let sectionDeputados = document.createElement('section')
        if(condicao == 'partidos'){
            sectionDeputados.setAttribute('id', `${data.dados[i].sigla}`)
            sectionDeputados.classList.add('deputados')
            sectionDeputados.classList.add('apagar-partidos')
        }else if(condicao.includes('estados-partidos')){
            sectionDeputados.setAttribute('id', `${id.replace('#','')}-${data.dados[i].sigla}`)
            sectionDeputados.classList.add('deputados')
            sectionDeputados.classList.add('apagar-partidos')
        }else{
            sectionDeputados.setAttribute('id', `${data.dados[i].sigla}`)
            sectionDeputados.classList.add('apagar-partidos-estados')
        }
        
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
        if(condicao == 'partidos'){
            acordion.classList.add('acordion-partidos')
        }else if(condicao.includes('estados-partidos')){
            acordion.classList.add('acordion-estados')
        }else{
            acordion.classList.add('acordion-partidos-estados')
        }
        
        /* adiconando tags */    
        divDadosPartido.appendChild(h2)
        divDadosPartido.appendChild(img)
        divDadosPartido.appendChild(acordion)
        divPartido.appendChild(divDadosPartido)
        divPartido.appendChild(sectionDeputados)
        sectionPartidos.appendChild(divPartido)
        if(condicao == 'partidos' || condicao.includes('estados-partidos')){                              
            mostrarDadosEstadosPartidosDeputados(data.dados[i].sigla, condicao)
        }else{
            mostrarDadosEstados(`${data.dados[i].sigla}-${condicao}`)
        }
    }
    if(condicao == 'partidos'){
        acordionPartidos() 
    }else{
        acordionPartidosEstados()
    }
}