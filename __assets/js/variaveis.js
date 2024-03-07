let linguagens = [
    { id: 'html-css', nome: 'HTML e CSS', imagem: 'html_css.png', status: false},
    { id: 'html-css-javscript', nome: 'HTML, CSS e JavaScript', imagem: 'html_css_javascript.png', status: true},
    { id: 'javascript', nome: 'Javascript', imagem: 'javascript.png', status: false},
    { id: 'php', nome: 'P.H.P.', imagem: 'php.png', status: false},
    { id: 'mysql', nome: 'MySql', imagem: 'mysql.png', status: false},
    { id: 'react', nome: 'React', imagem: 'react.png', status: false},
    { id: 'java', nome: 'Java', imagem: 'java.png', status: false},
    { id: 'wordpress', nome: 'WordPress', imagem: 'wordpress.png', status: false},
    { id: 'flutter', nome: 'Flutter', imagem: 'flutter.png', status: false},
    { id: 'python', nome: 'Python',  imagem: 'python.png', status: false},
    { id: 'arduino', nome: 'Arduino', imagem: 'arduino.png', status: false},
    { id: 'android', nome: 'Android', imagem: 'android.png', status: false},
    { id: 'kotlin', nome: 'Kotlin', imagem: 'kotlin.png', status: false},
    { id: 'vitejs', nome: 'Vite', imagem: 'vitejs.png', status: false},
    { id: 'designer', nome: 'Designer gráfico', imagem: 'arquivo.png', status: false}
]

let instrutores = [
    { id: 'clovis', nome: 'Clóvis', imagem: 'clovisbalreira', status: false},
    { id: 'biro', nome: 'Biro', imagem: 'birobirobiro', status: false},
    { id: 'daniel', nome: 'Daniel', imagem: '', status: false},
    { id: 'diogo-m-mainardes', nome: 'Diogo M Mainardes', imagem: 'diogomainardes', status: false},
    { id: 'fernanda-degolin', nome: 'Fernanda Degolin', imagem: 'fernandadegolin', status: false},
    { id: 'guilherme-lima', nome: 'Guilherme Lima', imagem: 'guilhermeonrails', status: false},
    { id: 'gustavo-guanabara', nome: 'Gustavo Guanabara', imagem: 'professorguanabara', status: false},
    { id: 'gustavo-neitzke', nome: 'Gustavo Neitzke', imagem: 'Gutoneitzke', status: true},
    { id: 'lira', nome: 'Lira', imagem: '', status: false},
    { id: 'mayara-cardoso', nome: 'Mayara Cardoso', imagem: 'mayaracardoso', status: false},
    { id: 'mayk-brito', nome: 'Mayk Brito', imagem: 'maykbrito', status: true},
    { id: 'michele-ambrosio', nome: 'Michele Ambrosio', imagem: 'micheleambrosio', status: false},
    { id: 'neri-netzke', nome: 'Neri Netzke', imagem: '', status: false},
    { id: 'paulo-silveira', nome: 'Paulo Silveira', imagem: 'peas', status: false},
    { id: 'rafaella-ballerini', nome: 'Rafaella Ballerini', imagem: 'rafaballerini', status: false},
    { id: 'ramiro-lobo', nome: 'Ramiro Lobo', imagem: 'RamiroFabricioLobo', status: false},
    { id: 'ricardo-roberto', nome: 'Ricardo e Roberto', imagem: 'devemdobro', status: false}
]

let escolas = [
    { id: 'nenhum', nome: 'Nenhum', imagem: 'nenhum', status: false},
    { id: 'pessoal', nome: 'Pessoal', imagem: 'clovisbalreira', status: true},
    { id: 'alura', nome: 'Alura', imagem: 'alura-cursos', status: false},
    { id: 'celke', nome: 'Celke', imagem: '', status: false},
    { id: 'curso-em-video', nome: 'Curso em video', imagem: 'cursoemvideo', status: false},
    { id: 'deitel', nome: 'Deitel', imagem: '', status: false},
    { id: 'dev-dobro', nome: 'Dev Dobro', imagem: 'devemdobro', status: false},
    { id: 'dio', nome: 'Dio', imagem: 'digitalinnovationone', status: false},
    { id: 'estudonauta', nome: 'Estudonauta', imagem: 'estudonauta', status: false},
    { id: 'hashtag', nome: 'Hashtag', imagem: '', status: false},
    { id: 'informaticon', nome: 'Informaticon', imagem: '', status: false},
    { id: 'onebitcode', nome: 'Onebitcode', imagem: '', status: false},
    { id: 'rocketseat', nome: 'Rocketseat', imagem: 'Rocketseat', status: true},
    { id: 'sujeito-programador', nome: 'Sujeito Programador', imagem: 'sujeitoprogramador', status: false},
    { id: 'varos', nome: 'Varos', imagem: '', status: false}
]

