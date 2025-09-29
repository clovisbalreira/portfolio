let idiomaAtual = 'portugues'

let labelText = {
    portugues : ['Cursos', 'Ano', 'Intituição', 'Tipo'],
    espanhol : ['Cursos', 'Año', 'Institución', 'Tipo'],       
    ingles : ['Courses', 'Year', 'Institution', 'Type'],
}

let curriculo = {
    nome : {
        portugues : { nome : 'Nome', dado : 'Clóvis Balreira Rodrigues' },   
        espanhol : { nome : 'Nombre', dado : 'Clóvis Balreira Rodrigues' },   
        ingles : { nome : 'Name', dado : 'Clóvis Balreira Rodrigues' },   
    }, 
    dados_pessoais : {
        portugues : { titulo : 'Dados Pessoais', },
        espanhol : { titulo : 'Datos Personales' },   
        ingles : { titulo : 'Personal Data' },   
        dados : {
            linkedin : { nome : 'Linkedin', dado : 'https://www.linkedin.com/in/clovis-balreira-rodrigues-dev/' },
            github : { nome : 'GitHub', dado : 'https://github.com/clovisbalreira' },
        },   
    },
    experiencia_profissional: {
        portugues : { titulo : 'Experiência Profissional' },   
        espanhol : { titulo : 'Experiencia Profesional' },   
        ingles : { titulo : 'Professional Experience' },   
        dados : [{
            portugues : { nome : 'Demonstrador / Promotor (Operacional)', dado : 'Gerenciamento de estoque e validade dos produtos, implementação de estratégias de marketing e análise competitiva.' },
            espanhol : { nome : 'Demostrador / Promotor (Operacional)', dado : 'Gestión de inventario y caducidad de productos, implementación de estrategias de marketing y análisis competitivo.' },
            ingles : { nome : 'Demonstrator / Promoter (Operational)', dado : 'Managed stock and product expiry, implemented marketing strategies and competitive analysis.' },   
            empresa : {
                portugues :[
                    { nome : 'AMBEV – COMPANHIA DE BEBIDAS DAS AMÉRICAS', data_inicio : '04/2024', data_fim : '01/2025' },
                    { nome : 'DIAGIO', data_inicio : '01/2024', data_fim : '02/2024'},
                    { nome : 'VINÍCULA GARIBALDI', data_inicio : '11/2023', data_fim : '12/2023' },
                    { nome : 'COCA-COLA FEMSA', data_inicio : '10/2022', data_fim : '12/2022' },
                    { nome : 'AMBEV – COMPANHIA DE BEBIDAS DAS AMÉRICAS', data_inicio : '12/2010', data_fim : '10/2020' }],
                    espanhol : [ 
                    { nome : 'AMBEV – COMPAÑÍA DE BEBIDAS DE LAS AMÉRICAS', data_inicio : '04/2024', data_fim : '01/2025' },
                    { nome : 'DIAGEO', data_inicio : '01/2024', data_fim : '02/2024'},
                    { nome : 'VINÍCOLA GARIBALDI', data_inicio : '11/2023', data_fim : '12/2023' },
                    { nome : 'COCA-COLA FEMSA', data_inicio : '10/2022', data_fim : '12/2022' },
                    { nome : 'AMBEV – COMPAÑÍA DE BEBIDAS DE LAS AMÉRICAS', data_inicio : '12/2010', data_fim : '10/2020' }
                ],
                ingles : [ 
                    { nome : 'AMBEV – BEVERAGE COMPANY OF THE AMERICAS', data_inicio : '04/2024', data_fim : '01/2025' },
                    { nome : 'DIAGEO', data_inicio : '01/2024', data_fim : '02/2024'},
                    { nome : 'VINÍCOLA GARIBALDI', data_inicio : '11/2023', data_fim : '12/2023' },
                    { nome : 'COCA-COLA FEMSA', data_inicio : '10/2022', data_fim : '12/2022' },
                    { nome : 'AMBEV – BEVERAGE COMPANY OF THE AMERICAS', data_inicio : '12/2010', data_fim : '10/2020' }
                ],  
            },
            },
            {
            portugues : { nome : 'Auxiliar de Produção', dado : 'Responsável por organizar a produção e separar pedidos para carregamento.' },
            espanhol : { nome : 'Auxiliar de Producción', dado : 'Responsable de organizar la producción y separar pedidos para carga.' },
            ingles : { nome : 'Production Assistant', dado : 'Responsible for organizing production and separating orders for loading.' },   
            empresa : {
                portugues : [ 
                    { nome : 'PARAMOUNT TÊXTEIS INDÚSTRIA E COMÉRCIO S/A', data_inicio : '01/2008', data_fim : '04/2008'}
                ],
                espanhol : [ 
                    { nome : 'PARAMOUNT TEXTILES INDUSTRIA Y COMERCIO S/A', data_inicio : '01/2008', data_fim : '04/2008'}
                ],
                ingles : [ 
                    { nome : 'PARAMOUNT TEXTILES INDUSTRY AND COMMERCE S/A', data_inicio : '01/2008', data_fim : '04/2008'}
                ],  
            },
            }
        ],
    },
    formação_academica : {
        portugues : { titulo : 'Formação Acadêmica' },   
        espanhol : { titulo : 'Formación Académica' },   
        ingles : { titulo : 'Academic Education' },   
        dados : {
            portugues : { nome : 'Ensino Médio Completo', instituicao : 'S.E.C. - Secretaria de Educação - Rio Grande do Sul', data_inicio : '01/2003', data_fim : '12/2003'},
            espanhol : { nome : 'Bachillerato completo', instituicao : 'S.E.C. - Secretaría de Educación - Rio Grande do Sul', data_inicio : '01/2003', data_fim : '12/2003'},
            ingles : { nome : 'High School Diploma', instituicao : 'S.E.C. - Secretariat of Education - Rio Grande do Sul', data_inicio : '01/2003', data_fim : '12/2003'},   
        },
    },
    objetivos : {
        portugues : { nome : 'Objetivos', dado : 'Possuo experiencia em vendas e promoção no setor de bebidas e alimentação, com habilidades em gestão de estoques e marketing. Almejo posições em programação, design web, desenvolvimento de software ou segurança da informação, onde posso utilizar minha formação em tecnologia para contribuir com soluções inovadoras e eficientes, impulsionando o crescimento e a inovação da empresa.' },
        espanhol : { nome : 'Objetivos', dado : 'Tengo experiencia en ventas y promoción en el sector de bebidas y alimentos, con habilidades en gestión de inventario y marketing. Aspiro a posiciones en programación, diseño web, desarrollo de software o seguridad de la información, donde puedo utilizar mi formación en tecnología para contribuir con soluciones innovadoras y eficientes, impulsando el crecimiento y la innovación de la empresa.' },
        ingles : { nome : 'Objectives', dado : 'I have experience in sales and promotion in the beverage and food sector, with skills in stock 	management and marketing. I aim for positions in programming, web design, software 	development, or information security, where I can use my technology education to contribute innovative and efficient solutions, driving company growth and innovation.' },   
    },
    interesses_profissionais : {
        portugues : { titulo : 'Interesses Profissionais' },   
        espanhol : { titulo : 'Intereses Profesionales' },   
        ingles : { titulo : 'Professional Interests' },   
        dados : {
            portugues : [ 
                { nome : 'Promotor de vendas' },
                { nome : 'Auxiliar de estoque' },
                { nome : 'Expedição' },
                { nome : 'Desenvolvimento de software' },
                { nome : 'Segurança da informação' },
                { nome : 'Arquitetura de sistemas' },
                { nome : 'Inovação tecnológica' },
                { nome : 'Front End' },
                { nome : 'Back End' }
            ],
            espanhol : [ 
                { nome : 'Promotor de ventas' },
                { nome : 'Auxiliar de almacén' },
                { nome : 'Expedición' },
                { nome : 'Desarrollo de software' },
                { nome : 'Seguridad de la información' },
                { nome : 'Arquitectura de sistemas' },
                { nome : 'Innovación tecnológica' },
                { nome : 'Front End' },
                { nome : 'Back End' }
            ],
            ingles : [                 
                { nome : 'Sales promoter' },
                { nome : 'Stock assistant' },
                { nome : 'Shipping' },
                { nome : 'Software development' }, 
                { nome : 'Information security' }, 
                { nome : 'System architecture' }, 
                { nome : 'Technological innovation' }, 
                { nome : 'Front End' }, 
                { nome : 'Back End' }
            ],  
        },
    },
    competencias_tecnicas : {
        portugues : { titulo : 'Competências Técnicas' },   
        espanhol : { titulo : 'Competencias tecnicas' },   
        ingles : { titulo : 'Technical Skills' },   
        dados : {
            portugues : [ 
                { nome : 'Linguagens de Programação', tecnicas : 'Java, PHP, JavaScript, C, Kotlin, entre outros.'},
                { nome : 'Desenvolvimento Web', tecnicas : 'HTML5, CSS3, WordPress, WooCommerce.'},
                { nome : 'Frameworks e Ferramentas', tecnicas : 'Spring Boot, Android Studio, Bootstrap, MySQL.'},
                { nome : 'Sistemas Operacionais', tecnicas : 'Linux, experiência com Raspberry Pi.'},
                { nome : 'Conhecimentos em Redes', tecnicas : 'TCP/IP, modelo OSI, Endereçamento IP, Wi-Fi, cabeamento.'},
                { nome : 'Segurança da Informação', tecnicas : 'Fundamentos, práticas de segurança em redes sociais e uso de 	senhas.'},
                { nome : 'Ferramentas de Desenvolvimento e Colaboração', tecnicas : 'Git, GitHub.'}
            ],   
            espanhol : [ 	 
                { nome : 'Lenguajes de Programación:', tecnicas : 'Java, PHP, JavaScript, C, Kotlin, entre otros.'},
                { nome : 'Desarrollo Web:', tecnicas : 'HTML5, CSS3, WordPress, WooCommerce.'},
                { nome : 'Frameworks y Herramientas:', tecnicas : 'Spring Boot, Android Studio, Bootstrap, MySQL.'},
                { nome : 'Sistemas Operativos:', tecnicas : 'Linux, experiencia con Raspberry Pi.'},
                { nome : 'Conocimientos en Redes:', tecnicas : 'TCP/IP, modelo OSI, direccionamiento IP, Wi-Fi, cableado.'},
                { nome : 'Seguridad de la Información:', tecnicas : 'Fundamentos, prácticas de seguridad en redes sociales y uso de contraseñas.'},
                { nome : 'Herramientas de Desarrollo y Colaboración:', tecnicas : 'Git, GitHub.'}
            ],   
            ingles : [ 
                { nome : 'Programming Languages :', tecnicas : 'Java, PHP, JavaScript, C, Kotlin, among others.'},
                { nome : 'Web Development :', tecnicas : 'HTML5, CSS3, WordPress, WooCommerce.'},
                { nome : 'Frameworks and Tools :', tecnicas : 'Spring Boot, Android Studio, Bootstrap, MySQL. '},
                { nome : 'Operating Systems :', tecnicas : 'Linux, experience with Raspberry Pi.'},
                { nome : 'Networking Knowledge :', tecnicas : 'TCP/IP, OSI model, IP Addressing, Wi-Fi, cabling.'},
                { nome : 'Information Security :', tecnicas : 'Fundamentals, social network security practices, and password use.'},
                { nome : 'Development and Collaboration Tools :', tecnicas : 'Git, GitHub.'}
            ],   
        },
    },
    idiomas : {
        portugues : { titulo : 'Idiomas' },   
        espanhol : { titulo : 'Idiomas' },   
        ingles : { titulo : 'Languages ' },   
        dados : {
            portugues : [
                { nome : 'Português', nivel : 'Nativo'},
                { nome : 'Inglês', nivel : 'Básico'},
                { nome : 'Espanhol', nivel : 'Básico'},
            ],
            espanhol : [
                { nome : 'Portugués', nivel : 'Nativo'},
                { nome : 'Inglés', nivel : 'Básico'},
                { nome : 'Español', nivel : 'Básico'},
            ],
            ingles : [ 
                { nome : 'Portuguese', nivel : 'Native'},
                { nome : 'English', nivel : 'Basic'},
                { nome : 'Spanish', nivel : 'Basic'},
            ],   
        },
    },
    projetos : {
        portugues : { titulo : 'Projetos' },   
        espanhol : { titulo : 'Proyectos' },   
        ingles : { titulo : 'Projects' },   
        dados : [
            { nome : 'Portifolio', site : 'https://clovisbalreira.github.io/portfolio/'},
            { nome : 'GitHub', site : 'https://github.com/clovisbalreira'}   
        ],
    },
    formacao_profissional: {
        portugues : { titulo : 'Formação Profissional' },   
        espanhol : { titulo : 'Formación Profesional' },   
        ingles : { titulo : 'Professional Training' },  
        dados : [
            {
                portugues : { nome : 'Profissionalizante em Programação' },   
                espanhol : { nome : 'Profesionalizante en Programación' },   
                ingles : { nome : 'Programming Vocational' },   
                instituicoes : [
                    {portugues : [
                        { nome : 'Estudonauta (Online)', descricao : 'Diversos cursos em tecnologias e programação, incluindo Raspberry Pi, Arquitetura de Computadores, Linguagem C, Redes de Computadores, Segurança da Informação, Android Studio, Kotlin, MySQL, Java, PHP, WordPress, Desenvolvimento Web (HTML5+CSS3), Linguagem JavaScript, entre outros. (2022-2023)' },
                        { nome : 'Curso em Vídeo (Online)', descricao : 'Amplas formações em Redes de Computadores, Linux, PHP Moderno, Endereçamento IPv4, Hardware, MySQL, HTML5 e CSS3, WordPress, JavaScript, Java POO, entre outros. (2021-2023)' },
                        { nome : 'DIO (Online)', descricao : 'Cursos focados em Java, Linux, Spring Boot, JavaScript ES6, PostgreSQL, APIs, Arquitetura de Sistemas, Git e GitHub, Lógica de Programação, entre outros. (2021-2023)' }
                    ]},   
                    {espanhol : [ 
                        { nome : 'Estudonauta (En línea)', descricao : 'Varios cursos en tecnologías y programación, incluyendo Raspberry Pi, Arquitectura de Computadoras, Lenguaje C, Redes de Computadoras, Seguridad de la Información, Android Studio, Kotlin, MySQL, Java, PHP, WordPress, Desarrollo Web (HTML5+CSS3), Lenguaje JavaScript, entre otros. (2022-2023)' },
                        { nome : 'Curso en Video (En línea)', descricao : 'Formaciones amplias en Redes de Computadoras, Linux, PHP Moderno, Direccionamiento IPv4, Hardware, MySQL, HTML5 y CSS3, WordPress, JavaScript, Java POO, entre otros. (2021-2023)' },
                        { nome : 'DIO (En línea)', descricao : 'Cursos enfocados en Java, Linux, Spring Boot, JavaScript ES6, PostgreSQL, APIs, Arquitectura de Sistemas, Git y GitHub, Lógica de Programación, entre otros. (2021-2023)' }
                    ]},   
                    {ingles : [ 
                        { nome : 'Training Estudonauta (Online)', descricao : 'Various courses in technologies and programming, including Raspberry Pi, Computer Architecture, C Language, Computer Networks, Information Security, Android Studio, Kotlin, MySQL, Java, PHP, WordPress, Web Development (HTML5+CSS3), JavaScript Language, among others. (2022-2023)' },
                        { nome : 'Curso em Vídeo (Online)', descricao : 'Extensive training in Computer Networks, Linux, Modern PHP, IPv4 Addressing, Hardware, MySQL, HTML5 and CSS3, WordPress, JavaScript, Java OOP, among others. (2021-2023)' },
                        { nome : 'DIO (Online)', descricao : 'Courses focused on Java, Linux, Spring Boot, JavaScript ES6, PostgreSQL, APIs, System Architecture, Git and GitHub, Programming Logic, among others. (2021-2023)' }
                    ]}
                ],   
            },
            {
                portugues : { nome : 'Profissionalizante em Informática' },   
                espanhol : { nome : 'Profesionalizante en Informática' },   
                ingles : { nome : 'Vocational Training in Computing' },   
                instituicoes : [
                    {portugues : [ 
                        { nome : 'Microlins e Programa Cidadania e Emprego', descricao : 'Curso de informática básico, Informática rápida. (2001, 2013)' }
                    ]},   
                    {espanhol : [ 
                        { nome : 'Microlins y Programa Ciudadanía y Empleo', descricao : 'Curso básico de informática, Informática rápida. (2001, 2013)' }
                    ]},   
                    {ingles : [ 
                        { nome : 'Microlins and Citizenship and Employment Program', descricao : 'Basic computer course, Quick computing. (2001, 2013)' }
                    ]},   
                ],
            },
            {
                portugues : { nome : 'Profissionalizante em Designer para Web' },   
                espanhol : { nome : 'Profesionalizante en Diseño para Web' },   
                ingles : { nome : 'Vocational Training in Web Design' },   
                instituicoes : [
                    {portugues : [ 
                        { nome : 'La Salle', descricao : 'Tecnicas de ilustração digital, produção gráfica, web design e design gráfico. (2011)' }
                    ]},   
                    {espanhol : [ 
                        { nome : 'La Salle', descricao : 'tecnicas de ilustración digital, producción gráfica, diseño web y diseño gráfico. (2011)' }
                    ]},   
                    {ingles : [ 
                        { nome : 'La Salle', descricao : 'Digital illustration techniques, graphic production, web design, and graphic design. (2011)' }
                    ]},   
                ],
            },
            {
                portugues : { nome : 'Profissionalizante em Agente de Turismo' },   
                espanhol : { nome : 'Profesionalizante en Agente de Turismo' },   
                ingles : { nome : 'Vocational Training in Tourism Agent' },   
                instituicoes : [
                    {portugues : [ 
                        { nome : 'Projeto Trabalho para a Juventude', descricao : 'Auxiliar de serviços no turismo. (2007)' }
                    ]},   
                    {espanhol : [ 
                        { nome : 'Proyecto Trabajo para la Juventud', descricao : 'Auxiliar de servicios en turismo. (2007)' }
                    ]},   
                    {ingles : [ 
                        { nome : 'Work for Youth Project', descricao : 'Tourism services assistant. (2007)' }
                    ]},   
                ],
            },
            {
                portugues : { nome : 'Profissionalizante em Administrativo' },   
                espanhol : { nome : 'Profesionalizante en Administrativo' },   
                ingles : { nome : 'Vocational Training in Administrative' },   
                instituicoes : [
                    {portugues : [ 
                        { nome : 'Prefeitura Municipal de Canoas & Datacontrol', descricao : 'Cursos diversos, incluindo liderança, espanhol básico, empreendedorismo, relações humanas, tecnicas de venda, qualidade de vida e preparação para o trabalho. (2005-2006)' }
                    ]},   
                    {espanhol : [ 
                        { nome : 'Municipio de Canoas & Datacontrol', descricao : 'Cursos varios, incluyendo liderazgo, español básico, emprendimiento, relaciones humanas, tecnicas de venta, calidad de vida y preparación para el trabajo. (2005-2006)' }
                    ]},   
                    {ingles : [ 
                        { nome : 'Municipal Government of Canoas & Datacontrol', descricao : 'Various courses, including leadership, basic Spanish, entrepreneurship, human relations, sales techniques, quality of life, and work preparation. (2005-2006)' }
                    ]},   
                ],
            },
            {
                portugues : { nome : 'Profissionalizante em Mecânica Industrial e Mecânica' },   
                espanhol : { nome : 'Profesionalizante en Mecánica Industrial y Mecánica' },   
                ingles : { nome : 'Vocational Training in Industrial and Mechanical Engineering' },   
                instituicoes : [
                    {portugues : [ 
                        { nome : 'Senai & Kazasul', descricao : 'Auxiliar de mecânica industrial e Mecânico de refrigeração. (2000-2004)' }
                    ]},   
                    {espanhol : [ 
                        { nome : 'Senai & Kazasul', descricao : 'Auxiliar de mecánica industrial y Mecánico de refrigeración. (2000-2004)' }
                    ]},   
                    {ingles : [ 
                        { nome : 'Senai & Kazasul', descricao : 'Industrial mechanics assistant and Refrigeration mechanic. (2000-2004)' }
                    ]},  
                ] 
            },
        ]
    }
}

