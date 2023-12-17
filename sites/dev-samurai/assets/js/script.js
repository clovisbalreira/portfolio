let projetos = [
    {nome:'Olá Mundo', link:'./logica-programacao-avancada/ola-mundo.html'},
    {nome:'I.M.C.', link:'./logica-programacao-avancada/imc.html'},
    {nome:'Olá', link:'./logica-programacao-avancada/ola.html'},
    {nome:'Olá com variação', link:'./logica-programacao-avancada/ola-variacao.html'},
    {nome:'Repetição', link:'./logica-programacao-avancada/repeticao.html'},
    {nome:'Calculadora', link:'./logica-programacao-avancada/calculadora.html'},
    {nome:'Ping Pong', link:'./ping-pong/index.html'},
    {nome:'Charset', link:'./javascript-basico/charset.html'},
    {nome:'If Verdadeiro', link:'./javascript-basico/if-verdadeiro.html'},
    {nome:'Comentarios', link:'./javascript-basico/comentarios.html'},
    {nome:'Tipos Dados', link:'./javascript-basico/tipos-dados.html'},
    {nome:'String', link:'./javascript-basico/string.html'},
    {nome:'Number', link:'./javascript-basico/number.html'},
    {nome:'Boolean', link:'./javascript-basico/boolean.html'},
    {nome:'Infinity', link:'./javascript-basico/infinity.html'},
    {nome:'', link:''},
]
for(projeto of projetos){
    let a = document.createElement('a')
    a.innerText = projeto.nome
    a.setAttribute('href',projeto.link)
    document.body.append(a)
}