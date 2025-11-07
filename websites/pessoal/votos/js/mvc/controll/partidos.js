import { buscarPartidos } from "../../api/buscarPartidos.js";
import { Partido } from "../model/Partido.js"

export let partidos = []

export async function carregarDadosPartidos(){
    let dados = await buscarPartidos()
    dados.forEach( dado => {
        partidos.push(new Partido(dado.id, dado.nome, dado.sigla, `${dado.sigla.toLowerCase()}.png`))
    })
}