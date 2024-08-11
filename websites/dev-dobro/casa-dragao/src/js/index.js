const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const descricoes = document.querySelectorAll('.informacoes');

botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const imagemAtual = document.querySelector('.ativa');
		const botaoAtual = document.querySelector('.selecionado');
    	const informacaoAtiva = document.querySelector('.informacoes.ativa');

		botaoAtual.classList.remove('selecionado');
		imagemAtual.classList.remove('ativa');
    	informacaoAtiva.classList.remove('ativa');
        
		imagens[indice].classList.add('ativa');
		botoesCarrossel[indice].classList.add('selecionado');
    	descricoes[indice].classList.add('ativa');
	});
});
