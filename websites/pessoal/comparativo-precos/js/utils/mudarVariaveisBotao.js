export function mudarVariavelBotao(variavelBotoes, estilo){
    if(estilo == 'editar-deletar'){
        variavelBotoes[0].visivel = 'none'
        variavelBotoes[1].visivel = 'block'
        variavelBotoes[2].visivel = 'block'
    }else{
        variavelBotoes[0].visivel = 'block'
        variavelBotoes[1].visivel = 'none'
        variavelBotoes[2].visivel = 'none'
    }
}