import { configuracoes } from "../mvc/controll/configuracoes.js";
import { escolhaUsuario } from "../mvc/controll/escolhaUsuario.js";
import { styleLei } from "../utils/styleLei.js";

export async function carregarLeis(){
  let numero = 1
  while(escolhaUsuario.leis.length < configuracoes.leis){
      await buscarLeis(numero)
      numero += 1
  }
}

async function buscarLeis(numero) {
  try {
    const section = document.getElementById('leis');
    carregando(section, 'rgba(0, 0, 0, 0.089)', '.5rem', '1rem', 'Carregando leis...')
    const resposta = await fetch(`https://dadosabertos.camara.leg.br/api/v2/votacoes?pagina=${numero}&ordem=DESC&ordenarPor=dataHoraRegistro`);
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    const dados = await resposta.json();

    section.innerHTML = '';

    for (const link of dados.dados) {
      await buscarLeisDescricao(link.uri);
    }

  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

export async function buscarLeisDescricao(link) {
  try {
    const section = document.getElementById('leis');
    carregando(section, 'rgba(0, 0, 0, 0.089)', '.5rem', '1rem', 'Carregando Descrição...')
    const resposta = await fetch(`${link}`);
    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    const dados = await resposta.json();
    section.innerHTML = '';
    let lei = {}
    lei.id = dados.dados.id
    lei.proposicoesAfetadas = []
    dados.dados.proposicoesAfetadas.forEach( afetada => {
      lei.proposicoesAfetadas.push(afetada.ementa)
    })
    lei.descricao = dados.dados.descricao
    lei.data = dados.dados.data
    lei.votosUsuario = ''
    await buscarLeisVotos(link, lei)
    return dados
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

export async function buscarLeisVotos(link, lei) {
  try {
    const section = document.getElementById('leis');
    carregando(section, 'rgba(0, 0, 0, 0.089)', '.5rem', '1rem', 'Carregando Descrição...')
    const resposta = await fetch(`${link}/votos`);
    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    const dados = await resposta.json();
    section.innerHTML = '';
    if(dados.dados.length > 0 && escolhaUsuario.leis.length < configuracoes.leis){
        lei.votos = dados.dados
        lei.votosSim = lei.votos.reduce( (total, voto) => {
            if(voto.tipoVoto == 'Sim') total += 1
            return total 
        }, 0)
        lei.votosNao = lei.votos.reduce( (total, voto) => {
            if(voto.tipoVoto == 'Não') total += 1
            return total 
        }, 0)
        lei.votosAbstencao = lei.votos.reduce( (total, voto) => {
            if(voto.tipoVoto != 'Não' && voto.tipoVoto != 'Sim') total += 1
            return total 
        }, 0)
        escolhaUsuario.leis.push(lei)
    }
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

function carregando(section, cor, margin, padding, texto){
  styleLei(section, cor, margin, padding);
  section.innerHTML = `
    <div class="spinner"></div>
    <p>${texto}</p>
  `;
}