import { criarLabelSelect } from "../criarLabelSelect.js";

export function menuJogosAdversarios(totalJogos, socio, variavelGlobal){
    let div = document.createElement('div')
    const filtrar = [
        ...new Set(
            totalJogos.flatMap(jogo => [
            jogo.timeCasa.tecnico.participante.nome,
            jogo.timeFora.tecnico.participante.nome
            ])
        )
    ];
    const resultado = filtrar.filter( socioNome => socioNome !== socio).sort((a, b) => a.localeCompare(b, 'pt-BR'));
    criarLabelSelect(div, 'Adversário', 'menu-jogo-adversario', resultado, '', 'Selecione o adversário', '', variavelGlobal)
    return div
}