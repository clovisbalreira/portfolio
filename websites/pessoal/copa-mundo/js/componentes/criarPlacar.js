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
        let golCasa = golProrrogacao(jogo.golsEquipeCasa, jogo.golsEquipeFora, jogo.golNormalEquipeCasa, jogo.golProrrogacaoEquipeCasa, jogo.golPenaltiEquipeCasa)
        let golFora = golProrrogacao(jogo.golsEquipeFora, jogo.golsEquipeCasa, jogo.golNormalEquipeFora, jogo.golProrrogacaoEquipeFora, jogo.golPenaltiEquipeFora)
        
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

function golProrrogacao(gol, golOutro, golNormal, golProrrogacao, golPenalti){
    let totalGol = gol
        if(gol == golOutro && golProrrogacao != undefined){
            if(golProrrogacao != undefined){
                totalGol += ' ( ' + String(golNormal) + ' - ' + String(golProrrogacao)
            } 
            if(golPenalti == undefined){
                totalGol += + ' )'
            } 
            if(golPenalti != undefined){
                totalGol += ' - ' + String(golPenalti) + ' )'
            } 
        }
        return totalGol
}