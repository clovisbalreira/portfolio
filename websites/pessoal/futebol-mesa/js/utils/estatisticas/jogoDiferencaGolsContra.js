import { pegarDados } from "../pegarDados.js";

export function jogoDiferencaGolsContra(campeonato, tecnico, condicaoGols, socio) {

    const diferencas = campeonato.jogos
        .filter(jogo =>
            jogo.timeCasa.tecnico.participante.nome === socio ||
            jogo.timeFora.tecnico.participante.nome === socio
        )
        .map(jogo => {
            if (jogo.timeCasa.tecnico.participante.nome === socio) {
                return jogo.diferencaGolsCasa
            }
            return jogo.diferencaGolsFora
        })

    if (diferencas.length === 0) return []

    const maior = Math.min(...diferencas)

    const jogos = campeonato.jogos.filter(jogo =>
        (jogo.timeCasa.tecnico.participante.nome === socio &&
         jogo.diferencaGolsCasa === maior) ||
        (jogo.timeFora.tecnico.participante.nome === socio &&
         jogo.diferencaGolsFora === maior)
    )

    return pegarDados(jogos, tecnico, condicaoGols)
}
