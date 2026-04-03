let port;
let reader;
let buffer = "";
let placarAnterior = [];
let equipes = [];
let jogos = [];
let telaStatus = null;
let modoTela = "jogo";
let tempoAtualGlobal = 1;
let jogoDia = 0
let totalEquipe = 0
let jogoAtualIndice = 0;
let equipesParaEnviar = [];
let mostrarRelogio = true;

const jogoDiaInputs = document.querySelectorAll('input[name="jogoDia"]');
jogoDiaInputs[1].disabled = true;

const totalEquipeInputs = document.querySelectorAll('input[name="totalEquipe"]');

totalEquipeInputs.forEach(input => {
  input.addEventListener('change', () => {

    if (input.value === "2") {
      // marca jogoDia = 1
      jogoDiaInputs.forEach(radio => {
        radio.checked = radio.value === "1";
        radio.disabled = true; // desabilita todos
      });

    } else {
      // reabilita todos
      jogoDiaInputs.forEach(radio => {
        radio.disabled = false;
      });
    }

  });
});

// conectar ao Arduino
document.getElementById("connect").addEventListener("click", async () => {
  try {
    console.log("Solicitando porta...");
    port = await navigator.serial.requestPort();
    console.log("Porta selecionada:", port);
    await port.open({ baudRate: 9600 });
    console.log("Porta aberta com sucesso");  
    await new Promise(resolve => setTimeout(resolve, 200));
    if (!port.readable) {
      throw new Error("Porta abriu, mas readable ainda é null");
    }
    mostrarDiv('configuracao', 'flex')
    atualizarStatus(true);
    const decoder = new TextDecoderStream();
    port.readable.pipeTo(decoder.writable);
    reader = decoder.readable.getReader();
    readSerial();
  } catch (error) {
    console.error("Erro real:", error);
    atualizarStatus(false);
  }
});

// status conexao
function atualizarStatus(conectado) {
  const status = document.getElementById("status");
  if (conectado) {
    status.textContent = "🟢 Arduino Conectado";
    status.className = "conectado";
  } else {
    status.textContent = "🔴 Arduino Desconectado";
    status.className = "desconectado";
  }
}

// mostrar divs
function mostrarDiv(id, tipo){
  document.getElementById(id).style.display = tipo
}

// ler dados do Arduino
async function readSerial() {
  try {
    while (port && port.readable) {
      const { value, done } = await reader.read();
      if (done) break;

      if (value) {
        buffer += value;
        let linhas = buffer.split("\n");
        buffer = linhas.pop();

        for (let linha of linhas) {
          linha = linha.trim();
          if (!linha || !linha.startsWith("{")) continue;

          try {
            const data = JSON.parse(linha);
            // LOG PARA TESTE: Abra o F12 e veja se isso aparece repetidamente
            // console.log("Dados do Arduino:", data); 

            if (data.evento) {
              tratarEvento(data);
            } 
            
            // IMPORTANTE: Sempre chamamos mostrarDados se houver 'jogos' no JSON
            if (data.jogos) {
              mostrarDados(data);
            }
          } catch (e) {
            console.warn("Erro ao processar JSON:", linha, e);
          }
        }
      }
    }
  } catch (error) {
    console.error("Erro na leitura serial:", error);
  } finally {
    // Se a leitura parar por erro, tenta reabrir o fluxo
    setTimeout(reconectarLeitura, 1000);
  }
}

// tentar reconectar leitura
async function reconectarLeitura() {
  try {
    await new Promise(r => setTimeout(r, 500));
    if (!port.readable) {
      console.log("Porta ainda não pronta...");
      atualizarStatus(false);
      return;
    }
    const decoder = new TextDecoderStream();
    port.readable.pipeTo(decoder.writable);
    reader = decoder.readable.getReader();
    console.log("Reconectado!");
    atualizarStatus(true);
    readSerial();
  } catch (e) {
    console.error("Erro ao reconectar:", e);
    atualizarStatus(false);
  }
}

