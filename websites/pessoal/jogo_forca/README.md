# Jogo da Forca

📌 Descrição
Um jogo clássico da forca com uma temática especial inspirada em Star Wars, onde cada erro aproxima o jogador do lado sombrio.

🚀 Tecnologias
- HTML
- CSS
- JavaScript

🎯 Funcionalidades
- **Sorteio Aleatório:** Sistema de escolha randômica de palavras para cada nova partida a partir de um banco de dados interno.
- **Mecânica de Revelação (Star Wars):** Diferente da forca tradicional, o personagem (Darth Vader) é revelado progressivamente a cada erro, removendo camadas que o ocultam.
- **Gestão de Chutes:** Registro e exibição em tempo real de todas as letras já tentadas, evitando repetições desnecessárias.
- **Palpite da Palavra:** Após 3 tentativas, o jogador libera um campo especial para tentar adivinhar a palavra completa de uma vez, adicionando uma camada estratégica ao jogo.
- **Interface Dinâmica:** Manipulação de visibilidade de elementos (inputs, botões e partes do "boneco") via JavaScript conforme o progresso do jogo.
- **Feedback de Jogo:** Mensagens claras de vitória ou derrota, com a revelação da palavra correta ao final da partida.
- **Sistema de Reinício:** Função de reset que limpa o estado do jogo e restaura a interface visual sem necessidade de recarregar a página.

🖥️ Demonstração
Link do projeto online: https://clovisbalreira.github.io/portfolio/websites/pessoal/jogo_forca/index.html

<!-- 📸 Imagens -->

▶️ Como rodar
1. Clone o repositório
2. Abra o arquivo index.html

📚 Aprendizados
- **Lógica de Programação e Estado:** Implementação de regras de negócio para gerenciar tentativas, erros, vitórias e derrotas de forma consistente.
- **Manipulação do DOM:** Uso intensivo de `querySelector` e criação dinâmica de elementos (`createElement`) para atualizar a interface em tempo real.
- **Tratamento de Arrays e Strings:** Aplicação de métodos modernos como `forEach`, `filter`, `fill`, `includes` e `split` para processar dados.
- **Uso de ES6+:** Utilização de recursos como `Set` para garantir a unicidade no histórico de letras e Template Literals para seletores dinâmicos.
- **Experiência do Usuário (UX):** Foco em usabilidade, implementando `input.focus()`, limpeza automática de campos e feedbacks visuais imediatos.
- **CSS e Posicionamento:** Uso de `position: absolute` e camadas de sobreposição para criar o efeito visual de revelação do personagem.
- **Responsividade:** Ajuste de layout via Media Queries para garantir uma boa experiência em dispositivos móveis e desktops.
