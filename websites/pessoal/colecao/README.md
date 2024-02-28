Descrição do Projeto "Coleção de Moedas e Cédulas"

Este projeto é um catálogo digital interativo para colecionadores de moedas e cédulas. Ele permite aos usuários visualizar informações detalhadas sobre cada item da coleção, incluindo nome, país de origem, valor facial, série, e imagens da frente e do verso de cada peça. O catálogo também calcula o total de moedas e cédulas na coleção, o valor total em Reais (R$) e o valor convertido de moedas estrangeiras para Reais, usando taxas de conversão simplificadas.
Tecnologias Utilizadas

    HTML: Estruturação da página.
    CSS: Estilização da página.
    JavaScript: Funcionalidades interativas.

Estrutura do HTML

A estrutura básica do HTML inclui:

    Um <header> com parágrafos para exibir o total de moedas, cédulas, valor total em Reais e valor convertido.
    Um <main> vazio, que será preenchido dinamicamente com JavaScript.

Estilização CSS

O arquivo CSS style.css define a estilização do projeto:

    Reset CSS: Zerar margin e padding para remover os estilos padrão do navegador.
    Cor de Fundo: Azul para o body.
    Layout Principal (main): Utiliza display: flex, gap, justify-content: center, e flex-wrap: wrap para um layout responsivo dos itens da coleção.
    Seções de Itens: Cada item da coleção é apresentado em uma section com display: flex, flex-direction: column, fundo branco, espaçamento (gap), padding, e bordas arredondadas (border-radius).
    Imagens: Ajuste do tamanho das imagens de bandeiras e de moedas/cédulas.

Funções JavaScript
somarCedulasMoedas(valor)

Incrementa contadores de cédulas ou moedas com base no tipo do item.
atualizarValor(moeda, valor)

Converte o valor de moedas estrangeiras para Reais, aplicando taxas de conversão simplificadas.
cifrao(pais, brasil)

Determina o símbolo monetário a ser usado com base no país e no tipo de moeda.
somarTotais(id, valor)

Atualiza o conteúdo dos elementos no <header> para mostrar totais de moedas, cédulas, e valores.
Tags e Seletores CSS

    Seletores de Elemento: body, main, section, img.
    Seletores de Classe: .imagem para estilizar contêineres de imagens.
    Seletores Avançados: section > div:nth-child(n) para selecionar e estilizar filhos específicos dentro de cada section.

Implementação JavaScript

O JavaScript é utilizado para gerar dinamicamente o conteúdo do catálogo. Ele percorre um array de objetos dinheiros, criando elementos HTML para cada item da coleção e inserindo-os no <main>. Cada item inclui detalhes como nome, país, valor, e imagens. 