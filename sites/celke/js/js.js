/* alert('Hello World') */
function alterarConteudo(){
    document.getElementById('exemplo').innerHTML = "Hello World!"
}

function somar(a, b){
    const somar = a + b
    document.getElementById('exemplo').innerHTML = `Valor de ${a} + ${b} = ${somar}`
}

var nome = 'Jubileu'
var idade = '14'
var curso = 'JavaScript'

document.write("O Aluno " + nome + ", tem a idade de " + idade + ". Está inscrito no " + curso)