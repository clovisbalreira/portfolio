import { Campeonato } from "./Campeonato.js"
import { Socio } from "./Socio.js"
import { associacoes } from "../controll/associacoes.js"

export class Temporada{
        constructor(nome, pontoVitoria, penaltiPontos) {
        this.nome = nome
        this.pontoVitoria = pontoVitoria
        this.penaltiPontos = penaltiPontos
        this.campeonato = ''
        this.participantes = []
        this.jogos = []
        this.tabela = {}
        this.tabelaClassificacaoGeral = []
        this.tabelaGeralAssociacao = []
    }

    adicionarCampeonato(nome){
        if(nome instanceof Campeonato){
            this.campeonato = nome
        }
    }

    adicionarParticipantes(nome){
        if(nome instanceof Socio){
            this.participantes.push({tecnico:nome, time: '', associacao: nome.status})
            this.adicionarParticipacaoAssociacao(nome)
        }
    }

    adicionarParticipacaoAssociacao(nome){
        const existe = nome.associacoes.some( a => a.nome === this.campeonato.associacao.nome);
        if(!existe && this.campeonato.tipo.nome === 'Interno') nome.associacoes.push(this.campeonato.associacao)
    }

    adicionarTime(tecnico, time){
        tecnico.time = time
    }

    adicionarJogos(fase, turno, rodada, mesa, data, timeMandante, timeVisitante, prorrogacao, penalti){
        this.jogos.push({campeonato: `${this.nome} - ${this.campeonato.nome}`, regra: this.campeonato.regra.nome, tipo : this.campeonato.tipo.nome, fase: fase, turno: turno, rodada, mesa: mesa, data: data, timeMandante: {participante: timeMandante, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, timeVisitante: {participante: timeVisitante, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, prorrogacao: prorrogacao, penalti: penalti, diferencaGols: 0, diferencaGolsCasa: 0, diferencaGolsFora: 0, totalGols : 0, desempate: 0})
    }

    adicionarPlacar(jogo, timeMandanteGols, timeForaGolsVisitante, timeMandanteGolsProrrogacao, timeVisitanteGolsProrrogacao, timeCasaGolsPenalti, timeVisitanteGolsPenalti, desempateMandante, desempateVisitante, prorrogacao, pontoPenalti){
        jogo.penalti = pontoPenalti
        if(typeof timeMandanteGols == 'number' && typeof timeForaGolsVisitante == 'number'){
            this.adicionarGolsPartida(jogo, timeMandanteGols, timeForaGolsVisitante)
            if(timeMandanteGols == timeForaGolsVisitante && prorrogacao){
                this.adicionarGolsPartidaProrrogacao(jogo, timeMandanteGolsProrrogacao, timeVisitanteGolsProrrogacao)
                this.adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeVisitanteGolsPenalti)
            }else if(timeMandanteGols == timeForaGolsVisitante && pontoPenalti){
                this.adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeVisitanteGolsPenalti)
            }
        }else{
            this.adicionarGolsPartida(jogo, timeMandanteGols, timeForaGolsVisitante)
        }
        this.desempate(jogo, desempateMandante, desempateVisitante)
        this.totalGols(jogo, timeMandanteGols, timeForaGolsVisitante)
        this.diferencaGols(jogo, timeMandanteGols, timeForaGolsVisitante)
        if(this.campeonato.tipo.nome == 'Externo' && !(jogo.timeMandante.participante.associacao.nome == jogo.timeVisitante.participante.associacao.nome)){
            this.adicionarJogoAssociacao(jogo)
            this.adicionarPontuacaoAssociacao(jogo)
        } 
    }
    
    adicionarJogoAssociacao(jogo){
        let associacaoMandante = associacoes.find( associacao => associacao.nome == jogo.timeMandante.participante.associacao.nome)
        let associacaoVisitante = associacoes.find( associacao => associacao.nome == jogo.timeVisitante.participante.associacao.nome)
        if(associacaoMandante != associacaoVisitante){
            associacaoMandante.jogos.push(jogo)
            associacaoVisitante.jogos.push(jogo)
        }
    }

