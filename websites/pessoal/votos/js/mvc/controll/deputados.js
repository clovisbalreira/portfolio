import { buscarDeputados } from "../../api/buscarDeputados.js";
import { Deputado } from "../model/Deputado.js"
import { removerAcentos } from "../../utils/removerAcentos.js";

export let deputados = []

export async function carregarDadosDeputados(){
    let dados = await buscarDeputados()
    dados.forEach( dado => {
        deputados.push(new Deputado(dado.id, dado.nome, dado.urlFoto, dado.siglaUf, `${dado.siglaUf.toUpperCase()}.png`, dado.siglaPartido, `${removerAcentos(dado.siglaPartido)}.png`))
    })
}