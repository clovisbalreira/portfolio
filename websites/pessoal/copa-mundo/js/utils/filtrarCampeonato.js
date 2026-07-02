export function filtrarCampeonato(ano, nome, competicoes){
    return competicoes.find( competicao => competicao.ano == ano && competicao.campeonato.nome == nome)
}