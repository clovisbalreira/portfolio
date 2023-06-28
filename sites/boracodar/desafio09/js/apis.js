const pegarMoeda = async() => {
    const apiMoedaURL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json`
    const res = await fetch(apiMoedaURL)
    const data = await res.json()
    return data
}

const pegarCotacao = async(datas) => {
    let hoje = new Date()
    let agora = hoje
    let semanaAnterior = new Date(hoje.getTime() - 7 * 24 * 60 * 60 * 1000)
    const apiCotacaoURL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${datas}'&@dataInicial='${adicionarZero(semanaAnterior.getMonth() + 1)}-${adicionarZero(semanaAnterior.getDate())}-${semanaAnterior.getFullYear()}'&@dataFinalCotacao='${adicionarZero(agora.getMonth() + 1)}-${adicionarZero(hoje.getDate())}-${hoje.getFullYear()}'&$top=100&$format=json`
    const res = await fetch(apiCotacaoURL)
    const data = await res.json()
    return data
}

const contacaoMoeda = async (simbolo,soma) => {
    const moeda = await pegarMoeda()
    let cotacao = []
    for(let i = 0; i < moeda.value.length; i++){
        cotacao.push(await pegarCotacao(moeda.value[i].simbolo))
    }
    mostrarCotacao(moeda,cotacao,simbolo,soma)
}

function mostrarCotacao(moeda,data,simbolo,soma){
    let money_wrapper = document.querySelectorAll('.money-wrapper')
    money_wrapper[0].innerHTML = ''
    money_wrapper[1].innerHTML = ''
    let moedas = simbolo
    let codigoMoeda = [-1]
    for(let a = 0; a < moeda.value.length; a++){
        if(moeda.value[a].simbolo == moedas[0]){
            codigoMoeda[0] = a 
        }else if(moeda.value[a].simbolo == moedas[1]){
            codigoMoeda[1] = a 
        }
    }
    
    for(let k = 0; k < money_wrapper.length ; k++){  
        
        let simboloDinheiro = document.createElement('p')
        
        simboloDinheiro.innerHTML = Number(0).toLocaleString('pt-br', {style:'currency', currency: moedas[k]}).replace('0,00', '')  
        let real = 1
        let input = document.createElement('input')
        input.value = codigoMoeda[k] == -1 ? real.toFixed(2) : (data[codigoMoeda[k]].value[data[codigoMoeda[k]].value.length - 1].cotacaoVenda * soma).toFixed(2)
        if(codigoMoeda[k] != -1){
            soma = data[codigoMoeda[k]].value[data[codigoMoeda[k]].value.length - 1].cotacaoVenda 
        }
        input.setAttribute('type', 'number')
        input.setAttribute('step', '0.01') 
        input.classList.add('amount')
        
        let divDropdown = document.createElement('div')
        divDropdown.classList.add('dropdown') 
        
        let divSelected = document.createElement('div')
        divSelected.classList.add('selected') 
        divSelected.innerHTML = moedas[k]
        
        let span = document.createElement('span')
        span.classList.add('fi')
        span.classList.add(`fi-${moedas[k].slice(0,2).toLowerCase()}`) 
        span.classList.add('fis') 

        let ul = document.createElement('ul')

        for(let i = 0; i < moeda.value.length; i++){
            let li = document.createElement('li')
            li.innerHTML = moeda.value[i].simbolo
            li.setAttribute('onClick','trocarMoeda()')   
            let spanLi = document.createElement('span')    
            spanLi.classList.add('fi') 
            spanLi.classList.add(`fi-${moeda.value[i].simbolo.slice(0,2).toLowerCase()}`) 
            spanLi.classList.add('fis') 
            
            li.appendChild(spanLi)
            ul.appendChild(li)
        }
        divSelected.appendChild(span)
        divDropdown.appendChild(divSelected)
        divDropdown.appendChild(ul)
        money_wrapper[k].appendChild(simboloDinheiro)
        money_wrapper[k].appendChild(input)
        money_wrapper[k].appendChild(divDropdown)
    }
}
