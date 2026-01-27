import { Socio } from "../model/Socio.js"
import { associacoes } from "./associacoes.js"
import { regras } from "./regras.js"

export let socios = []

function incluirSocio(socios, nome, foto, nascimento, regras, status){
    let socio = new Socio(nome, foto, nascimento)
    socio.adicionarAssociacao(status)
    regras.forEach(regra => {
        socio.adicionarRegra(regra)
    })
    socio.adicionarSocio(status)
    socios.push(socio)
}

incluirSocio(socios, 'Clóvis', 'https://github.com/clovisbalreira.png' , new Date(1980, 7, 6, 0, 59), [regras[0], regras[4]], associacoes[1]) // 0
incluirSocio(socios, 'Claudio','' , '', [regras[0], regras[4]], associacoes[1]) // 1
incluirSocio(socios, 'Joaquim', '' , '', [regras[0]], associacoes[0]) // 2
incluirSocio(socios, 'Robinson', '' , '', [regras[0]], associacoes[0]) // 3
incluirSocio(socios, 'Sandro', '' , '', [regras[0]], associacoes[0]) // 4
incluirSocio(socios, 'Dário', '' , '', [regras[0]], associacoes[0]) // 5
incluirSocio(socios, 'Paulo Marcos', '' , '', [regras[0]], associacoes[1]) // 6
incluirSocio(socios, 'Fábio', '' , '', [regras[0]], associacoes[1]) // 7
incluirSocio(socios, 'Paulo Renato', '' , '', [regras[0]], associacoes[1]) // 8
incluirSocio(socios, 'Paulo Ricardo', '' , '', [regras[0]], associacoes[1]) // 9
incluirSocio(socios, 'Cesar', '' , '', [regras[0]], associacoes[1]) // 10
incluirSocio(socios, 'Rafael', '' , '', [regras[0]], associacoes[1]) // 11
incluirSocio(socios, 'Alessandro', '' , '', [regras[0]], associacoes[1]) // 12
incluirSocio(socios, 'Ademar', '' , '', [regras[0]], associacoes[1]) // 13
incluirSocio(socios, 'Weber', '' , '', [regras[0]], associacoes[2]) // 14
incluirSocio(socios, 'Gustavo', '' , '', [regras[0]], associacoes[2]) // 15
incluirSocio(socios, 'Mario', '' , '', [regras[0]], associacoes[2]) // 16
incluirSocio(socios, 'Soligo', '' , '', [regras[0]], associacoes[2]) // 17
incluirSocio(socios, 'Sandro', '' , '', [regras[0]], associacoes[2]) // 18
incluirSocio(socios, 'Padilha', '' , '', [regras[0]], associacoes[2]) // 19
incluirSocio(socios, 'Carlos Barros', '' , '', [regras[0]], associacoes[2]) // 20
incluirSocio(socios, 'André', '' , '', [regras[0]], associacoes[3]) // 21
incluirSocio(socios, 'Fábio di Leone', '' , '', [regras[0]], associacoes[3]) // 22
incluirSocio(socios, 'Guilherme', '' , '', [regras[0]], associacoes[3]) // 23
incluirSocio(socios, 'Léo Rocha', '' , '', [regras[0]], associacoes[3]) // 24
incluirSocio(socios, 'Lucas di Leone', '' , '', [regras[0]], associacoes[3]) // 25
incluirSocio(socios, 'Alexandre', '' , '', [regras[0]], associacoes[3]) // 26
incluirSocio(socios, 'Cláudio Rosa', '' , '', [regras[0]], associacoes[3]) // 27
incluirSocio(socios, 'Marco', '' , '', [regras[0]], associacoes[3]) // 28
incluirSocio(socios, 'Édson', '' , '', [regras[0]], associacoes[2]) // 29
incluirSocio(socios, 'Dirceu', '' , '', [regras[0]], associacoes[4]) // 30
incluirSocio(socios, 'Daniel', '' , '', [regras[0]], associacoes[1]) // 31
incluirSocio(socios, 'Jamur', '' , '', [regras[0]], associacoes[1]) // 32
incluirSocio(socios, 'Cadu', '' , '', [regras[0]], associacoes[1]) // 33
incluirSocio(socios, 'Júnior', '' , '', [regras[0]], associacoes[4]) // 34
incluirSocio(socios, 'Guilherme', '' , '', [regras[0]], associacoes[4]) // 35
incluirSocio(socios, 'Marcus Peralta', '' , '', [regras[0]], associacoes[3]) // 36
incluirSocio(socios, 'Calírio', '' , '', [regras[0]], associacoes[3]) // 37
incluirSocio(socios, 'Elton', '' , '', [regras[0]], associacoes[3]) // 38
incluirSocio(socios, 'José Medeiros', '' , '', [regras[0]], associacoes[3]) // 39
incluirSocio(socios, 'Ernesto', '' , '', [regras[0]], associacoes[1]) // 40
incluirSocio(socios, 'Rafael Pereira', '' , '', [regras[0]], associacoes[1]) // 41
incluirSocio(socios, 'Osvaldo', '' , '', [regras[0]], associacoes[1]) // 42
incluirSocio(socios, 'Polegar', '' , '', [regras[0]], associacoes[1]) // 43
incluirSocio(socios, 'Marcelo', '' , '', [regras[0]], associacoes[1]) // 44
incluirSocio(socios, 'Motta', '' , '', [regras[0]], associacoes[1]) // 45
incluirSocio(socios, 'Fernando', '' , '', [regras[0]], associacoes[1]) // 46
incluirSocio(socios, 'Regis Castilhos', '' , '', [regras[0]], associacoes[4]) // 47 
incluirSocio(socios, 'Marcos Ochoa', '' , '', [regras[0]], associacoes[5]) // 48 
incluirSocio(socios, 'Rodrigo Padre', '' , '', [regras[0]], associacoes[3]) // 49
incluirSocio(socios, 'Andre', '' , '', [regras[0]], associacoes[4]) // 50
incluirSocio(socios, 'Sandro Coelho', '' , '', [regras[0]], associacoes[1]) // 51
incluirSocio(socios, 'Nilton', '' , '', [regras[0]], associacoes[1]) // 52
incluirSocio(socios, 'Diego Muller', '' , '', [regras[2]], associacoes[6]) // 53
incluirSocio(socios, 'Cláudio Mastrangelo', '' , '', [regras[2]], associacoes[7]) // 54
incluirSocio(socios, 'Diego Nunes', '' , '', [regras[0]], associacoes[1]) // 55
incluirSocio(socios, 'Rogério Aguiar', '' , '', [regras[0]], associacoes[1]) // 56
