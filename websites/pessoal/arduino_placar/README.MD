🏟️  Placar Eletrônico Interativo com Arduino & Web Serial

  Este projeto é um sistema de placar esportivo completo que integra Hardware (Arduino) e Software (Interface Web) em tempo real. Ele permite gerenciar        
  torneios, controlar o tempo de jogo, marcar gols via botões físicos e até anular gols através de um sistema de "VAR".

  🚀 Funcionalidades

  💻 Interface Web (Dashboard)
   - Conexão Direta: Utiliza a API Web Serial para comunicar com o Arduino diretamente pelo navegador (Chrome/Edge).
   - Gerenciamento de Equipes: Adicione de 2 a 12 equipes e gere automaticamente a tabela de jogos.
   - Configuração Personalizada: Defina o tempo de partida, se o relógio deve ser exibido e a quantidade de jogos simultâneos.
   - Feedback Visual e Sonoro: Animações na tela e alertas sonoros para Gols, Intervalo e Fim de Jogo.
   - Tabela em Tempo Real: Uma tabela dinâmica que registra o histórico de todos os confrontos do dia.

  🤖 Automação Arduino (Firmware)
   - Controle Físico: Botões dedicados para iniciar/passar jogos e marcar gols para até 4 jogadores/times.
   - Lógica de VAR (Anulação): Após um gol ser marcado, o sistema abre uma janela de 5 segundos. Se o adversário pressionar seu botão, o gol é anulado (com    
     aviso sonoro e visual).
   - Buzzer Inteligente: Alertas sonoros não-bloqueantes para diferentes estados do jogo.
   - Cronômetro de Precisão: Gerenciamento interno de tempo com troca automática para 2º tempo e encerramento.

  🛠️  Hardware Necessário


  ┌──────────────────────┬──────────────┬────────────────────────────────────────────────┐
  │ Componente           │ Pino Arduino │ Descrição                                      │
  ├──────────────────────┼──────────────┼────────────────────────────────────────────────┤
  │ Buzzer               │ 2            │ Alertas sonoros                                │
  │ Botão Início/Proximo │ 8            │ Inicia a partida ou avança para o próximo jogo │
  │ Botão Jogador 1      │ 9            │ Marca gol para a Equipe A                      │
  │ Botão Jogador 2      │ 10           │ Marca gol para a Equipe B                      │
  │ Botão Jogador 3      │ 11           │ Marca gol para a Equipe C (se configurado)     │
  │ Botão Jogador 4      │ 12           │ Marca gol para a Equipe D (se configurado)     │
  └──────────────────────┴──────────────┴────────────────────────────────────────────────┘


  Nota: Todos os botões utilizam INPUT_PULLUP, conecte um lado ao pino e o outro ao GND.

  📖 Como Usar

   1. Arduino: Faça o upload do arquivo arduino.ino para sua placa (Uno, Mega, Nano, etc).
   ![Esquema Arduino](./img/arduino.png)
   2. Montagem: Conecte os botões e o buzzer conforme a tabela de hardware acima.
   3. Interface Web: Abra o arquivo index.html em um navegador moderno (Chrome ou Edge recomendados).
   4. Conexão:
       - Clique em "Conectar Arduino" e selecione a porta serial da sua placa.
       - Configure o tempo de jogo e a quantidade de equipes.
   5. O Jogo:
       - Adicione o nome das equipes e clique em "Criar Jogo".
       - Use o botão físico (Pino 8) ou o botão na tela para dar o Start.
       - Marque os gols pelos botões físicos. Se precisar anular, o oponente tem 5 segundos para apertar o botão dele!

  📡 Protocolo de Comunicação (JSON)

  O projeto utiliza mensagens JSON via Serial (9600 baud) para garantir que Web e Arduino estejam sempre em sincronia:

   - Web -> Arduino: Envia comandos de start, configuracao, equipes e reset_gols.
   - Arduino -> Web: Envia eventos de gol_anulado, intervalo, fim_jogo, além do estado atual do tempo e placares em cada segundo.
   ![Esquema Arduino](./img/tela-site.png)