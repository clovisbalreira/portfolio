let tarefas = []; // Inicializa um array vazio para armazenar as tarefas.
let botaoLimpar = false; // Variável que indica se o botão de limpar todas as tarefas está visível ou não.

function adicionarTarefa() { 
    // Obtém o elemento de entrada (input) onde o usuário digita a tarefa.
    const inputTarefa = document.getElementById("inputTarefa");
    // Valida se a tarefa foi corretamente adicionada ou se o input está vazio.
    validarTarefa(inputTarefa);
}

function renderizarTarefa() {
    // Obtém o elemento da lista de tarefas onde as novas tarefas serão adicionadas.
    listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista de tarefas exibidas.
    // Percorre o array de tarefas.
    tarefas.forEach((tarefa, index) => {
        // Cria um novo elemento de lista (li) para representar a tarefa.
        const novaTarefa = document.createElement("li");
        // Define o texto do novo elemento como o valor digitado no input.
        novaTarefa.textContent = tarefa;
        // Adiciona um botão de editar à tarefa.
        novaTarefa.appendChild(criarBotao("Editar", "editar", () =>  criarInputEditar(index)));
        // Adiciona um botão de remover à tarefa.
        novaTarefa.appendChild(criarBotao("Remover", "remover", () => removerTarefa(index)));
        // Adiciona o novo elemento (li) à lista de tarefas.
        listaTarefas.appendChild(novaTarefa);
        criarBotaoLimpar(); // Cria o botão de limpar todas as tarefas, se necessário.
        }
    );

    // Limpa o campo de entrada para permitir a adição de novas tarefas.    
    inputTarefa.value = "";
    inputTarefa.focus();
}

function validarTarefa() {
    // Atualiza a mensagem de validação com base no conteúdo do input.
    const inputMensagem = document.getElementById("mensagem");
    if(inputTarefa.value.trim() == ""){
        statusInput(inputMensagem, "Digite uma tarefa para adiciona-la a sua lista", "#A34743");
        inputTarefa.value = "";
        // Sai da função.
        return;
    } 
    tarefas.push(inputTarefa.value); // Adiciona a nova tarefa ao array de tarefas.
    statusInput(inputMensagem, `${tarefas.length}º tarefa adicionada com sucesso!`, "#28A745");
    apagarBotaoLimpar(true); // Atualiza o estado do botão de limpar.
    renderizarTarefa();
}

function statusInput(inputMensagem, texto, cor) {
    // Mostra o texto de validação.
    inputMensagem.textContent = texto;
    // Muda a cor do texto de validação.
    inputMensagem.style.color = cor;
}

function criarBotao( texto, classe, funcao) {
    // Cria um novo botão.
    const botao = document.createElement("button");
    // Define o texto do botão.
    botao.textContent = texto;
    // Adiciona uma classe ao botão para estilizá-lo.
    botao.className = classe;
    // Adiciona um evento de clique ao botão, que chama a função passada como argumento.
    botao.onclick = funcao;
    // Retorna o botão criado.
    return botao;
}

function removerTarefa(index) {
    // Armazena a tarefa que será removida.
    let tarefaApagada = tarefas[index]
    // Remove a tarefa do array de tarefas pelo índice.
    tarefas.splice(index, 1);
    statusInput(document.getElementById("mensagem"), `Tarefa ${tarefaApagada} removida com sucesso!`, "#A34743");
    if(tarefas.length == 1){
        apagarBotaoLimpar(false); // Atualiza o estado do botão de limpar se houver apenas uma tarefa.
    }else if(tarefas.length == 0){
        removerBotaoListarTudo(); // Remove o botão de listar todas as tarefas se não houver mais tarefas.
    }
    renderizarTarefa(); // Re-renderiza a lista de tarefas.
}

function criarInputEditar(index) {
    // Cria o elemento input.
    var input = document.createElement('input');
    input.className = 'input-editar'; // Adiciona uma classe ao input para estilizá-lo.
    input.type = 'text'; // Define o tipo do input como texto.
    if(document.querySelectorAll('.input-editar').length == 0){
       // Insere o input antes do botão clicado.
        let li = event.target.parentNode;
        li.insertBefore(input, event.target);
        input.focus(); // Foca no input recém-criado.
        pegarTextoInput(li, input); // Define o texto do input como o texto da tarefa.

        apagarTextoLista(li); // Apaga o texto da tarefa da lista.

        removerBotoesEditar(li); // Remove os botões de editar e remover da tarefa.
        
        li.appendChild(criarBotao("Gravar", "editar", () =>  editarTarefa(index))); // Adiciona um botão de gravar à tarefa.
    }else{
        statusInput(document.getElementById("mensagem"), "Você já está editando uma tarefa!", "yellow");
    }
    
}

function editarTarefa(index) {
    var li = event.target.parentNode;
    let tarefaEditada = li.querySelector('input').value;
    if(tarefaEditada.trim() !== ""){
        tarefas[index] = tarefaEditada; // Atualiza a tarefa no array de tarefas.
        apagarBotaoLimpar(false); // Atualiza o estado do botão de limpar.
        statusInput(document.getElementById("mensagem"), `Tarefa ${tarefaEditada} editada com sucesso!`, "#28A745");
        renderizarTarefa();
        return;
    }
    statusInput(document.getElementById("mensagem"), "Digite uma tarefa para edita-la a sua lista", "#A34743");
}

function limparLista() {
    // Limpa o array de tarefas.
    tarefas = [];
    removerBotaoListarTudo(); // Remove o botão de listar todas as tarefas.
    statusInput(document.getElementById("mensagem"), "", ""); // Limpa a mensagem de validação.
    renderizarTarefa(); // Re-renderiza a lista de tarefas.
}

function criarBotaoLimpar() {
    if(tarefas.length == 1 && botaoLimpar == true){
        let botaoLimpar = document.getElementById("div-botoes");
        botaoLimpar.appendChild(criarBotao("Limpar Tudo", "botao_lista", () => limparLista())); // Cria um botão de limpar todas as tarefas.
    }
}

function pegarTextoInput(li, input){
    var texto = '';

    // Percorre todos os nós filhos do elemento <li>
    li.childNodes.forEach(node => {
        // Verifica se o nó é um nó de texto.
        if (node.nodeType === Node.TEXT_NODE) {
            texto += node.nodeValue.trim(); // Adiciona o texto do nó de texto à variável texto.
        }
    });

    input.placeholder = texto; // Define o texto do input como o placeholder do input.
}

function removerBotaoListarTudo(){
    // Seleciona a div pelo id.
    const div = document.getElementById('div-botoes');
  
    // Seleciona o segundo botão dentro da div.
    const segundoBotao = div.getElementsByTagName('button')[1];
  
    // Remove o segundo botão.
    segundoBotao.remove();   
}

function apagarTextoLista(li){
    // Percorre todos os nós filhos do elemento <li>
    li.childNodes.forEach(node => {
        // Verifica se o nó é um nó de texto.
        if (node.nodeType === Node.TEXT_NODE) {
            node.nodeValue = ''; // Define o valor do nó de texto como uma string vazia.
        }
    });
}

function removerBotoesEditar(li){
    // Seleciona os botões dentro do elemento <li>
    const primeiroBotao = li.getElementsByTagName('button')[0];
    const segundoBotao = li.getElementsByTagName('button')[1];
  
    // Remove os botões de editar e remover.
    primeiroBotao.remove();   
    segundoBotao.remove();   
}

function apagarBotaoLimpar(boleano){
    botaoLimpar = boleano; // Atualiza o estado do botão de limpar.
}
