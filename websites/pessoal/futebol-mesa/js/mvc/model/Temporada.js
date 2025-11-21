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
                //this.adicionarVariaveisPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
            }
        }else{
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
        }
    }

    adicionarGolsPartida(jogo, timeCasaGols, timeForaGols){
        jogo.timeCasa.gols = timeCasaGols
        jogo.timeFora.gols = timeForaGols
    }

    adicionarGolsPartidaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao){
        jogo.timeCasa.golsProrrogacao = timeCasaGolsProrrogacao
        jogo.timeFora.golsProrrogacao = timeForaGolsProrrogacao
    }
    
    adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti){
        jogo.timeCasa.golsPenalti = timeCasaGolsPenalti
        jogo.timeFora.golsPenalti = timeForaGolsPenalti
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
        this.criarGrupos(tabelas)
        this.adicionarPontuacao(tabelas)
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

    criarGrupos(tabelas){
        tabelas.tabela.forEach( tabela => {
            tabela.jogos.forEach( jogo => {
                if(tabela.tabela.length == 0){
                    tabela.tabela.push({tecnico: jogo.timeCasa.tecnico, pg: 0, j: 0, v: 0, e:0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep:0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0})
                }else{
                    const existe = tabela.tabela.some(item => jogo.timeCasa.tecnico.participante.nome === item.tecnico.participante.nome);
                    if(!existe){
                        tabela.tabela.push({tecnico: jogo.timeCasa.tecnico, pg: 0, j: 0, v: 0, e:0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep:0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0})
                    }
                }
                const existe = tabela.tabela.some(item => jogo.timeFora.tecnico.participante.nome === item.tecnico.participante.nome );
                if(!existe){
                    tabela.tabela.push({tecnico: jogo.timeFora.tecnico, pg: 0, j: 0, v: 0, e:0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep:0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0})
                }
            })
        })
    }

    adicionarPontuacao(tabelas){
        tabelas.tabela.forEach( tabela => {
            tabela.jogos.forEach( jogo => {
                let timeCasa = tabela.tabela.find( clube => clube.tecnico.participante.nome == jogo.timeCasa.tecnico.participante.nome)
                let golsCasa = jogo.timeCasa.gols
                let timeFora = tabela.tabela.find( clube => clube.tecnico.participante.nome == jogo.timeFora.tecnico.participante.nome)
                let golsFora = jogo.timeFora.gols
                console.log(timeCasa.tecnico.participante.nome, golsCasa, 'X', golsFora, timeFora.tecnico.participante.nome)
                this.adicionarVitoria(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarEmpate(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarDerrota(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarGolsPro(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarGolsContra(timeCasa, golsCasa, timeFora, golsFora)
                this.somarJogos(timeCasa, timeFora)
                this.adicionarSaldoGols(timeCasa, golsCasa, timeFora, golsFora)
            })
            this.classificacao(tabela.tabela)
        })
    }

    somarJogos(timeCasa, timeFora){
        timeCasa.j += 1
        timeFora.j += 1
    }

    adicionarPontos(time, pontos){
        time.pg += pontos
    }

    adicionarVitoria(timeCasa, golsCasa, timeFora, golsFora){
        if(golsCasa > golsFora){
            timeCasa.v += 1
            this.adicionarPontos(timeCasa, this.pontoVitoria)
        }else if(golsCasa < golsFora){
            timeFora.v += 1
            this.adicionarPontos(timeFora, this.pontoVitoria)
        }
    }

    adicionarEmpate(timeCasa, golsCasa, timeFora, golsFora){
        if(golsCasa == golsFora){
            timeCasa.e += 1
            this.adicionarPontos(timeCasa, 1)
            timeFora.e += 1
            this.adicionarPontos(timeFora, 1)
        }
    }

    adicionarDerrota(timeCasa, golsCasa, timeFora, golsFora){
        if(golsCasa < golsFora){
            timeCasa.d += 1
        }else if(golsCasa > golsFora){
            timeFora.d += 1
        }
    }

    adicionarGolsPro(timeCasa, golsCasa, timeFora, golsFora){
        console
        timeCasa.gp += golsCasa
        timeFora.gp += golsFora
    }

    adicionarGolsContra(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.gc += golsFora
        timeFora.gc += golsCasa
    }

    adicionarSaldoGols(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.sg += golsCasa - golsFora
        timeFora.sg += golsFora - golsCasa
    }

    classificacao(tabela){
        tabela.sort((a, b) => {
            if (b.pg !== a.pg) return b.pg - a.pg;
            return b.sg - a.sg; 
        });
    }

}





