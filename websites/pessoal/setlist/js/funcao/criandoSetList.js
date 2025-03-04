import { gravacoes } from "../mvc/control/gravacao.js"
import { interpretes } from "../mvc/control/interprete.js"
import { setLists, incluirSetList } from "../mvc/control/setlist.js";

export function criandoSetList(){
    let musicasInterpretes = musicasArtistas(interpretes, gravacoes).sort((a, b) => a.musica.length - b.musica.length)
    let classificacaoMusicas = vendoMusicasTocadas(musicasInterpretes)
    let setListCriado = criarSetList(classificacaoMusicas)
    mostrandoSetList(setListCriado)
}

function mostrandoSetList(setListCriado){
    let section = document.querySelector('section')
    setListCriado.forEach( set => {
        let musicasGravacao = []
        let p = document.createElement('p')
        p.innerHTML = `incluirSetList(setLists, '${set.dia}', [` 
        set.musica.forEach( (musica, indexSet) => {
            gravacoes.forEach( (gravacao, index) => {
                if(gravacao.interprete.interprete.interprete == musica.interprete && gravacao.musica.musica.musica == musica.musica){
                    p.innerHTML += `gravacoes[${index}]`
                    musicasGravacao.push(index)
                    if(indexSet < 3) p.innerHTML += `, `
                }
            })
        })
        incluirSetList(setLists, set.dia, [gravacoes[musicasGravacao[0]],gravacoes[musicasGravacao[1]],gravacoes[musicasGravacao[2]],gravacoes[musicasGravacao[3]]])
        p.innerHTML += `])`
        section.appendChild(p)
    })
}

function musicasArtistas(){
    let musicasArtistas = []
    let artista = ''
    let musica = []
    interpretes.forEach( interprete => {
        artista = interprete.interprete
        gravacoes.forEach( gravacao => {
            if(interprete.interprete == gravacao.interprete.interprete.interprete){
                musica.push({musica : gravacao.musica.musica.musica, vezes : 0, tocada:false})
            }
        })
        musicasArtistas.push({interprete : artista, musicaTocadas : 0, musica: musica})
        musica = []
    })
    return musicasArtistas
}

function vendoMusicasTocadas(musicasInterpretes){
    let ultimoDia = ''
    setLists.forEach( set => {
        ultimoDia = set.dia
        set.musicas.forEach( musica => {
            musicasInterpretes.forEach( interprete => {
                interprete.musica.forEach( musicas => {
                    if(musica[0].interprete.interprete.interprete == interprete.interprete && musica[0].musica.musica.musica == musicas.musica){
                        musicas.tocada = true
                        interprete.musicaTocadas = parseInt(interprete.musicaTocadas) + 1
                        musicas.vezes = parseInt(musicas.vezes) + 1
                    }
                })
            })
        })
    })
    return [{ultimoDia : ultimoDia, musica : musicasInterpretes}]
}

function criarSetList(classificacaoMusicas){
    let setList = []
    let musicasSetList = []
    let incluido = false
    let dia = classificacaoMusicas[0].ultimoDia
    let musicasSelecionadasNaoTocadas = incluidoMusicasNaoTocadas(setList, musicasSetList, incluido, dia, classificacaoMusicas)
    if( musicasSelecionadasNaoTocadas[0].length < 4){
        return incluidoMusicasJaTocadas(setList,  musicasSelecionadasNaoTocadas, incluido, classificacaoMusicas)
    }else{
        return musicasSelecionadasNaoTocadas[0]
    }
}

function incluidoMusicasJaTocadas(setList, musicasSelecionadasNaoTocadas, incluido, classificacaoMusicas){
    classificacaoMusicas[0].musica.sort((a, b) => a.musicaTocadas - b.musicaTocadas)
    let musicas = musicasSelecionadasNaoTocadas[1]
    let dia = musicasSelecionadasNaoTocadas[0].length == 0 ? classificacaoMusicas[0].ultimoDia : musicasSelecionadasNaoTocadas[0][0].dia
    let juntou = musicas.length == 0 ? true : false
    for( let i = setList.length; i < 4; i++){
        classificacaoMusicas.forEach( gravacao => {
            gravacao.musica.forEach( musica => {
                incluido = false
                musica.musica.sort((a, b) => a.vezes - b.vezes)
                musica.musica.forEach( som => {
                    if(juntou){
                        if(setList.length < 4){
                            musicas.push({ interprete : musica.interprete, musica : som.musica})
                            incluido = true
                            if(musicas.length == 4){
                                dia = adicionarDias(dia, 7)
                                setList.push({dia : dia, musica : musicas})
                                musicas = []
                                juntou = true
                            }
                        }
                    }else{
                        musicas.forEach( interprete => {
                            if(interprete.interprete != musica.interprete && !incluido){
                                musicas.push({ interprete : musica.interprete, musica : som.musica})
                                incluido = true
                                if(musicas.length == 4){
                                    dia = adicionarDias(dia, 7)
                                    setList.push({dia : dia, musica : musicas})
                                    musicas = []
                                    juntou = true
                                }
                            }
                        })
                    }
                })
            })
        })
    }
    return setList
}

function incluidoMusicasNaoTocadas(setList, musicasSetList, incluido, dia, classificacaoMusicas){
    for( let i = 0; i < 4; i++){
        classificacaoMusicas.forEach( musicas => {
            musicas.musica.forEach( musicaInterprete => {
                incluido = false
                musicaInterprete.musica.forEach( musicaTocada => {
                    if(!musicaTocada.tocada && !incluido && setList.length < 4){
                        musicasSetList.push({ interprete : musicaInterprete.interprete, musica : musicaTocada.musica})
                        musicaTocada.tocada = true
                        incluido = true
                        if(musicasSetList.length == 4){
                            dia = adicionarDias(dia, 7)
                            setList.push({dia : dia, musica : musicasSetList})
                            musicasSetList = []
                        }
                    }
                })
            })
        })
    }
    return [setList, musicasSetList]
}

function adicionarDias(dataStr, dias) {
    let partes = dataStr.split('/');
    let data = new Date(`20${partes[2]}-${partes[1]}-${partes[0]}`);
    data.setDate(data.getDate() + dias);
    
    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0!
    let ano = data.getFullYear().toString().slice(-2);

    return `${dia}/${mes}/${ano}`;
}
