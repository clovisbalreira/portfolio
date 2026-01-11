import { botaoNavegacaoAssociacao } from "../navegacaoPrincipal.js";
import { mostrarAssociacoes } from "../../mvc/view/mostrarAssociacoes.js";
import { acaoMenuAssociacao } from "../acoes-menus/acaoMenuAssociacao.js";

export function menuAssociacao(socios, campeonatos, associacoes, variavelGlobal, temporadas){
    botaoNavegacaoAssociacao()
    mostrarAssociacoes()
    acaoMenuAssociacao
    (socios, campeonatos, associacoes, variavelGlobal, temporadas)
}