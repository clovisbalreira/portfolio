import { menuSocios } from "./menus/menuSocios.js";
import { menuCampeonatos } from "./menus/menuCampeonatos.js";
import { filtrarSociosAssociacoes } from "./filtros/filtrarSociosAssociacoes.js";
import { filtrarCampeonatosAssociacoes } from "./filtros/filtrarCampeonatosAssociacoes.js";
import { acaoMenuSocio } from "./acoes-menus/acaoMenuSocio.js";
import { acaoMenuCampeonato } from "./acoes-menus/acaoMenuCampeonato.js";

export function navegacaoSocioCampeonato(associacoes, associacao, variavelGlobal, socios, campeonatos, temporadas, tipos, regras){
    let campeonatoAssociacao = filtrarCampeonatosAssociacoes(campeonatos, associacoes, variavelGlobal)
    let sociosFiltrados = filtrarSociosAssociacoes(socios, associacoes, variavelGlobal)
    let section = document.getElementById('navegacao-socio-campeonato')
    section.innerHTML = ''
    section.appendChild(menuSocios(sociosFiltrados, associacao))
    section.appendChild(menuCampeonatos(campeonatoAssociacao, tipos, regras))
    acaoMenuSocio(socios, variavelGlobal, campeonatos, temporadas)
    acaoMenuCampeonato(campeonatoAssociacao, variavelGlobal, temporadas, tipos, regras)
}