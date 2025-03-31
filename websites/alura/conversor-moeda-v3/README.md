# Conversor de Moedas - V3

## Descrição
Este projeto é um conversor de moedas que permite ao usuário inserir um valor em Wons (moeda sul-coreana) e uma taxa de cotação para calcular seu equivalente em Reais (BRL). Desenvolvido durante a Imersão DEV 2025 da Alura, o projeto foca em interatividade e design responsivo.

## Linguagens Utilizadas
- **HTML**: Estrutura da página.
- **CSS**: Estilização dos elementos.
- **JavaScript**: Lógica de conversão e interatividade.

## Estrutura do Projeto
### HTML - Estrutura Principal
- `<!DOCTYPE html>`: Define o documento como HTML5.
- `<head>`: Contém metadados, link para CSS e JavaScript.
- `<body>`: Estrutura da interface do usuário.
- `<img>`: Exibe o logo.
- `<div class="container">`: Contêiner principal que organiza o layout.
- `<div class="content">`: Agrupa os elementos de entrada e botão.
- `<input>`: Campos para entrada do valor em Wons e da cotação.
- `<button>`: Aciona a conversão.
- `<footer>`: Exibe o crédito do projeto.

### CSS - Classes e IDs Principais
- `body`: Define fundo preto e fonte padrão.
- `.logo`: Posiciona e dimensiona o logo.
- `.container`: Define o fundo e centraliza os elementos.
- `.content`: Adiciona espaçamento, transparência e bordas arredondadas.
- `button`: Estilização interativa com efeitos hover.
- `.input`: Organiza os campos de entrada.
- `footer`: Estiliza o rodapé.

### JavaScript - Função `conversor()`
- Obtém os valores dos inputs.
- Valida se os campos foram preenchidos.
- Calcula o valor convertido e exibe o resultado.
- Ajusta automaticamente as casas decimais do resultado.

## Como Usar
1. Insira um valor em Wons.
2. Informe a taxa de cotação.
3. Clique em "Bora converter!".
4. Veja o resultado exibido na tela.
