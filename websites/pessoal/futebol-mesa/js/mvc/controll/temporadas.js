import { Temporada } from "../model/Temporada.js"
import { socios } from "./socios.js";
import { regras } from "./regras.js";
import { campeonatos } from "./campeonatos.js"
import { times } from "./times.js"
import { adicionarJogosPlacar } from "../../utils/adicionarJogosPlacar.js";
import { adicionarCampeonatoParticipantes } from "../../utils/adicionarCampeonatoParticipantes.js"
import { colocarPontuacao } from "../../utils/colocarPontuacao.js"

export let temporadas = [
    new Temporada('1º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('3º', 3, false),
    new Temporada('4º', 3, false),
    new Temporada('5º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('2º', 3, true),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('3º', 3, false),
    new Temporada('4º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('L.U.C.F.M. 2018', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('5º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('6º', 3, false),
    new Temporada('7º', 3, false),
    new Temporada('8º', 3, false),
    new Temporada('2020', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('9º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('10º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('3º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('3º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('2022', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('11º', 3, false),
    new Temporada('4º', 3, false),
    new Temporada('3º', 3, false),
    new Temporada('4º', 3, false),
    new Temporada('4º', 3, false),
    new Temporada('2022', 3, false),
    new Temporada('2022', 3, false),
    new Temporada('2023', 3, false),
    new Temporada('12º', 3, false),
    new Temporada('5º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('2023', 3, false),
    new Temporada('5º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('13º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('6º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('6º', 3, false),
    new Temporada('2º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('14º', 3, false),
    new Temporada('7º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('7º', 3, false),
    new Temporada('1º', 3, false),
    new Temporada('2025', 3, false),
]

socios[0].adicionarRegra(regras[0], false, false)
socios.forEach( socio => {
    socio.associacoes.forEach( associacao => {
        associacao.status = true
    })
})
// 1º Campeonato Rodrigues
temporadas[0].adicionarCampeonato(campeonatos[0])
temporadas[0].adicionarParticipantes(socios[0])
temporadas[0].adicionarParticipantes(socios[1])
temporadas[0].adicionarParticipantes(socios[2])
temporadas[0].adicionarParticipantes(socios[3])
temporadas[0].adicionarTime(temporadas[0].participantes[0], times[2])
temporadas[0].adicionarTime(temporadas[0].participantes[1], times[0])
temporadas[0].adicionarTime(temporadas[0].participantes[2], times[1])
temporadas[0].adicionarTime(temporadas[0].participantes[3], times[3])
temporadas[0].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[0].participantes[0], temporadas[0].participantes[3], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[0], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[0].participantes[1], temporadas[0].participantes[2], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[1], 3, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[0].participantes[0], temporadas[0].participantes[1], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[2], 2, 3, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[0].participantes[2], temporadas[0].participantes[3], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[3], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[0].participantes[0], temporadas[0].participantes[2], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[4], 2, 3, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[0].participantes[3], temporadas[0].participantes[1], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[5], 0, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[0].participantes[3], temporadas[0].participantes[0], false, false)
temporadas[0].adicionarPlacar(temporadas[0].jogos[6], 0, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[0].participantes[2], temporadas[0].participantes[1], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[7], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[0].participantes[1], temporadas[0].participantes[0], false, false)
temporadas[0].adicionarPlacar(temporadas[0].jogos[8], 3, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[0].participantes[3], temporadas[0].participantes[2], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[9], 1, 3, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[0].participantes[2], temporadas[0].participantes[0], false, false)
temporadas[0].adicionarPlacar(temporadas[0].jogos[10], 4, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[0].participantes[1], temporadas[0].participantes[3], false, false )
temporadas[0].adicionarPlacar(temporadas[0].jogos[11], 3, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[0].modoCampeonato(temporadas[0])
// 2º Campeonato Rodrigues
temporadas[1].adicionarCampeonato(campeonatos[0])
temporadas[1].adicionarParticipantes(socios[0])
temporadas[1].adicionarParticipantes(socios[0])
temporadas[1].adicionarParticipantes(socios[1])
temporadas[1].adicionarParticipantes(socios[1])
temporadas[1].adicionarParticipantes(socios[2])
temporadas[1].adicionarParticipantes(socios[2])
temporadas[1].adicionarParticipantes(socios[3])
temporadas[1].adicionarParticipantes(socios[3])
temporadas[1].adicionarTime(temporadas[1].participantes[0], times[2])
temporadas[1].adicionarTime(temporadas[1].participantes[1], times[5])
temporadas[1].adicionarTime(temporadas[1].participantes[2], times[0])
temporadas[1].adicionarTime(temporadas[1].participantes[3], times[4])
temporadas[1].adicionarTime(temporadas[1].participantes[4], times[1])
temporadas[1].adicionarTime(temporadas[1].participantes[5], times[6])
temporadas[1].adicionarTime(temporadas[1].participantes[6], times[3])
temporadas[1].adicionarTime(temporadas[1].participantes[7], times[7])
temporadas[1].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[0], 1, 3, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[1], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[2], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[3], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[4], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[5], 4, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[6], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[7], 3, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[8], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[9], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[10], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[11], 3, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[12], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[13], 0, 3, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[14], 0, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[15], 2, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[16], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[17], 1, 3, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[18], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[19], 2, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[20], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[21], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[22], 0, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[23], 5, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '7º Rodada', '', '', temporadas[1].participantes[0], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[24], 0, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '7º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[25], 2, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '7º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[26], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '1º turno', '7º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[27], 0, 4, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[28], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[29], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[30], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[0], false, false)
temporadas[1].adicionarPlacar(temporadas[1].jogos[31], 0, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[32], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[33], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[0], false, false)
temporadas[1].adicionarPlacar(temporadas[1].jogos[34], 0, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[35], 0, 5, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[36], 0, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[0], false, false)
temporadas[1].adicionarPlacar(temporadas[1].jogos[37], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[38], 0, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[39], 0, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[0], false, false)
temporadas[1].adicionarPlacar(temporadas[1].jogos[40], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[7], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[41], 2, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[42], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[1].participantes[1], temporadas[1].participantes[3], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[43], 1, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[44], 2, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[0], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[45], 1, 0, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[46], 2, 1, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[47], 1, 2, 0, 0, 0, 0, 0, 0, false, false )
temporadas[1].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[1].participantes[6], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[48], 4, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[2], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[49], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[1].participantes[5], temporadas[1].participantes[0], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[50], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[4], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[51], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '7º Rodada', '', '', temporadas[1].participantes[7], temporadas[1].participantes[0], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[52], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '7º Rodada', '', '', temporadas[1].participantes[4], temporadas[1].participantes[1], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[53], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '7º Rodada', '', '', temporadas[1].participantes[3], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[54], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('1º fase', '2º turno', '7º Rodada', '', '', temporadas[1].participantes[2], temporadas[1].participantes[6], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[55], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].adicionarJogos('Final', 'Jogo Unico', 'Jogo Unico', '', '', temporadas[1].participantes[2], temporadas[1].participantes[5], false, false )
temporadas[1].adicionarPlacar(temporadas[1].jogos[56], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[1].modoCampeonato(temporadas[1])
// 3º Campeonato Rodrigues
temporadas[2].adicionarCampeonato(campeonatos[0])
temporadas[2].adicionarParticipantes(socios[0])
temporadas[2].adicionarParticipantes(socios[0])
temporadas[2].adicionarParticipantes(socios[1])
temporadas[2].adicionarParticipantes(socios[1])
temporadas[2].adicionarParticipantes(socios[2])
temporadas[2].adicionarParticipantes(socios[2])
temporadas[2].adicionarParticipantes(socios[3])
temporadas[2].adicionarParticipantes(socios[3])
temporadas[2].adicionarTime(temporadas[2].participantes[0], times[2])
temporadas[2].adicionarTime(temporadas[2].participantes[1], times[5])
temporadas[2].adicionarTime(temporadas[2].participantes[2], times[0])
temporadas[2].adicionarTime(temporadas[2].participantes[3], times[4])
temporadas[2].adicionarTime(temporadas[2].participantes[4], times[1])
temporadas[2].adicionarTime(temporadas[2].participantes[5], times[6])
temporadas[2].adicionarTime(temporadas[2].participantes[6], times[3])
temporadas[2].adicionarTime(temporadas[2].participantes[7], times[7])
temporadas[2].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[2].participantes[1], temporadas[2].participantes[6], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[0], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[2].participantes[5], temporadas[2].participantes[3], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[1], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[2].participantes[0], temporadas[2].participantes[2], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[2], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[2].participantes[4], temporadas[2].participantes[7], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[3], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[2].participantes[0], temporadas[2].participantes[7], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[4], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[2].participantes[2], temporadas[2].participantes[5], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[5], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[2].participantes[1], temporadas[2].participantes[4], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[6], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[2].participantes[3], temporadas[2].participantes[6], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[7], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[2].participantes[0], temporadas[2].participantes[4], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[8], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[2].participantes[3], temporadas[2].participantes[1], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[9], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[2].participantes[5], temporadas[2].participantes[6], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[10], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[2].participantes[2], temporadas[2].participantes[7], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[11], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[2].participantes[0], temporadas[2].participantes[6], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[12], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[2].participantes[7], temporadas[2].participantes[3], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[13], 1, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[2].participantes[4], temporadas[2].participantes[2], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[14], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '4º Rodada', '', '', temporadas[2].participantes[5], temporadas[2].participantes[1], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[15], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[2].participantes[3], temporadas[2].participantes[4], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[16], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[2].participantes[0], temporadas[2].participantes[5], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[17], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[2].participantes[6], temporadas[2].participantes[2], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[18], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '5º Rodada', '', '', temporadas[2].participantes[7], temporadas[2].participantes[1], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[19], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[2].participantes[7], temporadas[2].participantes[5], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[20], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[2].participantes[6], temporadas[2].participantes[4], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[21], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[2].participantes[1], temporadas[2].participantes[2], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[22], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '1º turno', '6º Rodada', '', '', temporadas[2].participantes[0], temporadas[2].participantes[3], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[23], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[2].participantes[6], temporadas[2].participantes[1], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[24], 1, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[2].participantes[3], temporadas[2].participantes[5], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[25], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[2].participantes[2], temporadas[2].participantes[0], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[26], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[2].participantes[7], temporadas[2].participantes[4], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[27], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[2].participantes[7], temporadas[2].participantes[0], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[28], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[2].participantes[5], temporadas[2].participantes[2], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[29], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[2].participantes[4], temporadas[2].participantes[1], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[30], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[2].participantes[6], temporadas[2].participantes[3], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[31], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[2].participantes[4], temporadas[2].participantes[0], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[32], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[2].participantes[1], temporadas[2].participantes[3], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[33], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[2].participantes[6], temporadas[2].participantes[5], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[34], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[2].participantes[7], temporadas[2].participantes[2], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[35], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[2].participantes[6], temporadas[2].participantes[0], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[36], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[2].participantes[3], temporadas[2].participantes[7], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[37], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[2].participantes[2], temporadas[2].participantes[4], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[38], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '4º Rodada', '', '', temporadas[2].participantes[1], temporadas[2].participantes[5], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[39], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[2].participantes[4], temporadas[2].participantes[3], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[40], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[2].participantes[5], temporadas[2].participantes[0], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[41], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[2].participantes[2], temporadas[2].participantes[6], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[42], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '5º Rodada', '', '', temporadas[2].participantes[1], temporadas[2].participantes[7], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[43], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[2].participantes[5], temporadas[2].participantes[7], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[44], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[2].participantes[4], temporadas[2].participantes[6], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[45], 4, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[2].participantes[2], temporadas[2].participantes[1], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[46], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].adicionarJogos('1º fase', '2º turno', '6º Rodada', '', '', temporadas[2].participantes[3], temporadas[2].participantes[0], false, false )
temporadas[2].adicionarPlacar(temporadas[2].jogos[47], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[2].modoCampeonato(temporadas[2])
// 4º Campeonato Rodrigues
temporadas[3].adicionarCampeonato(campeonatos[0])
temporadas[3].adicionarParticipantes(socios[0])
temporadas[3].adicionarParticipantes(socios[0])
temporadas[3].adicionarParticipantes(socios[1])
temporadas[3].adicionarParticipantes(socios[1])
temporadas[3].adicionarParticipantes(socios[2])
temporadas[3].adicionarParticipantes(socios[2])
temporadas[3].adicionarParticipantes(socios[3])
temporadas[3].adicionarParticipantes(socios[3])
temporadas[3].adicionarParticipantes(socios[4])
temporadas[3].adicionarParticipantes(socios[4])
temporadas[3].adicionarTime(temporadas[3].participantes[0], times[4])
temporadas[3].adicionarTime(temporadas[3].participantes[1], times[11])
temporadas[3].adicionarTime(temporadas[3].participantes[2], times[0])
temporadas[3].adicionarTime(temporadas[3].participantes[3], times[10])
temporadas[3].adicionarTime(temporadas[3].participantes[4], times[1])
temporadas[3].adicionarTime(temporadas[3].participantes[5], times[6])
temporadas[3].adicionarTime(temporadas[3].participantes[6], times[8])
temporadas[3].adicionarTime(temporadas[3].participantes[7], times[12])
temporadas[3].adicionarTime(temporadas[3].participantes[8], times[9])
temporadas[3].adicionarTime(temporadas[3].participantes[9], times[5])
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', temporadas[3].participantes[8], temporadas[3].participantes[4], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[0], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', temporadas[3].participantes[6], temporadas[3].participantes[2], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[1], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', temporadas[3].participantes[5], temporadas[3].participantes[7], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[2], 3, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', temporadas[3].participantes[1], temporadas[3].participantes[9], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[3], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', temporadas[3].participantes[2], temporadas[3].participantes[8], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[4], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', temporadas[3].participantes[0], temporadas[3].participantes[6], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[5], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', temporadas[3].participantes[1], temporadas[3].participantes[5], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[6], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', temporadas[3].participantes[7], temporadas[3].participantes[3], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[7], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', temporadas[3].participantes[0], temporadas[3].participantes[4], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[8], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', temporadas[3].participantes[6], temporadas[3].participantes[8], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[9], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', temporadas[3].participantes[3], temporadas[3].participantes[5], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[10], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', temporadas[3].participantes[7], temporadas[3].participantes[9], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[11], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '4º Rodada', '', '', temporadas[3].participantes[4], temporadas[3].participantes[6], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[12], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '4º Rodada', '', '', temporadas[3].participantes[0], temporadas[3].participantes[2], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[13], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '4º Rodada', '', '', temporadas[3].participantes[3], temporadas[3].participantes[9], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[14], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '4º Rodada', '', '', temporadas[3].participantes[1], temporadas[3].participantes[7], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[15], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '5º Rodada', '', '', temporadas[3].participantes[0], temporadas[3].participantes[8], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[16], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo A - 1º fase', '1º turno', '5º Rodada', '', '', temporadas[3].participantes[2], temporadas[3].participantes[4], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[17], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '5º Rodada', '', '', temporadas[3].participantes[9], temporadas[3].participantes[5], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[18], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Grupo B - 1º fase', '1º turno', '5º Rodada', '', '', temporadas[3].participantes[1], temporadas[3].participantes[3], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[19], 1, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Semi-Final', 'Jogo 1', 'Jogo Unico', '', '', temporadas[3].participantes[6], temporadas[3].participantes[1], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[20], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Semi-Final', 'Jogo 2', 'Jogo Unico', '', '', temporadas[3].participantes[8], temporadas[3].participantes[3], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[21], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('3º Lugar', 'Jogo Unico', 'Jogo Unico', '', '', temporadas[3].participantes[6], temporadas[3].participantes[8], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[22], 3, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].adicionarJogos('Final', 'Jogo Unico', 'Jogo Unico', '', '', temporadas[3].participantes[1], temporadas[3].participantes[3], false, false )
temporadas[3].adicionarPlacar(temporadas[3].jogos[23], 1, 6, 0, 0, 0, 0, 0, 0, false, false)
temporadas[3].modoCampeonato(temporadas[3])
// 5º Campeonato Rodrigues
temporadas[4].adicionarCampeonato(campeonatos[0])
temporadas[4].adicionarParticipantes(socios[0])
temporadas[4].adicionarParticipantes(socios[1])
temporadas[4].adicionarParticipantes(socios[2])
temporadas[4].adicionarParticipantes(socios[3])
temporadas[4].adicionarParticipantes(socios[5])
temporadas[4].adicionarTime(temporadas[4].participantes[0], times[4])
temporadas[4].adicionarTime(temporadas[4].participantes[1], times[13])
temporadas[4].adicionarTime(temporadas[4].participantes[2], times[1])
temporadas[4].adicionarTime(temporadas[4].participantes[3], times[8])
temporadas[4].adicionarTime(temporadas[4].participantes[4], times[8])
temporadas[4].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[4].participantes[0], temporadas[4].participantes[2], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[0], 4, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '1º turno', '1º Rodada', '', '', temporadas[4].participantes[3], temporadas[4].participantes[1], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[1], 0, 6, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[4].participantes[1], temporadas[4].participantes[2], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[2], 5, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '1º turno', '2º Rodada', '', '', temporadas[4].participantes[0], temporadas[4].participantes[3], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[3], 6, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[4].participantes[2], temporadas[4].participantes[3], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[4], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '1º turno', '3º Rodada', '', '', temporadas[4].participantes[0], temporadas[4].participantes[1], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[5], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[4].participantes[2], temporadas[4].participantes[0], false, false)
temporadas[4].adicionarPlacar(temporadas[4].jogos[6], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '2º turno', '1º Rodada', '', '', temporadas[4].participantes[1], temporadas[4].participantes[4], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[7], 5, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[4].participantes[2], temporadas[4].participantes[1], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[8], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '2º turno', '2º Rodada', '', '', temporadas[4].participantes[4], temporadas[4].participantes[0], false, false)
temporadas[4].adicionarPlacar(temporadas[4].jogos[9], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[4].participantes[4], temporadas[4].participantes[2], false, false )
temporadas[4].adicionarPlacar(temporadas[4].jogos[10], 0, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].adicionarJogos('1º fase', '2º turno', '3º Rodada', '', '', temporadas[4].participantes[1], temporadas[4].participantes[0], false, false)
temporadas[4].adicionarPlacar(temporadas[4].jogos[11], 5, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[4].modoCampeonato(temporadas[4])
// 1º Supercopa
temporadas[5].adicionarCampeonato(campeonatos[1])
temporadas[5].adicionarParticipantes(socios[0])
temporadas[5].adicionarParticipantes(socios[0])
temporadas[5].adicionarParticipantes(socios[1])
temporadas[5].adicionarParticipantes(socios[1])
temporadas[5].adicionarParticipantes(socios[2])
temporadas[5].adicionarParticipantes(socios[2])
temporadas[5].adicionarParticipantes(socios[3])
temporadas[5].adicionarParticipantes(socios[3])
temporadas[5].adicionarParticipantes(socios[5])
temporadas[5].adicionarParticipantes(socios[5])
temporadas[5].adicionarTime(temporadas[5].participantes[0], times[4])
temporadas[5].adicionarTime(temporadas[5].participantes[1], times[11])
temporadas[5].adicionarTime(temporadas[5].participantes[2], times[13])
temporadas[5].adicionarTime(temporadas[5].participantes[3], times[7])
temporadas[5].adicionarTime(temporadas[5].participantes[4], times[1])
temporadas[5].adicionarTime(temporadas[5].participantes[5], times[6])
temporadas[5].adicionarTime(temporadas[5].participantes[6], times[8])
temporadas[5].adicionarTime(temporadas[5].participantes[7], times[12])
temporadas[5].adicionarTime(temporadas[5].participantes[8], times[8])
temporadas[5].adicionarTime(temporadas[5].participantes[9], times[12])
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[5].participantes[3], temporadas[5].participantes[4], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[0], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[5].participantes[0], temporadas[5].participantes[7], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[1], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[5].participantes[6], temporadas[5].participantes[2], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[2], 1, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[5].participantes[5], temporadas[5].participantes[1], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[3], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[5].participantes[1], temporadas[5].participantes[2], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[4], 1, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[5].participantes[0], temporadas[5].participantes[5], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[5], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[5].participantes[6], temporadas[5].participantes[4], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[6], 1, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[5].participantes[7], temporadas[5].participantes[3], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[7], 0, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[5].participantes[1], temporadas[5].participantes[6], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[8], 3, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[5].participantes[2], temporadas[5].participantes[5], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[9], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[5].participantes[0], temporadas[5].participantes[3], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[10], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[5].participantes[4], temporadas[5].participantes[7], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[11], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[5].participantes[2], temporadas[5].participantes[7], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[12], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[5].participantes[0], temporadas[5].participantes[4], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[13], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[5].participantes[3], temporadas[5].participantes[1], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[14], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[5].participantes[5], temporadas[5].participantes[6], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[15], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[5].participantes[3], temporadas[5].participantes[6], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[16], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[5].participantes[1], temporadas[5].participantes[4], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[17], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[5].participantes[7], temporadas[5].participantes[5], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[18], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[5].participantes[0], temporadas[5].participantes[2], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[19], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[5].participantes[0], temporadas[5].participantes[6], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[20], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[5].participantes[5], temporadas[5].participantes[3], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[21], 1, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[5].participantes[7], temporadas[5].participantes[1], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[22], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[5].participantes[4], temporadas[5].participantes[2], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[23], 0, 7, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[5].participantes[4], temporadas[5].participantes[3], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[24], 1, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[5].participantes[9], temporadas[5].participantes[0], false, false)
temporadas[5].adicionarPlacar(temporadas[5].jogos[25], 4, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[5].participantes[2], temporadas[5].participantes[8], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[26], 5, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[5].participantes[1], temporadas[5].participantes[5], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[27], 2, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[5].participantes[2], temporadas[5].participantes[1], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[28], 5, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[5].participantes[5], temporadas[5].participantes[0], false, false)
temporadas[5].adicionarPlacar(temporadas[5].jogos[29], 3, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[5].participantes[4], temporadas[5].participantes[8], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[30], 5, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[5].participantes[3], temporadas[5].participantes[9], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[31], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[5].participantes[8], temporadas[5].participantes[1], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[32], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[5].participantes[5], temporadas[5].participantes[2], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[33], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[5].participantes[3], temporadas[5].participantes[0], false, false)
temporadas[5].adicionarPlacar(temporadas[5].jogos[34], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[5].participantes[9], temporadas[5].participantes[4], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[35], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[5].participantes[9], temporadas[5].participantes[2], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[36], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[5].participantes[4], temporadas[5].participantes[0], false, false)
temporadas[5].adicionarPlacar(temporadas[5].jogos[37], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[5].participantes[1], temporadas[5].participantes[3], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[38], 1, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[5].participantes[8], temporadas[5].participantes[5], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[39], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[5].participantes[8], temporadas[5].participantes[3], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[40], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[5].participantes[4], temporadas[5].participantes[1], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[41], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[5].participantes[5], temporadas[5].participantes[9], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[42], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[5].participantes[2], temporadas[5].participantes[0], false, false)
temporadas[5].adicionarPlacar(temporadas[5].jogos[43], 4, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[5].participantes[8], temporadas[5].participantes[0], false, false)
temporadas[5].adicionarPlacar(temporadas[5].jogos[44], 3, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[5].participantes[3], temporadas[5].participantes[5], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[45], 6, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[5].participantes[1], temporadas[5].participantes[9], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[46], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[5].participantes[2], temporadas[5].participantes[4], false, false )
temporadas[5].adicionarPlacar(temporadas[5].jogos[47], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[5].modoCampeonato(temporadas[5])
// 1º Copa União
temporadas[6].adicionarCampeonato(campeonatos[2])
temporadas[6].adicionarParticipantes(socios[0])
temporadas[6].adicionarParticipantes(socios[0])
temporadas[6].adicionarParticipantes(socios[0])
temporadas[6].adicionarParticipantes(socios[1])
temporadas[6].adicionarParticipantes(socios[1])
temporadas[6].adicionarParticipantes(socios[1])
temporadas[6].adicionarParticipantes(socios[3])
temporadas[6].adicionarParticipantes(socios[3])
temporadas[6].adicionarParticipantes(socios[3])
temporadas[6].adicionarTime(temporadas[6].participantes[0], times[2])
temporadas[6].adicionarTime(temporadas[6].participantes[1], times[5])
temporadas[6].adicionarTime(temporadas[6].participantes[2], times[15])
temporadas[6].adicionarTime(temporadas[6].participantes[3], times[0])
temporadas[6].adicionarTime(temporadas[6].participantes[4], times[4])
temporadas[6].adicionarTime(temporadas[6].participantes[5], times[14])
temporadas[6].adicionarTime(temporadas[6].participantes[6], times[3])
temporadas[6].adicionarTime(temporadas[6].participantes[7], times[7])
temporadas[6].adicionarTime(temporadas[6].participantes[8], times[16])
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[6].participantes[2], temporadas[6].participantes[3], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[0], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[6].participantes[0], temporadas[6].participantes[6], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[1], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[6].participantes[8], temporadas[6].participantes[4], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[2], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[6].participantes[7], temporadas[6].participantes[1], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[3], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[6].participantes[1], temporadas[6].participantes[8], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[4], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[6].participantes[0], temporadas[6].participantes[3], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[5], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[6].participantes[4], temporadas[6].participantes[2], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[6], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[6].participantes[5], temporadas[6].participantes[6], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[7], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[6].participantes[7], temporadas[6].participantes[5], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[8], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[6].participantes[0], temporadas[6].participantes[4], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[9], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[6].participantes[6], temporadas[6].participantes[2], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[10], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[6].participantes[3], temporadas[6].participantes[1], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[11], 3, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[6].participantes[2], temporadas[6].participantes[7], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[12], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[6].participantes[3], temporadas[6].participantes[6], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[13], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[6].participantes[0], temporadas[6].participantes[8], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[14], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[6].participantes[5], temporadas[6].participantes[1], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[15], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[6].participantes[2], temporadas[6].participantes[5], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[16], 0, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[6].participantes[0], temporadas[6].participantes[7], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[17], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[6].participantes[6], temporadas[6].participantes[4], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[18], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[6].participantes[3], temporadas[6].participantes[8], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[19], 3, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[6].participantes[1], temporadas[6].participantes[4], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[20], 2, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[6].participantes[0], temporadas[6].participantes[5], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[21], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[6].participantes[7], temporadas[6].participantes[3], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[22], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[6].participantes[8], temporadas[6].participantes[2], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[23], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '7º Rodada', '', '', temporadas[6].participantes[1], temporadas[6].participantes[6], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[24], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '7º Rodada', '', '', temporadas[6].participantes[5], temporadas[6].participantes[8], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[25], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '1º turno', '7º Rodada', '', '', temporadas[6].participantes[4], temporadas[6].participantes[7], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[26], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[6].participantes[3], temporadas[6].participantes[2], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[27], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[6].participantes[6], temporadas[6].participantes[0], false, false)
temporadas[6].adicionarPlacar(temporadas[6].jogos[28], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[6].participantes[4], temporadas[6].participantes[8], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[29], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '1º Rodada', '', '', temporadas[6].participantes[1], temporadas[6].participantes[7], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[30], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[6].participantes[8], temporadas[6].participantes[1], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[31], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[6].participantes[3], temporadas[6].participantes[0], false, false)
temporadas[6].adicionarPlacar(temporadas[6].jogos[32], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[6].participantes[2], temporadas[6].participantes[4], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[33], 1, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '2º Rodada', '', '', temporadas[6].participantes[6], temporadas[6].participantes[5], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[34], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[6].participantes[5], temporadas[6].participantes[7], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[35], 6, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[6].participantes[4], temporadas[6].participantes[0], false, false)
temporadas[6].adicionarPlacar(temporadas[6].jogos[36], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[6].participantes[2], temporadas[6].participantes[6], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[37], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '3º Rodada', '', '', temporadas[6].participantes[1], temporadas[6].participantes[3], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[38], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[6].participantes[7], temporadas[6].participantes[2], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[39], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[6].participantes[6], temporadas[6].participantes[3], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[40], 0, 4, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[6].participantes[8], temporadas[6].participantes[0], false, false)
temporadas[6].adicionarPlacar(temporadas[6].jogos[41], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '4º Rodada', '', '', temporadas[6].participantes[1], temporadas[6].participantes[5], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[42], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[6].participantes[5], temporadas[6].participantes[2], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[43], 2, 2, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[6].participantes[7], temporadas[6].participantes[0], false, false)
temporadas[6].adicionarPlacar(temporadas[6].jogos[44], 0, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[6].participantes[4], temporadas[6].participantes[6], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[45], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '5º Rodada', '', '', temporadas[6].participantes[8], temporadas[6].participantes[3], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[46], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[6].participantes[4], temporadas[6].participantes[1], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[47], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[6].participantes[5], temporadas[6].participantes[0], false, false)
temporadas[6].adicionarPlacar(temporadas[6].jogos[48], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[6].participantes[3], temporadas[6].participantes[7], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[49], 4, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '6º Rodada', '', '', temporadas[6].participantes[2], temporadas[6].participantes[8], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[50], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '7º Rodada', '', '', temporadas[6].participantes[6], temporadas[6].participantes[1], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[51], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '7º Rodada', '', '', temporadas[6].participantes[8], temporadas[6].participantes[5], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[52], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].adicionarJogos('Ponto Corridos', '2º turno', '7º Rodada', '', '', temporadas[6].participantes[7], temporadas[6].participantes[4], false, false )
temporadas[6].adicionarPlacar(temporadas[6].jogos[53], 0, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[6].modoCampeonato(temporadas[6])
// 2º Copa União
temporadas[7].adicionarCampeonato(campeonatos[2])
temporadas[7].adicionarParticipantes(socios[0])
temporadas[7].adicionarParticipantes(socios[0])
temporadas[7].adicionarParticipantes(socios[0])
temporadas[7].adicionarParticipantes(socios[1])
temporadas[7].adicionarParticipantes(socios[1])
temporadas[7].adicionarParticipantes(socios[1])
temporadas[7].adicionarParticipantes(socios[3])
temporadas[7].adicionarParticipantes(socios[3])
temporadas[7].adicionarParticipantes(socios[3])
temporadas[7].adicionarTime(temporadas[7].participantes[0], times[4])
temporadas[7].adicionarTime(temporadas[7].participantes[1], times[11])
temporadas[7].adicionarTime(temporadas[7].participantes[2], times[19])
temporadas[7].adicionarTime(temporadas[7].participantes[3], times[0])
temporadas[7].adicionarTime(temporadas[7].participantes[4], times[10])
temporadas[7].adicionarTime(temporadas[7].participantes[5], times[17])
temporadas[7].adicionarTime(temporadas[7].participantes[6], times[8])
temporadas[7].adicionarTime(temporadas[7].participantes[7], times[12])
temporadas[7].adicionarTime(temporadas[7].participantes[8], times[18])
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[7].participantes[1], temporadas[7].participantes[6], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[0], 0, 0, 0, 0, 4, 3, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[7].participantes[2], temporadas[7].participantes[5], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[1], 1, 4, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[7].participantes[0], temporadas[7].participantes[7], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[2], 0, 0, 0, 0, 2, 1, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '1º Rodada', '', '', temporadas[7].participantes[8], temporadas[7].participantes[4], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[3], 1, 3, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[7].participantes[1], temporadas[7].participantes[8], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[4], 0, 0, 0, 0, 2, 1, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[7].participantes[0], temporadas[7].participantes[5], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[5], 4, 3, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[7].participantes[7], temporadas[7].participantes[3], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[6], 2, 0, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '2º Rodada', '', '', temporadas[7].participantes[4], temporadas[7].participantes[2], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[7], 0, 0, 0, 0, 3, 1, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[7].participantes[2], temporadas[7].participantes[7], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[8], 0, 0, 0, 0, 3, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[7].participantes[3], temporadas[7].participantes[6], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[9], 1, 1, 0, 0, 3, 2, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[7].participantes[0], temporadas[7].participantes[4], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[10], 4, 3, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '3º Rodada', '', '', temporadas[7].participantes[5], temporadas[7].participantes[1], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[11], 2, 3, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[7].participantes[0], temporadas[7].participantes[8], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[12], 0, 2, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[7].participantes[7], temporadas[7].participantes[5], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[13], 0, 0, 0, 0, 0, 3, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[7].participantes[6], temporadas[7].participantes[2], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[14], 2, 1, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '4º Rodada', '', '', temporadas[7].participantes[3], temporadas[7].participantes[1], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[15], 0, 1, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[7].participantes[2], temporadas[7].participantes[3], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[16], 1, 1, 0, 0, 1, 4, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[7].participantes[0], temporadas[7].participantes[6], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[17], 3, 2, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[7].participantes[5], temporadas[7].participantes[8], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[18], 3, 1, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '5º Rodada', '', '', temporadas[7].participantes[4], temporadas[7].participantes[7], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[19], 3, 0, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[7].participantes[1], temporadas[7].participantes[4], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[20], 1, 0, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[7].participantes[8], temporadas[7].participantes[2], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[21], 0, 0, 0, 0, 1, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[7].participantes[0], temporadas[7].participantes[3], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[22], 0, 4, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '6º Rodada', '', '', temporadas[7].participantes[5], temporadas[7].participantes[6], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[23], 2, 0, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '7º Rodada', '', '', temporadas[7].participantes[6], temporadas[7].participantes[4], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[24], 1, 3, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '7º Rodada', '', '', temporadas[7].participantes[7], temporadas[7].participantes[1], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[25], 0, 0, 0, 0, 4, 5, 0, 0, false, true)
temporadas[7].adicionarJogos('Ponto Corridos', '1º turno', '7º Rodada', '', '', temporadas[7].participantes[3], temporadas[7].participantes[8], false, false )
temporadas[7].adicionarPlacar(temporadas[7].jogos[26], 4, 1, 0, 0, 0, 0, 0, 0, false, true)
temporadas[7].modoCampeonato(temporadas[7])
// 1º Copa Panela
temporadas[8].adicionarCampeonato(campeonatos[3])
temporadas[8].adicionarParticipantes(socios[0])
temporadas[8].adicionarParticipantes(socios[0])
temporadas[8].adicionarParticipantes(socios[1])
temporadas[8].adicionarParticipantes(socios[1])
temporadas[8].adicionarParticipantes(socios[3])
temporadas[8].adicionarParticipantes(socios[3])
temporadas[8].adicionarTime(temporadas[8].participantes[0], times[21])
temporadas[8].adicionarTime(temporadas[8].participantes[1], times[22])
temporadas[8].adicionarTime(temporadas[8].participantes[2], times[9])
temporadas[8].adicionarTime(temporadas[8].participantes[3], times[24])
temporadas[8].adicionarTime(temporadas[8].participantes[4], times[20])
temporadas[8].adicionarTime(temporadas[8].participantes[5], times[23])
temporadas[8].adicionarJogos('Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', temporadas[8].participantes[4], temporadas[8].participantes[0], false, false)
temporadas[8].adicionarPlacar(temporadas[8].jogos[0], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', temporadas[8].participantes[3], temporadas[8].participantes[5], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[1], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', temporadas[8].participantes[2], temporadas[8].participantes[0], false, false)
temporadas[8].adicionarPlacar(temporadas[8].jogos[2], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', temporadas[8].participantes[1], temporadas[8].participantes[5], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[3], 1, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', temporadas[8].participantes[2], temporadas[8].participantes[4], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[4], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', temporadas[8].participantes[1], temporadas[8].participantes[3], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[5], 1, 3, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A X Grupo B - 1º fase', '2º turno', '1º Rodada', '', '', temporadas[8].participantes[2], temporadas[8].participantes[1], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[6], 2, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A X Grupo B - 1º fase', '2º turno', '1º Rodada', '', '', temporadas[8].participantes[4], temporadas[8].participantes[3], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[7], 3, 0, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A X Grupo B - 1º fase', '2º turno', '1º Rodada', '', '', temporadas[8].participantes[0], temporadas[8].participantes[5], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[8], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A X Grupo B - 1º fase', '2º turno', '2º Rodada', '', '', temporadas[8].participantes[2], temporadas[8].participantes[5], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[9], 2, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A X Grupo B - 1º fase', '2º turno', '2º Rodada', '', '', temporadas[8].participantes[4], temporadas[8].participantes[1], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[10], 0, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Grupo A X Grupo B - 1º fase', '2º turno', '2º Rodada', '', '', temporadas[8].participantes[0], temporadas[8].participantes[3], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[11], 1, 1, 0, 0, 0, 0, 0, 0, false, false)
temporadas[8].adicionarJogos('Semi-Final', 'Jogo 1', 'Jogo Unico', '', '', temporadas[8].participantes[0], temporadas[8].participantes[1], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[12], 0, 1, 0, 0, 0, 0, 0, 0, true, false)
temporadas[8].adicionarJogos('Semi-Final', 'Jogo 2', 'Jogo Unico', '', '', temporadas[8].participantes[2], temporadas[8].participantes[3], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[13], 1, 0, 0, 0, 0, 0, 0, 0, true, false)
temporadas[8].adicionarJogos('Final', 'Jogo Unico', 'Jogo Unico', '', '', temporadas[8].participantes[1], temporadas[8].participantes[2], false, false )
temporadas[8].adicionarPlacar(temporadas[8].jogos[14], 4, 3, 0, 0, 0, 0, 0, 0, true, false)
temporadas[8].modoCampeonato(temporadas[8])
// 1º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[9], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}])
adicionarJogosPlacar(temporadas, 9, 0, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [5, 1, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 1, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [3, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 2, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 3, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [2, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 4, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [1, 5, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 5, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 6, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [5, 4, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 7, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [2, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 8, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 9, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [4, 1, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 10, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [0, 1, 0, 0, 0], [3, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 11, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [1, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 12, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [5, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 13, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 14, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [2, 3, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 15, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 16, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [2, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 17, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [4, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 18, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [5, 1, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 19, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 20, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [3, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 21, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 22, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 23, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [1, 2, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 24, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [5, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 25, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [3, 6, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 26, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [2, 1, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 27, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [3, 3, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 28, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [1, 2, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 29, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [0, 2, 0, 0, 0], [2, 7, 0, 0, 0], false, false)
temporadas[9].modoCampeonato(temporadas[9])
// 2º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[10], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}])
adicionarJogosPlacar(temporadas, 10, 0, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [5, 0, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 1, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 2, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [0, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 3, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 4, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [7, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 5, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 6, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 7, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 8, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [5, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 9, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [7, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 10, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 11, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [6, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 12, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [2, 4, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 13, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [0, 0, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 14, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [4, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 15, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [1, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 16, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [5, 2, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 17, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [2, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 18, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [6, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 19, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [7, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 20, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [4, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 21, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [3, 1, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 22, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [1, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 23, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 24, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [5, 0, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 25, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [4, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 26, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 27, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [2, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 28, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 29, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [7, 2, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 30, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 31, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [2, 6, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 32, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [5, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 33, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [0, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 34, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 35, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [3, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 36, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 37, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [2, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 38, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [1, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 39, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 40, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [5, 2, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 41, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [3, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 42, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [7, 0, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 43, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [6, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 44, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [3, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 45, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 46, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 47, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [1, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 48, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [5, 3, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 49, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [6, 3, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 50, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [2, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 51, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [7, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 52, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [6, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 53, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [1, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 54, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [3, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 55, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [0, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
temporadas[10].modoCampeonato(temporadas[10])
// 3º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[11], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}])
adicionarJogosPlacar(temporadas, 11, 0, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [7, 0, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 1, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [2, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 2, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [5, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 3, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 4, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 5, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [3, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 6, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 7, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [0, 0, 0, 0, 0], [4, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 8, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [7, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 9, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [6, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 10, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 11, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [2, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 12, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [1, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 13, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [5, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 14, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [0, 0, 0, 0, 0], [6, 6, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 15, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [3, 0, 0, 0, 0], [2, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 16, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [7, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 17, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [1, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 18, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [2, 3, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 19, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [6, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 20, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 21, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [4, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 22, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [3, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 23, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [5, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 24, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 25, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [0, 0, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 26, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [6, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 27, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [1, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 28, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [3, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 29, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 30, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [0, 4, 0, 0, 0], [5, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 31, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 32, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [7, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 33, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [5, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 34, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [2, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 35, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [4, 3, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 36, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [5, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 37, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [1, 0, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 38, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 39, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [0, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 40, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [7, 1, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 41, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [4, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 42, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [6, 3, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 43, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [2, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 44, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [4, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 45, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [0, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 46, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [5, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 47, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [3, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 48, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [7, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 49, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [2, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 50, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [1, 3, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 51, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [6, 7, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 52, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [2, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 53, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [3, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 54, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [4, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 55, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [5, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
temporadas[11].modoCampeonato(temporadas[11])
// 4º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[12], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}, { socio :socios[12], time: ''}, { socio :socios[13], time: ''}])
adicionarJogosPlacar(temporadas, 12, 0, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [8, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 1, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [1, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 2, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [9, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 3, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 4, 'Ponto Corridos', '1º turno', '1º Rodada', '', '', [7, 1, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 5, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [6, 2, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 6, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 7, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [5, 1, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 8, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 9, 'Ponto Corridos', '1º turno', '2º Rodada', '', '', [3, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 10, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [8, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 11, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [6, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 12, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [7, 1, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 13, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [1, 3, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 14, 'Ponto Corridos', '1º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 15, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [5, 3, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 16, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [9, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 17, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [3, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 18, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [2, 0, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 19, 'Ponto Corridos', '1º turno', '4º Rodada', '', '', [0, 1, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 20, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [8, 2, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 21, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [5, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 22, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 23, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [6, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 24, 'Ponto Corridos', '1º turno', '5º Rodada', '', '', [1, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 25, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [9, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 26, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [3, 1, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 27, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [7, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 28, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [5, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 29, 'Ponto Corridos', '1º turno', '6º Rodada', '', '', [2, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 30, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [8, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 31, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [3, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 32, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [1, 1, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 33, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [5, 0, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 34, 'Ponto Corridos', '1º turno', '7º Rodada', '', '', [6, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 35, 'Ponto Corridos', '1º turno', '8º Rodada', '', '', [2, 4, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 36, 'Ponto Corridos', '1º turno', '8º Rodada', '', '', [9, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 37, 'Ponto Corridos', '1º turno', '8º Rodada', '', '', [0, 0, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 38, 'Ponto Corridos', '1º turno', '8º Rodada', '', '', [4, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 39, 'Ponto Corridos', '1º turno', '8º Rodada', '', '', [7, 3, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 40, 'Ponto Corridos', '1º turno', '9º Rodada', '', '', [8, 0, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 41, 'Ponto Corridos', '1º turno', '9º Rodada', '', '', [0, 0, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 42, 'Ponto Corridos', '1º turno', '9º Rodada', '', '', [6, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 43, 'Ponto Corridos', '1º turno', '9º Rodada', '', '', [3, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 44, 'Ponto Corridos', '1º turno', '9º Rodada', '', '', [5, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 45, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [2, 3, 0, 0, 0], [8, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 46, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 47, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 48, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [5, 2, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 49, 'Ponto Corridos', '2º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [7, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 50, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [8, 0, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 51, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [9, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 52, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 53, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [7, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 54, 'Ponto Corridos', '2º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 55, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [9, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 56, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [5, 0, 0, 0, 0], [6, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 57, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [2, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 58, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 59, 'Ponto Corridos', '2º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 60, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [8, 0, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 61, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [7, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 62, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [6, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 63, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [4, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 64, 'Ponto Corridos', '2º turno', '4º Rodada', '', '', [1, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 65, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [7, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 66, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [3, 3, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 67, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [9, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 68, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 69, 'Ponto Corridos', '2º turno', '5º Rodada', '', '', [2, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 70, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [1, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 71, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [8, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 72, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [4, 0, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 73, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [5, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 74, 'Ponto Corridos', '2º turno', '6º Rodada', '', '', [6, 4, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 75, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [4, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 76, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [0, 2, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 77, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 78, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [2, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 79, 'Ponto Corridos', '2º turno', '7º Rodada', '', '', [9, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 80, 'Ponto Corridos', '2º turno', '8º Rodada', '', '', [3, 1, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 81, 'Ponto Corridos', '2º turno', '8º Rodada', '', '', [5, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 82, 'Ponto Corridos', '2º turno', '8º Rodada', '', '', [8, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 83, 'Ponto Corridos', '2º turno', '8º Rodada', '', '', [1, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 84, 'Ponto Corridos', '2º turno', '8º Rodada', '', '', [6, 3, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 85, 'Ponto Corridos', '2º turno', '9º Rodada', '', '', [1, 1, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 86, 'Ponto Corridos', '2º turno', '9º Rodada', '', '', [2, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 87, 'Ponto Corridos', '2º turno', '9º Rodada', '', '', [4, 2, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 88, 'Ponto Corridos', '2º turno', '9º Rodada', '', '', [9, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 89, 'Ponto Corridos', '2º turno', '9º Rodada', '', '', [7, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
temporadas[12].modoCampeonato(temporadas[12])
// 1º Campeonato Integração
adicionarCampeonatoParticipantes(campeonatos[5], temporadas[13], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[11], time: ''}, { socio :socios[14], time: ''}, { socio :socios[15], time: ''}, { socio :socios[16], time: ''}, { socio :socios[17], time: ''}, { socio :socios[18], time: ''}])
adicionarJogosPlacar(temporadas, 13, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 1', new Date(1800, 0, 1, 9, 0), [0, 1, 0, 0, 0], [7, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 1, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(1800, 0, 1, 10, 0), [4, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 2, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 1', new Date(1800, 0, 1, 11, 0), [7, 1, 0, 0, 0], [4, 1, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 13, 3, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 2', new Date(1800, 0, 1, 9, 0), [8, 3, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 4, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 2', new Date(1800, 0, 1, 10, 0), [5, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 5, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 2', new Date(1800, 0, 1, 11, 0), [3, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 6, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 3', new Date(1800, 0, 1, 9, 0), [9, 2, 0, 0, 0], [10, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 7, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 3', new Date(1800, 0, 1, 10, 0), [10, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 8, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 3', new Date(1800, 0, 1, 11, 0), [1, 0, 0, 0, 0], [9, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 9, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 4', new Date(1800, 0, 1, 9, 0), [6, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 10, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 4', new Date(1800, 0, 1, 10, 0), [11, 0, 0, 0, 0], [6, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 11, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 4', new Date(1800, 0, 1, 11, 0), [11, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 13, 12, 'Semi-Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(1800, 0, 1, 14, 0), [3, 3, 0, 0, 0], [0, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 13, 'Semi-Final', 'Bronze', 'Jogo Único', 'Mesa 6', new Date(1800, 0, 1, 14, 0), [11, 3, 0, 0, 0], [10, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 14, 'Semi-Final', 'Prata', 'Jogo Único', 'Mesa 3', new Date(1800, 0, 1, 14, 0), [7, 1, 0, 0, 0], [6, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 15, 'Semi-Final', 'Prata', 'Jogo Único', 'Mesa 4', new Date(1800, 0, 1, 14, 0), [1, 2, 0, 0, 0], [5, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 16, 'Semi-Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(1800, 0, 1, 14, 0), [2, 0, 0, 0, 0], [9, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 17, 'Semi-Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(1800, 0, 1, 14, 0), [8, 0, 0, 0, 0], [4, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 18, '3º Lugar', 'Bronze', 'Jogo Único', 'Mesa 6', new Date(1800, 0, 1, 15, 0), [0, 2, 0, 0, 0], [10, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 19, 'Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(1800, 0, 1, 15, 0), [3, 0, 0, 0, 0], [11, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 20, '3º Lugar', 'Prata', 'Jogo Único', 'Mesa 4', new Date(1800, 0, 1, 15, 0), [7, 3, 0, 0, 0], [5, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 21, 'Final', 'Prata', 'Jogo Único', 'Mesa 3', new Date(1800, 0, 1, 15, 0), [6, 0, 0, 0, 0], [1, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 22, '3º Lugar', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(1800, 0, 1, 15, 0), [2, 3, 0, 0, 0], [8, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 23, 'Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(1800, 0, 1, 15, 0), [9, 1, 0, 0, 0], [4, 2, 0, 0, 0], 'Penalti', false)
temporadas[13].modoCampeonato(temporadas[13])
// 2º Campeonato Integração
adicionarCampeonatoParticipantes(campeonatos[5], temporadas[14], [{ socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[8], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}, { socio :socios[14], time: ''}, { socio :socios[15], time: ''}, { socio :socios[16], time: ''}, { socio :socios[17], time: ''}, { socio :socios[18], time: ''}, { socio :socios[19], time: ''}, { socio :socios[20], time: ''}, { socio :socios[21], time: ''}, { socio :socios[22], time: ''}, { socio :socios[23], time: ''}, { socio :socios[24], time: ''}, { socio :socios[25], time: ''}, { socio :socios[26], time: ''}, { socio :socios[27], time: ''}, { socio :socios[28], time: ''}])
adicionarJogosPlacar(temporadas, 14, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [12, 1, 0, 0, 0], [13, 5, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 1, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [10, 6, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 2, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [4, 0, 0, 0, 0], [13, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 3, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [12, 2, 0, 0, 0], [10, 5, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 4, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [4, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 5, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [13, 1, 0, 0, 0], [10, 1, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 14, 6, 'Grupo A - 1º fase', '1º turno', '4º Rodada', 'Mesa 5', new Date(2017, 10, 19, 0, 59), [4, 0, 0, 0, 0], [10, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 7, 'Grupo A - 1º fase', '1º turno', '4º Rodada', 'Mesa 6', new Date(2017, 10, 19, 0, 59), [5, 2, 0, 0, 0], [12, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 8, 'Grupo A - 1º fase', '1º turno', '5º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [4, 2, 0, 0, 0], [12, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 9, 'Grupo A - 1º fase', '1º turno', '5º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [5, 2, 0, 0, 0], [13, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 10, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [0, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 11, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [14, 0, 0, 0, 0], [15, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 12, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [6, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 13, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [0, 1, 0, 0, 0], [14, 1, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 14, 14, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 5', new Date(2017, 10, 19, 0, 59), [6, 0, 0, 0, 0], [15, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 15, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 6', new Date(2017, 10, 19, 0, 59), [3, 1, 0, 0, 0], [14, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 16, 'Grupo B - 1º fase', '1º turno', '4º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [6, 0, 0, 0, 0], [14, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 17, 'Grupo B - 1º fase', '1º turno', '4º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [15, 0, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 18, 'Grupo B - 1º fase', '1º turno', '5º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [6, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 19, 'Grupo B - 1º fase', '1º turno', '5º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [15, 0, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 20, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 5', new Date(2017, 10, 19, 0, 59), [11, 0, 0, 0, 0], [9, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 21, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 6', new Date(2017, 10, 19, 0, 59), [16, 0, 0, 0, 0], [17, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 22, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 5', new Date(2017, 10, 19, 0, 59), [1, 3, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 23, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 6', new Date(2017, 10, 19, 0, 59), [11, 0, 0, 0, 0], [16, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 24, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [1, 2, 0, 0, 0], [17, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 25, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [9, 2, 0, 0, 0], [16, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 26, 'Grupo C - 1º fase', '1º turno', '4º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [1, 1, 0, 0, 0], [16, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 27, 'Grupo C - 1º fase', '1º turno', '4º Rodada', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [17, 0, 0, 0, 0], [11, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 28, 'Grupo C - 1º fase', '1º turno', '5º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [1, 5, 0, 0, 0], [11, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 29, 'Grupo C - 1º fase', '1º turno', '5º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [17, 1, 0, 0, 0], [9, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 30, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [19, 0, 0, 0, 0], [18, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 31, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [8, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 32, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 7', new Date(2017, 10, 19, 0, 59), [2, 1, 0, 0, 0], [18, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 33, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 8', new Date(2017, 10, 19, 0, 59), [19, 2, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 34, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [2, 0, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 35, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [18, 5, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 36, 'Grupo D - 1º fase', '1º turno', '4º Rodada', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [2, 1, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 37, 'Grupo D - 1º fase', '1º turno', '4º Rodada', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [7, 2, 0, 0, 0], [19, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 38, 'Grupo D - 1º fase', '1º turno', '5º Rodada', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [2, 0, 0, 0, 0], [19, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 39, 'Grupo D - 1º fase', '1º turno', '5º Rodada', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [7, 1, 0, 0, 0], [18, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 14, 40, 'Quartas de Final', '', 'Jogo Único', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [14, 1, 1, 0, 0], [13, 2, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 41, 'Quartas de Final', '', 'Jogo Único', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [7, 3, 0, 0, 0], [9, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 42, 'Quartas de Final', '', 'Jogo Único', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [1, 1, 0, 1, 0], [0, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 43, 'Quartas de Final', '', 'Jogo Único', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [10, 0, 0, 0, 0], [18, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 44, 'Semi-Final', 'Prata', 'Jogo Único', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [10, 1, 0, 0, 0], [0, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 45, 'Semi-Final', 'Prata', 'Jogo Único', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [14, 2, 0, 0, 0], [9, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 46, 'Semi-Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [7, 1, 0, 0, 0], [1, 1, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 47, 'Semi-Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [13, 2, 0, 0, 0], [18, 2, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 48, '3º Lugar', 'Prata', 'Jogo Único', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [9, 2, 0, 0, 0], [0, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 49, 'Final', 'Prata', 'Jogo Único', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [10, 1, 0, 0, 0], [14, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 50, '3º Lugar', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [7, 0, 0, 0, 0], [13, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 51, 'Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [18, 1, 0, 0, 0], [1, 3, 0, 0, 0], 'Penalti', false)
temporadas[14].modoCampeonato(temporadas[14])
// 1º L.U.C.F.M. 2018 World Cup Canoas
adicionarCampeonatoParticipantes(campeonatos[6], temporadas[15], [{ socio :socios[0], time: times[25]}, { socio :socios[1], time: times[26]}, { socio :socios[6], time: times[27]}, { socio :socios[7], time: times[28]}, { socio :socios[8], time: times[29]}, { socio :socios[10], time: times[30]}, { socio :socios[11], time: times[31]}, { socio :socios[12], time: times[32]}, { socio :socios[14], time: times[33]}, { socio :socios[15], time: times[34]}, { socio :socios[16], time: times[35]}, { socio :socios[17], time: times[36]}, { socio :socios[22], time: times[37]}, { socio :socios[25], time: times[38]}, { socio :socios[29], time: times[39]}, { socio :socios[30], time: times[40]}])
adicionarJogosPlacar(temporadas, 15, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 1', new Date(2018, 4, 6, 9, 0), [12, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 1, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 2', new Date(2018, 4, 6, 9, 0), [8, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 2, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 3', new Date(2018, 4, 6, 11, 0), [4, 3, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 3, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 4', new Date(2018, 4, 6, 11, 0), [2, 0, 0, 0, 0], [12, 0, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 15, 4, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 1', new Date(2018, 4, 6, 13, 0), [4, 0, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 5, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 2', new Date(2018, 4, 6, 13, 0), [12, 2, 0, 0, 0], [8, 0, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 15, 6, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 3', new Date(2018, 4, 6, 9, 0), [11, 0, 0, 0, 0], [15, 7, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 7, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 4', new Date(2018, 4, 6, 9, 0), [6, 4, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 8, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(2018, 4, 6, 11, 0), [15, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 9, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 2', new Date(2018, 4, 6, 11, 0), [6, 2, 0, 0, 0], [11, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 10, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 3', new Date(2018, 4, 6, 13, 0), [15, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 11, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 4', new Date(2018, 4, 6, 13, 0), [11, 4, 0, 0, 0], [7, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 12, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 1', new Date(2018, 4, 6, 10, 0), [13, 2, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 13, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 2', new Date(2018, 4, 6, 10, 0), [3, 0, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 14, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 3', new Date(2018, 4, 6, 12, 0), [9, 3, 0, 0, 1], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 15, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 4', new Date(2018, 4, 6, 12, 0), [0, 1, 0, 0, 0], [13, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 16, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 1', new Date(2018, 4, 6, 14, 0), [9, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 17, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 2', new Date(2018, 4, 6, 14, 0), [13, 1, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 18, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 3', new Date(2018, 4, 6, 10, 0), [10, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 19, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 4', new Date(2018, 4, 6, 10, 0), [14, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 20, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(2018, 4, 6, 12, 0), [5, 0, 0, 0, 0], [14, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 21, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 2', new Date(2018, 4, 6, 12, 0), [1, 0, 0, 0, 0], [10, 0, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 15, 22, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 3', new Date(2018, 4, 6, 14, 0), [5, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 23, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 4', new Date(2018, 4, 6, 14, 0), [10, 0, 0, 0, 0], [14, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 15, 24, 'Quartas de Final', '', 'Jogo Único', 'Mesa 1', new Date(2018, 4, 6, 15, 0), [12, 1, 0, 0, 0], [15, 1, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 25, 'Quartas de Final', '', 'Jogo Único', 'Mesa 2', new Date(2018, 4, 6, 15, 0), [13, 1, 0, 0, 0], [1, 1, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 26, 'Quartas de Final', '', 'Jogo Único', 'Mesa 3', new Date(2018, 4, 6, 15, 0), [6, 2, 0, 0, 0], [2, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 27, 'Quartas de Final', '', 'Jogo Único', 'Mesa 4', new Date(2018, 4, 6, 15, 0), [10, 2, 0, 0, 0], [9, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 28, 'Semi-Final', '', 'Jogo Único', 'Mesa 1', new Date(2018, 4, 6, 16, 0), [15, 0, 0, 0, 0], [1, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 29, 'Semi-Final', '', 'Jogo Único', 'Mesa 2', new Date(2018, 4, 6, 16, 0), [6, 1, 0, 0, 0], [10, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 30, '3º Lugar', '', 'Jogo Único', 'Mesa 1', new Date(2018, 4, 6, 17, 0), [15, 0, 0, 0, 0], [10, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 31, 'Final', '', 'Jogo Único', 'Mesa 2', new Date(2018, 4, 6, 17, 0), [1, 1, 0, 0, 0], [6, 0, 0, 0, 0], 'Penalti', false)
temporadas[15].modoCampeonato(temporadas[15])
// 1º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[16], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[8], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}, { socio :socios[12], time: ''}, { socio :socios[22], time: ''}, { socio :socios[25], time: ''}, { socio :socios[29], time: ''}, { socio :socios[30], time: ''}, { socio :socios[31], time: ''}, { socio :socios[32], time: ''}, { socio :socios[33], time: ''}, { socio :socios[34], time: ''}, { socio :socios[35], time: ''}, { socio :socios[36], time: ''}, { socio :socios[37], time: ''}, { socio :socios[38], time: ''}, { socio :socios[39], time: ''}])
adicionarJogosPlacar(temporadas, 16, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 1', new Date(2018, 6, 1, 9, 0), [16, 0, 0, 0, 0], [10, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 1, 'Grupo A - 1º fase', '1º turno', '1º Rodada', 'Mesa 2', new Date(2018, 6, 1, 10, 0), [1, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 2, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 2', new Date(2018, 6, 1, 11, 0), [4, 0, 0, 0, 0], [16, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 3, 'Grupo A - 1º fase', '1º turno', '2º Rodada', 'Mesa 2', new Date(2018, 6, 1, 12, 0), [10, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 4, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 3', new Date(2018, 6, 1, 13, 0), [1, 1, 0, 0, 0], [16, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 5, 'Grupo A - 1º fase', '1º turno', '3º Rodada', 'Mesa 3', new Date(2018, 6, 1, 14, 0), [4, 2, 0, 0, 0], [10, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 6, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 2', new Date(2018, 6, 1, 9, 0), [8, 0, 0, 0, 0], [17, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 7, 'Grupo B - 1º fase', '1º turno', '1º Rodada', 'Mesa 2', new Date(2018, 6, 1, 10, 0), [11, 1, 0, 0, 0], [12, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 8, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 5', new Date(2018, 6, 1, 11, 0), [17, 1, 0, 0, 0], [11, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 9, 'Grupo B - 1º fase', '1º turno', '2º Rodada', 'Mesa 5', new Date(2018, 6, 1, 12, 0), [12, 0, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 10, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 4', new Date(2018, 6, 1, 13, 0), [8, 0, 0, 0, 0], [11, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 11, 'Grupo B - 1º fase', '1º turno', '3º Rodada', 'Mesa 4', new Date(2018, 6, 1, 14, 0), [17, 1, 0, 0, 0], [12, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 12, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 3', new Date(2018, 6, 1, 9, 0), [6, 0, 0, 0, 0], [5, 5, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 13, 'Grupo C - 1º fase', '1º turno', '1º Rodada', 'Mesa 3', new Date(2018, 6, 1, 10, 0), [18, 0, 0, 0, 0], [9, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 14, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 4', new Date(2018, 6, 1, 11, 0), [5, 3, 0, 0, 1], [18, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 15, 'Grupo C - 1º fase', '1º turno', '2º Rodada', 'Mesa 4', new Date(2018, 6, 1, 12, 0), [9, 2, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 16, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 5', new Date(2018, 6, 1, 13, 0), [6, 0, 0, 0, 0], [18, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 17, 'Grupo C - 1º fase', '1º turno', '3º Rodada', 'Mesa 5', new Date(2018, 6, 1, 14, 0), [5, 0, 0, 0, 0], [9, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 18, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 5', new Date(2018, 6, 1, 9, 0), [3, 2, 0, 0, 1], [13, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 19, 'Grupo D - 1º fase', '1º turno', '1º Rodada', 'Mesa 5', new Date(2018, 6, 1, 10, 0), [19, 0, 0, 0, 0], [14, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 20, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 3', new Date(2018, 6, 1, 11, 0), [13, 0, 0, 0, 0], [19, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 21, 'Grupo D - 1º fase', '1º turno', '2º Rodada', 'Mesa 3', new Date(2018, 6, 1, 12, 0), [14, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 22, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 1', new Date(2018, 6, 1, 13, 0), [3, 0, 0, 0, 0], [19, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 23, 'Grupo D - 1º fase', '1º turno', '3º Rodada', 'Mesa 1', new Date(2018, 6, 1, 14, 0), [13, 0, 0, 0, 0], [14, 2, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 16, 24, 'Grupo E - 1º fase', '1º turno', '1º Rodada', 'Mesa 4', new Date(2018, 6, 1, 9, 0), [15, 1, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 25, 'Grupo E - 1º fase', '1º turno', '1º Rodada', 'Mesa 4', new Date(2018, 6, 1, 10, 0), [2, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 26, 'Grupo E - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(2018, 6, 1, 11, 0), [0, 0, 0, 0, 0], [15, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 27, 'Grupo E - 1º fase', '1º turno', '2º Rodada', 'Mesa 1', new Date(2018, 6, 1, 12, 0), [7, 2, 0, 0, 0], [2, 1, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 16, 28, 'Grupo E - 1º fase', '1º turno', '3º Rodada', 'Mesa 2', new Date(2018, 6, 1, 13, 0), [2, 1, 0, 0, 0], [15, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 29, 'Grupo E - 1º fase', '1º turno', '3º Rodada', 'Mesa 2', new Date(2018, 6, 1, 14, 0), [0, 0, 0, 0, 0], [7, 5, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 16, 30, 'Quartas de Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(2018, 6, 1, 15, 0), [2, 0, 0, 1, 0], [16, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 31, 'Quartas de Final', 'Bronze', 'Jogo Único', 'Mesa 3', new Date(2018, 6, 1, 16, 0), [12, 0, 0, 1, 0], [18, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 32, 'Quartas de Final', 'Bronze', 'Jogo Único', 'Mesa 4', new Date(2018, 6, 1, 16, 0), [19, 0, 0, 1, 0], [1, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 33, 'Quartas de Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(2018, 6, 1, 16, 0), [10, 1, 0, 0, 0], [11, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 34, 'Quartas de Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 15, 0), [5, 4, 0, 0, 0], [3, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 35, 'Quartas de Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 15, 0), [9, 0, 0, 0, 0], [7, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 36, 'Quartas de Final', 'Ouro', 'Jogo Único', 'Mesa 3', new Date(2018, 6, 1, 15, 0), [14, 0, 0, 0, 0], [4, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 37, 'Quartas de Final', 'Ouro', 'Jogo Único', 'Mesa 4', new Date(2018, 6, 1, 15, 0), [17, 2, 0, 0, 0], [15, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 38, 'Semi-Final', 'Bronze', 'Jogo Único', 'Mesa 4', new Date(2018, 6, 1, 17, 0), [19, 0, 0, 1, 0], [2, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 39, 'Semi-Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(2018, 6, 1, 17, 0), [12, 0, 0, 0, 0], [10, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 40, 'Semi-Final', 'Prata', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 16, 0), [3, 0, 0, 0, 0], [15, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 41, 'Semi-Final', 'Prata', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 16, 0), [9, 0, 0, 1, 0], [14, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 42, 'Semi-Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 17, 0), [7, 0, 0, 1, 0], [4, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 43, 'Semi-Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 17, 0), [17, 0, 0, 1, 0], [5, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 44, '3º Lugar', 'Bronze', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 18, 0), [19, 0, 0, 1, 0], [10, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 45, 'Final', 'Bronze', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 18, 0), [2, 0, 0, 0, 0], [12, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 46, '3º Lugar', 'Prata', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 17, 0), [14, 0, 0, 0, 0], [3, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 47, 'Final', 'Prata', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 18, 0), [15, 0, 0, 0, 0], [9, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 48, '3º Lugar', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 18, 0), [5, 1, 0, 1, 0], [4, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 49, 'Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 18, 0), [17, 1, 0, 0, 0], [7, 1, 0, 1, 0], 'Penalti', false)
temporadas[16].modoCampeonato(temporadas[16])
// 5º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[17], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}, { socio :socios[12], time: ''}, { socio :socios[30], time: ''}, { socio :socios[31], time: ''}, { socio :socios[32], time: ''}, { socio :socios[33], time: ''}, { socio :socios[40], time: ''}, { socio :socios[41], time: ''}])
colocarPontuacao(temporadas[17], [
    {v: 4, e: 6, d: 4, gp: 10, gc: 13},
    {v: 4, e: 5, d: 3, gp: 8, gc: 5},
    {v: 5, e: 5, d: 2, gp: 13, gc: 6},
    {v: 4, e: 4, d: 5, gp: 8, gc: 16},
    {v: 6, e: 5, d: 2, gp: 11, gc: 9},
    {v: 3, e: 9, d: 1, gp: 9, gc: 7},
    {v: 8, e: 5, d: 1, gp: 20, gc: 5},
    {v: 9, e: 3, d: 2, gp: 13, gc: 3},
    {v: 2, e: 4, d: 6, gp: 4, gc: 11},
    {v: 7, e: 3, d: 4, gp: 17, gc: 14},
    {v: 5, e: 3, d: 6, gp: 16, gc: 13},
    {v: 5, e: 5, d: 3, gp: 10, gc: 5},
    {v: 0, e: 0, d: 14, gp: 2, gc: 25},
    {v: 2, e: 0, d: 12, gp: 4, gc: 15},
    {v: 3, e: 5, d: 2, gp: 10, gc: 8},
])
temporadas[17].modoCampeonato(temporadas[17])
// 1º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[18], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}, { socio :socios[12], time: ''}, { socio :socios[30], time: ''}, { socio :socios[31], time: ''}, { socio :socios[32], time: ''}, { socio :socios[33], time: ''}, { socio :socios[40], time: ''}, { socio :socios[41], time: ''}])
// wo
adicionarJogosPlacar(temporadas, 18, 0, 'Oitavas de Final', '', 'Jogo Ida', '', '', [13, 0, 0, 0], [11, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 1, 'Oitavas de Final', '', 'Jogo Ida', '', '', [1, 0, 0, 0], [3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 2, 'Oitavas de Final', '', 'Jogo Ida', '', '', [5, 2, 0, 0], [0, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 3, 'Oitavas de Final', '', 'Jogo Ida', '', '', [8, 0, 0, 0], [2, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 4, 'Oitavas de Final', '', 'Jogo Ida', '', '', [4, 0, 0, 0], [9, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 5, 'Oitavas de Final', '', 'Jogo Ida', '', '', [7, 3, 0, 0], [10, 2, 0, 0], false, false)
// wo
adicionarJogosPlacar(temporadas, 18, 6, 'Oitavas de Final', '', 'Jogo Ida', '', '', [12, 0, 0, 0], [14, 1, 0, 0], false, false)
// wo 
adicionarJogosPlacar(temporadas, 18, 7, 'Oitavas de Final', '', 'Jogo Volta', '', '', [11, 1, 0, 0], [13, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 8, 'Oitavas de Final', '', 'Jogo Volta', '', '', [3, 1, 0, 0], [1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 9, 'Oitavas de Final', '', 'Jogo Volta', '', '', [0, 2, 0, 0], [5, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 10, 'Oitavas de Final', '', 'Jogo Volta', '', '', [2, 2, 0, 0], [8, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 11, 'Oitavas de Final', '', 'Jogo Volta', '', '', [9, 1, 0, 3], [4, 1, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 18, 12, 'Oitavas de Final', '', 'Jogo Volta', '', '', [10, 0, 0, 0], [7, 0, 0, 0], false, false)
// wo
adicionarJogosPlacar(temporadas, 18, 13, 'Oitavas de Final', '', 'Jogo Volta', '', '', [12, 0, 0, 0], [14, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 14, 'Quartas de Final', '', 'Jogo Ida', '', '', [11, 2, 0, 0], [3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 15, 'Quartas de Final', '', 'Jogo Ida', '', '', [0, 0, 0, 0], [2, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 16, 'Quartas de Final', '', 'Jogo Ida', '', '', [9, 0, 0, 0], [7, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 17, 'Quartas de Final', '', 'Jogo Ida', '', '', [14, 0, 0, 0], [6, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 18, 'Quartas de Final', '', 'Jogo Volta', '', '', [3, 0, 0, 0], [11, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 19, 'Quartas de Final', '', 'Jogo Volta', '', '', [2, 5, 0, 0], [0, 3, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 20, 'Quartas de Final', '', 'Jogo Volta', '', '', [7, 0, 0, 0], [9, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 21, 'Quartas de Final', '', 'Jogo Volta', '', '', [6, 1, 0, 0], [14, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 22, 'Semi Final', '', 'Jogo Ida', '', '', [11, 0, 0, 0], [2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 23, 'Semi Final', '', 'Jogo Ida', '', '', [7, 0, 0, 0], [6, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 24, 'Semi Final', '', 'Jogo Volta', '', '', [2, 1, 0, 0], [11, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 25, 'Semi Final', '', 'Jogo Volta', '', '', [6, 1, 0, 0], [7, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 26, 'Final', '', 'Jogo Ida', '', '', [11, 1, 0, 0], [6, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 27, 'Final', '', 'Jogo Volta', '', '', [6, 0, 0, 0], [11, 0, 0, 0], false, false)
temporadas[18].modoCampeonato(temporadas[18])
// 1º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[19], [{ socio :socios[32], time: ''}])
colocarPontuacao(temporadas[19], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[19].modoCampeonato(temporadas[19])
// 6º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[20], [{ socio :socios[0], time: ''}, { socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[11], time: ''}, { socio :socios[12], time: ''}, { socio :socios[30], time: ''}, { socio :socios[31], time: ''}, { socio :socios[32], time: ''}, { socio :socios[42], time: ''}, { socio :socios[43], time: ''}])
colocarPontuacao(temporadas[20], [
    {v: 1, e: 3, d: 9, gp: 7, gc: 27},
    {v: 4, e: 5, d: 4, gp: 10, gc: 9},
    {v: 3, e: 8, d: 2, gp: 13, gc: 8},
    {v: 4, e: 5, d: 4, gp: 13, gc: 13},
    {v: 6, e: 5, d: 2, gp: 14, gc: 5},
    {v: 5, e: 4, d: 4, gp: 11, gc: 14},
    {v: 5, e: 6, d: 2, gp: 11, gc: 8},
    {v: 4, e: 8, d: 1, gp: 17, gc: 9},
    {v: 1, e: 7, d: 5, gp: 7, gc: 12},
    {v: 7, e: 1, d: 5, gp: 20, gc: 16},
    {v: 2, e: 7, d: 4, gp: 6, gc: 11},
    {v: 4, e: 6, d: 3, gp: 12, gc: 7},
    {v: 3, e: 7, d: 3, gp: 5, gc: 7},
    {v: 3, e: 6, d: 4, gp: 8, gc: 8},
])
temporadas[20].modoCampeonato(temporadas[20])
// 7º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[21], [{ socio :socios[8], time: ''}])
colocarPontuacao(temporadas[21], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[21].modoCampeonato(temporadas[21])
// 8º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[22], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[22], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[22].modoCampeonato(temporadas[22])
// 2020 Florida Cup
adicionarCampeonatoParticipantes(campeonatos[10], temporadas[23], [{ socio :socios[44], time: ''}])
colocarPontuacao(temporadas[23], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[23].modoCampeonato(temporadas[23])
// 1º Libertadores da América
adicionarCampeonatoParticipantes(campeonatos[11], temporadas[24], [{ socio :socios[37], time: ''}])
colocarPontuacao(temporadas[24], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[24].modoCampeonato(temporadas[24])
// 9º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[25], [{ socio :socios[6], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[30], time: ''}, { socio :socios[32], time: ''}, { socio :socios[44], time: ''}, { socio :socios[45], time: ''}, { socio :socios[46], time: ''}])
colocarPontuacao(temporadas[25], [
    {v: 11, e: 2, d: 3, gp: 23, gc: 6},
    {v: 5, e: 2, d: 9, gp: 12, gc: 14},
    {v: 5, e: 2, d: 9, gp: 11, gc: 19},
    {v: 8, e: 6, d: 2, gp: 27, gc: 11},
    {v: 8, e: 3, d: 5, gp: 20, gc: 19},
    {v: 7, e: 6, d: 3, gp: 12, gc: 5},
    {v: 6, e: 6, d: 4, gp: 8, gc: 7},
    {v: 4, e: 1, d: 11, gp: 11, gc: 30},
    {v: 2, e: 4, d: 10, gp: 10, gc: 23},
])
temporadas[25].modoCampeonato(temporadas[25])
// 2º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[26], [{ socio :socios[1], time: ''}, { socio :socios[6], time: ''}, { socio :socios[7], time: ''}, { socio :socios[8], time: ''}, { socio :socios[9], time: ''}, { socio :socios[10], time: ''}, { socio :socios[30], time: ''}, { socio :socios[44], time: ''}, { socio :socios[45], time: ''}, { socio :socios[46], time: ''}])
adicionarJogosPlacar(temporadas, 26, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', [5, 2, 0, 0], [1, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 1, 'Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', [8, 1, 0, 0], [7, 3, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 2, 'Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0], [8, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 3, 'Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', [7, 1, 0, 0], [0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 4, 'Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', [5, 1, 0, 0], [7, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 5, 'Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', [8, 1, 0, 0], [0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 6, 'Grupo A - 1º fase', '1º turno', '4º Rodada', '', '', [5, 1, 0, 0], [0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 7, 'Grupo A - 1º fase', '1º turno', '4º Rodada', '', '', [1, 0, 0, 0], [7, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 8, 'Grupo A - 1º fase', '1º turno', '5º Rodada', '', '', [5, 0, 0, 0], [8, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 9, 'Grupo A - 1º fase', '1º turno', '5º Rodada', '', '', [1, 0, 0, 0], [0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 10, 'Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', [2, 0, 0, 0], [4, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 11, 'Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', [3, 1, 0, 0], [6, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 12, 'Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', [4, 1, 0, 0], [3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 13, 'Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', [6, 1, 0, 0], [9, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 14, 'Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', [2, 0, 0, 0], [6, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 15, 'Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', [3, 0, 0, 0], [9, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 16, 'Grupo B - 1º fase', '1º turno', '4º Rodada', '', '', [2, 0, 0, 0], [9, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 17, 'Grupo B - 1º fase', '1º turno', '4º Rodada', '', '', [4, 0, 0, 0], [6, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 18, 'Grupo B - 1º fase', '1º turno', '5º Rodada', '', '', [2, 0, 0, 0], [3, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 19, 'Grupo B - 1º fase', '1º turno', '5º Rodada', '', '', [4, 0, 0, 0], [9, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 26, 20, 'Quartas de Final', '', 'Jogo Único', '', '', [7, 1, 0, 0], [3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 21, 'Quartas de Final', '', 'Jogo Único', '', '', [6, 0, 0, 1], [0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 22, 'Quartas de Final', '', 'Jogo Único', '', '', [5, 2, 0, 0], [3, 0, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 23, 'Quartas de Final', '', 'Jogo Único', '', '', [9, 1, 0, 1], [8, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 24, 'Semi-Final', 'Prata', 'Jogo Único', '', '', [2, 0, 0, 0], [8, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 25, 'Semi-Final', 'Prata', 'Jogo Único', '', '', [0, 2, 0, 0], [3, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 26, 'Semi-Final', 'Ouro', 'Jogo Único', '', '', [7, 2, 0, 0], [9, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 27, 'Semi-Final', 'Ouro', 'Jogo Único', '', '', [6, 1, 0, 0], [5, 2, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 28, 'Final', 'Bronze', 'Jogo Único', '', '', [1, 0, 0, 0], [4, 0, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 29, '3º Lugar', 'Prata', 'Jogo Único', '', '', [2, 0, 0, 0], [3, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 30, 'Final', 'Prata', 'Jogo Único', '', '', [8, 0, 0, 0], [0, 2, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 31, '3º Lugar', 'Ouro', 'Jogo Único', '', '', [9, 2, 0, 2], [6, 2, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 32, 'Final', 'Ouro', 'Jogo Único', '', '', [7, 0, 0, 1], [5, 0, 0, 0], 'Penalti', false)
temporadas[26].modoCampeonato(temporadas[26])
// 10º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[27], [{ socio :socios[8], time: ''}, { socio :socios[10], time: ''}, { socio :socios[30], time: ''}, { socio :socios[32], time: ''}, { socio :socios[44], time: ''}, { socio :socios[45], time: ''}, { socio :socios[46], time: ''}])
colocarPontuacao(temporadas[27], [
    {v: 2, e: 5, d: 5, gp: 5, gc: 7},
    {v: 10, e: 1, d: 1, gp: 17, gc: 2},
    {v: 1, e: 4, d: 7, gp: 3, gc: 16},
    {v: 5, e: 5, d: 2, gp: 7, gc: 2},
    {v: 8, e: 1, d: 3, gp: 13, gc: 4},
    {v: 1, e: 3, d: 8, gp: 4, gc: 16},
    {v: 4, e: 3, d: 5, gp: 11, gc: 13},
])
temporadas[27].modoCampeonato(temporadas[27])
// 2º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[28], [{ socio :socios[22], time: ''}])
colocarPontuacao(temporadas[28], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[28].modoCampeonato(temporadas[28])
// 3º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[29], [{ socio :socios[47], time: ''}])
colocarPontuacao(temporadas[29], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[29].modoCampeonato(temporadas[29])
// 1º Taça Mariza Oliveira
adicionarCampeonatoParticipantes(campeonatos[12], temporadas[30], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[30], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[30].modoCampeonato(temporadas[30])
// 3º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[31], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[31], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[31].modoCampeonato(temporadas[31])
// 2º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[32], [{ socio :socios[10], time: ''}, { socio :socios[30], time: ''}])
adicionarJogosPlacar(temporadas, 32, 0, 'Final', '', 'Jogo Ida', '', '', [0, 2, 0, 0], [1, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 32, 1, 'Final', '', 'Jogo Volta', '', '', [1, 1, 0, 2], [0, 0, 0, 3], 'Penalti', false)
temporadas[32].modoCampeonato(temporadas[32])
// 2022 Florida Cup
adicionarCampeonatoParticipantes(campeonatos[10], temporadas[33], [{ socio :socios[1], time: ''}])
colocarPontuacao(temporadas[33], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[33].modoCampeonato(temporadas[33])
// 2º Libertadores da América
adicionarCampeonatoParticipantes(campeonatos[11], temporadas[34], [{ socio :socios[48], time: ''}])
colocarPontuacao(temporadas[34], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[34].modoCampeonato(temporadas[34])
// 11º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[35], [{ socio :socios[32], time: ''}])
colocarPontuacao(temporadas[35], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[35].modoCampeonato(temporadas[35])
// 4º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[36], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[36], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[36].modoCampeonato(temporadas[36])
// 3º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[37], [{ socio :socios[10], time: ''}, { socio :socios[30], time: ''}])
adicionarJogosPlacar(temporadas, 37, 0, 'Final', '', 'Jogo Ida', '', '', [0, 0, 0, 0], [1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 37, 1, 'Final', '', 'Jogo Volta', '', '', [1, 1, 0, 0], [0, 0, 0, 0], 'Penalti', false)
temporadas[37].modoCampeonato(temporadas[37])
// 4º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[38], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[38], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[38].modoCampeonato(temporadas[38])
// 4º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[39], [{ socio :socios[49], time: ''}])
colocarPontuacao(temporadas[39], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[39].modoCampeonato(temporadas[39])
// 2022 Taça Cidade do Avião
adicionarCampeonatoParticipantes(campeonatos[13], temporadas[40], [{ socio :socios[46], time: ''}])
colocarPontuacao(temporadas[40], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[40].modoCampeonato(temporadas[40])
// 2022 Copa do Mundo
adicionarCampeonatoParticipantes(campeonatos[14], temporadas[41], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[41], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[41].modoCampeonato(temporadas[41])
// 2023 Florida Cup
adicionarCampeonatoParticipantes(campeonatos[10], temporadas[42], [{ socio :socios[8], time: ''}])
colocarPontuacao(temporadas[42], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[42].modoCampeonato(temporadas[42])
// 12º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[43], [{ socio :socios[6], time: ''}])
colocarPontuacao(temporadas[43], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[43].modoCampeonato(temporadas[43])
// 5º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[44], [{ socio :socios[44], time: ''}])
colocarPontuacao(temporadas[44], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
// 1º Canoas Cup
adicionarCampeonatoParticipantes(campeonatos[15], temporadas[45], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[45], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[45].modoCampeonato(temporadas[45])
// 2023 Taça Cidade do Avião
adicionarCampeonatoParticipantes(campeonatos[13], temporadas[46], [{ socio :socios[32], time: ''}])
colocarPontuacao(temporadas[46], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[46].modoCampeonato(temporadas[46])
// 4º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[47], [{ socio :socios[50], time: ''}])
colocarPontuacao(temporadas[47], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[47].modoCampeonato(temporadas[47])
// 4º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[16], temporadas[48], [{ socio :socios[51], time: ''}])
colocarPontuacao(temporadas[48], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[48].modoCampeonato(temporadas[48])
// 1º clausura
adicionarCampeonatoParticipantes(campeonatos[17], temporadas[49], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[49], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[49].modoCampeonato(temporadas[49])
// 1º Torneio dadinho
adicionarCampeonatoParticipantes(campeonatos[18], temporadas[50], [{ socio :socios[31], time: ''}])
colocarPontuacao(temporadas[50], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[50].modoCampeonato(temporadas[50])
// 1º Canoas Copa
adicionarCampeonatoParticipantes(campeonatos[19], temporadas[51], [{ socio :socios[44], time: ''}])
colocarPontuacao(temporadas[51], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[51].modoCampeonato(temporadas[51])
// 1º Canoas Recopa
adicionarCampeonatoParticipantes(campeonatos[20], temporadas[52], [{ socio :socios[30], time: ''}])
colocarPontuacao(temporadas[52], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[52].modoCampeonato(temporadas[52])
// 1º Canoas Recopa
adicionarCampeonatoParticipantes(campeonatos[21], temporadas[53], [{ socio :socios[31], time: ''}])
colocarPontuacao(temporadas[53], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[53].modoCampeonato(temporadas[53])
// 13º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[54], [{ socio :socios[52], time: ''}])
colocarPontuacao(temporadas[54], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[54].modoCampeonato(temporadas[54])
// 1º Taça Cidade de Canoas doze toques
adicionarCampeonatoParticipantes(campeonatos[22], temporadas[55], [{ socio :socios[53], time: ''}])
colocarPontuacao(temporadas[55], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[55].modoCampeonato(temporadas[55])
// 6º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[56], [{ socio :socios[37], time: ''}])
colocarPontuacao(temporadas[56], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[56].modoCampeonato(temporadas[56])
// 1º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[23], temporadas[57], [{ socio :socios[44], time: ''}])
colocarPontuacao(temporadas[57], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[57].modoCampeonato(temporadas[57])
// 2º Torneio dadinho
adicionarCampeonatoParticipantes(campeonatos[18], temporadas[58], [{ socio :socios[44], time: ''}])
colocarPontuacao(temporadas[58], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[58].modoCampeonato(temporadas[58])
// 6º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[59], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[59], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[59].modoCampeonato(temporadas[59])
// 1º clausura
adicionarCampeonatoParticipantes(campeonatos[17], temporadas[60], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[60], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[60].modoCampeonato(temporadas[60])
// 1º Canoas Cup - Cavado
adicionarCampeonatoParticipantes(campeonatos[24], temporadas[61], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[61], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[61].modoCampeonato(temporadas[61])
// 1º Canoas Cup - Dadinho
adicionarCampeonatoParticipantes(campeonatos[25], temporadas[62], [{ socio :socios[54], time: ''}])
colocarPontuacao(temporadas[62], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[62].modoCampeonato(temporadas[62])
// 1º Campeonato L.U.C.F.M. - Dadinho
adicionarCampeonatoParticipantes(campeonatos[26], temporadas[63], [{ socio :socios[44], time: ''}])
colocarPontuacao(temporadas[63], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[63].modoCampeonato(temporadas[63])
// 1º Canoas Cup - 12 toques
adicionarCampeonatoParticipantes(campeonatos[27], temporadas[64], [{ socio :socios[53], time: ''}])
colocarPontuacao(temporadas[64], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[64].modoCampeonato(temporadas[64])
// 14º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[65], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[65], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[65].modoCampeonato(temporadas[65])
// 7º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[66], [{ socio :socios[52], time: ''}])
colocarPontuacao(temporadas[66], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[66].modoCampeonato(temporadas[66])
// 1º Copa Dadinho
adicionarCampeonatoParticipantes(campeonatos[28], temporadas[67], [{ socio :socios[55], time: ''}])
colocarPontuacao(temporadas[67], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[67].modoCampeonato(temporadas[67])
// 1º Taça Capão do Corvo de Dadinho
adicionarCampeonatoParticipantes(campeonatos[29], temporadas[68], [{ socio :socios[10], time: ''}])
colocarPontuacao(temporadas[68], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[68].modoCampeonato(temporadas[68])
// 6º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[69], [{ socio :socios[37], time: ''}])
colocarPontuacao(temporadas[69], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[69].modoCampeonato(temporadas[69])
// Champions League
adicionarCampeonatoParticipantes(campeonatos[30], temporadas[70], [{ socio :socios[56], time: ''}])
colocarPontuacao(temporadas[70], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[70].modoCampeonato(temporadas[70])
// 2025 Taça Cidade do Avião
adicionarCampeonatoParticipantes(campeonatos[13], temporadas[71], [{ socio :socios[52], time: ''}])
colocarPontuacao(temporadas[71], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[71].modoCampeonato(temporadas[71])
socios[0].adicionarSocio(false)
socios[2].adicionarSocio(false)
socios[3].adicionarSocio(false)
socios[4].adicionarSocio(false)
socios[5].adicionarSocio(false)
socios[7].adicionarSocio(false)
socios[9].adicionarSocio(false)
socios[11].adicionarSocio(false)
socios[12].adicionarSocio(false)
socios[13].adicionarSocio(false)
socios[31].adicionarSocio(false)
socios[33].adicionarSocio(false)
socios[40].adicionarSocio(false)
socios[41].adicionarSocio(false)
socios[42].adicionarSocio(false)
socios[43].adicionarSocio(false)
socios[51].adicionarSocio(false)
/* 
    // 0 Clóvis
    // 1 Claudio
    // 2 Joaquim
    // 3 Robinson
    // 4 Sandro
    // 5 Dário
    // 6 Paulo Marcos
    // 7 Fábio
    // 8 Paulo Renato
    // 9 Paulo Ricardo
    // 10 Cesar
    // 11 Rafael
    // 12 Alessandro
    // 13 Ademar
    // 14 Weber
    // 15 Gustavo
    // 16 Mario
    // 17 Soligo
    // 18 Sandro
    // 19 Padilha
    // 20 Carlos Barros
    // 21 André
    // 22 Fábio di Leone
    // 23 Guilherme
    // 24 Léo Rocha
    // 25 Lucas di Leone
    // 26 Alexandre
    // 27 Cláudio Rosa
    // 28 Marco
    // 29 Édson
    // 30 Dirceu
    // 31 Daniel
    // 32 Jamur
    // 33 Cadu
    // 34 Júnior
    // 35 Guilherme
    // 36 Marcus Peralta
    // 37 Calírio
    // 38 Elton
    // 39 José Medeiros
    // 40 Ernesto
    // 41 Rafael Pereira
    // 42 Osvaldo
    // 43 Polegar
    // 44 Marcelo 
    // 45 Motta
    // 46 Fernando
    // 47 Regis Castilhos
*/