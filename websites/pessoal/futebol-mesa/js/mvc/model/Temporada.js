import { Campeonato } from "./Campeonato.js"
import { Socio } from "./Socio.js"

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
        this.jogos.push({campeonato: `${this.nome} - ${this.campeonato.nome}`, fase: fase, turno: turno, rodada, mesa: mesa, data: data, timeCasa: {tecnico: timeCasa, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, timeFora: {tecnico: timeFora, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, prorrogacao: false, penalti: false, diferencaGols: 0, diferencaGolsCasa: 0, diferencaGolsFora: 0, totalGols : 0, })
    }

    adicionarPlacar(jogo, timeCasaGols, timeForaGols, timeCasaGolsProrrogacao, timeForaGolsProrrogacao, timeCasaGolsPenalti, timeForaGolsPenalti, prorrogacao, pontoPenalti){
        jogo.penalti = pontoPenalti
        if(typeof timeCasaGols == 'number' && typeof timeForaGols == 'number'){
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
            if(timeCasaGols == timeForaGols && prorrogacao){
                this.adicionarGolsPartidaProrrogacao(jogo, timeCasaGolsProrrogacao, timeForaGolsProrrogacao)
            }else if(timeCasaGols == timeForaGols && pontoPenalti){
                this.adicionarGolsPartidaPenalti(jogo, timeCasaGolsPenalti, timeForaGolsPenalti)
            }
        }else{
            this.adicionarGolsPartida(jogo, timeCasaGols, timeForaGols)
        }
        this.totalGols(jogo, timeCasaGols, timeForaGols)
        this.diferencaGols(jogo, timeCasaGols, timeForaGols)
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
        this.tabelaClassificacaoGeral.push({tecnico: tecnico, pg: ( v * this.pontoVitoria ) + e, j: v + e + d, v: v, e: e, d: d, gp: gp, gc: gc, sg: gp - gc, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0 , fase: '1º fase'})
        this.ordenarClassificacao(this.tabelaClassificacaoGeral)
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

    criarGrupos(tabelas) {
        const criarObj = (tecnico) => ({
            tecnico, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0 });

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
                                        tabela.tabela[i].clubes.push({tecnico: clube.tecnico, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0 })
                                    })
                                }
                            })
                        })
                    }else{
                        //console.log(tabela)
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

    //jogo normal
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
                this.adicionarGolsPro(timeCasa, golsCasa, timeFora, golsFora)
                this.adicionarGolsContra(timeCasa, golsCasa, timeFora, golsFora)
                this.somarJogos(timeCasa, timeFora)
                this.adicionarSaldoGols(timeCasa, golsCasa, timeFora, golsFora)
                this.decisaoPenalti(jogo, timeCasa, timeFora)
            })
            this.ordenarClassificacao(tabela, tabela)
        })
        this.classificacaoGeral(tabelas)
        this.somarTabelasCampeonato()
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
            if(golsCasa != 'W.O.', golsFora != 'W.O.'){
                timeCasa.e += 1
                timeFora.e += 1
                this.adicionarPontos(timeCasa, 1)
                this.adicionarPontos(timeFora, 1)
            }
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

    //penalti
    decisaoPenalti(jogo, timeCasa, timeFora){
        let golsCasaPenalti = jogo.timeCasa.golsPenalti
        let golsForaPenalti = jogo.timeFora.golsPenalti
        this.adicionarGolsProPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarGolsPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarSaldoPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarVitoriaPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarDerrotaPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarPontosPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
        this.adicionarPontosGeralPenalti(timeCasa, golsCasaPenalti, timeFora, golsForaPenalti)
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

    adicionarGolsProPenalti(timeCasa, golsCasa, timeFora, golsFora){
        console
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

    //classificação
    confrontoDireto(a, b, fase){
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

    classificacao(tabela, fase){
        tabela.sort((a, b) => {
            if(a.fase != 'Final' && a.fase != '3º Lugar'){
                this.confrontoDireto(a, b, fase)
                if(a.fase != undefined && b.fase != undefined) if (b.fase !== a.fase) return a.fase - b.fase
                if (b.pg !== a.pg) return b.pg - a.pg
                if (b.v !== a.v) return b.v - a.v;
                if (b.cd !== a.cd) return b.cd - a.cd
                return b.pgpt - a.pgpt; 
            }
        });
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

    desempate(temporada, participanteCasa, participanteFora, golsParticipanteCasa, golsParticipanteFora ){
        if(this.tabelaClassificacaoGeral == 0){
            this.participantes.forEach( participante => {
                this.tabelaClassificacaoGeral.push({ tecnico: participante, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0 , fase: '1º fase'})
            })
        }
        let tecnicoCasa = this.tabelaClassificacaoGeral.find( clube => clube.tecnico.participante.nome === participanteCasa.participante.nome)
        let tecnicoFora = this.tabelaClassificacaoGeral.find( clube => clube.tecnico.participante.nome === participanteFora.participante.nome)
        if(tecnicoCasa != undefined && tecnicoFora != undefined){
            if(golsParticipanteCasa > golsParticipanteFora){
                this.vitoriaDesempate(tecnicoCasa, golsParticipanteCasa, golsParticipanteFora)
                this.derrotaDesempate(tecnicoFora, golsParticipanteFora, golsParticipanteCasa)
            }else if(golsParticipanteCasa < golsParticipanteFora){
                this.vitoriaDesempate(tecnicoFora, golsParticipanteFora, golsParticipanteCasa)
                this.derrotaDesempate(tecnicoCasa, golsParticipanteCasa, golsParticipanteFora)
            }
        }
    }

    vitoriaDesempate(participante, golsPro, golsContra){
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
}