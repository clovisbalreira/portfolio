# 📅 Calendário Futebol Brasileiro

Este é um projeto web que exibe o calendário do futebol brasileiro de forma visual e interativa. Ele permite alternar entre o calendário atual, um calendário modificado e o calendário de 2026, destacando as datas dos campeonatos nacionais.

## 🔍 Funcionalidades

- Visualização completa do calendário do futebol brasileiro em formato de grade (tipo calendário mensal).
- Destaque visual para os dias com campeonatos.
- Tabela detalhada com fases e datas de cada campeonato.
- Alternância entre três tipos de calendário:
  - Calendário Atual (2025)
  - Calendário Modificado (2025)
  - Calendário 2026

🛠 Tecnologias Utilizadas
HTML5

CSS3 (com layout responsivo e gradientes)

JavaScript (ESModules)

Padrão MVC simplificado

🧠 Organização do Código
main.js: ponto de entrada do projeto.

campeonato.js: armazena os dados dos campeonatos (calendário atual, modificado e de 2026).

mostrarCalendario.js: renderiza visualmente o calendário na tela.

listaCampeonatos.js: cria a lista de campeonatos e a tabela com fases e datas.

apagarTabela.js: função auxiliar para limpar a tabela.

mouseLeave.js: controla exibição de detalhes dos campeonatos ao passar o mouse.

📅 Dados dos Campeonatos
Os dados dos campeonatos são armazenados em arrays de objetos, contendo:

Nome do campeonato

Fases

Datas por fase

Cores para destaque visual

✅ Responsividade
O site é responsivo e se adapta a telas menores, mantendo a organização dos dados e a interatividade.