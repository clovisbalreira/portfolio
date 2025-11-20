import { Socio } from "../model/Socio.js"
import { associacoes } from "./associacao.js"
import { regras } from "./regras.js"

export let socios = []

function incluirSocio(socios, nome, foto , nascimento, associacao, regra){
    let socio = new Socio(nome, foto , nascimento)
    socio.adicionarAssociacao(associacao)
    socio.adicionarRegra(regra)
    socios.push(socio)
}

incluirSocio(socios, 'Clóvis', '.jpeg' , '', associacoes[0], regras[4]) // 0
incluirSocio(socios, 'Claudio','.jpeg' , '', associacoes[0], regras[4]) // 1
incluirSocio(socios, 'Joaquim', '.jpeg' , '', associacoes[0], regras[4]) // 2
incluirSocio(socios, 'Robinson', '.jpeg' , '', associacoes[0], regras[4]) // 3
incluirSocio(socios, 'Sandro', '.jpeg' , '', associacoes[0], regras[4]) // 4
incluirSocio(socios, 'Dário', '.jpeg' , '', associacoes[0], regras[4]) // 5
incluirSocio(socios, 'Paulo Marcos', '.jpeg' , '', associacoes[1], regras[4]) // 6
incluirSocio(socios, 'Fábio', '.jpeg' , '', associacoes[1], regras[4]) // 7
incluirSocio(socios, 'Paulo Renato', '.jpeg' , '', associacoes[1], regras[4]) // 8
incluirSocio(socios, 'Paulo Ricardo', '.jpeg' , '', associacoes[1], regras[4]) // 9
incluirSocio(socios, 'Cesar', '.jpeg' , '', associacoes[1], regras[4]) // 10
incluirSocio(socios, 'Rafael', '.jpeg' , '', associacoes[1], regras[4]) // 11
incluirSocio(socios, 'Alessandro', '.jpeg' , '', associacoes[1], regras[4]) // 12
incluirSocio(socios, 'Ademar', '.jpeg' , '', associacoes[1], regras[4]) // 13
incluirSocio(socios, 'Dirceu', '.jpeg' , '', associacoes[1], regras[4]) // 14
incluirSocio(socios, 'Jamur', '.jpeg' , '', associacoes[1], regras[4]) // 15
incluirSocio(socios, 'Daniel', '.jpeg' , '', associacoes[1], regras[4]) // 16
incluirSocio(socios, 'Rafael Pereira', '.jpeg' , '', associacoes[1], regras[4]) // 17
incluirSocio(socios, 'Ernesto', '.jpeg' , '', associacoes[1], regras[4]) // 18
incluirSocio(socios, 'Cadu', '.jpeg' , '', associacoes[1], regras[4]) // 19
incluirSocio(socios, 'Osvaldo', '.jpeg' , '', associacoes[1], regras[4]) // 20
incluirSocio(socios, 'Polegar', '.jpeg' , '', associacoes[1], regras[4]) // 21
incluirSocio(socios, 'Marcelo', '.jpeg' , '', associacoes[1], regras[4]) // 22
incluirSocio(socios, 'Motta', '.jpeg' , '', associacoes[1], regras[0]) // 23
incluirSocio(socios, 'Fernando', '.jpeg' , '', associacoes[1], regras[4]) // 24
incluirSocio(socios, 'Luciano', '.jpeg' , '', associacoes[1], regras[40]) // 25
incluirSocio(socios, 'Vinicius', '.jpeg' , '', associacoes[1], regras[4]) // 26
incluirSocio(socios, 'Sandro Coelho', '.jpeg' , '', associacoes[1], regras[4]) // 27
incluirSocio(socios, 'Eduardo Orci', '.jpeg' , '', associacoes[2], regras[4]) // 28
incluirSocio(socios, 'Geraldo', '.jpeg' , '', associacoes[1], regras[4]) // 29
incluirSocio(socios, 'Helmut', '.jpeg' , '', associacoes[1], regras[4]) // 30
incluirSocio(socios, 'Alex', '.jpeg' , '', associacoes[1], regras[4]) // 31
incluirSocio(socios, 'Matheus', '.jpeg' , '', associacoes[1], regras[4]) // 32
incluirSocio(socios, 'Nilton Costa', '.jpeg' , '', associacoes[1], regras[4]) // 33
incluirSocio(socios, 'Júlio Medeiros', '.jpeg' , '', associacoes[1], regras[4]) // 34
incluirSocio(socios, 'Diego Nunes', '.jpeg' , '', associacoes[1], regras[4]) // 35
incluirSocio(socios, 'João Henrique', '.jpeg' , '', associacoes[1], regras[4]) // 36
