import { contaFutura } from "./contaFutura.js"

export function atualizarContasFuturas(contas){
    contaFutura('Luz', contas)
    contaFutura('Agua', contas)
}

