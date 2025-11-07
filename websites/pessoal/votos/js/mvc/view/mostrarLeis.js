import { carregarLeis } from "../../api/buscarLeis.js"
import { escolhaUsuario } from "../controll/escolhaUsuario.js"
import { configuracoes } from "../controll/configuracoes.js"
import { estatistica } from "./mostrarEstatisticas.js"
import { styleLei } from "../../utils/styleLei.js"

export function liberarLeis(){
    if(escolhaUsuario.deputados.length == configuracoes.deputados && escolhaUsuario.partidos.length == configuracoes.partidos){
        let sectionDeputadosPartidos = document.getElementById('deputados-partidos')
        sectionDeputadosPartidos.innerHTML = ''
        inicializarLeis()
    }
}

async function inicializarLeis(){
    await carregarLeis()
    mostrarLeis()
}

function mostrarLeis(){
    incluirLeiPartidos(escolhaUsuario)
    incluirLeiEstados(escolhaUsuario)      
    incluirVotos(escolhaUsuario)
    let indiceLeiAtual = 0
    mostrarLei(escolhaUsuario, indiceLeiAtual)
} 

function incluirLeiPartidos(escolhaUsuario){
    escolhaUsuario.partidos.forEach( partido => {
        escolhaUsuario.leis.forEach( lei => {
            partido.leis.push({lei: lei, votosSim: 0, votosNao: 0, votosAbstencao: 0, combinacao: 0})  
        })
    })
}

function incluirLeiEstados(escolhaUsuario){
    escolhaUsuario.leis.forEach( lei => {
        escolhaUsuario.estado.leis.push({lei: lei, votosSim: 0, votosNao: 0, votosAbstencao: 0, combinacao: 0})
    })
}

function incluirVotos(escolhaUsuario){
    escolhaUsuario.leis.forEach( lei => {
        lei.votos.forEach( voto => {
            votosDeputados(escolhaUsuario, lei, voto)  
        })
    }) 
    votosPartidos(escolhaUsuario)
    votosEstados(escolhaUsuario)
}

function votosDeputados(escolhaUsuario, lei, voto){
    escolhaUsuario.deputados.forEach( deputado => {
        if(voto.deputado_.id == deputado.id){
            deputado.leis.push({id: lei.id, votos: voto})
        }
    })
}

function votosPartidos(escolhaUsuario){ 
    escolhaUsuario.partidos.forEach( partido => {
        partido.leis.forEach( lei => {
            lei.lei.votos.forEach( voto => {
                if(partido.sigla == voto.deputado_.siglaPartido){
                    let filtroVotoUsuario = escolhaUsuario.leis.filter( leiUsuario => {
                        return lei.lei.id == leiUsuario.id
                    })
                    let votoUsuario = filtroVotoUsuario[0].votosUsuario
                    if(voto.tipoVoto == 'Sim'){
                        lei.votosSim ++
                    }else if(voto.tipoVoto == 'Não'){
                        lei.votosNao ++
                    }else{
                        lei.votosAbstencao ++
                    }
                    if(votoUsuario == voto.tipoVoto){
                        lei.combinacao ++
                        partido.combinacao ++
                    }
                }
            })
        })
    })  
} 

function votosEstados(escolhaUsuario){
    escolhaUsuario.estado.leis.forEach( lei => {
        lei.lei.votos.forEach( voto => {
            if(escolhaUsuario.estado.sigla == voto.deputado_.siglaUf){
                let filtroVotoUsuario = escolhaUsuario.leis.filter( leiUsuario => {
                    return lei.lei.id == leiUsuario.id
                })
                let votoUsuario = filtroVotoUsuario[0].votosUsuario
                if(voto.tipoVoto == 'Sim'){
                    lei.votosSim ++
                }else if(voto.tipoVoto == 'Não'){
                    lei.votosNao ++
                }else{
                    lei.votosAbstencao ++
                }
                if(votoUsuario == voto.tipoVoto){
                    lei.combinacao ++
                    escolhaUsuario.estado.combinacao ++
                }
            }
        })
    })
} 

