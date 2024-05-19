document.getElementById('like').addEventListener('click', () => {
    incluirFavoritos()
})

const incluirFavoritos = () => {
    let coracao_cheio = document.getElementById('coracao-cheio')
    var estiloComputado = window.getComputedStyle(coracao_cheio);
    if (estiloComputado.display === 'none') {  
        let data = new Date()
        let diaAtual = data.getDay()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
        programa(diaAtual, horaMinutos, programacao, desbloquear)
        coracao_cheio = document.getElementById('coracao-cheio')
        coracao_cheio.style.display = 'block'
        mostrarDesbloqueio = setInterval(() => {
            data = new Date()
            diaAtual = data.getDay()
            hora = data.getHours()
            minutos = data.getMinutes()
            horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
            let favorito = lerLocalStorage('favorito')
            if(favorito != ''){
                favorito.forEach( dados => {
                    if(programacao[indexRadio].radio.nome === dados.radio){
                        deletarFavoritos(diaAtual, dados, horaMinutos, programacao, indexRadio)
                    }
                })
            }
        }, 1000)      
    }
}

const estaEntre = (horaMinutos, horaInicio, horaFim) => {
    return horaMinutos >= horaInicio && horaMinutos <= horaFim;
}

const nomeDia = (dia) => {
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

const programa = (diaAtual, horaMinutos, programacao, desbloquear) => {
    programacao[indexRadio].dia.forEach( programa => {
        programa.diaNumeros.forEach( dia => {
            if(parseInt(dia.numero) === diaAtual){
                programa.programas.forEach( tempo => {
                    if(estaEntre(horaMinutos, tempo.horaInicio, tempo.horaFim)){
                        like.push(new Like(programacao[indexRadio].radio.nome, nomeDia(diaAtual), horaMinutos, tempo.nome))
                        /* desbloquear.push({radio: programacao[indexRadio].radio.nome, dia : nomeDia(diaAtual), inicio: tempo.horaInicio, fim: '16:22'}) */
                        desbloquear = lerLocalStorage('favorito') ?? []
                        desbloquear.push({radio: programacao[indexRadio].radio.nome, dia : nomeDia(diaAtual), inicio: tempo.horaInicio, fim: tempo.horaFim})
                        salvarLocalStorage('favorito', desbloquear)
                    }
                })
            }
        })
    })
}

const salvarLocalStorage = (chave, informacao) => {
    localStorage.setItem(chave, JSON.stringify(informacao))
}

const lerLocalStorage = (chave) => {
    return JSON.parse(localStorage.getItem(chave))
}

const apagarDoLocalStorage = (chave, itemApagar) => {
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    const listaFiltrada = lista.filter(item => item.radio !== itemApagar);
    localStorage.setItem(chave, JSON.stringify(listaFiltrada));
};

const deletarFavoritos = (diaAtual, dados, horaMinutos, programacao, indexRadio) => {
    if(nomeDia(diaAtual) != dados.dia || (!estaEntre(horaMinutos, dados.inicio, dados.fim))){
        let coracao_cheio = document.getElementById('coracao-cheio')
        coracao_cheio.style.display = 'none'
        apagarDoLocalStorage('favorito', programacao[indexRadio].radio.nome)
    }
}

const atualizarFavorito = () => {
    let favoritos = lerLocalStorage('favorito')
    if(favoritos != null){
        let data = new Date()
        let diaAtual = data.getDay()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
        let coracao_cheio = document.getElementById('coracao-cheio')
        favoritos.forEach(favorito => {
            deletarFavoritos(diaAtual, favorito, horaMinutos, programacao, indexRadio)
            if(favorito.radio == programacao[indexRadio].radio.nome){
                coracao_cheio.style.display = 'block'
            }
        }) 
    }
}

atualizarFavorito()