import { criarHeader } from "../../componentes/criarHeader.js"
import { mostrarTelaCelular } from "./mostrarTelaCelular.js"
import { mostrarTelaComputador } from "./mostrarTelaComputador.js"
import { mostrarClassificacaoGoleadores } from "./mostrarClassificacaoGoleadores.js"
import { acaoGoleadoresEliminatorio } from "../../acao/acaoGoleadoresEliminatorio.js"

export function mostrarCampeonato(campeonato){ 
    let header = document.querySelector('header')
    header.appendChild(criarHeader(campeonato))
    let main = document.querySelector('main')
    main.appendChild(mostrarTelaCelular(campeonato))
    main.appendChild(mostrarTelaComputador(campeonato))
    main.appendChild(mostrarClassificacaoGoleadores(campeonato))
    acaoGoleadoresEliminatorio()
}