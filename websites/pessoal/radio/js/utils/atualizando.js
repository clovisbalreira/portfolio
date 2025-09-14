import { atualizarPedido } from "./fazerPedido.js";
import { atualizarFavorito } from "./like.js";
import { programacao } from "../mvc/control/programacao.js";
import { variavelGlobal } from "../mvc/control/global.js";

export function atualizando(){
    setInterval(() => { 
        atualizarFavorito(new Date(), programacao, variavelGlobal.indexRadio)
        atualizarPedido()
    }, 1000);
}