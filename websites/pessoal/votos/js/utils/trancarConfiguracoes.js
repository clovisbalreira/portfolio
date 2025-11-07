import { escolhaUsuario } from "../mvc/controll/escolhaUsuario.js"

export function trancarConfiguracoes(){
    if(escolhaUsuario.deputados.length > 0) document.getElementById('configurao-deputado').disabled = true
    if(escolhaUsuario.partidos.length > 0) document.getElementById('configurao-partido').disabled = true
    if(escolhaUsuario.deputados.length > 0 && escolhaUsuario.partidos.length > 0) document.getElementById('configurao-lei').disabled = true
}