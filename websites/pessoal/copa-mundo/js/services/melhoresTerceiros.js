import { pegarMelhoresTerceiros } from "./pegarMelhoresTerceiros.js"
import { filtrarChaveamento } from "./filtrarChaveamento.js"
import { chaveamento32 } from "./chaveamento/chaveamento32.js"
import { jogosTerceiros } from "./jogosTerceiros.js"
import { somarJogosFaseClassificacao } from "./somarJogosFaseClassificacao.js"

export function melhoresTerceiros(campeonato, jogos, participantes, confrontos){
    let quarentaOito = 48
    if(jogos.nome.includes('Grupo') && participantes.length == quarentaOito && somarJogosFaseClassificacao(jogos.fase, quarentaOito)){
        let equipesTerceiro = pegarMelhoresTerceiros(campeonato, jogos.fase)
        let chaveamento = filtrarChaveamento(equipesTerceiro, chaveamento32)
        jogosTerceiros(chaveamento, confrontos)
    }
}