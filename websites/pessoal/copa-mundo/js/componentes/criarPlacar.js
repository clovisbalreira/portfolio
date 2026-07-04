import { criarElemento } from "./criarElemento.js"
import { criarImg } from "./criarImg.js"

export function criarPlacar(jogo){
    let div = document.createElement('div')
    div.classList.add('placar')
    div.appendChild(mostraEquipe(jogo.equipeCasa))
    div.appendChild(mostrarResultado(jogo))
    div.appendChild(mostraEquipe(jogo.equipeFora))
    return div
}

function mostraEquipe(equipe){
    let div = document.createElement('div')
    div.classList.add('equipe')
    if(equipe.pais.pais.imagem != '') div.appendChild(criarImg(equipe.pais.pais.imagem, equipe.pais.pais.nome))
    div.appendChild(criarElemento('span', equipe.pais.pais.nome))
    return div
}

function mostrarResultado(jogo){
    let div = document.createElement('div')
    div.classList.add('resultado')
    if(jogo.jogado){
        let golCasa = golProrrogacao(jogo.golsEquipeCasa, jogo.golsEquipeFora, jogo.golNormalEquipeCasa, jogo.golNormalEquipeFora, jogo.golProrrogacaoEquipeCasa, jogo.golProrrogacaoEquipeFora, jogo.golPenaltiEquipeCasa, jogo.golPenaltiEquipeFora)
        let golFora = golProrrogacao(jogo.golsEquipeFora, jogo.golsEquipeCasa, jogo.golNormalEquipeFora, jogo.golNormalEquipeCasa, jogo.golProrrogacaoEquipeFora, jogo.golProrrogacaoEquipeCasa, jogo.golPenaltiEquipeFora, jogo.golPenaltiEquipeCasa)
        
        div.appendChild(criarElemento('span', golCasa))
        div.appendChild(criarElemento('span', 'X', 'x'))
        div.appendChild(criarElemento('span', golFora))
    }else{
        div.appendChild(criarElemento('span', ''))
        div.appendChild(criarElemento('span', 'X', 'x'))
        div.appendChild(criarElemento('span', ''))
    }
    
    return div
}

function golProrrogacao(gol1, gol2, golNormal1, golNormal2, golProrrogacao1, golProrrogacao2, golPenalti1, golPenalti2){
    let totalGol = gol1
    if(golNormal1 == golNormal2 && typeof golNormal1 == 'number' && typeof golNormal2 == 'number'){
        totalGol += ' ( ' + String(golNormal1) + ' - ' + String(golProrrogacao1)
        typeof golPenalti1 == 'number' && typeof golPenalti2 == 'number' ? totalGol += ' - ' + String(golPenalti1) + ' )'
        : totalGol += ' )'
    }
    return totalGol
}