import { botaoNavegacaoAssociacao } from "../navegacaoPrincipal.js";
import { mostrarAssociacoes } from "../../mvc/view/mostrarAssociacoes.js";
import { acaoMenuAssociacao } from "../acoes-menus/acaoMenuAssociacao.js";

export function menuAssociacao(socios, campeonatos, associacoes, variavelGlobal, temporadas, tipos, regras){
    botaoNavegacaoAssociacao()
    mostrarAssociacoes()
    acaoMenuAssociacao
    (socios, campeonatos, associacoes, temporadas, variavelGlobal, tipos, regras)
}