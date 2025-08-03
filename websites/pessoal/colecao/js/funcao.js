function mostrarDinheiro(dinheriosFiltrados) {
    dinheriosFiltrados.filter( dinheiro => dinheiro.ano == '1989')
   // console.log(dinheriosFiltrados)
    let main = document.querySelector('main')
    main.innerHTML = ''
    let soma = 0
    let cedulas = 0
    let moedas = 0
    let convertido = 0
    let cotacaoMinimo = 0
    let cotacaoMaximo = 0
    let cotacaoMedia = 0
    for (let i = 0; i < dinheriosFiltrados.length; i++) {
        if (dinheriosFiltrados[i].pais != '') {
            soma += parseFloat(dinheriosFiltrados[i].valor)
            convertido += atualizarValor(dinheriosFiltrados[i].ano, dinheriosFiltrados[i].nome, dinheriosFiltrados[i].pais, parseFloat(dinheriosFiltrados[i].valor, dinheriosFiltrados[i].ano))
            cotacaoMinimo += parseFloat(dinheriosFiltrados[i].cotacao.cotacaoMinimo)
            cotacaoMaximo += parseFloat
            (dinheriosFiltrados[i].cotacao.cotacaoMaximo)
            cotacaoMedia += ( parseFloat(dinheriosFiltrados[i].cotacao.cotacaoMinimo) + parseFloat
            (dinheriosFiltrados[i].cotacao.cotacaoMaximo) ) / 2
            let section = document.createElement('section')
            let divDados = document.createElement('div')
            divDados.appendChild(nomeDinheiro(dinheriosFiltrados[i]))
            divDados.appendChild(series(dinheriosFiltrados[i]))
            section.appendChild(divDados)
            let divPaisAno = document.createElement('div')
            divPaisAno.appendChild(anoTitulo())
            divPaisAno.appendChild(paragrafoAno(dinheriosFiltrados[i])) 
            divPaisAno.appendChild(pais(dinheriosFiltrados[i]))
            section.appendChild(divPaisAno)
            section.appendChild(valor(dinheriosFiltrados[i]))
            //section.appendChild(conversao(dinheriosFiltrados[i]))
            //section.appendChild(minimo(dinheriosFiltrados[i]))
            //section.appendChild(maximo(dinheriosFiltrados[i]))
            //section.appendChild(cotacaoSaldo(dinheriosFiltrados[i]))
            section.appendChild(imagem(dinheriosFiltrados[i]))
            section.appendChild(pacote(dinheriosFiltrados[i]))
            main.appendChild(section)
            dinheriosFiltrados[i].tipo == 'Cedula' ? cedulas += 1 : moedas += 1
        }
    }
    mostrarTotais(moedas, cedulas, soma, convertido, cotacaoMinimo, cotacaoMaximo, cotacaoMedia)
}

function casaDecimal(numero){
    let numeroAtualizado = 0
    virgula = false
    for(let i = 0; i < numero.length; i++){
        if(virgula){
            if(i == parseInt(numero.length - 1)){
                numeroAtualizado = parseInt(numeroAtualizado).toFixed(2)
            }else if(parseInt(numero[i]) == 0 ){
                numeroAtualizado += numero[i]
            }else{
                numeroAtualizado += numero[i]
                if(numero[i+1] != 0){
                    numeroAtualizado += numero[i+1]
                }
                break
            }
        }else{
            if(i == 0){
                numeroAtualizado = numero[i]
            }else{
                numeroAtualizado += numero[i]
            }
        }
        if(numero[i] == '.'){
            virgula = true
        }
    }
    return numeroAtualizado
}

function atualizarValor(ano, moeda, pais, valor) {
    let epoca = ano.length == 4 ? parseInt(ano) : parseInt(ano.substring(0,4))
    if (pais == 'Brasil') {
        if((epoca >= 1942 && epoca <= 1967) && moeda == 'Cruzeiros'){
            valor = (valor / 10000000 ) / 2750
        }else if((epoca >= 1967 && epoca <= 1970) && moeda == 'Cruzeiros Novos'){
            valor = (valor / 1000000 ) / 2750
        }else if((epoca >= 1970 && epoca <= 1986) && moeda == 'Cruzeiros' ){
            valor = (valor / 100000 ) / 2750
        }else if((epoca >= 1986 && epoca <= 1989) && moeda == 'Cruzados'){
            valor = (valor / 10000 ) / 2750
        }else if((epoca >= 1989 && epoca <= 1990) && moeda == 'Cruzados Novos'){
            valor = (valor / 1000 ) / 2750
        }else if((epoca >= 1990 && epoca <= 1993) && moeda == 'Cruzeiros'){
            valor = (valor / 100 ) / 2750
        }else if((epoca >= 1992 && epoca <= 1994) && moeda == 'Cruzeiros Reais'){
            valor = valor / 2750
        }else if(epoca >= 1994){
            valor = valor 
        }
    } else {
        cotacao.forEach(cotacao => {
            if (cotacao.nome == pais) {
                valor = valor * cotacao.valor
            }
        })
    }
    return valor
}

