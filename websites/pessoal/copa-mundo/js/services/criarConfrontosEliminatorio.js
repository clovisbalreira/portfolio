import { criarJogos } from "./criarJogos.js"
import { criarTabela } from "./criarTabela.js"
import { Selecao } from "../mvc/model/Selecao.js"
import { Pais } from "../mvc/model/Pais.js"

export function criarConfrontosEliminatorio(campeoanato, faseAnterior, confrontos, fase, vencedor){
    campeoanato.fases.push({nome: fase, fase: []})
    let criarProximaFase = campeoanato.fases.find( f => f.nome == fase)
    if(faseAnterior.nome.includes('Grupo -')){
        confrontos.forEach( (jogo, index) => {
            let filtraEquipeCasa = filtrarColocacaoGrupo(faseAnterior.fase, jogo.equipeCasa, jogo.colocacaoCasa, fase)
            let filtraEquipeFora = filtrarColocacaoGrupo(faseAnterior.fase, jogo.equipeFora, jogo.colocacaoFora, fase)
            criarProximaFase.fase.push(criarJogos(campeoanato, fase, index + 1, filtraEquipeCasa, filtraEquipeFora))
        })
    }else if(!faseAnterior.nome.includes('Grupo -')){
        confrontos.forEach( (jogo, index) => {
            let filtraEquipeCasa = confronto(faseAnterior.fase, jogo.equipeCasa, fase, vencedor)
            let filtraEquipeFora = confronto(faseAnterior.fase, jogo.equipeFora, fase, vencedor)
            criarProximaFase.fase.push(criarJogos(campeoanato, fase, index + 1, filtraEquipeCasa, filtraEquipeFora))
        })
    }
}

function filtrarColocacaoGrupo(jogos, equipe, colocacao, fase){
    let filtroEquipe = filtrarGrupo(jogos, equipe, colocacao)
    if(colocacao == 3 && !todosJogados(jogos)){
        if(somarJogosFaseClassificacao(jogos)){
            filtroEquipe = criarTabela(new Selecao('', '', new Pais(`${filtroEquipe.pais.pais.nome} *`, '', '', ''), ''))
        }else{
            filtroEquipe = criarTabela(new Selecao('', '', new Pais(`${colocacao}º ${equipe}`, '', '', ''), ''))   
        }
    }else if(filtroEquipe.j < 3){
        filtroEquipe = criarTabela(new Selecao('', '', new Pais(`${colocacao}º ${equipe}`, '', '', ''), ''))   
    }
    filtroEquipe.fase = fase
    return filtroEquipe
}

function filtrarGrupo(jogos, grupoEquipe, colocacao){
    return jogos.find(grupo => grupoEquipe == grupo.grupo)?.participantes[colocacao - 1]
}

function confronto(jogos, jogo, fase, vencedor){
    let resultado = jogos.find( equipe => jogo == equipe.rodada)
    if(resultado.jogado){
        return vencedor ? resultado.equipeCasa.fase == resultado.equipeFora.fase ? criarTabela(new Selecao('', '', new Pais(`${vencedor ? 'Vencedor' : 'Perdedor'} ${resultado.fase} do jogo ${jogo}`, '', '', ''), '')) : resultado.equipeCasa.fase == fase ? resultado.equipeCasa : resultado.equipeFora : resultado.equipeCasa.fase != fase ? resultado.equipeCasa : resultado.equipeFora
    }else{
        return criarTabela(new Selecao('', '', new Pais(`${vencedor ? 'Vencedor' : 'Perdedor'} ${resultado.fase} do jogo ${jogo}`, '', '', ''), ''))
    }


}

function todosJogados(jogos){
    return jogos.every(grupo =>
        grupo.jogos.every(jogo => jogo.jogado)
    );
}

function somarJogosFaseClassificacao(jogos){    
    let jogosJogado = jogos.reduce((total, jogo) => {
        return total + jogo.jogos.filter(j => j.jogado).length;
    }, 0);
    return jogosJogado > 48
}