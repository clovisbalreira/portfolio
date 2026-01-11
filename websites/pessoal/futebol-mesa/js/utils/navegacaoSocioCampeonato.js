import { menuSocios } from "./menus/menuSocios.js";
import { menuCampeonatos } from "./menus/menuCampeonatos.js";
import { acaoMenuCampeonato } from "./acoes-menus/acaoMenuCampeonato.js";
import { acaoMenuSocio } from "./acoes-menus/acaoMenuSocio.js";
import { filtrarCampeonatosAssociacoes } from "./filtros/filtrarCampeonatosAssociacoes.js";
import { filtrarSociosAssociacoes } from "./filtros/filtrarSociosAssociacoes.js";

export function navegacaoSocioCampeonato(associacoes, associacao, variavelGlobal, socios, campeonatos, temporadas){
    let campeonatoAssociacao = filtrarCampeonatosAssociacoes(campeonatos, associacoes, variavelGlobal)
    let sociosFiltrados = filtrarSociosAssociacoes(socios, associacoes, variavelGlobal)
    let section = document.getElementById('navegacao-socio-campeonato')
    section.innerHTML = ''
    section.appendChild(menuSocios(sociosFiltrados, associacao))
    section.appendChild(menuCampeonatos(campeonatoAssociacao))
    acaoMenuCampeonato(campeonatoAssociacao, variavelGlobal, temporadas)
    acaoMenuSocio(socios, variavelGlobal, campeonatos, temporadas)
}