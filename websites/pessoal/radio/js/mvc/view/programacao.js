const mostrarProgramacao = (programacao) => {
    let divProgramacao = document.getElementById('programacao')
    divProgramacao.innerHTML = ''
    programacao.dia.forEach( dia => {
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tr = document.createElement('tr')
        let th = document.createElement('th')
        th.textContent = dia.nome 
        th.colSpan = 2
        tr.appendChild(th)
        thead.appendChild(tr)
        table.appendChild(thead)
        divProgramacao.appendChild(table)
        let tbody = document.createElement('tbody')
        dia.programas.forEach( programa => {
            let trTbody = document.createElement('tr')
            let tdHora = document.createElement('td')
            tdHora.textContent = parseInt(programa.horaInicio.charAt(3), 10) || parseInt(programa.horaInicio.charAt(4), 10) ? `${programa.horaInicio}h` : `${programa.horaInicio.slice(0, 2)}h`
            trTbody.appendChild(tdHora)
            let tdPrograma = document.createElement('td')
            tdPrograma.textContent = programa.nome
            trTbody.appendChild(tdPrograma)
            tbody.appendChild(trTbody)
            table.appendChild(tbody)
        })
    })
}