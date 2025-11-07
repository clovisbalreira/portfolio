import { styleLei } from "../../utils/styleLei.js";
import { atualizarPagina } from "../../utils/atuailizarPagina.js";

export function estatistica(escolhaUsuario){
    atualizarPagina()
    let sectionLeis = document.getElementById('leis');
    styleLei(sectionLeis, 'rgba(0, 0, 0, 0.089)', '0rem', '0rem')
    let combinacoes = criarCombinacoesDeputados(escolhaUsuario)
    let section = document.getElementById('estatisticas')
    section.appendChild(menuEstatisticas( escolhaUsuario ))
    let divCorpo = document.createElement('div')
    divCorpo.id = 'corpo'
    escolhaUsuario.leis.forEach( (lei, index) => {
        let id = lei.id
        let idSelecionado = 0
        if(index == 0 ) idSelecionado = lei.id
        let votoUsuario = lei.votosUsuario
        divCorpo.appendChild(mostrarEstatistica(idSelecionado, votoUsuario, lei, id, combinacoes, escolhaUsuario)) 
    }) 
    mostrarConbinacoes(combinacoes, escolhaUsuario)
    section.appendChild(divCorpo)
}

function menuEstatisticas( escolhaUsuario ){
    let div = document.createElement('div')
    div.id = 'menu-estatisticas'
    escolhaUsuario.leis.forEach( (lei, index) => {
        let id = lei.id
        let p = document.createElement('p')
        p.textContent = id
        if(index == 0 ) p.classList.add('estatisticas-selecionado')
        div.appendChild(p)
    }) 
    return div
}

function mostrarEstatistica(idSelecionado, votoUsuario, lei, id, combinacoes, escolhaUsuario){
    let div = document.createElement('div')
    div.id = id
    div.classList.add('corpo-estatisticas')
    id == idSelecionado ? div.classList.add('flex') : div.classList.add('none')
    div.appendChild(mostrarVotos(votoUsuario, lei))
    div.appendChild(mostrarVotosDeputados(votoUsuario, combinacoes, escolhaUsuario.deputados, id))
    div.appendChild(mostrarVotosPartidos(votoUsuario, escolhaUsuario.partidos, id))
    div.appendChild(mostrarVotosEstado(votoUsuario, escolhaUsuario.estado, id))
    mudarDivEstatisticas()
    return div
}

function mostrarConbinacoes(combinacoes, escolhaUsuario){
    let section = document.getElementById('combinacoes')
    section.style.display = 'flex'
    let div = document.createElement('div')
    div.appendChild(mostrarCombinadoDeputados(combinacoes))
    div.appendChild(mostrarCombinadoPartidos(escolhaUsuario.partidos))
    div.appendChild(mostrarCombinadoEstado(escolhaUsuario.estado))
    section.appendChild(div)
}

function criarCombinacoesDeputados(escolhaUsuario){
    let deputados = []
    escolhaUsuario.deputados.forEach( deputado => {
        deputados.push({deputado: deputado, combinacao: 0, porcentagem: 0, totalLeis: escolhaUsuario.leis.length})  
    })
    return deputados
}

function mostrarVotos(votoUsuario, lei){
    let votosSim = lei.votosSim
    let votosNao = lei.votosNao
    let votosAbstencao = lei.votosAbstencao
    let totalVotos = votosSim + votosNao + votosAbstencao 
    let votosSimPorcentagem =  votosSim / totalVotos * 100
    let votosNaoPorcentagem = votosNao / totalVotos * 100
    let votosAbstencaoPorcentagem = votosAbstencao / totalVotos * 100
    let table = document.createElement('table')
    table.id = 'votos'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Descriçao:', 1))
    tr.appendChild(criarTd(lei.descricao, 1))
    thead.appendChild(tr)
    lei.proposicoesAfetadas.forEach( (leis, index) => {
        tr = document.createElement('tr')
        if(index == 0) tr.appendChild(criarTh('Proposições:', lei.proposicoesAfetadas.length))
        tr.appendChild(criarTd(leis, 1))
        thead.appendChild(tr)
    })
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    tbody.appendChild(criarTr('Voto Usuario:', `${votoUsuario} ( ${votoUsuario == 'Sim' ? votosSimPorcentagem.toFixed(2) : votosNaoPorcentagem.toFixed(2)}% )`))
    tbody.appendChild(criarTr('Total votos deputados:', totalVotos))
    tbody.appendChild(criarTr('Total votos deputados sim:', `${votosSim} ( ${votosSimPorcentagem.toFixed(2)}% )`))
    tbody.appendChild(criarTr('Total votos deputados não:', `${votosNao} ( ${votosNaoPorcentagem.toFixed(2)}% )`))
    tbody.appendChild(criarTr('Total votos deputados Abstenção:', `${votosAbstencao} ( ${votosAbstencaoPorcentagem.toFixed(2)}% )`))
    table.appendChild(tbody)
    return table
}

