import { Campeonato } from "./Campeonato.js"
import { Socio } from "./Socio.js"
import { associacoes } from "../controll/associacoes.js"

export class Temporada{
        constructor(nome, pontoVitoria, penaltiPontos, criteriosDesempate) {
        this.nome = nome
        this.pontoVitoria = pontoVitoria
        this.penaltiPontos = penaltiPontos
        this.criteriosDesempate = criteriosDesempate
        this.campeonato = ''
        this.participantes = []
        this.jogos = []
        this.tabela = {}
        this.tabelaClassificacaoGeral = []
        this.tabelaClassificacaoEquipe = []
        this.tabelaGeralAssociacao = []
        this.fases = [
            { fase: "Final", valor: 1 },
            { fase: "3º Lugar", valor: 2 },
            { fase: "Final - Ouro", valor: 3 },
            { fase: "3º Lugar - Ouro", valor: 4 },
            { fase: "Final - Prata", valor: 5 },
            { fase: "3º Lugar - Prata", valor: 5 },
            { fase: "Final - Bronze", valor: 7 },
            { fase: "3º Lugar - Bronze", valor: 8 },
            { fase: "Semi Final", valor: 9 },
            { fase: "Semi Final - Ouro", valor: 10 },
            { fase: "Semi Final - Prata", valor: 11 },
            { fase: "Semi Final - Bronze", valor: 12 },
            { fase: "Quartas de Final", valor: 13 },
            { fase: "Quartas de Final - Ouro", valor: 14 },
            { fase: "Quartas de Final - Prata", valor: 15 },
            { fase: "Quartas de Final - Bronze", valor: 16 },
            { fase: "Oitavas de Final", valor: 17 },
            { fase: "Oitavas de Final - Ouro", valor: 18 },
            { fase: "Oitavas de Final - Prata", valor: 19 },
            { fase: "Oitavas de Final - Bronze", valor: 20 },
            { fase: "1º fase", valor: 21 },
            { fase: "Pontos Corridos", valor: 22 },
        ]
        this.fasesMataMata = [
            "Final",
            "3º Lugar",
            "Final - Ouro",
            "3º Lugar - Ouro",
            "Final - Prata",
            "3º Lugar - Prata",
            "Final - Bronze",
            "3º Lugar - Bronze",
            "Semi Final",
            "Semi Final - Ouro",
            "Semi Final - Prata",
            "Semi Final - Bronze",
            "Quartas de Final",
            "Quartas de Final - Ouro",
            "Quartas de Final - Prata",
            "Quartas de Final - Bronze",
            "Oitavas de Final",
            "Oitavas de Final - Ouro",
            "Oitavas de Final - Prata",
            "Oitavas de Final - Bronze",
        ];
    }

    adicionarCampeonato(nome){
        if(nome instanceof Campeonato){
            this.campeonato = nome
        }
    }

    adicionarParticipantes(nome){
        if(nome instanceof Socio){
            this.participantes.push({tecnico:nome, equipe: '', associacao: nome.status})
            this.adicionarParticipacaoAssociacao(nome)
        }
    }

    adicionarParticipacaoAssociacao(nome){
        const existe = nome.associacoes.some( a => a.nome === this.campeonato.associacao.nome);
        if(!existe && this.campeonato.tipo.nome === 'Interno') nome.associacoes.push(this.campeonato.associacao)
    }

    adicionarEquipe(tecnico, equipe){
        tecnico.equipe = equipe
    }

