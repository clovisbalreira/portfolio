export function listaCampeonatos(campeonatos){
    criarDivTodosCampeonatos(campeonatos)
    mostrarTabelaCampeonato(campeonatos)
}

function criarDivTodosCampeonatos(campeonatos){
    let div = document.getElementById('todos-campeonatos')
    div.innerHTML = ''
    campeonatos.forEach(campeonato => {
        let divLista = document.createElement('div')
        let p = document.createElement('p')
        divLista.classList.add('classe-campeonato')
        p.textContent = campeonato.nome
        divLista.appendChild(p)
        let input = document.createElement('input')
        input.type = 'checkbox'
        divLista.appendChild(input)
        div.appendChild(divLista)   
    });
}

function mostrarTabelaCampeonato(campeonatos){
    let classesCampeonatos = document.querySelectorAll('.classe-campeonato')
    let divCampeonato = document.getElementById('tabela-campeonato')
    classesCampeonatos.forEach( classe => {
        classe.addEventListener('click', () => {
            divCampeonato.innerHTML = ''
            divCampeonato.classList.add('tabela-campeonato')
            let campeonatoSelecionado = campeonatos.filter( campeonato => campeonato.nome == classe.textContent)
            let table = document.createElement('table')
            table.style.backgroundColor = campeonatoSelecionado[0].cor
            table.appendChild(criarTag('caption', campeonatoSelecionado[0].nome, 0))          
            table.appendChild(criarThead())            
            table.appendChild(criarTbody(campeonatoSelecionado[0]))
            divCampeonato.appendChild(table)
        })
    })   
}

function criarTag(tag, texto, numero = 0){
    let tagNome = document.createElement(tag)
    tagNome.textContent = texto
    if(numero > 1 ) tagNome.rowSpan = numero
    return tagNome
}

function criarThead(){
    let tHead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTag('th', 'Fase'))
    tr.appendChild(criarTag('th', 'Data'))
    tHead.appendChild(tr)
    return tHead
}

function criarTbody(campeonatos){
    let tBody = document.createElement('tbody')
    campeonatos.datas.forEach( fase => {
        fase.datas.forEach( (data, index) => {
            let tr = document.createElement('tr')
            if(index === 0 ){
                tr.style.borderBlockStart = '1px solid black'
                tr.appendChild(criarTag('td', fase.nome, fase.datas.length))
            } 
            tr.appendChild(criarTag('td', `${adicionarZero(data.getDate())}/${adicionarZero(data.getMonth() + 1)}/${data.getFullYear()}`, 0))
            tBody.appendChild(tr)
        })
    })
    return tBody
}

function adicionarZero(numero){
    return numero < 10 ? '0' + numero : numero
}