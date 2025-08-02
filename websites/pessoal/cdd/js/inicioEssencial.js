import { mostrarContasEssencial } from "./mvc/view/mostrarContasEssencial.js"
import { menu } from "./utils/menu.js"
import { contas } from "./mvc/control/contas.js"

export function inicioEssencial(){
    menu()
    mostrarContasEssencial(contas)
}