export function adicionarEspaco(palavra, espaco){
    if(palavra != '%0A'){
        for(let i = palavra.length; i <= espaco; i++){
            palavra += '%20'
        }
    }
    return palavra
}
