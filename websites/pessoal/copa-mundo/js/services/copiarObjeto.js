export function copiarObjeto(campeonato){
    copiarObjetoGrupo(campeonato)
    copiarObjetoTerceiros(campeonato)
}

function copiarObjetoGrupo(campeonato){
    campeonato.fases.forEach(fase => {
        if (fase.nome.includes('Grupo')) {
            fase.fase.forEach(part => {
                part.participantes.forEach((participante, indice) => {
                    const copia = structuredClone(participante);
                    part.participantes[indice] = copia;
                })
            })
        }
    })
}

function copiarObjetoTerceiros(campeonato){
    campeonato.melhoresTerceiros.forEach( (terceiro, indice) => {
        const copia = structuredClone(terceiro);
        campeonato.melhoresTerceiros[indice] = copia;
    })
}