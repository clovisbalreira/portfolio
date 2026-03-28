import { pegarDados } from "../pegarDados.js";

export function jogoDiferencaGolsPro(campeonato, condicaoGols, socio, mostrar) {
    const diferencas = campeonato.jogos
        .filter(jogo =>
            jogo.equipeMandante.participante.tecnico.nome === socio ||
            jogo.equipeVisitante.participante.tecnico.nome === socio ||
            jogo.equipeMandante.participante.associacao.nome === socio ||
            jogo.equipeVisitante.participante.associacao.nome === socio
        )
        .map(jogo => {
            if (jogo.equipeMandante.participante.tecnico.nome === socio || jogo.equipeMandante.participante.associacao.nome === socio) {
                return jogo.diferencaGolsCasa
            }
            return jogo.diferencaGolsFora
        })
    if (diferencas.length === 0) return []

    const maior = Math.max(...diferencas)
    const jogos = campeonato.jogos.filter(jogo =>  
        (jogo.equipeMandante.participante.tecnico.nome === socio &&
         jogo.diferencaGolsCasa === maior) ||
        (jogo.equipeVisitante.participante.tecnico.nome === socio &&
         jogo.diferencaGolsFora === maior) ||
         (jogo.equipeMandante.participante.associacao.nome === socio &&
         jogo.diferencaGolsCasa === maior) ||
        (jogo.equipeVisitante.participante.associacao.nome === socio &&
         jogo.diferencaGolsFora === maior)
    )
    return maior < 0 ? '' : pegarDados(jogos, condicaoGols, '', mostrar)
}
