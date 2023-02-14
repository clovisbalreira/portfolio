var linguagens = [{ nome: 'HTML, CSS e JavaScript', descricao: 'Projetos criado em HTML, CSS e JavaScript.', imagem: 'img/html_css_javascript.png' },
{ nome: 'HTML e CSS', descricao: 'Projetos com prioridade HTML e CSS.', imagem: 'img/html_css.png' },
{ nome: 'Javascript', descricao: 'Projetos com prioridade em HTML e JavaScript.', imagem: 'img/javascript.png' },
{ nome: 'P.H.P.', descricao: 'Projetos criado em P.H.P.', imagem: 'img/php.png' },
{ nome: 'React', descricao: 'Projetos criado em React.', imagem: 'img/react.png' },
{ nome: 'WordPress', descricao: 'Projetos criado em WordPress.', imagem: 'img/wordpress.jpg' },
{ nome: 'Java', descricao: 'Projetos criado em Java.', imagem: 'img/java.png' },
{ nome: 'Flutter', descricao: 'Projetos criado em Flutter.', imagem: 'img/flutter.png' },
{ nome: 'Python', descricao: 'Projetos criado em Python.', imagem: 'img/python.png' },
{ nome: 'Designer gráfico', descricao: 'Projetos de designer gráfico.', imagem: 'img/arquivo.jpg' }
]

var tipos = [
    { nome: 'Site', descricao: 'Tipo site podendo ser o hospedado no servidor.' }, 
    { nome: 'Código', descricao: 'Tipo código podendo ver o código no gitHub.' }, 
    { nome: 'Site Código', descricao: 'Tipo site e código podendo ver o código do site no gitHub.' }
]

var modelos = [
    { nome: 'Dinâmico', descricao: 'Site onde o usúario pode interagir' }, 
    { nome: 'Jogo', descricao: 'Jogos interativos.' }, 
    { nome: 'Não Dinâmico', descricao: 'Site onde o usúario não pode interagir.' }, 
    { nome: 'Código', descricao: 'O usúario só pode ver o código no gitHub' }
]

var projetos = [
    { nome: 'Pessoal', descricao: 'Projeto pessoal.' }, 
    { nome: 'Replicado com mudança', descricao: 'Projeto replicado de um curso ou imersão com pequenas mudanças.' }, 
    { nome: 'Replicado', descricao: 'Projeto replicado de um curso ou imersão sem mudanças' }, 
    { nome: 'Desafio', descricao: 'Pequenos desafios propostos.' }
]

var tags = '#github #desenvolvimentoweb #desenvolvedores #frontend #desenvolvedorfrontend #projetos #oportunidadeprofissional #desenvolvedorjunior #junior #vagas #carreira #remoto'

var tagsLinguagem = ["#HTML #CSS #JAVASCRIPT","#HTML #CSS","#HTML #JAVASCRIPT","#php","#react #reactjs","#wordpress","#java","#flutter","#python","#designergráfico"]

