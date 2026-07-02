export function jogosTerceiros(chaveamento, jogos){
    chaveamento.ordens.forEach( chave => {
        let filtro = jogos.find( jogo => jogo.equipeCasa == chave.primeiro && jogo.colocacaoCasa == 1).equipeFora = chave.terceiro
    })
}