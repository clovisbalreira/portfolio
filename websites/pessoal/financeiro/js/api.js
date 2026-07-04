/********************************************************************
 * api.js
 * ------------------------------------------------------------------
 * Integração com APIs do Governo Federal
 *
 * IMPORTANTE:
 * Este arquivo é um MODELO.
 * Os endpoints abaixo são exemplos.
 * Consulte a documentação oficial da API que você escolher
 * (Tesouro Nacional, SICONFI, Portal da Transparência etc.)
 * e substitua as URLs.
 ********************************************************************/

/**************************************************************
 * CONFIGURAÇÃO DA API
 **************************************************************/

// URL base da API.
//
// Exemplos:
//
// https://api.exemplo.gov.br
// https://apidatalake.tesouro.gov.br
//
const API_BASE = "";

// Caso a API utilize Token:
//
// const TOKEN = "SEU_TOKEN";
//
// Depois envie:
//
// headers:{
//     Authorization: `Bearer ${TOKEN}`
// }

/**************************************************************
 * FUNÇÃO GENÉRICA PARA CONSULTAR A API
 **************************************************************/

async function consultarAPI(endpoint){

    try{

        const resposta = await fetch(API_BASE + endpoint,{

            method:"GET",

            headers:{

                "Content-Type":"application/json",

                // Caso exista autenticação:
                //
                // Authorization:
                // `Bearer ${TOKEN}`

            }

        });

        if(!resposta.ok){

            throw new Error(
                "Erro HTTP " + resposta.status
            );

        }

        return await resposta.json();

    }

    catch(erro){

        console.error(erro);

        return null;

    }

}

/**************************************************************
 * RECEITA
 **************************************************************/

/*

Objetivo

Buscar a Receita Arrecadada.

Exemplo

GET

/receitas

Parâmetros

ano
mes

Exemplo completo

/receitas?ano=2026&mes=7

Resposta esperada

{

    "valor":2150000000000

}

*/

async function obterReceita(ano,mes){

    const endpoint =
    `/receitas?ano=${ano}&mes=${mes}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * DESPESAS
 **************************************************************/

/*

GET

/despesas

Parâmetros

ano

mes

Resposta

{

    "valor":2080000000000

}

*/

async function obterDespesas(ano,mes){

    const endpoint =
    `/despesas?ano=${ano}&mes=${mes}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * DÍVIDA PÚBLICA
 **************************************************************/

/*

GET

/divida-publica

Resposta

{

    "valor":7600000000000

}

*/

async function obterDivida(ano){

    const endpoint =
    `/divida-publica?ano=${ano}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * GASTOS POR MINISTÉRIO
 **************************************************************/

/*

GET

/gastos-ministerio

Resposta

[

{

"ministerio":"Saúde",

"valor":150000000

},

{

"ministerio":"Educação",

"valor":120000000

}

]

*/

async function obterMinisterios(ano,mes){

    const endpoint =
    `/gastos-ministerio?ano=${ano}&mes=${mes}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * GASTOS POR ESTADO
 **************************************************************/

/*

GET

/gastos-estados

Resposta

[

{

"estado":"RS",

"valor":100000

},

{

"estado":"SP",

"valor":300000

}

]

*/

async function obterEstados(ano){

    const endpoint =
    `/gastos-estados?ano=${ano}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * GASTOS POR PROGRAMA
 **************************************************************/

/*

GET

/programas

*/

async function obterProgramas(ano){

    const endpoint =
    `/programas?ano=${ano}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * SÉRIE HISTÓRICA
 **************************************************************/

/*

GET

/serie-historica

Parâmetros

inicio

fim

*/

async function obterSerieHistorica(
inicio,
fim
){

    const endpoint =
    `/serie-historica?inicio=${inicio}&fim=${fim}`;

    return await consultarAPI(endpoint);

}

/**************************************************************
 * FUNÇÃO PRINCIPAL
 **************************************************************/

async function atualizarPainel(){

    const ano =
    document.getElementById("ano").value;

    const mes =
    document.getElementById("mes").value;

    const receita =
    await obterReceita(ano,mes);

    const despesas =
    await obterDespesas(ano,mes);

    const divida =
    await obterDivida(ano);

    /*
    Depois de conhecer o JSON
    da API, troque os campos abaixo.
    */

    if(receita){

        document.getElementById("receita").innerHTML =
        receita.valor.toLocaleString(
            "pt-BR",
            {
                style:"currency",
                currency:"BRL"
            }
        );

    }

    if(despesas){

        document.getElementById("despesa").innerHTML =
        despesas.valor.toLocaleString(
            "pt-BR",
            {
                style:"currency",
                currency:"BRL"
            }
        );

    }

    if(receita && despesas){

        const saldo =
        receita.valor-despesas.valor;

        document.getElementById("saldo").innerHTML =
        saldo.toLocaleString(
            "pt-BR",
            {
                style:"currency",
                currency:"BRL"
            }
        );

    }

    if(divida){

        document.getElementById("divida").innerHTML =
        divida.valor.toLocaleString(
            "pt-BR",
            {
                style:"currency",
                currency:"BRL"
            }
        );

    }

    /*
    Aqui você poderá chamar

    obterMinisterios()

    obterEstados()

    obterProgramas()

    obterSerieHistorica()

    para atualizar

    gráficos

    tabelas

    mapas

    */

}

/**************************************************************
 * BOTÃO
 **************************************************************/

document
.getElementById("btnAtualizar")
.addEventListener(
    "click",
    atualizarPainel
);

/**************************************************************
 * CARREGAMENTO AUTOMÁTICO
 **************************************************************/

window.onload=()=>{

    atualizarPainel();

};

/**************************************************************
 * OBSERVAÇÕES
 **************************************************************/

/*

Quando você ler a documentação da API,
verifique:

✓ URL Base

✓ Endpoint correto

✓ Método (GET ou POST)

✓ Token

✓ Cabeçalhos

✓ Limite de requisições

✓ Estrutura do JSON

✓ Paginação

✓ Formato da data

✓ Nome dos parâmetros

✓ Campo que contém o valor financeiro

*/