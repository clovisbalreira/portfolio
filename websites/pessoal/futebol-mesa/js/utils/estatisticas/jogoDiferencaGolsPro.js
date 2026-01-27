import { pegarDados } from "../pegarDados.js";

export function jogoDiferencaGolsPro(campeonato, condicaoGols, socio, mostrar) {
    const diferencas = campeonato.jogos
        .filter(jogo =>
            jogo.timeCasa.tecnico.participante.nome === socio ||
            jogo.timeFora.tecnico.participante.nome === socio ||
            jogo.timeCasa.tecnico.associacao.nome === socio ||
            jogo.timeFora.tecnico.associacao.nome === socio
        )
        .map(jogo => {
            if (jogo.timeCasa.tecnico.participante.nome === socio || jogo.timeCasa.tecnico.associacao.nome === socio) {
                return jogo.diferencaGolsCasa
            }
            return jogo.diferencaGolsFora
        })
    if (diferencas.length === 0) return []

    const maior = Math.max(...diferencas)
    const jogos = campeonato.jogos.filter(jogo =>  
        (jogo.timeCasa.tecnico.participante.nome === socio &&
         jogo.diferencaGolsCasa === maior) ||
        (jogo.timeFora.tecnico.participante.nome === socio &&
         jogo.diferencaGolsFora === maior) ||
         (jogo.timeCasa.tecnico.associacao.nome === socio &&
         jogo.diferencaGolsCasa === maior) ||
        (jogo.timeFora.tecnico.associacao.nome === socio &&
         jogo.diferencaGolsFora === maior)
    )
    return maior < 0 ? '' : pegarDados(jogos, condicaoGols, '', mostrar)
}
