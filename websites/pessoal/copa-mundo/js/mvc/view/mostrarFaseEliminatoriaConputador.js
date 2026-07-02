import { criarImg } from "../../componentes/criarImg.js"
import { criarElemento } from "../../componentes/criarElemento.js"
import { mostrarGols } from "./mostrarGols.js"

export function mostrarFaseEliminatoriaConputador(campeonato, faseEliminatorio){
    let div = document.createElement('div')
    div.classList.add(`computador-${faseEliminatorio[0].nome.replace(/\s+/g, '-').toLowerCase()}`)
    faseEliminatorio.forEach( fase => {
        fase.fase.forEach( jogo => {
            let prorrogacao = jogo.golNormalEquipeCasa == jogo.golNormalEquipeFora
            div.appendChild(equipeEliminatorio(jogo, jogo.equipeCasa, jogo.golsEquipeCasa, prorrogacao, jogo.golNormalEquipeCasa, jogo.golProrrogacaoEquipeCasa, jogo.golPenaltiEquipeCasa, jogo.golsJogaresCasa))
            div.appendChild(equipeEliminatorio(jogo, jogo.equipeFora, jogo.golsEquipeFora, prorrogacao, jogo.golNormalEquipeFora, jogo.golProrrogacaoEquipeFora, jogo.golPenaltiEquipeFora, jogo.golsJogaresFora))
        })
    })
    let divTexto = document.createElement('div')
    divTexto.classList.add('texto-colocacao')
    divTexto.appendChild(criarElemento('p', '3º Lugar'))
    div.appendChild(divTexto) 
    let divImagem = document.createElement('div')
    divImagem.appendChild(criarImg(`./img/tacas/${campeonato.taca}`, `${campeonato.campeonato.nome} - ${campeonato.ano}`))
    div.appendChild(divImagem) 
    return div
}

function equipeEliminatorio(jogo, equipe, gol, prorrogacao, golNormal, golProrrogacao, golPenalti, golMarcado){
    let div = document.createElement('div')
    equipe.pais.sigla == '' ? div.appendChild(divBranco(div)) : div.appendChild(criarImg(equipe.pais.pais.imagem, equipe.pais.pais.nome))
    if(jogo.jogado){
        if(prorrogacao){
            let texto = '( ' + String(golNormal)
            if(typeof golProrrogacao == 'number') texto +=  ' - ' + String(golProrrogacao)
            if(golPenalti == undefined) texto +=  ' )'
            if(typeof golPenalti == 'number') texto +=  ' - ' + String(golPenalti)
            if(golPenalti != undefined) texto +=  ' )'
            div.appendChild(criarElemento('span', `${gol} ${golProrrogacao == undefined ? '' : texto}`))
            div.appendChild(mostrarGols(golMarcado, 'desaparecer'))
        }else{
            div.appendChild(criarElemento('span', gol))
            div.appendChild(mostrarGols(golMarcado, 'desaparecer'))
        }
    }
    return div
}

function divBranco(elemento){
    elemento.classList.add('nao-classificado')
    let div = document.createElement('div')
    return div
}