import { confrontoDireto } from "../confrontoDireto.js"
import { confederacoesContinental } from "../../mvc/controll/confederacoesContinental.js"

export function ordenarClassificacao(campeonato, ordemFases){
    ordenarClassificacaoGeral(campeonato.classificacaoGeral, ordemFases)
    ordenarClassificacaoGeralCampeonato(campeonato.campeonato.classificacao, ordemFases)
    ordenarClassificacaoGeralContinenteFederacao(confederacoesContinental, ordemFases)
}

function criterioDesempate(a, b, ordemFases){
    const ordem = ordemFases.indexOf(a.fase) - ordemFases.indexOf(b.fase);
    if (ordem !== 0) return ordem;
    if (b.pg !== a.pg) return b.pg - a.pg;
    let equipeA = confrontoDireto(a, b);
    let equipeB = confrontoDireto(b, a);
    if (equipeA && equipeB && equipeB.cd !== equipeA.cd) {
        return equipeB.cd - equipeA.cd;
    }
    if (b.sg !== a.sg) return b.sg - a.sg;
    if (b.gp !== a.gp) return b.gp - a.gp;
    return b.desempate - a.desempate;
}

function ordenarClassificacaoGeral(campeonato, ordemFases) {
    campeonato.sort( (a, b) =>  criterioDesempate(a, b, ordemFases))
}

function ordenarClassificacaoGeralCampeonato(campeonato, ordemFases){
    campeonato.sort( (a, b) =>  criterioDesempate(a, b, ordemFases))
}

function ordenarClassificacaoGeralContinenteFederacao(array, ordemFases){
    array.forEach( continente => {
        continente.campeonatos.forEach( campeonato => {
            campeonato.classificacao.sort( (a, b) => criterioDesempate(a, b, ordemFases))
        })
    })
}