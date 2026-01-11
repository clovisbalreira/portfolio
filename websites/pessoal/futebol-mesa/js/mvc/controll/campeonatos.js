import { Campeonato } from "../model/Campeonato.js";
import { tipos } from "./tipos.js"
import { regras } from "./regras.js";
import { associacoes } from "./associacoes.js";

export let campeonatos = [
    new Campeonato('Copa Rodrigues', tipos[0], regras[4], associacoes[0]),
    new Campeonato('Supercopa', tipos[0], regras[4], associacoes[0]),
    new Campeonato('Copa União', tipos[0], regras[4], associacoes[0]),
    new Campeonato('Copa Panela', tipos[0], regras[4], associacoes[0]),
    new Campeonato('Campeonato L.U.C.F.M.', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Copa L.U.C.F.M.', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Recopa L.U.C.F.M.', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Taça Mariza', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Canoas Cup', tipos[0], regras[3], associacoes[1]),
    new Campeonato('Taça Cidade do Avião', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Campeonato Municipal', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Clausura', tipos[0], regras[0], associacoes[1]),
    new Campeonato('Torneio de dadinho', tipos[0], regras[1], associacoes[1]),
    new Campeonato('Campeonato Canoense de liso', tipos[0], regras[3], associacoes[1]),
    new Campeonato('Copa Canoense de liso', tipos[0], regras[3], associacoes[1]),
    new Campeonato('Recopa Canoense de liso', tipos[0], regras[2], associacoes[1]),
    new Campeonato('Campeonato Canoense de 12 toques', tipos[0], regras[2], associacoes[1]),
]
