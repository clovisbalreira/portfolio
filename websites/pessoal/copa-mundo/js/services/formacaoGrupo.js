import { criarTabela } from "./criarTabela.js"

export function formacaoGrupo(equipesGrupo, soma, todosParticipantes){
    let participante = []
    for(let i = 0; i < equipesGrupo; i++){
        participante.push(criarTabela(todosParticipantes[soma++], 'grupo'))
    }
    return {participante, soma}
}