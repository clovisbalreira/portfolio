import { Associacao } from "../model/Associacao.js"
import { regras } from "./regras.js"

export let associacoes = []

function incluirAssociados(associacoes, nome, fundacao, sigla, logradouro, numero, cidade, estado, pais, cep, escudo, regras){
    let associacao = new Associacao(nome, fundacao, sigla, logradouro, numero, cidade, estado, pais, cep, escudo )
    associacao.adicionarRegra(regras)
    associacoes.push(associacao)
}

incluirAssociados(associacoes, 'Clube Rodrigues de Futebol de Mesa', '15/10/2017', 'C.R.F.M.', '', '12', 'Viamão', 'RS', 'Brasil', '90.222.222', '.jpeg', [regras[4]])
incluirAssociados(associacoes, 'Liga Canoense de Futebol de Mesa', '15/10/2017', 'A.A.B.B.', '', '12', 'Canoas', 'RS', 'Brasil', '90.222.222', '.jpeg', [regras[0], regras[1], regras[2], regras[3]])
incluirAssociados(associacoes, 'L.E.F.U.M.E.', '15/10/2017', 'L.E.F.U.M.E.', '', '12', 'Esteio', 'RS', 'Brasil', '90.222.222', '.jpeg', [regras[0], regras[1], regras[2], regras[3]])

