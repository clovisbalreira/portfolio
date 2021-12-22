function tabela(id , nome , valor)
{
    var tabela = document.getElementById(id);
    var tr = document.createElement('tr');
    var tdNome = document.createElement('td');
    var tdValor = document.createElement('td');

    tdNome.textContent = nome;
    tdValor.textContent = 'R$ '+valor;

    tr.appendChild(tdNome);
    tr.appendChild(tdValor);
    tabela.appendChild(tr);
}