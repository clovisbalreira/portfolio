export function criarJogos(campeoanato, fase, rodada, equipeCasa, equipeFora){
    let jogo = { fase, rodada, data: '', equipeCasa, golsEquipeCasa: 0, equipeFora, golsEquipeFora: 0, jogado: false}
    incluirJogos(campeoanato, equipeCasa, equipeFora, jogo)
    return jogo
}

function incluirJogos(campeoanato, equipe1, equipe2, jogo){
    campeoanato.campeonato.jogos.push(jogo)
    if(equipe1.pais.sigla){
        campeoanato.jogos.push(jogo)
        incluirJogo(campeoanato, equipe1.pais.filiacao, jogo)
        incluirJogo(campeoanato, equipe2.pais.filiacao, jogo)
        incluirJogo(campeoanato, equipe1.pais, jogo)
        incluirJogo(campeoanato, equipe2.pais, jogo)
    }
}

function incluirJogo(campeoanato, equipe, jogo){
    if(equipe != ''){
        let filtro = equipe.jogos.find( campeonatoProcurado => campeonatoProcurado.nome.nome == campeoanato.campeonato.nome)
        filtro == undefined ? equipe.jogos.push({nome: campeoanato.campeonato, jogos: [jogo]}) : filtro.jogos.push(jogo)
    }
}