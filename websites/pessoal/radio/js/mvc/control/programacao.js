import { Programacao } from "../model/Programacao.js";
import { radios } from "./radios.js";
import { programas } from "./programas.js";

export let programacao = []

function incluirProgramacao(programacao, radio, dia){
    let novo = new Programacao()
    novo.adicionarRadio(radio)
    for(let i in dia){
        novo.adicionarDia(dia[i].dia)
        for(let j in dia[i].programas){
            novo.adicionarProgramas(dia[i].dia, dia[i].programas[j].horaInicio, dia[i].programas[j].horaFim, novo.adicionarPrograma(dia[i].programas[j].nome))            
        }
    }
    programacao.push(novo)
}

incluirProgramacao(programacao, radios[0], [
    {dia: 'Domingos', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[0]},
        {horaInicio: '01:00', horaFim: '01:59', nome: programas[1]},
        {horaInicio: '02:00', horaFim: '02:59', nome: programas[2]},
        {horaInicio: '03:00', horaFim: '03:59', nome: programas[2]},
        {horaInicio: '04:00', horaFim: '13:59', nome: programas[3]},
        {horaInicio: '14:00', horaFim: '14:59', nome: programas[2]},
        {horaInicio: '15:00', horaFim: '15:59', nome: programas[3]},
        {horaInicio: '16:00', horaFim: '17:59', nome: programas[4]},
        {horaInicio: '18:00', horaFim: '18:59', nome: programas[1]},
        {horaInicio: '19:00', horaFim: '20:59', nome: programas[5]},
        {horaInicio: '21:00', horaFim: '23:59', nome: programas[3]},
    ]},
    {dia: 'Segunda', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[2]},
        {horaInicio: '01:00', horaFim: '02:59', nome: programas[4]},
        {horaInicio: '03:00', horaFim: '05:59', nome: programas[6]},
        {horaInicio: '06:00', horaFim: '06:59', nome: programas[2]},
        {horaInicio: '07:00', horaFim: '07:59', nome: programas[7]},
        {horaInicio: '08:00', horaFim: '09:59', nome: programas[4]},
        {horaInicio: '10:00', horaFim: '12:59', nome: programas[3]},
        {horaInicio: '13:00', horaFim: '13:59', nome: programas[6]},
        {horaInicio: '14:00', horaFim: '15:59', nome: programas[3]},
        {horaInicio: '16:00', horaFim: '17:59', nome: programas[2]},
        {horaInicio: '18:00', horaFim: '23:59', nome: programas[6]},
    ]},
    {dia: 'Terça', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[2]},
        {horaInicio: '01:00', horaFim: '02:59', nome: programas[4]},
        {horaInicio: '03:00', horaFim: '05:59', nome: programas[6]},
        {horaInicio: '06:00', horaFim: '06:59', nome: programas[2]},
        {horaInicio: '07:00', horaFim: '07:59', nome: programas[7]},
        {horaInicio: '08:00', horaFim: '09:59', nome: programas[4]},
        {horaInicio: '10:00', horaFim: '12:59', nome: programas[3]},
        {horaInicio: '13:00', horaFim: '13:59', nome: programas[6]},
        {horaInicio: '14:00', horaFim: '15:59', nome: programas[3]},
        {horaInicio: '16:00', horaFim: '17:59', nome: programas[2]},
        {horaInicio: '18:00', horaFim: '23:59', nome: programas[6]},
    ]},
    {dia: 'Quarta', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[2]},
        {horaInicio: '01:00', horaFim: '02:59', nome: programas[4]},
        {horaInicio: '03:00', horaFim: '05:59', nome: programas[6]},
        {horaInicio: '06:00', horaFim: '06:59', nome: programas[2]},
        {horaInicio: '07:00', horaFim: '07:59', nome: programas[7]},
        {horaInicio: '08:00', horaFim: '09:59', nome: programas[4]},
        {horaInicio: '10:00', horaFim: '12:59', nome: programas[3]},
        {horaInicio: '13:00', horaFim: '13:59', nome: programas[6]},
        {horaInicio: '14:00', horaFim: '15:59', nome: programas[3]},
        {horaInicio: '16:00', horaFim: '23:59', nome: programas[6]},
    ]},
    {dia: 'Quinta', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[2]},
        {horaInicio: '01:00', horaFim: '02:59', nome: programas[4]},
        {horaInicio: '03:00', horaFim: '05:59', nome: programas[6]},
        {horaInicio: '06:00', horaFim: '06:59', nome: programas[2]},
        {horaInicio: '07:00', horaFim: '07:59', nome: programas[7]},
        {horaInicio: '08:00', horaFim: '09:59', nome: programas[4]},
        {horaInicio: '10:00', horaFim: '12:59', nome: programas[3]},
        {horaInicio: '13:00', horaFim: '13:59', nome: programas[6]},
        {horaInicio: '14:00', horaFim: '15:59', nome: programas[3]},
        {horaInicio: '16:00', horaFim: '17:59', nome: programas[2]},
        {horaInicio: '18:00', horaFim: '23:59', nome: programas[6]},
    ]},
    {dia: 'Sexta', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[2]},
        {horaInicio: '01:00', horaFim: '02:59', nome: programas[4]},
        {horaInicio: '03:00', horaFim: '05:59', nome: programas[6]},
        {horaInicio: '06:00', horaFim: '06:59', nome: programas[2]},
        {horaInicio: '07:00', horaFim: '07:59', nome: programas[7]},
        {horaInicio: '08:00', horaFim: '09:59', nome: programas[4]},
        {horaInicio: '10:00', horaFim: '12:59', nome: programas[3]},
        {horaInicio: '13:00', horaFim: '13:59', nome: programas[6]},
        {horaInicio: '14:00', horaFim: '15:59', nome: programas[3]},
        {horaInicio: '16:00', horaFim: '17:59', nome: programas[2]},
        {horaInicio: '18:00', horaFim: '21:59', nome: programas[7]},
        {horaInicio: '22:00', horaFim: '22:59', nome: programas[0]},
        {horaInicio: '23:00', horaFim: '23:59', nome: programas[6]},
    ]},
    {dia: 'Sábado', programas : [
        {horaInicio: '00:00', horaFim: '00:59', nome: programas[2]},
        {horaInicio: '01:00', horaFim: '02:59', nome: programas[3]},
        {horaInicio: '03:00', horaFim: '04:59', nome: programas[4]},
        {horaInicio: '05:00', horaFim: '08:59', nome: programas[3]},
        {horaInicio: '09:00', horaFim: '09:59', nome: programas[1]},
        {horaInicio: '10:00', horaFim: '11:59', nome: programas[3]},
        {horaInicio: '12:00', horaFim: '13:59', nome: programas[4]},
        {horaInicio: '14:00', horaFim: '14:59', nome: programas[0]},
        {horaInicio: '15:00', horaFim: '15:59', nome: programas[1]},
        {horaInicio: '16:00', horaFim: '19:59', nome: programas[3]},
        {horaInicio: '20:00', horaFim: '20:59', nome: programas[1]},
        {horaInicio: '21:00', horaFim: '22:59', nome: programas[8]},
        {horaInicio: '23:00', horaFim: '23:59', nome: programas[0]},
    ]},
])

