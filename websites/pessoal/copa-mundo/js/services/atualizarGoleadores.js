    export function atualizarGoleadores(campeonato, jogo, equipeCasa, equipeFora, prorrogacao = false){
        if(prorrogacao){
            criarGoleadoresCampeonato(campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
            criarGoleadoresCampeonato(campeonato.campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
            criarGoleadoresFiliado(campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
            criarGoleadoresPais(campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)    
        }else{
            criarGoleadoresCampeonato(campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
            criarGoleadoresCampeonato(campeonato.campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
            criarGoleadoresFiliado(campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
            criarGoleadoresPais(campeonato, jogo.equipeCasa, equipeCasa, jogo.equipeFora, equipeFora)
        }
    }

    function criarGoleadoresCampeonato(campeonato, jogoCasa, equipeCasa, jogoFora, equipeFora){
        GoleadoresCampeonato(campeonato, jogoCasa, equipeCasa)
        GoleadoresCampeonato(campeonato, jogoFora, equipeFora)
    }

    function GoleadoresCampeonato(campeonato, equipe, golMarcado){
        if(typeof golMarcado == 'object'){
            golMarcado.forEach( gol => {
                let goleadores = campeonato.goleadores.find( a => a.pais.pais.pais.nome == equipe.pais.pais.nome && a.nome == gol.nome && a.favor == gol.favor)
                if( goleadores == undefined){
                    campeonato.goleadores.push({pais: equipe, nome: gol.nome, gol: 1, favor: gol.favor})
                }else{
                    goleadores.gol ++
                }
            })
        }
        ordenarGoleadores(campeonato)
    }

    function criarGoleadoresFiliado(campeonato, jogoCasa, equipeCasa, jogoFora, equipeFora){
        GoleadoresFiliado(campeonato, jogoCasa, equipeCasa)
        GoleadoresFiliado(campeonato, jogoFora, equipeFora)
    }

    function GoleadoresFiliado(campeonato, equipe, golMarcado){
        if(typeof golMarcado == 'object'){
            golMarcado.forEach( gol => {
                let goleadores = equipe.pais.filiacao.goleadores.find( a => a.pais.pais.pais.nome == equipe.pais.pais.nome && a.nome == gol.nome && a.favor == gol.favor)
                if( goleadores == undefined){
                    equipe.pais.filiacao.goleadores.push({pais: equipe, nome: gol.nome, gol: 1, favor: gol.favor})
                }else{
                    goleadores.gol ++
                }
            })
        }
        ordenarGoleadores(equipe.pais.filiacao)
    }
    
    function criarGoleadoresPais(campeonato, jogoCasa, equipeCasa, jogoFora, equipeFora){
        goleadoresPais(campeonato, jogoCasa, equipeCasa)
        goleadoresPais(campeonato, jogoFora, equipeFora)
    }

    function goleadoresPais(campeonato, equipe, golMarcado){
        if(typeof golMarcado == 'object'){
            golMarcado.forEach( gol => {
                let goleadores = equipe.pais.goleadores.find( a => a.campeonato.nome == campeonato.campeonato.nome)
                if( goleadores == undefined){
                    equipe.pais.goleadores.push({campeonato: campeonato.campeonato, jogadores: [{nome: gol.nome, gol: 1, favor: gol.favor}]})
                }else{                    
                    let jogador = equipe.pais.goleadores.flatMap(goleadores => goleadores.jogadores).find(jogador => jogador.nome === gol.nome &&     jogador.favor === gol.favor)
                    jogador == undefined ? goleadores.jogadores.push({nome: gol.nome, gol: 1, favor: gol.favor}) : jogador.gol ++ 
                }
            })
        }
        ordenarGoleadores(equipe.pais)
    }

    function ordenarGoleadores(campeonato){
        campeonato.goleadores.sort((a, b) =>  b.gol - a.gol)
    }