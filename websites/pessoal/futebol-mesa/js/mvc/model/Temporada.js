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
            this.participantes.push({participante:nome, time: '', associacao: nome.status})
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

    adicionarJogos(fase, turno, rodada, mesa, data, timeCasa, timeFora, prorrogacao, penalti){
        this.jogos.push({campeonato: `${this.nome} - ${this.campeonato.nome}`, regra: this.campeonato.regra.nome, tipo : this.campeonato.tipo.nome, fase: fase, turno: turno, rodada, mesa: mesa, data: data, timeCasa: {tecnico: timeCasa, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, timeFora: {tecnico: timeFora, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, prorrogacao: prorrogacao, penalti: penalti, diferencaGols: 0, diferencaGolsCasa: 0, diferencaGolsFora: 0, totalGols : 0, desempate: 0})
    }

    adicionarPlacar(jogo, timeCasaGols, timeForaGols, timeCasaGolsProrrogacao, timeForaGolsProrrogacao, timeCasaGolsPenalti, timeForaGolsPenalti, desempateCasa, desempateFora, prorrogacao, pontoPenalti){
        jogo.penalti = pontoPenalti
        if(pontoPenalti == undefined) console.log(jogo)
        if(typeof timeCasaGols == 'number' && typeof timeForaGols == 'number'){
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
            if(timeCasaGols == timeForaGols && prorrogacao){
                this.adicionarGolsPartidaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao)
                this.adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
            }else if(timeCasaGols == timeForaGols && pontoPenalti){
                this.adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
            }
        }else{
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
        }
        this.desempate(jogo, desempateCasa, desempateFora)
        this.totalGols(jogo, timeCasaGols, timeForaGols)
        this.diferencaGols(jogo, timeCasaGols, timeForaGols)
        if(this.campeonato.tipo.nome == 'Externo' && !(jogo.timeCasa.tecnico.associacao.nome == jogo.timeFora.tecnico.associacao.nome)){
            this.adicionarJogoAssociacao(jogo)
            this.adicionarPontuacaoAssociacao(jogo)
        } 
    }
    
    adicionarJogoAssociacao(jogo){
        let associacaoCasa = associacoes.find( associacao => associacao.nome == jogo.timeCasa.tecnico.associacao.nome)
        let associacaoFora = associacoes.find( associacao => associacao.nome == jogo.timeFora.tecnico.associacao.nome)
        if(associacaoCasa != associacaoFora){
            associacaoCasa.jogos.push(jogo)
            associacaoFora.jogos.push(jogo)
        }
    }

    adicionarPontuacaoAssociacao(jogo){
        if(jogo != undefined){
            this.tabelaAssociacao(jogo.timeCasa, jogo.timeFora)
            this.tabelaAssociacao(jogo.timeFora, jogo.timeCasa)
        }    
    }

    tabelaAssociacao(timeCasa, timeFora){
        let associacaoCasa = timeCasa
        let associacaoFora = timeFora
        let tabela = associacaoCasa.tecnico.participante.status.tabelas
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
            tabela.push({regra: regra, tabela: criarTabela(associacaoCasa.tecnico.participante.status)})
        }else{
            let contem = tabela.find(tabela => {
                return tabela.regra == regra
            })
            if(contem == undefined){
                tabela.push({regra: regra, tabela: criarTabela(associacaoCasa.tecnico.participante.status)})
            }
        }
        let filtarTabela = tabela.find( tabela => tabela.regra == regra)
        this.pontuacaoAssociacaoGeral(filtarTabela, associacaoCasa, associacaoFora)
    }

    pontuacaoAssociacaoGeral(tabela, timeCasa, timeFora){
        tabela.tabela.v += timeCasa.gols > timeFora.gols ? 1 : 0
        tabela.tabela.e += timeCasa.gols == timeFora.gols ? 1 : 0
        tabela.tabela.d += timeCasa.gols < timeFora.gols ? 1 : 0
        tabela.tabela.j = tabela.tabela.v + tabela.tabela.e + tabela.tabela.d
        tabela.tabela.pg = ( tabela.tabela.v * this.pontoVitoria) + tabela.tabela.e
        tabela.tabela.gp += timeCasa.gols
        tabela.tabela.gc += timeFora.gols
        tabela.tabela.sg = tabela.tabela.gp - tabela.tabela.gc
        if(timeCasa.gols == timeFora.gols){
            tabela.tabela.vp += timeCasa.golsProrrogacao > timeFora.golsProrrogacao ? 1 : 0
            tabela.tabela.ep += timeCasa.golsProrrogacao == timeFora.golsProrrogacao ? 1 : 0
            tabela.tabela.dp += timeCasa.golsProrrogacao < timeFora.golsProrrogacao ? 1 : 0
            tabela.tabela.gpp += timeCasa.golsProrrogacao
            tabela.tabela.gcp += timeFora.golsProrrogacao
            tabela.tabela.sgp = tabela.tabela.gpp - tabela.tabela.gcp
            if(timeCasa.golsProrrogacao == timeFora.golsProrrogacao){
                tabela.tabela.vpt += timeCasa.golsPenalti > timeFora.golsPenalti ? 1 : 0
                tabela.tabela.dpt += timeCasa.golsPenalti < timeFora.golsPenalti ? 1 : 0
                tabela.tabela.pgpt
                tabela.tabela.gppt += timeCasa.golsPenalti
                tabela.tabela.gcpt += timeFora.golsPenalti
                tabela.tabela.sgpt = tabela.tabela.gppt - tabela.tabela.gcpt
            }
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

    desempate(jogo, desempateCasa, desempateFora){
        jogo.timeCasa.desempate = desempateCasa
        jogo.timeFora.desempate = desempateFora
    }

    totalGols(jogo, timeCasaGols, timeForaGols){
        jogo.totalGols = timeCasaGols + timeForaGols
    }

    diferencaGols(jogo, timeCasaGols, timeForaGols){
        jogo.diferencaGolsCasa = timeCasaGols - timeForaGols
        jogo.diferencaGolsFora = timeForaGols - timeCasaGols
        if(jogo.diferencaGolsCasa > 0) jogo.diferencaGols = jogo.diferencaGolsCasa
        else if(jogo.diferencaGolsCasa < 0) jogo.diferencaGols = jogo.diferencaGolsFora
        else jogo.diferencaGols = timeCasaGols - timeForaGols
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
        const criarObj = (tecnico) => ({
            tecnico, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 });

        const existeTecnico = (tabela, tecnico) => {
            return tabela.some(item =>
                item.tecnico.participante.nome === tecnico.participante.nome &&
                item.tecnico.time.nome === tecnico.time.nome
            );
        };
        tabelas.tabela.forEach(tabela => {
            tabela.jogos.forEach(jogo => {
                const casa = jogo.timeCasa.tecnico;
                const fora = jogo.timeFora.tecnico;
                if (tabela.fase.includes("X")) {
                    if(tabela.tabela.length == 0){
                        let grupos = this.separarStringGrupos(tabela.fase);
                        grupos.forEach( (grupo, i) => {
                            tabela.tabela.push({ grupo: grupo, clubes: [] })
                            tabelas.tabela.forEach( (tab, index) => {
                                if(index < grupos.length && tab.fase.includes(grupo)){
                                    tab.tabela.forEach( clube => {
                                        tabela.tabela[i].clubes.push({tecnico: clube.tecnico, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 })
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
                let timeCasa, timeFora
                if(tabela.tabela[0].grupo != undefined){
                    let grupoClubeCasa = tabela.tabela.find( grupo => grupo.grupo && grupo.clubes.some( clube => clube.tecnico.participante.nome === jogo.timeCasa.tecnico.participante.nome && clube.tecnico.time.nome === jogo.timeCasa.tecnico.time.nome))
                    timeCasa = grupoClubeCasa.clubes.find( clube => clube.tecnico.participante.nome === jogo.timeCasa.tecnico.participante.nome && clube.tecnico.time.nome === jogo.timeCasa.tecnico.time.nome)
                    let grupoClubeFora = tabela.tabela.find( grupo => grupo.grupo && grupo.clubes.some( clube => clube.tecnico.participante.nome === jogo.timeFora.tecnico.participante.nome && clube.tecnico.time.nome === jogo.timeFora.tecnico.time.nome))
                    timeFora = grupoClubeFora.clubes.find( clube => clube.tecnico.participante.nome === jogo.timeFora.tecnico.participante.nome && clube.tecnico.time.nome === jogo.timeFora.tecnico.time.nome)
                }else{
                    timeCasa = tabela.tabela.find( clube => clube.tecnico.participante.nome === jogo.timeCasa.tecnico.participante.nome && clube.tecnico.time.nome === jogo.timeCasa.tecnico.time.nome)
                    timeFora = tabela.tabela.find( clube => clube.tecnico.participante.nome === jogo.timeFora.tecnico.participante.nome && clube.tecnico.time.nome === jogo.timeFora.tecnico.time.nome)
                }
                this.campeonato.jogos.push(jogo)
                let golsCasa = jogo.timeCasa.gols
                let golsFora = jogo.timeFora.gols
                this.adicionarVitoria(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarEmpate(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarDerrota(timeCasa, golsCasa, timeFora, golsFora)
                this.somarJogos(timeCasa, timeFora)
                this.adicionarGolsPro(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarGolsContra(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarSaldoGols(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarDesempate(timeCasa, jogo.timeCasa.desempate, timeFora, jogo.timeFora.desempate)
                this.decisaoPenalti(jogo, timeCasa, timeFora)
            })
            this.ordenarClassificacao(tabela, tabela)
        })
        this.classificacaoGeral(tabelas)
        this.somarTabelasCampeonato()
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
            if(golsCasa != 'W.O.', golsFora != 'W.O.'){
                timeCasa.e += 1
                timeFora.e += 1
                this.adicionarPontos(timeCasa, 1)
                this.adicionarPontos(timeFora, 1)
            }
        }
    }

    adicionarPontos(time, pontos){
        time.pg += pontos
    }

    adicionarDerrota(timeCasa, golsCasa, timeFora, golsFora){
        if(golsCasa < golsFora){
            timeCasa.d += 1
        }else if(golsCasa > golsFora){
            timeFora.d += 1
        }
    }

    somarJogos(timeCasa, timeFora){
        timeCasa.j += 1
        timeFora.j += 1
    }

    adicionarGolsPro(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.gp += golsCasa == 'W.O.' ? 0 : golsCasa
        timeFora.gp += golsFora == 'W.O.' ? 0 : golsFora
    }

    adicionarGolsContra(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.gc += golsFora == 'W.O.' ? 0 : golsFora
        timeFora.gc += golsCasa == 'W.O.' ? 0 : golsCasa
    }

    adicionarSaldoGols(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.sg += golsCasa == 'W.O.' ? 0 : golsCasa - golsFora 
        timeFora.sg += golsFora == 'W.O.' ? 0 : golsFora - golsCasa 
    }

    adicionarDesempate(timeCasa, desempateCasa, timeFora, desempateFora){
        timeCasa.desempate += desempateCasa
        timeFora.desempate += desempateFora
    }

    decisaoPenalti(jogo, timeCasa, timeFora){
        let golsCasaPenalti = jogo.timeCasa.golsPenalti
        let golsForaPenalti = jogo.timeFora.golsPenalti
        this.adicionarGolsProPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarGolsPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarSaldoPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarVitoriaPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarDerrotaPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        if(jogo.penalti){ 
            this.adicionarPontosPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
            this.adicionarPontosGeralPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        } 
    }

    adicionarGolsProPenalti(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.gppt += golsCasa
        timeFora.gppt += golsFora
    }

    adicionarGolsPenalti(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.gcpt += golsFora
        timeFora.gcpt += golsCasa
    }

    adicionarSaldoPenalti(timeCasa, golsCasa, timeFora, golsFora){
        timeCasa.sgpt += golsCasa - golsFora
        timeFora.sgpt += golsFora - golsCasa
    }
    
    adicionarVitoriaPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            timeCasa.vpt += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            timeFora.vpt += 1
        }
    }

    adicionarDerrotaPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti){
        if(golsCasaPenalti < golsForaPenalti){
            timeCasa.dpt += 1
        }else if(golsCasaPenalti > golsForaPenalti){
            timeFora.dpt += 1
        }
    }

    adicionarPontosPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            timeCasa.pgpt += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            timeFora.pgpt += 1
        }
    }

    adicionarPontosGeralPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            timeCasa.pg += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            timeFora.pg += 1
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
                    jogo.timeCasa.tecnico.participante.nome === a.tecnico.participante.nome ||
                    jogo.timeFora.tecnico.participante.nome === a.tecnico.participante.nome
                )
            );
            if (!jogoFinal) return 0;
            const golsA =
                jogoFinal.timeCasa.tecnico.participante.nome === a.tecnico.participante.nome
                    ? jogoFinal.timeCasa.gols + jogoFinal.timeCasa.golsProrrogacao + jogoFinal.timeCasa.golsPenalti
                    : jogoFinal.timeFora.gols + jogoFinal.timeFora.golsProrrogacao + jogoFinal.timeFora.golsPenalti;
            const golsB =
                jogoFinal.timeCasa.tecnico.participante.nome === b.tecnico.participante.nome
                    ? jogoFinal.timeCasa.gols + jogoFinal.timeCasa.golsProrrogacao + jogoFinal.timeCasa.golsPenalti
                    : jogoFinal.timeFora.gols + jogoFinal.timeFora.golsProrrogacao + jogoFinal.timeFora.golsPenalti;
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
        if(a.tecnico.participante != undefined){
            let jogosConfronto = this.jogos.filter( jogo => 
                ((jogo.timeCasa.tecnico.participante.nome === a.tecnico.participante.nome && jogo.timeFora.tecnico.participante.nome === b.tecnico.participante.nome && jogo.timeCasa.tecnico.time.nome === a.tecnico.time.nome && jogo.timeFora.tecnico.time.nome === b.tecnico.time.nome) ||
                (jogo.timeCasa.tecnico.participante.nome === b.tecnico.participante.nome && jogo.timeFora.tecnico.participante.nome === a.tecnico.participante.nome && jogo.timeCasa.tecnico.time.nome === b.tecnico.time.nome && jogo.timeFora.tecnico.time.nome === a.tecnico.time.nome)) && (fase == undefined ? jogo.fase.includes('fase') : jogo.fase.includes(fase.fase))
            )
            let golsA = 0
            let golsB = 0
            jogosConfronto.forEach( jogo => {
                if(jogo.timeCasa.tecnico.participante.nome === a.tecnico.participante.nome && jogo.timeCasa.tecnico.time.nome === a.tecnico.time.nome){
                    golsA += jogo.timeCasa.gols
                    golsB += jogo.timeFora.gols
                }else{
                    golsA += jogo.timeFora.gols
                    golsB += jogo.timeCasa.gols
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
                    existe = this.tabelaClassificacaoGeral.some(cg => { return clube.clubes.some( c => cg.tecnico.participante.nome === c.tecnico.participante.nome && cg.tecnico.time.nome === c.tecnico.time.nome) }) 
                }else{
                    existe = this.tabelaClassificacaoGeral.some(cg => cg.tecnico.participante.nome === clube.tecnico.participante.nome && cg.tecnico.time.nome === clube.tecnico.time.nome );
                }
                if (existe) {
                    let clubeGeral
                    if(clube.grupo != undefined){
                        clube.clubes.forEach( c => {
                            clubeGeral = this.tabelaClassificacaoGeral.forEach(cg => {
                                if(cg.tecnico.participante.nome === c.tecnico.participante.nome && cg.tecnico.time.nome === c.tecnico.time.nome){
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
                        clubeGeral = this.tabelaClassificacaoGeral.find(cg => cg.tecnico.participante.nome === clube.tecnico.participante.nome && cg.tecnico.time.nome === clube.tecnico.time.nome );
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
                    this.tabelaClassificacaoGeral.push({ tecnico: clube.tecnico, pg: clube.pg, j: clube.j, v: clube.v, e: clube.e,  d: clube.d, gp: clube.gp,  gc: clube.gc, sg: clube.sg, pgp: clube.pgp, vp: clube.vp, ep: clube.ep, dp: clube.dp, gpp: clube.gpp, gcp: clube.gcp,  sgp: clube.sgp,  pgpt: clube.pgpt, vpt: clube.vpt, dpt: clube.dpt, gppt: clube.gppt, gcpt: clube.gcpt, sgpt: clube.sgpt, cd:0, fase: tabela.tabela[i - 1].fase.includes('3º Lugar') || tabela.tabela[i - 1].fase.includes('Final') ? tabela.tabela[i - 1].fase : fase});
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
                cg.tecnico.participante.nome === clube.tecnico.participante.nome
            )
            if (existe) {
                const clubeGeral = this.campeonato.tabelas.find(cg =>
                    cg.tecnico.participante.nome === clube.tecnico.participante.nome 
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
                this.campeonato.tabelas.push({tecnico: clube.tecnico, pg: clube.pg, j: clube.j, v: clube.v, e: clube.e, d: clube.d, gp: clube.gp, gc: clube.gc, sg: clube.sg, pgp: clube.pgp, vp: clube.vp, ep: clube.ep, dp: clube.dp, gpp: clube.gpp, gcp: clube.gcp, sgp: clube.sgp, gpt: clube.pgpt, vpt: clube.vpt, dpt: clube.dpt, gppt: clube.gppt, gcpt: clube.gcpt, sgpt: clube.sgpt, cd:0 })
            }
        })
        this.ordenarClassificacao(this.campeonato.tabelas)
    } 

    adicionarPontuacaoCompleta(tecnico, v, e, d, gp, gc){
        this.tabelaClassificacaoGeral.push({tecnico: tecnico, pg: ( v * this.pontoVitoria ) + e, j: v + e + d, v: v, e: e, d: d, gp: gp, gc: gc, sg: gp - gc, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 , fase: '1º fase'})
        this.ordenarClassificacao(this.tabelaClassificacaoGeral)
    }

    classificacaoCampeonato(temporada){
        temporada.campeonato.tabelaAssociacao = []
        const filtrarAssociacao = [
            ...new Set(
                temporada.campeonato.tabelas
                    .map(t => t?.tecnico?.associacao?.nome)
                    .filter(Boolean)
            )
        ];
        associacoes.forEach( associacao => {
            filtrarAssociacao.forEach( nome => {
                if(nome == associacao.nome){
                        temporada.campeonato.tabelaAssociacao.push({tecnico: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 })
                }
            })
        })
        temporada.campeonato.jogos.forEach( jogo => {
            temporada.campeonato.tabelaAssociacao.forEach( tabela => {
                if(jogo.timeCasa.tecnico.associacao.nome != jogo.timeFora.tecnico.associacao.nome){
                    this.pontuacaoAssociacao(tabela, jogo.timeCasa, jogo.timeFora)
                    this.pontuacaoAssociacao(tabela, jogo.timeFora, jogo.timeCasa)
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
                        this.tabelaGeralAssociacao.push({tecnico: associacao, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 })
                }
            })
        })
        temporada.jogos.forEach( jogo => {
            this.tabelaGeralAssociacao.forEach( tabela => {
                if(jogo.timeCasa.tecnico.associacao.nome != jogo.timeFora.tecnico.associacao.nome){
                    this.pontuacaoAssociacao(tabela, jogo.timeCasa, jogo.timeFora)
                    this.pontuacaoAssociacao(tabela, jogo.timeFora, jogo.timeCasa)
                }
            })
        })
        this.ordenarClassificacao(this.tabelaGeralAssociacao, this.tabelaGeralAssociacao)
    }    

    pontuacaoAssociacao(tabela, timeCasa, timeFora){
        if(timeCasa.tecnico.associacao.nome == tabela.tecnico.nome){  
            tabela.v += timeCasa.gols > timeFora.gols ? 1 : 0
            tabela.e += timeCasa.gols == timeFora.gols ? 1 : 0
            tabela.d += timeCasa.gols < timeFora.gols ? 1 : 0
            tabela.j = tabela.v + tabela.e + tabela.d
            tabela.pg = (tabela.v * this.pontoVitoria) + tabela.e
            tabela.gp += timeCasa.gols
            tabela.gc += timeFora.gols
            tabela.sg += timeCasa.gols - timeFora.gols
            tabela.vp += timeCasa.golsProrrogacao > timeFora.golsProrrogacao ? 1 : 0
            tabela.ep += timeCasa.golsProrrogacao == timeFora.golsProrrogacao ? 1 : 0
            tabela.dp += timeCasa.golsProrrogacao < timeFora.golsProrrogacao ? 1 : 0
            tabela.pgp += timeCasa.golsProrrogacao > timeFora.golsProrrogacao ? 1 : 0
            tabela.gpp += timeCasa.golsProrrogacao
            tabela.gcp += timeFora.golsProrrogacao
            tabela.sgp += timeCasa.golsProrrogacao - timeFora.golsProrrogacao
            tabela.vpt += timeCasa.golsPenalti > timeFora.golsPenalti ? 1 : 0
            tabela.dpt += timeCasa.golsPenalti < timeFora.golsPenalti ? 1 : 0
            tabela.pgpt += timeCasa.golsPenalti > timeFora.golsPenalti ? 1 : 0
            tabela.gppt += timeCasa.golsPenalti
            tabela.gcpt += timeFora.golsPenalti
            tabela.sgpt += timeCasa.golsPenalti - timeFora.golsPenalti
            tabela.cd += 0
            tabela.desempate += 0
        }
    }
}

