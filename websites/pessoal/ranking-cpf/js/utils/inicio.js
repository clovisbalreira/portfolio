import { selectAno } from "./selectAno.js";
import { selectClube } from "./selectClube.js";
import { selectEstado } from "./selectEstado.js";
import { atualizarAno } from './atualizarAno.js';
import { atualizarClube } from "./atualizarClube.js";
import { atualizarEstado } from "./atualizarEstado.js";
import { mostrarRankingCampeonatoClubes } from "../mvc/view/mostrarRankingCampeonatoClubes.js";
import { mostrarRankingCampeonatoEstados } from "../mvc/view/mostraRankingrCampeonatoEstados.js";
import { mostrarRankingClubes } from "../mvc/view/mostrarRankingClubes.js";
import { mostrarRankingEstados } from "../mvc/view/mostrarRankingEstados.js";
import { button } from "./button.js";

export function inicio(){
    selectAno()
    mostrarRankingCampeonatoClubes()
    mostrarRankingCampeonatoEstados()
    selectClube()
    mostrarRankingClubes()
    selectEstado()
    mostrarRankingEstados()
    atualizarAno()
    atualizarClube()
    atualizarEstado()
    button('diminuir')
    button('somar')
}
