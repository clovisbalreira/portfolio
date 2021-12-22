function somaConta(conta)
{
    var soma = 0;
    for(var i = 0 ; i < conta.length ; i++)
    {
        soma += parseInt(conta[i][1]);
    }
    return soma;
}