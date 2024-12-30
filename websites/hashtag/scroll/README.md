Scroll

Descrição:

Este projeto demonstra uma animação de scroll horizontal infinito, exibindo uma série de habilidades ou tecnologias.

Tecnologias Utilizadas:

HTML: Estrutura básica da página, incluindo elementos como div para criar os contêineres e span para os itens.
CSS: Estilização visual da página, definindo cores, margens, bordas, efeitos de animação (@keyframes) e layout com flexbox.
JavaScript: Manipulação do DOM para clonar os elementos e criar a ilusão de movimento infinito.
HTML:

Tags:
<div>: Utilizado para criar os principais contêineres (scroll, scroll_container) e para cada item individual (scroll_item).
CSS:

Classes:
.scroll: Define o estilo geral do contêiner principal, incluindo largura máxima, cor de fundo e máscara para criar o efeito de transição suave.
.scroll_container: Define o comportamento de flexbox para posicionar os itens horizontalmente e a animação de scroll infinito.
.scroll_item: Define o estilo de cada item individual, como cor de fundo, cor do texto e arredondamento das bordas.
IDs: Não foram utilizados IDs neste código.
JavaScript:

Funções:
Seleção de elementos: Seleciona os elementos relevantes do DOM usando document.querySelector() e document.querySelectorAll().
Clonagem de elementos: Clona cada item usando item.cloneNode(true) e adiciona os clones ao contêiner para criar a repetição e a sensação de movimento infinito.
Observações:

A animação scrollInfinito utiliza a propriedade translate para deslocar o conteúdo horizontalmente.
O atributo aria-hidden é usado para ocultar os elementos duplicados do leitor de tela, melhorando a acessibilidade.