function cifrao(pais, brasil) {
    let cifroes = ''
    if (pais == 'Brasil') {
        if (brasil == 'Real') {
            cifroes = 'R$'
        }else if (brasil == 'Cruzeiros Reais') {
            cifroes = 'CR$'
        }else if (brasil == 'Cruzeiros') {
            cifroes = 'Cr$'
        }else if (brasil == 'Cruzeiros Novos') {
            cifroes = 'NCr$'
        }else if (brasil == 'Cruzados') {
            cifroes = 'Cz$'
        }else if (brasil == 'Cruzados Novos') {
            cifroes = 'NCz$'
        }
    } else {
        cotacao.forEach(cotacao => {
            if (cotacao.nome == pais) {
                cifroes = Number(0).toLocaleString('pt-br', { style: 'currency', currency: cotacao.sigla }).replace('0,00', '')
            }
        })
    }
    return cifroes
}

function somarTotais(id, texto, valor) {
    let moeda = document.getElementById(id)
    if(moeda != null){
        moeda.innerHTML = ''
        moeda.innerHTML += texto + valor
    }
}

function mostrarTotais(moedas, cedulas, soma, convertido, cotacaoMinimo, cotacaoMaximo, cotacaoMedia){
    somarTotais('moedas', 'Total de Moedas: ', moedas)
    somarTotais('cedulas', 'Total de Cedulas: ', cedulas)
    somarTotais('valorTotal', 'Valor Total R$: ', soma.toFixed(2))
    somarTotais('valorConvertido', 'Valor Convertido R$: ', convertido.toFixed(2))
    somarTotais('valorCotacaoMinimo', 'Valor Contação Minimo R$: ', cotacaoMinimo.toFixed(2))
    somarTotais('valorCotacaoMaximo', 'Valor Contação Maximo R$: ', cotacaoMaximo.toFixed(2))
    somarTotais('valorCotacaoMedia', 'Valor Contação Média R$: ', cotacaoMedia.toFixed(2))
}

function imprimirSelect(){
    let tipos = criarArrays('tipo')
    let ano = criarArrays('ano')
    let pais = criarArrays('pais')
    let moeda = criarArrays('moeda')
    let valor = criarArrays('valor')
    mostrarTodosSelects(tipos, ano, pais, moeda, valor)
}

function criarArrays(argumento){
    let dados = []
    let ordenar = ''
    if(argumento == 'tipo'){
        dados = [...new Set(dinheiros.map(item => item.tipo))]
    }else if(argumento == 'ano'){
        dados = [...new Set(dinheiros.map(item => item.ano))]
    }else if(argumento == 'moeda'){
        dados = [...new Set(dinheiros.map(item => item.nome))]
    }else if(argumento == 'valor'){
        dados = [...new Set(dinheiros.map(item => item.valor))]
    }else if(argumento == 'pais'){
        dados = [...new Set(dinheiros.map(item => item.pais))]
    }else if(argumento == 'cotacao'){
        dados = [...new Set(dinheiros.map(item => item.cotacao))]
    }
    if(argumento == 'tipo' || argumento == 'moeda' || argumento == 'ano' || argumento == 'pais'){
        ordenar = dados.sort()
    }else if(argumento == 'valor'){
        ordenar = dados.map(Number).sort((a, b) => a - b)
    }else{
        ordenar = dados.map(Number).sort((a, b) => a + b)
    }
    return ordenar.map(dado => ({ nome: dado }))
}

function mostrarTodosSelects(tipos, ano, pais, moeda, valor){
    mostrarSelect('tipos', tipos)
    mostrarSelect('paises', pais)
    mostrarSelect('ano', ano)
    mostrarSelect('moeda', moeda)
    mostrarSelect('valor', valor)
    mostrarSelectUnicos('unicos', filtroUnico())
}

function mostrarSelectUnicos(id, dados){
    let divSelect = document.getElementById(id)
    dados.forEach(dado => {
        let option = document.createElement('option')
        option.value = `${dado.ano} - ${dado.nome} - ${dado.valor} - ${dado.tipo}`
        option.innerHTML = `${dado.ano} - ${dado.nome} - ${dado.valor} - ${dado.tipo}`
        divSelect.appendChild(option)
    })
}

