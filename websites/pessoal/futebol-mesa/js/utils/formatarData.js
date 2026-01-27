export function formatarData(dado){
    if(dado == ''){
        return ''
    }else if(dado.getFullYear() < 1900){
        return `${adicionarZero(dado.getHours())}:${adicionarZero(dado.getMinutes())}`
    }else if(dado.getMinutes() == 59){
        return `${adicionarZero(dado.getDate())}/${adicionarZero(dado.getMonth() + 1)}/${dado.getFullYear()}`
    }else{
        return `${adicionarZero(dado.getDate())}/${adicionarZero(dado.getMonth() + 1)}/${dado.getFullYear()} ${adicionarZero(dado.getHours())}:${adicionarZero(dado.getMinutes())}`
    }
}

function adicionarZero(dado){
    return dado < 10 ? `0${dado}` : dado
}