function mostrarVotosDeputados(votoUsuario, deputados, arrays, id){
    let table = document.createElement('table')
    table.id = 'votos-deputados'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Votos Deputados Escolhidos', 1, 4))
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')   
    tr = document.createElement('tr')
    tr.appendChild(criarTh(`Voto Usuario - ${votoUsuario}`, 1, 4))
    tbody.appendChild(tr)
    arrays.forEach( array => {
        let contem = true
        array.leis.forEach( lei => {
            if(lei.id == id && contem){
                tbody.appendChild(criarTr4td('Deputado:', array.nome, 'Voto:',  lei.votos.tipoVoto))
                contem = false
                deputados.forEach( deputado => {
                    if(deputado.deputado.id == array.id){
                        if(votoUsuario == lei.votos.tipoVoto){
                            deputado.combinacao ++
                            deputado.porcentagem = deputado.combinacao / deputado.totalLeis * 100
                        }
                    }
                })
            } 
        })
    }) 
    table.appendChild(tbody)
    return table
} 

function mostrarVotosPartidos(votoUsuario, arrays, id){
    let table = document.createElement('table')
    table.id = 'votos-partidos'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Votos Partidos Escolhidos', 1, 4))
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    arrays.forEach( array => {
        array.leis.forEach( lei => {
            if(lei.lei.id == id){ 
                let votosSim = lei.votosSim
                let votosNao = lei.votosNao
                let votosAbstencao = lei.votosAbstencao
                let votosCombinacao = lei.lei.votosUsuario == 'Sim' ? lei.votosSim : lei.votosNao
                let totalVotos = votosSim + votosNao + votosAbstencao 
                let votosSimPorcentagem =  votosSim / totalVotos * 100
                let votosNaoPorcentagem = votosNao / totalVotos * 100
                let votosAbstencaoPorcentagem = votosAbstencao / totalVotos * 100
                let votosCombinacaoPorcentagem = votosCombinacao / totalVotos * 100
                tr = document.createElement('tr')
                tr.appendChild(criarTh(` ${array.nome} - ( ${array.sigla} )`, 1, 4))
                tbody.appendChild(tr)
                tbody.appendChild(criarTr4td('Voto Usuario:', `${votoUsuario} - ${votosCombinacao} ( ${votosCombinacaoPorcentagem.toFixed(2)}% )`, 'Voto sim:', `${votosSim} ( ${votosSimPorcentagem.toFixed(2)}% )`))
                tbody.appendChild(criarTr4td('Voto não:', `${votosNao} ( ${votosNaoPorcentagem.toFixed(2)}% )`, 'Voto abstenção:', `${votosAbstencao} ( ${votosAbstencaoPorcentagem.toFixed(2)}% )`))
            }
        }) 
    }) 
    table.appendChild(tbody)
    return table
} 

function mostrarVotosEstado(votoUsuario, arrays, id){
    let table = document.createElement('table')
    table.id = 'votos-estado'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Votos Estado Escolhido', 1, 4))
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    arrays.leis.forEach( lei => {
        if(lei.lei.id == id){ 
            let votosSim = lei.votosSim
            let votosNao = lei.votosNao
            let votosAbstencao = lei.votosAbstencao
            let votosCombinacao = lei.lei.votosUsuario == 'Sim' ? lei.votosSim : lei.votosNao
            let totalVotos = votosSim + votosNao + votosAbstencao 
            let votosSimPorcentagem =  votosSim / totalVotos * 100
            let votosNaoPorcentagem = votosNao / totalVotos * 100
            let votosAbstencaoPorcentagem = votosAbstencao / totalVotos * 100
            let votosCombinacaoPorcentagem = votosCombinacao / totalVotos * 100
            tr = document.createElement('tr')
            tr.appendChild(criarTh(` ${arrays.nome} - ( ${arrays.sigla} )`, 1, 4))
            tbody.appendChild(tr)
            tbody.appendChild(criarTr4td('Voto Usuario:', `${votoUsuario} - ${votosCombinacao} ( ${votosCombinacaoPorcentagem.toFixed(2)}% )`, 'Voto sim:', `${votosSim} ( ${votosSimPorcentagem.toFixed(2)}% )`))
            tbody.appendChild(criarTr4td('Voto não:', `${votosNao} ( ${votosNaoPorcentagem.toFixed(2)}% )`, 'Voto abstenção:', `${votosAbstencao} ( ${votosAbstencaoPorcentagem.toFixed(2)}% )`))
        }
    }) 
    table.appendChild(tbody)
    return table
} 