function mostrarSelect(id, dados){
    let divSelect = document.getElementById(id)
    dados.forEach(dado => {
        let option = document.createElement('option')
        option.value = dado.nome
        option.innerHTML = dado.nome
        divSelect.appendChild(option)
    })
}

function atualizar(){
    let selectTipos = document.getElementById('tipos').value
    let selectPaises = document.getElementById('paises').value
    let selectAno = document.getElementById('ano').value
    let selectMoeda = document.getElementById('moeda').value
    let selectValor = document.getElementById('valor').value
    let selectUnico = document.getElementById('unicos').value
    let dinheriosFiltrados = filtros(selectTipos, selectPaises, selectAno, selectMoeda, selectValor, selectUnico)
    mostrarDinheiro(dinheriosFiltrados) 
}

function iniciarSelect(ids){
    ids.forEach( id => {
        let option = document.querySelector(`#${id} option[value=" "]`);
        option.selected = true;
    })
}

function filtros(selectTipos, selectPaises, selectAno, selectMoeda, selectValor, selectUnico){
    let array = []
    ids = []
    array = dinheiros
    if(selectUnico != ' '){
        let separar = selectUnico.split(" - ")
        array = array.filter(dinheiro => { return dinheiro.ano == separar[0] && dinheiro.nome == separar[1] && dinheiro.valor == separar[2] && dinheiro.tipo == separar[3]})
    }else if( selectTipos != ' ' || selectPaises != ' ' || selectAno != ' ' || selectMoeda != ' ' || selectValor != ' ' ){
        if(selectTipos != ' '){
            array = array.filter(dinheiro => { return dinheiro.tipo == selectTipos })
        } 
        if(selectPaises != ' '){
            array = array.filter(dinheiro => { return dinheiro.pais == selectPaises })
        } 
        if(selectAno != ' '){
            array = array.filter(dinheiro => { return dinheiro.ano == selectAno })
        } 
        if(selectMoeda != ' '){
            array = array.filter(dinheiro => { return dinheiro.nome == selectMoeda })
        } 
        if(selectValor != ' '){
            array = array.filter(dinheiro => { return dinheiro.valor == selectValor })
        }
    }else{
        array = array.filter(dinheiro => { return dinheiro.mostrar == true })
    }
    return array
}

function filtroUnico(){

    let array = []
    array = dinheiros
    let unicos = [];
    const seen = new Set();

    array.forEach(item => {
    const chave = `${item.ano}-${item.tipo}-${item.nome}-${item.pais}-${item.valor}`;
    if (!seen.has(chave)) {
        seen.add(chave);
        unicos.push(item);
    }
    });

    unicos.sort( (a, b) => {
        if(parseInt(a.ano.slice(0, 4)) == parseInt(b.ano.slice(0, 4))){
            return parseFloat(a.valor.slice(0, 4)) - parseFloat(b.valor.slice(0, 4))
        }else{
            return parseInt(a.ano.slice(0, 4)) - parseInt(b.ano.slice(0, 4))
        }
    })

    return unicos
}

function selects(){
    valorSelect('tipos')
    valorSelect('paises')
    valorSelect('ano')
    valorSelect('moeda')
    valorSelect('valor')
    valorSelect('unicos')
}

function valorSelect(id){     
    const select = document.getElementById(id);
    select.addEventListener('change', function() {
        let id = select.id
        if(id == 'unicos'){
            iniciarSelect(['tipos', 'paises', 'ano', 'moeda', 'valor'])
        }else{
            iniciarSelect(['unicos'])
        }
        atualizar()
    });
}

function nomeDinheiro(objeto){
    let h2Nome = document.createElement('h2')
    h2Nome.innerHTML = `${objeto.nome}`
    return h2Nome 
}

function series(objeto){
    let divSerie = document.createElement('div')
    let serie = objeto.tipo == 'Moeda' ? '' : 'Serie'
    let h2Serie = document.createElement('h2')
    h2Serie.innerHTML = serie
    divSerie.appendChild(h2Serie)
    let pSerie = document.createElement('p')
    pSerie.innerHTML = objeto.serie
    divSerie.appendChild(pSerie)
    return divSerie
}

function anoTitulo(){
    let divAno = document.createElement('div')
    let h2Ano = document.createElement('h2')
    h2Ano.innerHTML = 'Ano'
    divAno.appendChild(h2Ano)
    return divAno                
}

function paragrafoAno(objeto){
    let pAno = document.createElement('p')
    pAno.innerHTML = objeto.ano
    return pAno
}

