export function formatarData(dado){
    return `${adicionarZero(dado.getDate())}/${adicionarZero(dado.getMonth() + 1)}/${dado.getFullYear()}`
}

function adicionarZero(dado){
    return dado < 10 ? `0${dado}` : dado
}