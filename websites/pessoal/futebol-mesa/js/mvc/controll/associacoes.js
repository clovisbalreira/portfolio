import { Associacao } from "../model/Associacao.js"
import { regras } from "./regras.js"

export let associacoes = []

function incluirAssociados(associacoes, nome, fundacao, sigla, logradouro, numero, bairro, cidade, estado, pais, cep, escudo, regras, corPrimary, corSecundary, corHover){
    let associacao = new Associacao(nome, fundacao, sigla, logradouro, numero, bairro, cidade, estado, pais, cep, escudo, corPrimary, corSecundary, corHover )
    associacao.adicionarRegra(regras)
    associacoes.push(associacao)
}

incluirAssociados(associacoes, 'Clube Rodrigues de Futebol de Mesa', '01/01/1997', 'C.R.F.M.', '', '', '', 'Viamão', 'RS', 'Brasil', '', 'crfm.png', [regras[4]], '#5AA3D9', '#91C2E4', '#FEFEFE') // 0
incluirAssociados(associacoes, 'Liga União Canoense de Futebol de Mesa', '15/10/2016', 'L.U.C.F.M.', 'Rua Dr. Barcelos', '1271', 'Centro', 'Canoas', 'RS', 'Brasil', '92310-200', 'lucfm.png', [regras[0], regras[1], regras[2], regras[3]], '#DDF63D', '#247923', '#0238A4') // 1
incluirAssociados(associacoes, 'Zona Sul Futebol de Mesa', '', 'Zona Sul Futmesa', 'Rua Landel de Moura', '821', 'Tristeza', 'Porto Alegre', 'RS', 'Brasil', '91920-150', 'zonasul.png', [regras[0], regras[1], regras[2], regras[3]], '#000000e7', 'yellow', 'red') // 2
incluirAssociados(associacoes, 'Associação Viamonense Futebol De Botão', '', 'A.V.F.B.', 'Rua Antônio Zanquetim', '195', 'Viamópolis', 'Viamão', 'RS', 'Brasil', '94470-660', 'avfb.png', [regras[0], regras[1], regras[2], regras[3]], 'white', 'green', 'red') // 3
incluirAssociados(associacoes, 'Associação de Futebol De Mesa', '', 'A.F.U.M.E.P.A.', 'Rua Felisberto Pereira', '421', 'Jardim Itu', 'Porto Alegre', 'RS', 'Brasil', '91380-440', 'afumepa.png', [regras[0], regras[1], regras[2], regras[3]], '#008000ee', 'green', 'white') // 4
incluirAssociados(associacoes, 'ASSOCIACAO ARENA A GOL FUTEBOL DE MESA', '', 'Arena a gol', 'Rua marcilio dias', '1030', 'Centro', 'Pelotas', 'RS', 'Brasil', '96020-480', 'arenaagol.png', [regras[0], regras[1], regras[2], regras[3]], '#00005def', '#4ED608', 'white') // 5
incluirAssociados(associacoes, 'Inter Fici', '', 'Inter', 'Avenida Padre Cacique', '891', 'Praia de Belas', 'Porto Alegre', 'RS', 'Brasil', '90810-240', 'inter.png', [regras[0], regras[1], regras[2], regras[3]], 'red', 'white', 'red') // 6
incluirAssociados(associacoes, 'Grêmio Náutico União', '', 'G.N.U.', 'Avenida João Obino', '300', 'Petrópolis', 'Porto Alegre', 'RS', 'Brasil', '90810-240', 'gnu.png', [regras[0], regras[1], regras[2], regras[3]], '#0095d7', 'red', 'white') // 7