function pais(objeto){
    let divPais = document.createElement('div')
    let h2Pais = document.createElement('h2')
    h2Pais.innerHTML = 'Pais'
    divPais.appendChild(h2Pais)
    let divNomeImagem = document.createElement('div')
    let pPais = document.createElement('p')
    divNomeImagem.innerHTML = objeto.pais
    divPais.appendChild(pPais)
    let paisImagem = document.createElement('img')
    paisImagem.src = `./img/bandeira/${objeto.pais.toLowerCase().replace(" ", "-").replace("ç", "c")}.png`
    paisImagem.alt = objeto.pais
    divNomeImagem.appendChild(paisImagem)
    divPais.appendChild(divNomeImagem)
    return divPais
}

function valor(objeto){
    let divValor = document.createElement('div')
    let h2Valor = document.createElement('h2')
    h2Valor.innerHTML = 'Valor'
    divValor.appendChild(h2Valor)
    let pValor = document.createElement('p')
    pValor.innerHTML = `${cifrao(objeto.pais, objeto.nome)} ${parseFloat(objeto.valor).toFixed(2)}`
    divValor.appendChild(pValor)
    return divValor
}

function conversao(objeto){
    let divAtual = document.createElement('div')
    let h2Atual = document.createElement('h2')
    h2Atual.innerHTML = 'Conversão'
    divAtual.appendChild(h2Atual)
    let pAtual = document.createElement('p')
    pAtual.innerHTML = `R$: ${casaDecimal(atualizarValor(objeto.ano, objeto.nome, objeto.pais, parseFloat(objeto.valor)).toFixed(20))}`
    divAtual.appendChild(pAtual)
    return divAtual
}

function minimo(objeto){
    let divCotacaoMinimo = document.createElement('div')
    let h2CotacaoMinimo = document.createElement('h2')
    h2CotacaoMinimo.innerHTML = 'Cotação Venda Min.'
    divCotacaoMinimo.appendChild(h2CotacaoMinimo)
    let pCotacaoMinimo = document.createElement('p')
    pCotacaoMinimo.innerHTML = `R$: ${parseFloat(objeto.cotacao.cotacaoMinimo).toFixed(2)}`
    divCotacaoMinimo.appendChild(pCotacaoMinimo)
    return divCotacaoMinimo
}

function maximo(objeto){
    let divCotacaoMaximo = document.createElement('div')
    let h2CotacaoMaximo = document.createElement('h2')
    h2CotacaoMaximo.innerHTML = 'Cotação Venda Max.'
    divCotacaoMaximo.appendChild(h2CotacaoMaximo)
    let pCotacaoMaximo = document.createElement('p')
    pCotacaoMaximo.innerHTML = `R$: ${parseFloat(objeto.cotacao.cotacaoMaximo).toFixed(2)}`
    divCotacaoMaximo.appendChild(pCotacaoMaximo)
    return divCotacaoMaximo
}

function imagem(objeto){
    let divImagem = document.createElement('div')
    divImagem.classList.add('imagem')
    let frenteImagem = document.createElement('img')
    frenteImagem.src = `./img/${objeto.tipo.toLowerCase()}/${objeto.imagem_frente}`
    frenteImagem.alt = `${objeto.nome} Série: ${objeto.serie} País: ${objeto.pais}`
    divImagem.appendChild(frenteImagem)
    let versoImagem = document.createElement('img')
    versoImagem.src = `./img/${objeto.tipo.toLowerCase()}/${objeto.imagem_verso}`
    versoImagem.alt = `${objeto.nome} Série: ${objeto.serie} País: ${objeto.pais}`
    if(objeto.tipo == 'Moeda'){
        divImagem.classList.add('tamanho-imagem')
    }
    divImagem.appendChild(versoImagem)
    return divImagem
}

function cotacaoSaldo(objeto){
    let divCotacaoSaldo = document.createElement('div')
    let h2CotacaoSaldo = document.createElement('h2')
    h2CotacaoSaldo.innerHTML = 'Cotação Venda Med.'
    divCotacaoSaldo.appendChild(h2CotacaoSaldo)
    let pCotacaoSaldo = document.createElement('p')
    pCotacaoSaldo.innerHTML = `R$: ${parseFloat(( parseFloat(objeto.cotacao.cotacaoMinimo) + parseFloat(objeto.cotacao.cotacaoMaximo) ) / 2).toFixed(2)}`
    divCotacaoSaldo.appendChild(pCotacaoSaldo)
    return divCotacaoSaldo
}

function pacote(objeto){
    let divPacote = document.createElement('div')
    let h6Pacote = document.createElement('h1')
    h6Pacote.innerHTML = `Pacote - ${objeto.pacote}`
    divPacote.appendChild(h6Pacote)
    return divPacote
}   

function inicio(){
    imprimirSelect()
    selects()
    atualizar()
}

inicio()
