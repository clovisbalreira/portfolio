function adicionarTarefa() { 
    // Obtém o elemento de entrada (input) onde o usuário digita a tarefa.
    const inputTarefa = document.getElementById("inputTarefa");
    // Valida se a tarefa foi corretamente adicionada ou se o input está vazio.
    validarTarefa(inputTarefa);
}

function adicionarLi(inputTarefa) {
    // Obtém o elemento da lista de tarefas onde as novas tarefas serão adicionadas.
    listaTarefas = document.getElementById("listaTarefas");
    // Cria um novo elemento de lista (li) para representar a tarefa.
    const novaTarefa = document.createElement("li");
    // Define o texto do novo elemento como o valor digitado no input.
    novaTarefa.textContent = inputTarefa.value;
    // Adiciona o novo elemento (li) à lista de tarefas.
    listaTarefas.appendChild(novaTarefa);
    // Limpa o campo de entrada para permitir a adição de novas tarefas.
    inputTarefa.value = "";
}

function validarTarefa() {
    // Atualiza a mensagem de validação com base no conteúdo do input:
    const inputMensagem = document.getElementById("mensagem")
    if(inputTarefa.value.trim() == ""){
        // Mostra "Digite uma tarefa para adiciona-la a sua lista" se o campo estiver vazio.
        inputMensagem.textContent = "Digite uma tarefa para adiciona-la a sua lista"
        // Mudar a cor do texto para vermelho
        inputMensagem.style.color = '#A34743'
        // Limpa o campo de entrada para permitir a adição de novas tarefas.
        inputTarefa.value = "";
        // Sai da função
        return
    } 
    // Mostra "Tarefa adicionada com sucesso!" se o campo não estiver vazio.
    inputMensagem.textContent = "Tarefa adicionada com sucesso!";
    // Mudar a cor do texto para verde
    inputMensagem.style.color = '#28A745'
    // Adiciona a tarefa à lista de tarefas, passando o input como argumento.
    adicionarLi(inputTarefa);
}