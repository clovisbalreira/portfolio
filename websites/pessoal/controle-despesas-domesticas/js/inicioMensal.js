import { contas } from "./mvc/control/contas.js"
import { mostrarContasMensal } from
"./mvc/view/mostrarContasMensal.js"
import { menu } from "./utils/menu.js"

export function inicioMensal(){
    mostrarContasMensal('Luz', contas)
    mostrarContasMensal('Agua', contas)
    menu()
}