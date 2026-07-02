export function somarJogosFaseClassificacao(jogos, numero){ 
    return jogos.reduce((total, jogo) => {
        return total + jogo.jogos.filter(j => j.jogado).length;
    }, 0) > numero
}