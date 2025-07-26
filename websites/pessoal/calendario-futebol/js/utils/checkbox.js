import { apagarTabela } from "./apagarTabela.js"
import { competicoes } from "../mvc/control/competicoes.js"
import { reset } from "./inicio.js"

export function checkbox(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            let competicaoSelecionada = []
            apagarTabela()
            let competicao = competicoes.find(c => c.id == pegarRadio())
            let copia = structuredClone(competicao)
            copia.tabela = []
            let campeonato = []
            checkboxes.forEach(cb => {
                if(cb.checked) competicaoSelecionada.push(cb.parentElement.textContent)
            })
            competicaoSelecionada.forEach(nome => {
                competicao.tabela.forEach(tabela => {
                    if(tabela.nome == nome) campeonato.push(tabela)
                })
            })
            copia.tabela = campeonato
            campeonato.length == 0 ? reset(competicao) : reset(copia)
        })
    })
}

function pegarRadio(){
    let radios = document.querySelectorAll('input[type="radio"]')
    let numero = ''
    radios.forEach(radio => {
        if(radio.checked) numero = radio.value
    })
    return numero
}
