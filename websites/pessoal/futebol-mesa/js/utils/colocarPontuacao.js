export function colocarPontuacao(temporada, pontuacao){
    pontuacao.forEach( (pontos, index) => {
        temporada.adicionarPontuacaoCompleta(temporada.participantes[index], pontos.v, pontos.e, pontos.d, pontos.gp, pontos.gc)
    })
}