var sites = [
    {titulo: 'Curso em vídeo', descricao: 'Projeto criado no modelo do curso em vídeo. Com mentoria de Gustavo Guanabara.', linguagem: linguagens[0], url: 'sites/html_css_javascript/curso_em_video_html_css_javascript/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #cursoemvideo #gustavoguanabara`},
    {titulo: 'Restaurante', descricao: 'Projeto criado no modelo para um restaurante.', linguagem: linguagens[0], url: 'sites/html_css_javascript/restaurante/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[0], tag: `${tagsLinguagem[0]} ${tags} #restaurante`},
    {titulo: 'Realidade Aumentada', descricao: 'Projeto pessoal criado com passe para mostrar a realidade aumentada.', linguagem: linguagens[0], url: 'sites/html_css_javascript/realidade_aumentada/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tagsLinguagem[0]} ${tags} #realidadeaumentada`},
    {titulo: 'Interface Netflix', descricao: 'Projeto criado no modelo da interface da netflix.', linguagem: linguagens[0], url: 'sites/html_css_javascript/recriando_interface_netflix/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #netflix`},
    {titulo: 'Desafio BemPaggo', descricao: 'Projeto criado no modelo do desafio BemPago.', linguagem: linguagens[0], url: 'sites/html_css_javascript/desafio-bemPaggo/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tagsLinguagem[0]} ${tags}`},
    {titulo: 'Imersão Dev - Alura - 2023', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tagsLinguagem[0]} ${tags} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini #7DaysOfCode`},
    {titulo: 'Imersão Dev - Alura', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tagsLinguagem[0]} ${tags} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini #7DaysOfCode`},
    {titulo: 'Multiverso Spider Man', descricao: 'Projeto criado no modelo da Dio. Com mentoria de Michele Ambrosio e Diogo M Mainardes.', linguagem: linguagens[0], url: 'sites/html_css_javascript/multiverso_spiderman/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #dio #digitalinnovationone`},
    {titulo: 'Cordel Moderno', descricao: 'Projeto criado no modelo do curso em vídeo. Com mentoria de Gustavo Guanabara.', linguagem: linguagens[0], url: 'sites/html_css/curso_em_video/desafios/d012/cordel.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[0]} #cursoemvideo #gustavoguanabara  #estudonauta`},
    {titulo: 'Calculadora de Média', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/calculadora_media.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[0]} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini`},
    { titulo: 'Mentalista', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/mentalista.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[0]} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini`},
    { titulo: 'Super Trunfo', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/super_trunfo.html', tipo: tipos[0], modelo: modelos[1], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[0]} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini`},
    { titulo: 'Tabela de classificação', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/tabela_classificacao.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[0]} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini`},
    { titulo: 'Aluraflix', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/alura_flix.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[0]} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini`},
    { titulo: 'Conversor de moedas', descricao: 'Projeto criado no modelo da imersão da alura. Com mentoria de paulo Silveira, Rafaella Ballerini e Guilherme Lima.', linguagem: linguagens[0], url: 'sites/html_css_javascript/alura_imersao_html/conversor_de_Moedas.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[0]} #alura #ImersãoDev #rafaellaballerini #paulosilveira #guilhermelima #comunidaderafaellaballerini`},
    { titulo: 'Dev midia', descricao: 'Projeto criado no modelo do desafio Dev midia.', linguagem: linguagens[0], url: 'sites/html_css_javascript/dev-midia/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tags} ${tagsLinguagem[0]}`},  
    //{titulo: 'Neri Netzke', descricao: 'Projeto criado no modelo da informaticon com exemplos de tags. Com mentoria de Neri Netzke.', linguagem: linguagens[0], url: 'sites/html_css_javascript/neri_neitzke/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Nao', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #informaticon #nerineitzke`},
    //{titulo: 'Imagem Sul', descricao: 'Projeto criado para vendas.', linguagem: linguagens[0], url: 'sites/html_css_javascript/imagemsul/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[0], tag: `${tagsLinguagem[0]} ${tags} `},
    //{titulo: 'Snake Game', descricao: 'Projeto criado no modelo do jogo Snake Game do celular.', linguagem: linguagens[0], url: 'sites/html_css_javascript/jogo_snake_game/index.html', tipo: tipos[0], modelo: modelos[1], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #games #jogos`},
    //{titulo: 'Jogo naves', descricao: 'Projeto criado no modelo do jogo de naves.', linguagem: linguagens[0], url: 'sites/html_css_javascript/jogo_naves/index.html', tipo: tipos[0], modelo: modelos[1], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #games #jogos`},
    //{titulo: 'Jogo Genius', descricao: 'Projeto criado no modelo do jogo de genius.', linguagem: linguagens[0], url: 'sites/html_css_javascript/jogo_genius/index.html', tipo: tipos[0], modelo: modelos[1], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #games #jogos`},
    //{titulo: 'Jogo Memoria', descricao: 'Projeto criado no modelo do jogo da memoria.', linguagem: linguagens[0], url: 'sites/html_css_javascript/jogo_memoria/index.html', tipo: tipos[0], modelo: modelos[1], status: 'não', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #games #jogos`},
    //{titulo: 'Jogo Scratch', descricao: 'Projeto criado no modelo do jogo da scratch.', linguagem: linguagens[0], url: 'sites/html_css_javascript/jogo_scratch/index.html', tipo: tipos[0], modelo: modelos[1], status: 'Sim', projeto: projetos[2], tag: `${tagsLinguagem[0]} ${tags} #games #jogos`},    {titulo: 'Curiosidades de Tecnologia', descricao: 'Projeto criado no modelo do curso em vídeo. Com mentoria de Gustavo Guanabara.', linguagem: linguagens[0], url: 'sites/html_css/curso_em_video/desafios/d010/android.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[0]} #cursoemvideo #gustavoguanabara  #estudonauta`},
    /*{ titulo: 'Rádio', descricao: 'Projeto pessoal de um modelo para a rádio.', linguagem: linguagens[0], url: 'sites/html_css_javascript/radio/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[0]} #cns`},*/
    { titulo: 'Apresentação', descricao: 'Projeto criado no modelo de apresentação', linguagem: linguagens[1], url: 'sites/html_css/apresentacao/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[1]}`},  
    { titulo: 'Bootstrap', descricao: 'Projeto criado no modelo com o framework bootstrap.', linguagem: linguagens[1], url: 'sites/html_css/bootstrap/', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[1]} #bootstrap`},
    { titulo: 'Projeto Dio', descricao: 'Projeto criado no modelo da projeto dio.', linguagem: linguagens[1], url: 'sites/html_css/projeto_dio/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[1]}`},    
    { titulo: 'Projeto capa instagram', descricao: 'Projeto criado no modelo da interface do login do instagram', linguagem: linguagens[1], url: 'sites/html_css/pagina_capa_instagram/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[1]}`},  
    { titulo: 'Segurança de T.I.', descricao: 'Projeto criado para informar a segurança de T.I.', linguagem: linguagens[1], url: 'sites/html_css/seguranca_de_ti/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[1]}`},  
    { titulo: 'Landing Page', descricao: 'Projeto criado no modelo Landing page. Com mentoria de Rafaella Balerine.', linguagem: linguagens[1], url: 'sites/html_css/rafaelaballerini/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[1]} #rafaellaballerini`},
    { titulo: 'Tags basicas', descricao: 'Demostração de uma tags HTML.', linguagem: linguagens[1], url: 'sites/html_css/tag/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[1]}`},  
    { titulo: 'Curso em video', descricao: 'Projeto criado no modelo do curso em vídeo. Com mentoria de Gustavo Guanabara.', linguagem: linguagens[1], url: 'sites/html_css/curso_em_video/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[1]} #cursoemvideo #gustavoguanabara  #estudonauta`},    
    { titulo: 'Array JavaScript', descricao: 'Demostração de arrays do javascript.', linguagem: linguagens[2], url: 'sites/javascript/array_javascript/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[2]}`},    
    { titulo: 'JavaScript Dom', descricao: 'Demostração de dom do javascript.', linguagem: linguagens[2], url: 'sites/javascript/javascript_dom/', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[2]}`},
    { titulo: 'Curso em video', descricao: 'Projeto criado no modelo do curso em vídeo. Com mentoria de Gustavo Guanabara.', linguagem: linguagens[2], url: 'sites/javascript/curso_em_video/index.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[2]} #cursoemvideo #gustavoguanabara  #estudonauta`},    
    { titulo: 'Map filter reduce', descricao: 'Demostração de Map filter reduce do javascript.', linguagem: linguagens[2], url: 'sites/javascript/map_filter_reduce/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[2]}`},    
    { titulo: 'JavaScript Exemplos', descricao: 'Demostração de exemplos do javascript.', linguagem: linguagens[2], url: 'sites/javascript/javaScript_exemplos/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[2]}`},    
    { titulo: 'Acender Lambada', descricao: 'Projeto criado no modelo do curso em vídeo. Com mentoria de Gustavo Guanabara.', linguagem: linguagens[2], url: 'sites/html_css_javascript/curso_em_video_html_css_javascript/acenderLambada.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[1], tag: `${tags} ${tagsLinguagem[2]} #cursoemvideo #gustavoguanabara  #estudonauta`},
    { titulo: 'Clube', descricao: 'Projeto pessoal para uma associação de futebol de mesa.', tipo: tipos[0], linguagem: linguagens[3], url: 'http://lucfm.000webhostapp.com/', modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[3]}`},
    { titulo: 'Projetos do professor Gustavo Guanabara', descricao: 'Projeto criado nos modelos do curso em vídeo e estudonauta. Com mentoria de Gustavo Guanabara.', tipo: tipos[0], linguagem: linguagens[3], url: 'https://clovis-estudonauta.000webhostapp.com/', modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[3]} #estudonauta`},    
    { titulo: 'P.H.P. ( Básico curso em vídeo )', descricao: 'Projeto criado no modelo do P.H.P. ( Básico curso em vídeo ). Com mentoria de Gustavo Guanabara.', tipo: tipos[0], linguagem: linguagens[3], url: 'https://clovis-estudonauta.000webhostapp.com/basico/index.php', modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[3]} #cursoemvideo #gustavoguanabara #estudonauta`},
    { titulo: 'P.H.P. ( P.O.O. curso em vídeo )', descricao: 'Projeto criado no modelo do P.H.P. ( P.O.O. curso em vídeo ). Com mentoria de Gustavo Guanabara.', tipo: tipos[0], linguagem: linguagens[3], url: 'https://clovis-estudonauta.000webhostapp.com/poo/index.php', modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[3]} #cursoemvideo #gustavoguanabara #estudonauta`},
    { titulo: 'MySql ( Básico curso em vídeo )', descricao: 'Projeto criado no modelo do MySql ( Básico curso em vídeo ). Com mentoria de Gustavo Guanabara.', tipo: tipos[0], linguagem: linguagens[3], url: 'https://clovis-estudonauta.000webhostapp.com/mysql/index.php', modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[3]} #cursoemvideo #gustavoguanabara #estudonauta`},
    { titulo: 'Estudonauta', descricao: 'Projeto criado no modelo do estudonauta. Com mentoria de Gustavo Guanabara.', tipo: tipos[0], linguagem: linguagens[3], url: 'https://clovis-estudonauta.000webhostapp.com/estudonauta/index.php', modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[3]} #estudonauta`},
    { titulo: 'Gestão de Super Mercado', descricao: 'Projeto criado para gestão de supermercado.', tipo: tipos[0], linguagem: linguagens[3], url: 'https://clovis-estudonauta.000webhostapp.com/supermercado/index.php', modelo: modelos[0], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[3]}`},
    { titulo: 'Informaticon', descricao: 'Projeto criado no modelo da informaticon. Com mentoria de Neri Neitzke.', linguagem: linguagens[3], url: 'https://php-clovis.000webhostapp.com/php-carrinho-neri/', tipo: tipos[0], modelo: modelos[0], status: 'Não', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[3]}`},    
    { titulo: 'Imersão React Alura - AluraCord - Matrix Cord', descricao: 'Projeto criado no modelo da imersão alura react. criando uma chat.', linguagem: linguagens[4],  url: 'https://aluracord-matrixchat.vercel.app/', tipo: tipos[0], modelo: modelos[0], status: 'Não', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[4]} #alura #ImersãoDev`},    
    { titulo: 'Lista de Tarefas', descricao: 'Projeto criando um modelo de lista de tarefas.', linguagem: linguagens[4], url: 'https://lista-tarefas-flame.vercel.app/', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[4]}`},    
    { titulo: 'Sistema Financeiro', descricao: 'Projeto criando um modelo de lista de financeiro.', linguagem: linguagens[4], url: 'https://sistema-financeiro-gold.vercel.app/', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[4]}`},    
    { titulo: 'Galeria', descricao: 'Projeto criando um modelo de galeria de fotos', linguagem: linguagens[4], url: 'https://galeria-three.vercel.app/', tipo: tipos[0], modelo: modelos[0], status: 'Não', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[4]}`},
    { titulo: 'Pesquisar e avaliar', descricao: 'Projeto pessoal para pesquisar e avaliar o que os deputados estão fazendo no congresso. Com api externa.', linguagem: linguagens[4], url: 'https://private-neon.vercel.app/', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[4]}`},    
    { titulo: 'Modelo curso em video - pizzaria fresco', descricao: 'Projeto criado no modelo do curso em vídeo - usando plugins. Com mentoria de Gustavo Guanabara Ramiro Lobo.', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/CursoEmVideo', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos
    [2], tag: `${tags} ${tagsLinguagem[5]} #cursoemvideo #gustavoguanabara  #estudonauta`},    
    /*{ titulo: 'Rádio modelo 001', descricao: 'Projeto pessoal para rádio - usando plugins ( v . 1 ).', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/Cns', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[5]}`},    
    { titulo: 'Rádio modelo 002', descricao: 'Projeto pessoal para rádio - usando plugins ( v . 2 ).', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/Cns%20v2.0', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[5]}`},    
    { titulo: 'Rádio modelo 003', descricao: 'Projeto pessoal para rádio - usando plugins ( v . 3 ).', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/Cns%20v3.0', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[5]}`},*/
    { titulo: 'Tema Malura', descricao: 'Projeto criado no modelo da alura - criação de tema', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/malura', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[5]} #alura`},    
    { titulo: 'Tema Intercambios', descricao: 'Projeto criado no modelo da alura - criação de tema', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/alura-intercambios', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[5]} #alura`},    
    { titulo: 'Desafio wp', descricao: 'Projeto criado no modelo do desafio desafio wp. Criação de tema', linguagem: linguagens[5], url: 'https://github.com/clovisbalreira/wordpress/tree/main/desafio-wp', tipo: tipos[2], modelo: modelos[3], status: 'Sim', projeto: projetos[3], tag: `${tags} ${tagsLinguagem[5]}`},    
    { titulo: 'Curso em video', descricao: 'Exercicios de java básico', linguagem: linguagens[6], url: 'https://github.com/clovisbalreira/curso_em_video_java_basico', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[6]}`},    
    { titulo: 'Curso em video java poo', descricao: 'Exercicios de java POO', linguagem: linguagens[6], url: 'https://github.com/clovisbalreira/java/tree/main/curso_em_video_java_poo', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[6]}`},    
    { titulo: 'Locadora', descricao: 'Projeto de uma locadora.', linguagem: linguagens[6], url: 'https://github.com/clovisbalreira/java/tree/main/locadora', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[6]}`},    
    { titulo: 'Digital Innovation', descricao: 'Exercicios de java básico', linguagem: linguagens[6], url: 'https://github.com/clovisbalreira/java/tree/main/locadora', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[6]}`},    
    { titulo: 'Cartao Flutter', descricao: 'Projeto de cartões. Com api externa.', linguagem: linguagens[7], url: 'https://github.com/clovisbalreira/flutter/tree/main/cartaoFlutter', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[7]}`},   
    { titulo: 'Pokemon', descricao: 'Projeto de cartões. Com api externa.', linguagem: linguagens[7], url: 'https://github.com/clovisbalreira/flutter/tree/main/Pokemon', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[0], tag: `${tags} ${tagsLinguagem[7]}`},    
    { titulo: 'App Filmes', descricao: 'Projeto de cartões. Com api externa.', linguagem: linguagens[7], url: 'https://github.com/clovisbalreira/flutter/tree/main/app_filmes', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[7]}`},    
    { titulo: 'Exemplo Site', descricao: 'Projeto de modelo de um site', linguagem: linguagens[8], url: 'https://github.com/clovisbalreira/python/tree/main/cursos-python-web', tipo: tipos[1], modelo: modelos[3], status: 'Não', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[8]}`},    
    { titulo: 'Digital Innovation', descricao: 'Exercicios de phython básico', linguagem: linguagens[8], url: 'https://github.com/clovisbalreira/python/tree/main/curso_dio_python', tipo: tipos[1], modelo: modelos[3], status: 'Sim', projeto: projetos[2], tag: `${tags} ${tagsLinguagem[8]}`},    
    { titulo: 'Designer', descricao: 'Projetos gráficos.', linguagem: linguagens[9], url: 'sites/imagens/index.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[0], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 1º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia01.html', tipo: tipos[0], modelo: modelos[2], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 2º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia02.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 3º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia03.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 4º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia04.html', tipo: tipos[0], modelo: modelos[1], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 5º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia05.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 6º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia06.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
    { titulo: 'JavaScript - #7DaysOfCode - 7º dia', descricao: 'Projeto do desafio #7DaysOfCode', linguagem: linguagens[2], url: 'sites/html_css_javascript/alura_imersao_html/desafiosJavascript/dia07.html', tipo: tipos[0], modelo: modelos[0], status: 'Sim', projeto: projetos[3], tag: `${tags}`},
]

var numero = 0
var mostrar = ['imagem', 'celular', 'tablet']
var tabela = []
var dado = ''
var tamanho = window.innerWidth
        
function mostrarSites(dado, procura) {
    var mostrarSites = document.getElementById('mostrarSites')
    var div = document.createElement('div')
    div.setAttribute('class', 'sites')
    for (var i = 0; i < sites.length; i++) {
        var valor = procurarValor(dado, i)
        if (valor == procura && sites[i].status == 'Sim') {
            var divFlex = document.createElement('div')
            divFlex.setAttribute('class', 'siteFlex')
            var largura = 0
            var a = document.createElement('a')
            a.innerHTML = sites[i].titulo
            a.setAttribute('href', sites[i].url)
            a.setAttribute('target', '_blank',)
            divFlex.appendChild(a)

            paragrafos(divFlex,div,mostrarSites,'Linguagem',sites[i].linguagem.nome)
            paragrafos(divFlex,div,mostrarSites,'Tipo',sites[i].tipo.nome)
            paragrafos(divFlex,div,mostrarSites,'Modelo',sites[i].modelo.nome)
            paragrafos(divFlex,div,mostrarSites,'Projeto',sites[i].projeto.nome)
            var divMostrarEmbed = document.createElement('div')
            divMostrarEmbed.setAttribute('id', `div${i}`)
            if (numero == 1) {
                if (sites[i].tipo.nome == 'Site') {
                    mostrarEmbed(divFlex, divMostrarEmbed, sites[i].url, '450px')
                } else {
                    mostrarImagem(divFlex, divMostrarEmbed, sites[i].linguagem.imagem)
                }
                largura = 450
            } else if (numero == 0 || tamanho <= 950) {
                mostrarImagem(divFlex, divMostrarEmbed, sites[i].linguagem.imagem)
                largura = 300
            } else {
                if (sites[i].tipo.nome == 'Site') {
                    mostrarEmbed(divFlex, divMostrarEmbed, sites[i].url, '950px')
                } else {
                    mostrarImagem(divFlex, divMostrarEmbed, sites[i].linguagem.imagem)
                }
                largura = 950
            }
            paragrafos(divFlex,div,mostrarSites,'Descrição',sites[i].descricao)
            paragrafos(divFlex,div,mostrarSites,'Tag',sites[i].tag)
            divFlex.style.width = `${largura}px`
        }
    }
}
function paragrafos(divFlex,div,mostrarSites,tipo,valor){
    var p = document.createElement('p')
    p.innerHTML = `<strong>${tipo}<//strong> : ${valor}`
    divFlex.appendChild(p)
    div.appendChild(divFlex)
    mostrarSites.appendChild(div)
}
function procurarValor(dados, n) {
    var valor = ''
    if (dados == 'linguagem') {
        valor = sites[n].linguagem
    } else if (dados == 'tipo') {
        valor = sites[n].tipo
    } else if (dados == 'modelo') {
        valor = sites[n].modelo
    } else if (dados == 'projeto') {
        valor = sites[n].projeto
    }
    return valor
}
function mostrarImagem(divFlex, divMostrarEmbed, imagem) {
    var img = document.createElement('img')
    img.setAttribute('src', imagem)
    img.setAttribute('class', 'img')
    divMostrarEmbed.appendChild(img)
    divFlex.appendChild(divMostrarEmbed)
}
function mostrarEmbed(divFlex, divMostrarEmbed, url, tamanho) {
    var embed = document.createElement('embed')
    embed.setAttribute('type', 'video/webm')
    embed.setAttribute('src', url)
    embed.setAttribute('width', tamanho)
    embed.setAttribute('height', '400px')
    divMostrarEmbed.appendChild(embed)
    divFlex.appendChild(divMostrarEmbed)
}
function atualizarEmbed() {
    var mostrarSites = document.getElementById('mostrarSites')
    mostrarSites.innerHTML = ''
    var lista = mostrar.length - 1
    if (numero == 0) {
        if(tamanho <= 950){
            numero = 1
            console.log('celular')
        }else{
            numero = lista
        }
    } else {
        if(numero == 1 && tamanho <= 950){
            numero = 0
        }else{
            numero--
        }
    }
    mostrarDadosSites(dado, tabela)
    mudarBotao()
}
function mostrarDadosSites(dado, tabela) {
    var mostrar = document.getElementById('mostrarSites')
    mostrar.innerHTML = ''
    for (var i = 0; i < tabela.length; i++) {
        var prncipal = document.createElement('div')
        prncipal.setAttribute('class','titulo')
        var div = document.createElement('div')
        div.setAttribute('class', 'titulo-h2')
        var h2 = document.createElement('h2')
        h2.innerHTML = tabela[i].nome
        h2.setAttribute('id', `quadro-${i}`)
        div.appendChild(h2)
        var a = document.createElement('a')
        a.setAttribute('href', '#perfil')
        var img = document.createElement('img')
        img.setAttribute('src', 'img/seta.png')
        a.appendChild(img)
        div.appendChild(a)
        prncipal.appendChild(div)
        var h3 = document.createElement('h3')
        h3.innerHTML = tabela[i].descricao
        prncipal.appendChild(h3)
        mostrar.appendChild(prncipal)
        mostrarSites(dado, tabela[i])
    }
}
function mudarBotao() {
    if (numero == 2  || (numero == 0 && tamanho <= 950)) {
        variaveisBotao('red', 'white', 'Celular')
    } else if (numero == 1) {
        variaveisBotao('green', 'white', 'Linguagem')
    } else {
        variaveisBotao('blue', 'white', 'Tablet')
    }
}
function variaveisBotao(corFundo, corLetra, texto) {
    var button = document.getElementById('button')
    button.style.backgroundColor = corFundo
    button.style.color = corLetra
    button.innerHTML = texto
}
function criarNavegacao(tabela) {
    var nav = document.querySelector('nav')
    nav.innerHTML = ''
    for (var i = 0; i < tabela.length; i++) {
        var a = document.createElement('a')
        a.textContent = tabela[i].nome
        a.setAttribute('href', `#quadro-${i}`)
        nav.appendChild(a)
        if(i < tabela.length-1){
            var p = document.createElement('p')
            p.textContent = ` | `
            nav.appendChild(p)
        }
    }
}
function atualizarVisual() {
    var tamanho = window.innerWidth
    if(tamanho <= 950){
        numero = 2
    }
    var input = document.querySelectorAll('.escolha')
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            var valor = input[i].value
            if (valor == 'linguagens') {
                tabela = linguagens
                dado = 'linguagem'
            } else if (valor == 'tipos') {
                tabela = tipos
                dado = 'tipo'
            } else if (valor == 'modelos') {
                tabela = modelos
                dado = 'modelo'
            } else if (valor == 'projetos') {
                tabela = projetos
                dado = 'projeto'
            }
            mostrarDadosSites(dado, tabela)
            mudarBotao()
            criarNavegacao(tabela)
        }
    }
}
atualizarVisual()
