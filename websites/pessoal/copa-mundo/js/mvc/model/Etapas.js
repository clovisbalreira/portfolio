import { continentes } from "../controll/continentes.js"
import { confederacoesContinental } from "../controll/confederacoesContinental.js"

import { formacaoGrupo } from "../../services/formacaoGrupo.js"
import { criarClassificacoes } from "../../services/classificacao/criarClassificacoes.js"
import { criandoJogosGrupo } from "../../services/criandoJogosGrupo.js"
import { estatisticasJogo } from "../../services/estatisticasJogo.js"
import { classificacaoGrupo } from "../../services/classificacao/classificacaoGrupo.js"
import { classificacaoInterno } from "../../services/classificacao/classificacaoInterno.js"
import { melhoresTerceiros } from "../../services/melhoresTerceiros.js"
import { criarConfrontosEliminatorio } from "../../services/criarConfrontosEliminatorio.js"
import { resultadoEliminatorio } from "../../services/resultadoEliminatorio.js"
import { ordenarClassificacao } from "../../services/ordenar/ordenarClassificacao.js"
import { copiarObjeto } from "../../services/copiarObjeto.js"
import { atualizarGoleadores } from "../../services/atualizarGoleadores.js"
import { ordenarDatasJogos } from "../../services/ordenar/ordenarDatasJogos.js"
import { ordenarJogos } from "../../services/ordenar/ordenarJogos.js"


export class Etapas {
    constructor() {
    }   

    adicionarParticipante(participante){
        this.participantes.push(participante)
    }

    grupo(campeonato, equipesGrupo, returno, nome){
        let grupos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
        let soma = 0
        let fase = []
        grupos.forEach( grupo => {
            let participantes = formacaoGrupo(equipesGrupo, soma, campeonato.participantes).participante
            soma = formacaoGrupo(equipesGrupo, soma, campeonato.participantes).soma
            criarClassificacoes(campeonato, participantes)
            let jogos = criandoJogosGrupo(this, grupo, participantes, returno)
            fase.push({grupo, participantes, jogos})
        })
        campeonato.fases.push({ nome, fase})
    }

    placar(jogo, equipeCasa, equipeFora, data, grupo = false){
        if(grupo) ordenarDatasJogos(grupo, jogo, data)
        if(typeof equipeCasa != 'string' && typeof equipeFora != 'string'){
            jogo.jogado = true
            jogo.golsJogaresCasa = equipeCasa
            jogo.golsJogaresFora = equipeFora
            estatisticasJogo(jogo, equipeCasa, equipeFora)
            if(grupo) classificacaoGrupo(grupo)
            atualizarGoleadores(this, jogo, equipeCasa, equipeFora)
        }
    }

    faseEliminatoria(faseAnterior, fase, confrontos, vencedor = true){
        melhoresTerceiros(this, faseAnterior, this.participantes, confrontos)
        criarConfrontosEliminatorio(this, faseAnterior, confrontos, fase, vencedor)
        copiarObjeto(this)
    }

    placarEliminatorio(jogo, golEquipeCasa, golEquipeFora, data, fase, vencedor, golEquipeCasaProrrogacao = '', golEquipeForaProrrogacao = '', golEquipeCasaPenalti = '', golEquipeForaPenalti = ''){
       this.placar(jogo, golEquipeCasa, golEquipeFora, data)
       resultadoEliminatorio(this, jogo, golEquipeCasa, golEquipeFora, data, fase, vencedor, golEquipeCasaProrrogacao, golEquipeForaProrrogacao, golEquipeCasaPenalti, golEquipeForaPenalti)
    }
    
    atualizarTudo(ordemFases){
        classificacaoInterno(this)
        ordenarClassificacao(this, ordemFases)
        ordenarJogos(this)
    }
}