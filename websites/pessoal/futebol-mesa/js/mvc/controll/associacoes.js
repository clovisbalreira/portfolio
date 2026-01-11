import { Associacao } from "../model/Associacao.js"
import { regras } from "./regras.js"

export let associacoes = []

function incluirAssociados(associacoes, nome, fundacao, sigla, logradouro, numero, bairro, cidade, estado, pais, cep, escudo, regras, corPrimary, corSecundary, corHover){
    let associacao = new Associacao(nome, fundacao, sigla, logradouro, numero, bairro, cidade, estado, pais, cep, escudo, corPrimary, corSecundary, corHover )
    associacao.adicionarRegra(regras)
    associacoes.push(associacao)
}

incluirAssociados(associacoes, 'Clube Rodrigues de Futebol de Mesa', new Date('01/01/1997'), 'C.R.F.M.', '', '', '', 'Viamão', 'RS', 'Brasil', '', 'c.r.f.m.png', [regras[4]], '#5AA3D9', '#91C2E4', '#FEFEFE')
incluirAssociados(associacoes, 'Liga Canoense de Futebol de Mesa', '15/10/2017', 'L.U.C.F.M.', 'Rua Dr. Barcelos', '1271', 'Centro', 'Canoas', 'RS', 'Brasil', '92310-200', 'l.u.c.f.m.png', [regras[0], regras[1], regras[2], regras[3]], '#DDF63D', '#247923', '#0238A4')
//incluirAssociados(associacoes, 'L.E.F.U.M.E.', '15/10/2017', 'L.E.F.U.M.E.', '', '12', 'Esteio', 'RS', 'Brasil', '90.222.222', '.jpeg', [regras[0], regras[1], regras[2], regras[3]])