function mostrarCombinadoDeputados(arrays){
    let table = document.createElement('table')
    table.id = 'votos-combinado-deputado'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Votos combinado deputado', 1, 4))
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    arrays.forEach( array => {
        tr = document.createElement('tr')
        tr.appendChild(criarTh(`${array.deputado.nome} - Combinação  ${array.combinacao} voto${array.combinacao == 1 ? '' : 's'} ( ${array.porcentagem.toFixed(2)}% )`, 1, 6))
        tbody.appendChild(tr)
        tbody.appendChild(criarTr4td('Partido:', array.deputado.partido,'Estado:', array.deputado.estado))
        tbody.appendChild(criarTr4td('Total votos', array.totalLeis, `Combinação`, `${array.combinacao} voto${array.combinacao == 1 ? '' : 's'} ( ${(array.combinacao / array.totalLeis * 100).toFixed(2)}% )`))
    })
    table.appendChild(tbody)
    return table
}

function mostrarCombinadoPartidos(arrays){
    let table = document.createElement('table')
    table.id = 'votos-combinado-partido'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Votos combinado partidos', 1, 4))
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    arrays.forEach( partido => {
        let total = partido.leis.reduce( (total, lei) => {
            let voto = 0
            voto += lei.votosSim
            voto += lei.votosNao
            voto += lei.votosAbstencao
            return total += voto
        }, 0)
        tr = document.createElement('tr')
        tr.appendChild(criarTh(`${partido.nome} ( ${partido.sigla} )`, 1, 6))
        tbody.appendChild(tr)
        
        tbody.appendChild(criarTr4td('Total votos', total, `Combinação`, `${partido.combinacao} voto${partido.combinacao == 1 ? '' : 's'} ( ${(partido.combinacao / total * 100).toFixed(2)}% )`))
    })
    table.appendChild(tbody)
    return table
}

function mostrarCombinadoEstado(arrays){
    let table = document.createElement('table')
    table.id = 'votos-combinado-estado'
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    tr.appendChild(criarTh('Votos combinado estado', 1, 4))
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement('tbody')
    let total = arrays.leis.reduce( (total, lei) => {
        let voto = 0
        voto += lei.votosSim
        voto += lei.votosNao
        voto += lei.votosAbstencao
        return total += voto
    }, 0)
    tr = document.createElement('tr')
    tr.appendChild(criarTh(`${arrays.nome} ( ${arrays.sigla} )`, 1, 4))
    tbody.appendChild(tr)
    tbody.appendChild(criarTr4td('Total votos', total, `Combinação`, `${arrays.combinacao} voto${arrays.combinacao == 1 ? '' : 's'} ( ${(arrays.combinacao / total * 100).toFixed(2)}% )`))
    table.appendChild(tbody)
    return table
}

function mudarDivEstatisticas(){
    let titulos = document.querySelectorAll('#menu-estatisticas > p')
    titulos.forEach( titulo => {
        titulo.addEventListener('click', (e) => {
            titulos.forEach( apagar => apagar.classList.remove('estatisticas-selecionado'))
            titulo.classList.add('estatisticas-selecionado')
            let divCorpo = document.querySelectorAll('.corpo-estatisticas')
            divCorpo.forEach( corpo => {
                if(corpo.classList.contains('flex')){
                    corpo.classList.remove('flex')
                    corpo.classList.add('none')
                }
                if(corpo.id == titulo.textContent){ 
                    corpo.classList.remove('none')
                    corpo.classList.add('flex')
                }
            })
        })
    })
}

function criarTh(texto, row, col){
    let th = document.createElement('th')
    th.textContent = texto
    th.rowSpan = row
    th.colSpan = col
    return th
}

function criarTd(texto, col){
    let td = document.createElement('td')
    td.textContent = texto
    td.colSpan = col
    return td
}

function criarTr(titulo, texto){
    let tr = document.createElement('tr')
    tr.appendChild(criarTd(titulo, 1))
    tr.appendChild(criarTd(texto, 1))
    return tr
}

function criarTr4td(titulo, texto, voto, votoDeputado){
    let tr = document.createElement('tr')
    tr.appendChild(criarTd(titulo, 1))
    tr.appendChild(criarTd(texto, 1))
    tr.appendChild(criarTd(voto, 1))
    tr.appendChild(criarTd(votoDeputado, 1))
    return tr
}



