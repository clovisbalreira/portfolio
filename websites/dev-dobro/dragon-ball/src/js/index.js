let dadosBotoes = [
	{classe: 'cyberstorm', src: 'icone-cyberstorm.png', alt: 'Ícone Cyberstorm'},
	{classe: 'codepixie', src: 'icone-codepixie.png', alt: 'Ícone CodePixie'},
	{classe: 'hexblade', src: 'icone-hexblade.png', alt: 'Ícone Hexblade'},
	{classe: 'neonpulse', src: 'icone-neonpulse.png', alt: 'Ícone Neonpulse'},
	{classe: 'codebreaker', src: 'icone-codebreaker.png', alt: 'Ícone Codebreaker'}
]

let dadosPersonagens = [
	{srcset: 'bg-cyberstorm.png', src: 'bg-cyberstorm-mobile.png', alt: 'Personagem Cyberstorm', titulo: 'Cyberstorm', descricao: 'Kael Takeda, conhecido no submundo digital como "Cyberstorm", é um programador prodígio especializado em segurança cibernética e inteligência artificial. Com um intelecto afiado e reflexos rápidos, ele domina linguagens de programação como se fossem extensões de sua própria mente.' },
	{srcset: 'bg-codepixie.png', src: 'bg-codepixie-mobile.png', alt: 'Personagem CodePixie', titulo: 'CodePixie', descricao: 'Lía Nakamura, conhecida como "CodePixie", é uma programadora genial que domina o desenvolvimento de algoritmos e inteligência artificial. Com um talento nato para decifrar padrões, ela cria sistemas inovadores e protege dados sensíveis de ameaças digitais.' },
	{srcset: 'bg-hexblade.png', src: 'bg-hexblade-mobile.png', alt: 'Personagem HexBlade', titulo: 'HexBlade', descricao: 'Ryo Tanaka, conhecido como "HexBlade", é um hacker habilidoso que opera nas sombras do ciberespaço. Mestre em engenharia reversa e criptografia, ele combina força bruta e inteligência afiada para quebrar firewalls impenetráveis.' },
	{srcset: 'bg-neonpulse.png', src: 'bg-neonpulse-mobile.png', alt: 'Personagem NeonPulse', titulo: 'NeonPulse', descricao: 'NeonPulse Ayla Vega, conhecida como "NeonPulse", é uma prodígio da programação espacial. Criada em uma estação orbital, ela domina linguagens de código como se fossem sua segunda língua. Especialista em inteligência artificial e segurança cibernética.' },
	{srcset: 'bg-codebreaker.png', src: 'bg-codebreaker-mobile.png', alt: 'Personagem Codebreaker', titulo: 'Codebreaker', descricao: 'No coração de uma estação espacial abandonada, Orion Vex, um ex-engenheiro cibernético, busca desvendar um código perdido há séculos. Dizem que esse código guarda o segredo para uma tecnologia ancestral capaz de redefinir a inteligência artificial.' }
]

let numeroPersonagem = 0

function criarBotoes(){
	const ul = document.getElementById('botoes')
	dadosBotoes.forEach( (dados, index) => {
		let li = document.createElement('li')
		button = document.createElement('button')
		button.classList.add('botao')
		if(index == 0) button.classList.add('selecionado')
			button.classList.add(dados.classe)
		img = document.createElement('img')
		img.src = `./src/imagens/${dados.src}`
		img.alt = dados.alt
		button.appendChild(img)
		li.appendChild(button)
		ul.appendChild(li)
	})
}

function criarPersonagens(){
	const personagens = document.querySelector('.personagens')
	personagens.innerHTML = ''
	dadosPersonagens.forEach( (dados, index) => {
		let divPricipal = document.createElement('div')
		divPricipal.classList.add('personagem')
		if(index == 0) divPricipal.classList.add('selecionado')
		let picture = document.createElement('picture')
		let source = document.createElement('source')
		source.srcset = `./src/imagens/${dados.srcset}`
		source.media = '(min-width: 768px)'
		let img = document.createElement('img')
		img.classList.add('imagem')
		img.src = `./src/imagens/${dados.src}` 
		img.alt = dados.alt
		picture.appendChild(source)
		picture.appendChild(img)
		divPricipal.appendChild(picture)
		let div = document.createElement('div')
		div.innerHTML = ''
		div.classList.add('conteudo')
		let h2 = document.createElement('h2')
		h2.classList.add('nome-personagem')
		h2.textContent = dados.titulo
		div.appendChild(h2)
		let p = document.createElement('p')
		p.classList.add('descricao')
		p.textContent = dados.descricao
		div.appendChild(p)
		divPricipal.appendChild(div)
		personagens.appendChild(divPricipal)
	})
}

function mostrarDadosPersonagens(dados){
	let div = document.createElement('div')
	div.innerHTML = ''
	div.classList.add('conteudo')
	let h2 = document.createElement('h2')
	h2.classList.add('nome-personagem')
	h2.textContent = dados.titulo
	div.appendChild(h2)
	let p = document.createElement('p')
	p.classList.add('descricao')
	p.textContent = dados.descricao
	div.appendChild(p)
	return div
}

function acoesBotoes(){
	const botoes = document.querySelectorAll(".botao");
	const personagens = document.querySelectorAll(".personagem")
	botoes.forEach((botao, indice) => {
		botao.addEventListener("click", () => {
			const botaoSelecionado = document.querySelector(".botao.selecionado");
			botaoSelecionado.classList.remove("selecionado");
			botao.classList.add("selecionado");
			const personagemSelecionado = document.querySelector(".personagem.selecionado");
			personagemSelecionado.classList.remove("selecionado");
			personagens[indice].classList.add("selecionado");
		});	
	});	
}

criarBotoes()
criarPersonagens()
acoesBotoes()