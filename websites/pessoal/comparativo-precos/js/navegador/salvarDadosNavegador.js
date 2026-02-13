export function salvarDadosNavegador(nome, objeto){
    localStorage.setItem(nome, JSON.stringify(objeto));
}