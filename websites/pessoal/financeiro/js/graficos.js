/********************************************************************
 * graficos.js
 * ---------------------------------------------------------------
 * Responsável por criar e atualizar todos os gráficos do sistema.
 *
 * Bibliotecas utilizadas:
 * - Chart.js
 *
 * Gráficos previstos:
 *
 * ✔ Receita x Despesa
 * ✔ Gastos por Ministério
 * ✔ Gastos por Estado
 * ✔ Receita Mensal
 * ✔ Evolução da Dívida
 *
 ********************************************************************/

let graficoReceita = null;
let graficoCategoria = null;
let graficoEstados = null;
let graficoLinha = null;

/**************************************************************
 * DESTRÓI O GRÁFICO ANTIGO
 **************************************************************/

function destruirGrafico(grafico){

    if(grafico){
        grafico.destroy();
    }

}

/**************************************************************
 * RECEITA X DESPESA
 **************************************************************/

function desenharGraficoReceita(receita, despesa){

    destruirGrafico(graficoReceita);

    const ctx = document
        .getElementById("graficoReceita")
        .getContext("2d");

    graficoReceita = new Chart(ctx,{

        type:"bar",

        data:{

            labels:["Receita","Despesa"],

            datasets:[{

                label:"Valores",

                data:[

                    receita,
                    despesa

                ],

                backgroundColor:[

                    "#198754",
                    "#dc3545"

                ],

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{
                    display:false
                }

            }

        }

    });

}

/**************************************************************
 * GASTOS POR CATEGORIA
 **************************************************************/

function desenharGraficoCategoria(lista){

    destruirGrafico(graficoCategoria);

    const ctx = document
        .getElementById("graficoCategoria")
        .getContext("2d");

    graficoCategoria = new Chart(ctx,{

        type:"pie",

        data:{

            labels:lista.map(x=>x.nome),

            datasets:[{

                data:lista.map(x=>x.valor),

                backgroundColor:[

                    "#0d6efd",
                    "#198754",
                    "#ffc107",
                    "#dc3545",
                    "#6610f2",
                    "#fd7e14",
                    "#20c997"

                ]

            }]

        },

        options:{

            responsive:true

        }

    });

}

/**************************************************************
 * GASTOS POR ESTADO
 **************************************************************/

function desenharGraficoEstados(lista){

    destruirGrafico(graficoEstados);

    const canvas = document.getElementById("graficoEstados");

    if(!canvas) return;

    const ctx = canvas.getContext("2d");

    graficoEstados = new Chart(ctx,{

        type:"bar",

        data:{

            labels:lista.map(x=>x.estado),

            datasets:[{

                label:"Gastos",

                data:lista.map(x=>x.valor)

            }]

        },

        options:{

            responsive:true,

            indexAxis:"y"

        }

    });

}

/**************************************************************
 * EVOLUÇÃO MENSAL
 **************************************************************/

function desenharGraficoLinha(lista){

    destruirGrafico(graficoLinha);

    const canvas = document.getElementById("graficoLinha");

    if(!canvas) return;

    const ctx = canvas.getContext("2d");

    graficoLinha = new Chart(ctx,{

        type:"line",

        data:{

            labels:lista.map(x=>x.mes),

            datasets:[{

                label:"Receita",

                data:lista.map(x=>x.valor),

                fill:false,

                tension:0.3

            }]

        },

        options:{

            responsive:true

        }

    });

}

/**************************************************************
 * TABELA DOS MAIORES GASTOS
 **************************************************************/

function atualizarTabela(lista){

    const tabela =
    document.getElementById("tabelaGastos");

    tabela.innerHTML="";

    lista.forEach(item=>{

        tabela.innerHTML += `

        <tr>

            <td>${item.nome}</td>

            <td>

            ${Number(item.valor).toLocaleString(

                "pt-BR",

                {

                    style:"currency",

                    currency:"BRL"

                }

            )}

            </td>

        </tr>

        `;

    });

}

/**************************************************************
 * EXEMPLO
 *
 * Remova quando integrar a API.
 **************************************************************/

function exemploGraficos(){

    desenharGraficoReceita(

        2150000000000,

        2080000000000

    );

    desenharGraficoCategoria([

        {

            nome:"Saúde",

            valor:150

        },

        {

            nome:"Educação",

            valor:120

        },

        {

            nome:"Defesa",

            valor:95

        },

        {

            nome:"Justiça",

            valor:70

        }

    ]);

    atualizarTabela([

        {

            nome:"Saúde",

            valor:150000000

        },

        {

            nome:"Educação",

            valor:120000000

        },

        {

            nome:"Defesa",

            valor:95000000

        }

    ]);

}

/**************************************************************
 * CARREGAMENTO
 **************************************************************/

window.addEventListener(

    "load",

    ()=>{

        exemploGraficos();

    }

);