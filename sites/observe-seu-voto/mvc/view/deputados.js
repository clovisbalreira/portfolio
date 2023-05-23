const mostrarDadosDeputados = async() => {
    const data = await pegarDadosDeputados()
    mostrarDeputados(data, '.deputados')
}

const mostrarDadosEstadosDeputados = async() => {
    //const data = await pegarDadosEstadosDeputados()
    //mostrarDeputados(data, '.deputados')
}

const mostrarDadosPartidosDeputados = async(estado, partido) => {
    if(estado == partido.replace('#','')){
        const data = await pegarDadosPartidosDeputados(partido)
        mostrarDeputados(data, `${partido}`)
    }else{
        const data = await pegarDadosDeputadosEstadoPartidos(estado, partido)
        mostrarDeputados(data, `#${estado.replace('#','').toUpperCase()}-${partido}`)
    }
}

function mostrarDeputados(data, id){
    /* pegando secao no html */
    let sectionDeputados = document.querySelector(id)
    for(let i = 0; i < data.dados.length; i++){
        /* criando div */
        let div = document.createElement('div')
        let divDeputado = document.createElement('div')
        let divEstado = document.createElement('div')
        let divPartido = document.createElement('div')
        let divPartidoEstado = document.createElement('div')
    
        /* criando paragrafo pros dados */
        let nome = document.createElement('p')
        let email = document.createElement('p')
        let partido = document.createElement('p')
        let estado = document.createElement('p')
        let nomeFoto = document.createElement('img')
        let partidoFoto = document.createElement('img')
        let estadoFoto = document.createElement('img')
    
        /* incluindo dados nos parragrafos */
        nome.innerHTML = data.dados[i].nome
        email.innerHTML = data.dados[i].email
        partido.innerHTML = data.dados[i].siglaPartido
        estado.innerHTML = data.dados[i].siglaUf
    
        /* incluindo imagens */
        nomeFoto.setAttribute('src',data.dados[i].urlFoto)
        nomeFoto.setAttribute('alt',data.dados[i].nome)
        partidoFoto.setAttribute('src',`./img/partidos/${data.dados[i].siglaPartido == 'UNIÃO' ? 'uniao' : data.dados[i].siglaPartido.toLowerCase()}.png`)
        partidoFoto.setAttribute('alt',data.dados[i].siglaPartido)
        estadoFoto.setAttribute('src',`./img/bandeiras/${data.dados[i].siglaUf.toLowerCase()}.png`)
        estadoFoto.setAttribute('alt',data.dados[i].siglaUf)
        
        /* incluindo tags na div */
        divDeputado.appendChild(nome)
        divDeputado.appendChild(nomeFoto)
        div.appendChild(divDeputado)
        
        divPartido.appendChild(partido)
        divPartido.appendChild(partidoFoto)
        divPartidoEstado.appendChild(divPartido)
        
        divEstado.appendChild(estado)
        divEstado.appendChild(estadoFoto)
        divPartidoEstado.appendChild(divEstado)
   
        div.appendChild(divPartidoEstado)
        
        div.appendChild(email)
        /* incluindo a div no section */
        sectionDeputados.appendChild(div)
    }
}