let webSites = [
    {nome : 'Relógios', descricao : 'Este projeto apresenta um conjunto de relógios com funcionalidades digitais, analógicas e de cronômetro. Utilizando tecnologias web como HTML, CSS e JavaScript, o projeto oferece uma visão interativa e dinâmica do tempo, permitindo aos usuários visualizarem as horas em formatos diferentes e utilizarem um cronômetro com funções de início, pausa, marcação e reinício.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[7]], 'Escolas' : escolas[0], site : './websites/gustavo-neitzke/relogio/index.html', github : 'gustavo-neitzke/relogio/'},
    {nome : 'To Do List', descricao : 'O projeto To Do List é uma aplicação web simples projetada para permitir aos usuários criar e gerenciar uma lista de tarefas. Os usuários podem adicionar novas tarefas, visualizar as tarefas existentes e remover tarefas concluídas da lista. Este projeto foi criado com o objetivo de oferecer uma interface clara e intuitiva para a gestão de tarefas diárias.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[7]], 'Escolas' : escolas[0], site : './websites/gustavo-neitzke/to-do-list/index.html', github : 'gustavo-neitzke/to-do-list/'},
    {nome : 'Circulo de Progresso', descricao : 'Este projeto é uma simples demonstração de um círculo de progresso implementado com HTML, CSS e JavaScript. Ideal para visualizar progressos, como o carregamento de uma página ou o progresso de uma tarefa. A interface permite ao usuário inserir um valor numérico que ajusta o progresso do círculo correspondente.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[7]], 'Escolas' : escolas[0], site : './websites/gustavo-neitzke/circulo-progresso/index.html', github : 'gustavo-neitzke/circulo-progresso/'},
    {nome : 'Apresenta', descricao : 'Este projeto é um portfólio pessoal que apresenta informações profissionais, habilidades e projetos do desenvolvedor. Destina-se a empregadores potenciais, colegas de profissão e ao público em geral interessado em conhecer o trabalho do desenvolvedor. O site é dividido em três seções principais: "Apresentação", "Links" e "Imagens", cada uma acessível através de sua respectiva página. Além disso, inclui uma seção de "Currículo" detalhada, que pode ser visualizada em diferentes idiomas, enriquecendo a experiência do usuário.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[0]], 'Escolas' : escolas[1], site : './websites/pessoal/apresentacao/index.html', github : 'pessoal/apresentacao/'},
    {nome : 'Pinterest', descricao : 'Este projeto é uma simples réplica da interface do Pinterest, focando em demonstrar habilidades de front-end através da construção de um layout responsivo e atraente. O projeto visa replicar a experiência visual do Pinterest, permitindo aos usuários visualizar uma variedade de imagens organizadas em uma grade dinâmica.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/pinterest/index.html', github : 'rocketseat/pinterest/'},
    {nome : 'You Tube', descricao : 'Este projeto é uma representação simplificada da página inicial do YouTube, focando em replicar o layout visual e a estrutura básica do site original. O objetivo é praticar habilidades de HTML, CSS e JavaScript, além de trabalhar com ícones externos através da biblioteca Ionicons.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/you-tube/index.html', github : 'rocketseat/you-tube/'},
    {nome : 'Player - Modelo 1', descricao : 'O projeto de player de música web personalizado, que combina tecnologias HTML, CSS e JavaScript para criar uma experiência de usuário interativa e visualmente atraente. Utilizando um design responsivo e moderno, o player é capaz de reproduzir músicas, permitindo ao usuário controlar a reprodução, ajustar o volume e navegar entre as faixas disponíveis. Aqui está uma descrição detalhada de seus componentes e funcionalidades', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/player/index.html', github : 'rocketseat/player/'},
    {nome : 'Player - Modelo 2', descricao : 'Este projeto consiste em um player de música personalizável e responsivo, desenvolvido com HTML, CSS e JavaScript. O design foca na simplicidade e na eficiência, apresentando controles de reprodução intuitivos, exibição de capas de álbuns e informações sobre a faixa atual, como nome da música e artista. Além disso, o player suporta a troca de faixas com botões de avançar e retroceder, permitindo aos usuários explorar diferentes músicas com facilidade.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/bora-codar/player/index.html', github : 'rocketseat/bora-codar/player/'},
    {nome : 'Produto com Animação', descricao : 'Este projeto é uma página web simples que permite aos usuários visualizar um produto (neste caso, um sofá) em duas formas: uma imagem estática e uma animação. O usuário pode alternar entre a imagem estática e a animação clicando em botões dedicados. O design é responsivo e utiliza uma paleta de cores suaves, proporcionando uma experiência de usuário agradável e acessível.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/bora-codar/produto-cartao/index.html', github : 'rocketseat/bora-codar/produto-cartao/'},
    {nome : 'Botões Dinâmicos', descricao : 'Este projeto demonstra a implementação de botões interativos com efeitos visuais e de cursor usando HTML, CSS e JavaScript. Os usuários podem interagir com os botões para ver mudanças em sua aparência e o comportamento do cursor, proporcionando uma experiência de usuário mais rica e interativa.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/bora-codar/botoes-cursores/index.html', github : 'rocketseat/bora-codar/botoes-cursores/'},
    {nome : 'Chat', descricao : 'Este projeto consiste em uma interface de chat virtual desenvolvida com HTML, CSS e JavaScript, apresentando funcionalidades básicas para a comunicação entre um atendente e um cliente. O objetivo é simular um chat de atendimento ao cliente com respostas pré-definidas e interatividade limitada.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/bora-codar/chat/index.html', github : 'rocketseat/bora-codar/chat/'},
    {nome : 'Calculadora Moderna', descricao : 'Este projeto consiste em uma calculadora web estilizada e funcional que permite aos usuários realizar operações básicas de matemática, como adição, subtração, multiplicação e divisão, além de recursos adicionais como porcentagem e inversão de sinal. Desenvolvida com HTML, CSS e JavaScript, esta calculadora possui um design moderno e é responsiva, adaptando-se a diferentes tamanhos de tela.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[10]], 'Escolas' : escolas[12], site : './websites/rocketseat/bora-codar/calculadora/index.html', github : 'rocketseat/bora-codar/calculadora/'}
]