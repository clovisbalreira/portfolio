import { Etapas } from "../Etapas.js"

export class Tabela48Equipes12GruposCom4Equipes extends Etapas{
    constructor(ano, campeonato, mascote, sede, taca = '') {
        super()
        this.ano = ano
        this.campeonato = campeonato
        this.mascote = mascote
        this.sede = sede
        this.taca = taca
        this.jogos = []
        this.participantes = []
        this.classificacaoGeral = []
        this.classificacaoFederacao = []
        this.fases = []
        this.goleadores = []
    }   

    primeiraFase(){
        this.grupo(this, 4, false, 'Primeira Fase Grupo -')
    }
}