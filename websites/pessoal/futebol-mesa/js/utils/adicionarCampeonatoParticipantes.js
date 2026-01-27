export function adicionarCampeonatoParticipantes(campeonato, temporada, participantes){
    temporada.adicionarCampeonato(campeonato)
    participantes.forEach( (participante, index) => {
        temporada.adicionarParticipantes(participante.socio)
        if(participante.time != '') temporada.adicionarTime(temporada.participantes[index], participante.time)
    })
}