function mostrarLei(escolhaUsuario, indiceLeiAtual) {
    let lei = escolhaUsuario.leis[indiceLeiAtual]
    let section = document.getElementById('leis');
    styleLei(section, 'rgba(0, 0, 0, 0.089)', '.5rem', '1rem')
    let div = document.createElement('div')
    let ul = document.createElement('ul')
    let data = new Date(lei.data)
    ul.appendChild(criarLi('Data', `${adicionarZero(data.getDate())}/${adicionarZero(data.getMonth())}/${data.getFullYear()}`))
    let paragrafos = [] 
    paragrafos.push('Você é um especialista em legislação do Congresso Nacional do Brasil. Analise os seguintes dados do projeto de lei:')
    lei.proposicoesAfetadas.forEach((afetada, index) => {
        ul.appendChild(criarLi(index == 0 ? 'Mudança' : '', afetada))
        paragrafos.push(afetada)
    })
    ul.appendChild(criarLi('Descrição', lei.descricao))
    paragrafos.push(lei.descricao)
    paragrafos.push('Explique de forma estruturada:')
    paragrafos.push('Tema principal da lei → classifique dentro de uma destas áreas: Saúde, Economia e Tributos, Educação,Segurança Pública, Direitos Sociais / Trabalhistas, Meio Ambiente, Energia e Infraestrutura, Outros (especificar)')
    paragrafos.push('O que esse projeto pretende mudar na prática')
    paragrafos.push('Quem são os cidadãos afetados diretamente')
    paragrafos.push('Benefícios esperados')
    paragrafos.push('Riscos ou críticas apontadas')
    paragrafos.push('Situação atual de tramitação e próximos passos')
    paragrafos.push('Resumo final em linguagem simples (até 4 linhas)')
    paragrafos.push('Não use juridiquês. Fale como se fosse para um cidadão comum.')
    div.appendChild(ul)
    let divColar = document.createElement('div')
    divColar.id = 'div-colar'
    let p = document.createElement('p')
    p.innerHTML = `Às vezes os dados fornecidos na API, as mudanças e descrições não ficam bem explicadas. Se quiser, pesquise no Google ou copie o texto para perguntar a uma inteligência artificial.</i>`
    divColar.appendChild(p)
    let i = document.createElement('i')
    i.id = 'btn-copiar'
    i.classList.add('fa-solid')
    i.classList.add('fa-file')
    divColar.appendChild(i)
    div.appendChild(divColar)
    let span = document.createElement('span')
    span.id = 'msg-copiado'
    div.appendChild(span)
    div.appendChild(criarDivBotoes())
    section.append(div)
    copiarTexto(paragrafos)
    selecionarBotao('voto-sim', lei, escolhaUsuario, indiceLeiAtual)
    selecionarBotao('voto-nao', lei, escolhaUsuario, indiceLeiAtual)
}

function criarLi(titulo, texto){
    let li = document.createElement('li')
    li.appendChild(criarP(titulo))
    li.appendChild(criarP(texto))
    return li
}

function criarP(texto){
    let p = document.createElement('p')
    p.textContent = texto 
    return p
}

function criarDivBotoes(){
    let div = document.createElement('div')
    div.appendChild(criarBotao('Sim', 'voto-sim'))
    div.appendChild(criarBotao('Não', 'voto-nao'))
    return div
}

function criarBotao(texto, id){
    let button = document.createElement('button')
    button.textContent = texto
    button.id = id
    return button
}

function selecionarBotao(id, lei, escolhaUsuario, indiceLeiAtual){
    let botao = document.getElementById(id)
    botao.addEventListener('click', () => {
        id.includes('sim') ? lei.votosUsuario = 'Sim' : lei.votosUsuario = 'Não'
        indiceLeiAtual += 1
        configuracoes.leis <= indiceLeiAtual ? estatistica(escolhaUsuario) : mostrarLei(escolhaUsuario, indiceLeiAtual)
    })
}

function adicionarZero(data){
    return data < 10 ? `0${data}` : data
}

function copiarTexto(paragrafos){
    const botao = document.getElementById("btn-copiar");
    let texto = ''
    paragrafos.forEach( paragrafo => {
        texto += `${paragrafo} `
    })
    const msg = document.getElementById("msg-copiado");
    botao.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(texto);
        msg.textContent = "Copiado!";
        setTimeout(() => msg.textContent = "", 2000);
    } catch (erro) {
        console.error("Erro ao copiar:", erro);
    }
    });
}

