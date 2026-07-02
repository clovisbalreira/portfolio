export function filtrarChaveamento(equipesTerceiro, chaveamento){
    return chaveamento.find( chave => chave.chave == equipesTerceiro)
}