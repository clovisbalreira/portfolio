import { menu } from "./utils/menu.js"
import { atualizarMes } from "./utils/fatura/atualizarMes.js"
import { atualizarAno } from "./utils/fatura/atualizarAno.js"
import { iniciar } from "./utils/fatura/iniciar.js"
import { atualizarSelectMes } from "./utils/fatura/atualizarSelectMes.js"
import { atualizarSelectAno } from "./utils/fatura/atualizarSelectAno.js"
import { contas } from "./mvc/control/contas.js"

export function iniciarFatura(){
    menu()
    atualizarMes()
    atualizarAno()
    iniciar()
    atualizarSelectMes(contas)
    atualizarSelectAno(contas)
}