import { Socio } from "../model/Socio.js"
import { associacoes } from "./associacoes.js"
import { regras } from "./regras.js"

export let socios = []

function incluirSocio(socios, nome, foto , nascimento, associacoes, regras, status){
    let socio = new Socio(nome, foto , nascimento)
    associacoes.forEach(associacao => {
        socio.adicionarAssociacao(associacao)
    })
    regras.forEach(regra => {
        socio.adicionarRegra(regra)
    })
    socio.adicionarSocio(status)
    socios.push(socio)
}

incluirSocio(socios, 'Clóvis', 'https://github.com/clovisbalreira.png' , new Date('08/06/1980'), [associacoes[0], associacoes[1]], [regras[4]], false) // 0
incluirSocio(socios, 'Claudio','' , '', [associacoes[0], associacoes[1]], [regras[4]], associacoes[1]) // 1
incluirSocio(socios, 'Joaquim', '' , '', [associacoes[0]], [regras[4]], false) // 2
incluirSocio(socios, 'Robinson', '' , '', [associacoes[0]], [regras[4]], false) // 3
incluirSocio(socios, 'Sandro', '' , '', [associacoes[0]], [regras[4]], false) // 4
incluirSocio(socios, 'Dário', '' , '', [associacoes[0]], [regras[4]], false) // 5
/*
incluirSocio(socios, 'Paulo Marcos', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 6
incluirSocio(socios, 'Fábio', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 7
incluirSocio(socios, 'Paulo Renato', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 8
incluirSocio(socios, 'Paulo Ricardo', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 9
incluirSocio(socios, 'Cesar', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 10
incluirSocio(socios, 'Rafael', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 11
incluirSocio(socios, 'Alessandro', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 12
incluirSocio(socios, 'Ademar', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 13
incluirSocio(socios, 'Dirceu', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 14
incluirSocio(socios, 'Jamur', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 15
incluirSocio(socios, 'Daniel', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 16
incluirSocio(socios, 'Rafael Pereira', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 17
incluirSocio(socios, 'Ernesto', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 18
incluirSocio(socios, 'Cadu', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 19
incluirSocio(socios, 'Osvaldo', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 20
incluirSocio(socios, 'Polegar', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 21
incluirSocio(socios, 'Marcelo', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 22
incluirSocio(socios, 'Motta', '' , '', [associacoes[1]], [regras[0]], associacoes[1]) // 23
incluirSocio(socios, 'Fernando', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 24
incluirSocio(socios, 'Luciano', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 25
incluirSocio(socios, 'Vinicius', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 26
incluirSocio(socios, 'Sandro Coelho', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 27
incluirSocio(socios, 'Eduardo Orci', '' , '', [associacoes[2]], [regras[4]], false) // 28
incluirSocio(socios, 'Geraldo', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 29
incluirSocio(socios, 'Helmut', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 30
incluirSocio(socios, 'Alex', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 31
incluirSocio(socios, 'Matheus', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 32
incluirSocio(socios, 'Nilton Costa', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 33
incluirSocio(socios, 'Júlio Medeiros', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 34
incluirSocio(socios, 'Diego Nunes', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 35
incluirSocio(socios, 'João Henrique', '' , '', [associacoes[1]], [regras[4]], associacoes[1]) // 36
*/