    adicionarPontuacaoAssociacao(jogo){
        if(jogo != undefined){
            this.tabelaAssociacao(jogo.timeMandante, jogo.timeVisitante)
            this.tabelaAssociacao(jogo.timeVisitante, jogo.timeMandante)
        }    
    }

    tabelaAssociacao(timeMandante, timeVisitante){
        let associacaoMandante = timeMandante
        let associacaoVisitante = timeVisitante
        let tabela = associacaoMandante.participante.tecnico.status.tabelas
        let regra = this.campeonato.regra.nome
        const criarTabela = (associacao) => ({
            associacao,
            pg: 0, j: 0, v: 0, e: 0, d: 0,
            gp: 0, gc: 0, sg: 0,
            vp: 0, ep: 0, dp: 0,
            gpp: 0, gcp: 0, sgp: 0,
            pgpt: 0, vpt: 0, dpt: 0,
            gppt: 0, gcpt: 0, sgpt: 0
        })
        if(tabela.length == 0){
            tabela.push({regra: regra, tabela: criarTabela(associacaoMandante.participante.tecnico.status)})
        }else{
            let contem = tabela.find(tabela => {
                return tabela.regra == regra
            })
            if(contem == undefined){
                tabela.push({regra: regra, tabela: criarTabela(associacaoMandante.participante.tecnico.status)})
            }
        }
        let filtarTabela = tabela.find( tabela => tabela.regra == regra)
        this.pontuacaoAssociacaoGeral(filtarTabela, associacaoMandante, associacaoVisitante)
    }

    pontuacaoAssociacaoGeral(tabela, timeMandante, timeVisitante){
        tabela.tabela.v += timeMandante.gols > timeVisitante.gols ? 1 : 0
        tabela.tabela.e += timeMandante.gols == timeVisitante.gols ? 1 : 0
        tabela.tabela.d += timeMandante.gols < timeVisitante.gols ? 1 : 0
        tabela.tabela.j = tabela.tabela.v + tabela.tabela.e + tabela.tabela.d
        tabela.tabela.pg = ( tabela.tabela.v * this.pontoVitoria) + tabela.tabela.e
        tabela.tabela.gp += timeMandante.gols
        tabela.tabela.gc += timeVisitante.gols
        tabela.tabela.sg = tabela.tabela.gp - tabela.tabela.gc
        if(timeMandante.gols == timeVisitante.gols){
            tabela.tabela.vp += timeMandante.golsProrrogacao > timeVisitante.golsProrrogacao ? 1 : 0
            tabela.tabela.ep += timeMandante.golsProrrogacao == timeVisitante.golsProrrogacao ? 1 : 0
            tabela.tabela.dp += timeMandante.golsProrrogacao < timeVisitante.golsProrrogacao ? 1 : 0
            tabela.tabela.gpp += timeMandante.golsProrrogacao
            tabela.tabela.gcp += timeVisitante.golsProrrogacao
            tabela.tabela.sgp = tabela.tabela.gpp - tabela.tabela.gcp
            if(timeMandante.golsProrrogacao == timeVisitante.golsProrrogacao){
                tabela.tabela.vpt += timeMandante.golsPenalti > timeVisitante.golsPenalti ? 1 : 0
                tabela.tabela.dpt += timeMandante.golsPenalti < timeVisitante.golsPenalti ? 1 : 0
                tabela.tabela.pgpt
                tabela.tabela.gppt += timeMandante.golsPenalti
                tabela.tabela.gcpt += timeVisitante.golsPenalti
                tabela.tabela.sgpt = tabela.tabela.gppt - tabela.tabela.gcpt
            }
        }
    }

    adicionarGolsPartida(jogo, timeMandanteGols, timeForaGolsVisitante){
        jogo.timeMandante.gols = timeMandanteGols
        jogo.timeVisitante.gols = timeForaGolsVisitante
    }

    adicionarGolsPartidaProrrogacao(jogo, timeMandanteGolsProrrogacao, timeVisitanteGolsProrrogacao){
        jogo.timeMandante.golsProrrogacao = timeMandanteGolsProrrogacao
        jogo.timeVisitante.golsProrrogacao = timeVisitanteGolsProrrogacao
    }
    
    adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeVisitanteGolsPenalti){
        jogo.timeMandante.golsPenalti = timeCasaGolsPenalti
        jogo.timeVisitante.golsPenalti = timeVisitanteGolsPenalti
    }

    desempate(jogo, desempateMandante, desempateVisitante){
        jogo.timeMandante.desempate = desempateMandante
        jogo.timeVisitante.desempate = desempateVisitante
    }

    totalGols(jogo, timeMandanteGols, timeForaGolsVisitante){
        jogo.totalGols = timeMandanteGols + timeForaGolsVisitante
    }

    diferencaGols(jogo, timeMandanteGols, timeForaGolsVisitante){
        jogo.diferencaGolsCasa = timeMandanteGols - timeForaGolsVisitante
        jogo.diferencaGolsFora = timeForaGolsVisitante - timeMandanteGols
        if(jogo.diferencaGolsCasa > 0) jogo.diferencaGols = jogo.diferencaGolsCasa
        else if(jogo.diferencaGolsCasa < 0) jogo.diferencaGols = jogo.diferencaGolsFora
        else jogo.diferencaGols = timeMandanteGols - timeForaGolsVisitante
    }

    modoCampeonato(temporada){
        let tabelas = this.criarTabela(temporada)
        this.adicionarJogosTabela(tabelas, temporada)
        this.criarGrupos(tabelas)
        this.adicionarPontuacao(tabelas)
        if(temporada.campeonato.tipo.nome == 'Externo'){
            this.classificacaoAssociacao(temporada)
            this.classificacaoCampeonato(temporada)
        }
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

    criarGrupos(tabelas) {
        const criarObj = (participante) => ({
            participante, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 });
        const existeTecnico = (tabela, participante) => {
            return tabela.some(item =>
                item.participante.tecnico.nome === participante.tecnico.nome &&
                item.participante.time.nome === participante.time.nome
            );
        };
        tabelas.tabela.forEach(tabela => {
            tabela.jogos.forEach(jogo => {
                const casa = jogo.timeMandante.participante;
                const fora = jogo.timeVisitante.participante;
                if (tabela.fase.includes("X")) {
                    if(tabela.tabela.length == 0){
                        let grupos = this.separarStringGrupos(tabela.fase);
                        grupos.forEach( (grupo, i) => {
                            tabela.tabela.push({ grupo: grupo, clubes: [] })
                            tabelas.tabela.forEach( (tab, index) => {
                                if(index < grupos.length && tab.fase.includes(grupo)){
                                    tab.tabela.forEach( clube => {
                                        tabela.tabela[i].clubes.push({participante: clube.participante, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 })
                                    })
                                }
                            })
                        })
                    }
                }else{
                    if (!existeTecnico(tabela.tabela, casa)) {
                        tabela.tabela.push(criarObj(casa));
                    }   
                    if (!existeTecnico(tabela.tabela, fora)) {
                        tabela.tabela.push(criarObj(fora));
                    }
                }
            });
        });
    }

    separarStringGrupos(frase){
        const texto = frase;
        const somenteGrupos = texto.split(" - ")[0]; 
        const grupos = somenteGrupos.split(" X ").map(g => g.trim());
        return grupos;
    }

    adicionarPontuacao(tabelas){
        tabelas.tabela.forEach( tabela => {
            tabela.jogos.forEach( jogo => {
                let timeMandante, timeVisitante
                if(tabela.tabela[0].grupo != undefined){
                    let grupoClubeCasa = tabela.tabela.find( grupo => grupo.grupo && grupo.clubes.some( clube => clube.participante.tecnico.nome === jogo.timeMandante.participante.tecnico.nome && clube.participante.time.nome === jogo.timeMandante.participante.time.nome))
                    timeMandante = grupoClubeCasa.clubes.find( clube => clube.participante.tecnico.nome === jogo.timeMandante.participante.tecnico.nome && clube.participante.time.nome === jogo.timeMandante.participante.time.nome)
                    let grupoClubeFora = tabela.tabela.find( grupo => grupo.grupo && grupo.clubes.some( clube => clube.participante.tecnico.nome === jogo.timeVisitante.participante.tecnico.nome && clube.participante.time.nome === jogo.timeVisitante.participante.time.nome))
                    timeVisitante = grupoClubeFora.clubes.find( clube => clube.participante.tecnico.nome === jogo.timeVisitante.participante.tecnico.nome && clube.participante.time.nome === jogo.timeVisitante.participante.time.nome)
                }else{
                    timeMandante = tabela.tabela.find( clube => clube.participante.tecnico.nome === jogo.timeMandante.participante.tecnico.nome && clube.participante.time.nome === jogo.timeMandante.participante.time.nome)
                    timeVisitante = tabela.tabela.find( clube => clube.participante.tecnico.nome === jogo.timeVisitante.participante.tecnico.nome && clube.participante.time.nome === jogo.timeVisitante.participante.time.nome)
                }
                this.campeonato.jogos.push(jogo)
                let golsCasa = jogo.timeMandante.gols
                let golsFora = jogo.timeVisitante.gols
                this.adicionarVitoria(timeMandante, golsCasa, timeVisitante, golsFora)
                this.adicionarEmpate(timeMandante, golsCasa, timeVisitante, golsFora)
                this.adicionarDerrota(timeMandante, golsCasa, timeVisitante, golsFora)
                this.somarJogos(timeMandante, timeVisitante)
                this.adicionarGolsPro(timeMandante, golsCasa, timeVisitante, golsFora)
                this.adicionarGolsContra(timeMandante, golsCasa, timeVisitante, golsFora)
                this.adicionarSaldoGols(timeMandante, golsCasa, timeVisitante, golsFora)
                this.adicionarDesempate(timeMandante, jogo.timeMandante.desempate, timeVisitante, jogo.timeVisitante.desempate)
                this.decisaoPenalti(jogo, timeMandante, timeVisitante)
            })
            this.ordenarClassificacao(tabela, tabela)
        })
        this.classificacaoGeral(tabelas)
        this.somarTabelasCampeonato()
    }

    adicionarVitoria(timeMandante, golsCasa, timeVisitante, golsFora){
        if(golsCasa > golsFora){
            timeMandante.v += 1
            this.adicionarPontos(timeMandante, this.pontoVitoria)
        }else if(golsCasa < golsFora){
            timeVisitante.v += 1
            this.adicionarPontos(timeVisitante, this.pontoVitoria)
        }
    }

    adicionarEmpate(timeMandante, golsCasa, timeVisitante, golsFora){
        if(golsCasa == golsFora){
            if(golsCasa != 'W.O.', golsFora != 'W.O.'){
                timeMandante.e += 1
                timeVisitante.e += 1
                this.adicionarPontos(timeMandante, 1)
                this.adicionarPontos(timeVisitante, 1)
            }
        }
    }

    adicionarPontos(time, pontos){
        time.pg += pontos
    }

    adicionarDerrota(timeMandante, golsCasa, timeVisitante, golsFora){
        if(golsCasa < golsFora){
            timeMandante.d += 1
        }else if(golsCasa > golsFora){
            timeVisitante.d += 1
        }
    }

    somarJogos(timeMandante, timeVisitante){
        timeMandante.j += 1
        timeVisitante.j += 1
    }

    adicionarGolsPro(timeMandante, golsCasa, timeVisitante, golsFora){
        timeMandante.gp += golsCasa == 'W.O.' ? 0 : golsCasa
        timeVisitante.gp += golsFora == 'W.O.' ? 0 : golsFora
    }

    adicionarGolsContra(timeMandante, golsCasa, timeVisitante, golsFora){
        timeMandante.gc += golsFora == 'W.O.' ? 0 : golsFora
        timeVisitante.gc += golsCasa == 'W.O.' ? 0 : golsCasa
    }

    adicionarSaldoGols(timeMandante, golsCasa, timeVisitante, golsFora){
        timeMandante.sg += golsCasa == 'W.O.' ? 0 : golsCasa - golsFora 
        timeVisitante.sg += golsFora == 'W.O.' ? 0 : golsFora - golsCasa 
    }

    adicionarDesempate(timeMandante, desempateMandante, timeVisitante, desempateVisitante){
        timeMandante.desempate += desempateMandante
        timeVisitante.desempate += desempateVisitante
    }

    decisaoPenalti(jogo, timeMandante, timeVisitante){
        let golsCasaPenalti = jogo.timeMandante.golsPenalti
        let golsForaPenalti = jogo.timeVisitante.golsPenalti
        this.adicionarGolsProPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
        this.adicionarGolsPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
        this.adicionarSaldoPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
        this.adicionarVitoriaPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
        this.adicionarDerrotaPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
        if(jogo.penalti){ 
            this.adicionarPontosPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
            this.adicionarPontosGeralPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti)
        } 
    }

    adicionarGolsProPenalti(timeMandante, golsCasa, timeVisitante, golsFora){
        timeMandante.gppt += golsCasa
        timeVisitante.gppt += golsFora
    }

    adicionarGolsPenalti(timeMandante, golsCasa, timeVisitante, golsFora){
        timeMandante.gcpt += golsFora
        timeVisitante.gcpt += golsCasa
    }

    adicionarSaldoPenalti(timeMandante, golsCasa, timeVisitante, golsFora){
        timeMandante.sgpt += golsCasa - golsFora
        timeVisitante.sgpt += golsFora - golsCasa
    }
    
    adicionarVitoriaPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            timeMandante.vpt += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            timeVisitante.vpt += 1
        }
    }

    adicionarDerrotaPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti){
        if(golsCasaPenalti < golsForaPenalti){
            timeMandante.dpt += 1
        }else if(golsCasaPenalti > golsForaPenalti){
            timeVisitante.dpt += 1
        }
    }

    adicionarPontosPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            timeMandante.pgpt += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            timeVisitante.pgpt += 1
        }
    }

    adicionarPontosGeralPenalti(timeMandante, golsCasaPenalti, timeVisitante, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            timeMandante.pg += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            timeVisitante.pg += 1
        }
    }

    ordenarClassificacao(tabela, fase){
        if(tabela.tabela == undefined){
            this.classificacao(tabela, fase)
        }else{
            if(tabela.tabela[0].grupo != undefined){
                tabela.tabela.forEach( g => {
                    this.classificacao(g.clubes, fase)
                })
            }else{
                this.classificacao(tabela.tabela, tabela, fase)
            }
        }
    }

    classificacao(tabela, fase) {
    tabela.sort((a, b) => {
        if (
            (a.fase === 'Final' && b.fase === 'Final') ||
            (a.fase === '3º Lugar' && b.fase === '3º Lugar')
        ) {
            const jogoFinal = this.jogos.find(jogo =>
                (jogo.fase === a.fase) &&
                (
                    jogo.timeMandante.participante.tecnico.nome === a.participante.tecnico.nome ||
                    jogo.timeVisitante.participante.tecnico.nome === a.participante.tecnico.nome
                )
            );
            if (!jogoFinal) return 0;
            const golsA =
                jogoFinal.timeMandante.participante.tecnico.nome === a.participante.tecnico.nome
                    ? jogoFinal.timeMandante.gols + jogoFinal.timeMandante.golsProrrogacao + jogoFinal.timeMandante.golsPenalti
                    : jogoFinal.timeVisitante.gols + jogoFinal.timeVisitante.golsProrrogacao + jogoFinal.timeVisitante.golsPenalti;
            const golsB =
                jogoFinal.timeMandante.participante.tecnico.nome === b.participante.tecnico.nome
                    ? jogoFinal.timeMandante.gols + jogoFinal.timeMandante.golsProrrogacao + jogoFinal.timeMandante.golsPenalti
                    : jogoFinal.timeVisitante.gols + jogoFinal.timeVisitante.golsProrrogacao + jogoFinal.timeVisitante.golsPenalti;
            return golsB - golsA;
        }
        if (a.fase !== b.fase && a.fase !== undefined && b.fase !== undefined) {
            return a.fase - b.fase;
        }
        if (b.pg !== a.pg) return b.pg - a.pg;
        if (b.v !== a.v) return b.v - a.v;
        if (b.cd !== a.cd) return b.cd - a.cd;
        if (b.pgpt !== a.pgpt) return b.pgpt - a.pgpt;
        const confronto = this.confrontoDireto(a, b, fase);
        if (confronto !== 0) return confronto;

        return b.desempate - a.desempate;
        });
    }

    confrontoDireto(a, b, fase){
        if(a.participante.tecnico != undefined){
            let jogosConfronto = this.jogos.filter( jogo => 
                ((jogo.timeMandante.participante.tecnico.nome === a.participante.tecnico.nome && jogo.timeVisitante.participante.tecnico.nome === b.participante.tecnico.nome && jogo.timeMandante.participante.time.nome === a.participante.time.nome && jogo.timeVisitante.participante.time.nome === b.participante.time.nome) ||
                (jogo.timeMandante.participante.tecnico.nome === b.participante.tecnico.nome && jogo.timeVisitante.participante.tecnico.nome === a.participante.tecnico.nome && jogo.timeMandante.participante.time.nome === b.participante.time.nome && jogo.timeVisitante.participante.time.nome === a.participante.time.nome)) && (fase == undefined ? jogo.fase.includes('fase') : jogo.fase.includes(fase.fase))
            )
            let golsA = 0
            let golsB = 0
            jogosConfronto.forEach( jogo => {
                if(jogo.timeMandante.participante.tecnico.nome === a.participante.tecnico.nome && jogo.timeMandante.participante.time.nome === a.participante.time.nome){
                    golsA += jogo.timeMandante.gols
                    golsB += jogo.timeVisitante.gols
                }else{
                    golsA += jogo.timeVisitante.gols
                    golsB += jogo.timeMandante.gols
                }
            })
            a.cd = 0
            b.cd = 0
            if(golsA > golsB){
                a.cd = 1
            }else if(golsA < golsB){
                b.cd = 1
            }
        }
    }

    classificacaoGeral(tabela){
        let fase = 1
        let nomeFase = ''
        for(let i = tabela.tabela.length; 0 < i; i--){
            if(nomeFase != tabela.tabela[i - 1].fase && !tabela.tabela[i - 1].fase.includes(nomeFase)){
                fase += 1
            }
            tabela.tabela[i - 1].tabela.forEach(clube => {
                let existe
                if(clube.grupo != undefined){
                    existe = this.tabelaClassificacaoGeral.some(cg => { return clube.clubes.some( c => cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.time.nome === c.participante.time.nome) }) 
                }else{
                    existe = this.tabelaClassificacaoGeral.some(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.time.nome === clube.participante.time.nome );
                }
                if (existe) {
                    let clubeGeral
                    if(clube.grupo != undefined){
                        clube.clubes.forEach( c => {
                            clubeGeral = this.tabelaClassificacaoGeral.forEach(cg => {
                                if(cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.time.nome === c.participante.time.nome){
                                    cg.pg += c.pg;
                                    cg.j += c.j;
                                    cg.v += c.v;
                                    cg.e += c.e;
                                    cg.d += c.d;
                                    cg.gp += c.gp;
                                    cg.gc += c.gc;
                                    cg.sg += c.sg;
                                    cg.pgp += c.pgp;
                                    cg.vp += c.vp;
                                    cg.ep += c.ep;
                                    cg.dp += c.dp;
                                    cg.gpp += c.gpp;
                                    cg.gcp += c.gcp;
                                    cg.sgp += c.sgp;
                                    cg.pgpt += c.pgpt;
                                    cg.vpt += c.vpt;
                                    cg.dpt += c.dpt;
                                    cg.gppt += c.gppt;
                                    cg.gcpt += c.gcpt;
                                    cg.sgpt += c.sgpt;
                                }
                            })
                        })
                    }else{                        
                        clubeGeral = this.tabelaClassificacaoGeral.find(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.time.nome === clube.participante.time.nome );
                        clubeGeral.pg += clube.pg;
                        clubeGeral.j += clube.j;
                        clubeGeral.v += clube.v;
                        clubeGeral.e += clube.e;
                        clubeGeral.d += clube.d;
                        clubeGeral.gp += clube.gp;
                        clubeGeral.gc += clube.gc;
                        clubeGeral.sg += clube.sg;
                        clubeGeral.pgp += clube.pgp;
                        clubeGeral.vp += clube.vp;
                        clubeGeral.ep += clube.ep;
                        clubeGeral.dp += clube.dp;
                        clubeGeral.gpp += clube.gpp;
                        clubeGeral.gcp += clube.gcp;
                        clubeGeral.sgp += clube.sgp;
                        clubeGeral.pgpt += clube.pgpt;
                        clubeGeral.vpt += clube.vpt;
                        clubeGeral.dpt += clube.dpt;
                        clubeGeral.gppt += clube.gppt;
                        clubeGeral.gcpt += clube.gcpt;
                        clubeGeral.sgpt += clube.sgpt;
                    }
                } else {
                    this.tabelaClassificacaoGeral.push({ participante: clube.participante, pg: clube.pg, j: clube.j, v: clube.v, e: clube.e,  d: clube.d, gp: clube.gp,  gc: clube.gc, sg: clube.sg, pgp: clube.pgp, vp: clube.vp, ep: clube.ep, dp: clube.dp, gpp: clube.gpp, gcp: clube.gcp,  sgp: clube.sgp,  pgpt: clube.pgpt, vpt: clube.vpt, dpt: clube.dpt, gppt: clube.gppt, gcpt: clube.gcpt, sgpt: clube.sgpt, cd:0, fase: tabela.tabela[i - 1].fase.includes('3º Lugar') || tabela.tabela[i - 1].fase.includes('Final') ? tabela.tabela[i - 1].fase : fase});
                }
            });
            nomeFase = this.nomeFaseAnterior(tabela, i)
        }
        this.ordenarClassificacao(this.tabelaClassificacaoGeral)
    }

    nomeFaseAnterior(tabela, i){
        let nomeFase
        if(tabela.tabela[i - 1].fase.toLowerCase().includes("grupo")){
            return nomeFase = '1º fase'
        }else{
            return nomeFase = tabela.tabela[i - 1].fase
        }
    }

    somarTabelasCampeonato(){
        this.tabelaClassificacaoGeral.forEach(clube => {
            const existe = this.campeonato.tabelas.some(cg =>
                cg.participante.tecnico.nome === clube.participante.tecnico.nome
            )
            if (existe) {
                const clubeGeral = this.campeonato.tabelas.find(cg =>
                    cg.participante.tecnico.nome === clube.participante.tecnico.nome 
                );
                clubeGeral.pg += clube.pg;
                clubeGeral.j += clube.j;
                clubeGeral.v += clube.v;
                clubeGeral.e += clube.e;
                clubeGeral.d += clube.d;
                clubeGeral.gp += clube.gp;
                clubeGeral.gc += clube.gc;
                clubeGeral.sg += clube.sg;
                clubeGeral.pgp += clube.pgp;
                clubeGeral.vp += clube.vp;
                clubeGeral.ep += clube.ep;
                clubeGeral.dp += clube.dp;
                clubeGeral.gpp += clube.gpp;
                clubeGeral.gcp += clube.gcp;
                clubeGeral.sgp += clube.sgp;
                clubeGeral.pgpt += clube.pgpt;
                clubeGeral.vpt += clube.vpt;
                clubeGeral.dpt += clube.dpt;
                clubeGeral.gppt += clube.gppt;
                clubeGeral.gcpt += clube.gcpt;
                clubeGeral.sgpt += clube.sgpt;
            } else {
                this.campeonato.tabelas.push({participante: clube.participante, pg: clube.pg, j: clube.j, v: clube.v, e: clube.e, d: clube.d, gp: clube.gp, gc: clube.gc, sg: clube.sg, pgp: clube.pgp, vp: clube.vp, ep: clube.ep, dp: clube.dp, gpp: clube.gpp, gcp: clube.gcp, sgp: clube.sgp, gpt: clube.pgpt, vpt: clube.vpt, dpt: clube.dpt, gppt: clube.gppt, gcpt: clube.gcpt, sgpt: clube.sgpt, cd:0 })
            }
        })
        this.ordenarClassificacao(this.campeonato.tabelas)
    } 

    adicionarPontuacaoCompleta(participante, v, e, d, gp, gc){
        this.tabelaClassificacaoGeral.push({participante: participante, pg: ( v * this.pontoVitoria ) + e, j: v + e + d, v: v, e: e, d: d, gp: gp, gc: gc, sg: gp - gc, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 , fase: '1º fase'})
        this.ordenarClassificacao(this.tabelaClassificacaoGeral)
    }

    classificacaoCampeonato(temporada){
        temporada.campeonato.tabelaAssociacao = []
        const filtrarAssociacao = [
            ...new Set(
                temporada.campeonato.tabelas
                    .map(t => t?.participante?.associacao?.nome)
                    .filter(Boolean)
            )
        ];
        associacoes.forEach( associacao => {
            filtrarAssociacao.forEach( nome => {
                if(nome == associacao.nome){
                        temporada.campeonato.tabelaAssociacao.push({participante: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 })
                }
            })
        })
        temporada.campeonato.jogos.forEach( jogo => {
            temporada.campeonato.tabelaAssociacao.forEach( tabela => {
                if(jogo.timeMandante.participante.associacao.nome != jogo.timeVisitante.participante.associacao.nome){
                    this.pontuacaoAssociacao(tabela, jogo.timeMandante, jogo.timeVisitante)
                    this.pontuacaoAssociacao(tabela, jogo.timeVisitante, jogo.timeMandante)
                }
            })
        })
        this.ordenarClassificacao(temporada.campeonato.tabelaAssociacao, temporada.campeonato.tabelaAssociacao)
    }

    classificacaoAssociacao(temporada){
        const filtrarAssociacao = [
            ...new Set(
                temporada.participantes
                    .map(t => t?.associacao?.nome)
                    .filter(Boolean)
            )
        ];
        associacoes.forEach( associacao => {
            filtrarAssociacao.forEach( nome => {
                if(nome == associacao.nome){
                        this.tabelaGeralAssociacao.push({participante: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 })
                }
            })
        })
        temporada.jogos.forEach( jogo => {
            this.tabelaGeralAssociacao.forEach( tabela => {
                if(jogo.timeMandante.participante.associacao.nome != jogo.timeVisitante.participante.associacao.nome){
                    this.pontuacaoAssociacao(tabela, jogo.timeMandante, jogo.timeVisitante)
                    this.pontuacaoAssociacao(tabela, jogo.timeVisitante, jogo.timeMandante)
                }
            })
        })
        
        this.ordenarClassificacao(this.tabelaGeralAssociacao, this.tabelaGeralAssociacao)
    }    

    pontuacaoAssociacao(tabela, timeMandante, timeVisitante){
        if(timeMandante.participante.associacao.nome == tabela.participante.nome){  
            tabela.v += timeMandante.gols > timeVisitante.gols ? 1 : 0
            tabela.e += timeMandante.gols == timeVisitante.gols ? 1 : 0
            tabela.d += timeMandante.gols < timeVisitante.gols ? 1 : 0
            tabela.j = tabela.v + tabela.e + tabela.d
            tabela.pg = (tabela.v * this.pontoVitoria) + tabela.e
            tabela.gp += timeMandante.gols
            tabela.gc += timeVisitante.gols
            tabela.sg += timeMandante.gols - timeVisitante.gols
            tabela.vp += timeMandante.golsProrrogacao > timeVisitante.golsProrrogacao ? 1 : 0
            tabela.ep += timeMandante.golsProrrogacao == timeVisitante.golsProrrogacao ? 1 : 0
            tabela.dp += timeMandante.golsProrrogacao < timeVisitante.golsProrrogacao ? 1 : 0
            tabela.pgp += timeMandante.golsProrrogacao > timeVisitante.golsProrrogacao ? 1 : 0
            tabela.gpp += timeMandante.golsProrrogacao
            tabela.gcp += timeVisitante.golsProrrogacao
            tabela.sgp += timeMandante.golsProrrogacao - timeVisitante.golsProrrogacao
            tabela.vpt += timeMandante.golsPenalti > timeVisitante.golsPenalti ? 1 : 0
            tabela.dpt += timeMandante.golsPenalti < timeVisitante.golsPenalti ? 1 : 0
            tabela.pgpt += timeMandante.golsPenalti > timeVisitante.golsPenalti ? 1 : 0
            tabela.gppt += timeMandante.golsPenalti
            tabela.gcpt += timeVisitante.golsPenalti
            tabela.sgpt += timeMandante.golsPenalti - timeVisitante.golsPenalti
            tabela.cd += 0
            tabela.desempate += 0
        }
    }
}

