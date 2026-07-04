/**********************************************************************
 * app.js
 * --------------------------------------------------------------------
 * Arquivo principal do Dashboard
 *
 * Responsabilidades
 * -----------------
 * ✔ Inicializar o sistema
 * ✔ Carregar anos
 * ✔ Selecionar mês atual
 * ✔ Buscar dados da API
 * ✔ Atualizar cartões
 * ✔ Atualizar gráficos
 * ✔ Atualizar tabela
 * ✔ Atualização automática
 **********************************************************************/

const App = {

    atualizarAutomaticamente: true,

    intervaloAtualizacao: 300000, // 5 minutos

};

/**********************************************************************
 * FORMATAÇÃO
 **********************************************************************/

function moeda(valor){

    if(valor == null)
        return "R$ 0,00";

    return Number(valor).toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );

}

/**********************************************************************
 * DATA
 **********************************************************************/

function atualizarData(){

    const agora = new Date();

    document.getElementById(

        "ultimaAtualizacao"

    ).innerHTML = agora.toLocaleString("pt-BR");

}

/**********************************************************************
 * CARREGA ANOS
 **********************************************************************/

function carregarAnos(){

    const select = document.getElementById("ano");

    const anoAtual = new Date().getFullYear();

    for(let ano = anoAtual; ano >= 2000; ano--){

        const option = document.createElement("option");

        option.value = ano;

        option.textContent = ano;

        select.appendChild(option);

    }

}

/**********************************************************************
 * SELECIONA O MÊS ATUAL
 **********************************************************************/

function selecionarMesAtual(){

    document.getElementById("mes").value =
        new Date().getMonth()+1;

}

/**********************************************************************
 * CARTÕES
 **********************************************************************/

function atualizarCards(

    receita,

    despesa,

    divida

){

    document.getElementById(

        "receita"

    ).innerHTML = moeda(receita);

    document.getElementById(

        "despesa"

    ).innerHTML = moeda(despesa);

    document.getElementById(

        "saldo"

    ).innerHTML = moeda(

        receita-despesa

    );

    document.getElementById(

        "divida"

    ).innerHTML = moeda(divida);

}

/**********************************************************************
 * CONSULTA API
 **********************************************************************/

async function carregarDados(){

    const ano =
    document.getElementById("ano").value;

    const mes =
    document.getElementById("mes").value;

    console.log(

        "Consultando",

        ano,

        mes

    );

    /*************************************************
     * RECEITA
     *************************************************/

    const receitaJSON =
        await obterReceita(ano,mes);

    /*************************************************
     * DESPESA
     *************************************************/

    const despesaJSON =
        await obterDespesas(ano,mes);

    /*************************************************
     * DÍVIDA
     *************************************************/

    const dividaJSON =
        await obterDivida(ano);

    /*************************************************
     * ESTES CAMPOS DEVEM SER ALTERADOS
     * CONFORME O JSON DA API
     *************************************************/

    const receita =
        receitaJSON?.valor ?? 0;

    const despesa =
        despesaJSON?.valor ?? 0;

    const divida =
        dividaJSON?.valor ?? 0;

    atualizarCards(

        receita,

        despesa,

        divida

    );

    /*************************************************
     * MINISTÉRIOS
     *************************************************/

    const ministerios =
        await obterMinisterios(

            ano,

            mes

        );

    if(

        ministerios &&
        ministerios.length>0

    ){

        desenharGraficoCategoria(

            ministerios

        );

        atualizarTabela(

            ministerios

        );

    }

    /*************************************************
     * ESTADOS
     *************************************************/

    const estados =
        await obterEstados(ano);

    if(

        estados &&
        estados.length>0

    ){

        desenharGraficoEstados(

            estados

        );

    }

    /*************************************************
     * SÉRIE HISTÓRICA
     *************************************************/

    const serie =
        await obterSerieHistorica(

            ano-5,

            ano

        );

    if(

        serie &&
        serie.length>0

    ){

        desenharGraficoLinha(

            serie

        );

    }

    /*************************************************
     * RECEITA X DESPESA
     *************************************************/

    desenharGraficoReceita(

        receita,

        despesa

    );

    atualizarData();

}

/**********************************************************************
 * BOTÃO
 **********************************************************************/

function configurarBotao(){

    document

    .getElementById(

        "btnAtualizar"

    )

    .addEventListener(

        "click",

        carregarDados

    );

}

/**********************************************************************
 * AUTO UPDATE
 **********************************************************************/

function iniciarAtualizacaoAutomatica(){

    if(

        !App.atualizarAutomaticamente

    )

        return;

    setInterval(

        carregarDados,

        App.intervaloAtualizacao

    );

}

/**********************************************************************
 * MODO ESCURO
 **********************************************************************/

function alternarModoEscuro(){

    document.body.classList.toggle(

        "dark"

    );

}

/**********************************************************************
 * TECLA D
 **********************************************************************/

document.addEventListener(

    "keydown",

    function(e){

        if(

            e.key.toLowerCase()=="d"

        ){

            alternarModoEscuro();

        }

    }

);

/**********************************************************************
 * INICIALIZAÇÃO
 **********************************************************************/

async function iniciarSistema(){

    carregarAnos();

    selecionarMesAtual();

    configurarBotao();

    iniciarAtualizacaoAutomatica();

    await carregarDados();

}

/**********************************************************************
 * INICIAR
 **********************************************************************/

window.onload = iniciarSistema;