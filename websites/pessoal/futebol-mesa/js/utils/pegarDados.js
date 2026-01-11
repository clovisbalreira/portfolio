export function pegarDados(jogos, tecnico, condicaoGols){
    let texto = ''
    let JogoAnterior = ''
    if(typeof jogos == 'number'){
        texto = partidasGols(jogos, condicaoGols)
    }else{
        jogos.forEach( (jogo, index) => {
            if(jogo.tecnico == undefined){
                texto += partidasEstatisticas(JogoAnterior, jogo, condicaoGols, index, tecnico)
                JogoAnterior = jogo.campeonato;
            }else{
                texto += gerarTextoTecnico({jogo, tecnico, condicaoGols})
            }
        })
    }
    return texto
}

function isFloat(n) {
    return Number(n) === n && !Number.isInteger(n);
}

function partidasGols(jogos, condicaoGols){
    const valor = isFloat(jogos) ? jogos.toFixed(2) : jogos;
    const unidade = condicaoGols ? (jogos < 2 ? 'gol' : 'gols') : (jogos < 2 ? 'partida' : 'partidas');
    return `${valor} ${unidade}`;
}

function partidasEstatisticas(JogoAnterior, jogo, condicaoGols, index, tecnico){
    let texto = ''
    if (JogoAnterior !== jogo.campeonato && condicaoGols) {
    if (index > 0) texto += '</p>';
        texto += `<p class="campeonato">${jogo.campeonato}</p>`;
    }
    const nomeCasa = tecnico
        ? `<p>${jogo.timeCasa.tecnico.participante.nome} ${jogo.timeCasa.tecnico.time.nome}</p>`
        : `<p>${jogo.timeCasa.tecnico.participante.nome}</p>`;
    const nomeFora = tecnico
        ? `<p>${jogo.timeFora.tecnico.participante.nome} ${jogo.timeFora.tecnico.time.nome}</p>`
        : `<p>${jogo.timeFora.tecnico.participante.nome}</p>`;
    texto += `<div class="jogo-estatisticas">${nomeCasa}<p>${jogo.timeCasa.gols}</p><p>X</p><p>${jogo.timeFora.gols}</p>${nomeFora}</div>`;
    return texto
}


function gerarTextoTecnico({jogo, tecnico, condicaoGols}) {
    const cabecalho = tecnico ? `${jogo.tecnico.time.nome} - ${jogo.tecnico.participante.nome}` : jogo.tecnico.participante.nome;
    let quantidade = 0
    if(condicaoGols == 'j'){
        quantidade = jogo.j
    }else if(condicaoGols == 'v'){
        quantidade = jogo.v
    }else if(condicaoGols == 'e'){
        quantidade = jogo.e
    }else if(condicaoGols == 'd'){
        quantidade = jogo.d
    }else if(condicaoGols == 'gp'){
        quantidade = jogo.gp
    }else if(condicaoGols == 'gc'){
        quantidade = jogo.gc
    }
    let sufixo = condicaoGols == 'gp' || condicaoGols == 'gc' ? quantidade < 2 ? 'gol' : 'gols' : quantidade < 2 ? 'partida' : 'partidas'
    return `<p class="tecnico">${cabecalho} - ${quantidade} ${sufixo}</p>`;
}



