import { Campeonato } from "../model/Campeonato.js";
import { tipos } from "./tipos.js"
import { regras } from "./regras.js";
import { associacoes } from "./associacoes.js";

export let campeonatos = [
    new Campeonato('Copa Rodrigues', tipos[0], regras[4], associacoes[0]), // 0
    new Campeonato('Supercopa', tipos[0], regras[4], associacoes[0]), // 1
    new Campeonato('Copa União', tipos[0], regras[4], associacoes[0]), // 2
    new Campeonato('Copa Panela', tipos[0], regras[4], associacoes[0]), // 3
    new Campeonato('Campeonato L.U.C.F.M.', tipos[0], regras[0], associacoes[1]), // 4
    new Campeonato('Torneio Integração', tipos[1], regras[0], associacoes[1]), // 5
    new Campeonato('World Cup Canoas', tipos[1], regras[0], associacoes[1]), // 6
    new Campeonato('Taça Cidade de Canoas', tipos[1], regras[0], associacoes[1]), // 7
    new Campeonato('Copa L.U.C.F.M.', tipos[0], regras[0], associacoes[1]), // 8
    new Campeonato('Recopa L.U.C.F.M.', tipos[0], regras[0], associacoes[1]), // 9
    new Campeonato('Florida Cup', tipos[0], regras[0], associacoes[1]), // 10
    new Campeonato('Libertadores da América', tipos[1], regras[0], associacoes[1]), // 11
    new Campeonato('Taça Mariza Oliveira', tipos[0], regras[0], associacoes[1]), // 12
    new Campeonato('Taça Cidade do Avião', tipos[0], regras[0], associacoes[1]), // 13
    new Campeonato('Copa do Mundo', tipos[0], regras[0], associacoes[1]), // 14
    new Campeonato('Canoas Cup', tipos[0], regras[3], associacoes[1]), // 15
    new Campeonato('Campeonato Municipal', tipos[1], regras[0], associacoes[1]), // 16
    new Campeonato('Clausura', tipos[0], regras[0], associacoes[1]), // 17
    new Campeonato('Torneio', tipos[0], regras[1], associacoes[1]), // 18
    new Campeonato('Canoas Copa', tipos[0], regras[3], associacoes[1]), // 19
    new Campeonato('Canoas Recopa', tipos[0], regras[3], associacoes[1]), // 20
    new Campeonato('Florida Cup Liso', tipos[0], regras[3], associacoes[1]), // 21
    new Campeonato('Taça Cidade de Canoas', tipos[1], regras[2], associacoes[1]), // 22
    new Campeonato('Campeonato L.U.C.F.M', tipos[0], regras[2], associacoes[1]), // 23
    new Campeonato('Canoas Cup', tipos[0], regras[0], associacoes[1]), // 24
    new Campeonato('Canoas Cup', tipos[0], regras[1], associacoes[1]), // 25
    new Campeonato('Campeonato L.U.C.F.M.', tipos[0], regras[1], associacoes[1]), // 26
    new Campeonato('Canoas Cup', tipos[0], regras[2], associacoes[1]), // 27
    new Campeonato('Copa', tipos[0], regras[1], associacoes[1]), // 28
    new Campeonato('Taça Capão do Corvo', tipos[0], regras[1], associacoes[1]), // 29
    new Campeonato('Champions League', tipos[0], regras[1], associacoes[1]), // 30
]