import { Tabela48Equipes12GruposCom4Equipes } from "../model/formulas/Tabela48Equipes12GruposCom4Equipes.js"
import { campeonatos } from "./campeonatos.js"
import { paises } from "./paises.js"

export let competicoes = [
    new Tabela48Equipes12GruposCom4Equipes('2026', campeonatos[0], 'mascote-2026.png', [paises[11], paises[46], paises[80]], 'taca-fifa.png'),
]