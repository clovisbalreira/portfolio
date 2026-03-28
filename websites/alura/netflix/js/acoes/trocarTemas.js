import { trocarTema } from "../componentes/tema/trocarTema.js"
import { mudarTemaClaroEscuro } from "../componentes/utils/mudarTemaClaroEscuro.js"

export function trocarTemas(){
    trocarTema('button-netflix', '', 'Quem está assistindo?')
    trocarTema('button-spotify', 'tema-verde', 'O que está ouvindo?')
    trocarTema('button-variado', 'tema-azul', 'O que está fazendo?')
    mudarTemaClaroEscuro()
}