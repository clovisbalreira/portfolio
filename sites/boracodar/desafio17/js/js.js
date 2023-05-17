const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
let hoje = new Date()
let dia = hoje.getDate()
let mes = hoje.getMonth()
let ano = hoje.getFullYear()

function renderMes(mes){
    let output = ''
    output += `<section id="mes">`
    const thisMonth = mes
    
    for(let month of months){
        const active = thisMonth == month ? 'active' : ''
        output += `<div class="${active}" onClick='getMonth()'>${month}</div>`
    }
    output += `</section>`
    
    return output
}

function renderDia(dia,mes,ano){
    let output = ''
    output += `<section id="dia">`
    const firstDay = new Date(ano, mes, 1);
    for(let i = 0; i < firstDay.getDay(); i++){
        output += `<div></div>`
    }
    const thisMonth = months[mes]
    let dias = 0
    if(thisMonth == 'Jan' || thisMonth == 'Mar' || thisMonth == 'Mai' || thisMonth == 'Jul' || thisMonth == 'Ago' || thisMonth == 'Out' || thisMonth == 'Dez'){
        dias = 31
    }else if(thisMonth == 'Abr' || thisMonth == 'Jun' || thisMonth == 'Set' || thisMonth == 'Nov'){
        dias = 30
    }else{
        let year = ano
        if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
            dias = 29
        }else{
            dias = 28
        }
    }
    const thisDay = new Date(ano, mes, dia)
    for(let i = 1; i <= dias; i++){
        const thisDays = new Date(ano, mes, i)
        console.log(thisDays.getDay())
        const red = thisDays.getDay() == 0 ? 'red' : ''
        if(thisDays.getDay() == 0){
            console.log('red')
        }else{
            console.log('black')
        }
        const active = thisDay.getDate() == i ? 'active' : ''
        output += `<div style="color: ${red};" class="numero ${active}" onClick='getDay()'>${i}</div>`
    }

    output += `</section>`
    
    return output
}

function mostrar(dia,mes,ano){
    app.querySelector('main').innerHTML = renderMes(months[mes]) + renderDia(dia,mes,ano)
    app.querySelector('header span').innerHTML = ano
}

mostrar(dia,mes,ano)

function somarAno(operacao){
    let tag = document.querySelector('span')
    let anoInput = tag.textContent
    let calculoAno = 0
    if(operacao == 'somar'){
        calculoAno = parseInt(anoInput) + 1
    }else{
        calculoAno = parseInt(anoInput) - 1
    }
    tag.textContent = calculoAno
    ano = calculoAno
    mostrar(dia,mes,ano)
}

function getMonth(){   
    let meses = document.querySelectorAll('section#mes div')
    for(let i = 0; i < meses.length; i++){
        meses[i].addEventListener('click',() => {
            for(let k = 0; k < meses.length; k++){ 
                meses[k].classList.remove('active')
            }
            mes = i
            mostrar(dia,mes,ano)
        })
    }
}

function getDay(){   
    let day = document.querySelectorAll('section#dia div.numero')
    for(let i = 0; i < day.length; i++){
        day[i].addEventListener('click',() => {
            for(let k = 0; k < day.length; k++){ 
                day[k].classList.remove('active')
            }
            dia = i + 1
            mostrar(dia,mes,ano)
        })
    }
}