import { mostrarSocios } from "../../mvc/view/mostrarSocios.js";

export function acaoMenuSocio(socios, variavelGlobal, campeonatos, temporadas){
    let menu = document.getElementById('lista-socio')
    menu.addEventListener('change', function () {
        variavelGlobal.ativoCampeonato = ''
        variavelGlobal.ativoTemporada = ''
        variavelGlobal.ativoSocio = ''
        const valorSelecionado = this.value;
        if(valorSelecionado != ''){
            let index = socios.findIndex(socio => socio.nome === valorSelecionado)
            variavelGlobal.socio = index
            mostrarSocios(socios[variavelGlobal.socio], campeonatos, temporadas, variavelGlobal, socios)
        }
    })
}