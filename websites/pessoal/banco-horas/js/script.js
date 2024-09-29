let horasBanco = [    
    { dia : '02-09-2024', entrada : '07:57', intervalo : { entrada : '12:04', saida : '13:04' }, saida : '16:19'},
    { dia : '03-09-2024', entrada : '07:53', intervalo : { entrada : '11:11', saida : '12:11' }, saida : '16:17'},
    { dia : '04-09-2024', entrada : '08:05', intervalo : { entrada : '12:35', saida : '13:33' }, saida : '16:19'},
    { dia : '05-09-2024', entrada : '07:57', intervalo : { entrada : '11:21', saida : '12:17' }, saida : '16:14'},
    { dia : '06-09-2024', entrada : '07:57', intervalo : { entrada : '11:59', saida : '12:59' }, saida : '16:16'},
    { dia : '09-09-2024', entrada : '07:58', intervalo : { entrada : '11:45', saida : '12:45' }, saida : '16:16'},
    { dia : '10-09-2024', entrada : '07:57', intervalo : { entrada : '11:43', saida : '12:43' }, saida : '16:17'},
    { dia : '11-09-2024', entrada : '08:03', intervalo : { entrada : '12:06', saida : '13:06' }, saida : '16:16'},
    { dia : '12-09-2024', entrada : '07:57', intervalo : { entrada : '11:45', saida : '12:45' }, saida : '16:15'},
    { dia : '13-09-2024', entrada : '08:00', intervalo : { entrada : '11:32', saida : '12:31' }, saida : '16:22'},
    { dia : '14-09-2024', entrada : '08:05', intervalo : { entrada : '11:52', saida : '12:51' }, saida : '16:14'},
    { dia : '16-09-2024', entrada : '07:57', intervalo : { entrada : '11:51', saida : '12:51' }, saida : '16:36'},
    { dia : '17-09-2024', entrada : '07:53', intervalo : { entrada : '11:17', saida : '12:15' }, saida : '16:26'},
    { dia : '18-09-2024', entrada : '08:34', intervalo : { entrada : '11:49', saida : '12:49' }, saida : '16:58'},
    { dia : '19-09-2024', entrada : '07:54', intervalo : { entrada : '12:32', saida : '13:36' }, saida : '16:20'},
]

let horasTrabalhada = [
    { dia : '02-09-2024', entrada : '07:57', intervalo : { entrada : '12:04', saida : '13:04' }, saida : '16:19'},
    { dia : '03-09-2024', entrada : '07:53', intervalo : { entrada : '11:11', saida : '12:11' }, saida : '16:25'},
    { dia : '04-09-2024', entrada : '08:05', intervalo : { entrada : '12:35', saida : '13:33' }, saida : '16:19'},
    { dia : '05-09-2024', entrada : '07:57', intervalo : { entrada : '11:21', saida : '12:17' }, saida : '16:39'},
    { dia : '06-09-2024', entrada : '07:57', intervalo : { entrada : '11:59', saida : '12:59' }, saida : '16:16'},
    { dia : '09-09-2024', entrada : '07:58', intervalo : { entrada : '11:58', saida : '12:45' }, saida : '16:16'},
    { dia : '10-09-2024', entrada : '07:57', intervalo : { entrada : '11:48', saida : '12:43' }, saida : '16:23'},
    { dia : '11-09-2024', entrada : '08:03', intervalo : { entrada : '12:06', saida : '13:06' }, saida : '16:16'},
    { dia : '12-09-2024', entrada : '07:57', intervalo : { entrada : '11:45', saida : '12:45' }, saida : '16:15'},
    { dia : '13-09-2024', entrada : '08:00', intervalo : { entrada : '11:32', saida : '12:31' }, saida : '16:22'},
    { dia : '14-09-2024', entrada : '08:05', intervalo : { entrada : '11:52', saida : '12:51' }, saida : '16:14'},
    { dia : '16-09-2024', entrada : '07:57', intervalo : { entrada : '11:51', saida : '12:51' }, saida : '16:36'},
    { dia : '17-09-2024', entrada : '07:53', intervalo : { entrada : '11:17', saida : '12:15' }, saida : '16:26'},
    { dia : '18-09-2024', entrada : '08:34', intervalo : { entrada : '11:49', saida : '12:49' }, saida : '16:58'},
    { dia : '19-09-2024', entrada : '07:54', intervalo : { entrada : '12:32', saida : '13:36' }, saida : '16:20'},
]

