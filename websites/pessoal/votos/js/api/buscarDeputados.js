export async function buscarDeputados() {
  try {
    const section = document.getElementById('deputados');
    section.innerHTML = `<div class="spinner"></div><span>Carregando deputados...</span>`;
    //loadingEl.textContent = 'Carregando deputados...';
    const resposta = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome');
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    const dados = await resposta.json();
    return dados.dados
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}