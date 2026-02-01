import { pegarDados } from "../pegarDados.js";

export function jogoDiferencaGolsContra(campeonato, condicaoGols, socio, mostrar) {
    const diferencas = campeonato.jogos
        .filter(jogo =>
            jogo.timeMandante.participante.tecnico.nome === socio ||
            jogo.timeVisitante.participante.tecnico.nome === socio ||
            jogo.timeMandante.participante.associacao.nome === socio ||
            jogo.timeVisitante.participante.associacao.nome === socio
        )
        .map(jogo => {
            if (jogo.timeMandante.participante.tecnico.nome === socio || jogo.timeMandante.participante.associacao.nome === socio) {
                return jogo.diferencaGolsCasa
            }
            return jogo.diferencaGolsFora
        })

    if (diferencas.length === 0) return []

    const menor = Math.min(...diferencas)

    const jogos = campeonato.jogos.filter(jogo =>
        (jogo.timeMandante.participante.tecnico.nome === socio &&
         jogo.diferencaGolsCasa === menor) ||
        (jogo.timeVisitante.participante.tecnico.nome === socio &&
         jogo.diferencaGolsFora === menor) ||
         (jogo.timeMandante.participante.associacao.nome === socio &&
         jogo.diferencaGolsCasa === menor) ||
        (jogo.timeVisitante.participante.associacao.nome === socio &&
         jogo.diferencaGolsFora === menor)
    )
    return menor > 0 ? '' : pegarDados(jogos, condicaoGols, '', mostrar)
}
