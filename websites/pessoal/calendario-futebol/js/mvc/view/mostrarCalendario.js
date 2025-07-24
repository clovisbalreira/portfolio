import { mouseEnterLeaveCalendario, mouseEnterTabela } from "../../utils/mouseLeave.js"

export function mostrarCalendario(campeonatos, mes, ano) {
    console.log(mes)
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let mesAnterior = ''
    let divCalendario = document.getElementById('calendario') 
    divCalendario.innerHTML = ''
    let divMes = ''
    let divDiasMes = ''
    let divDia = ''
    for( let i = 0; i < 365; i++){
        let novaData = atualizarData(new Date(`${mes}/01/${ano}`), i)
        if(novaData.getMonth() !== mesAnterior){
            divMes = document.createElement('div')
            divMes.classList.add('mes')
            let h2 = document.createElement('h2')
            h2.innerHTML = meses[novaData.getMonth()]
            divMes.appendChild(h2)
            divDiasMes = document.createElement('div')
            divDiasMes.classList.add('dias-mes')
            for(let j = 0; j < 7; j++){
                if(j < novaData.getDay()){
                    divDiasMes.appendChild(mostrarDias(divDia, ``, ``, [], ''))
                }
            }
        }
        divDiasMes.appendChild(mostrarDias(divDia, `dia-${novaData.getDay()}`, novaData.getDate() < 10 ? `0${novaData.getDate()}` : novaData.getDate(), campeonatos, novaData))
        divMes.appendChild(divDiasMes)

        mesAnterior = novaData.getMonth()
        divCalendario.appendChild(divMes)        
    }
    mouseEnterLeaveCalendario()
    mouseEnterTabela()
}

function mostrarDias(divDia, classe, dia, campeonatos, novaData){
    divDia = document.createElement('div')
    if(classe !== ''){
        divDia.classList.add(classe)
    }
    let p = document.createElement('p')
    p.textContent = dia
    divDia.appendChild(p)   
    return mostrarCampeonato(campeonatos, novaData, divDia)
}

function mostrarCampeonato(campeonatos, novaData, divDia){
    let divCampeonato = ''
    let contem = true
    let coresFundo = []
    campeonatos.forEach(campeonato => {
        campeonato.datas.forEach( (datas, index) => {
            if(datas.datas.some(d => d.toISOString().split('T')[0] === novaData.toISOString().split('T')[0])){
                if(contem){
                    divCampeonato = document.createElement('div')
                    divCampeonato.classList.add('campeonato')
                    contem = false
                }
                let p = document.createElement('p')
                p.innerHTML = `${campeonato.nome} - ${campeonato.datas[index].nome}`
                p.style.color = datas.cor
                divCampeonato.appendChild(p)
                if(!coresFundo.includes(datas.cor)) coresFundo.push(datas.cor)
                divDia = cores(divDia, coresFundo)
                divDia.appendChild(divCampeonato)
            }
        })
    })
    return divDia
}

function atualizarData(data, i){
    let novaData  = new Date(data)
    novaData.setDate(novaData.getDate() + i)
    return novaData
}

function cores(divDia, cores){
    if(cores.length === 1){
        divDia.style.backgroundColor = cores[0]
    }else if(cores.length === 2){
        divDia.style.background = `linear-gradient(to right, ${cores[0]}, ${cores[1]})`
    }else if(cores.length === 3){
        divDia.style.background = `linear-gradient(to right, ${cores[0]}, ${cores[1]}, ${cores[2]})`
    }else if(cores.length === 4){
        divDia.style.background = `linear-gradient(to right, ${cores[0]}, ${cores[1]}, ${cores[2]}, ${cores[3]})`
    }
    return divDia
}