let real = 1.00
let estrageiro = 0.00
let inverter = false
let middle = document.querySelector('.middle img')

middle.addEventListener('click', () => {
    let valoresSimbolo = document.querySelectorAll('p')
    let simbolo = [valoresSimbolo[0].innerHTML, valoresSimbolo[1].innerHTML]
    valoresSimbolo[0].innerHTML = simbolo[1]
    valoresSimbolo[1].innerHTML = simbolo[0]    

    let valoresInput = document.querySelectorAll('.amount')
    let valores = [valoresInput[0].value, valoresInput[1].value]
    valoresInput[0].value = valores[1]
    valoresInput[1].value = valores[0]    
    let dropdowns = document.querySelectorAll('.dropdown')
    pais_0 = dropdowns[0].innerHTML
    pais_1 = dropdowns[1].innerHTML
    dropdowns[0].innerHTML = pais_1
    dropdowns[1].innerHTML = pais_0
})

function trocarMoeda(){
    inverter = true
    let listas = document.querySelectorAll('.dropdown ul')
    let valoresSelect = document.querySelectorAll('.selected')
    let simbolo = [valoresSelect[0].innerHTML.slice(0,3),valoresSelect[1].innerHTML.slice(0,3)]
    listas.forEach((lista,index) => {
        let colunas = lista.querySelectorAll('li')
        colunas.forEach( coluna => {
            coluna.addEventListener('click', () => {
                valoresSelect[index].innerHTML = coluna.innerHTML
                if(simbolo[1] != valoresSelect[index].innerHTML.slice(0,3)){
                    simbolo[1] = valoresSelect[index].innerHTML.slice(0,3)
                }else{
                    simbolo[0] = valoresSelect[index].innerHTML.slice(0,3)
                }
                contacaoMoeda(simbolo,1)
            })
        })
    })    
}

function adicionarZero(variavel){
    if(variavel < 10){
        return '0' + variavel       
    }else{
        return variavel
    }
}

function pegarCodigoMoeda(codigo, moeda, moedas){
    for(let a = 0; a < moeda.value.length; a++){
        if(moeda.value[a].simbolo == moedas[0]){
            codigo.push(a) 
        }else if(moeda.value[a].simbolo == moedas[1]){
            codigo.push(a) 
        }
    }
    return codigo
}

function criarInput(codigoMoeda, k, input, data){
    if(codigoMoeda[k] == -1){
        input.disabled = false
        input.classList.add('brasil')
    }else{
        estrageiro = data[codigoMoeda[k]].value[data[codigoMoeda[k]].value.length - 1].cotacaoVenda  
        input.disabled = true
        input.classList.remove('brasil')
        soma = data[codigoMoeda[k]].value[data[codigoMoeda[k]].value.length - 1].cotacaoVenda 
    }
    input.setAttribute('type', 'number')
    input.setAttribute('step', '0.01') 
    input.classList.add('amount')
    return input
}

function colocarBandeira(ul, moeda){
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
    return ul
}

function calcularConversao(){
    bandeiraBrasil = document.querySelectorAll('.selected')
    inputs = document.querySelectorAll('input')
    if(bandeiraBrasil[0].textContent == 'BRL'){
        inputs[1].value = parseFloat(inputs[0].value / estrageiro).toFixed(2).replace('.',',')
        real = parseFloat(inputs[0].value).toFixed(2).replace('.',',')
    }else{
        inputs[1].value = parseFloat(estrageiro * inputs[0].value).toFixed(2).replace('.',',')
        real = parseFloat(inputs[0].value).toFixed(2).replace('.',',')
    }
}

function colocarValoresMoedas(){
    let inputs = document.querySelectorAll('input')
    inputs[0].value = parseFloat(estrageiro).toFixed(2).replace('.',',')
    inputs[1].value = parseFloat(real).toFixed(2).replace('.',',')
}

function mostrarCotacao(moeda,data,simbolo){
    let money_wrapper = document.querySelectorAll('.money-wrapper')
    money_wrapper[0].innerHTML = ''
    money_wrapper[1].innerHTML = ''
    let moedas = simbolo
    let codigoMoeda = [-1]
    codigoMoeda = pegarCodigoMoeda(codigoMoeda, moeda, moedas)
    criarGrafico(data, codigoMoeda)
    //moedas.slice().reverse()
    //codigoMoeda.reverse()
    for(let k = 0; k < money_wrapper.length ; k++){  
        let simboloDinheiro = document.createElement('p')
        simboloDinheiro.innerHTML = Number(0).toLocaleString('pt-br', {style:'currency', currency: moedas[k]}).replace('0,00', '')  
        
        let input = document.createElement('input')
        if(k == 0){
            input.addEventListener('input', calcularConversao)
        }
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
        
        divSelected.appendChild(span)
        divDropdown.appendChild(divSelected)
        if(moedas[k] != 'BRL'){
            divDropdown.appendChild(colocarBandeira(ul, moeda))
        }
        money_wrapper[k].appendChild(simboloDinheiro)
        money_wrapper[k].appendChild(criarInput(codigoMoeda, k, input, data))
       money_wrapper[k].appendChild(divDropdown)
    }
    colocarValoresMoedas()    
}

function criarGrafico(data, codigoMoeda){
    let pais = Math.max(...codigoMoeda)
    let dias = data[pais].value.length

    datasCotacao = []
    for(let i = 1; i < 8; i++){
        datasCotacao.push({
            x: new Date(data[pais].value[dias - i].dataHoraCotacao).getTime(),
            y: parseFloat(data[pais].value[dias - i].cotacaoVenda).toFixed(2),
        })
    }
    let maiorCotacao = datasCotacao.reduce((max, atual) => atual > max ? atual : max, datasCotacao[0])
    const options = {
    series: [
        {
        name: "cambio",
        data: datasCotacao,
        },
    ],
    chart: {
        height: 350,
        type: "area",
        toolbar: {
        show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    yaxis: {
        min: parseInt(maiorCotacao.y),
        tickAmount: parseInt(maiorCotacao.y),
        labels: {
        formatter: (value) => {
            return value.toFixed(1).replace('.', ',')
        },
        },
    },
    xaxis: {
        labels: {
        show: false,
        },
        tooltip: {
        enabled: false,
        },
        axisTicks: {
        show: false,
        },
    },
    fill: {
        gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
        },
    },
    colors: ["#7C3AED"],
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div class="tooltip">
        <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
        <span>${new Date(
        w.globals.seriesX[seriesIndex][dataPointIndex]
        ).toLocaleDateString("pt-BR", {
        weekday: "short",
        month: "short",
        day: "numeric",
    })}</span>
        </div>`
        },
    },
    }

    const chart = new ApexCharts(document.querySelector("#chart"), options)
    chart.render()
}