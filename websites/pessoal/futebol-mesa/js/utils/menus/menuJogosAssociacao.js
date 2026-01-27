import { criarLabelSelect } from "../criarLabelSelect.js";

export function menuJogosAssociacao(totalJogos, associacao, variavelGlobal, condicao){
    let div = document.createElement('div')
    const filtrar = [
        ...new Set(
            totalJogos.flatMap(jogo => [
            jogo.timeCasa.tecnico.participante.status.nome,
            jogo.timeFora.tecnico.participante.status.nome
            ])
        )
    ];
    const resultado = filtrar.filter( socioNome => socioNome !== associacao).sort((a, b) => a.localeCompare(b, 'pt-BR'));
    criarLabelSelect(div, 'Associação', condicao ? 'menu-principal-associacao' : 'menu-jogo-associacao', resultado, '', 'Selecione a associação', '', variavelGlobal)
    return div
}