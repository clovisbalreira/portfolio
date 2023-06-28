let nps = Math.random() * 100
let npsColor = ''
let npsClasse1 = ''
let npsClasse2 = ''
if( nps >= 70){
    npsColor = '#81F8B8'
    npsClasse1 = 'ph-fill'
    npsClasse2 = 'ph-smiley'
}else if(nps >= 40){
    npsColor = 'yellow'
    npsClasse1 = 'ph-fill'
    npsClasse2 = 'ph-smiley-meh'
}else{
    npsColor = 'red'
    npsClasse1 = 'ph-fill'
    npsClasse2 = 'ph-smiley-sad'
}

let icons = document.querySelector('.nps')
icons.querySelector('.middle').style.color = npsColor
icons.querySelector('.middle i').classList.add(npsClasse1)
icons.querySelector('.middle i').classList.add(npsClasse2)
icons.querySelector('.bottom span:nth-child(2)').innerHTML = parseInt(nps)

function grafico(classe){
    let variavel = Math.random() * 100
    document.querySelector(`.${classe} .content h3`).innerHTML = `${parseInt(variavel)}%` 
    document.querySelector(`.${classe} .bottom .item:nth-child(2) span:nth-child(2)`).innerHTML = classe == 'sell' ? `${parseInt(variavel)}%`: `R$ ${parseInt(variavel)}K`
    document.querySelector(`.${classe} .middle svg`).style.setProperty("--percentage", parseInt(variavel))
    if(classe == 'target'){
        let esperado = Math.random() * 100
        document.querySelector(`.${classe} .bottom .item:nth-child(1) span:nth-child(2)`).innerHTML = `R$ ${parseInt(esperado)}K`
    }
}

grafico('sell')
grafico('target')

let vendasSemana = [
    {dia: 'Domingo', diaCodigo: 'Dom', vendas : `${(Math.random() * 18).toFixed(2)}rem`},
    {dia: 'Segunda-feira', diaCodigo: 'Seg', vendas : `${(Math.random() * 18).toFixed(2)}rem`},
    {dia: 'Terça-feira', diaCodigo: 'Ter', vendas : `${(Math.random() * 18).toFixed(2)}rem`},
    {dia: 'Quarta-feira', diaCodigo: 'Qua', vendas : `${(Math.random() * 18).toFixed(2)}rem`},
    {dia: 'Quinta-feira', diaCodigo: 'Qui', vendas : `${(Math.random() * 18).toFixed(2)}rem`},
    {dia: 'Sexta-feira', diaCodigo: 'Sex', vendas : `${(Math.random() * 18).toFixed(2)}rem`},
    {dia: 'Sabado', diaCodigo: 'Sab', vendas : `${(Math.random() * 18).toFixed(2)}rem`}
]
let maior = 0
let maiorDia = ''
let menor = 100
let menorDia = ''

vendasSemana.forEach(vendas => {
    if(maior < parseFloat(vendas.vendas.replace('rem',''))){
        maior = parseFloat(vendas.vendas.replace('rem',''))
        maiorDia = vendas.dia
    }
    if(menor > parseFloat(vendas.vendas.replace('rem',''))){
        menor = parseFloat(vendas.vendas.replace('rem',''))
        menorDia = vendas.dia
    }
})

document.querySelector('.wrapper .left .most-sell p').innerHTML = maiorDia 
document.querySelector('.wrapper .left .less-sell p').innerHTML = menorDia

let div = document.querySelectorAll('.wrapper .right .bars .bar-wrapper')
for(let i = 0; i < div.length; i++){
    div[i].querySelector('div').style.setProperty("--height", vendasSemana[i].vendas )
    div[i].querySelector('span').innerHTML = vendasSemana[i].diaCodigo
}