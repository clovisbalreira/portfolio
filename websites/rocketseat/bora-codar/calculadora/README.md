Projeto Calculadora Moderna

Descrição

Este projeto consiste em uma calculadora web estilizada e funcional que permite aos usuários realizar operações básicas de matemática, como adição, subtração, multiplicação e divisão, além de recursos adicionais como porcentagem e inversão de sinal. Desenvolvida com HTML, CSS e JavaScript, esta calculadora possui um design moderno e é responsiva, adaptando-se a diferentes tamanhos de tela.

Características Principais:

    Design Moderno: Utiliza um esquema de cores suave e gradiente, com botões estilizados e sombras para uma aparência tridimensional.
    Responsividade: Adaptável a diferentes tamanhos de tela, garantindo uma experiência de usuário consistente em dispositivos móveis e desktops.
    Funcionalidades Avançadas: Além das operações básicas, inclui cálculo de porcentagem e funcionalidade de inverter o sinal do número atual.

Linguagens Utilizadas:

    HTML: Estrutura da página e interface da calculadora.
    CSS: Estilização da página, incluindo layout responsivo e design dos elementos.
    JavaScript: Lógica de cálculo e interação do usuário com a calculadora.

Tags HTML Principais:

    div: Utilizado para estruturar os principais componentes da calculadora, como o display e o teclado.
    button: Representa cada tecla da calculadora, permitindo a interação do usuário.
    img: Usado dentro de alguns botões para indicar a operação correspondente (ex.: soma, subtração).

Classes e IDs CSS:
IDs:

    #calculator: Define o contêiner principal da calculadora.
    #display: Área onde o resultado e a expressão atual são exibidos.
    #last-calc: Mostra a última operação realizada ou o número em processo de entrada.
    #result: Exibe o resultado da última operação.

Classes:

    .secondary: Estilo aplicado aos botões de funções secundárias como CE e C.
    .tertiary: Aplicado aos botões de operações matemáticas (+, -, *, /).
    .quartiary: Especificamente para o botão de resultado, dando destaque.
    .svg: Usada nos botões que contêm imagens para alinhamento e apresentação adequados.

Funções JavaScript:

    mostrarCalculo(): Atualiza o display com os números e operações à medida que são inseridos.
    operacao(): Manipula a lógica para adicionar operadores matemáticos à expressão.
    menorMaior(): Inverte o sinal do número atualmente exibido.
    deletarUltimoDigito(): Remove o último dígito ou operador inserido.
    calcularPorcentagem(): Calcula a porcentagem com base na expressão inserida.
    handleButtonClick(): Lida com a lógica de clicar em botões, determinando a ação baseada no botão pressionado.

Como Usar:

Para utilizar a calculadora, simplesmente visite a página web onde está hospedada. A interface intuitiva permite que você clique nos botões para inserir números e operações, com o resultado sendo atualizado em tempo real no display.

Este projeto é perfeito para estudantes, profissionais ou qualquer pessoa que necessite de uma ferramenta de cálculo acessível diretamente no navegador, sem a necessidade de instalar aplicativos adicionais.