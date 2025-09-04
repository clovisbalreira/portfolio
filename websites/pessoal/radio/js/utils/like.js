import { variavelGlobal } from "../mvc/control/global.js"
import { programacao } from "../mvc/control/programacao.js"
import { like } from "../mvc/control/like.js"
import { Like } from "../mvc/model/Like.js"
import { salvarLocalStorage, lerLocalStorage } from "./localStorage.js"
import { nomeDia } from "./nomeDia.js"

export function gravarFavoritos(){
    document.getElementById('like').addEventListener('click', () => {
        incluirFavoritos()
    })
}

const incluirFavoritos = () => {
    let coracao_cheio = document.getElementById('coracao-cheio')
    var estiloComputador = window.getComputedStyle(coracao_cheio);
    if (estiloComputador.display === 'none') {  
        let data = new Date()
        let diaAtual = data.getDay()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
        programa(diaAtual, horaMinutos, programacao, variavelGlobal.programa)
    }
}

const estaEntre = (horaMinutos, horaInicio, horaFim) => {
    return horaMinutos >= horaInicio && horaMinutos <= horaFim;
}

const programa = (diaAtual, horaMinutos, programacao, desbloquear) => {
    programacao[variavelGlobal.indexRadio].dia.forEach( (programa, index) => {
        if(parseInt(index) === diaAtual){
            programa.programas.forEach( tempo => {
                if(estaEntre(horaMinutos, tempo.horaInicio, tempo.horaFim)){
                    console.log(tempo.programa.nome)
                    like.push(new Like(programacao[variavelGlobal.indexRadio].radio.nome, nomeDia(diaAtual), horaMinutos, tempo.programa.nome))
                    desbloquear = lerLocalStorage('favorito') ?? []
                    desbloquear.push({radio: programacao[variavelGlobal.indexRadio].radio.nome,
                    programa : tempo.programa.nome})
                    salvarLocalStorage('favorito', desbloquear)
                }
            })
        }
    })
}

const deletarFavoritos = (diaAtual, dados, horaMinutos, programacao, indexRadio) => {
    let programaAgora = programacao[indexRadio].dia[diaAtual].programas.filter( programa => estaEntre(horaMinutos, programa.horaInicio, programa.horaFim))
    let coracao_cheio = document.getElementById('coracao-cheio')
    if(dados.radio == programacao[indexRadio].radio.nome && programaAgora[0].programa.nome != dados.programa){
        coracao_cheio.style.display = 'none'
    }else{
        coracao_cheio.style.display = 'block'
    }
}

export const atualizarFavorito = () => {
    let favoritos = lerLocalStorage('favorito')
    if(favoritos != null){
        let data = new Date()
        let diaAtual = data.getDay()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let horaMinutos = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`
        favoritos.forEach(favorito => {
            deletarFavoritos(diaAtual, favorito, horaMinutos, programacao, variavelGlobal.indexRadio)
        }) 
    }
}