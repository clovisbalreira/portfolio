import { contas } from "../control/contas.js";
import { pagadores } from "../control/pagadores.js";
import { cartoes } from "../control/cartoes.js";
import { criarTheadTbodyTfoot } from "../../utils/tabela/criarTheadTbodyTfoot.js";
import { criarLinhasFaturaPagadores } from "../../utils/criarLinhasFaturaPagadores.js";
import { atualizarHfoot } from "../../utils/tabela/atualizarHfoot.js";
import { textoWhatsapp } from "../../utils/textoWhatsapp.js";

export function mostrarFaturasPagadores(){
    let numerosIndice = []
    let totalFatura = []
    let prefixo = 'pagadores'
    contas.forEach( (conta, totalParcelasAcao) => {
        pagadores.forEach( (pagador, index) => {
            conta.pagadores.forEach( nome => {
                if(nome.nome == pagador.nome){
                    if (!numerosIndice.includes(index)) {
                        let titulos = ['Conta', 'Forma Pagamento', 'Tipo Pagamento', 'Credito: Valor Total', 'Valor', 'Debito: Valor Total', 'Valor']
                        totalFatura = criarTheadTbodyTfoot(index, titulos, totalFatura, prefixo, 'conta', cartoes, conta)
                    }
                    numerosIndice.push(index)
                    totalFatura = criarLinhasFaturaPagadores(conta, totalFatura, `${prefixo}-tbody-${index}`, totalParcelasAcao)
                    atualizarHfoot(`${prefixo}-tfoot-${index}`, totalFatura)
                }
            })
        })   
    })
    pagadores.forEach( (pagador, index) => {
        textoWhatsapp(index, pagador)
    })
}