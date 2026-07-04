/**********************************************************************
 * config.js
 * --------------------------------------------------------------------
 * Configuração geral do Dashboard Financeiro do Governo
 *
 * Altere este arquivo para mudar:
 *
 * ✔ API
 * ✔ Token
 * ✔ Atualização automática
 * ✔ Idioma
 * ✔ Moeda
 * ✔ Datas
 * ✔ Tema
 * ✔ Gráficos
 *
 *********************************************************************/

const CONFIG = {

    /**************************************************************
     * API
     **************************************************************/

    api:{

        /*
         URL base da API

         Exemplo:

         https://api.meuservidor.com

         ou

         https://apidatalake.tesouro.gov.br
        */

        baseURL:"",


        /*
         Caso exista autenticação

         Authorization: Bearer TOKEN

         coloque o token abaixo.
        */

        token:"",


        /*
         Timeout das consultas
        */

        timeout:15000

    },



    /**************************************************************
     * DASHBOARD
     **************************************************************/

    dashboard:{

        titulo:

        "Painel Financeiro do Governo Federal",

        atualizarAutomaticamente:true,

        intervaloAtualizacao:

        300000

    },



    /**************************************************************
     * ANOS
     **************************************************************/

    anos:{

        minimo:2000,

        maximo:

        new Date().getFullYear()

    },



    /**************************************************************
     * LOCALIZAÇÃO
     **************************************************************/

    locale:{

        idioma:"pt-BR",

        moeda:"BRL"

    },



    /**************************************************************
     * DATA
     **************************************************************/

    data:{

        formato:"dd/MM/yyyy",

        mostrarHora:true

    },



    /**************************************************************
     * TEMA
     **************************************************************/

    tema:{

        modoEscuro:false,

        corPrincipal:"#0d6efd",

        fundo:"#f4f4f4",

        corTexto:"#222"

    },



    /**************************************************************
     * CARTÕES
     **************************************************************/

    cards:{

        receita:"#198754",

        despesa:"#dc3545",

        saldo:"#0d6efd",

        divida:"#fd7e14"

    },



    /**************************************************************
     * CORES DOS GRÁFICOS
     **************************************************************/

    graficos:{

        cores:[

            "#0d6efd",

            "#198754",

            "#ffc107",

            "#dc3545",

            "#6610f2",

            "#fd7e14",

            "#20c997",

            "#6f42c1",

            "#0dcaf0",

            "#adb5bd"

        ],

        animacao:true,

        legenda:true,

        responsivo:true

    },



    /**************************************************************
     * TABELAS
     **************************************************************/

    tabela:{

        linhasPorPagina:20,

        ordenar:true

    },



    /**************************************************************
     * EXPORTAÇÃO
     **************************************************************/

    exportacao:{

        excel:true,

        pdf:true,

        csv:true

    },



    /**************************************************************
     * LOG
     **************************************************************/

    log:{

        ativo:true

    }

};



/**********************************************************************
 * FUNÇÕES AUXILIARES
 *********************************************************************/


function log(){

    if(CONFIG.log.ativo){

        console.log(...arguments);

    }

}



function formatarMoeda(valor){

    return Number(valor).toLocaleString(

        CONFIG.locale.idioma,

        {

            style:"currency",

            currency:

            CONFIG.locale.moeda

        }

    );

}



function formatarNumero(valor){

    return Number(valor)

    .toLocaleString(

        CONFIG.locale.idioma

    );

}



function formatarData(data){

    return new Date(data)

    .toLocaleString(

        CONFIG.locale.idioma

    );

}



/**********************************************************************
 * CABEÇALHO DA API
 *********************************************************************/

function obterHeaders(){

    const headers={

        "Content-Type":

        "application/json"

    };



    if(CONFIG.api.token!=""){

        headers.Authorization=

        "Bearer "+CONFIG.api.token;

    }



    return headers;

}



/**********************************************************************
 * URL COMPLETA
 *********************************************************************/

function montarURL(endpoint){

    return CONFIG.api.baseURL+endpoint;

}



/**********************************************************************
 * MODO ESCURO
 *********************************************************************/

function aplicarTema(){

    if(CONFIG.tema.modoEscuro){

        document.body.classList.add("dark");

    }

}



/**********************************************************************
 * AO CARREGAR
 *********************************************************************/

window.addEventListener(

    "load",

    aplicarTema

);