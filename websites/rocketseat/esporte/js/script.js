const apiKeyInput = document.getElementById("apiKey");
const gameSelect = document.getElementById("gameSelect");
const questionInput = document.getElementById("question");
const askButton = document.getElementById("askButton");
const aiResponse = document.querySelector(".response-content");
const form = document.getElementById("form");

function limparInputs() {
    apiKeyInput.value = "";
    gameSelect.value = "";
    questionInput.value = "";
}

function textoAi(texto, color){
    aiResponse.innerHTML = texto;
    aiResponse.style.color = color;
}

function estiloButton(status, texto, classe){
    askButton.disabled = status;
    askButton.textContent = texto;
    classe == 'adicionar' ? askButton.classList.add("loading") : askButton.classList.remove("loading");
}

const markDownTooHTML = (texto) => {
    const converter = new showdown.Converter();
    return converter.makeHtml(texto);
}

const perguntarAI = async (question, game, apiKey) => {
    const model = "gemini-2.5-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const pergunta = `
        ## Especialidade
        Você é um especialista assistente de meta para para o jogo ${game}
        
        ## Tarefa
        Você de pesponder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, build e dicas
        
        ## Regras
        - Se você não sabe a resposta com 'não sei' e não tente inventar uma resposta.
        - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'
        -  Considere a data atual  ${new Date().toLocaleDateString()}
        - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
        - Nunca Responda itens que você não tenha certeza de que existe no patch atual.

        # Resposta
        - Econize na resposta, seja direto e responda no maxima 500 caracteres
        - Responta em markdown
        -  Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuario está querendo.

        ## Exemplo de Resposta
        pergunta do usuario: Melhor build rengar jungle resposta : A build mais atual é:  \n\n **Itens:**\n\n  coloque os itens aqui.\n\n**Runas:**\n\nexemplo de runas\n\n
        ---
        Aqui está a pergunta do usuario: ${question}
        ---
        }
    `;
    const contents = [{
        role: "user",
        parts: [{
            text: pergunta
        }]
    }]

    const tools = [{
        google_search: {}  
    }]
    //chamada API
    const response = await fetch(geminiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents,
            tools,
            })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;    
}

const enviarFormulario = async (event) => {
    event.preventDefault(); 
    textoAi('', 'white')
    const apiKey = apiKeyInput.value.trim();
    const game = gameSelect.value;
    const question = questionInput.value.trim();
    if (!apiKey || !game || !question) {
        textoAi("Por favor, preencha todos os campos.", "red")
        return;
    }   
    estiloButton(true, "Perguntando...", 'adicionar')
    try{
        const texto = await perguntarAI(question, game, apiKey);
        textoAi(markDownTooHTML(texto), "white")
    }catch(error) {
        textoAi("Erro ao enviar a pergunta. Tente novamente.", "red")
        estiloButton(false, "Perguntar", 'remover')
        return;
    }finally{
        estiloButton(false, "Perguntar", 'remover')
        limparInputs()
    }
}

export function inicio(){
    form.addEventListener('submit', enviarFormulario)
}