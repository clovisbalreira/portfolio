function mostrarDadosEstados(condicao){
    data = estados
    if(condicao == 'estados' || condicao == 'estados-partidos'){
        id = '.estados'
    }else{
        let partido = condicao.split("-")
        id = `#${partido[0]}`
    }
    mostrarEstados(data, id , condicao)
}

function mostrarEstados(data, id, condicao){
    /* pegando secao no html */
    let sectionEstados = document.querySelector(id)
    
    for(let i = 0; i < data.length; i++){
        /* criando div */
        let divEstado = document.createElement('div')
        let divEstadoDados = document.createElement('div')  
        let sectionPartidos = document.createElement('section')
        
        if(condicao == 'estados'){
            sectionPartidos.setAttribute('id', `${data[i].sigla}`)
            sectionPartidos.classList.add('deputados')
            sectionPartidos.classList.add('apagar-estados')
        }else if(condicao.includes('partidos-estados')){            
            //console.log('ola')
            let partido = condicao.split('-')
            sectionPartidos.setAttribute('id', `${data[i].sigla}-${partido[0]}`)
            sectionPartidos.classList.add('deputados')
            sectionPartidos.style.display = 'none'
        }else{
            sectionPartidos.setAttribute('id', `${data[i].sigla}`)
            sectionPartidos.classList.add('partidos')
            sectionPartidos.classList.add('apagar-partidos')
        }
 
        /* criando paragrafos */
        let h2Nome = document.createElement('h2')
        let acordion = document.createElement('p')

        /* criando imagem */
        let img = document.createElement('img')
        img.setAttribute('src',`./img/bandeiras/${data[i].sigla}.png`)
        img.setAttribute('alt',data[i].sigla)
        
        /* incluindo variaveis */
        h2Nome.innerHTML = `${data[i].nome} - ${data[i].sigla.toUpperCase()}`

        /* adicionando acordion */
        acordion.innerHTML = '+'
        acordion.style.fontWeight = 'bold'
        acordion.style.fontSize = '20px'
        acordion.style.cursor = 'pointer'
        if(condicao == 'estados'){
            acordion.classList.add('acordion-estados')        
        }else if(condicao.includes('partidos-estados')){
            acordion.classList.add('acordion-estados-partidos')
        }else{
            acordion.classList.add('acordion-partidos-estados')        
        }

        /* juntar tags */
        divEstadoDados.appendChild(h2Nome)
        divEstadoDados.appendChild(img)
        divEstadoDados.appendChild(acordion)
        divEstado.appendChild(divEstadoDados)
        divEstado.appendChild(sectionPartidos)
        sectionEstados.appendChild(divEstado)
        if(condicao == 'estados'){
            mostrarDadosEstadosPartidosDeputados(data[i].sigla,condicao)
        }else if(condicao == 'estados-partidos'){
            mostrarDadosPartidos(`${data[i].sigla}-${condicao}`)
        }else{
            mostrarDadosEstadosPartidosDeputados(data[i].sigla,condicao)
        }

        if(i % 2 == 1){
            i--
        }



    }
    if(condicao == 'estados'){
        acordionEstados()
    }else{
        acordionEstadosPartidos()
    }
    
}