function salvar()
{
    var tabela = document.getElementById('tabelaCredito');
    var tr = document.createElement('tr');
    var tdNome = document.createElement('td');
    var tdValor = document.createElement('td');

    tdNome.textContent = 'credito';
    tdValor.textContent = '100';

    tr.appendChild(tdNome);
    tr.appendChild(tdValor);
    tabela.appendChild(tr);
}