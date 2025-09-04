export const nomeDia = (dia) => {
    let diaNome = ''
    switch(dia){
        case 0:
            diaNome = 'Domingo'
            break
        case 1:
            diaNome = 'Segunda-Feira'
            break
        case 2:
            diaNome = 'Terça-Feira'
            break
        case 3:
            diaNome = 'Quarta-Feira'
            break
        case 4:
            diaNome = 'Quinta-Feira'
            break
        case 5:
            diaNome = 'Sexta-Feira'
            break
        case 6:
            diaNome = 'Sabado'
            break
        default:
            ''
    }
    return diaNome
}