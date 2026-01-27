import { mudarStyleCor } from "./mudarStyleCor.js";
import { menuAssociacao } from "./menus/menuAssociacao.js";
import { mostrarHeader } from "./body/mostrarHeader.js";
import { mostrarMain } from "./body/mostrarMain.js";
import { mostrarFooter } from "./body/mostrarFooter.js";
import { navegacaoSocioCampeonato } from "./navegacaoSocioCampeonato.js";

export function inicio(socios, campeonatos, associacoes, temporadas, variavelGlobal, tipos, regras){
    let associacao = associacoes[variavelGlobal.associacao]
    mudarStyleCor(associacao)
    menuAssociacao(socios, campeonatos, associacoes, variavelGlobal, temporadas, tipos, regras)
    mostrarHeader(associacoes, variavelGlobal, socios, campeonatos, temporadas, tipos, regras)
    mostrarMain(socios, associacao, campeonatos, temporadas, variavelGlobal)
    mostrarFooter()
    navegacaoSocioCampeonato(associacoes, associacao, variavelGlobal, socios, campeonatos, temporadas, tipos, regras)
}