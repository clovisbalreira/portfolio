import { criterioDesempate } from "../criterioDesempate.js"

export function classificacaoGrupo(grupo){
    grupo.participantes.sort((a, b ) => criterioDesempate(a, b))
}