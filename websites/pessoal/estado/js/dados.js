let estados = [
  {
      nome : "Rio Grande do Sul",
      sigla : "RS",
      descricao : "O Rio Grande do Sul, localizado na região Sul do Brasil, é um estado que encanta por sua diversidade cultural e paisagens exuberantes. Com uma forte influência europeia, principalmente italiana e alemã, o estado possui uma rica gastronomia e tradições que se misturam às raízes indígenas e afro-brasileiras. Seus campos de cultivo, vinícolas, serras e praias formam um mosaico de belezas naturais que atraem turistas do mundo todo. A capital, Porto Alegre, é um centro cultural e econômico vibrante, que contrasta com a tranquilidade de cidades menores e o charme das pequenas vilas.",
      capital : "Porto Alegre",
      simbolos : [
          {
              nome: "Chimarrão",
              descricao: "Bebida tradicional preparada com erva-mate, água quente e uma cuia."
            },
            {
              nome: "Cavalo Crioulo",
              descricao: "Raça equina forte e resistente, símbolo da tradição campeira."
            },
            {
              nome: "Erva-mate",
              descricao: "Planta nativa do sul do Brasil, ingrediente principal do chimarrão."
            },
            {
              nome: "Quero-quero",
              descricao: "Ave característica dos campos gaúchos, símbolo da liberdade."
            },
            {
              nome: "Flor Brinco-de-princesa",
              descricao: "Flor silvestre de grande beleza, símbolo da flora gaúcha."
            }
      ],
      pontosTuristicos : [
          {
              nome: "Cânion Itaimbezinho",
              descricao: "Conhecido por suas paredes de arenito avermelhado e trilhas desafiadoras.",
              tipo: "Natureza"
            },
            {
              nome: "Serra Gaúcha",
              descricao: "Região famosa por suas vinícolas, arquitetura germânica e cidades charmosas.",
              tipo: "Cultura e Natureza"
            },
            {
              nome: "Praias do Litoral Norte",
              descricao: "Com suas águas cristalinas e paisagens exuberantes, ideais para relaxar e praticar esportes aquáticos.",
              tipo: "Praia"
            },
            {
              nome: "Ruínas de São Miguel das Missões",
              descricao: "Patrimônio Mundial da UNESCO, testemunho da história e cultura jesuítica.",
              tipo: "Histórico"
            },
            {
              nome: "Usina do Gasômetro",
              descricao: "Marco histórico e cultural de Porto Alegre, abrigando diversas exposições e eventos.",
              tipo: "Cultura"
            }
      ],
      pratosTipicos : [
          {
              nome: "Churrasco",
              descricao: "O rei da mesa gaúcha! Conhecido por sua variedade de carnes.",
              tipo: "Carne"
            },
            {
              nome: "Arroz Carreteiro",
              descricao: "Prato simples e saboroso, feito com arroz, carne seca desfiada e temperos.",
              tipo: "Arroz"
            },
            {
              nome: "Barreado",
              descricao: "Cozido de carne bovina, especiarias e outros ingredientes, preparado em uma panela de barro.",
              tipo: "Cozido"
            },
            {
              nome: "Salpicão",
              descricao: "Salada fria feita com frango desfiado, maionese e legumes picados.",
              tipo: "Salada"
            },
            {
              nome: "Pinhão",
              descricao: "Semente típica da araucária, consumido cozido ou assado.",
              tipo: "Acompanhamento"
            }
      ],
      cores: ["green" , "red", "yellow" ],
  },
  {
    nome: "Rio de Janeiro",
    sigla: "RJ",
    regiao: "Sudeste",
    capital: "Rio de Janeiro",
    descricao: "O Rio de Janeiro é famoso por suas belezas naturais, como o Cristo Redentor e o Pão de Açúcar, e por sua cultura vibrante, com o Carnaval sendo um dos eventos mais famosos do mundo. O estado também possui diversas praias, florestas e áreas montanhosas.",
    simbolos: [
        { nome: "Cristo Redentor", descricao: "Uma das Sete Maravilhas do Mundo Moderno." },
        { nome: "Pão de Açúcar", descricao: "Ícone carioca e um dos cartões postais mais famosos do Brasil." },
        { nome: "Samba", descricao: "Ritmo musical que representa a cultura carioca." }
    ],
    pontosTuristicos: [
        { nome: "Copacabana", descricao: "Uma das praias mais famosas do mundo." },
        { nome: "Maracanã", descricao: "Estádio de futebol mundialmente conhecido." },
        { nome: "Corcovado", descricao: "Localizado o Cristo Redentor." },
        { nome: "Floresta da Tijuca", descricao: "A maior floresta urbana do mundo." }
    ],
    pratosTipicos: [
        { nome: "Feijoada", descricao: "Prato nacional do Brasil, muito popular no Rio de Janeiro." },
        { nome: "Acarajé", descricao: "Bolinho de feijão fradinho frito, típico da culinária baiana, mas muito popular no Rio." },
        { nome: "Bobó de camarão", descricao: "Prato cremoso feito com camarão, dendê e leite de coco." }
    ],
    cores: [ "green", "yellow" ]
  },
  {
    nome: "Minas Gerais",
    sigla: "MG",
    descricao: "Minas Gerais, localizado na região Sudeste do Brasil, é um estado rico em história, cultura e belezas naturais. Berço da Inconfidência Mineira e conhecido por suas serras, cachoeiras e cidades históricas, o estado encanta por sua diversidade. A capital, Belo Horizonte, é um centro urbano moderno e cosmopolita, enquanto cidades como Ouro Preto e Tiradentes preservam o charme do período colonial.",
    capital: "Belo Horizonte",
    simbolos: [
        {
            nome: "Inconfidência Mineira",
            descricao: "Movimento revolucionário que marcou a história do Brasil."
        },
        {
            nome: "Coração de Jesus",
            descricao: "Símbolo religioso muito presente na cultura mineira."
        },
        {
            nome: "Brócolis",
            descricao: "Um dos principais produtos agrícolas do estado."
        },
        {
            nome: "Cachoeira",
            descricao: "Representa a abundância de águas em Minas Gerais."
        },
        {
            nome: "Feijão tropeiro",
            descricao: "Prato típico da culinária mineira."
        }
    ],
    pontosTuristicos: [
        {
            nome: "Ouro Preto",
            descricao: "Cidade histórica com arquitetura colonial e rica história.",
            tipo: "Histórico"
        },
        {
            nome: "Tiradentes",
            descricao: "Pequena cidade charmosa com casarões coloniais e ruas de pedra.",
            tipo: "Histórico"
        },
        {
            nome: "Serra do Cipó",
            descricao: "Parque nacional com diversas trilhas e paisagens exuberantes.",
            tipo: "Natureza"
        },
        {
            nome: "Canastra",
            descricao: "Parque nacional com cachoeiras, cânions e fauna diversificada.",
            tipo: "Natureza"
        },
        {
            nome: "Inhotim",
            descricao: "Um dos maiores centros de arte contemporânea ao ar livre do mundo.",
            tipo: "Cultura"
        }
    ],
    pratosTipicos: [
        {
            nome: "Feijão tropeiro",
            descricao: "Prato tradicional feito com feijão, carnes secas, linguiça e outros ingredientes.",
            tipo: "Feijão"
        },
        {
            nome: "Pão de queijo",
            descricao: "Quitute mineiro feito com polvilho, queijo e outros ingredientes.",
            tipo: "Pão"
        },
        {
            nome: "Frango com quiabo",
            descricao: "Prato simples e saboroso, típico da culinária mineira.",
            tipo: "Aves"
        },
        {
            nome: "Suíno",
            descricao: "Carnes de porco preparadas de diversas formas.",
            tipo: "Carne"
        },
        {
            nome: "Cachorro-quente",
            descricao: "Versão mineira do cachorro-quente, com diversas opções de acompanhamentos.",
            tipo: "Fast food"
        }
    ],
    cores: ["blue", "green", "yellow"]
  },
  {
    nome: "Santa Catarina",
    sigla: "SC",
    descricao: "Localizado na região Sul do Brasil, Santa Catarina é um estado que encanta por suas paisagens exuberantes, praias paradisíacas, montanhas imponentes e cultura rica e diversificada. Com forte influência europeia, principalmente alemã e italiana, o estado possui uma gastronomia saborosa e tradições arraigadas. A capital, Florianópolis, é um centro urbano vibrante e cosmopolita, que contrasta com a tranquilidade de cidades históricas e o charme das pequenas vilas.",
    capital: "Florianópolis",
    simbolos: [
        {
            nome: "Florada do Ipê Amarelo",
            descricao: "Símbolo da primavera catarinense, suas flores amarelas embelezam as cidades.",
        },
        {
            nome: "Garoupa",
            descricao: "Peixe símbolo da pesca catarinense, presente em diversos pratos da culinária local.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praia de Bombinhas",
            descricao: "Considerada uma das mais belas praias do Brasil, com águas cristalinas e natureza exuberante.",
            tipo: "Praia",
        },
        {
            nome: "Serra do Rio do Rastro",
            descricao: "Uma das estradas mais bonitas do mundo, com paisagens montanhosas e curvas sinuosas.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Marreco recheado",
            descricao: "Prato tradicional da culinária catarinense, preparado com marreco recheado e acompanhamentos.",
            tipo: "Carne",
        },
        {
            nome: "Kuchen",
            descricao: "Bolo típico da culinária alemã, com diversas variações de recheio.",
            tipo: "Doce",
        },
    ],
    cores: ["green", "blue"]
  },
  {
    nome: "Paraná",
    sigla: "PR",
    descricao: "O Paraná, localizado na região Sul do Brasil, é conhecido por sua rica biodiversidade, com florestas exuberantes e diversas paisagens. Sua história está marcada pela colonização europeia, principalmente alemã e polonesa, que influenciaram sua cultura e tradições. A capital, Curitiba, é um centro urbano moderno e sustentável, com uma forte vocação para a inovação e a qualidade de vida.",
    capital: "Curitiba",
    simbolos: [
        {
            nome: "Pinheiro-do-Paraná",
            descricao: "Árvore símbolo do estado, explorada por sua madeira."
        },
        {
            nome: "Erva-mate",
            descricao: "Planta nativa, base para a produção do chimarrão."
        },
    ],
    pontosTuristicos: [
        {
            nome: "Cataratas do Iguaçu",
            descricao: "Uma das maiores quedas d'água do mundo, localizada na fronteira com a Argentina."
        },
        {
            nome: "Parque Nacional do Iguaçu",
            descricao: "Área de proteção ambiental que abriga as Cataratas do Iguaçu e outras belezas naturais."
        },
    ],
    pratosTipicos: [
        {
            nome: "Barreado",
            descricao: "Cozido de carne bovina, especiarias e outros ingredientes, preparado em uma panela de barro."
        },
        {
            nome: "Carne de onça",
            descricao: "Sanduíche típico feito com carne desfiada, molho especial e outros ingredientes."
        },
    ],
    cores: ["green", "red"]
  },
  {
    nome: "São Paulo",
    sigla: "SP",
    descricao: "O estado de São Paulo, localizado na região Sudeste do Brasil, é um dos mais importantes do país, tanto economicamente quanto culturalmente. Com uma grande diversidade geográfica, que vai desde a capital cosmopolita até o interior histórico e rural, São Paulo oferece uma variedade de experiências para seus visitantes. A influência de diversas culturas, como a italiana, portuguesa e japonesa, moldou a identidade paulista.",
    capital: "São Paulo",
    simbolos: [
        {
            nome: "Índio Guarani",
            descricao: "Povo indígena que habitava a região antes da colonização, símbolo da história e da cultura original.",
        },
        {
            nome: "Bico de pato",
            descricao: "Sambaqui típico da costa paulista, testemunho de antigas civilizações.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Avenida Paulista",
            descricao: "Uma das principais vias da cidade de São Paulo, com diversos edifícios históricos, museus e centros comerciais.",
            tipo: "Urbano",
        }
    ],
    pratosTipicos: [
        {
            nome: "Feijoada",
            descricao: "Prato nacional do Brasil, comumente preparado em São Paulo com diversas variações.",
            tipo: "Cozido",
        },
        {
            nome: "Pizza",
            descricao: "Herança da imigração italiana, a pizza paulista é famosa por sua variedade de sabores.",
            tipo: "Comida Italiana",
        },
    ],
    cores: ["blue", "red"]
  },
  {
    nome: "Espírito Santo",
    sigla: "ES",
    descricao: "O Espírito Santo, localizado na região Sudeste do Brasil, é um estado conhecido por suas praias paradisíacas, montanhas exuberantes e cultura vibrante. Com uma história marcada pela colonização portuguesa e por influências indígenas, o estado possui uma rica gastronomia, especialmente frutos do mar, e um povo acolhedor. A capital, Vitória, é um centro urbano moderno e cosmopolita, que contrasta com a tranquilidade de cidades históricas e o charme das pequenas vilas.",
    capital: "Vitória",
    simbolos: [
        {
            nome: "Pau-Brasil",
            descricao: "Árvore histórica que deu nome ao país e foi explorada no passado.",
        },
        {
            nome: "Boto",
            descricao: "Mamífero aquático presente nos rios e estuários do estado, considerado um animal sagrado por algumas culturas.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praia de Guarapari",
            descricao: "Famosa por suas areias monazíticas e pelas águas mornas, ideal para relaxar e tomar banho de sol.",
            tipo: "Praia",
        },
        {
            nome: "Parque Estadual da Pedra Azul",
            descricao: "Uma das maiores áreas de proteção ambiental do estado, com paisagens montanhosas e trilhas ecológicas.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Moqueca capixaba",
            descricao: "Prato à base de peixe, camarão e outros frutos do mar, cozido em um molho de dendê.",
            tipo: "Frutos do mar",
        },
        {
            nome: "Bolinho de bacalhau",
            descricao: "Petisco tradicional português, muito popular no Espírito Santo.",
            tipo: "Petisco",
        },
    ],
    cores: ["blue", "green"]
  },
  {
    nome: "Distrito Federal",
    sigla: "DF",
    descricao: "O Distrito Federal é a capital do Brasil e um importante centro político e administrativo do país. Localizado na região Centro-Oeste, Brasília, sua capital, é uma cidade planejada com uma arquitetura moderna e imponente. O DF se destaca por sua diversidade cultural, com influências de todas as regiões do Brasil, e por sua natureza exuberante, com parques e áreas verdes que contrastam com a urbanização.",
    capital: "Brasília",
    simbolos: [
        {
            nome: "Brasília",
            descricao: "A própria cidade é um símbolo da arquitetura moderna e do planejamento urbano."
        },
        {
            nome: "Pássaro Sabiá",
            descricao: "Ave símbolo da capital federal, representa a liberdade e a beleza da natureza."
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praça dos Três Poderes",
            descricao: "Coração político do país, abriga o Congresso Nacional, o Supremo Tribunal Federal e o Palácio do Planalto."
        },
        {
            nome: "Catedral Metropolitana de Brasília",
            descricao: "Ícone da arquitetura moderna, com design inovador e vitrais coloridos."
        },
        {
            nome: "Parque Nacional de Brasília",
            descricao: "Área de preservação ambiental com trilhas, lagos e fauna diversificada."
        },
    ],
    pratosTipicos: [
        {
            nome: "Galinhada",
            descricao: "Prato típico do Centro-Oeste, feito com frango caipira, arroz, farofa e legumes."
        },
        {
            nome: "Peixe assado",
            descricao: "Comum nas regiões de lagoas e represas, o peixe assado é uma opção saborosa e leve."
        },
    ],
    cores: ["yellow", "green"]
  },
  {
    nome: "Goiás",
    sigla: "GO",
    descricao: "Localizado na região Centro-Oeste do Brasil, Goiás é um estado conhecido por suas vastas áreas rurais, parques nacionais e cultura rica, marcada pela influência indígena e pela história do ciclo do ouro. A capital, Goiânia, é uma cidade moderna e planejada, com uma arquitetura imponente e uma vida cultural vibrante.",
    capital: "Goiânia",
    simbolos: [
        {
            nome: "Ipê Rosa",
            descricao: "Árvore símbolo do estado, conhecida por suas belas flores rosas que marcam a primavera.",
        },
        {
            nome: "Jalapão",
            descricao: "Região com paisagens exuberantes, cachoeiras e dunas, um dos principais destinos turísticos do estado.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Parque Nacional da Chapada dos Veadeiros",
            descricao: "Um dos parques nacionais mais antigos do Brasil, com paisagens exuberantes e rica biodiversidade.",
            tipo: "Natureza",
        },
        {
            nome: "Cidade de Goiás",
            descricao: "Patrimônio Mundial da UNESCO, com um rico centro histórico e construções coloniais.",
            tipo: "Histórico",
        },
    ],
    pratosTipicos: [
        {
            nome: "Empada Goiana",
            descricao: "Salgado tradicional, com recheio de frango desfiado e palmito.",
            tipo: "Salgado",
        },
        {
            nome: "Peixe na Telha",
            descricao: "Prato à base de peixe assado na telha, acompanhado de pirão e farofa.",
            tipo: "Peixe",
        },
    ],
    cores: ["green", "yellow"]
  },
  {
    nome: "Mato Grosso",
    sigla: "MT",
    descricao: "O Mato Grosso, localizado na região Centro-Oeste do Brasil, é um estado conhecido por sua vasta extensão territorial, rica biodiversidade e cultura marcada pela influência indígena. A região abriga a maior parte da Amazônia brasileira, além de vastas áreas do Cerrado. A capital, Cuiabá, é um centro econômico e cultural em constante desenvolvimento.",
    capital: "Cuiabá",
    simbolos: [
        {
            nome: "Arara Azul",
            descricao: "Ave símbolo da fauna mato-grossense, conhecida por suas belas penas azuis."
        },
        {
            nome: "Vestimenta Indígena",
            descricao: "Representa a rica cultura indígena presente no estado."
        },
        {
            nome: "Pantanal",
            descricao: "Maior planície alagada do mundo, localizada em grande parte no Mato Grosso."
        }
    ],
    pontosTuristicos: [
        {
            nome: "Pantanal Mato-Grossense",
            descricao: "Maior planície alagada do mundo, conhecida por sua rica biodiversidade e paisagens exuberantes.",
            tipo: "Natureza"
        },
        {
            nome: "Chapada dos Guimarães",
            descricao: "Formação rochosa com cachoeiras, trilhas e paisagens deslumbrantes.",
            tipo: "Natureza"
        },
        {
            nome: "Parque Nacional da Chapada dos Guimarães",
            descricao: "Área de proteção ambiental com diversas atrações naturais.",
            tipo: "Natureza"
        }
    ],
    pratosTipicos: [
        {
            nome: "Pacu assado",
            descricao: "Peixe de água doce típico da região, apreciado por seu sabor delicado.",
            tipo: "Peixe"
        },
        {
            nome: "Bugre",
            descricao: "Prato à base de carne seca desfiada, arroz, feijão e outros ingredientes, muito popular no interior.",
            tipo: "Comida caseira"
        },
        {
            nome: "Caldeirada de pintado",
            descricao: "Sopa rica em peixes e frutos do mar, típica da região pantaneira.",
            tipo: "Sopa"
        }
    ],
    cores: ["green", "blue", "yellow"]
  },
  {
    nome: "Mato Grosso do Sul",
    sigla: "MS",
    descricao: "O Mato Grosso do Sul, localizado na região Centro-Oeste do Brasil, é um estado conhecido por sua vasta extensão territorial, rica biodiversidade e cultura pantaneira. Com uma natureza exuberante, o estado abriga o Pantanal, a maior planície alagada do mundo, além de florestas e campos. Sua história está marcada pela exploração e pelo desenvolvimento da pecuária e da agricultura.",
    capital: "Campo Grande",
    simbolos: [
        {
            nome: "Onça-pintada",
            descricao: "Maior felino das Américas, símbolo da fauna pantaneira.",
        },
        {
            nome: "Garça-branca",
            descricao: "Ave símbolo do Pantanal, encontrada em grandes bandos nas lagoas e rios.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Pantanal",
            descricao: "A maior planície alagada do mundo, com uma rica biodiversidade e paisagens únicas.",
            tipo: "Natureza",
        },
        {
            nome: "Bonito",
            descricao: "Cidade conhecida por suas águas cristalinas e diversas opções de ecoturismo.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Pacu assado",
            descricao: "Peixe de água doce típico do Pantanal, preparado assado na brasa.",
            tipo: "Peixe",
        },
        {
            nome: "Carne de jacaré",
            descricao: "Considerada uma iguaria regional, a carne de jacaré é preparada de diversas formas.",
            tipo: "Carne",
        },
    ],
    cores: ["green", "blue"]
  },
  {
    nome: "Bahia",
    sigla: "BA",
    descricao: "A Bahia, localizada na região Nordeste do Brasil, é um estado conhecido por sua rica história, cultura diversificada e paisagens exuberantes. Com influências indígenas, africanas e europeias, a Bahia possui um patrimônio cultural riquíssimo, expresso em sua música, culinária e festas populares. Seus litorais, com praias paradisíacas e recifes de corais, atraem turistas do mundo todo. A capital, Salvador, é um centro histórico e cultural vibrante, Patrimônio Mundial da UNESCO.",
    capital: "Salvador",
    simbolos: [
        {
            nome: "Axé",
            descricao: "Ritmo musical e filosofia de vida que representa a cultura afro-brasileira da Bahia."
        },
        {
            nome: "Carnaval de Salvador",
            descricao: "Maior carnaval de rua do mundo, com blocos afro, trios elétricos e muita alegria."
        },
    ],
    pontosTuristicos: [
        {
            nome: "Pelourinho",
            descricao: "Centro histórico de Salvador, com casarões coloniais e igrejas barrocas."
        },
        {
            nome: "Chapada Diamantina",
            descricao: "Parque nacional com cachoeiras, cânions e trilhas para aventureiros."
        },
    ],
    pratosTipicos: [
        {
            nome: "Acarajé",
            descricao: "Bolinho de feijão fradinho frito no azeite de dendê, acompanhado de vatapá e camarão."
        },
        {
            nome: "Moqueca",
            descricao: "Prato à base de peixe ou frutos do mar, cozido em um molho de dendê, leite de coco e especiarias."
        },
    ],
    cores: ["yellow", "green"]
  },
  {
    nome: "Sergipe",
    sigla: "SE",
    descricao: "Sergipe, o menor estado do Brasil, é conhecido por suas praias paradisíacas, rios tranquilos e rica história. Com uma cultura vibrante, marcada pela influência indígena e africana, o estado possui uma gastronomia saborosa e tradições arraigadas. A capital, Aracaju, é um centro urbano moderno e acolhedor, que oferece diversas opções de lazer e entretenimento.",
    capital: "Aracaju",
    simbolos: [
        {
            nome: "Mangue",
            descricao: "Ecossistema característico do litoral sergipano, de grande importância ambiental.",
        },
        {
            nome: "Caranguejo",
            descricao: "Crustáceo abundante nos manguezais, ingrediente principal de diversos pratos típicos.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praia de Atalaia",
            descricao: "Uma das praias mais famosas de Aracaju, com águas calmas e extensa faixa de areia.",
            tipo: "Praia",
        },
        {
            nome: "Cumbuco",
            descricao: "Aldeia indígena com rica cultura e tradições, localizada no litoral sul sergipano.",
            tipo: "Histórico e Cultural",
        },
    ],
    pratosTipicos: [
        {
            nome: "Moqueca de Camarão",
            descricao: "Prato típico da culinária sergipana, preparado com camarões frescos, leite de coco e especiarias.",
            tipo: "Peixe",
        },
        {
            nome: "Tapioca",
            descricao: "Alimento versátil e saboroso, preparado com fécula de mandioca e diversos recheios.",
            tipo: "Acompanhamento",
        },
    ],
    cores: ["blue", "green"]
  },
  {
    nome: "Alagoas",
    sigla: "AL",
    descricao: "Alagoas, um estado localizado na região Nordeste do Brasil, é conhecido por suas belas praias, rios e lagoas. Com uma rica história que se entrelaça com a cultura indígena e a colonização portuguesa, Alagoas possui um patrimônio cultural diversificado. Sua capital, Maceió, é um centro turístico vibrante, que atrai visitantes de todo o mundo.",
    capital: "Maceió",
    simbolos: [
        {
            nome: "Caranguejo",
            descricao: "Símbolo da culinária alagoana, presente em diversos pratos.",
        },
        {
            nome: "Mangueira",
            descricao: "Árvore frutífera abundante no estado, símbolo da cultura alagoana.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praia do Gunga",
            descricao: "Uma das praias mais famosas de Alagoas, com falésias coloridas e águas cristalinas.",
            tipo: "Praia",
        },
        {
            nome: "Falésias de Maceió",
            descricao: "Formações rochosas coloridas que se estendem por vários quilômetros ao longo da costa.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Moqueca",
            descricao: "Prato à base de peixe ou frutos do mar, cozido em um molho de leite de coco e especiarias.",
            tipo: "Peixe",
        },
        {
            nome: "Tapioca",
            descricao: "Alimento feito à base de fécula de mandioca, recheado com diversos ingredientes.",
            tipo: "Acompanhamento",
        },
    ],
    cores: ["blue", "green"]
  },
  {
    nome: "Pernambuco",
    sigla: "PE",
    descricao: "Localizado na região Nordeste do Brasil, Pernambuco é um estado que encanta por sua rica história, cultura vibrante e paisagens diversificadas. Berço do Carnaval, a cultura pernambucana é marcada por fortes influências africanas e europeias, resultando em uma miscigenação rica e única. Recife, a capital, é um centro urbano cosmopolita com uma vida noturna animada e um patrimônio histórico preservado.",
    capital: "Recife",
    simbolos: [
      {
        nome: "Mangueira",
        descricao: "Árvore símbolo do estado, presente em diversas manifestações culturais e paisagens.",
      },
      {
        nome: "Boneco de Olinda",
        descricao: "Figura emblemática do Carnaval de Olinda, representando a cultura popular.",
      },
    ],
    pontosTuristicos: [
      {
        nome: "Recife Antigo",
        descricao: "Centro histórico com casarões coloniais, igrejas e museus.",
        tipo: "Histórico"
      },
      {
        nome: "Praias de Porto de Galinhas",
        descricao: "Famosas por suas piscinas naturais e paisagens paradisíacas.",
        tipo: "Praia"
      },
      {
        nome: "Marco Zero",
        descricao: "Ponto de referência da cidade do Recife, com monumentos históricos e culturais.",
        tipo: "Histórico"
      },
    ],
    pratosTipicos: [
      {
        nome: "Bobó de camarão",
        descricao: "Prato à base de camarão, leite de coco e outros ingredientes, típico da culinária nordestina.",
        tipo: "Frutos do mar"
      },
      {
        nome: "Carne de sol",
        descricao: "Carne bovina salgada e seca ao sol, ingrediente principal de diversos pratos.",
        tipo: "Carne"
      },
    ],
    cores: ["red", "yellow"]
  },
  {
    nome: "Paraíba",
    sigla: "PB",
    descricao: "A Paraíba, localizada na região Nordeste do Brasil, é um estado que encanta por sua rica história, cultura vibrante e paisagens diversificadas, que vão desde o litoral paradisíaco até o sertão árido. Com uma forte influência indígena e africana, o estado possui uma gastronomia saborosa e tradições arraigadas. A capital, João Pessoa, é uma cidade moderna e acolhedora, conhecida como a 'Suíça brasileira'.",
    capital: "João Pessoa",
    simbolos: [
        {
            nome: "Mangueira",
            descricao: "Árvore símbolo do estado, que oferece sombra e frutos, além de ser utilizada na produção de artesanato.",
        },
        {
            nome: "Carnaúba",
            descricao: "Palmeira típica do sertão, utilizada na produção de cera, óleo e outros produtos.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praia de Tambaba",
            descricao: "Uma das praias mais famosas da Paraíba, conhecida por suas falésias e águas cristalinas.",
            tipo: "Praia",
        },
        {
            nome: "Pico do Jabitacá",
            descricao: "O ponto mais alto da Paraíba, oferecendo uma vista panorâmica da região.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Carne de sol com pirão",
            descricao: "Prato típico do sertão paraibano, feito com carne seca desfiada e pirão de queijo.",
            tipo: "Carne",
        },
        {
            nome: "Tapioca",
            descricao: "Alimento versátil e saboroso, feito com fécula de mandioca, consumido com diversos recheios.",
            tipo: "Acompanhamento",
        },
    ],
    cores: ["red", "green"]
  },
  {
    nome: "Rio Grande do Norte",
    sigla: "RN",
    descricao: "O Rio Grande do Norte, localizado na região Nordeste do Brasil, é um estado que encanta por suas belas praias, dunas gigantescas e uma rica cultura popular. Conhecido como a 'Terra do Sol', o estado possui um clima quente e seco, ideal para quem busca sol e mar. Sua história está marcada pela colonização portuguesa e por uma forte influência indígena, que se manifesta em suas tradições e artesanato.",
    capital: "Natal",
    simbolos: [
        {
            nome: "Carnaval de Natal",
            descricao: "Uma das maiores festas de rua do Brasil, com muita música, dança e alegria."
        },
        {
            nome: "Dunas de Genipabu",
            descricao: "Um dos maiores campos de dunas do mundo, ideal para a prática de esportes radicais."
        },
    ],
    pontosTuristicos: [
        {
            nome: "Praia de Pipa",
            descricao: "Uma das praias mais famosas do Brasil, com águas cristalinas e paisagens paradisíacas."
        },
        {
            nome: "Fortaleza dos Reis Magos",
            descricao: "Construída no século XVI, é um importante marco histórico da cidade de Natal."
        },
    ],
    pratosTipicos: [
        {
            nome: "Baião de dois",
            descricao: "Prato típico nordestino, feito com arroz, feijão, carne seca e outros ingredientes."
        },
        {
            nome: "Sarapatel",
            descricao: "Guisado feito com miúdos de porco, sangue e vinagre, temperado com especiarias."
        },
    ],
    cores: ["yellow", "blue"]
  },
  {
    nome: "Ceará",
    sigla: "CE",
    descricao: "O Ceará, localizado na região Nordeste do Brasil, é um estado conhecido por suas belas praias, rica cultura e forte identidade. Com uma história marcada pela colonização portuguesa, o estado possui um povo caloroso e hospitaleiro. Suas paisagens áridas contrastam com a exuberância dos litorais, formando um cenário único. A capital, Fortaleza, é um importante centro econômico e turístico, oferecendo diversas opções de lazer e entretenimento.",
    capital: "Fortaleza",
    simbolos: [
        {
            nome: "Castanhola",
            descricao: "Instrumento musical típico, utilizado em diversas manifestações culturais.",
        },
        {
            nome: "Coqueiro",
            descricao: "Árvore símbolo do estado, presente em diversas regiões cearenses.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Jericoacoara",
            descricao: "Considerada uma das praias mais bonitas do mundo, com dunas, lagoas e ventos ideais para o kitesurf.",
            tipo: "Praia",
        },
        {
            nome: "Cânion do Apodi",
            descricao: "Um dos maiores cânions do Brasil, com paisagens deslumbrantes e trilhas ecológicas.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Carne de sol",
            descricao: "Carne bovina salgada e seca ao sol, ingrediente principal de diversos pratos cearenses.",
            tipo: "Carne",
        },
        {
            nome: "Bobó de camarão",
            descricao: "Prato cremoso feito com camarão, leite de coco e especiarias.",
            tipo: "Frutos do mar",
        },
    ],
    cores: ["blue", "yellow"]
  },
  {
    nome: "Piauí",
    sigla: "PI",
    descricao: "O Piauí, localizado na região Nordeste do Brasil, é um estado marcado por paisagens contrastantes, que vão desde o sertão árido até as férteis áreas do litoral. Sua história está intrinsecamente ligada à cultura indígena e à colonização portuguesa. A capital, Teresina, é um centro urbano em constante desenvolvimento, com uma população acolhedora e um ritmo de vida mais tranquilo.",
    capital: "Teresina",
    simbolos: [
        {
            nome: "Buriti",
            descricao: "Palmeira símbolo do estado, utilizada na produção de diversos produtos.",
        },
        {
            nome: "Carnaúba",
            descricao: "Palmeira que fornece cera, utilizada em diversos produtos industriais.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Parnaíba",
            descricao: "Cidade litorânea com belas praias e dunas, ideal para o turismo ecológico.",
            tipo: "Praia",
        },
        {
            nome: "Parque Nacional da Serra da Capivara",
            descricao: "Um dos mais importantes sítios arqueológicos da América, com pinturas rupestres e vestígios da pré-história.",
            tipo: "Histórico e Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Sarapatel",
            descricao: "Prato típico feito com miúdos de porco, sangue e especiarias, servido em um caldeirão de barro.",
            tipo: "Carne",
        },
        {
            nome: "Baião de dois",
            descricao: "Prato feito com arroz, feijão, carne seca desfiada e outros ingredientes.",
            tipo: "Arroz",
        },
    ],
    cores: ["yellow", "green"]
  },
  {
    nome: "Maranhão",
    sigla: "MA",
    descricao: "O Maranhão, localizado na região Nordeste do Brasil, é um estado que encanta por sua rica história, cultura diversificada e paisagens exuberantes. Com influências indígenas, africanas e europeias, o estado possui um patrimônio histórico e cultural riquíssimo. Seus Lençóis Maranhenses, um dos maiores campos de dunas do mundo, são um dos principais destinos turísticos do Brasil.",
    capital: "São Luís",
    simbolos: [
        {
            nome: "Babaçu",
            descricao: "Palmeira típica da região, fonte de alimento e matéria-prima para diversos produtos.",
        },
        {
            nome: "Bumba-meu-boi",
            descricao: "Manifestação cultural popular, considerada Patrimônio Cultural Imaterial da Humanidade pela UNESCO.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Lençóis Maranhenses",
            descricao: "Um dos maiores campos de dunas do mundo, com lagoas cristalinas entre as dunas.",
            tipo: "Natureza",
        },
        {
            nome: "Centro Histórico de São Luís",
            descricao: "Patrimônio Mundial da UNESCO, com casarões coloniais e igrejas barrocas.",
            tipo: "Histórico",
        },
    ],
    pratosTipicos: [
        {
            nome: "Bobó de camarão",
            descricao: "Prato típico à base de camarão, leite de coco e azeite de dendê.",
            tipo: "Marisco",
        },
        {
            nome: "Caldeirada de peixe",
            descricao: "Sopa de peixe com diversos ingredientes, muito popular na região costeira.",
            tipo: "Peixe",
        },
    ],
    cores: ["yellow", "blue"]
  },
  {
    nome: "Tocantins",
    sigla: "TO",
    descricao: "O Tocantins, um estado relativamente jovem, é conhecido por suas vastas áreas de cerrado, rios caudalosos e paisagens naturais exuberantes. Sua história está marcada pela exploração de ouro e pela luta pela emancipação. A capital, Palmas, é uma cidade planejada, moderna e com um ritmo de vida mais tranquilo.",
    capital: "Palmas",
    simbolos: [
        {
            nome: "Jacarandá",
            descricao: "Árvore símbolo do estado, conhecida por suas belas flores roxas.",
        },
        {
            nome: "Sucuriju",
            descricao: "Maior serpente da América do Sul, encontrada em algumas regiões do Tocantins.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Jalapão",
            descricao: "Região com paisagens exuberantes, cachoeiras, dunas e rios cristalinos.",
            tipo: "Natureza",
        },
        {
            nome: "Praia da Graciosa",
            descricao: "Uma das praias mais conhecidas do Tocantins, localizada no Lago da Usina de Lajeado.",
            tipo: "Praia",
        },
    ],
    pratosTipicos: [
        {
            nome: "Peixe do Araguaia",
            descricao: "Diversas espécies de peixes de água doce, como o pacu e o dourado, são preparadas de diversas formas.",
            tipo: "Peixe",
        },
        {
            nome: "Arroz carreteiro",
            descricao: "Prato típico do Centro-Oeste, com arroz, carne seca desfiada e temperos variados.",
            tipo: "Arroz",
        },
    ],
    cores: ["green", "yellow"]
  },
  {
    nome: "Roraima",
    sigla: "RR",
    descricao: "Localizado na região Norte do Brasil, Roraima é um estado marcado por sua exuberante natureza amazônica, rica em biodiversidade e paisagens deslumbrantes. Com uma forte presença indígena, o estado possui uma cultura única, marcada por tradições milenares e um profundo respeito pela natureza. A capital, Boa Vista, é um centro urbano em constante crescimento, que se destaca pela sua hospitalidade e pela proximidade com a floresta.",
    capital: "Boa Vista",
    simbolos: [
        {
            nome: "Jacaré-açu",
            descricao: "Maior jacaré da América, símbolo da fauna local e da força da natureza.",
        },
        {
            nome: "Carambola",
            descricao: "Fruta tropical exótica, muito apreciada por seu sabor adocicado e aroma intenso.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Monte Roraima",
            descricao: "Uma das montanhas mais antigas do mundo, com paisagens únicas e rica biodiversidade.",
            tipo: "Natureza",
        },
        {
            nome: "Parque Nacional do Viruá",
            descricao: "Uma das maiores áreas protegidas da Amazônia, com diversas trilhas e paisagens exuberantes.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Tacacá",
            descricao: "Sopa típica da Amazônia, feita com tucupi, jambu e camarão seco.",
            tipo: "Sopa",
        },
        {
            nome: "Pato no tucupi",
            descricao: "Prato regional feito com pato cozido no tucupi, um caldo extraído da mandioca brava.",
            tipo: "Carne",
        },
    ],
    cores: ["green", "brown"]
  },
  {
    nome: "Rondônia",
    sigla: "RO",
    descricao: "Localizado na região Norte do Brasil, Rondônia é um estado que se destaca por sua rica biodiversidade, com vastas florestas tropicais e rios caudalosos. Sua história está marcada pela exploração da borracha e pela colonização, que transformaram a região em um importante centro agrícola e pecuário. A capital, Porto Velho, é uma cidade em constante desenvolvimento, com uma população diversificada e um ritmo de vida acelerado.",
    capital: "Porto Velho",
    simbolos: [
        {
            nome: "Uirapuru",
            descricao: "Ave de canto melodioso, considerada símbolo da fauna rondoniense."
        },
        {
            nome: "Castanha-do-Brasil",
            descricao: "Semente de grande importância econômica para o estado, extraída da castanheira."
        },
    ],
    pontosTuristicos: [
        {
            nome: "Rio Madeira",
            descricao: "Um dos principais rios da Amazônia, com paisagens exuberantes e diversas opções de atividades turísticas.",
            tipo: "Natureza"
        },
        {
            nome: "Parque Nacional da Pacaás Novas",
            descricao: "Uma das maiores unidades de conservação do Brasil, com rica biodiversidade e paisagens deslumbrantes.",
            tipo: "Natureza"
        },
    ],
    pratosTipicos: [
        {
            nome: "Tucupi com Jambu",
            descricao: "Prato típico da culinária amazônica, feito com caldo de mandioca fermentado e uma erva com sabor picante.",
            tipo: "Sopa"
        },
        {
            nome: "Peixe Tambaqui Assado",
            descricao: "Peixe de água doce muito apreciado na região, geralmente assado na brasa.",
            tipo: "Peixe"
        },
    ],
    cores: ["green", "brown"]
  },
  {
    nome: "Pará",
    sigla: "PA",
    descricao: "O Pará, localizado na região Norte do Brasil, é um estado de grande diversidade cultural e natural, marcado pela exuberância da Amazônia. Com uma rica história que mescla elementos indígenas, afro-brasileiros e portugueses, o estado possui uma cultura única e vibrante. Sua gastronomia é um verdadeiro banquete de sabores exóticos, com destaque para os peixes de água doce e os frutos do mar. A capital, Belém, é um centro cultural e econômico que preserva a tradição e a modernidade.",
    capital: "Belém",
    simbolos: [
        {
            nome: "Vitória-régia",
            descricao: "A maior flor d'água do mundo, símbolo da beleza e da fragilidade da natureza amazônica."
        },
        {
            nome: "Búzio",
            descricao: "Concha utilizada como instrumento musical e adorno, representando a cultura indígena."
        },
        {
            nome: "Castanha-do-Pará",
            descricao: "Semente rica em nutrientes, um dos principais produtos da economia paraense."
        },
    ],
    pontosTuristicos: [
        {
            nome: "Ilha do Marajó",
            descricao: "A maior ilha fluvial do mundo, com vastas áreas de várzea e rica biodiversidade."
        },
        {
            nome: "Ver-o-Peso",
            descricao: "Um dos maiores mercados públicos da América Latina, onde se encontram diversos produtos da região."
        },
        {
            nome: "Parque Nacional da Amazônia",
            descricao: "Uma das maiores unidades de conservação do Brasil, com uma rica biodiversidade."
        },
    ],
    pratosTipicos: [
        {
            nome: "Tacacá",
            descricao: "Sopa típica feita com tucupi, jambu e camarão seco."
        },
        {
            nome: "Pato no tucupi",
            descricao: "Prato exótico feito com pato cozido no tucupi, um caldo extraído da mandioca brava."
        },
        {
            nome: "Vatapá",
            descricao: "Um patê à base de camarão seco, pão amanhecido, azeite de dendê e especiarias."
        },
    ],
    cores: ["green", "yellow"]
  },
  {
    nome: "Amazonas",
    sigla: "AM",
    descricao: "O Amazonas é o maior estado brasileiro em extensão territorial e o que possui a maior biodiversidade do planeta. Sua floresta amazônica, a maior floresta tropical do mundo, abriga uma rica fauna e flora, além de diversas comunidades indígenas. A capital, Manaus, é um centro urbano em constante desenvolvimento, com uma rica história e cultura.",
    capital: "Manaus",
    simbolos: [
        {
            nome: "Boto cor-de-rosa",
            descricao: "Mamífero aquático símbolo da Amazônia, conhecido por lendas e mitos.",
        },
        {
            nome: "Vitória-régia",
            descricao: "Planta aquática gigante, símbolo da beleza e da exuberância da Amazônia.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Rio Negro",
            descricao: "Um dos maiores rios do mundo, conhecido por suas águas escuras e biodiversidade.",
            tipo: "Natureza",
        },
        {
            nome: "Encontro das Águas",
            descricao: "Fenômeno natural onde as águas do Rio Negro e do Rio Solimões se encontram sem se misturar.",
            tipo: "Natureza",
        },
    ],
    pratosTipicos: [
        {
            nome: "Tucupi",
            descricao: "Caldo feito a partir da mandioca brava, base para muitos pratos da culinária amazônica.",
            tipo: "Caldo",
        },
        {
            nome: "Pato no tucupi",
            descricao: "Prato típico da culinária amazônica, feito com pato caipira cozido no tucupi.",
            tipo: "Carne",
        },
    ],
    cores: ["green", "brown"]
  },
  {
    nome: "Amapá",
    sigla: "AP",
    descricao: "O Amapá, localizado na região Norte do Brasil, é um estado conhecido por sua rica biodiversidade, com vastas florestas tropicais e manguezais. Sua cultura é fortemente influenciada pelos povos indígenas, que habitam a região há milênios. A capital, Macapá, é um centro urbano em constante desenvolvimento, com uma forte identidade amazônica.",
    capital: "Macapá",
    simbolos: [
        {
            nome: "Urubu-rei",
            descricao: "Ave símbolo do estado, conhecida por sua beleza e importância cultural para os povos indígenas.",
        },
        {
            nome: "Tartaruga marinha",
            descricao: "Espécie protegida, símbolo da fauna marinha do Amapá.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Ilha de Marajó",
            descricao: "A maior ilha fluvial do mundo, com paisagens exuberantes e rica biodiversidade.",
            tipo: "Natureza"
        },
        {
            nome: "Fortaleza de São José de Macapá",
            descricao: "Construção histórica que guarda a memória da ocupação portuguesa na região.",
            tipo: "Histórico"
        },
    ],
    pratosTipicos: [
        {
            nome: "Maniçoba",
            descricao: "Prato típico da culinária amazônica, feito com folhas de mandioca brava.",
            tipo: "Vegetariano"
        },
        {
            nome: "Tacacá",
            descricao: "Sopa indígena feita com tucupi, jambu e camarão seco.",
            tipo: "Sopa"
        },
    ],
    cores: ["green", "brown"]
  },
  {
    nome: "Acre",
    sigla: "AC",
    descricao: "O Acre, localizado na Região Norte do Brasil, é um estado conhecido por sua exuberante Floresta Amazônica, rica biodiversidade e cultura indígena. Sua história está marcada pela exploração da borracha e pela luta pela integração nacional. A capital, Rio Branco, é um centro urbano em constante desenvolvimento, que busca conciliar crescimento econômico com a preservação ambiental.",
    capital: "Rio Branco",
    simbolos: [
        {
            nome: "Víbora da Jararaca",
            descricao: "Réptil símbolo do estado, presente em diversas lendas indígenas.",
        },
        {
            nome: "Castanha-do-Brasil",
            descricao: "Semente nativa da Amazônia, um dos principais produtos da economia acreana.",
        },
    ],
    pontosTuristicos: [
        {
            nome: "Floresta Nacional do Purus",
            descricao: "Uma das maiores unidades de conservação do Brasil, com rica biodiversidade e paisagens exuberantes.",
            tipo: "Natureza",
        },
        {
            nome: "Museu da Borracha",
            descricao: "Conta a história da exploração da borracha na região e o papel dos seringueiros.",
            tipo: "Histórico",
        },
    ],
    pratosTipicos: [
        {
            nome: "Tacacá",
            descricao: "Sopa típica da Amazônia, feita com tucupi, jambu e camarão seco.",
            tipo: "Sopa",
        },
        {
            nome: "Pato no tucupi",
            descricao: "Prato exótico, feito com pato cozido no tucupi, um caldo extraído da mandioca brava.",
            tipo: "Carne",
        },
    ],
    cores: ["green", "brown"]
  }
]