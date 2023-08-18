const mostrarDadosDeputados = async() => {
    const data = await pegarDadosDeputados()
    mostrarDeputados(data, '.deputados')
}

const mostrarDadosEstadosPartidosDeputados = async(id, condicao) => {
    if(condicao == 'partidos'){
        const data = await pegarDadosPartidosDeputados(id)
        document.querySelector(`#${id}`).parentNode.querySelector('div h2').innerHTML += ` ( ${data.dados.length} )`
        mostrarDeputados(data, `#${id}`)
    }else if(condicao == 'estados'){
        const data = await pegarDadosEstadosDeputados(id.toUpperCase())
        document.querySelector(`#${id}`).parentNode.querySelector('div h2').innerHTML += ` ( ${data.dados.length} )`
        mostrarDeputados(data, `#${id}`)
    }else if(condicao.includes('partidos-estados')){
        let partido = condicao.split("-")
        const data = await pegarDadosEstadoPartidosDeputados(id, partido[0])
        if(data.dados.length > 0){
            mostrarDeputados(data, `#${id}-${partido[0]}`)
        }else{
            document.querySelector(`#${id}-${partido[0]}`).parentNode.style.display = "none"
        }
        document.querySelector(`#${id}-${partido[0]}`).parentNode.querySelector('div h2').innerHTML += ` ( ${data.dados.length} )`
    }else if('estados-partidos'){
        let estado = condicao.split("-")
        const data = await pegarDadosEstadoPartidosDeputados(estado[0], id)
        if(data.dados.length > 0){
            document.querySelector(`#${estado[0]}-${id}`).parentNode.querySelector('div h2').innerHTML += ` ( ${data.dados.length} )`
            mostrarDeputados(data, `#${estado[0]}-${id}`)
        }else{
            document.querySelector(`#${estado[0]}-${id}`).parentNode.style.display = "none"
        }
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