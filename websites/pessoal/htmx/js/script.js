document.getElementById('carregar-btn').addEventListener('click', function() {
    fetch('conteudo.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar conteúdo:', error);
        });
});
