import { Temporada } from "../model/Temporada.js"
import { socios } from "./socios.js";
import { regras } from "./regras.js";
import { campeonatos } from "./campeonatos.js"
import { equipes } from "./equipes.js"
import { associacoes } from "./associacoes.js";
import { adicionarJogosPlacar } from "../../utils/adicionarJogosPlacar.js";
import { adicionarCampeonatoParticipantes } from "../../utils/adicionarCampeonatoParticipantes.js"
import { colocarPontuacao } from "../../utils/colocarPontuacao.js"

export let temporadas = [
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('3º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('4º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('5º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('2º', 3, true, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'sg', 'gp', 'cd', 'desempate']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('3º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('4º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('L.U.C.F.M. 2018', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('5º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('6º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('7º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('8º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2020', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('9º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('10º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('3º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('3º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2022', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('11º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('4º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('3º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('4º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('4º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2022', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2022', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2023', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('12º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('5º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2023', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('5º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('13º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('6º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('6º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('14º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('7º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('7º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('1º', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
    new Temporada('2025', 3, false, ['fase', 'pg', 'v', 'cd', 'desempate', 'sg', 'gp']),
]

socios[0].adicionarRegra(regras[0], false, false)
socios.forEach( socio => {
    socio.associacoes.forEach( associacao => {
        associacao.status = true
    })
})

// 1º Campeonato Rodrigues
adicionarCampeonatoParticipantes(campeonatos[0], temporadas[0], [{ socio :socios[0], equipe: equipes[2]}, { socio :socios[1], equipe: equipes[0]}, { socio :socios[2], equipe: equipes[1]}, { socio :socios[3], equipe: equipes[3]}])
adicionarJogosPlacar(temporadas, 0, 0, '1º fase', '1º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 1, '1º fase', '1º turno', '1º Rodada', '', '', [1, 3, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 2, '1º fase', '1º turno', '2º Rodada', '', '', [0, 2, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 3, '1º fase', '1º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 4, '1º fase', '1º turno', '3º Rodada', '', '', [0, 2, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 5, '1º fase', '1º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 6, '1º fase', '2º turno', '1º Rodada', '', '', [3, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 7, '1º fase', '2º turno', '1º Rodada', '', '', [2, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 8, '1º fase', '2º turno', '2º Rodada', '', '', [1, 3, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 9, '1º fase', '2º turno', '2º Rodada', '', '', [3, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 10, '1º fase', '2º turno', '3º Rodada', '', '', [2, 4, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 0, 11, '1º fase', '2º turno', '3º Rodada', '', '', [1, 3, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
temporadas[0].modoCampeonato(temporadas[0])

// 2º Campeonato Rodrigues
adicionarCampeonatoParticipantes(campeonatos[0], temporadas[1], [ { socio : socios[0], equipe: equipes[2]}, { socio : socios[0], equipe: equipes[5]},   { socio : socios[1], equipe: equipes[0]}, { socio : socios[1], equipe: equipes[4]}, { socio : socios[2], equipe: equipes[1]}, { socio : socios[2], equipe: equipes[6]}, { socio : socios[3], equipe: equipes[3]}, { socio : socios[3], equipe: equipes[7]}])
adicionarJogosPlacar(temporadas, 1, 0, '1º fase', '1º turno', '1º Rodada', '', '', [6, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 1, '1º fase', '1º turno', '1º Rodada', '', '', [7, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 2, '1º fase', '1º turno', '1º Rodada', '', '' , [5, 1, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 3, '1º fase', '1º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 4, '1º fase', '1º turno', '2º Rodada', '', '', [3, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 5, '1º fase', '1º turno', '2º Rodada', '', '', [5, 4, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 6, '1º fase', '1º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 7, '1º fase', '1º turno', '2º Rodada', '', '', [2, 3, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 8, '1º fase', '1º turno', '3º Rodada', '', '', [2, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 9, '1º fase', '1º turno', '3º Rodada', '', '', [0, 1, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 10, '1º fase', '1º turno', '3º Rodada', '', '', [7, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 11, '1º fase', '1º turno', '3º Rodada', '', '', [3, 3, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 12, '1º fase', '1º turno', '4º Rodada', '', '', [0, 1, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 13, '1º fase', '1º turno', '4º Rodada', '', '', [7, 0, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 14, '1º fase', '1º turno', '4º Rodada', '', '', [4, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 15, '1º fase', '1º turno', '4º Rodada', '', '', [3, 2, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 16, '1º fase', '1º turno', '5º Rodada', '', '', [1, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 17, '1º fase', '1º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 18, '1º fase', '1º turno', '5º Rodada', '', '', [6, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 19, '1º fase', '1º turno', '5º Rodada', '', '', [4, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 20, '1º fase', '1º turno', '6º Rodada', '', '', [1, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 21, '1º fase', '1º turno', '6º Rodada', '', '', [2, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 22, '1º fase', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 23, '1º fase', '1º turno', '6º Rodada', '', '', [4, 5, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 24, '1º fase', '1º turno', '7º Rodada', '', '', [0, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 25, '1º fase', '1º turno', '7º Rodada', '', '', [1, 2, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 26, '1º fase', '1º turno', '7º Rodada', '', '', [5, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 27, '1º fase', '1º turno', '7º Rodada', '', '', [6, 0, 0, 0, 0], [2, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 28, '1º fase', '2º turno', '1º Rodada', '', '', [4, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 29, '1º fase', '2º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 30, '1º fase', '2º turno', '1º Rodada', '', '', [1, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 31, '1º fase', '2º turno', '1º Rodada', '', '', [2, 0, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 32, '1º fase', '2º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 33, '1º fase', '2º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 34, '1º fase', '2º turno', '2º Rodada', '', '', [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 35, '1º fase', '2º turno', '2º Rodada', '', '', [7, 0, 0, 0, 0], [2, 5, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 36, '1º fase', '2º turno', '3º Rodada', '', '', [5, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 37, '1º fase', '2º turno', '3º Rodada', '', '', [4, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 38, '1º fase', '2º turno', '3º Rodada', '', '', [1, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 39, '1º fase', '2º turno', '3º Rodada', '', '', [6, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 40, '1º fase', '2º turno', '4º Rodada', '', '', [6, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 41, '1º fase', '2º turno', '4º Rodada', '', '', [5, 2, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 42, '1º fase', '2º turno', '4º Rodada', '', '', [2, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 43, '1º fase', '2º turno', '4º Rodada', '', '', [1, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 44, '1º fase', '2º turno', '5º Rodada', '', '', [2, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 45, '1º fase', '2º turno', '5º Rodada', '', '', [3, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 46, '1º fase', '2º turno', '5º Rodada', '', '', [7, 2, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 47, '1º fase', '2º turno', '5º Rodada', '', '', [5, 1, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 48, '1º fase', '2º turno', '6º Rodada', '', '', [6, 4, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 49, '1º fase', '2º turno', '6º Rodada', '', '', [3, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 50, '1º fase', '2º turno', '6º Rodada', '', '', [5, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 51, '1º fase', '2º turno', '6º Rodada', '', '', [7, 0, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 52, '1º fase', '2º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 53, '1º fase', '2º turno', '7º Rodada', '', '', [4, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 54, '1º fase', '2º turno', '7º Rodada', '', '', [3, 0, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 55, '1º fase', '2º turno', '7º Rodada', '', '', [2, 3, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 1, 56, 'Final', 'Jogo Unico', 'Jogo Unico', '', '', [2, 3, 0, 0, 0], [5, 1, 0, 0, 0], 'Penalti', false)
temporadas[1].modoCampeonato(temporadas[1])

// 3º Campeonato Rodrigues
adicionarCampeonatoParticipantes(campeonatos[0], temporadas[2], [{ socio : socios[0], equipe: equipes[2]}, { socio : socios[0], equipe: equipes[5]}, { socio : socios[1], equipe: equipes[0]}, { socio : socios[1], equipe: equipes[4]}, { socio : socios[2], equipe: equipes[1]}, { socio : socios[2], equipe: equipes[6]}, { socio : socios[3], equipe: equipes[3]}, { socio : socios[3], equipe: equipes[7]}])
adicionarJogosPlacar(temporadas, 2, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [5, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [4, 3, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [0, 2, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [2, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [3, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 9, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [3, 2, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [5, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [2, 1, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 12, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 13, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [7, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 14, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [4, 2, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [5, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 16, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [3, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 17, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [0, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 18, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [6, 0, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 19, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [7, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 20, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [7, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 21, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [6, 0, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 22, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [1, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 23, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 2, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 24, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [6, 1, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 25, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 26, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [2, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 27, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [7, 0, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 28, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [7, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 29, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [5, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 30, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 31, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 32, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [4, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 33, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [1, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 34, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [6, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 35, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [7, 1, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 36, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [6, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 37, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [3, 1, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 38, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [2, 2, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 39, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [1, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 40, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 41, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [5, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 42, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [2, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 43, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [1, 2, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 44, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [5, 3, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 45, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [4, 4, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 46, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [2, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 2, 47, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [3, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
temporadas[2].modoCampeonato(temporadas[2])

// 4º Campeonato Rodrigues
adicionarCampeonatoParticipantes(campeonatos[0], temporadas[3], [ { socio : socios[0], equipe: equipes[4]}, { socio : socios[0], equipe: equipes[11]}, { socio : socios[1], equipe: equipes[0]}, 
 { socio : socios[1], equipe: equipes[10]},  { socio : socios[2], equipe: equipes[1]}, { socio : socios[2], equipe: equipes[6]}, { socio : socios[3], equipe: equipes[8]}, { socio : socios[3], equipe: equipes[12]}, { socio : socios[4], equipe: equipes[9]}, { socio : socios[4], equipe: equipes[5]}])
adicionarJogosPlacar(temporadas, 3, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', [8, 1, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 1, 'Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', [6, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 2, 'Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', [5, 3, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 3, 'Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 4, 'Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', [2, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 5, 'Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', [0, 0, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 6, 'Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', [1, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 7, 'Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', [7, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 8, 'Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', [0, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 9, 'Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', [6, 1, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 10, 'Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', [3, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 11, 'Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', [7, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 12, 'Grupo A - 1º fase', '1º turno', '4º Rodada', '', '', [4, 0, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 13, 'Grupo A - 1º fase', '1º turno', '4º Rodada', '', '', [0, 2, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 14, 'Grupo B - 1º fase', '1º turno', '4º Rodada', '', '', [3, 2, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 15, 'Grupo B - 1º fase', '1º turno', '4º Rodada', '', '', [1, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 16, 'Grupo A - 1º fase', '1º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [8, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 17, 'Grupo A - 1º fase', '1º turno', '5º Rodada', '', '', [2, 3, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 18, 'Grupo B - 1º fase', '1º turno', '5º Rodada', '', '', [9, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 19, 'Grupo B - 1º fase', '1º turno', '5º Rodada', '', '', [1, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 3, 20, 'Semi Final', 'Jogo 1', 'Jogo Unico', '', '', [6, 1, 0, 0, 0], [1, 2, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 3, 21, 'Semi Final', 'Jogo 2', 'Jogo Unico', '', '', [8, 0, 0, 0, 0], [3, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 3, 22, '3º Lugar', 'Jogo Unico', 'Jogo Unico', '', '', [6, 3, 0, 1, 0], [8, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 3, 23, 'Final', 'Jogo Unico', 'Jogo Unico', '', '', [1, 1, 0, 0, 0], [3, 6, 0, 0, 0], 'Penalti', false)
temporadas[3].modoCampeonato(temporadas[3])

// 5º Campeonato Rodrigues
adicionarCampeonatoParticipantes(campeonatos[0], temporadas[4], [{ socio : socios[0], equipe: equipes[4]}, { socio : socios[1], equipe: equipes[13]}, { socio : socios[2], equipe: equipes[1]}, { socio : socios[3], equipe: equipes[8]}, { socio : socios[5], equipe: equipes[8]}])
adicionarJogosPlacar(temporadas, 4, 0, '1º fase', '1º turno', '1º Rodada', '', '', [0, 4, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 1, '1º fase', '1º turno', '1º Rodada', '', '', [3, 0, 0, 0, 0], [1, 6, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 2, '1º fase', '1º turno', '2º Rodada', '', '', [1, 5, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 3, '1º fase', '1º turno', '2º Rodada', '', '', [0, 6, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 4, '1º fase', '1º turno', '3º Rodada', '', '', [2, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 5, '1º fase', '1º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 6, '1º fase', '2º turno', '1º Rodada', '', '', [2, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 7, '1º fase', '2º turno', '1º Rodada', '', '', [1, 5, 0, 0, 0], [4, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 8, '1º fase', '2º turno', '2º Rodada', '', '', [2, 0, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 9, '1º fase', '2º turno', '2º Rodada', '', '', [4, 2, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 10, '1º fase', '2º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [2, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 4, 11, '1º fase', '2º turno', '3º Rodada', '', '', [1, 5, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
temporadas[4].modoCampeonato(temporadas[4])

// 1º Supercopa
adicionarCampeonatoParticipantes(campeonatos[1], temporadas[5], [{ socio : socios[0], equipe: equipes[4]}, { socio : socios[0], equipe: equipes[11]}, { socio : socios[1], equipe: equipes[13]}, { socio : socios[1], equipe: equipes[7]}, { socio : socios[2], equipe: equipes[1]}, { socio : socios[2], equipe: equipes[6]}, { socio : socios[3], equipe: equipes[8]}, { socio : socios[3], equipe: equipes[12]}, { socio : socios[5], equipe: equipes[8]}, { socio : socios[5], equipe: equipes[12]}])
adicionarJogosPlacar(temporadas, 5, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [6, 1, 0, 0, 0], [2, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [5, 1, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [0, 0, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [7, 0, 0, 0, 0], [3, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [1, 3, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 9, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [2, 3, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [4, 2, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 12, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [2, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 13, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 3, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 14, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [3, 3, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [5, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 16, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [3, 3, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 17, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [1, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 18, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [7, 0, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 19, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 20, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 2, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 21, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [5, 1, 0, 0, 0], [3, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 22, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [7, 1, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 23, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [4, 0, 0, 0, 0], [2, 7, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 24, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [4, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 25, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [9, 4, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 26, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [2, 5, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 27, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [1, 2, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 28, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [2, 5, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 29, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [5, 3, 0, 0, 0], [0, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 30, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [4, 5, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 31, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [3, 1, 0, 0, 0], [9, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 32, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [8, 1, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 33, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [5, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 34, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 35, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [9, 2, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 36, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [9, 0, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 37, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [4, 3, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 38, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [1, 1, 0, 0, 0], [3, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 39, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [8, 2, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 40, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [8, 0, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 41, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [4, 3, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 42, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [5, 0, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 43, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [2, 4, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 44, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [8, 3, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 45, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [3, 6, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 46, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [1, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 5, 47, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [2, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
temporadas[5].modoCampeonato(temporadas[5])

// 1º Copa União
adicionarCampeonatoParticipantes(campeonatos[2], temporadas[6], [{ socio : socios[0], equipe: equipes[2]}, { socio : socios[0], equipe: equipes[5]}, { socio : socios[0], equipe: equipes[15]}, { socio : socios[1], equipe: equipes[0]}, { socio : socios[1], equipe: equipes[4]}, { socio : socios[1], equipe: equipes[14]}, { socio : socios[3], equipe: equipes[3]}, { socio : socios[3], equipe: equipes[7]}, { socio : socios[3], equipe: equipes[16]}])
adicionarJogosPlacar(temporadas, 6, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [2, 2, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [0, 0, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [8, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [7, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [4, 2, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [5, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [7, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 9, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [0, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [6, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [3, 3, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 12, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [2, 1, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 13, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [3, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 14, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 2, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [5, 3, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 16, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [2, 0, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 17, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 18, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [6, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 19, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [3, 3, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 20, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [1, 2, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 21, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 22, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [7, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 23, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [8, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 24, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [1, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 25, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [5, 0, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 26, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [4, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 27, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 28, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 29, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 30, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [1, 0, 0, 0, 0], [7, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 31, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [8, 2, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 32, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [3, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 33, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 34, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [6, 2, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 35, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [5, 6, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 36, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [4, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 37, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [2, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 38, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [1, 0, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 39, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [7, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 40, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [6, 0, 0, 0, 0], [3, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 41, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [8, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 42, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [1, 2, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 43, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [5, 2, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 44, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [7, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 45, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 46, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [8, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 47, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [4, 3, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 48, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [5, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 49, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [3, 4, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 50, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [2, 1, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 51, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [6, 1, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 52, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 6, 53, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [8, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
temporadas[6].modoCampeonato(temporadas[6])

// 2º Copa União
adicionarCampeonatoParticipantes(campeonatos[2], temporadas[7], [{ socio : socios[0], equipe: equipes[4]}, { socio : socios[0], equipe: equipes[11]}, { socio : socios[0], equipe: equipes[19]}, { socio : socios[1], equipe: equipes[0]}, { socio : socios[1], equipe: equipes[10]}, { socio : socios[1], equipe: equipes[17]}, { socio : socios[3], equipe: equipes[8]}, { socio : socios[3], equipe: equipes[12]}, { socio : socios[3], equipe: equipes[18]}])
adicionarJogosPlacar(temporadas, 7, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [1, 0, 0, 4, 0], [6, 0, 0, 3, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [2, 1, 0, 0, 0], [5, 4, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [0, 0, 0, 2, 0], [7, 0, 0, 1, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [8, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 0, 0, 2, 0], [8, 0, 0, 1, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [0, 4, 0, 0, 0], [5, 3, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [7, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [4, 0, 0, 3, 0], [2, 0, 0, 1, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [2, 0, 0, 3, 0], [7, 0, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 9, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [3, 1, 0, 3, 0], [6, 1, 0, 2, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [0, 4, 0, 0, 0], [4, 3, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [5, 2, 0, 0, 0], [1, 3, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 12, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 0, 0, 0, 0], [8, 2, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 13, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [7, 0, 0, 0, 0], [5, 0, 0, 3, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 14, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [6, 2, 0, 0, 0], [2, 1, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [3, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 16, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [2, 1, 0, 1, 0], [3, 1, 0, 4, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 17, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [0, 3, 0, 0, 0], [6, 2, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 18, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [5, 3, 0, 0, 0], [8, 1, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 19, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [4, 3, 0, 0, 0], [7, 0, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 20, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [1, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 21, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [8, 0, 0, 1, 0], [2, 0, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 22, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [3, 4, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 23, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [5, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 24, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [6, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 25, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [7, 0, 0, 4, 0], [1, 0, 0, 5, 0], false, true)
adicionarJogosPlacar(temporadas, 7, 26, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [3, 4, 0, 0, 0], [8, 1, 0, 0, 0], false, true)
temporadas[7].modoCampeonato(temporadas[7])

// 1º Copa Panela
adicionarCampeonatoParticipantes(campeonatos[3], temporadas[8], [{ socio : socios[0], equipe: equipes[21]}, { socio : socios[0], equipe: equipes[22]}, { socio : socios[1], equipe: equipes[9]}, { socio : socios[1], equipe: equipes[24]}, { socio : socios[3], equipe: equipes[20]}, { socio : socios[3], equipe: equipes[23]}])
adicionarJogosPlacar(temporadas, 8, 0, 'Grupo A - 1º fase', '1º turno', '1º Rodada', '', '', [4, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 1, 'Grupo B - 1º fase', '1º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 2, 'Grupo A - 1º fase', '1º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 3, 'Grupo B - 1º fase', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 4, 'Grupo A - 1º fase', '1º turno', '3º Rodada', '', '', [2, 2, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 5, 'Grupo B - 1º fase', '1º turno', '3º Rodada', '', '', [1, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 6, 'Grupo A X Grupo B - 1º fase', '2º turno', '1º Rodada', '', '', [2, 2, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 7, 'Grupo A X Grupo B - 1º fase', '2º turno', '1º Rodada', '', '', [4, 3, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 8, 'Grupo A X Grupo B - 1º fase', '2º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 9, 'Grupo A X Grupo B - 1º fase', '2º turno', '2º Rodada', '', '', [2, 2, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 10, 'Grupo A X Grupo B - 1º fase', '2º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 11, 'Grupo A X Grupo B - 1º fase', '2º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 8, 12, 'Semi Final', 'Jogo 1', 'Jogo Unico', '', '', [0, 0, 0, 0, 0], [1, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 8, 13, 'Semi Final', 'Jogo 2', 'Jogo Unico', '', '', [2, 1, 0, 0, 0], [3, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 8, 14, 'Final', 'Jogo Unico', 'Jogo Unico', '', '', [1, 4, 0, 0, 0], [2, 3, 0, 0, 0], 'Penalti', false)
temporadas[8].modoCampeonato(temporadas[8])

socios[0].adicionarSocio(associacoes[1])
socios[1].adicionarSocio(associacoes[1])

// 1º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[9], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}])
adicionarJogosPlacar(temporadas, 9, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [5, 1, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [3, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 3, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [2, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 5, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 6, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [5, 4, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 7, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [2, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 9, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [4, 1, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 10, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 1, 0, 0, 0], [3, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 11, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [1, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 12, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [5, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 13, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 14, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [2, 3, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 15, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 16, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [2, 1, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 17, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [4, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 18, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [5, 1, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 19, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 20, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [3, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 21, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 22, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 23, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [1, 2, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 24, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [5, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 25, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [3, 6, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 26, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [2, 1, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 27, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [3, 3, 0, 0, 0], [5, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 28, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [1, 2, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 9, 29, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [0, 2, 0, 0, 0], [2, 7, 0, 0, 0], false, false)
temporadas[9].modoCampeonato(temporadas[9])

// 2º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[10], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}])
adicionarJogosPlacar(temporadas, 10, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [5, 0, 0, 0, 0], [1, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [0, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [7, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [5, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 9, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [7, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [6, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 12, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [2, 4, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 13, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 0, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 14, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [4, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [1, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 16, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [5, 2, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 17, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [2, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 18, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [6, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 19, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [7, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 20, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [4, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 21, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [3, 1, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 22, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [1, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 23, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 24, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [5, 0, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 25, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [4, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 26, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 27, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [2, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 28, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 29, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [7, 2, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 30, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 31, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [2, 6, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 32, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [5, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 33, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [0, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 34, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 35, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [3, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 36, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 37, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [2, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 38, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [1, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 39, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 40, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [5, 2, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 41, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [3, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 42, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [7, 0, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 43, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [6, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 44, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [3, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 45, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 46, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 47, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [1, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 48, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [5, 3, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 49, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [6, 3, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 50, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [2, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 51, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [7, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 52, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [6, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 53, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [1, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 54, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [3, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 10, 55, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [0, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
temporadas[10].modoCampeonato(temporadas[10])

// 3º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[11], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}])
adicionarJogosPlacar(temporadas, 11, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [7, 0, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [2, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [5, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 4, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [6, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [3, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [0, 0, 0, 0, 0], [4, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 8, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [7, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 9, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [6, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [2, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 12, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [1, 0, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 13, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [5, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 14, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 0, 0, 0, 0], [6, 6, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [3, 0, 0, 0, 0], [2, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 16, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [7, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 17, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [1, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 18, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [2, 3, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 19, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [6, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 20, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 21, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [4, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 22, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [3, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 23, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [5, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 24, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 25, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [0, 0, 0, 0, 0], [3, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 26, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [6, 1, 0, 0, 0], [4, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 27, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [1, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 28, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [3, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 29, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 30, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [0, 4, 0, 0, 0], [5, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 31, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [1, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 32, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [7, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 33, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [5, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 34, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [2, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 35, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [4, 3, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 36, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [5, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 37, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [1, 0, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 38, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 39, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [0, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 40, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [7, 1, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 41, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [4, 2, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 42, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [6, 3, 0, 0, 0], [0, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 43, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [2, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 44, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [4, 0, 0, 0, 0], [7, 0, 0, 0, 1], false, false)
adicionarJogosPlacar(temporadas, 11, 45, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [0, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 46, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [5, 1, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 47, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [3, 2, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 48, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [7, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 49, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [2, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 50, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [1, 3, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 51, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [6, 7, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 52, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [2, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 53, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [3, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 54, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [4, 1, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 11, 55, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [5, 2, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
temporadas[11].modoCampeonato(temporadas[11])

// 4º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[12], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[12], equipe: ''}, { socio :socios[13], equipe: ''}])
adicionarJogosPlacar(temporadas, 12, 0, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [8, 1, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 1, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [1, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 2, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [9, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 3, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [4, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 4, 'Pontos Corridos', '1º turno', '1º Rodada', '', '', [7, 1, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 5, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [6, 2, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 6, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [2, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 7, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [5, 1, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 8, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [0, 1, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 9, 'Pontos Corridos', '1º turno', '2º Rodada', '', '', [3, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 10, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [8, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 11, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [6, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 12, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [7, 1, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 13, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [1, 3, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 14, 'Pontos Corridos', '1º turno', '3º Rodada', '', '', [4, 0, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 15, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [5, 3, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 16, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [9, 0, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 17, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [3, 1, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 18, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [2, 0, 0, 0, 0], [4, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 19, 'Pontos Corridos', '1º turno', '4º Rodada', '', '', [0, 1, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 20, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [8, 2, 0, 0, 0], [7, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 21, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [5, 2, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 22, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [4, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 23, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [6, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 24, 'Pontos Corridos', '1º turno', '5º Rodada', '', '', [1, 0, 0, 0, 0], [2, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 25, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [9, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 26, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [3, 1, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 27, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [7, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 28, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [0, 0, 0, 0, 0], [5, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 29, 'Pontos Corridos', '1º turno', '6º Rodada', '', '', [2, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 30, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [8, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 31, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [3, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 32, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [1, 1, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 33, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [5, 0, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 34, 'Pontos Corridos', '1º turno', '7º Rodada', '', '', [6, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 35, 'Pontos Corridos', '1º turno', '8º Rodada', '', '', [2, 4, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 36, 'Pontos Corridos', '1º turno', '8º Rodada', '', '', [9, 0, 0, 0, 0], [5, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 37, 'Pontos Corridos', '1º turno', '8º Rodada', '', '', [0, 0, 0, 0, 0], [8, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 38, 'Pontos Corridos', '1º turno', '8º Rodada', '', '', [4, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 39, 'Pontos Corridos', '1º turno', '8º Rodada', '', '', [7, 3, 0, 0, 0], [6, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 40, 'Pontos Corridos', '1º turno', '9º Rodada', '', '', [8, 0, 0, 0, 0], [1, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 41, 'Pontos Corridos', '1º turno', '9º Rodada', '', '', [0, 0, 0, 0, 0], [2, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 42, 'Pontos Corridos', '1º turno', '9º Rodada', '', '', [6, 1, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 43, 'Pontos Corridos', '1º turno', '9º Rodada', '', '', [3, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 44, 'Pontos Corridos', '1º turno', '9º Rodada', '', '', [5, 1, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 45, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [2, 3, 0, 0, 0], [8, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 46, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [6, 0, 0, 0, 0], [1, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 47, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [0, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 48, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [5, 2, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 49, 'Pontos Corridos', '2º turno', '1º Rodada', '', '', [3, 1, 0, 0, 0], [7, 3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 50, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [8, 0, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 51, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [9, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 52, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [1, 1, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 53, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [7, 1, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 54, 'Pontos Corridos', '2º turno', '2º Rodada', '', '', [4, 0, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 55, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [9, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 56, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [5, 0, 0, 0, 0], [6, 4, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 57, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [2, 2, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 58, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [3, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 59, 'Pontos Corridos', '2º turno', '3º Rodada', '', '', [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 60, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [8, 0, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 61, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [7, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 62, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [6, 1, 0, 0, 0], [3, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 63, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [4, 0, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 64, 'Pontos Corridos', '2º turno', '4º Rodada', '', '', [1, 2, 0, 0, 0], [0, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 65, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [7, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 66, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [3, 3, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 67, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [9, 0, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 68, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [0, 1, 0, 0, 0], [6, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 69, 'Pontos Corridos', '2º turno', '5º Rodada', '', '', [2, 0, 0, 0, 0], [1, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 70, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [1, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 71, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [8, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 72, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [4, 0, 0, 0, 0], [7, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 73, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [5, 1, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 74, 'Pontos Corridos', '2º turno', '6º Rodada', '', '', [6, 4, 0, 0, 0], [2, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 75, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [4, 0, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 76, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [0, 2, 0, 0, 0], [3, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 77, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [7, 0, 0, 0, 0], [1, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 78, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [2, 1, 0, 0, 0], [5, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 79, 'Pontos Corridos', '2º turno', '7º Rodada', '', '', [9, 0, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 80, 'Pontos Corridos', '2º turno', '8º Rodada', '', '', [3, 1, 0, 0, 0], [2, 2, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 81, 'Pontos Corridos', '2º turno', '8º Rodada', '', '', [5, 1, 0, 0, 0], [9, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 82, 'Pontos Corridos', '2º turno', '8º Rodada', '', '', [8, 0, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 83, 'Pontos Corridos', '2º turno', '8º Rodada', '', '', [1, 1, 0, 0, 0], [4, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 84, 'Pontos Corridos', '2º turno', '8º Rodada', '', '', [6, 3, 0, 0, 0], [7, 0, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 85, 'Pontos Corridos', '2º turno', '9º Rodada', '', '', [1, 1, 0, 0, 0], [8, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 86, 'Pontos Corridos', '2º turno', '9º Rodada', '', '', [2, 2, 0, 0, 0], [0, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 87, 'Pontos Corridos', '2º turno', '9º Rodada', '', '', [4, 2, 0, 0, 0], [6, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 88, 'Pontos Corridos', '2º turno', '9º Rodada', '', '', [9, 0, 0, 0, 0], [3, 1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 12, 89, 'Pontos Corridos', '2º turno', '9º Rodada', '', '', [7, 0, 0, 0, 0], [5, 0, 0, 0, 0], false, false)
temporadas[12].modoCampeonato(temporadas[12])

// 1º Campeonato Integração
adicionarCampeonatoParticipantes(campeonatos[5], temporadas[13], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[14], equipe: ''}, { socio :socios[15], equipe: ''}, { socio :socios[16], equipe: ''}, { socio :socios[17], equipe: ''}, { socio :socios[18], equipe: ''}])
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
adicionarJogosPlacar(temporadas, 13, 12, 'Semi Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(1800, 0, 1, 14, 0), [3, 3, 0, 0, 0], [0, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 13, 'Semi Final', 'Bronze', 'Jogo Único', 'Mesa 6', new Date(1800, 0, 1, 14, 0), [11, 3, 0, 0, 0], [10, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 14, 'Semi Final', 'Prata', 'Jogo Único', 'Mesa 3', new Date(1800, 0, 1, 14, 0), [7, 1, 0, 0, 0], [6, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 15, 'Semi Final', 'Prata', 'Jogo Único', 'Mesa 4', new Date(1800, 0, 1, 14, 0), [1, 2, 0, 0, 0], [5, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 16, 'Semi Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(1800, 0, 1, 14, 0), [2, 0, 0, 0, 0], [9, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 17, 'Semi Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(1800, 0, 1, 14, 0), [8, 0, 0, 0, 0], [4, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 18, '3º Lugar', 'Bronze', 'Jogo Único', 'Mesa 6', new Date(1800, 0, 1, 15, 0), [0, 2, 0, 0, 0], [10, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 19, '3º Lugar', 'Prata', 'Jogo Único', 'Mesa 4', new Date(1800, 0, 1, 15, 0), [7, 3, 0, 0, 0], [5, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 20, '3º Lugar', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(1800, 0, 1, 15, 0), [2, 3, 0, 0, 0], [8, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 21, 'Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(1800, 0, 1, 15, 0), [3, 0, 0, 0, 0], [11, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 22, 'Final', 'Prata', 'Jogo Único', 'Mesa 3', new Date(1800, 0, 1, 15, 0), [6, 0, 0, 0, 0], [1, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 13, 23, 'Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(1800, 0, 1, 15, 0), [9, 1, 0, 0, 0], [4, 2, 0, 0, 0], 'Penalti', false)
temporadas[13].modoCampeonato(temporadas[13])

// 2º Campeonato Integração
adicionarCampeonatoParticipantes(campeonatos[5], temporadas[14], [{ socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[14], equipe: ''}, { socio :socios[15], equipe: ''}, { socio :socios[16], equipe: ''}, { socio :socios[17], equipe: ''}, { socio :socios[18], equipe: ''}, { socio :socios[19], equipe: ''}, { socio :socios[20], equipe: ''}, { socio :socios[21], equipe: ''}, { socio :socios[22], equipe: ''}, { socio :socios[23], equipe: ''}, { socio :socios[24], equipe: ''}, { socio :socios[25], equipe: ''}, { socio :socios[26], equipe: ''}, { socio :socios[27], equipe: ''}, { socio :socios[28], equipe: ''}])
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
adicionarJogosPlacar(temporadas, 14, 44, 'Semi Final', 'Prata', 'Jogo Único', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [10, 1, 0, 0, 0], [0, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 45, 'Semi Final', 'Prata', 'Jogo Único', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [14, 2, 0, 0, 0], [9, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 46, 'Semi Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [7, 1, 0, 0, 0], [1, 1, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 47, 'Semi Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [13, 2, 0, 0, 0], [18, 2, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 48, '3º Lugar', 'Prata', 'Jogo Único', 'Mesa 3', new Date(2017, 10, 19, 0, 59), [9, 2, 0, 0, 0], [0, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 49, '3º Lugar', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2017, 10, 19, 0, 59), [7, 0, 0, 0, 0], [13, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 50, 'Final', 'Prata', 'Jogo Único', 'Mesa 4', new Date(2017, 10, 19, 0, 59), [10, 1, 0, 0, 0], [14, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 14, 51, 'Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2017, 10, 19, 0, 59), [18, 1, 0, 0, 0], [1, 3, 0, 0, 0], 'Penalti', false)
temporadas[14].modoCampeonato(temporadas[14])

// 1º L.U.C.F.M. 2018 World Cup Canoas
adicionarCampeonatoParticipantes(campeonatos[6], temporadas[15], [{ socio :socios[0], equipe: equipes[25]}, { socio :socios[1], equipe: equipes[26]}, { socio :socios[6], equipe: equipes[27]}, { socio :socios[7], equipe: equipes[28]}, { socio :socios[8], equipe: equipes[29]}, { socio :socios[10], equipe: equipes[30]}, { socio :socios[11], equipe: equipes[31]}, { socio :socios[12], equipe: equipes[32]}, { socio :socios[14], equipe: equipes[33]}, { socio :socios[15], equipe: equipes[34]}, { socio :socios[16], equipe: equipes[35]}, { socio :socios[17], equipe: equipes[36]}, { socio :socios[22], equipe: equipes[37]}, { socio :socios[25], equipe: equipes[38]}, { socio :socios[29], equipe: equipes[39]}, { socio :socios[30], equipe: equipes[40]}])
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
adicionarJogosPlacar(temporadas, 15, 28, 'Semi Final', '', 'Jogo Único', 'Mesa 1', new Date(2018, 4, 6, 16, 0), [15, 0, 0, 0, 0], [1, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 29, 'Semi Final', '', 'Jogo Único', 'Mesa 2', new Date(2018, 4, 6, 16, 0), [6, 1, 0, 0, 0], [10, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 30, '3º Lugar', '', 'Jogo Único', 'Mesa 1', new Date(2018, 4, 6, 17, 0), [15, 0, 0, 0, 0], [10, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 15, 31, 'Final', '', 'Jogo Único', 'Mesa 2', new Date(2018, 4, 6, 17, 0), [1, 1, 0, 0, 0], [6, 0, 0, 0, 0], 'Penalti', false)
temporadas[15].modoCampeonato(temporadas[15])

// 1º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[16], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[12], equipe: ''}, { socio :socios[22], equipe: ''}, { socio :socios[25], equipe: ''}, { socio :socios[29], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[31], equipe: ''}, { socio :socios[32], equipe: ''}, { socio :socios[33], equipe: ''}, { socio :socios[34], equipe: ''}, { socio :socios[35], equipe: ''}, { socio :socios[36], equipe: ''}, { socio :socios[37], equipe: ''}, { socio :socios[38], equipe: ''}, { socio :socios[39], equipe: ''}])
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
adicionarJogosPlacar(temporadas, 16, 38, 'Semi Final', 'Bronze', 'Jogo Único', 'Mesa 4', new Date(2018, 6, 1, 17, 0), [19, 0, 0, 1, 0], [2, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 39, 'Semi Final', 'Bronze', 'Jogo Único', 'Mesa 5', new Date(2018, 6, 1, 17, 0), [12, 0, 0, 0, 0], [10, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 40, 'Semi Final', 'Prata', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 16, 0), [3, 0, 0, 0, 0], [15, 3, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 41, 'Semi Final', 'Prata', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 16, 0), [9, 0, 0, 1, 0], [14, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 42, 'Semi Final', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 17, 0), [7, 0, 0, 1, 0], [4, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 43, 'Semi Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 17, 0), [17, 0, 0, 1, 0], [5, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 44, '3º Lugar', 'Bronze', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 18, 0), [19, 0, 0, 1, 0], [10, 0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 45, 'Final', 'Bronze', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 18, 0), [2, 0, 0, 0, 0], [12, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 46, '3º Lugar', 'Prata', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 17, 0), [14, 0, 0, 0, 0], [3, 0, 0, 1, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 47, 'Final', 'Prata', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 18, 0), [15, 0, 0, 0, 0], [9, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 48, '3º Lugar', 'Ouro', 'Jogo Único', 'Mesa 1', new Date(2018, 6, 1, 18, 0), [5, 1, 0, 1, 0], [4, 1, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 16, 49, 'Final', 'Ouro', 'Jogo Único', 'Mesa 2', new Date(2018, 6, 1, 18, 0), [17, 1, 0, 0, 0], [7, 1, 0, 1, 0], 'Penalti', false)
temporadas[16].modoCampeonato(temporadas[16])

// 5º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[17], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[12], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[31], equipe: ''}, { socio :socios[32], equipe: ''}, { socio :socios[33], equipe: ''}, { socio :socios[40], equipe: ''}, { socio :socios[41], equipe: ''}])
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
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[18], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[12], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[31], equipe: ''}, { socio :socios[32], equipe: ''}, { socio :socios[33], equipe: ''}, { socio :socios[40], equipe: ''}, { socio :socios[41], equipe: ''}])
adicionarJogosPlacar(temporadas, 18, 0, 'Oitavas de Final', '', 'Jogo Ida', '', '', [13, 0, 0, 0], [11, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 1, 'Oitavas de Final', '', 'Jogo Ida', '', '', [1, 0, 0, 0], [3, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 2, 'Oitavas de Final', '', 'Jogo Ida', '', '', [5, 2, 0, 0], [0, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 3, 'Oitavas de Final', '', 'Jogo Ida', '', '', [8, 0, 0, 0], [2, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 4, 'Oitavas de Final', '', 'Jogo Ida', '', '', [4, 0, 0, 0], [9, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 5, 'Oitavas de Final', '', 'Jogo Ida', '', '', [7, 3, 0, 0], [10, 2, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 6, 'Oitavas de Final', '', 'Jogo Ida', '', '', [12, 0, 0, 0], [14, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 7, 'Oitavas de Final', '', 'Jogo Volta', '', '', [11, 1, 0, 0], [13, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 8, 'Oitavas de Final', '', 'Jogo Volta', '', '', [3, 1, 0, 0], [1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 9, 'Oitavas de Final', '', 'Jogo Volta', '', '', [0, 2, 0, 0], [5, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 10, 'Oitavas de Final', '', 'Jogo Volta', '', '', [2, 2, 0, 0], [8, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 18, 11, 'Oitavas de Final', '', 'Jogo Volta', '', '', [9, 1, 0, 3], [4, 1, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 18, 12, 'Oitavas de Final', '', 'Jogo Volta', '', '', [10, 0, 0, 0], [7, 0, 0, 0], false, false)
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
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[19], [{ socio :socios[32], equipe: ''}])
colocarPontuacao(temporadas[19], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[19].modoCampeonato(temporadas[19])

// 6º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[20], [{ socio :socios[0], equipe: ''}, { socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[11], equipe: ''}, { socio :socios[12], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[31], equipe: ''}, { socio :socios[32], equipe: ''}, { socio :socios[42], equipe: ''}, { socio :socios[43], equipe: ''}])
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
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[21], [{ socio :socios[8], equipe: ''}])
colocarPontuacao(temporadas[21], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[21].modoCampeonato(temporadas[21])

// 8º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[22], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[22], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[22].modoCampeonato(temporadas[22])

// 2020 Florida Cup
adicionarCampeonatoParticipantes(campeonatos[10], temporadas[23], [{ socio :socios[44], equipe: ''}])
colocarPontuacao(temporadas[23], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[23].modoCampeonato(temporadas[23])

// 1º Libertadores da América
adicionarCampeonatoParticipantes(campeonatos[11], temporadas[24], [{ socio :socios[37], equipe: ''}])
colocarPontuacao(temporadas[24], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[24].modoCampeonato(temporadas[24])

// 9º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[25], [{ socio :socios[6], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[32], equipe: ''}, { socio :socios[44], equipe: ''}, { socio :socios[45], equipe: ''}, { socio :socios[46], equipe: ''}])
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
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[26], [{ socio :socios[1], equipe: ''}, { socio :socios[6], equipe: ''}, { socio :socios[7], equipe: ''}, { socio :socios[8], equipe: ''}, { socio :socios[9], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[44], equipe: ''}, { socio :socios[45], equipe: ''}, { socio :socios[46], equipe: ''}])
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
adicionarJogosPlacar(temporadas, 26, 20, 'Quartas de Final', '', 'Jogo Único', '', '', [7, 1, 0, 0], [2, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 21, 'Quartas de Final', '', 'Jogo Único', '', '', [6, 0, 0, 1], [0, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 22, 'Quartas de Final', '', 'Jogo Único', '', '', [5, 2, 0, 0], [3, 0, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 23, 'Quartas de Final', '', 'Jogo Único', '', '', [9, 1, 0, 1], [8, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 24, 'Semi Final', 'Prata', 'Jogo Único', '', '', [2, 0, 0, 0], [8, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 25, 'Semi Final', 'Prata', 'Jogo Único', '', '', [0, 2, 0, 0], [3, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 26, 'Semi Final', 'Ouro', 'Jogo Único', '', '', [7, 2, 0, 0], [9, 0, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 27, 'Semi Final', 'Ouro', 'Jogo Único', '', '', [6, 1, 0, 0], [5, 2, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 28, 'Final', 'Bronze', 'Jogo Único', '', '', [1, 0, 0, 0], [4, 0, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 29, '3º Lugar', 'Prata', 'Jogo Único', '', '', [2, 0, 0, 0], [3, 1, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 30, 'Final', 'Prata', 'Jogo Único', '', '', [8, 0, 0, 0], [0, 2, 0, 0], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 31, '3º Lugar', 'Ouro', 'Jogo Único', '', '', [9, 2, 0, 2], [6, 2, 0, 1], 'Penalti', false)
adicionarJogosPlacar(temporadas, 26, 32, 'Final', 'Ouro', 'Jogo Único', '', '', [7, 0, 0, 1], [5, 0, 0, 0], 'Penalti', false)
temporadas[26].modoCampeonato(temporadas[26])

// 10º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[27], [{ socio :socios[8], equipe: ''}, { socio :socios[10], equipe: ''}, { socio :socios[30], equipe: ''}, { socio :socios[32], equipe: ''}, { socio :socios[44], equipe: ''}, { socio :socios[45], equipe: ''}, { socio :socios[46], equipe: ''}])
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
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[28], [{ socio :socios[22], equipe: ''}])
colocarPontuacao(temporadas[28], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[28].modoCampeonato(temporadas[28])

// 3º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[29], [{ socio :socios[47], equipe: ''}])
colocarPontuacao(temporadas[29], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[29].modoCampeonato(temporadas[29])

// 1º Taça Mariza Oliveira
adicionarCampeonatoParticipantes(campeonatos[12], temporadas[30], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[30], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[30].modoCampeonato(temporadas[30])

// 3º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[31], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[31], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[31].modoCampeonato(temporadas[31])

// 2º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[32], [{ socio :socios[10], equipe: ''}, { socio :socios[30], equipe: ''}])
adicionarJogosPlacar(temporadas, 32, 0, 'Final', '', 'Jogo Ida', '', '', [0, 2, 0, 0], [1, 1, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 32, 1, 'Final', '', 'Jogo Volta', '', '', [1, 1, 0, 2], [0, 0, 0, 3], 'Penalti', false)
temporadas[32].modoCampeonato(temporadas[32])

// 2022 Florida Cup
adicionarCampeonatoParticipantes(campeonatos[10], temporadas[33], [{ socio :socios[1], equipe: ''}])
colocarPontuacao(temporadas[33], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[33].modoCampeonato(temporadas[33])

// 2º Libertadores da América
adicionarCampeonatoParticipantes(campeonatos[11], temporadas[34], [{ socio :socios[48], equipe: ''}])
colocarPontuacao(temporadas[34], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[34].modoCampeonato(temporadas[34])

// 11º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[35], [{ socio :socios[32], equipe: ''}])
colocarPontuacao(temporadas[35], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[35].modoCampeonato(temporadas[35])

// 4º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[36], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[36], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[36].modoCampeonato(temporadas[36])

// 3º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[37], [{ socio :socios[10], equipe: ''}, { socio :socios[30], equipe: ''}])
adicionarJogosPlacar(temporadas, 37, 0, 'Final', '', 'Jogo Ida', '', '', [0, 0, 0, 0], [1, 0, 0, 0], false, false)
adicionarJogosPlacar(temporadas, 37, 1, 'Final', '', 'Jogo Volta', '', '', [1, 1, 0, 0], [0, 0, 0, 0], 'Penalti', false)
temporadas[37].modoCampeonato(temporadas[37])

// 4º Recopa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[9], temporadas[38], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[38], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[38].modoCampeonato(temporadas[38])

// 4º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[39], [{ socio :socios[49], equipe: ''}])
colocarPontuacao(temporadas[39], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[39].modoCampeonato(temporadas[39])

// 2022 Taça Cidade do Avião
adicionarCampeonatoParticipantes(campeonatos[13], temporadas[40], [{ socio :socios[46], equipe: ''}])
colocarPontuacao(temporadas[40], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[40].modoCampeonato(temporadas[40])

// 2022 Copa do Mundo
adicionarCampeonatoParticipantes(campeonatos[14], temporadas[41], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[41], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[41].modoCampeonato(temporadas[41])

// 2023 Florida Cup
adicionarCampeonatoParticipantes(campeonatos[10], temporadas[42], [{ socio :socios[8], equipe: ''}])
colocarPontuacao(temporadas[42], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[42].modoCampeonato(temporadas[42])

// 12º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[43], [{ socio :socios[6], equipe: ''}])
colocarPontuacao(temporadas[43], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[43].modoCampeonato(temporadas[43])

// 5º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[44], [{ socio :socios[44], equipe: ''}])
colocarPontuacao(temporadas[44], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])

// 1º Canoas Cup
adicionarCampeonatoParticipantes(campeonatos[15], temporadas[45], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[45], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[45].modoCampeonato(temporadas[45])

// 2023 Taça Cidade do Avião
adicionarCampeonatoParticipantes(campeonatos[13], temporadas[46], [{ socio :socios[32], equipe: ''}])
colocarPontuacao(temporadas[46], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[46].modoCampeonato(temporadas[46])

// 4º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[47], [{ socio :socios[50], equipe: ''}])
colocarPontuacao(temporadas[47], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[47].modoCampeonato(temporadas[47])

// 4º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[16], temporadas[48], [{ socio :socios[51], equipe: ''}])
colocarPontuacao(temporadas[48], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[48].modoCampeonato(temporadas[48])

// 1º clausura
adicionarCampeonatoParticipantes(campeonatos[17], temporadas[49], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[49], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[49].modoCampeonato(temporadas[49])

// 1º Torneio dadinho
adicionarCampeonatoParticipantes(campeonatos[18], temporadas[50], [{ socio :socios[31], equipe: ''}])
colocarPontuacao(temporadas[50], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[50].modoCampeonato(temporadas[50])

// 1º Canoas Copa
adicionarCampeonatoParticipantes(campeonatos[19], temporadas[51], [{ socio :socios[44], equipe: ''}])
colocarPontuacao(temporadas[51], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[51].modoCampeonato(temporadas[51])

// 1º Canoas Recopa
adicionarCampeonatoParticipantes(campeonatos[20], temporadas[52], [{ socio :socios[30], equipe: ''}])
colocarPontuacao(temporadas[52], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[52].modoCampeonato(temporadas[52])

// 1º Canoas Recopa
adicionarCampeonatoParticipantes(campeonatos[21], temporadas[53], [{ socio :socios[31], equipe: ''}])
colocarPontuacao(temporadas[53], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[53].modoCampeonato(temporadas[53])

// 13º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[54], [{ socio :socios[52], equipe: ''}])
colocarPontuacao(temporadas[54], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[54].modoCampeonato(temporadas[54])

// 1º Taça Cidade de Canoas doze toques
adicionarCampeonatoParticipantes(campeonatos[22], temporadas[55], [{ socio :socios[53], equipe: ''}])
colocarPontuacao(temporadas[55], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[55].modoCampeonato(temporadas[55])

// 6º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[56], [{ socio :socios[37], equipe: ''}])
colocarPontuacao(temporadas[56], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[56].modoCampeonato(temporadas[56])

// 1º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[23], temporadas[57], [{ socio :socios[44], equipe: ''}])
colocarPontuacao(temporadas[57], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[57].modoCampeonato(temporadas[57])

// 2º Torneio dadinho
adicionarCampeonatoParticipantes(campeonatos[18], temporadas[58], [{ socio :socios[44], equipe: ''}])
colocarPontuacao(temporadas[58], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[58].modoCampeonato(temporadas[58])

// 6º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[59], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[59], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[59].modoCampeonato(temporadas[59])

// 1º clausura
adicionarCampeonatoParticipantes(campeonatos[17], temporadas[60], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[60], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[60].modoCampeonato(temporadas[60])

// 1º Canoas Cup - Cavado
adicionarCampeonatoParticipantes(campeonatos[24], temporadas[61], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[61], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[61].modoCampeonato(temporadas[61])

// 1º Canoas Cup - Dadinho
adicionarCampeonatoParticipantes(campeonatos[25], temporadas[62], [{ socio :socios[54], equipe: ''}])
colocarPontuacao(temporadas[62], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[62].modoCampeonato(temporadas[62])

// 1º Campeonato L.U.C.F.M. - Dadinho
adicionarCampeonatoParticipantes(campeonatos[26], temporadas[63], [{ socio :socios[44], equipe: ''}])
colocarPontuacao(temporadas[63], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[63].modoCampeonato(temporadas[63])

// 1º Canoas Cup - 12 toques
adicionarCampeonatoParticipantes(campeonatos[27], temporadas[64], [{ socio :socios[53], equipe: ''}])
colocarPontuacao(temporadas[64], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[64].modoCampeonato(temporadas[64])

// 14º Campeonato L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[4], temporadas[65], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[65], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[65].modoCampeonato(temporadas[65])

// 7º Copa L.U.C.F.M.
adicionarCampeonatoParticipantes(campeonatos[8], temporadas[66], [{ socio :socios[52], equipe: ''}])
colocarPontuacao(temporadas[66], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[66].modoCampeonato(temporadas[66])

// 1º Copa Dadinho
adicionarCampeonatoParticipantes(campeonatos[28], temporadas[67], [{ socio :socios[55], equipe: ''}])
colocarPontuacao(temporadas[67], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[67].modoCampeonato(temporadas[67])

// 1º Taça Capão do Corvo de Dadinho
adicionarCampeonatoParticipantes(campeonatos[29], temporadas[68], [{ socio :socios[10], equipe: ''}])
colocarPontuacao(temporadas[68], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[68].modoCampeonato(temporadas[68])

// 6º Taça Cidade de Canoas
adicionarCampeonatoParticipantes(campeonatos[7], temporadas[69], [{ socio :socios[37], equipe: ''}])
colocarPontuacao(temporadas[69], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[69].modoCampeonato(temporadas[69])

// Champions League
adicionarCampeonatoParticipantes(campeonatos[30], temporadas[70], [{ socio :socios[56], equipe: ''}])
colocarPontuacao(temporadas[70], [
    {v: 0, e: 0, d: 0, gp: 0, gc: 0},
])
temporadas[70].modoCampeonato(temporadas[70])

// 2025 Taça Cidade do Avião
adicionarCampeonatoParticipantes(campeonatos[13], temporadas[71], [{ socio :socios[52], equipe: ''}])
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