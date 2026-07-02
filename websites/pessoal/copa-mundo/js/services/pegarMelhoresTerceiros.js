import { criterioDesempate } from "./criterioDesempate.js"

export function pegarMelhoresTerceiros(campeonato, jogos){
    return melhoresTerceiros(campeonato, jogos).slice(0, 8).map(letra => letra.grupo).sort((a, b) => a.localeCompare(b)).join("")
}

function melhoresTerceiros(campeonato, jogos){
    let equipes = jogos.map(equipe => { return { grupo: equipe.grupo, equipe: equipe.participantes[2]}}).sort((a, b) => criterioDesempate(a.equipe, b.equipe))
    campeonato.melhoresTerceiros = equipes
    return equipes
}