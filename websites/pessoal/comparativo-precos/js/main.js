import { compras } from "./mvc/controll/compras.js";
import { lojas } from "./mvc/controll/lojas.js";
import { variavelBotoes } from "./utils/variavelBotoes.js";
import { mostrarCompras } from "./mvc/view/mostrarCompras.js";
import { sujestaoCompras } from "./utils/sujestaoCompras.js";
import { criarModal } from "./utils/criarModal.js";
import { variaveisLocais } from "./utils/variaveisLocais.js";
import { salvarDadosNavegador } from "./navegador/salvarDadosNavegador.js";
import { pegarDadosNavegador } from "./navegador/pegarDadosNavegador.js";

let comprasSalva = pegarDadosNavegador("Compras");
let lojasSalva = pegarDadosNavegador("Lojas");
salvarDadosNavegador('Sujestao', sujestaoCompras)
comprasSalva != null && lojasSalva != null && (comprasSalva.length > 0 || lojasSalva.length > 0) ? criarModal(variaveisLocais(lojas, 'Lojas'), variaveisLocais(compras, 'Compras'), variavelBotoes, 'section-total', sujestaoCompras) : mostrarCompras(lojas, compras, variavelBotoes, 'section-total', sujestaoCompras)
