// Cria um array de objetos, onde cada objeto representa uma aula.
// A propriedade 'descricao' contém o título da aula.
let aulas = [
    { descricao : 'Boas vindas!' }, // Primeira aula: Boas-vindas
    { descricao : 'Lista de Tarefas' }, // Segunda aula: Lista de Tarefas
    //{ descricao : '' }, // Terceira aula: Comentário removido para aula não utilizada
];

// Função para adicionar links dinamicamente a uma lista HTML.
// Recebe como parâmetro um array de objetos representando as aulas.
function adicionarLinks(aulas) {
    // Obtém a referência ao elemento ul com o id 'listaAulas' no DOM.
    const ulAulas = document.getElementById('listaAulas');

    // Itera sobre cada objeto (aula) do array 'aulas'.
    // O parâmetro 'index' representa o índice atual da iteração.
    aulas.forEach( ( aula, index ) => {
        // Cria um novo elemento de lista (li).
        const li = document.createElement('li');

        // Cria um novo elemento âncora (a) para criar o link.
        const a = document.createElement('a');

        // Define o texto do link como a descrição da aula.
        a.textContent = aula.descricao;

        // Define o atributo 'target' para abrir o link em uma nova aba.
        a.target = '_blank';

        // Define o atributo 'href' para apontar para o arquivo HTML da aula.
        // O caminho é construído dinamicamente usando o índice da aula.
        a.href = `./aulas/aula-${index + 1}/index.html`;

        // Adiciona o elemento âncora (a) ao elemento de lista (li).
        li.appendChild(a);

        // Adiciona o elemento de lista (li) à lista de aulas (ul).
        ulAulas.appendChild(li);
    });
}

// Chama a função para adicionar os links à lista de aulas.
// Passa o array 'aulas' como argumento.
adicionarLinks(aulas);