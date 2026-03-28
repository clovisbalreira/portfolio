export function adicionarCampeonatoParticipantes(campeonato, temporada, participantes){
    temporada.adicionarCampeonato(campeonato)
    participantes.forEach( (participante, index) => {
        temporada.adicionarParticipantes(participante.socio)
        if(participante.equipe != '') temporada.adicionarEquipe(temporada.participantes[index], participante.equipe)
    })
}