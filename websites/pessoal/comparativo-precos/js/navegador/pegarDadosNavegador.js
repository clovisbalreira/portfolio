export function pegarDadosNavegador(objeto){
    return JSON.parse(localStorage.getItem(objeto)) || []
}