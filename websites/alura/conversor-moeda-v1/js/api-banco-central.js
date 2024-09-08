const dataAtual = '3-27-2023'//new Date().toLocaleDateString('en-US').replace('/','-').replace('/','-');
url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json&$select=simbolo,nomeFormatado`;
