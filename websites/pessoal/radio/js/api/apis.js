import { mostrarSelectPaises, mostrarSelectEstados, mostrarSelectCidades, inputEstadosCidades } from "../mvc/view/selects.js";
import { variavelGlobal } from "../mvc/control/global.js";

export const pegarPaises = () => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags').then(res => res.json()).then(data => mostrarSelectPaises(data))
}

export const pegarEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then(res => res.json()).then(data => mostrarSelectEstados(data))
    inputEstadosCidades('divCidades','cidades', 'Digite a cidade')
}

export const pegarCidades = () => {
    if(variavelGlobal.selectEstados == ''){
        mostrarSelectCidades('')
    }else{
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${variavelGlobal.selectEstados}/municipios`).then(res => res.json()).then(data => mostrarSelectCidades(data))
    }
}