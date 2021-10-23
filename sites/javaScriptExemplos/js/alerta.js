function linha(){
    document.write('<hr>')
}

function alerta(){
    alert('Funcionou')
}

function confirmacao(){
    confirm("Aperte o botão")
}

function digitar(){
    prompt("Digite seu nome")
}

function mudarPagina(){
    open("https://www.google.com")
}

function mudarPaginaAtual(){
    location = ("https://www.google.com")
}

function validacao(){
    formulario = document.meuFormulario;
    arroba = formulario.email.value.indexOf("@")
    if (arroba == -1){
        alert("E-mail-invalido");
        return (false);
    }
}

function janelaPopup(url){
    window.open(url , "popup" , "width=400,height=303");
}
