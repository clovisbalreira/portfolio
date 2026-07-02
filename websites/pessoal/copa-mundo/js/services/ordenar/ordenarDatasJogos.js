import { criterioDatas } from "../criterioDatas.js"

export function ordenarDatasJogos(grupo, jogo, data){
    jogo.data = data
    grupo.jogos.sort((a, b) => criterioDatas(a, b))
}