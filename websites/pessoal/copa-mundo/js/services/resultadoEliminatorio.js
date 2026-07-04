import { atualizarGoleadores } from './atualizarGoleadores.js'

export function resultadoEliminatorio(campeonato, jogo, golEquipeCasa, golEquipeFora, data, fase, vencedor, golEquipeCasaProrrogacao , golEquipeForaProrrogacao, golEquipeCasaPenalti, golEquipeForaPenalti){
    jogo.data = data
    if(typeof golEquipeCasa != 'string' && typeof golEquipeFora != 'string'){
        jogo.golNormalEquipeCasa = jogo.golsEquipeCasa
        jogo.golNormalEquipeFora = jogo.golsEquipeFora
        if(golsJogo(golEquipeCasa) > golsJogo(golEquipeFora)) gravarFases(fase, jogo.equipeCasa, jogo.equipeFora)
        else if(golsJogo(golEquipeCasa) < golsJogo(golEquipeFora)) gravarFases(fase, jogo.equipeFora, jogo.equipeCasa)
        else prorrogacao(campeonato, jogo, fase, golEquipeCasaProrrogacao, golEquipeForaProrrogacao, golEquipeCasaPenalti, golEquipeForaPenalti)
    }
}

function gravarFases(fase, vencedor, perdedor){
    if(typeof fase == 'string'){
        vencedor.fase = fase
    }else{
        vencedor.fase = fase[0]
        perdedor.fase = fase[1]
    }
}

function prorrogacao(campeonato, jogo, fase, golEquipeCasaProrrogacao, golEquipeForaProrrogacao, golEquipeCasaPenalti, golEquipeForaPenalti){ 
    if(typeof golEquipeCasaProrrogacao != 'string' && typeof golEquipeForaProrrogacao != 'string'){
        somarGoleadores(jogo.golsJogaresCasa, golEquipeCasaProrrogacao)
        somarGoleadores(jogo.golsJogaresFora, golEquipeForaProrrogacao)
        jogo.golProrrogacaoEquipeCasa = golsJogo(golEquipeCasaProrrogacao)
        jogo.golProrrogacaoEquipeFora = golsJogo(golEquipeForaProrrogacao)
        jogo.golsEquipeCasa += jogo.golProrrogacaoEquipeCasa
        jogo.golsEquipeFora += jogo.golProrrogacaoEquipeFora
        golsProrrogacao(jogo)
        if(jogo.golProrrogacaoEquipeCasa > jogo.golProrrogacaoEquipeFora) gravarFases(fase, jogo.equipeCasa, jogo.golsJogaresFora)
        else if(jogo.golProrrogacaoEquipeCasa < jogo.golProrrogacaoEquipeFora) gravarFases(fase, jogo.equipeFora, jogo.equipeCasa)
        else classificacaoPenalti(jogo, fase, golEquipeCasaPenalti, golEquipeForaPenalti)
    }
}

function somarGoleadores(array, gols){
    gols.forEach( gol => {
        array.push(gol)
    })
}

function golsJogo(gol){
    return typeof gol == 'number' ? gol : gol.length
}

function golsProrrogacao(jogo){
    jogo.equipeCasa.gp += jogo.golsEquipeCasa
    jogo.equipeCasa.gc += jogo.golsEquipeFora
    jogo.equipeCasa.sg = jogo.equipeCasa.gp - jogo.equipeCasa.gc
    jogo.equipeFora.gp += jogo.golsEquipeFora
    jogo.equipeFora.gc += jogo.golsEquipeCasa
    jogo.equipeFora.sg += jogo.golsEquipeFora - jogo.golsEquipeCasa
}

function classificacaoPenalti(jogo, fase, golEquipeCasaPenalti, golEquipeForaPenalti){
    jogo.golPenaltiEquipeCasa = golsJogo(golEquipeCasaPenalti)
    jogo.golPenaltiEquipeFora = golsJogo(golEquipeForaPenalti)
    if(typeof golEquipeCasaPenalti != 'string' && typeof golEquipeForaPenalti != 'string'){
        if(jogo.golPenaltiEquipeCasa > jogo.golPenaltiEquipeFora) gravarFases(fase, jogo.equipeCasa, jogo.equipeFora)
        else if(jogo.golPenaltiEquipeCasa < jogo.golPenaltiEquipeFora) gravarFases(fase, jogo.equipeFora, jogo.equipeCasa)
    }
}    