function somarHoras(horas){
    let total = 0
    horas.forEach( hora => {
        let diaHoras = horasDia(hora)
        total = somarTotalHoras(diaHoras, total)
    })
    return total
}

function somarTotalHoras(diaHoras, totalHoras){
    let horas = totalHoras.horas == undefined ? diaHoras.horas : totalHoras.horas + diaHoras.horas
    let minutos = totalHoras.minutos == undefined ? diaHoras.minutos : totalHoras.minutos + diaHoras.minutos
    if(minutos >= 60){
        horas += Math.floor(minutos / 60);
        minutos = minutos % 60;
    }
    return { horas, minutos }
}

function horasDia(hora){
    let entrada = separarDiaHora(hora.entrada)
    let saida = separarDiaHora(hora.saida)
    let intervaloEntrada = separarDiaHora(hora.intervalo.entrada)
    let intervaloSaida = separarDiaHora(hora.intervalo.saida)
    let minutosTrabalhados = (saida - entrada) - (intervaloSaida - intervaloEntrada) 
    const dia = hora.dia
    const horas = Math.floor(minutosTrabalhados / 60);
    const minutos = minutosTrabalhados % 60;
    return { dia, horas, minutos };
}

function separarDiaHora(horaString){
    let horaSeparada = horaString.split(":")
    return ( parseInt(horaSeparada[0]) * 60 ) + parseInt(horaSeparada[1])
}

function mostrarTabela(horas){
    let tables = document.querySelectorAll('table')
    tables.forEach((table, indice) => {
        let mes = '09'
        let ano = '2024'
        let tabelaFiltrada = horas[indice].filter( mesAno => {
             return mesAno.dia.includes(`${mes}-${ano}`)
            }
        )
        table.appendChild(criarHead(indice))
        table.appendChild(criarBody(tabelaFiltrada, indice)) 
        table.appendChild(criarFooter(somarHoras(tabelaFiltrada), indice)) 
    })
}

function criarHead(indice){
    let titulos = ['Dia', 'Entrada', 'Intervalo Entrada', 'Intervalo Saida', 'Saida', 'Horas']
    let thead = document.createElement('thead')
    let trTitulo = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = indice == 0 ? 'Horas Banco' : 'Horas Trabalhada'
    th.colSpan = titulos.length
    trTitulo.appendChild(th)
    thead.appendChild(trTitulo)
    let tr = document.createElement('tr')
    for( let i = 0; i < titulos.length; i++){
        let th = document.createElement('th')
        th.textContent = titulos[i]
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    return thead
}

function criarBody(horas, indice){
    let tbody = document.createElement('tbody')
    horas.forEach( hora => {
        let tr = document.createElement('tr')
        tr.appendChild(criarCelula(hora.dia))
        tr.appendChild(criarCelula(hora.entrada))
        tr.appendChild(criarCelula(hora.intervalo.entrada))
        tr.appendChild(criarCelula(hora.intervalo.saida))
        tr.appendChild(criarCelula(hora.saida))
        let horasDias = horasDia(hora)
        tr.appendChild(criarCelula(`${acrescentarZero(horasDias.horas)}:${acrescentarZero(horasDias.minutos)}`))
        if(indice == 0){
            tr.appendChild(adicionarimagem(hora.dia, 'banco'))
        }else{
            for(let i = 1; i < 3; i++){
                tr.appendChild(adicionarimagem(`${hora.dia}-${i}`, 'trabalhada'))
            }
        }
        tbody.appendChild(tr)
    })
    return tbody
}

function criarFooter(horas){
    let tfoot = document.createElement('tfoot')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = `Total Horas`
    th.colSpan = 5
    tr.appendChild(th)
    let td = document.createElement('td')
    td.textContent = `${acrescentarZero(horas.horas)}:${acrescentarZero(horas.minutos)}`
    tr.appendChild(td)
    tfoot.appendChild(tr)
    return tfoot
}

function adicionarimagem(imagem, pasta){
    let td = document.createElement('td')
    let img = document.createElement('img')
    img.src = `./img/${pasta}/${imagem}.jpeg`
    td.appendChild(img)
    return td
}

function acrescentarZero(numero){
    return numero < 10 ? `0${numero}` : numero
}

function criarCelula(dado){
    let td = document.createElement('td')
    td.innerHTML = dado
    return td
}

mostrarTabela([horasBanco, horasTrabalhada])
