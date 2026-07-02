import { criarJogos } from "./criarJogos.js"

export function criandoJogosGrupo(campeoanato, fase, participantes, returno){
    if(participantes.length == 2){
        return grupoDuasEquipes(campeoanato, fase, participantes, returno)
    }else if(participantes.length == 3){
        return grupoTresEquipes(campeoanato, fase, participantes, returno)
    }else if(participantes.length == 4){
        return grupoQuatroEquipes(campeoanato, fase, participantes, returno)
    }
}

function grupoDuasEquipes(campeoanato, fase, participantes, returno){
    let jogos = [
        criarJogos(campeoanato, fase, 1, participantes[0], participantes[1])
    ]
    if(returno){
        jogos.push(criarJogos(campeoanato, fase, 2, participantes[1], participantes[0]))
    }
    return jogos
}

function grupoTresEquipes(campeoanato, fase, participantes, returno){
    let jogos = [
        criarJogos(campeoanato, fase, 1, participantes[0], participantes[1]),
        criarJogos(campeoanato, fase, 2, participantes[2], participantes[0]),
        criarJogos(campeoanato, fase, 3, participantes[1], participantes[2]),
    ]
    if(returno){
        jogos.push(criarJogos(campeoanato, fase, 4, participantes[1], participantes[0]))
        jogos.push(criarJogos(campeoanato, fase, 5, participantes[0], participantes[2]))
        jogos.push(criarJogos(campeoanato, fase, 6, participantes[2], participantes[1]))
    }
    return jogos
}

function grupoQuatroEquipes(campeoanato, fase, participantes, returno){
    let jogos = [
        criarJogos(campeoanato, fase, 1, participantes[0], participantes[1]),
        criarJogos(campeoanato, fase, 1, participantes[3], participantes[2]),
        criarJogos(campeoanato, fase, 2, participantes[2], participantes[0]),
        criarJogos(campeoanato, fase, 2, participantes[1], participantes[3]),
        criarJogos(campeoanato, fase, 3, participantes[0], participantes[3]),
        criarJogos(campeoanato, fase, 3, participantes[1], participantes[2])
    ]
    if(returno){
        jogos.push(criarJogos(campeoanato, fase, 1, participantes[1], participantes[0])),
        jogos.push(criarJogos(campeoanato, fase, 1, participantes[2], participantes[3])),
        jogos.push(criarJogos(campeoanato, fase, 2, participantes[0], participantes[2])),
        jogos.push(criarJogos(campeoanato, fase, 2, participantes[3], participantes[1])),
        jogos.push(criarJogos(campeoanato, fase, 3, participantes[3], participantes[0])),
        jogos.push(criarJogos(campeoanato, fase, 3, participantes[2], participantes[1]))
    }
    return jogos
}