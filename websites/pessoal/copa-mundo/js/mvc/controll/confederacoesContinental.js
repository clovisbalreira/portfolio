import { continentes } from "./continentes.js"
import { confederacoesMundial } from "./confederacoesMundial.js"
import { ConfederacaoContinental } from "../model/ConfederacaoContinental.js"

export let confederacoesContinental = [
    new ConfederacaoContinental('C.A.F.', 'nomeOficial', '', continentes[0], confederacoesMundial[0]),
    new ConfederacaoContinental('CONCACAF', 'nomeOficial', '', continentes[1], confederacoesMundial[0]),
    new ConfederacaoContinental('CONMEBOL.', 'nomeOficial', '', continentes[2], confederacoesMundial[0]),
    new ConfederacaoContinental('A.F.C.', 'nomeOficial', '', continentes[3], confederacoesMundial[0]),
    new ConfederacaoContinental('U.E.F.A.', 'nomeOficial', '', continentes[4], confederacoesMundial[0]),
    new ConfederacaoContinental('O.F.C.', 'nomeOficial', '', continentes[5], confederacoesMundial[0]),
]