// configurar
async function iniciarConfiguracao(){
  let tempo = document.getElementById('tempoInput').value;
  let [h, m] = tempo.split(":");
  tempo = `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;
  console.log("Tempo enviado:", tempo);
  jogoDia = document.querySelector('input[name="jogoDia"]:checked').value;
  totalEquipe = document.querySelector('input[name="totalEquipe"]:checked').value;
  mostrarRelogio = document.querySelector('input[name="mostrarRelogio"]:checked').value;
  
  const json = JSON.stringify({
    configuracao: {
      tempo: tempo,
      totalEquipe: parseInt(totalEquipe),
    }
  });
  const encoder = new TextEncoder();
  const writer = port.writable.getWriter();
  await writer.write(encoder.encode(json + "\n"));
  writer.releaseLock();
  console.log("Configuração enviada:", json);
  mostrarDiv('configuracao', 'none')
  mostrarDiv('adicionarEquipe', 'grid')
  mostrarEsconder("btnEnviar", 'none')
}

function mostrarOcultarRelogio(){
  const relogio = document.getElementById("tempo");
  if(mostrarRelogio === "true"){
    relogio.style.display = "block";
  } else {
    relogio.style.display = "none";
  }
}

// adicionar equipe
function adicionarEquipe() {
  let input = document.getElementById("equipeInput");
  let mensagem = document.getElementById("erro");
  if(!input.value.trim()){
    mensagem.textContent = "Digite um nome válido!";
    return;
  }
  mensagem.textContent = "";
  equipes.push(input.value);
  input.value = "";
  input.focus();
  if(equipes.length == totalEquipe){
    mostrarEsconder("btnEnviar", 'block')
    mostrarEsconder("btnAdicionar", 'none')
    mostrarEsconder("divEquipe", 'none')
  }
}

function mostrarEsconder(id, condicao) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.style.display = condicao;
  } else {
    // Se o elemento não existir, ele apenas ignora em vez de dar erro
    console.warn(`Aviso: O elemento com ID "${id}" não foi encontrado no HTML.`);
  }
}

// desabilidar botao
function desabilitarAbilitarBotao(id, condicao){
    document.getElementById(id).disabled = condicao;
}

// enviar equipes para o Arduino
async function criarJogo() {
  mostrarOcultarRelogio()
  criarJogos()
  mostrarJogosLocal()
  let totalJogos = jogosDia()
  const json = JSON.stringify({
    equipes: totalJogos
  });
  const encoder = new TextEncoder();
  const writer = port.writable.getWriter();
  await writer.write(encoder.encode(json + "\n"));
  writer.releaseLock();
  console.log("Enviado:", json);
  mostrarTabela()
  mostrarDiv('adicionarEquipe', 'none')
  mostrarDiv('mainJogo', 'flex')
  mostrarDiv('iniciarJogo', 'block')
}

// criar jogos
function criarJogos(){
  jogos = [];
  for (let i = 0; i < equipes.length; i += 2) {
    jogos.push({
      equipeMandante: equipes[i],
      equipeVisitante: equipes[i + 1],
      golMandante: null,
      golVisitante: null
    });
  }
  console.log("Jogos criados:", jogos);
}

// mostrar dados locais
function mostrarJogosLocal() {
  const container = document.getElementById("jogos");
  container.innerHTML = "";
  let jogosSelecionados = jogos
  .filter(j => j.golMandante == null && j.golVisitante == null)
  .slice(0, jogoDia)
  jogosSelecionados.forEach(jogo => {
    const div = document.createElement("div");
    div.className = "jogo";
    div.appendChild(criarSpan('equipe', jogo.equipeMandante))
    div.appendChild(criarSpan('placar', '0 x 0'))
    div.appendChild(criarSpan('equipe', jogo.equipeVisitante))
    container.appendChild(div);
    
  });
}

// criar span
function criarSpan(classe, texto){
  let span = document.createElement('span')
  span.classList.add(classe)
  span.textContent = texto
  return span
}

// organizar jogos do dia
function jogosDia(){
  let totalJogos = []
  for( var i = 0; i < jogoDia; i++){
    totalJogos.push(jogos[i].equipeMandante)
    totalJogos.push(jogos[i].equipeVisitante)
  }
  return totalJogos;
}

// iniciar jogo via site
async function iniciarJogo() {
  if (!port || !port.writable) {
    alert("Conecte o Arduino primeiro!");
    return;
  }
  const comando = {
    comando: "start"
  };
  const encoder = new TextEncoder();
  const writer = port.writable.getWriter();
  await writer.write(encoder.encode(JSON.stringify(comando) + "\n"));
  writer.releaseLock();
  console.log("Jogo iniciado via site");
}

// mostrar dados recebidos do Arduino
function mostrarDados(data) {
  // 1. Atualizar o relógio (O ID deve ser "tempo")
  const relogio = document.getElementById("tempo");
  if (relogio && data.tempo) {
    relogio.textContent = data.tempo;
    // Oculta o relógio se estiver no intervalo ou fim
    relogio.style.display = (modoTela === "intervalo" || modoTela === "fim") ? "none" : "block";
  }

  // 2. Sincronizar placares no array global
  if (data.jogos && data.jogos.length > 0) {
    data.jogos.forEach((jogoRecebido) => {
      const jogoLocal = jogos.find(j => 
        j.equipeMandante === jogoRecebido.equipeMandante && 
        j.equipeVisitante === jogoRecebido.equipeVisitante
      );
      if (jogoLocal) {
        jogoLocal.golMandante = jogoRecebido.golMandante;
        jogoLocal.golVisitante = jogoRecebido.golVisitante;
      }
    });
  }

  // 3. Redesenhar a tela de placares
  const container = document.getElementById("jogos");
  if (!container) return;

  container.innerHTML = "";
  
  // Exibe a quantidade de jogos definida (1 ou 2)
  for (let i = 0; i < jogoDia; i++) {
    let idx = (jogoAtualIndice + i);
    let jogoParaExibir = jogos[idx];

    if (jogoParaExibir) {
      const div = document.createElement("div");
      div.className = "jogo";
      
      // Verifica se houve gol para animar
      if (placarAnterior[idx]) {
        if (jogoParaExibir.golMandante > placarAnterior[idx].golMandante ||
            jogoParaExibir.golVisitante > placarAnterior[idx].golVisitante) {
          mostrarAnimacaoGol();
        }
      }

      div.appendChild(criarSpan('equipe', jogoParaExibir.equipeMandante));
      div.appendChild(criarSpan('placar', `${jogoParaExibir.golMandante ?? 0} x ${jogoParaExibir.golVisitante ?? 0}`));
      div.appendChild(criarSpan('equipe', jogoParaExibir.equipeVisitante));
      container.appendChild(div);
      
      // Salva o estado atual para a próxima comparação
      placarAnterior[idx] = { ...jogoParaExibir };
    }
  }
}

function mudarSpan(texto){
  const statusSpan = document.querySelector("#mainJogo span");
  statusSpan.textContent = texto;
}

// animação gol
function mostrarAnimacaoGol() {
  const div = document.createElement("div");
  div.className = "gol-texto";
  div.textContent = "GOOOOL!!!";
  document.body.appendChild(div);
  mostrarTabela()
  setTimeout(() => {
    div.remove();
  }, 1500);
}

// Função para controlar o estado do botão de início
function controlarBotaoInicio(bloquear) {
  const btn = document.getElementById('iniciarJogo');
  if (btn) {
    btn.disabled = bloquear;
    btn.style.opacity = bloquear ? "0.5" : "1"; // Deixa o botão "apagadinho" se estiver bloqueado
    btn.style.cursor = bloquear ? "not-allowed" : "pointer";
  }
}

async function enviarProximoJogo() {
    // Verificamos se ainda existem equipas para um próximo jogo antes de mostrar o botão
    let proximoIndiceBase = (jogoAtualIndice + parseInt(jogoDia)) * 2;
    
    if (equipes[proximoIndiceBase]) {
        // Se existe uma próxima equipa, mostra o botão de avançar
        mostrarEsconder("iniciarJogo", 'none');
        mostrarEsconder("enviar-proximo-jogo", 'block');
    } else {
        // Se não há mais ninguém, mostra as opções de fim de torneio
        mostrarEsconder("iniciarJogo", 'none');
        mostrarEsconder("reiniciar-Jogo", 'block');
        mostrarEsconder("resetar", 'block');
    }
}

async function reiniciarJogo() {
    // 1. Volta o apontador para o primeiro jogo da lista
    jogoAtualIndice = 0;

    // 2. Zerar o placar de TODOS os jogos no array global
    jogos.forEach(jogo => {
        jogo.golMandante = null;
        jogo.golVisitante = null;
    });

    // 3. Limpar a interface visual
    document.getElementById("tempo").textContent = "00:00";
    document.getElementById("corpo-tabela").innerHTML = ""; // Limpa a tabela de resultados
    
    // Mostra novamente os jogos iniciais na tela principal
    mostrarJogosLocal(); 

    // 4. Enviar comando de reset para o Arduino
    if (port && port.writable) {
        // Enviamos o comando de reset de gols
        const encoder = new TextEncoder();
        const writer = port.writable.getWriter();
        
        const comandoReset = { comando: "reset_gols" };
        await writer.write(encoder.encode(JSON.stringify(comandoReset) + "\n"));

        // 5. Enviar novamente as primeiras equipes para o Arduino (Sincronização)
        let mandante = equipes[0];
        let visitante = equipes[1];
        const comandoEquipes = { equipes: [mandante, visitante] };
        await writer.write(encoder.encode(JSON.stringify(comandoEquipes) + "\n"));

        writer.releaseLock();
    }

    // 5. Ajustar visibilidade dos botões
    mostrarEsconder("reiniciar-Jogo", 'none');
    mostrarEsconder("resetar", 'none');
    mostrarEsconder("enviar-proximo-jogo", 'none');
    mostrarEsconder("iniciarJogo", 'block');
    mudarSpan("1º TEMPO");
    mostrarTabela()
    console.log("Sistema reiniciado: Voltamos ao Jogo 1 com placares zerados.");
}

function resetar() {
  // 1. Limpa as variáveis de controle no JavaScript
  equipes = [];
  jogos = [];
  placarAnterior = [];
  buffer = "";
  jogoAtualIndice = 0;

  // 2. Limpa elementos visuais (HTML)
  document.getElementById("jogos").innerHTML = "";
  document.getElementById("tempo").textContent = "00:00";
  
  // 3. Gerencia a visibilidade das Divs
  mostrarEsconder("reiniciar-Jogo", 'none');
  mostrarEsconder("resetar", 'none');
  mostrarEsconder("mainJogo", "none");
  mostrarEsconder("tabela", 'none');
  mostrarEsconder("mensagem-fixa", 'none');
  mostrarEsconder("divEquipe", 'flex');
  mostrarEsconder("configuracao", 'flex');
  mudarSpan("1º TEMPO");
  
  // 4. Garante que os botões voltem ao estado original
  mostrarEsconder("btnAdicionar", 'block');
  mostrarEsconder("btnEnviar", 'none');
  
  console.log("Sistema resetado internamente.");
}

async function proximoJogo() {
    // 1. SÓ AGORA avançamos o índice (quando o utilizador clica)
    jogoAtualIndice += parseInt(jogoDia); 
    
    // 2. Preparamos as equipas que vão para o Arduino
    equipesParaEnviar = [];
    for(let i = 0; i < jogoDia; i++) {
        let idxBase = (jogoAtualIndice + i) * 2;
        let mandante = equipes[idxBase];
        let visitante = equipes[idxBase + 1];
        
        if (mandante && visitante) {
            equipesParaEnviar.push(mandante);
            equipesParaEnviar.push(visitante);
        }
    }

    // 3. Limpezas de segurança
    placarAnterior = []; 
    const encoder = new TextEncoder();
    const writer = port.writable.getWriter();
    
    // 4. Envia para o Arduino (Nomes + Reset de Gols/Tempo)
    const json = JSON.stringify({ equipes: equipesParaEnviar });
    await writer.write(encoder.encode(json + "\n"));
    
    await new Promise(r => setTimeout(r, 100));
    const resetComando = JSON.stringify({ comando: "reset_gols" });
    await writer.write(encoder.encode(resetComando + "\n"));
    writer.releaseLock();
    
    // 5. ATUALIZAÇÃO VISUAL (Só acontece agora!)
    mostrarEsconder("enviar-proximo-jogo", 'none');
    mostrarEsconder("mensagem-fixa", 'none'); // Remove o "FIM DE JOGO" da tela
    mostrarEsconder("iniciarJogo", 'block');
    document.getElementById("tempo").textContent = "00:00";
    mudarSpan("1º TEMPO");

    // Reconstroi os cards com os novos nomes
    const container = document.getElementById("jogos");
    container.innerHTML = ""; 
    for (let i = 0; i < jogoDia; i++) {
        let idxBase = (jogoAtualIndice + i) * 2; 
        if (equipes[idxBase] && equipes[idxBase + 1]) {
            const div = document.createElement("div");
            div.className = "jogo";
            div.appendChild(criarSpan('equipe', equipes[idxBase]));
            div.appendChild(criarSpan('placar', '0 x 0'));
            div.appendChild(criarSpan('equipe', equipes[idxBase + 1]));
            container.appendChild(div);
        }
    }
    
    console.log("Transição concluída para o próximo jogo.");
}

function atualizarPlacarLocal(){
  pegarJogosAtuais().forEach(jogoAtual => {
    jogos.forEach(jogo => {
      if(jogo.equipeMandante === jogoAtual.equipeMandante && jogo.equipeVisitante === jogoAtual.equipeVisitante){
        jogo.golMandante = jogoAtual.golMandante
        jogo.golVisitante = jogoAtual.golVisitante
      }
    })
  })
}

function pegarJogosAtuais(){
  let jogosAtuais = [];
  let jogosContainer = document.querySelectorAll(".jogo");
  jogosContainer.forEach(jogo => {
    let equipeMandante = jogo.querySelectorAll("span")[0].textContent;
    let placar = jogo.querySelectorAll("span")[1].textContent.split(" x ");
    let golMandante = parseInt(placar[0]);
    let golVisitante = parseInt(placar[1]);
    let equipeVisitante = jogo.querySelectorAll("span")[2].textContent;
    jogosAtuais.push({equipeMandante: equipeMandante, golMandante: golMandante, equipeVisitante: equipeVisitante, golVisitante: golVisitante})
  })
  return jogosAtuais
}

function mostrarTabela() {
  // Mostra a div da tabela
  mostrarEsconder("tabela", "flex");
  
  let tabelaCorpo = document.getElementById("corpo-tabela");
  if (!tabelaCorpo) return;
  
  tabelaCorpo.innerHTML = ""; // Limpa a tabela atual

  jogos.forEach(jogo => {
    let linha = document.createElement("tr");
    
    // Criamos as colunas com os valores atuais do array 'jogos'
    linha.appendChild(criarTd(jogo.equipeMandante));
    linha.appendChild(criarTd(jogo.golMandante ?? 0));
    linha.appendChild(criarTd(`x`));
    linha.appendChild(criarTd(jogo.golVisitante ?? 0));
    linha.appendChild(criarTd(jogo.equipeVisitante));
    
    tabelaCorpo.appendChild(linha);
  });
  console.log("Tabela atualizada com sucesso.");
}

function criarTd(texto){
  let td = document.createElement("td");
  td.textContent = texto;
  return td;
}

// tratar evento
function tratarEvento(data) {
  if(document.getElementById("jogos").querySelectorAll(".jogo").length > 0){
    if (data.evento === "start") {
      console.log("Jogo iniciado pelo Arduino!");
      
      // --- ADICIONE ESTA PARTE ---
      // Se o array de jogos estiver vazio, precisamos criá-lo 
      // com base nas equipes que você já digitou no site
      if (jogos.length === 0 && equipes.length >= 2) {
        criarJogos(); 
        console.log("Jogos gerados automaticamente no Start físico.");
      }
      // ---------------------------

      modoTela = "jogo";
      controlarBotaoInicio(true);
      // 1. Atualiza o estado interno
      modoTela = "jogo";
      
      // 2. Bloqueia o botão de início no site para não clicar duas vezes
      controlarBotaoInicio(true);
      
      // 3. Sincroniza o tempo (1º ou 2º tempo)
      if (data.tempoAtual !== undefined) {
        tempoAtualGlobal = data.tempoAtual;
      }
      
      // 4. Se for o início do jogo (1º tempo), garante que a tela de jogo apareça
      // Isso esconde as configurações e mostra o placar
      mostrarDiv('adicionarEquipe', 'none');
      mostrarDiv('configuracao', 'none');
      mostrarDiv('mainJogo', 'flex');
      mostrarOcultarRelogio();
  
      // 5. Roda a animação sonora e visual
      animarEvento("start");
    }
    
    if (data.evento === "intervalo") {
      modoTela = "intervalo";
      controlarBotaoInicio(false);
      animarEvento("intervalo");
      textoBotao('Reiniciar Jogo');
    }
  
    if (data.evento === "fim_jogo") {
      modoTela = "fim";
      controlarBotaoInicio(false);
      animarEvento("fim_jogo");
      textoBotao('Iniciar Jogo');
      mostrarTabela();
      enviarProximoJogo();
    }
  
    if (data.evento === "gol_anulado") {
      console.log("Processando anulação para o jogador:", data.time);
      
      // 1. Identificar qual jogo (0 ou 1) e qual time (Mandante ou Visitante)
      let indexJogador = parseInt(data.time);
      let indexJogo = Math.floor(indexJogador / 2);
      let jogoAlvo = jogos[indexJogo];
  
      if (jogoAlvo) {
        // Se par (0,2) é mandante, se ímpar (1,3) é visitante
        if (indexJogador % 2 === 0) {
          if (jogoAlvo.golMandante > 0) jogoAlvo.golMandante--;
        } else {
          if (jogoAlvo.golVisitante > 0) jogoAlvo.golVisitante--;
        }
        
        // 2. Sincronizar o placar anterior para não disparar animação de gol errada depois
        if (placarAnterior[indexJogo]) {
          placarAnterior[indexJogo].golMandante = jogoAlvo.golMandante;
          placarAnterior[indexJogo].golVisitante = jogoAlvo.golVisitante;
        }
      }
  
      // 3. Chamar a animação que agora força a tabela
      mostrarGolAnulado();
      // FORÇAR ATUALIZAÇÃO DA TELA DE PLACAR
      mostrarDados({ jogos: jogos, tempo: document.getElementById("tempo").textContent });
      mostrarTabela();
    }
  
    if (data.evento === "btn_fisico_proximo") {
      const btnProximo = document.getElementById("enviar-proximo-jogo");
      const btnIniciar = document.getElementById("iniciarJogo");
      if (btnProximo && btnProximo.style.display !== "none") {
          proximoJogo(); 
      } else if (btnIniciar && btnIniciar.style.display !== "none" && !btnIniciar.disabled) {
          iniciarJogo();
      }
    }
  }
}

// evento animar
function animarEvento(tipo) {
  limparMensagem();
  const relogio = document.getElementById("tempo");

  if (tipo === "start") {
    modoTela = "jogo";
    if (relogio) relogio.style.display = "block"; // Mostra o relógio
    mudarSpan(`${tempoAtualGlobal}º TEMPO`);
    tocarSomWeb(600, 2);
    setTimeout(() => limparMensagem(), 1000);
    return;
  }

  if (tipo === "intervalo") {
    modoTela = "intervalo";
    if (relogio) relogio.style.display = "none"; // Oculta o relógio
    mudarSpan("INTERVALO");
    mostrarMensagemFixa("INTERVALO", "intervalo");
    tocarSomWeb(400, 3);
  }

  if (tipo === "fim_jogo") {
    modoTela = "fim";
    if (relogio) relogio.style.display = "none"; // Oculta o relógio
    mudarSpan("FIM DE JOGO");
    mostrarMensagemFixa("FIM DE JOGO", "fim");
    tocarSomWeb(300, 5);
  }
}

// texto botão
function textoBotao(texto){
  let botao = document.getElementById('iniciarJogo')
  botao.textContent = texto
}

// limpar mensagem
function limparMensagem() {
  if (telaStatus) {
    telaStatus.remove();
    telaStatus = null;
  }
  // Reforço: tenta buscar pelo ID caso a variável global tenha se perdido
  const msgExistente = document.getElementById("mensagem-fixa");
  if (msgExistente) {
    msgExistente.remove();
  }
}

// tocar som
function tocarSomWeb(frequencia, repeticoes) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  let tempo = ctx.currentTime;
  for (let i = 0; i < repeticoes; i++) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = frequencia;
    osc.type = "square";
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(tempo);
    osc.stop(tempo + 0.1);
    tempo += 0.2;
  }
}

// mensagem fixa
function mostrarMensagemFixa(texto, classe = "") {
  if (telaStatus) {
    telaStatus.remove();
  }
  const div = document.createElement("div");
  div.id = "mensagem-fixa";
  div.className = "gol-texto " + classe;
  div.textContent = texto;
  document.body.appendChild(div);
  telaStatus = div;
}

// anular gol
function mostrarGolAnulado() {
  // Remove mensagem anterior se houver
  limparMensagem();

  const div = document.createElement("div");
  div.className = "gol-texto anulado";
  div.textContent = "GOL ANULADO";
  document.body.appendChild(div);
  
  // Força a atualização da tabela com os valores que acabamos de subtrair
  mostrarTabela(); 

  setTimeout(() => {
    div.remove();
  }, 2000);
}

// limpar mensagem - Garante que o elemento saia do DOM
function limparMensagem() {
  if (telaStatus) {
    telaStatus.remove();
    telaStatus = null;
  }
  // Reforço: tenta buscar pelo ID caso a variável global tenha se perdido
  const msgExistente = document.getElementById("mensagem-fixa");
  if (msgExistente) {
    msgExistente.remove();
  }
}

function copiarPre() {
  const pre = document.querySelector("pre");
  
  const textarea = document.createElement("textarea");
  textarea.value = pre.innerText;
  
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  const span = document.getElementById("copiado")
  span.style.display = "block";
  setTimeout(() => {
    span.style.display = "none";
  }, 3000);
}


