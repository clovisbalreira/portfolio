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
    { id: 'gustavo-netzke', nome: 'Gustavo Netzke', imagem: 'Gutoneitzke', status: true},
    { id: 'lira', nome: 'Lira', imagem: '', status: false},
    { id: 'mayara-cardoso', nome: 'Mayara Cardoso', imagem: 'mayaracardoso', status: false},
    { id: 'mayk-brito', nome: 'Mayk Brito', imagem: 'maykbrito', status: false},
    { id: 'michele-ambrosio', nome: 'Michele Ambrosio', imagem: 'micheleambrosio', status: false},
    { id: 'neri-netzke', nome: 'Neri Netzke', imagem: '', status: false},
    { id: 'paulo-silveira', nome: 'Paulo Silveira', imagem: 'peas', status: false},
    { id: 'rafaella-ballerini', nome: 'Rafaella Ballerini', imagem: 'rafaballerini', status: false},
    { id: 'ramiro-lobo', nome: 'Ramiro Lobo', imagem: 'RamiroFabricioLobo', status: false},
    { id: 'ricardo-roberto', nome: 'Ricardo e Roberto', imagem: 'devemdobro', status: false}
]

let escolas = [
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
    { id: 'rocketseat', nome: 'Rocketseat', imagem: 'Rocketseat', status: false},
    { id: 'sujeito-programador', nome: 'Sujeito Programador', imagem: 'sujeitoprogramador', status: false},
    { id: 'varos', nome: 'Varos', imagem: '', status: false}
]

let webSites = [
    {nome : 'Relógios', descricao : 'Este projeto apresenta um conjunto de relógios com funcionalidades digitais, analógicas e de cronômetro. Utilizando tecnologias web como HTML, CSS e JavaScript, o projeto oferece uma visão interativa e dinâmica do tempo, permitindo aos usuários visualizarem as horas em formatos diferentes e utilizarem um cronômetro com funções de início, pausa, marcação e reinício.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[0], instrutores[7]], 'Escolas' : escolas[0], site : './websites/relogio/index.html'},
    {nome : 'To Do List', descricao : 'O projeto To Do List é uma aplicação web simples projetada para permitir aos usuários criar e gerenciar uma lista de tarefas. Os usuários podem adicionar novas tarefas, visualizar as tarefas existentes e remover tarefas concluídas da lista. Este projeto foi criado com o objetivo de oferecer uma interface clara e intuitiva para a gestão de tarefas diárias.', 'Linguagem' : linguagens[1], 'Instrutores' : [instrutores[0], instrutores[7]], 'Escolas' : escolas[0], site : './websites/to-do-list/index.html'}
]