incluirProgramacao(programacao, radios[1], [
    {dia: 'Domingos', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '23:59', nome: programas[10]},
    ]},
    {dia: 'Segunda', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '18:59', nome: programas[10]},
        {horaInicio: '19:00', horaFim: '19:59', nome: programas[12]},
        {horaInicio: '20:00', horaFim: '20:59', nome: programas[13]},
        {horaInicio: '21:00', horaFim: '23:59', nome: programas[10]},
    ]},
    {dia: 'Terça', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '18:59', nome: programas[10]},
        {horaInicio: '19:00', horaFim: '19:59', nome: programas[12]},
        {horaInicio: '20:00', horaFim: '20:59', nome: programas[13]},
        {horaInicio: '21:00', horaFim: '23:59', nome: programas[10]},
    ]},
    {dia: 'Quarta', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '18:59', nome: programas[10]},
        {horaInicio: '19:00', horaFim: '19:59', nome: programas[12]},
        {horaInicio: '20:00', horaFim: '20:59', nome: programas[13]},
        {horaInicio: '21:00', horaFim: '23:59', nome: programas[10]},
    ]},
    {dia: 'Quinta', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '18:59', nome: programas[10]},
        {horaInicio: '19:00', horaFim: '19:59', nome: programas[12]},
        {horaInicio: '20:00', horaFim: '20:59', nome: programas[13]},
        {horaInicio: '21:00', horaFim: '23:59', nome: programas[10]},
    ]},
    {dia: 'Sexta', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '18:59', nome: programas[10]},
        {horaInicio: '19:00', horaFim: '19:59', nome: programas[12]},
        {horaInicio: '20:00', horaFim: '20:59', nome: programas[13]},
        {horaInicio: '21:00', horaFim: '23:59', nome: programas[10]},
    ]},
    {dia: 'Sábado', programas : [
        {horaInicio: '00:00', horaFim: '11:59', nome: programas[10]},
        {horaInicio: '12:00', horaFim: '12:59', nome: programas[11]},
        {horaInicio: '13:00', horaFim: '22:59', nome: programas[10]},
        {horaInicio: '23:00', horaFim: '23:59', nome: programas[14]},
    ]},
])

