export function estatisticasJogo(jogo, golCasa, golFora){
    golsJogo(jogo, golCasa, golFora)
    gols(jogo)
    pontos(jogo)
    confrontoDireto(jogo, jogo.equipeCasa, jogo.equipeFora, jogo.golsEquipeCasa, jogo.golsEquipeFora)
}

function golsJogo(jogo, golCasa, golFora){
    jogo.golsEquipeCasa = typeof golCasa == 'number' ? golCasa : golCasa.length
    jogo.golsEquipeFora = typeof golFora == 'number' ? golFora : golFora.length
}

function gols(jogo){
    jogo.equipeCasa.gp += jogo.golsEquipeCasa
    jogo.equipeCasa.gc += jogo.golsEquipeFora
    jogo.equipeCasa.sg = jogo.equipeCasa.gp - jogo.equipeCasa.gc
    jogo.equipeFora.gp += jogo.golsEquipeFora
    jogo.equipeFora.gc += jogo.golsEquipeCasa
    jogo.equipeFora.sg += jogo.golsEquipeFora - jogo.golsEquipeCasa
}

function pontos(jogo){
    if(jogo.golsEquipeCasa > jogo.golsEquipeFora){
        jogo.equipeCasa.pg += 3
        jogo.equipeCasa.v ++
        jogo.equipeFora.d ++
    }else if(jogo.golsEquipeCasa < jogo.golsEquipeFora){
        jogo.equipeFora.pg += 3
        jogo.equipeFora.v ++
        jogo.equipeCasa.d ++
    }else{
        jogo.equipeCasa.pg += 1
        jogo.equipeFora.pg += 1
        jogo.equipeCasa.e ++
        jogo.equipeFora.e ++
    }
    jogo.equipeCasa.j += 1
    jogo.equipeFora.j += 1
}

function confrontoDireto(jogo, equipeCasa, equipeFora, golCasa, golFora){
    equipeCasa.confrontoDireto.push({equipe: equipeFora, cd: golCasa > golFora ? 1 : 0 })
    equipeFora.confrontoDireto.push({equipe: equipeCasa, cd: golCasa < golFora ? 1 : 0 })
}