function mostrarDadosEstados(){
    const data = estados
    mostrarEstados(data, '.estados')
}

function mostrarDadosEstadosDeputados(estados){
    const data = estados
    //mostrarEstados(data, `*estados`)
}

function mostrarEstados(data, id){
    /* pegando secao no html */
    let sectionEstados = document.querySelector(id.replace('*','.'))
    
    for(let i = 0; i < data.length; i++){
        /* criando div */
        let divEstado = document.createElement('div')
        let divEstadoDados = document.createElement('div')  
        let sectionPartidos = document.createElement('section')
        
        if(id == '.estados'){
            sectionPartidos.setAttribute('id', `${data[i].sigla}`)
        }else{
            sectionPartidos.setAttribute('id', `${data[i].sigla}`)
        }
        sectionPartidos.classList.add('partidos')
        sectionPartidos.classList.add('apagar-estados')
 
        /* criando paragrafos */
        let pNome = document.createElement('p')
        let acordion = document.createElement('p')

        /* criando imagem */
        let img = document.createElement('img')
        img.setAttribute('src',`./img/bandeiras/${data[i].sigla}.png`)
        img.setAttribute('alt',data[i].sigla)
        
        /* incluindo variaveis */
        pNome.innerHTML = `${data[i].nome} - ${data[i].sigla.toUpperCase()}`

        /* adicionando acordion */
        acordion.innerHTML = '+'
        acordion.style.fontWeight = 'bold'
        acordion.style.fontSize = '20px'
        acordion.style.cursor = 'pointer'
        acordion.classList.add('acordion-estados')        

        /* juntar tags */
        divEstadoDados.appendChild(pNome)
        divEstadoDados.appendChild(img)
        divEstadoDados.appendChild(acordion)
        divEstado.appendChild(divEstadoDados)
        divEstado.appendChild(sectionPartidos)
        sectionEstados.appendChild(divEstado)
        if(id == '.estados'){
            mostrarDadosEstadosPartidosDeputados(`#${data[i].sigla}`)
        }else{
            console.log('ola')
            //mostrarDadosEstadosPartidosDeputados(`#${data[i].sigla}`)
        }
    }
    acordionEstados()
}