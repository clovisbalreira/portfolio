export function pegarDados(jogos, condicaoGols, tipo, mostrar){
    let texto = ''
    let JogoAnterior = ''
    if(typeof jogos == 'number'){
        texto = partidasGols(jogos, condicaoGols)
    }else{
        jogos.forEach( (jogo, index) => {
            if(jogo.tecnico == undefined){
                texto += partidasEstatisticas(JogoAnterior, jogo, condicaoGols, index, jogo.tipo, mostrar)
                JogoAnterior = jogo.campeonato;
            }else{
                texto += gerarTextoTecnico(jogo, condicaoGols, tipo, mostrar)
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
    return `<p>${valor} ${unidade}</p>`;
}

function partidasEstatisticas(JogoAnterior, jogo, condicaoGols, index, tipo, mostrar){
    let texto = ''
    if (JogoAnterior !== jogo.campeonato && condicaoGols) {
    if (index > 0) texto += '</p>';
        texto += `<p class="campeonato">${jogo.campeonato}</p>`;
    }
    const nomeCasa = possuiTime(jogo.timeCasa, true, tipo, mostrar)
    const nomeFora = possuiTime(jogo.timeFora, false, tipo, mostrar)
    texto += `<div class="jogo-estatisticas">${nomeCasa}<p>${jogo.timeCasa.gols}</p><p>X</p><p>${jogo.timeFora.gols}</p>${nomeFora}</div>`;
    return texto
}

function gerarTextoTecnico(jogo, condicaoGols, tipo, mostrar) {
    const cabecalho = possuiTime(jogo, true, tipo, mostrar)
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
    return `<div class="tecnico">${cabecalho}<p>- ${quantidade} ${sufixo}</p></div>`;
}

function possuiTime(obj, casaFora, tipo, mostrar) {
    let texto = ''
    casaFora = Boolean(casaFora)
    const temTime =
    obj?.tecnico?.time?.nome &&
    obj.tecnico.time.nome.trim() !== ''
    if(mostrar){
        if (casaFora && tipo === 'Externo' && temTime) {
            texto = `
                <div>
                    <img src="./img/associacoes/${obj.tecnico.associacao.escudo}">
                    <img src="./img/times/${obj.tecnico.time.escudo}">
                    <p>${obj.tecnico.participante.nome}</p>
                </div>
            `
        } else if (!casaFora && tipo === 'Externo' && temTime) {
            texto = `
                <div>
                    <p>${obj.tecnico.participante.nome}</p>
                    <img src="./img/times/${obj.tecnico.time.escudo}">
                    <img src="./img/associacoes/${obj.tecnico.associacao.escudo}">
                </div>
            `
        }else if (casaFora && tipo === 'Externo' && !temTime) {
            texto = `
                <div>
                    <img src="./img/associacoes/${obj.tecnico.associacao.escudo}">
                    <p>${obj.tecnico.participante.nome}</p>
                </div>
            `
        } else if (!casaFora && tipo === 'Externo' && !temTime) {
            texto = `
                <div>
                    <p>${obj.tecnico.participante.nome}</p>
                    <img src="./img/associacoes/${obj.tecnico.associacao.escudo}">
                </div>
            `
        } else if (casaFora && tipo !== 'Externo' && temTime) {
            texto = `
                <div>
                    <img src="./img/times/${obj.tecnico.time.escudo}">
                    <p>${obj.tecnico.participante.nome}</p>
                </div>
            `
        } else if (!casaFora && tipo !== 'Externo' && temTime) {
            texto = `
                <div>
                    <p>${obj.tecnico.participante.nome}</p>
                    <img src="./img/times/${obj.tecnico.time.escudo}">
                </div>
            `
        } else{
            texto = `
                <div>
                    <p>${obj.tecnico.participante.nome}</p>
                </div>
            `
        }
    }else {
        texto = `<p>${obj.tecnico.participante.nome}</p>`
    }

    return texto
}
