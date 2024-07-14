let data = new Date()
let atividades = []

const formatador = (data) => {
    return {
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd')
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}

const criarItemDeAtividade = (atividades) => {
    const section = document.querySelector('section')
    section.innerHTML = ''
    for(let atividade of atividades){
        const div = document.createElement('div')
        div.classList.add('card-bg')
        adicionarInput(div, atividade)
        adicionarSpan(div, atividade)
        adicionarTime(div, atividade, 'short')
        adicionarTime(div, atividade, 'full')
        section.appendChild(div)
    }
}

const adicionarIcone = (nome, classe) => {
    const span = document.createElement('span')
    span.classList.add('material-symbols-outlined')
    span.classList.add(classe)
    span.textContent = nome
    return span
}

const adicionarInput = (div, atividade) => {
    div.appendChild(adicionarIcone('download_done', 'active'))
    div.appendChild(adicionarIcone('close_small', 'inactive'))
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('onchange', 'concluirAtividade(event)')
    input.value = atividade.data
    input.checked = atividade.finalizada
    div.appendChild(input)
}    

const adicionarSpan = (div, atividade) => {
    const span = document.createElement('span')
    span.textContent = atividade.nome
    div.appendChild(span)
}    

const adicionarTime = (div, atividade, classe) => {
    const time = document.createElement('time')
    time.classList.add(classe)
    const formatar = formatador(atividade.data)
    let frase = classe == 'short' ? ` ${formatar.dia.semana.curto}. ${formatar.dia.numerico} \n ${formatar.hora}h` : ` ${formatar.dia.semana.longo}, dia ${formatar.dia.numerico} de ${formatar.mes} às ${formatar.hora}h` 
    time.textContent = frase
    div.appendChild(time)
}    

const atualizarListaDeAtividades = (atividades) => {
    const section = document.querySelector('section')
    if(atividades.length == 0){
        const p = document.createElement('p')
        p.textContent = 'Nenhuma atividade cadastrada'
        section.appendChild(p)
        return
    }
    criarItemDeAtividade(atividades)
}

const erro = () => {
    const span = document.querySelector('#erro')
    span.textContent = 'Dia/Hora não disponivel'
    span.classList.add('erro')
    setTimeout(() => {
        span.textContent = ''
        span.classList.remove('erro')
    }, 5000)
}

const salvarAtividade = (event) => {
    event.preventDefault()
    const dadosDoFormulario = new FormData(event.target)
    const nome = dadosDoFormulario.get('atividade')
    const data = `${dadosDoFormulario.get('dia')} ${dadosDoFormulario.get('hora')}`
    
    const novaAtividade = {
        nome,
        data,
        finalizada: false
    }

    const atividaeExiste = atividades.find((atividade) => {
        return atividade.data == novaAtividade.data
    })

    
    if(atividaeExiste){
        erro()
        return
    }
    
    const input = document.querySelector('input')
    input.value = ''
    
    atividades = [...atividades, novaAtividade]
    atualizarListaDeAtividades(atividades)
}

const criarDiasSelecao = () => {
    const data = new Date()
    const dias = []

    for(let i = 1; i < 7; i++){
        dias.push(`${data.getFullYear()}-${data.getMonth()+1}-${data.getDate() + i}`)
    }

    const select = document.querySelector('select[name="dia"')
    
    for(let dia of dias){
        const diaFormatado = formatador(dia)
        const option = document.createElement('option')
        option.value = dia
        option.text = `${diaFormatado.dia.numerico} de ${diaFormatado.mes}`
        select.appendChild(option)
    }

}

const adicionarZero = (numero) => {
    return String(numero).padStart(2, '0')
} 

const criarHorasSelecao = () => {
    const select = document.querySelector('select[name="hora"')
    
    for(let h = 6; h < 23; h++){
        for(let m = 0; m < 60; m+=30){
            const option = document.createElement('option')
            option.value = `${adicionarZero(h)}:${adicionarZero(m)}`
            option.text = `${adicionarZero(h)}:${adicionarZero(m)}`
            select.appendChild(option)
        }
    }
}

const concluirAtividade = (event) => {
    const input = event.target
    const dataDesteInput = input.value
    const atividade = atividades.find((atividade) => {
        return atividade.data == dataDesteInput
    })
    
    if(!atividade){
        return
    }
    
    atividade.finalizada = !atividade.finalizada
}

criarHorasSelecao()
criarDiasSelecao()

atualizarListaDeAtividades(atividades)
