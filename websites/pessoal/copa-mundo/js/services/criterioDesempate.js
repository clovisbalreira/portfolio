import { confrontoDireto } from './confrontoDireto.js'

export function criterioDesempate(a, b){
    if (b.pg !== a.pg) return b.pg - a.pg;
    let equipeA = confrontoDireto(a, b)
    let equipeB = confrontoDireto(b, a)
    if(equipeA != undefined && equipeB != undefined && equipeB.cd !== equipeA.cd) return equipeB.cd - equipeA.cd
    if (b.sg !== a.sg) return b.sg - a.sg;
    if (b.gp !== a.gp) return b.gp - a.gp;
    return b.desempate - a.desempate;
}