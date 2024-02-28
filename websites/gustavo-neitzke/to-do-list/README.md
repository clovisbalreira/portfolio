Projeto To Do List

O projeto To Do List é uma aplicação web simples projetada para permitir aos usuários criar e gerenciar uma lista de tarefas. Os usuários podem adicionar novas tarefas, visualizar as tarefas existentes e remover tarefas concluídas da lista. Este projeto foi criado com o objetivo de oferecer uma interface clara e intuitiva para a gestão de tarefas diárias.
Tecnologias Utilizadas

    HTML5: Estrutura da página e elementos da interface do usuário.
    CSS3: Estilização da página, incluindo cores, layout e transições.
    JavaScript: Lógica de adição, validação e remoção de tarefas, além da interação com o armazenamento local do navegador (LocalStorage) para persistência dos dados.
    LocalStorage: Utilizado para armazenar as tarefas adicionadas pelos usuários, permitindo que as informações persistam entre as sessões do navegador.
    Fonts: Importação de fontes personalizadas via CSS para melhorar a estética do texto na interface do usuário.

Estrutura do Código
HTML

O arquivo HTML (index.html) define a estrutura básica da página, incluindo o input para novas tarefas, o botão para adicionar tarefas e a lista onde as tarefas são exibidas.
CSS

O arquivo CSS (style.css) contém todas as regras de estilo aplicadas ao projeto, incluindo variáveis de cores, estilos de texto, layout da página e animações. Algumas das principais características incluem:

    Uso de variáveis CSS para facilitar a manutenção e a customização das cores.
    Estilização específica para diferentes estados de elementos interativos (por exemplo, o hover do botão).
    Importação de fontes externas para melhorar a estética.

JavaScript

O script JavaScript (script.js) contém toda a lógica de funcionamento da lista de tarefas, incluindo:

    mostrarErro(frase): Exibe mensagens de erro quando o usuário tenta adicionar uma tarefa vazia ou duplicada.
    validateIfExistsNewTask(): Valida se a tarefa a ser adicionada já existe na lista.
    newTask(): Adiciona uma nova tarefa à lista após validação.
    showValues(): Exibe as tarefas armazenadas no LocalStorage na lista da interface do usuário.
    removeItem(data): Remove uma tarefa específica da lista e atualiza o LocalStorage.

Como Usar

Para usar o projeto, simplesmente abra o arquivo index.html em um navegador moderno. Você será capaz de:

    Adicionar uma nova tarefa digitando no campo de texto e clicando no botão de adição ou pressionando Enter.
    Visualizar as tarefas adicionadas na lista abaixo do campo de entrada.
    Remover tarefas da lista clicando no botão de remoção ao lado de cada tarefa.