let cursos = [
    {
        instituicao : 'Estudonauta',
        cursos : [
            { 
                portugues : {
                    nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 01', 
                    tipo : 'Front End'
                },
                ingles : {
                    nome : 'Web Development 2020 (HTML5+CSS3) Module 01',
                    tipo : 'Front End',
                },
                espanhol : {
                    nome : 'Desarrollo Web 2020 ( HTML5+CSS3 ) Módulo 01',
                    tipo : 'Front End',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('02/23/2022'),
                dataFim : new Date('03/23/2022'),
                imagens : ["./img/cursos/estudonauta/html-css-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 02', 
                    tipo : 'Front End'
                },
                ingles : {
                    nome : 'Web Development 2020 (HTML5+CSS3) Module 02',
                    tipo : 'Front End',
                },
                espanhol : {
                    nome : 'Desarrollo Web 2020 ( HTML5+CSS3 ) Módulo 02',
                    tipo : 'Front End',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('02/26/2022'),
                dataFim : new Date('03/26/2022'),
                imagens : ["./img/cursos/estudonauta/html-css-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 03', 
                    tipo : 'Front End'
                },
                ingles : {
                    nome : 'Web Development 2020 (HTML5+CSS3) Module 03',
                    tipo : 'Front End',
                },
                espanhol : {
                    nome : 'Desarrollo Web 2020 ( HTML5+CSS3 ) Módulo 03',
                    tipo : 'Front End',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('02/27/2022'),
                dataFim : new Date('03/27/2022'),
                imagens : ["./img/cursos/estudonauta/html-css-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 04', 
                    tipo : 'Front End'
                },
                ingles : {
                    nome : 'Web Development 2020 (HTML5+CSS3) Module 04',
                    tipo : 'Front End',
                },
                espanhol : {
                    nome : 'Desarrollo Web 2020 ( HTML5+CSS3 ) Módulo 04',
                    tipo : 'Front End',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('07/03/2022'),
                dataFim : new Date('08/03/2022'),
                imagens : ["./img/cursos/estudonauta/html-css-04.jpg"],
            },          
            { 
                portugues : {
                    nome : 'Javascript', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'Javascript',
                    tipo : 'Schedule',
                },
                espanhol : {
                    nome : 'Javascript',
                    tipo : 'Cronograma',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('02/27/2022'),
                dataFim : new Date('03/29/2022'),
                imagens : ["./img/cursos/estudonauta/javascript.jpg"],
            },   
            { 
                portugues : {
                    nome : 'P.H.P. básico', 
                    tipo : 'Back End'
                },
                ingles : {
                    nome : 'basic P.H.P.', 
                    tipo : 'Back End'
                },
                espanhol : {
                    nome : 'P.H.P. básico', 
                    tipo : 'Back End'
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('03/25/2022'),
                dataFim : new Date('04/25/2022'),
                imagens : ["./img/cursos/estudonauta/php-basico.jpg"],
            },
            { 
                portugues : {
                    nome : 'P.H.P. P.O.O.', 
                    tipo : 'Back End'
                },
                ingles : {
                    nome : 'P.H.P. P.O.O.', 
                    tipo : 'Back End'
                },
                espanhol : {
                    nome : 'P.H.P. P.O.O.', 
                    tipo : 'Back End'
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('03/29/2022'),
                dataFim : new Date('04/29/2022'),
                imagens : ["./img/cursos/estudonauta/php-poo.jpg"],
            },
            { 
                portugues : {
                    nome : 'P.H.P. com M.Y.S.Q.L. - Módulo 00 - Primeiros Passos', 
                    tipo : 'Back End'
                },
                ingles : {
                    nome : 'P.H.P. with M.Y.S.Q.L. - Module 00 - First Steps', 
                    tipo : 'Back End'
                },
                espanhol : {
                    nome : 'P.H.P. con M.Y.S.Q.L. - Módulo 00 - Primeros Pasos', 
                    tipo : 'Back End'
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('02/03/2022'),
                dataFim : new Date('03/03/2022'),
                imagens : ["./img/cursos/estudonauta/php-mysql-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'P.H.P. com M.Y.S.Q.L. - Módulo 01 - Criando um C.R.U.D.', 
                    tipo : 'Back End'
                },
                ingles : {
                    nome : 'P.H.P. with M.Y.S.Q.L. - Module 01 - Creating a C.R.U.D.', 
                    tipo : 'Back End'
                },
                espanhol : {
                    nome : 'P.H.P. con M.Y.S.Q.L. - Módulo 01 - Creando un C.R.U.D.', 
                    tipo : 'Back End'
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('02/04/2022'),
                dataFim : new Date('03/04/2022'),
                imagens : ["./img/cursos/estudonauta/php-mysql-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'P.H.P. com M.Y.S.Q.L. - Módulo 02 - Segurança e níveis de acessso', 
                    tipo : 'Back End'
                },
                ingles : {
                    nome : 'P.H.P. with M.Y.S.Q.L. - Module 02 - Security and Access Levels', 
                    tipo : 'Back End'
                },
                espanhol : {
                    nome : 'P.H.P. con M.Y.S.Q.L. - Módulo 02 - Seguridad y niveles de acceso', 
                    tipo : 'Back End'
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('02/05/2022'),
                dataFim : new Date('03/05/2022'),
                imagens : ["./img/cursos/estudonauta/php-mysql-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'P.H.P. moderno modulo 01', 
                    tipo : 'Back End'
                },
                ingles : {
                    nome : 'Modern P.H.P. Module 01',
                    tipo : 'Back End',
                },
                espanhol : {
                    nome : 'P.H.P. moderno módulo 01',
                    tipo : 'Back End',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('03/26/2022'),
                dataFim : new Date('04/26/2022'),
                imagens : ["./img/cursos/estudonauta/php-moderno-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'WordPress com Gutemberg - modulo 01 - Criação de Site', 
                    tipo : 'CMS'
                },
                ingles : {
                    nome : 'WordPress with Gutenberg - Module 01 - Website Creation',
                    tipo : 'CMS',
                },
                espanhol : {
                    nome : 'WordPress con Gutenberg - Módulo 01 - Creación de sitios web',
                    tipo : 'CMS',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('03/02/2022'),
                dataFim : new Date('04/02/2022'),
                imagens : ["./img/cursos/estudonauta/wordpress-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'WordPress com Gutemberg - modulo 02 - Segurança e Performance', 
                    tipo : 'CMS'
                },
                ingles : {
                    nome : 'WordPress with Gutenberg - Module 02 - Security and Performance',
                    tipo : 'CMS',
                },
                espanhol : {
                    nome : 'WordPress con Gutenberg - Módulo 02 - Seguridad y rendimiento',
                    tipo : 'CMS',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('03/03/2022'),
                dataFim : new Date('04/03/2022'),
                imagens : ["./img/cursos/estudonauta/wordpress-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'WordPress + WooCommerce - modulo 03 - Criação de Loja com WooCommerce', 
                    tipo : 'CMS'
                },
                ingles : {
                    nome : 'WordPress + WooCommerce - module 03 - Creating a Store with WooCommerce',
                    tipo : 'CMS',
                },
                espanhol : {
                    nome : 'WordPress + WooCommerce - módulo 03 - Creando una tienda con WooCommerce',
                    tipo : 'CMS',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('03/06/2022'),
                dataFim : new Date('04/06/2022'),
                imagens : ["./img/cursos/estudonauta/wordpress-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'WordPress - modulo 04 - Adequando Sites e Lojas Virtuais em Wordpress a LGPD', 
                    tipo : 'CMS'
                },
                ingles : {
                    nome : 'WordPress - Module 04 - Adapting Wordpress Websites and Online Stores to LGPD',
                    tipo : 'CMS',
                },
                espanhol : {
                    nome : 'WordPress -  Módulo 04 - Adaptación de sitios web y tiendas online de WordPress a la LGPD',
                    tipo : 'CMS',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('06/11/2023'),
                dataFim : new Date('07/11/2023'),
                imagens : ["./img/cursos/estudonauta/wordpress-04.jpg"],
            },  
            { 
                portugues : {
                    nome : 'Java básico - Módulo 00', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'basic java - Module 00', 
                    tipo : 'Schedule'
                },
                espanhol : {
                    nome : 'Java básico - Módulo 00', 
                    tipo : 'Cronograma'
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('02/27/2022'),
                dataFim : new Date('03/30/2022'),
                imagens : ["./img/cursos/estudonauta/java-basico.jpg"],
            },
            { 
                portugues : {
                    nome : 'Java P.O.O. - Módulo 00', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'Java P.O.O. - Module 00', 
                    tipo : 'Schedule'
                },
                espanhol : {
                    nome : 'Java P.O.O. - Módulo 00', 
                    tipo : 'Cronograma'
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('02/27/2022'),
                dataFim : new Date('03/30/2022'),
                imagens : ["./img/cursos/estudonauta/java-poo.jpg"],
            },          
            { 
                portugues : {
                    nome : 'Python - Mundo 01 - Fundamentos', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'Python - World 01 - Fundamentals',
                    tipo : 'Schedule',
                },
                espanhol : {
                    nome : 'Python - Mundo 01 - Fundamentos',
                    tipo : 'Cronograma',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('04/01/2023'),
                dataFim : new Date('05/01/2023'),
                imagens : ["./img/cursos/estudonauta/python-01.jpg"],
            },       
            { 
                portugues : {
                    nome : 'Python - Mundo 02 - Estrutura de controle', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'Python - World 02 - Control structure',
                    tipo : 'Schedule',
                },
                espanhol : {
                    nome : 'Python - Mundo 02 - Estructura de control',
                    tipo : 'Cronograma',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('04/01/2023'),
                dataFim : new Date('05/01/2023'),
                imagens : ["./img/cursos/estudonauta/python-02.jpg"],
            },          
            { 
                portugues : {
                    nome : 'Python - Mundo 03 - Estrutura compostas', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'Python - World 03 - Estructuras compuestas',
                    tipo : 'Schedule',
                },
                espanhol : {
                    nome : 'Python - Mundo 03 - Composite structures',
                    tipo : 'Cronograma',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('04/01/2023'),
                dataFim : new Date('05/01/2023'),
                imagens : ["./img/cursos/estudonauta/python-03.jpg"],
            },   
            { 
                portugues : {
                    nome : 'C - Módulo 00 - Primeiros Passos', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'C - Module 00 - First Steps',
                    tipo : 'Schedule',
                },
                espanhol : {
                    nome : 'C - Módulo 00 - Primeros pasos',
                    tipo : 'Cronograma',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/20/2022'),
                dataFim : new Date('09/20/2022'),
                imagens : ["./img/cursos/estudonauta/c-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'C - Módulo 01 - Estruturas Básicas', 
                    tipo : 'Programação'
                },
                ingles : {
                    nome : 'C - Module 01 - Basic Structures',
                    tipo : 'Schedule',
                },
                espanhol : {
                    nome : 'C - Módulo 01 - Estructuras básicas',
                    tipo : 'Cronograma',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/28/2022'),
                dataFim : new Date('09/28/2022'),
                imagens : ["./img/cursos/estudonauta/c-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Android - Módulo 00 - Primeiros Passos', 
                    tipo : 'Mobile'
                },
                ingles : {
                    nome : 'Android - Module 00 - First Steps',
                    tipo : 'Mobile',
                },
                espanhol : {
                    nome : 'Android - Módulo 00 - Primeros pasos',
                    tipo : 'Móvil',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/20/2022'),
                dataFim : new Date('08/20/2022'),
                imagens : ["./img/cursos/estudonauta/android-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Android - Módulo 01 - Estruturas Básicas', 
                    tipo : 'Mobile'
                },
                ingles : {
                    nome : 'Android - Module 01 - Basic Structures',
                    tipo : 'Mobile',
                },
                espanhol : {
                    nome : 'Android - Módulo 01 - Estructuras básicas',
                    tipo : 'Móvil',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/20/2022'),
                dataFim : new Date('08/20/2022'),
                imagens : ["./img/cursos/estudonauta/android-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Android - Módulo 02 - Interfaces', 
                    tipo : 'Mobile'
                },
                ingles : {
                    nome : 'Android - Module 02 - Interfaces',
                    tipo : 'Mobile',
                },
                espanhol : {
                    nome : 'Android - Módulo 02 - Interfaces',
                    tipo : 'Móvil',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/23/2022'),
                dataFim : new Date('08/23/2022'),
                imagens : ["./img/cursos/estudonauta/android-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Android - Módulo 03 - Atividades', 
                    tipo : 'Mobile'
                },
                ingles : {
                    nome : 'Android - Module 03 - activities',
                    tipo : 'Mobile',
                },
                espanhol : {
                    nome : 'Android - Módulo 03 - actividades',
                    tipo : 'Móvil',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/25/2022'),
                dataFim : new Date('08/25/2022'),
                imagens : ["./img/cursos/estudonauta/android-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'Kotlin - Módulo 00 - Primeiros Passos', 
                    tipo : 'Mobile'
                },
                ingles : {
                    nome : 'Kotlin - Module 00 - First Steps',
                    tipo : 'Mobile',
                },
                espanhol : {
                    nome : 'Kotlin - Módulo 00 - Primeros pasos',
                    tipo : 'Móvil',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/25/2022'),
                dataFim : new Date('08/25/2022'),
                imagens : ["./img/cursos/estudonauta/kotlin-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Kotlin - Módulo 01 - Estruturas Básicas', 
                    tipo : 'Mobile'
                },
                ingles : {
                    nome : 'Kotlin - Module 01 - Basic Structures',
                    tipo : 'Mobile',
                },
                espanhol : {
                    nome : 'Kotlin - Módulo 01 - Estructuras básicas',
                    tipo : 'Móvil',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/30/2022'),
                dataFim : new Date('08/30/2022'),
                imagens : ["./img/cursos/estudonauta/kotlin-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'MYSQL - Modulo 00', 
                    tipo : 'Banco de Dados'
                },
                ingles : {
                    nome : 'MYSQL - Module 00',
                    tipo : 'Database',
                },
                espanhol : {
                    nome : 'MYSQL - Módulo 00',
                    tipo : 'Banco de Datos',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('04/02/2022'),
                dataFim : new Date('05/02/2022'),
                imagens : ["./img/cursos/estudonauta/mysql-00.jpg"],
            }, 
            { 
                portugues : {
                    nome : 'Git - Github', 
                    tipo : 'Versionamento'
                },
                ingles : {
                    nome : 'Git - Github',
                    tipo : 'Versioning',
                },
                espanhol : {
                    nome : 'Git - Github',
                    tipo : 'Versionamiento',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/01/2023'),
                dataFim : new Date('11/01/2023'),
                imagens : ["./img/cursos/estudonauta/git-github.jpg"],
            },
            { 
                portugues : {
                    nome : 'S.E.O. - Módulo 01', 
                    tipo : 'Otimização de site'
                },
                ingles : {
                    nome : 'S.E.O. - Module 01',
                    tipo : 'Website optimization',
                },
                espanhol : {
                    nome : 'S.E.O. - Módulo 01',
                    tipo : 'Optimización de sitios web',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('05/24/2023'),
                dataFim : new Date('06/24/2023'),
                imagens : ["./img/cursos/estudonauta/seo-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'S.E.O. - Módulo 02', 
                    tipo : 'Otimização de site'
                },
                ingles : {
                    nome : 'S.E.O. - Module 02',
                    tipo : 'Website optimization',
                },
                espanhol : {
                    nome : 'S.E.O. - Módulo 02',
                    tipo : 'Optimización de sitios web',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('07/13/2023'),
                dataFim : new Date('08/13/2023'),
                imagens : ["./img/cursos/estudonauta/seo-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Inteligência Artificial - Módulo 01', 
                    tipo : 'I.A.'
                },
                ingles : {
                    nome : 'Artificial Intelligence - Module 01',
                    tipo : 'I.A.',
                },
                espanhol : {
                    nome : 'Inteligencia Artificial - Módulo 01',
                    tipo : 'I.A.',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('11/11/2024'),
                dataFim : new Date('11/12/2024'),
                imagens : ["./img/cursos/estudonauta/inteligencia-artificial-01.jpg"],
            },      
            { 
                portugues : {
                    nome : 'Modulo 00 - Segurança da Informação - Pilares e principais Riscos', 
                    tipo : 'Segurança da Informação'
                },
                ingles : {
                    nome : 'Module 00 - Information Security - Pillars and Main Risks',
                    tipo : 'Information Security',
                },
                espanhol : {
                    nome : 'Módulo 00 - Seguridad de la Información - Pilares y principales Riesgos',
                    tipo : 'Seguridad de la Información',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('05/10/2022'),
                dataFim : new Date('06/10/2022'),
                imagens : ["./img/cursos/estudonauta/seguranca-informacao-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Modulo 01 - Segurança da Informação - Redes Sociais, senhas e verificação em duas etapas', 
                    tipo : 'Segurança da Informação'
                },
                ingles : {
                    nome : 'Module 01 - Information Security - Social Networks, passwords, and two-factor authentication',
                    tipo : 'Information Security',
                },
                espanhol : {
                    nome : 'Módulo 01 - Seguridad de la Información - Redes Sociales, contraseñas y verificación en dos pasos',
                    tipo : 'Seguridad de la Información',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('05/10/2022'),
                dataFim : new Date('06/10/2022'),
                imagens : ["./img/cursos/estudonauta/seguranca-informacao-01.jpg"],
            }, 
            { 
                portugues : {
                    nome : 'Arquitetura de Computadores - Módulo 00', 
                    tipo : 'Hardware e software'
                },
                ingles : {
                    nome : 'Computer Architecture - Module 00',
                    tipo : 'Hardware e software',
                },
                espanhol : {
                    nome : 'Arquitectura de Computadoras - Módulo 00',
                    tipo : 'Hardware e software',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/18/2022'),
                dataFim : new Date('09/18/2022'),
                imagens : ["./img/cursos/estudonauta/arquitetura-computadores-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Arquitetura de Computadores - Módulo 01', 
                    tipo : 'Hardware e software'
                },
                ingles : {
                    nome : 'Computer Architecture - Module 01',
                    tipo : 'Hardware e software',
                },
                espanhol : {
                    nome : 'Arquitectura de Computadoras - Módulo 01',
                    tipo : 'Hardware e software',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/18/2022'),
                dataFim : new Date('11/18/2022'),
                imagens : ["./img/cursos/estudonauta/arquitetura-computadores-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Arquitetura de Computadores - Módulo 02', 
                    tipo : 'Hardware e software'
                },
                ingles : {
                    nome : 'Computer Architecture - Module 02',
                    tipo : 'Hardware e software',
                },
                espanhol : {
                    nome : 'Arquitectura de Computadoras - Módulo 02',
                    tipo : 'Hardware e software',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('04/16/2023'),
                dataFim : new Date('05/16/2023'),
                imagens : ["./img/cursos/estudonauta/arquitetura-computadores-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Linux - Módulo 00 - Primeiros Passos', 
                    tipo : 'Sistema Operacional'
                },
                ingles : {
                    nome : 'Linux - Module 00 - Getting Started',
                    tipo : 'Operating System',
                },
                espanhol : {
                    nome : 'Linux - Módulo 00 - Primeros pasos',
                    tipo : 'Sistema operativo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('01/21/2023'),
                dataFim : new Date('02/21/2023'),
                imagens : ["./img/cursos/estudonauta/linux-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Linux - Módulo 01 - Interface and Terminal', 
                    tipo : 'Sistema Operacional'
                },
                ingles : {
                    nome : 'Linux - Module 01 - Getting Started',
                    tipo : 'Operating System',
                },
                espanhol : {
                    nome : 'Linux - Módulo 01 - Interfaz y terminal',
                    tipo : 'Sistema operativo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('01/21/2023'),
                dataFim : new Date('02/21/2023'),
                imagens : ["./img/cursos/estudonauta/linux-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Linux - Módulo 02 - Pacotes e gestão de Processos', 
                    tipo : 'Sistema Operacional'
                },
                ingles : {
                    nome : 'Linux - Module 02 - Packages and Process Management',
                    tipo : 'Operating System',
                },
                espanhol : {
                    nome : 'Linux - Módulo 02 - Gestión de paquetes y procesos',
                    tipo : 'Sistema operativo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('01/22/2023'),
                dataFim : new Date('02/22/2023'),
                imagens : ["./img/cursos/estudonauta/linux-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Linux - Módulo 03 - Programação com Linux', 
                    tipo : 'Sistema Operacional'
                },
                ingles : {
                    nome : 'Linux - Module 03 - Programming with Linux',
                    tipo : 'Operating System',
                },
                espanhol : {
                    nome : 'Linux - Módulo 03 - Programación con Linux',
                    tipo : 'Sistema operativo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('01/23/2023'),
                dataFim : new Date('02/23/2023'),
                imagens : ["./img/cursos/estudonauta/linux-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'Linux - Módulo 04 - Terminal Avançado', 
                    tipo : 'Sistema Operacional'
                },
                ingles : {
                    nome : 'Linux - Module 04 - Advanced Terminal',
                    tipo : 'Operating System',
                },
                espanhol : {
                    nome : 'Linux - Módulo 04 - Terminal avanzada',
                    tipo : 'Sistema operativo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('01/25/2023'),
                dataFim : new Date('02/25/2023'),
                imagens : ["./img/cursos/estudonauta/linux-04.jpg"],
            },
            { 
                portugues : {
                    nome : 'Linux - Módulo 05 - Discos e Raid', 
                    tipo : 'Sistema Operacional'
                },
                ingles : {
                    nome : 'Linux - Module 05 - Disks and Raid',
                    tipo : 'Operating System',
                },
                espanhol : {
                    nome : 'Linux - Módulo 05 - Discos y Raid',
                    tipo : 'Sistema operativo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('01/26/2023'),
                dataFim : new Date('02/26/2023'),
                imagens : ["./img/cursos/estudonauta/linux-05.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 00 - Fundamentos de Rede', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 00 - Network Fundamentals',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 00 - Fundamentos de redes',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('07/12/2022'),
                dataFim : new Date('08/12/2022'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 01 - Cabeamento', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 01 - Cabling',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 01 - Cableado',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/03/2022'),
                dataFim : new Date('09/03/2022'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 02 - TCP/IP e WI-FI', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 02 - TCP/IP and WI-FI',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 02 - TCP/IP y WI-FI',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/03/2022'),
                dataFim : new Date('09/03/2022'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 03 - Endereçamento IP', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 03 - IP Addressing',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 03 - Direccionamiento IP',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/07/2022'),
                dataFim : new Date('09/07/2022'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 04 - Equipamentos de Rede', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 04 - Network Equipment',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 04 - Equipos de red',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/08/2022'),
                dataFim : new Date('09/08/2022'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-04.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 05 - Protocolos e Modelos OSI', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 05 - OSI Protocols and Models',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 05 - Protocolos y modelos OSI',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('08/09/2022'),
                dataFim : new Date('09/09/2022'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-05.jpg"],
            },
            { 
                portugues : {
                    nome : 'Redes de Computadores - Módulo 06 - Transmissão de Sinal', 
                    tipo : 'Redes de Computadores'
                },
                ingles : {
                    nome : 'Computer Networks - Module 06 - OSI Signal Transmission',
                    tipo : 'Computer Networks',
                },
                espanhol : {
                    nome : 'Redes de computadoras - Módulo 06 - Transmisión de señales',
                    tipo : 'Redes de computadoras',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('06/05/2025'),
                dataFim : new Date('07/05/2025'),
                imagens : ["./img/cursos/estudonauta/redes-de-computadores-06.jpg"],
            },
            { 
                portugues : {
                    nome : 'Eletrônica Básico - Módulo 00 - Fundamentos da Eletrônica', 
                    tipo : 'Eletrônica'
                },
                ingles : {
                    nome : 'Basic Electronics - Module 00 - Fundamentals of Electronics',
                    tipo : 'Electronics',
                },
                espanhol : {
                    nome : 'Electrónica Básica - Módulo 00 - Fundamentos de Electrónica',
                    tipo : 'Electronics',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('02/25/2023'),
                dataFim : new Date('03/25/2023'),
                imagens : ["./img/cursos/estudonauta/eletronica-basica-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Eletrônica Básico - Módulo 01 - Criando Circuito', 
                    tipo : 'Eletrônica'
                },
                ingles : {
                    nome : 'Basic Electronics - Module 01 - Creating Circuit',
                    tipo : 'Electronics',
                },
                espanhol : {
                    nome : 'Electrónica Básica - Módulo 01 - Creando circuito',
                    tipo : 'Electronics',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('02/25/2023'),
                dataFim : new Date('03/25/2023'),
                imagens : ["./img/cursos/estudonauta/eletronica-basica-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Raspberry Pi - Módulo 00 - Conhecendo o Raspberry Pi', 
                    tipo : 'Internet das Coisas - IoT'
                },
                ingles : {
                    nome : 'Raspberry Pi - Module 00 - Getting to know the Raspberry Pi',
                    tipo : 'Internet of Things - IoT',
                },
                espanhol : {
                    nome : 'Raspberry Pi - Módulo 00 - Fundamentos de Electrónica',
                    tipo : 'Internet de las cosas - IoT',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('12/01/2022'),
                dataFim : new Date('01/01/2023'),
                imagens : ["./img/cursos/estudonauta/raspberry-pi-00.jpg"],
            },
            { 
                portugues : {
                    nome : 'Raspberry Pi - Módulo 01 - Programando com Raspberry Pi', 
                    tipo : 'Internet das Coisas - IoT'
                },
                ingles : {
                    nome : 'Raspberry Pi - Module 01 - Programming with Raspberry Pi',
                    tipo : 'Internet of Things - IoT',
                },
                espanhol : {
                    nome : 'Raspberry Pi - Módulo 01 - Programación con Raspberry Pi',
                    tipo : 'Internet de las cosas - IoT',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('12/02/2022'),
                dataFim : new Date('01/02/2023'),
                imagens : ["./img/cursos/estudonauta/raspberry-pi-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Raspberry Pi - Módulo 02 - Raspberry Pi Avaçado', 
                    tipo : 'Internet das Coisas - IoT'
                },
                ingles : {
                    nome : 'Raspberry Pi - Module 02 - Raspberry Pi Advanced',
                    tipo : 'Internet of Things - IoT',
                },
                espanhol : {
                    nome : 'Raspberry Pi - Módulo 02 - Raspberry Pi Advanced',
                    tipo : 'Internet de las cosas - IoT',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('12/03/2022'),
                dataFim : new Date('01/03/2023'),
                imagens : ["./img/cursos/estudonauta/raspberry-pi-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Raspberry Pi - Módulo 03 - Retro Gaming com Raspberry Pi',                    tipo : 'Internet das Coisas - IoT'
                },
                ingles : {
                    nome : 'Raspberry Pi - Module 03 - Retro Gaming with Raspberry Pi',
                    tipo : 'Internet of Things - IoT',
                },
                espanhol : {
                    nome : 'Raspberry Pi - Módulo 03 - Juegos retro con Raspberry Pi',
                    tipo : 'Internet de las cosas - IoT',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('12/08/2022'),
                dataFim : new Date('01/08/2023'),
                imagens : ["./img/cursos/estudonauta/raspberry-pi-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'Produção de Vídeos - Módulo 01 - Cámeras', 
                    tipo : 'Produção de Vídeos'
                },
                ingles : {
                    nome : 'Video Production - Module 01 - Cameras',
                    tipo : 'Video Production',
                },
                espanhol : {
                    nome : 'Producción de video - Módulo 01 - Cámaras',
                    tipo : 'Producción de video',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/19/2023'),
                dataFim : new Date('11/19/2023'),
                imagens : ["./img/cursos/estudonauta/producao-de-videos-01.jpg"],
            },
            { 
                portugues : {
                    nome : 'Produção de Vídeos - Módulo 02 - Iluminação', 
                    tipo : 'Produção de Vídeos'
                },
                ingles : {
                    nome : 'Video Production - Module 02 - Lighting',
                    tipo : 'Video Production',
                },
                espanhol : {
                    nome : 'Producción de video - Módulo 02 - Iluminación',
                    tipo : 'Producción de video',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/19/2023'),
                dataFim : new Date('11/19/2023'),
                imagens : ["./img/cursos/estudonauta/producao-de-videos-02.jpg"],
            },
            { 
                portugues : {
                    nome : 'Produção de Vídeos - Módulo 03 - Audio com qualidade', 
                    tipo : 'Produção de Vídeos'
                },
                ingles : {
                    nome : 'Video Production - Module 03 - Quality audio',
                    tipo : 'Video Production',
                },
                espanhol : {
                    nome : 'Producción de video - Módulo 03 - Audio de calidad',
                    tipo : 'Producción de video',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/19/2023'),
                dataFim : new Date('11/19/2023'),
                imagens : ["./img/cursos/estudonauta/producao-de-videos-03.jpg"],
            },
            { 
                portugues : {
                    nome : 'Produção de Vídeos - Módulo 04 - Edição de Vídeos', 
                    tipo : 'Produção de Vídeos'
                },
                ingles : {
                    nome : 'Video Production - Module 04 - Video Editing',
                    tipo : 'Video Production',
                },
                espanhol : {
                    nome : 'Producción de video - Módulo 04 - Audio de calidad',
                    tipo : 'Edición de vídeo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/19/2023'),
                dataFim : new Date('11/19/2023'),
                imagens : ["./img/cursos/estudonauta/producao-de-videos-04.jpg"],
            },
            { 
                portugues : {
                    nome : 'Produção de Vídeos - Módulo 05 - Criando uma Thumb', 
                    tipo : 'Produção de Vídeos'
                },
                ingles : {
                    nome : 'Video Production - Module 05 - Creating a Thumb',
                    tipo : 'Video Production',
                },
                espanhol : {
                    nome : 'Producción de video - Módulo 05 - Creando un pulgar',
                    tipo : 'Edición de vídeo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/19/2023'),
                dataFim : new Date('11/19/2023'),
                imagens : ["./img/cursos/estudonauta/producao-de-videos-05.jpg"],
            },
            { 
                portugues : {
                    nome : 'Produção de Vídeos - Módulo 06 - Animação', 
                    tipo : 'Produção de Vídeos'
                },
                ingles : {
                    nome : 'Video Production - Module 06 - Animation',
                    tipo : 'Video Production',
                },
                espanhol : {
                    nome : 'Producción de video - Módulo 06 - Animación',
                    tipo : 'Edición de vídeo',
                },
                filtro : false,  
                horas : 20,
                dataInicio : new Date('10/19/2023'),
                dataFim : new Date('11/19/2023'),
                imagens : ["./img/cursos/estudonauta/producao-de-videos-06.jpg"],
            },
        ],
        posicao : "horizontal",
    },
    {
        instituicao : 'La Salle',
        cursos : [
            { 
                portugues : {
                    nome : 'Tecnicas Básicas de ilustração Digital e Produção Gráfica', 
                    tipo : 'Profissionalizante'
                },
                ingles : {
                    nome : 'Basic Techniques of Digital Illustration and Graphic Production',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Técnicas Básicas de ilustración Digital y Producción Gráfica',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 90,
                dataInicio : new Date('06/02/2011'),
                dataFim : new Date('08/11/2011'),
                imagens : ["./img/cursos/lasalle/designer-grafico-frente.jpg","./img/cursos/lasalle/designer-grafico-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Tecnicas Básicas de Web Designer e Designer Gráfica', 
                    tipo : 'Profissionalizante'
                },
                ingles : {
                    nome : 'Basic Techniques of Web Designer and Graphic Designer',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Técnicas Básicas de Diseñador Web y Diseñador Gráfico',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 120,
                dataInicio : new Date('02/24/2011'),
                dataFim : new Date('05/10/2011'),
                imagens : ["./img/cursos/lasalle/web-designer-frente.jpg","./img/cursos/lasalle/web-designer-verso.jpg"],
            }
        ],
        posicao : "horizontal",
    },
    {
        instituicao : 'Governo',
        cursos : [
            { 
                portugues : {
                    nome : 'Auxiliar Serviço Turismo', 
                    tipo : 'Profissionalizante',
                },
                ingles : {
                    nome : 'Tourism Service Assistant',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Auxiliar Servicio Turismo',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 80,
                dataInicio : new Date('09/26/2007'),
                dataFim : new Date('10/24/2007'),
                imagens : ["./img/cursos/governo/auxiliar-servico-turismo-frente.jpg","./img/cursos/governo/auxiliar-servico-turismo-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Informatica Básica', 
                    tipo : 'Profissionalizante',
                },
                ingles : {
                    nome : 'Basic Informatics',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Informática Básica',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 80,
                dataInicio : new Date('07/10/2001'),
                dataFim : new Date('08/10/2001'),
                imagens : ["./img/cursos/governo/informatica-basica-frente.jpg","./img/cursos/governo/informatica-basica-verso.jpg"],
            }
        ],
        posicao : "horizontal",
    },
    {
        instituicao : 'Datacontrol',
        cursos : [
            { 
                portugues : {
                    nome : 'Práticas Administrativas', 
                    tipo : 'Profissionalizante',
                },
                ingles : {
                    nome : 'Administrative Practices',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Prácticas Administrativas',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 70,
                dataInicio : new Date('06/18/2005'),
                dataFim : new Date('11/05/2005'),
                imagens : ["./img/cursos/datacontrol/praticas-administrativas.jpg"],
            }
        ],
        posicao : "horizontal",
    },
    {
        instituicao : 'Kazasul',
        cursos : [
            { 
                portugues : {
                    nome : 'Mecanico de Refrigeração, Condicionadores de ar, lavadoras e lavadoras de roupas', 
                    tipo : 'Profissionalizante'
                },
                ingles : {
                    nome : 'Refrigeration Mechanic, air conditioners, washing machines and laundry machines',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Mecánico de Refrigeración, aires acondicionados, lavadoras y lavadoras de ropa',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 80,
                dataInicio : new Date('01/24/2000'),
                dataFim : new Date('02/25/2000'),
                imagens : ["./img/cursos/kazasul/mecanico-lavaroupas.jpg"],
            }
        ],
        posicao : "horizontal",
    },
    {
        instituicao : 'Microlins',
        cursos : [
            { 
                portugues : {
                    nome : 'Informática Rápida', 
                    tipo : 'Profissionalizante',
                },
                ingles : {
                    nome : 'Fast Computing',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Informática Rápida',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 72,
                dataInicio : new Date('04/18/2013'),
                dataFim : new Date('09/26/2013'),
                imagens : ["./img/cursos/microlins/informatica-rapida-frente.jpg","./img/cursos/microlins/informatica-rapida-verso.jpg"],
            }
        ],
        posicao : "horizontal",
    },
    {
        instituicao : 'Senai',
        cursos : [
            { 
                portugues : {
                    nome : 'Auxiliar de Mecânica Industrial', 
                    tipo : 'Profissionalizante'
                },
                ingles : {
                    nome : 'Industrial Mechanics Assistant',
                    tipo : 'Vocational training',
                },
                espanhol : {
                    nome : 'Auxiliar de Mecánica Industrial',
                    tipo : 'Profesionalizante',
                },
                filtro : false,  
                horas : 150,
                dataInicio : new Date('07/12/2004'),
                dataFim : new Date('09/27/2004'),
                imagens : ["./img/cursos/senai/mecanica-industrial-frente.jpg","./img/cursos/senai/mecanica-industrial-verso.jpg"],
            }
        ],
        posicao : "vertical",
    },
    {
        instituicao : 'Fundapes',
        cursos : [
            { 
                portugues : {
                    nome : 'Espanhol Básico', 
                    tipo : 'Linguas'
                },
                ingles : {
                    nome : 'Basic Spanish',
                    tipo : 'Languages',
                },
                espanhol : {
                    nome : 'Español Básico',
                    tipo : 'Lenguas',
                },
                filtro : false,  
                horas : 40,
                dataInicio : new Date('05/20/2006'),
                dataFim : new Date('06/20/2006'),
                imagens : ["./img/cursos/fundapes/espanhol-frente.jpg","./img/cursos/fundapes/espanhol-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Como Ser Uma Pessoa Feliz', 
                    tipo : 'Oficina'
                },
                ingles : {
                    nome : 'How to Be a Happy Person',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Cómo Ser Una Persona Feliz',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('06/08/2006'),
                dataFim : new Date('06/13/2006'),
                imagens : ["./img/cursos/fundapes/feliz-frente.jpg","./img/cursos/fundapes/feliz-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Relações Humanas', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'Human Relations',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Relaciones Humanas',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('04/15/2006'),
                dataFim : new Date('04/20/2006'),
                imagens : ["./img/cursos/fundapes/humanas-frente.jpg","./img/cursos/fundapes/humanas-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Liderança', 
                    tipo : 'Oficina'
                },
                ingles : {
                    nome : 'Leadership',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Liderazgo',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('06/22/2006'),
                dataFim : new Date('06/17/2006'),
                imagens : ["./img/cursos/fundapes/lideranca-frente.jpg","./img/cursos/fundapes/lideranca-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Motivando para o Atendimento', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'Motivating for Service',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Motivando para la Atención',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('01/16/2006'),
                dataFim : new Date('01/21/2006'),
                imagens : ["./img/cursos/fundapes/motivacao-frente.jpg","./img/cursos/fundapes/motivacao-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Abrindo Seu Próprio Negócio', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'Starting Your Own Business',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Abriendo Su Propio Negocio',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('04/22/2006'),
                dataFim : new Date('04/27/2006'),
                imagens : ["./img/cursos/fundapes/negocio-frente.jpg","./img/cursos/fundapes/negocio-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Preparação para o Trabalho', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'Preparation for Work',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Preparación para el Trabajo',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('02/04/2006'),
                dataFim : new Date('02/09/2006'),
                imagens : ["./img/cursos/fundapes/preparacao-frente.jpg","./img/cursos/fundapes/preparacao-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Qualidade de Vida', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'Quality of Life',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Calidad de Vida',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('02/18/2006'),
                dataFim : new Date('02/23/2006'),
                imagens : ["./img/cursos/fundapes/qualidade-frente.jpg","./img/cursos/fundapes/qualidade-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Segredo do Sucesso', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'Secret of Success',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Secreto del Éxito',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('04/01/2006'),
                dataFim : new Date('04/06/2006'),
                imagens : ["./img/cursos/fundapes/sucesso-frente.jpg","./img/cursos/fundapes/sucesso-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Arte de Vender', 
                    tipo : 'Oficina' 
                },
                ingles : {
                    nome : 'The Art of Selling',
                    tipo : 'Workshop',
                },
                espanhol : {
                    nome : 'Arte de Vender',
                    tipo : 'Oficina',
                },
                filtro : false,  
                horas : 10,
                dataInicio : new Date('03/23/2006'),
                dataFim : new Date('03/17/2006'),
                imagens : ["./img/cursos/fundapes/vender-frente.jpg","./img/cursos/fundapes/vender-verso.jpg"],
            },
        ],
        posicao : "horizantal",
    },
    {
        instituicao : 'E.J.A.',
        cursos : [
            { 
                portugues : {
                    nome : 'Ensino Fundamental Completo',
                    tipo : 'Academico',
                },
                ingles : {
                    nome : 'Complete Elementary Education',
                    tipo : 'Academic',
                },
                espanhol : {
                    nome : 'Educación Básica Completa',
                    tipo : 'Académico',
                },
                filtro : false, 
                dataFim : new Date('10/20/2002'),
                imagens : ["./img/cursos/academico/ensino-fundamental-frente.jpg", "./img/cursos/academico/ensino-fundamental-verso.jpg"],
            },
            { 
                portugues : {
                    nome : 'Ensino Médio Completo', 
                    tipo : 'Academico',
                },
                ingles : {
                    nome : 'Complete High School',
                    tipo : 'Academic',
                },
                espanhol : {
                    nome : 'Educación Media Completa',
                    tipo : 'Académico',
                },
                filtro : false, 
                dataFim : new Date('09/14/2003'),
                imagens : ["./img/cursos/academico/ensino-medio-frente.jpg", "./img/cursos/academico/ensino-medio-verso.jpg"],
            },
        ],
        posicao : "vertical",
    },
]

let instituicoes = cursos.map((instituicao) => {
    return instituicao.instituicao;
});

let nomeCursos = {
    portugues : cursos.map((instituicao) => {
    return instituicao.cursos.map((curso) => {
        return curso.portugues.nome;
        });
    }),   
    ingles : cursos.map((instituicao) => {
        return instituicao.cursos.map((curso) => {
            return curso.ingles.nome;
        });
    }),   
    espanhol : cursos.map((instituicao) => {
        return instituicao.cursos.map((curso) => {
            return curso.espanhol.nome;
        });
    }),   
}

let tipoCursos = {
    portugues : cursos.map((instituicao) => {
        return instituicao.cursos.map((curso) => {
            return curso.portugues.tipo;
        });
    }),   
    ingles : cursos.map((instituicao) => {
        return instituicao.cursos.map((curso) => {
            return curso.ingles.tipo;
        });
    }),   
    espanhol : cursos.map((instituicao) => {
        return instituicao.cursos.map((curso) => {
            return curso.espanhol.tipo;
        });
    }),   
}

let anos = cursos.map((instituicao) => {
        return instituicao.cursos.map((curso) => {
            let data = new Date(curso.dataFim)
            return data.getFullYear();
        })
    }
)















