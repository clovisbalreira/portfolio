import { Campeonato } from "./Campeonato.js"
import { Socio } from "./Socio.js"

export class Temporada{
        constructor(nome, pontoVitoria) {
        this.nome = nome
        this.pontoVitoria = pontoVitoria
        this.campeonato = ''
        this.participantes = []
        this.jogos = []
        this.tabela = {}
    }

    adicionarCampeonato(nome){
        if(nome instanceof Campeonato){
            this.campeonato = nome
        }
    }

    adicionarParticipantes(nome){
        if(nome instanceof Socio){
            this.participantes.push({participante:nome, time: ''})
        }
    }

    adicionarTime(tecnico, time){
        tecnico.time = time
    }

    adicionarJogos(fase, turno, rodada, mesa, data, timeCasa, timeFora){
        this.jogos.push({fase: fase, turno: turno, rodada, mesa: mesa, data: data, timeCasa: {tecnico: timeCasa, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, timeFora: {tecnico: timeFora, gols : 0, golsProrrogacao: 0, golsPenalti: 0}})
    }

    adicionarPlacar(jogo, timeCasaGols, timeForaGols, timeCasaGolsProrrogacao, timeForaGolsProrrogacao, timeCasaGolsPenalti, timeForaGolsPenalti, prorrogacao, pontoPenalti){
        if(typeof timeCasaGols == 'number' && typeof timeForaGols == 'number'){
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
            if(timeCasaGols == timeForaGols && prorrogacao){
                this.adicionarGolsPartidaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao)
            }else if(timeCasaGols == timeForaGols && pontoPenalti){
                this.adicionarVariaveisPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
            }
        }else{
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
        }
    }

    adicionarGolsPartida(jogo, timeCasaGols, timeForaGols){
        jogo.timeCasa.gols = timeCasaGols
        jogo.timeFora.gols = timeForaGols
    }

    adicionarVitoria(jogo, timeCasaGols, timeForaGols){
        if(timeCasaGols > timeForaGols){
            jogo.timeCasa.tecnico.v += 1
        }else if(timeCasaGols < timeForaGols){
            jogo.timeFora.tecnico.v += 1
        }
    }

    adicionarEmpate(jogo, timeCasaGols, timeForaGols){
        if(timeCasaGols == timeForaGols){
            jogo.timeCasa.tecnico.e += 1
            jogo.timeFora.tecnico.e += 1
        }
    }

    adicionarDerrota(jogo, timeCasaGols, timeForaGols){
        if(timeCasaGols > timeForaGols){
            jogo.timeFora.tecnico.d += 1
        }else if(timeCasaGols < timeForaGols){
            jogo.timeCasa.tecnico.d += 1
        }
    }

    adicionarJogo(jogo){
        jogo.timeCasa.tecnico.j = jogo.timeCasa.tecnico.v + jogo.timeCasa.tecnico.e + jogo.timeCasa.tecnico.d
        jogo.timeFora.tecnico.j = jogo.timeFora.tecnico.v + jogo.timeFora.tecnico.e + jogo.timeFora.tecnico.d
    }

    adicionarPontosGanhos(jogo){
        jogo.timeCasa.tecnico.pg = (jogo.timeCasa.tecnico.v * this.pontoVitoria) + jogo.timeCasa.tecnico.e 
        jogo.timeFora.tecnico.pg = (jogo.timeFora.tecnico.v * this.pontoVitoria) + jogo.timeFora.tecnico.e 
    }

    adicionarGolsPro(jogo, timeCasaGols, timeForaGols){
        jogo.timeCasa.tecnico.gp += timeCasaGols
        jogo.timeFora.tecnico.gp += timeForaGols
    }

    adicionarGolsContra(jogo, timeCasaGols, timeForaGols){
        jogo.timeCasa.tecnico.gc += timeForaGols
        jogo.timeFora.tecnico.gc += timeCasaGols
    }

    adicionarSaldoGols(jogo){
        jogo.timeCasa.tecnico.sg = jogo.timeCasa.tecnico.gp - jogo.timeCasa.tecnico.gc
        jogo.timeFora.tecnico.sg = jogo.timeFora.tecnico.gp - jogo.timeFora.tecnico.gc
    }

    adicionarGolsPartidaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao){
        jogo.timeCasa.golsProrrogacao = timeCasaGolsProrrogacao
        jogo.timeFora.golsProrrogacao = timeForaGolsProrrogacao
    }

    adicionarGolsProProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao){
        jogo.timeCasa.tecnico.gpp += timeCasaGolsProrrogacao
        jogo.timeFora.tecnico.gpp += timeForaGolsProrrogacao
    }

    adicionarGolsContraProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao){
        jogo.timeCasa.tecnico.gcp += timeForaGolsProrrogacao
        jogo.timeFora.tecnico.gcp += timeCasaGolsProrrogacao
    }

    adicionarSaldoGolsProrrogacao(jogo){
        jogo.timeCasa.tecnico.sgp = jogo.timeCasa.tecnico.gpp - jogo.timeCasa.tecnico.gcp
        jogo.timeFora.tecnico.sgp = jogo.timeFora.tecnico.gpp - jogo.timeFora.tecnico.gcp
    }

    adicionarVitoriaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao){
        if(timeCasaGolsProrrogacao > timeForaGolsProrrogacao){
            jogo.timeCasa.tecnico.vp += 1
        }else if(timeCasaGolsProrrogacao < timeForaGolsProrrogacao){
            jogo.timeFora.tecnico.vp += 1
        }
    }

    adicionarDerrotaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao){
        if(timeCasaGolsProrrogacao > timeForaGolsProrrogacao){
            jogo.timeFora.tecnico.dp += 1
        }else if(timeCasaGolsProrrogacao < timeForaGolsProrrogacao){
            jogo.timeCasa.tecnico.dp += 1
        }
    }

    adicionarEmpateProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao, timeCasaGolsPenalti, timeForaGolsPenalti){
        if(timeCasaGolsProrrogacao == timeForaGolsProrrogacao){
            jogo.timeCasa.tecnico.ep += 1
            jogo.timeFora.tecnico.ep += 1
            this.adicionarVariaveisPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
        }
    }
    
    adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        jogo.timeCasa.golsPenalti = timeCasaGolsPenalti
        jogo.timeFora.golsPenalti = timeForaGolsPenalti
    }

    adicionarGolsProPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        jogo.timeCasa.tecnico.gppt += timeCasaGolsPenalti
        jogo.timeFora.tecnico.gppt += timeForaGolsPenalti
    }

    adicionarGolsContraPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        jogo.timeCasa.tecnico.gcpt += timeForaGolsPenalti
        jogo.timeFora.tecnico.gcpt += timeCasaGolsPenalti
    }

    adicionarSaldoGolsPenalti(jogo){
        jogo.timeCasa.tecnico.sgpt = jogo.timeCasa.tecnico.gppt - jogo.timeCasa.tecnico.gcpt
        jogo.timeFora.tecnico.sgpt = jogo.timeFora.tecnico.gppt - jogo.timeFora.tecnico.gcpt
    }

    adicionarVitoriaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        if(timeCasaGolsPenalti > timeForaGolsPenalti){
            jogo.timeCasa.tecnico.vpt += 1
        }else if(timeCasaGolsPenalti < timeForaGolsPenalti){
            jogo.timeFora.tecnico.vpt += 1
        }
    }

    adicionarDerrotaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        if(timeCasaGolsPenalti > timeForaGolsPenalti){
            jogo.timeFora.tecnico.dpt += 1
        }else if(timeCasaGolsPenalti < timeForaGolsPenalti){
            jogo.timeCasa.tecnico.dpt += 1
        }
    }

    adicionarVariaveisPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        this.adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
        this.adicionarGolsProPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
        this.adicionarGolsContraPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
        this.adicionarSaldoGolsPenalti(jogo)
        this.adicionarVitoriaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
        this.adicionarDerrotaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
    }

    adicionarPontosPenalti(jogo){
        jogo.timeCasa.tecnico.pg = jogo.timeCasa.tecnico.pg + jogo.timeCasa.tecnico.vpt
        jogo.timeFora.tecnico.pg = jogo.timeFora.tecnico.pg + jogo.timeFora.tecnico.vpt
    }

    adicionarPontuacaoCompleta(tecnico, v, e, d, gp, gc){
        tecnico.v = v
        tecnico.e = e
        tecnico.d = d
        tecnico.j = v + e + d
        tecnico.pg = ( v * this.pontoVitoria ) + e
        tecnico.gp = gp
        tecnico.gc = gc
        tecnico.sg = gp - gc
    }

    desempate(participanteCasa, participanteFora, golsParticipanteCasa, golsParticipanteFora ){
        if(golsParticipanteCasa > golsParticipanteFora){
            this.vitoriaDesempate(participanteCasa, golsParticipanteCasa, golsParticipanteFora)
            this.derrotaDesempate(participanteFora, golsParticipanteFora, golsParticipanteCasa)
        }else if(golsParticipanteCasa < golsParticipanteFora){
            this.vitoriaDesempate(participanteFora, golsParticipanteFora, golsParticipanteCasa)
            this.derrotaDesempate(participanteCasa, golsParticipanteCasa, golsParticipanteFora)
        }
    }

    vitoriaDesempate(participante, golsPro, golsContra){
        participante.pg += 1
        participante.pgpt += 1
        participante.vpt += 1
        participante.gppt += golsPro
        participante.gcpt += golsContra
        participante.sgpt += golsPro - golsContra
    }

    derrotaDesempate(participante, golsPro, golsContra){
        participante.dpt += 1
        participante.gppt += golsPro
        participante.gcpt += golsContra
        participante.sgpt += golsPro - golsContra
    }

    modoCampeonato(temporada){
        let tabelas = this.criarTabela(temporada)
        this.adicionarJogosTabela(tabelas, temporada)
        // adicionar grupos
        tabelas.tabela.forEach( tabela => {
            tabela.jogos.forEach( jogo => {
                if(tabela.tabela.length == 0){
                    tabela.tabela.push(jogo.timeCasa.tecnico)
                }else{
                    const existe = tabela.tabela.some(item =>
                        item.participante.nome === jogo.timeCasa.tecnico.nome
                    );
                    if(!existe){
                        tabela.tabela.push(jogo.timeCasa.tecnico)
                    }
                    tabela.tabela.forEach( clube => {
                        console.log(clube)
                        console.log(jogo.timeCasa.tecnico.participante.nome)
                    })

                }
                //console.log(tabela.tabela)
                //console.log(jogo.timeCasa.tecnico)
                //console.log(jogo.timeFora)
                //console.log('========')
            })
        })
        tabelas.tabela.forEach( tab => {
            console.log(tab)
        })
        
        // adicionar pontos
        tabelas.tabela.forEach( tabela => {
            //console.log(tabela)
            tabela.jogos.forEach( jogo => {
                //console.log(jogo.timeCasa)
                //console.log(jogo.timeFora)
                //console.log('========')
            })
        })
    }

    criarTabela(temporada){
        const combos = [
            ...new Map(
                temporada.jogos.map(item => [`${item.fase}-${item.turno}`, { fase: item.fase, turno: item.turno }])
            ).values()
        ];
        let tabelas = this.tabela
        tabelas.nome = `${temporada.nome} ${temporada.campeonato.nome}`
        tabelas.associacao = `${temporada.campeonato.associacao.nome} ( ${temporada.campeonato.associacao.sigla} )`
        tabelas.regra = temporada.campeonato.regra.nome
        tabelas.tipo = temporada.campeonato.tipo.nome
        tabelas.tabela = []
        combos.forEach( combo => {
            tabelas.tabela.push({ fase: combo.fase, turno: combo.turno, jogos: [], tabela: []})
        })
        return tabelas
    }

    adicionarJogosTabela(tabelas, temporada){
        tabelas.tabela.forEach( tab => {
            temporada.jogos.forEach( jogo => {
                if(jogo.fase == tab.fase && jogo.turno == tab.turno){
                    tab.jogos.push(jogo)
                }
            })
        })
    }

}