    adicionarJogos(fase, turno, rodada, mesa, data, equipeMandante, equipeVisitante, prorrogacao, penalti){
        this.jogos.push({campeonato: `${this.nome} - ${this.campeonato.nome}`, regra: this.campeonato.regra.nome, tipo : this.campeonato.tipo.nome, fase: fase, valorFase : this.valorFase(fase, turno), turno: turno, rodada, mesa: mesa, data: data, equipeMandante: {participante: equipeMandante, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, equipeVisitante: {participante: equipeVisitante, gols : 0, golsProrrogacao: 0, golsPenalti: 0}, prorrogacao: prorrogacao, penalti: penalti, diferencaGols: 0, diferencaGolsCasa: 0, diferencaGolsFora: 0, totalGols : 0})
    }

    valorFase(fase, turno){
        let nomeFase = this.nomeFase(fase, turno)
        return this.fases.find( fase => fase.fase === nomeFase).valor
    }

    nomeFase(fase, turno){
        return turno == 'Ouro' || turno == 'Prata' || turno == 'Bronze' ? `${fase} - ${turno}` : this.fasesMataMata.includes(fase) || fase == 'Pontos Corridos' ? fase : '1º fase'
    }

    adicionarPlacar(jogo, equipeMandanteGols, equipeVisitanteGols, equipeMandanteGolsProrrogacao, equipeVisitanteGolsProrrogacao, equipeMandanteGolsPenalti, equipeVisitanteGolsPenalti, desempateMandante, desempateVisitante, prorrogacao, pontoPenalti){
        jogo.penalti = pontoPenalti
        if(typeof equipeMandanteGols == 'number' && typeof equipeVisitanteGols == 'number'){
            this.adicionarGolsPartida(jogo, equipeMandanteGols, equipeVisitanteGols)
            if(equipeMandanteGols == equipeVisitanteGols && prorrogacao){
                this.adicionarGolsPartidaProrrogacao(jogo, equipeMandanteGolsProrrogacao, equipeVisitanteGolsProrrogacao)
                this.adicionarGolsPartidaPenalti(jogo, equipeMandanteGolsPenalti, equipeVisitanteGolsPenalti)
            }else if(equipeMandanteGols == equipeVisitanteGols && pontoPenalti){
                this.adicionarGolsPartidaPenalti(jogo, equipeMandanteGolsPenalti, equipeVisitanteGolsPenalti)
            }
        }else{
            this.adicionarGolsPartida(jogo, equipeMandanteGols, equipeVisitanteGols)
        }
        this.desempate(jogo, desempateMandante, desempateVisitante)
        this.totalGols(jogo, equipeMandanteGols, equipeVisitanteGols)
        this.diferencaGols(jogo, equipeMandanteGols, equipeVisitanteGols)
        if(this.campeonato.tipo.nome == 'Externo' && !(jogo.equipeMandante.participante.associacao.nome == jogo.equipeVisitante.participante.associacao.nome)){
            this.adicionarJogoAssociacao(jogo)
            this.adicionarPontuacaoAssociacao(jogo)
        } 
    }
    
    adicionarJogoAssociacao(jogo){
        let associacaoMandante = associacoes.find( associacao => associacao.nome == jogo.equipeMandante.participante.associacao.nome)
        let associacaoVisitante = associacoes.find( associacao => associacao.nome == jogo.equipeVisitante.participante.associacao.nome)
        if(associacaoMandante != associacaoVisitante){
            associacaoMandante.jogos.push(jogo)
            associacaoVisitante.jogos.push(jogo)
        }
    }

    adicionarPontuacaoAssociacao(jogo){
        if(jogo != undefined){
            this.tabelaAssociacao(jogo.equipeMandante, jogo.equipeVisitante)
            this.tabelaAssociacao(jogo.equipeVisitante, jogo.equipeMandante)
        }    
    }

    tabelaAssociacao(equipeMandante, equipeVisitante){
        let associacaoMandante = equipeMandante
        let associacaoVisitante = equipeVisitante
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

    pontuacaoAssociacaoGeral(tabela, equipeMandante, equipeVisitante){
        tabela.tabela.v += equipeMandante.gols > equipeVisitante.gols ? 1 : 0
        tabela.tabela.e += equipeMandante.gols == equipeVisitante.gols ? 1 : 0
        tabela.tabela.d += equipeMandante.gols < equipeVisitante.gols ? 1 : 0
        tabela.tabela.j = tabela.tabela.v + tabela.tabela.e + tabela.tabela.d
        tabela.tabela.pg = ( tabela.tabela.v * this.pontoVitoria) + tabela.tabela.e
        tabela.tabela.gp += equipeMandante.gols
        tabela.tabela.gc += equipeVisitante.gols
        tabela.tabela.sg = tabela.tabela.gp - tabela.tabela.gc
        if(equipeMandante.gols == equipeVisitante.gols){
            tabela.tabela.vp += equipeMandante.golsProrrogacao > equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.tabela.ep += equipeMandante.golsProrrogacao == equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.tabela.dp += equipeMandante.golsProrrogacao < equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.tabela.gpp += equipeMandante.golsProrrogacao
            tabela.tabela.gcp += equipeVisitante.golsProrrogacao
            tabela.tabela.sgp = tabela.tabela.gpp - tabela.tabela.gcp
            if(equipeMandante.golsProrrogacao == equipeVisitante.golsProrrogacao){
                tabela.tabela.vpt += equipeMandante.golsPenalti > equipeVisitante.golsPenalti ? 1 : 0
                tabela.tabela.dpt += equipeMandante.golsPenalti < equipeVisitante.golsPenalti ? 1 : 0
                tabela.tabela.pgpt
                tabela.tabela.gppt += equipeMandante.golsPenalti
                tabela.tabela.gcpt += equipeVisitante.golsPenalti
                tabela.tabela.sgpt = tabela.tabela.gppt - tabela.tabela.gcpt
            }
        }
    }

    adicionarGolsPartida(jogo, equipeMandanteGols, equipeVisitanteGols){
        jogo.equipeMandante.gols = equipeMandanteGols
        jogo.equipeVisitante.gols = equipeVisitanteGols
    }

    adicionarGolsPartidaProrrogacao(jogo, equipeMandanteGolsProrrogacao, equipeVisitanteGolsProrrogacao){
        jogo.equipeMandante.golsProrrogacao = equipeMandanteGolsProrrogacao
        jogo.equipeVisitante.golsProrrogacao = equipeVisitanteGolsProrrogacao
    }
    
    adicionarGolsPartidaPenalti(jogo, equipeMandanteGolsPenalti, equipeVisitanteGolsPenalti){
        jogo.equipeMandante.golsPenalti = equipeMandanteGolsPenalti
        jogo.equipeVisitante.golsPenalti = equipeVisitanteGolsPenalti
    }

    desempate(jogo, desempateMandante, desempateVisitante){
        jogo.equipeMandante.desempate = desempateMandante == undefined ? 0 : desempateMandante
        jogo.equipeVisitante.desempate = desempateVisitante == undefined ? 0 : desempateVisitante
    }

    totalGols(jogo, equipeMandanteGols, equipeVisitanteGols){
        jogo.totalGols = equipeMandanteGols + equipeVisitanteGols
    }

    diferencaGols(jogo, equipeMandanteGols, equipeVisitanteGols){
        jogo.diferencaGolsCasa = equipeMandanteGols - equipeVisitanteGols
        jogo.diferencaGolsFora = equipeVisitanteGols - equipeMandanteGols
        if(jogo.diferencaGolsCasa > 0) jogo.diferencaGols = jogo.diferencaGolsCasa
        else if(jogo.diferencaGolsCasa < 0) jogo.diferencaGols = jogo.diferencaGolsFora
        else jogo.diferencaGols = equipeMandanteGols - equipeVisitanteGols
    }

    modoCampeonato(temporada){
        let tabelas = this.criarTabela(temporada)
        this.adicionarJogosTabela(tabelas, temporada)
        this.criarGrupos(tabelas)
        this.adicionarPontuacao(tabelas)
        this.classificacaoEquipes()
        if(temporada.campeonato.tipo.nome == 'Externo'){
            this.classificacaoAssociacao(temporada)
            this.classificacaoCampeonato(temporada)
        }
    }

    classificacaoEquipes(){
        let totalJogos = this.tabelaClassificacaoGeral[0].j
        this.tabelaClassificacaoGeral.forEach( tabela => {
            if(this.tabelaClassificacaoEquipe.length == 0 && tabela.participante.equipe.nome != undefined){
                let valorFase = this.fases.find( fase => fase.fase == tabela.fase).valor
                this.tabelaClassificacaoEquipe.push({ participante: [tabela.participante], pg: tabela.pg, j: tabela.j, v: tabela.v, e: tabela.e,  d: tabela.d, gp: tabela.gp,  gc: tabela.gc, sg: tabela.sg, pgp: tabela.pgp, vp: tabela.vp, ep: tabela.ep, dp: tabela.dp, gpp: tabela.gpp, gcp: tabela.gcp,  sgp: tabela.sgp,  pgpt: tabela.pgpt, vpt: tabela.vpt, dpt: tabela.dpt, gppt: tabela.gppt, gcpt: tabela.gcpt, sgpt: tabela.sgpt, cd: tabela.cd, fase: tabela.fase, valorFase: valorFase, desempate: 0})
            }else{
                let existe = this.tabelaClassificacaoEquipe.some( equipe => {
                    return equipe.participante.some( participante => {
                        return participante.equipe.nome === tabela.participante.equipe.nome
                    })
                })
                if(!existe && tabela.participante.equipe.nome != undefined){
                    let valorFase = this.fases.find( fase => fase.fase == tabela.fase).valor
                    this.tabelaClassificacaoEquipe.push({ participante: [tabela.participante], pg: tabela.pg, j: tabela.j, v: tabela.v, e: tabela.e,  d: tabela.d, gp: tabela.gp,  gc: tabela.gc, sg: tabela.sg, pgp: tabela.pgp, vp: tabela.vp, ep: tabela.ep, dp: tabela.dp, gpp: tabela.gpp, gcp: tabela.gcp,  sgp: tabela.sgp,  pgpt: tabela.pgpt, vpt: tabela.vpt, dpt: tabela.dpt, gppt: tabela.gppt, gcpt: tabela.gcpt, sgpt: tabela.sgpt, fase: tabela.fase, valorFase: valorFase})
                }else{
                    let equipeProcurada = this.tabelaClassificacaoEquipe.find( equipe => {
                        return equipe.participante.find( participante => {
                            if(participante.equipe.nome === tabela.participante.equipe.nome && equipe.j + tabela.j <= totalJogos){
                                return equipe
                            }
                        })
                        })
                    if(equipeProcurada != undefined){
                        let fase = tabela.fase
                        let valorFase = tabela.valorFase
                        if(equipeProcurada.valorFase >= tabela.valorFase){
                            fase = equipeProcurada.fase
                            valorFase = equipeProcurada.valorFase
                        }
                        equipeProcurada.participante.unshift(tabela.participante)
                        equipeProcurada.pg += tabela.pg, 
                        equipeProcurada.j += tabela.j, 
                        equipeProcurada.v += tabela.v, 
                        equipeProcurada.e += tabela.e,  
                        equipeProcurada.d += tabela.d, 
                        equipeProcurada.gp += tabela.gp,  
                        equipeProcurada.gc += tabela.gc, 
                        equipeProcurada.sg += tabela.sg, 
                        equipeProcurada.pgp += tabela.pgp, 
                        equipeProcurada.vp += tabela.vp, 
                        equipeProcurada.ep += tabela.ep, 
                        equipeProcurada.dp += tabela.dp, 
                        equipeProcurada.gpp += tabela.gpp, 
                        equipeProcurada.gcp += tabela.gcp,  
                        equipeProcurada.sgp += tabela.sgp,  
                        equipeProcurada.pgpt += tabela.pgpt, 
                        equipeProcurada.vpt += tabela.vpt, 
                        equipeProcurada.dpt += tabela.dpt, 
                        equipeProcurada.gppt += tabela.gppt, 
                        equipeProcurada.gcpt += tabela.gcpt, 
                        equipeProcurada.sgpt += tabela.sgpt
                        equipeProcurada.fase = fase, 
                        equipeProcurada.valorFase = valorFase
                    }
                }
            }
        })  
        this.ordenarClassificacao(this.tabelaClassificacaoEquipe, 'geralEquipe')  
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
            participante, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, fase: '', valorFase: 0, desempate: 0 });
        const existeTecnico = (tabela, participante) => {
            return tabela.some(item =>
                item.participante.tecnico.nome === participante.tecnico.nome &&
                item.participante.equipe.nome === participante.equipe.nome
            );
        };
        tabelas.tabela.forEach(tabela => {
            tabela.jogos.forEach(jogo => {
                const casa = jogo.equipeMandante.participante;
                const fora = jogo.equipeVisitante.participante;
                if (tabela.fase.includes("X")) {
                    if(tabela.tabela.length == 0){
                        let grupos = this.separarStringGrupos(tabela.fase);
                        grupos.forEach( (grupo, i) => {
                            tabela.tabela.push({ grupo: grupo, clubes: [] })
                            tabelas.tabela.forEach( (tab, index) => {
                                if(index < grupos.length && tab.fase.includes(grupo)){
                                    tab.tabela.forEach( clube => {
                                        tabela.tabela[i].clubes.push({participante: clube.participante, pg: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, fase: '', valorFase: 0, desempate: 0 })
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
                let equipeMandante, equipeVisitante
                if(tabela.tabela[0].grupo != undefined){
                    let grupoClubeCasa = tabela.tabela.find( grupo => grupo.grupo && grupo.clubes.some( clube => clube.participante.tecnico.nome === jogo.equipeMandante.participante.tecnico.nome && clube.participante.equipe.nome === jogo.equipeMandante.participante.equipe.nome))
                    equipeMandante = grupoClubeCasa.clubes.find( clube => clube.participante.tecnico.nome === jogo.equipeMandante.participante.tecnico.nome && clube.participante.equipe.nome === jogo.equipeMandante.participante.equipe.nome)
                    let grupoClubeFora = tabela.tabela.find( grupo => grupo.grupo && grupo.clubes.some( clube => clube.participante.tecnico.nome === jogo.equipeVisitante.participante.tecnico.nome && clube.participante.equipe.nome === jogo.equipeVisitante.participante.equipe.nome))
                    equipeVisitante = grupoClubeFora.clubes.find( clube => clube.participante.tecnico.nome === jogo.equipeVisitante.participante.tecnico.nome && clube.participante.equipe.nome === jogo.equipeVisitante.participante.equipe.nome)
                }else{
                    equipeMandante = tabela.tabela.find( clube => clube.participante.tecnico.nome === jogo.equipeMandante.participante.tecnico.nome && clube.participante.equipe.nome === jogo.equipeMandante.participante.equipe.nome)
                    equipeVisitante = tabela.tabela.find( clube => clube.participante.tecnico.nome === jogo.equipeVisitante.participante.tecnico.nome && clube.participante.equipe.nome === jogo.equipeVisitante.participante.equipe.nome)
                }
                this.campeonato.jogos.push(jogo)
                let golsCasa = jogo.equipeMandante.gols
                let golsFora = jogo.equipeVisitante.gols
                this.adicionarVitoria(equipeMandante, golsCasa, equipeVisitante, golsFora)
                this.adicionarEmpate(equipeMandante, golsCasa, equipeVisitante, golsFora)
                this.adicionarDerrota(equipeMandante, golsCasa, equipeVisitante, golsFora)
                this.somarJogos(equipeMandante, equipeVisitante)
                this.adicionarGolsPro(equipeMandante, golsCasa, equipeVisitante, golsFora)
                this.adicionarGolsContra(equipeMandante, golsCasa, equipeVisitante, golsFora)
                this.adicionarSaldoGols(equipeMandante, golsCasa, equipeVisitante, golsFora)
                this.adicionarDesempate(equipeMandante, jogo.equipeMandante.desempate, equipeVisitante, jogo.equipeVisitante.desempate)
                this.decisaoPenalti(jogo, equipeMandante, equipeVisitante)
                this.adicionarFase(equipeMandante, equipeVisitante, tabela)
                this.adicionarValorFase(equipeMandante, equipeVisitante, tabela)
            }) 
            this.ordenarClassificacao(tabela, tabela)
        })
        this.classificacaoGeral(tabelas)
        this.somarTabelasCampeonato()
    }

    adicionarVitoria(equipeMandante, golsCasa, equipeVisitante, golsFora){
        if(golsCasa > golsFora){
            equipeMandante.v += 1
            this.adicionarPontos(equipeMandante, this.pontoVitoria)
        }else if(golsCasa < golsFora){
            equipeVisitante.v += 1
            this.adicionarPontos(equipeVisitante, this.pontoVitoria)
        }
    }

    adicionarEmpate(equipeMandante, golsCasa, equipeVisitante, golsFora){
        if(golsCasa == golsFora){
            if(golsCasa != 'W.O.', golsFora != 'W.O.'){
                equipeMandante.e += 1
                equipeVisitante.e += 1
                this.adicionarPontos(equipeMandante, 1)
                this.adicionarPontos(equipeVisitante, 1)
            }
        }
    }

    adicionarPontos(equipe, pontos){
        equipe.pg += pontos
    }

    adicionarDerrota(equipeMandante, golsCasa, equipeVisitante, golsFora){
        if(golsCasa < golsFora){
            equipeMandante.d += 1
        }else if(golsCasa > golsFora){
            equipeVisitante.d += 1
        }
    }

    somarJogos(equipeMandante, equipeVisitante){
        equipeMandante.j += 1
        equipeVisitante.j += 1
    }

    adicionarGolsPro(equipeMandante, golsCasa, equipeVisitante, golsFora){
        equipeMandante.gp += golsCasa == 'W.O.' ? 0 : golsCasa
        equipeVisitante.gp += golsFora == 'W.O.' ? 0 : golsFora
    }

    adicionarGolsContra(equipeMandante, golsCasa, equipeVisitante, golsFora){
        equipeMandante.gc += golsFora == 'W.O.' ? 0 : golsFora
        equipeVisitante.gc += golsCasa == 'W.O.' ? 0 : golsCasa
    }

    adicionarSaldoGols(equipeMandante, golsCasa, equipeVisitante, golsFora){
        equipeMandante.sg += golsCasa == 'W.O.' ? 0 : golsCasa - golsFora 
        equipeVisitante.sg += golsFora == 'W.O.' ? 0 : golsFora - golsCasa 
    }

    adicionarDesempate(equipeMandante, desempateMandante, equipeVisitante, desempateVisitante){
        equipeMandante.desempate = 0
        equipeMandante.desempate = desempateMandante
        equipeVisitante.desempate = 0
        equipeVisitante.desempate = desempateVisitante
    }

    decisaoPenalti(jogo, equipeMandante, equipeVisitante){
        let golsCasaPenalti = jogo.equipeMandante.golsPenalti
        let golsForaPenalti = jogo.equipeVisitante.golsPenalti
        this.adicionarGolsProPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
        this.adicionarGolsPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
        this.adicionarSaldoPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
        this.adicionarVitoriaPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
        this.adicionarDerrotaPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
        if(jogo.penalti){ 
            this.adicionarPontosPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
            this.adicionarPontosGeralPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti)
        } 
    }

    adicionarFase(equipeMandante, equipeVisitante, fase){
        equipeMandante.fase = this.nomeFase(fase.fase, fase.turno)
        equipeVisitante.fase = this.nomeFase(fase.fase, fase.turno)
    }

    adicionarValorFase(equipeMandante, equipeVisitante, fase){
        equipeMandante.valorFase = this.valorFase(fase.fase, fase.turno)
        equipeVisitante.valorFase = this.valorFase(fase.fase, fase.turno)
    }

    adicionarGolsProPenalti(equipeMandante, golsCasa, equipeVisitante, golsFora){
        equipeMandante.gppt += golsCasa
        equipeVisitante.gppt += golsFora
    }

    adicionarGolsPenalti(equipeMandante, golsCasa, equipeVisitante, golsFora){
        equipeMandante.gcpt += golsFora
        equipeVisitante.gcpt += golsCasa
    }

    adicionarSaldoPenalti(equipeMandante, golsCasa, equipeVisitante, golsFora){
        equipeMandante.sgpt += golsCasa - golsFora
        equipeVisitante.sgpt += golsFora - golsCasa
    }
    
    adicionarVitoriaPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            equipeMandante.vpt += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            equipeVisitante.vpt += 1
        }
    }

    adicionarDerrotaPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti){
        if(golsCasaPenalti < golsForaPenalti){
            equipeMandante.dpt += 1
        }else if(golsCasaPenalti > golsForaPenalti){
            equipeVisitante.dpt += 1
        }
    }

    adicionarPontosPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            equipeMandante.pgpt += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            equipeVisitante.pgpt += 1
        }
    }

    adicionarPontosGeralPenalti(equipeMandante, golsCasaPenalti, equipeVisitante, golsForaPenalti){
        if(golsCasaPenalti > golsForaPenalti){
            equipeMandante.pg += 1
        }else if(golsCasaPenalti < golsForaPenalti){
            equipeVisitante.pg += 1
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
                this.classificacao(tabela.tabela, fase)
            }
        }
    }

    classificacao(tabela, jogosFase) {
        tabela.sort((a, b) => {
            return this.compararClassificacao(a, b, jogosFase);
        });
    }

    compararClassificacao(a, b, jogosFase) {
        let criterios = jogosFase == 'geralCampeonato' ? this.mudarOrdemCriterios(this.criteriosDesempate) : this.criteriosDesempate
        a.desempate = 0
        b.desempate = 0
        for (let criterio of criterios) {
            if(criterio == 'fase' && jogosFase !== 'geral'){
                if (b.fase !== a.fase) {
                    return a.valorFase - b.valorFase;
                }else if (jogosFase != 'geralCampeonato' && this.fasesMataMata.includes(jogosFase.fase)) {
                    this.confrontoDiretoMataMata(a, b, jogosFase);
                    if (b.cd !== a.cd) return b.cd - a.cd;
                }else if (jogosFase == 'geralCampeonato' && this.fasesMataMata.includes(a.fase)){
                    this.confrontoDiretoMataMataGeral(a, b, a.fase)
                    if (b.desempate !== a.desempate) return b.desempate - a.desempate;
                }
            }else if(criterio == 'cd'){
                this.confrontoDiretoMataMataGeral(a, b, a.fase)
                if (b.cd !== a.cd) return b.cd - a.cd;
            }else{
                if(criterio == 'desempate' && a.fase != undefined && b.fase != undefined){
                    this.desempateMataMata(a, b)
                }
                if (b[criterio] !== a[criterio]) {
                    return b[criterio] - a[criterio];
                }
            }
        }
        return 0;
    }

    desempateMataMata(a, b){
        if(this.fasesMataMata.includes(a.fase) == (this.fasesMataMata.includes(b.fase))){
            let timeA = ''
            let timeB = ''
            let jogoFiltrado = this.tabela.tabela.find( jogo => {
                if(typeof jogo.jogos[0].equipeMandante.participante.equipe.nome == 'string' && typeof jogo.jogos[0].equipeVisitante.participante.equipe.nome == 'string'){
                    let nomeMandante = a.participante.tecnico == undefined ? a.participante[0] : a.participante
                    let nomeVisitante = b.participante.tecnico == undefined ? b.participante[0] : b.participante                
                    jogo.tabela.forEach( participante => {
                        if(participante.participante != undefined){
                            if((jogo.fase.includes(a.fase), participante.participante.tecnico.nome, nomeMandante.tecnico.nome, participante.participante.equipe.nome, nomeMandante.equipe.nome)){
                                console.log(participante)
                            }
                        }
                    })
                    //return this.fasesMataMata.includes(a.fase) && (jogo.jogos[0].equipeMandante.participante.tecnico.nome == nomeMandante && jogo.jogos[0].equipeVisitante.participante.tecnico.nome == nomeMandante) || (jogo.jogos[0].equipeMandante.participante.tecnico.nome == nomeVisitante && jogo.jogos[0].equipeVisitante.participante.tecnico.nome == nomeVisitante)
                }/*else{
                    //return faseFiltrado == a.fase && jogo.jogos[0].equipeMandante.participante.tecnico.nome == a.participante.tecnico.nome && jogo.jogos[0].equipeMandante.participante.equipe.nome == a.participante.equipe.nome && jogo.jogos[0].equipeVisitante.participante.tecnico.nome == b.participante.tecnico.nome && jogo.jogos[0].equipeVisitante.participante.equipe.nome == b.participante.equipe.nome
                }*/
            })
            //console.log(timeA)
            //console.log('------------------')
            if(jogoFiltrado != undefined){
                let timeA = jogoFiltrado.tabela.find( participante =>  participante.participante.tecnico.nome == a.participante.tecnico.nome && participante.participante.equipe.nome == a.participante.equipe.nome)
                let timeB = jogoFiltrado.tabela.find( participante =>  participante.participante.tecnico.nome == b.participante.tecnico.nome && participante.participante.equipe.nome == b.participante.equipe.nome)
                if(timeA.pg > timeB.pg){
                    a.desempate = 1
                }else if(timeA.pg < timeB.pg){
                    b.desempate = 1
                }
            }
        }
    }

    mudarOrdemCriterios(array){
        let criterios = [...array]
        let indiceFase = criterios.indexOf('fase');
        if (indiceFase !== -1) {
            criterios.splice(indiceFase + 1, 0, 'desempate');
        }
        return criterios
    }

    confrontoDiretoMataMata(a, b, fase){
        let timeA = fase.tabela.find( participante =>  participante.participante.tecnico.nome == a.participante.tecnico.nome && participante.participante.equipe.nome == a.participante.equipe.nome)
        let timeB = fase.tabela.find( participante =>  participante.participante.tecnico.nome == b.participante.tecnico.nome && participante.participante.equipe.nome == b.participante.equipe.nome)
        this.criteriosDesempateMataMata(a, b, timeA, timeB)
    }

    confrontoDiretoMataMataGeral(a, b, fase){
        let equipeA = a.participante.length != undefined ? a.participante[0] : a.participante
        let equipeB = b.participante.length != undefined ? b.participante[0] : b.participante
        if(this.tabela.tabela != undefined){
            let filtro = this.tabela.tabela.filter( tab => {
                if((fase.includes(tab.fase) || fase == tab.fase) && ( tab.jogos[0].equipeMandante.participante.tecnico.nome == equipeA.tecnico.nome && tab.jogos[0].equipeMandante.participante.equipe.nome == equipeA.equipe.nome || tab.jogos[0].equipeVisitante.participante.tecnico.nome == equipeA.tecnico.nome && tab.jogos[0].equipeVisitante.participante.equipe.nome == equipeA.equipe.nome) && ( tab.jogos[0].equipeMandante.participante.tecnico.nome == equipeB.tecnico.nome && tab.jogos[0].equipeMandante.participante.equipe.nome == equipeB.equipe.nome || tab.jogos[0].equipeVisitante.participante.tecnico.nome == equipeB.tecnico.nome && tab.jogos[0].equipeVisitante.participante.equipe.nome == equipeB.equipe.nome)){
                    return tab.jogos
                }
            })
            if(filtro.length > 0){
                let timeA = filtro[0].tabela.find( participante =>  participante.participante.tecnico.nome == equipeA.tecnico.nome && participante.participante.equipe.nome == equipeA.equipe.nome)
                let timeB = filtro[0].tabela.find( participante =>  participante.participante.tecnico.nome == equipeB.tecnico.nome && participante.participante.equipe.nome == equipeB.equipe.nome)
                this.criteriosDesempateMataMata(equipeA, equipeB, timeA, timeB)
            }
        }
    }

    criteriosDesempateMataMata(a, b, timeA, timeB){
        this.criterioUnico(a, b, timeA, timeB, 'pg')
        this.criterioUnico(a, b, timeA, timeB, 'v')
        this.criterioUnico(a, b, timeA, timeB, 'sg')
        this.criterioUnico(a, b, timeA, timeB, 'gpp')
        this.criterioUnico(a, b, timeA, timeB, 'gppt')
    }

    criterioUnico(a, b, timeA, timeB, criterio){
        if(timeA[criterio] > timeB[criterio]){
            a.desempate = 1
        }else if(timeA[criterio] < timeB[criterio]){
            b.desempate = 1
        }
    }

    classificacaoGeral(tabela){
        let fase = 1
        let nomeFase = ''
        let gruposVerso = tabela.tabela.some( tab => tab.fase.includes('X Grupo'))
        if(gruposVerso){
            for(let i = tabela.tabela.length; 0 < i; i--){
                if(nomeFase != tabela.tabela[i - 1].fase && !tabela.tabela[i - 1].fase.includes(nomeFase)){
                    fase += 1
                }
                tabela.tabela[i - 1].tabela.forEach(clube => {
                    let existe
                    if(clube.grupo != undefined){
                        existe = this.tabelaClassificacaoGeral.some(cg => { return clube.clubes.some( c =>  cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.equipe.nome === c.participante.equipe.nome
                        ) }) 
                    }else{
                        existe = this.tabelaClassificacaoGeral.some(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.equipe.nome === clube.participante.equipe.nome );
                    }
                    if (!existe){
                        if( clube.grupo != undefined){
                            clube.clubes.forEach( c => {
                                let filtroFase = this.filtrarPosicaoFase(c)
                                this.tabelaClassificacaoGeral.push({ participante: c.participante, pg: 0, j: 0, v: 0, e: 0,  d: 0, gp: 0,  gc: 0, sg: 0, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0,  sgp: 0,  pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd: 0, fase: filtroFase.nome, valorFase: filtroFase.valor, desempate: 0});
                            })
                        }
                    }
                });
                nomeFase = this.nomeFaseAnterior(tabela, i)
            }
            for(let i = tabela.tabela.length; 0 < i; i--){
                if(nomeFase != tabela.tabela[i - 1].fase && !tabela.tabela[i - 1].fase.includes(nomeFase)){
                    fase += 1
                }
                tabela.tabela[i - 1].tabela.forEach(clube => {
                    let existe
                    if(clube.grupo != undefined){
                        existe = this.tabelaClassificacaoGeral.some(cg => { return clube.clubes.some( c =>  cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.equipe.nome === c.participante.equipe.nome
                        ) }) 
                    }else{
                        existe = this.tabelaClassificacaoGeral.some(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.equipe.nome === clube.participante.equipe.nome );
                    }
                    if (existe) {
                        let clubeGeral
                        if(clube.grupo != undefined){
                            clube.clubes.forEach( c => {
                                this.tabelaClassificacaoGeral.forEach(cg => {
                                    if(cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.equipe.nome === c.participante.equipe.nome){
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
                                        cg.cd = cg.cd
                                        cg.desempate += cg.desempate
                                    }
                                })
                            })
                        }else{                       
                            clubeGeral = this.tabelaClassificacaoGeral.find(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.equipe.nome === clube.participante.equipe.nome );
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
                            clubeGeral.cd = clube.cd
                            clubeGeral.desempate += clube.desempate
                        }
                    } 
                });
                nomeFase = this.nomeFaseAnterior(tabela, i)
            }         
        }else{
            for(let i = tabela.tabela.length; 0 < i; i--){
                if(nomeFase != tabela.tabela[i - 1].fase && !tabela.tabela[i - 1].fase.includes(nomeFase)){
                    fase += 1
                }
                tabela.tabela[i - 1].tabela.forEach(clube => {
                    let existe
                    if(clube.grupo != undefined){
                        existe = this.tabelaClassificacaoGeral.some(cg => { return clube.clubes.some( c =>  cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.equipe.nome === c.participante.equipe.nome
                        ) }) 
                    }else{
                        existe = this.tabelaClassificacaoGeral.some(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.equipe.nome === clube.participante.equipe.nome );
                    }
                    if (existe) {
                        let clubeGeral
                        if(clube.grupo != undefined){
                            clube.clubes.forEach( c => {
                                this.tabelaClassificacaoGeral.forEach(cg => {
                                    if(cg.participante.tecnico.nome === c.participante.tecnico.nome && cg.participante.equipe.nome === c.participante.equipe.nome){
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
                                        cg.cd = cg.cd
                                        cg.desempate += cg.desempate
                                        this.arrumarFaseClassificacaoGeral(clubeGeral, tabela.tabela[i])
                                    }
                                })
                            })
                        }else{              
                            clubeGeral = this.tabelaClassificacaoGeral.find(cg => cg.participante.tecnico.nome === clube.participante.tecnico.nome && cg.participante.equipe.nome === clube.participante.equipe.nome );       
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
                            clubeGeral.cd = clube.cd
                            clubeGeral.desempate += clube.desempate
                            this.arrumarFaseClassificacaoGeral(clubeGeral, tabela.tabela[i])
                        }
                    } else {             
                        let filtroFase = this.filtrarPosicaoFase(clube)
                        this.tabelaClassificacaoGeral.push({ participante: clube.participante, pg: clube.pg, j: clube.j, v: clube.v, e: clube.e,  d: clube.d, gp: clube.gp,  gc: clube.gc, sg: clube.sg, pgp: clube.pgp, vp: clube.vp, ep: clube.ep, dp: clube.dp, gpp: clube.gpp, gcp: clube.gcp,  sgp: clube.sgp,  pgpt: clube.pgpt, vpt: clube.vpt, dpt: clube.dpt, gppt: clube.gppt, gcpt: clube.gcpt, sgpt: clube.sgpt, cd:clube.cd, fase: filtroFase.nome, valorFase: filtroFase.valor, desempate: clube.desempate});
                    }
                });
                nomeFase = this.nomeFaseAnterior(tabela, i)
            }
        }
        this.ordenarClassificacao(this.tabelaClassificacaoGeral, 'geralCampeonato')
    }

    arrumarFaseClassificacaoGeral(clubeGeral, tabela){
        if(clubeGeral.valorFase > this.valorFase(tabela.fase, tabela.turno)){
            clubeGeral.fase = this.nomeFase(tabela.fase, tabela.turno)
            clubeGeral.valorFase = this.valorFase(tabela.fase, tabela.turno) 
        }
    }

    filtrarPosicaoFase(dados){
        let jogoFitrado = this.jogos.reverse().filter( jogo => {
            if(dados.participante.tecnico.nome == jogo.equipeMandante.participante.tecnico.nome && dados.participante.equipe.nome == jogo.equipeMandante.participante.equipe.nome){
                return jogo.fase
            }
            if(dados.participante.tecnico.nome == jogo.equipeVisitante.participante.tecnico.nome && dados.participante.equipe.nome == jogo.equipeVisitante.participante.equipe.nome){
                return jogo.fase
            }
        })
        return this.ordenarFiltrarPosicaoFase(jogoFitrado)
    }

    ordenarFiltrarPosicaoFase(jogoFitrado){
        let fases = jogoFitrado.sort((a, b) => {
            if(a.valorFase !== b.valorFase) return a.valorFase - b.valorFase
        })[0]
        return {nome: this.nomeFase(fases.fase, fases.turno), valor: this.valorFase(fases.fase, fases.turno)}
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
                clubeGeral.cd = clube.cd;
                clubeGeral.desempate += clube.desempate;
                this.arrumarFaseClassificacaoGeral(clubeGeral, clube)
            } else {
                this.campeonato.tabelas.push({participante: clube.participante, pg: clube.pg, j: clube.j, v: clube.v, e: clube.e, d: clube.d, gp: clube.gp, gc: clube.gc, sg: clube.sg, pgp: clube.pgp, vp: clube.vp, ep: clube.ep, dp: clube.dp, gpp: clube.gpp, gcp: clube.gcp, sgp: clube.sgp, gpt: clube.pgpt, vpt: clube.vpt, dpt: clube.dpt, gppt: clube.gppt, gcpt: clube.gcpt, sgpt: clube.sgpt, fase: clube.fase, valorFase: clube.valorFase, cd:0 })
            }
        })
        this.ordenarClassificacao(this.campeonato.tabelas, 'geral')
    } 

    adicionarPontuacaoCompleta(participante, v, e, d, gp, gc){
        this.tabelaClassificacaoGeral.push({participante: participante, pg: ( v * this.pontoVitoria ) + e, j: v + e + d, v: v, e: e, d: d, gp: gp, gc: gc, sg: gp - gc, pgp: 0, vp: 0, ep: 0, dp: 0, gpp: 0, gcp: 0, sgp: 0, pgpt: 0, vpt: 0, dpt: 0, gppt: 0, gcpt: 0, sgpt: 0, cd:0, desempate: 0 , fase: '1º fase'})
        this.ordenarClassificacao(this.tabelaClassificacaoGeral, '1º fase')
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
                if(jogo.equipeMandante.participante.associacao.nome != jogo.equipeVisitante.participante.associacao.nome){
                    this.pontuacaoAssociacao(tabela, jogo.equipeMandante, jogo.equipeVisitante)
                    this.pontuacaoAssociacao(tabela, jogo.equipeVisitante, jogo.equipeMandante)
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
                if(jogo.equipeMandante.participante.associacao.nome != jogo.equipeVisitante.participante.associacao.nome){
                    this.pontuacaoAssociacao(tabela, jogo.equipeMandante, jogo.equipeVisitante)
                    this.pontuacaoAssociacao(tabela, jogo.equipeVisitante, jogo.equipeMandante)
                }
            })
        })
        
        this.ordenarClassificacao(this.tabelaGeralAssociacao, this.tabelaGeralAssociacao)
    }    

    pontuacaoAssociacao(tabela, equipeMandante, equipeVisitante){
        if(equipeMandante.participante.associacao.nome == tabela.participante.nome){  
            tabela.v += equipeMandante.gols > equipeVisitante.gols ? 1 : 0
            tabela.e += equipeMandante.gols == equipeVisitante.gols ? 1 : 0
            tabela.d += equipeMandante.gols < equipeVisitante.gols ? 1 : 0
            tabela.j = tabela.v + tabela.e + tabela.d
            tabela.pg = (tabela.v * this.pontoVitoria) + tabela.e
            tabela.gp += equipeMandante.gols
            tabela.gc += equipeVisitante.gols
            tabela.sg += equipeMandante.gols - equipeVisitante.gols
            tabela.vp += equipeMandante.golsProrrogacao > equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.ep += equipeMandante.golsProrrogacao == equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.dp += equipeMandante.golsProrrogacao < equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.pgp += equipeMandante.golsProrrogacao > equipeVisitante.golsProrrogacao ? 1 : 0
            tabela.gpp += equipeMandante.golsProrrogacao
            tabela.gcp += equipeVisitante.golsProrrogacao
            tabela.sgp += equipeMandante.golsProrrogacao - equipeVisitante.golsProrrogacao
            tabela.vpt += equipeMandante.golsPenalti > equipeVisitante.golsPenalti ? 1 : 0
            tabela.dpt += equipeMandante.golsPenalti < equipeVisitante.golsPenalti ? 1 : 0
            tabela.pgpt += equipeMandante.golsPenalti > equipeVisitante.golsPenalti ? 1 : 0
            tabela.gppt += equipeMandante.golsPenalti
            tabela.gcpt += equipeVisitante.golsPenalti
            tabela.sgpt += equipeMandante.golsPenalti - equipeVisitante.golsPenalti
            tabela.cd = 0
            tabela.desempate += 0
        }
    }
}

