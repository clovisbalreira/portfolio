Projeto Cartão de Embarque Dinâmico

Descrição
Este repositório contém um projeto HTML/CSS/JavaScript que gera cartões de embarque dinâmicos. O usuário pode gerar um novo cartão de embarque com detalhes aleatórios ao clicar em um botão. É uma excelente ferramenta para desenvolvedores e designers entenderem como integrar HTML, CSS e JavaScript para criar aplicações interativas.

Linguagens e Tecnologias Utilizadas
HTML5: Estrutura do projeto.
CSS3: Estilização da página e responsividade.
JavaScript: Lógica de geração dinâmica dos dados do cartão de embarque.
Recursos HTML
Tags Utilizadas
<!DOCTYPE html>: Define o tipo do documento.
<html>: Raiz do documento HTML.
<head>: Contém metadados e links para folhas de estilo e scripts.
<body>: Contém o conteúdo visível da página.
<div>: Usado para agrupar conteúdo.
<h1>: Título do cartão de embarque.
<button>: Botão para gerar um novo cartão de embarque.
<main>, <section>, <div>: Estrutura do cartão de embarque.
<p>, <strong>, <time>: Exibição dos dados no cartão.
<footer>: Rodapé da página.
<img>: Exibe imagens (avião e QR Code).
<dl>, <dt>: Descrição e termos de detalhes do voo.
Classes e IDs CSS
IDs
#bording-pass: Contêiner principal do cartão de embarque.
#ticket: Contêiner interno onde os detalhes do voo são exibidos.
Classes
.grid e .column: Utilizadas para estilizar a disposição dos elementos em grid e colunas.
.text-right: Alinha o texto à direita.
.top, .middle, .bottom: Seções do cartão de embarque com estilos específicos.
.flight, .departure, .arrival, .seat: Classes que ajudam a categorizar os dados do voo.
.qrcode: Classe para estilizar a área do QR Code.
Funções JavaScript
gerarTicked()
Gera dinamicamente os detalhes do cartão de embarque, incluindo número do voo, datas, horários, assento, informações de embarque e destinos. Utiliza funções auxiliares como zeroAEsquerda para formatar corretamente os números e sorteioCidade para garantir destinos aleatórios e válidos.

zeroAEsquerda(num)
Formata números, adicionando um zero à esquerda se o número for menor que 10. É útil para exibir corretamente as datas e horários.

sorteioCidade(num)
Seleciona um índice aleatório para as cidades de destino, garantindo que a cidade de destino seja diferente da cidade de partida.

Conclusão
Este projeto demonstra a integração entre HTML, CSS e JavaScript para criar uma aplicação web interativa. É uma excelente referência para quem deseja aprender mais sobre desenvolvimento front-end e a dinâmica entre estas tecnologias.