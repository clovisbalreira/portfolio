import { inicio } from "./utils/inicio.js";
import { socios } from "./mvc/controll/socios.js";
import { campeonatos } from "./mvc/controll/campeonatos.js"
import { associacoes } from "./mvc/controll/associacoes.js"
import { temporadas } from "./mvc/controll/temporadas.js";
import { tipos } from "./mvc/controll/tipos.js";
import { regras } from "./mvc/controll/regras.js";
import { variavelGlobal } from "./utils/variavelGlobal.js"
import { desativarAsoociacoes } from "./utils/filtros/desativarAssociacoes.js"

desativarAsoociacoes(associacoes)
inicio(socios, campeonatos, associacoes, temporadas, variavelGlobal, tipos, regras)