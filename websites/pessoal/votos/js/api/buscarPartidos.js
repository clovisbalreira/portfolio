export async function buscarPartidos() {
  try {
    const section = document.getElementById('partidos');
    section.innerHTML = `<div class="spinner"></div><span>Carregando partidos...</span>`;
    const resposta = await fetch('https://dadosabertos.camara.leg.br/api/v2/partidos?ordem=ASC&ordenarPor=sigla');
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    const dados = await resposta.json();
    return dados.dados
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}