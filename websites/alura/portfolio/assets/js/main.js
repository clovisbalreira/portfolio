let projetos = [
    { titulo : 'Conversor de moeda v 1.0', link : '../conversor-moeda-v1/index.html'},
    { titulo : 'Conversor de moeda v 2.0', link : '../conversor-moeda-v2/index.html'},
    { titulo : 'Alura Flix V 1.0', link : '../alura-flix-v1/index.html'},
    { titulo : 'Alura Flix V 2.0', link : '../alura-flix-v2/index.html'},
    { titulo : 'Tabela de Classificação V 1.0', link : '../tabela-v1/index.html'},
    { titulo : 'Tabela de Classificação V 2.0', link : '../tabela-v2/index.html'},
    { titulo : 'Super Trunfo', link : '../super-trunfo/index.html'},
    { titulo : 'Mentalismo V 1.0', link : '../mentalista-v1/index.html'},
    { titulo : 'Mentalismo V 2.0', link : '../mentalista-v2/index.html'},
    { titulo : 'Calculadora Média', link : '../calculadora-media/index.html'},
    { titulo : 'Clone spotify', link : '../spotify/index.html'},
    { titulo : 'Gemine', link : '../gemine/index.html'},
    { titulo : 'Gemine Estado', link : '../gemine-estado/index.html'},
]

let desafios = [
    { titulo : "1º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia01.html" },
    { titulo : "2º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia02.html" },
    { titulo : "3º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia03.html" },
    { titulo : "4º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia04.html" },
    { titulo : "5º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia05.html" },
    { titulo : "6º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia06.html" },
    { titulo : "7º Dia", link : "../../../sites/alura-imersao/desafios-alura/dia07.html" },   
]
                    
function mudaTema(){
    document.body.classList.toggle  ("dark")
}

function mostrar(id, classe, dados ){
    let divProjetos = document.getElementById(id)
    let ul = document.createElement('ul')
    dados.forEach( dado => {
        let li = document.createElement('li')
        li.classList.add(classe)
        let a = document.createElement('a')
        a.textContent = dado.titulo
        a.href = dado.link
        a.target = '_black'
        li.appendChild(a)
        let embed = document.createElement('embed')
        embed.classList.add('play')
        embed.type = 'video/webm'
        embed.height = '350px'
        embed.src = dado.link
        li.appendChild(embed)
        ul.appendChild(li)
    })
    divProjetos.appendChild(ul)
}
mostrar('projetos', 'projetos-item', projetos)
mostrar('desafios', 'desafios-item', desafios)
