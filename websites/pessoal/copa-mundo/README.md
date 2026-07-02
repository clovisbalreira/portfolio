# Copa do Mundo 2026 — Projeto Técnico

Este projeto é uma aplicação web estática que simula um campeonato de futebol no formato da Copa do Mundo 2026.

## Visão Geral

- Layout responsivo com visualização para dispositivos móveis e desktop.
- Dados da competição construídos com JavaScript modular e consumidos por componentes DOM.
- Arquitetura organizada em camadas: `mvc/model`, `mvc/controll`, `mvc/view`, `services`, `componentes`, `utils`.
- Não há dependências externas: HTML, CSS e JavaScript puros.

## Estrutura do Projeto

- `index.html`
  - Entrada principal da aplicação.
  - Importa estilos e o script `./js/main.js` como módulo.

- `css/`
  - `style.css` — reset global, plano de fundo e estilos base.
  - `header.css` — estilos do cabeçalho e seção de apresentação.
  - `tabela.css` — estilos das tabelas de classificação.
  - `cartao-jogo.css` — cards de jogos e placares.
  - `celular.css` — regras de exibição para versão mobile.
  - `computador.css` — regras de exibição para versão desktop.
  - `computador-16-avos.css` — estilo específico para fase de 16 avos no desktop.
  - `classificacao-goleadores.css` — visualização de goleadores.
  - `grupo-participantes48-grupos12.css` — layout para fases de grupos.

- `img/`
  - Imagens de bandeiras, mascotes e eventuais gráficos usados na interface.

- `js/main.js`
  - Ponto de entrada JS.
  - Executa a montagem do campeonato e renderiza a interface com `mostrarCampeonato`.

- `js/mvc/`
  - `model/` — classes de domínio e estruturas de campeonato.
  - `controll/` — definições de competições, seleções, países e dados estáticos.
  - `view/` — funções de montagem da interface para mobile e desktop.

- `js/services/`
  - Lógica de criação de jogos, classificação, ordenação, cálculos de estatísticas e geração de fases eliminatórias.
  - Contém regras de negócio do campeonato e atualização de resultados.

- `js/componentes/`
  - Funções utilitárias que constroem elementos do DOM com HTML dinâmico.
  - Exemplos: `criarTabela`, `criarPlacar`, `criarTopo`, `criarHeader`, `criarGols`.

- `js/utils/`
  - Lógicas auxiliares e inicialização do campeonato.
  - `CopaDoMundo2026()` popula participantes, cria fases e preenche resultados.

## Implementação Técnica

### Arquitetura MVC e Domínio

- `js/mvc/model/Campeonato.js`
  - Representa a entidade `Campeonato` com arrays de jogos, classificações e goleadores.

- `js/mvc/model/Etapas.js`
  - Classe base para orquestrar fases do campeonato.
  - Métodos principais:
    - `adicionarParticipante()`
    - `grupo()` — forma grupos e cria jogos de fase classificatória.
    - `placar()` — marca um jogo e atualiza estatísticas.
    - `faseEliminatoria()` — gera confrontos eliminatórios e cópia de objetos históricos.
    - `placarEliminatorio()` — processa jogos eliminatórios com prorrogação e penalidades.
    - `atualizarTudo()` — reorganiza classificações e ordena jogos.

- `js/mvc/model/formulas/Tabela48Equipes12GruposCom4Equipes.js`
  - Especialização de `Etapas` para um campeonato com 48 equipes e 12 grupos de 4.
  - Método `primeiraFase()` que inicializa a fase de grupos.

### Monetização de dados e fluxo de construção

- `js/utils/copaDoMundo/2026.js`
  - Filtra a competição `Copa do Mundo 2026` e adiciona participantes via `selecoes`.
  - Cria resultados de grupos programaticamente com `placar()`.
  - Gera fases eliminatórias: 16 avos, oitavas, quartas, semifinais, terceiro lugar e final.
  - Chama `atualizarTudo(ordemFases)` para recalcular classificações e ordenações.

- `js/utils/filtrarCampeonato.js`
  - Função utilitária para buscar a competição correta dentre as definições disponíveis.

### Lógica de resultados e classificação

- `js/services/estatisticasJogo.js`
  - Calcula gols, pontos e atualiza as estatísticas da equipe em cada jogo.

- `js/services/classificacao/`:
  - `classificacaoGrupo.js` — recalcúla classificação de cada grupo.
  - `classificacaoInterno.js` — agrupa classificações internas para o campeonato.
  - `criarClassificacoes.js` — inicializa classificações de equipes antes dos jogos.

- `js/services/melhoresTerceiros.js`
  - Identifica os melhores terceiros colocados para avançarem na fase eliminatória.

- `js/services/criarConfrontosEliminatorio.js`
  - Cria confrontos da chave eliminatória com base nos resultados das fases anteriores.

- `js/services/resultadoEliminatorio.js`
  - Registra resultados eliminatórios com condições de prorrogação e penalidades.
  - Atualiza fases seguintes de vencedor/perdedor.

- `js/services/ordenar/`:
  - `ordenarClassificacao.js` — ordenação de equipes por ordem de critérios.
  - `ordenarJogos.js` — ordenação cronológica de jogos.
  - `ordenarDatasJogos.js` — localização e ordenação da data dos jogos.

### Interface e renderização

- `js/mvc/view/mostrarCampeonato.js`
  - Carrega `header`, `telacelular`, `telacomputador` e painel de goleadores.

- `js/mvc/view/mostrarTelaCelular.js`
  - Gera a interface específica para dispositivos móveis.
  - Renderiza grupos, jogos, placares, gols e informações de cada partida.

- `js/mvc/view/mostrarTelaComputador.js`
  - Gera a interface específica para desktop.
  - Exibe tabelas de grupos e fases eliminatórias de forma adaptada.

- Componentes DOM:
  - `js/componentes/criarTabela.js` — monta `<table>` para tabelas de classificação, goleadores e melhores terceiros.
  - `js/componentes/criarPlacar.js` — monta placares, resultados e extrações de gols em prorrogação.
  - `js/componentes/criarGols.js` — lista eventos de gols por partida.
  - `js/componentes/criarHeader.js` — cria seção de apresentação com sede e mascote.

## Detalhes de configuração

- Navegação: `index.html` referencia `./js/main.js` com `type="module"` e `defer`.
- Status dos jogos:
  - `jogo.jogado` determina renderização de placares.
  - `golNormalEquipeCasa`, `golNormalEquipeFora`, `golProrrogacaoEquipeCasa`, `golProrrogacaoEquipeFora`, `golPenaltiEquipeCasa`, `golPenaltiEquipeFora` para resultados especiais.
- Modelagem de participantes:
  - `js/mvc/controll/selecoes.js` define seleções.
  - `js/mvc/controll/paises.js` define objetos de país e recursos visuais.
  - `js/mvc/controll/confederacoes*.js` fornecem federações e continentes.