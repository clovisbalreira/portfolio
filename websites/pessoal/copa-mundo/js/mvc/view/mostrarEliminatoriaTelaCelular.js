import { criarTopo } from "../../componentes/criarTopo.js"
import { criarPlacar } from "../../componentes/criarPlacar.js"
import { criarGols } from "../../componentes/criarGols.js"
import { mostrarInfo } from "./mostrarInfo.js"
 
export function mostrarEliminatoriaTelaCelular(divEliminatorio, jogos, div, section){
    if(jogos.rodada == 1) divEliminatorio.appendChild(criarTopo(jogos, true))  
    if(jogos.fase != 'Final' && !jogos.fase.includes('Lugar')) divEliminatorio.appendChild(criarTopo(jogos, false, true))      
    divEliminatorio.appendChild(criarPlacar(jogos))     
    divEliminatorio.appendChild(criarGols(jogos))     
    divEliminatorio.appendChild(mostrarInfo(jogos))
    div.appendChild(divEliminatorio)
    section.appendChild(div) 
}