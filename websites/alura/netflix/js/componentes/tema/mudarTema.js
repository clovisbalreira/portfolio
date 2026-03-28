import { retirarTema } from "./retirarTema.js"

export function mudarTema(tema){
    retirarTema()
    document.body.classList.add(tema);
}