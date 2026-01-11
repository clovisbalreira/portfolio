export function formatarData(dado){
    return dado == '' ? '' : `${adicionarZero(dado.getDate())}/${adicionarZero(dado.getMonth() + 1)}/${dado.getFullYear()} ${adicionarZero(dado.getHours())}:${adicionarZero(dado.getMinutes())}`
}

function adicionarZero(dado){
    return dado < 10 ? `0${dado}` : dado
}