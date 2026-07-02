export function confrontoDireto(a, b){
    return  a.confrontoDireto.find( adversario => atualizarEquipeCasa(adversario) == atualizarEquipeFora(b))
}

function atualizarEquipeCasa(adversario){
    return adversario.equipe.pais.pais == undefined ? adversario.equipe.pais.nome : adversario.equipe.pais.pais.nome
}

function atualizarEquipeFora(equipe){
    return equipe.pais.pais == undefined ? equipe.pais.nome : equipe.pais.pais.nome
}