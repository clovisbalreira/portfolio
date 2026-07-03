import { competicoes } from "../../mvc/controll/competicoes.js"
import { selecoes } from "../../mvc/controll/selecoes.js"
import { filtrarCampeonato } from "../filtrarCampeonato.js"
import { confronto16Avos } from "../../services/confrontos/confronto16Avos.js"
import { confrontoOitavasFinal } from "../../services/confrontos/confrontoOitavasFinal.js"
import { confrontosQuartasFinal } from "../../services/confrontos/confrontosQuartasFinal.js"
import { confrontosSemiFinal } from "../../services/confrontos/confrontosSemiFinal.js"
import { confrontoFinal } from "../../services/confrontos/confrontoFinal.js"
import { ordemFases } from "../../services/ordenar/ordemFases.js"

export function CopaDoMundo2026(){
    let copaMundo2026 = filtrarCampeonato('2026', 'Copa do Mundo', competicoes) 
    copaMundo2026.adicionarParticipante(selecoes[46])
    copaMundo2026.adicionarParticipante(selecoes[69])
    copaMundo2026.adicionarParticipante(selecoes[44])
    copaMundo2026.adicionarParticipante(selecoes[18])
    copaMundo2026.adicionarParticipante(selecoes[11])
    copaMundo2026.adicionarParticipante(selecoes[7])
    copaMundo2026.adicionarParticipante(selecoes[58])
    copaMundo2026.adicionarParticipante(selecoes[73])
    copaMundo2026.adicionarParticipante(selecoes[8])
    copaMundo2026.adicionarParticipante(selecoes[47])
    copaMundo2026.adicionarParticipante(selecoes[33])
    copaMundo2026.adicionarParticipante(selecoes[63])
    copaMundo2026.adicionarParticipante(selecoes[80])
    copaMundo2026.adicionarParticipante(selecoes[54])
    copaMundo2026.adicionarParticipante(selecoes[3])
    copaMundo2026.adicionarParticipante(selecoes[77])
    copaMundo2026.adicionarParticipante(selecoes[29])
    copaMundo2026.adicionarParticipante(selecoes[83])
    copaMundo2026.adicionarParticipante(selecoes[20])
    copaMundo2026.adicionarParticipante(selecoes[23])
    copaMundo2026.adicionarParticipante(selecoes[48])
    copaMundo2026.adicionarParticipante(selecoes[42])
    copaMundo2026.adicionarParticipante(selecoes[72])
    copaMundo2026.adicionarParticipante(selecoes[76])
    copaMundo2026.adicionarParticipante(selecoes[5])
    copaMundo2026.adicionarParticipante(selecoes[24])
    copaMundo2026.adicionarParticipante(selecoes[36])
    copaMundo2026.adicionarParticipante(selecoes[49])
    copaMundo2026.adicionarParticipante(selecoes[71])
    copaMundo2026.adicionarParticipante(selecoes[65])
    copaMundo2026.adicionarParticipante(selecoes[62])
    copaMundo2026.adicionarParticipante(selecoes[81])
    copaMundo2026.adicionarParticipante(selecoes[28])
    copaMundo2026.adicionarParticipante(selecoes[64])
    copaMundo2026.adicionarParticipante(selecoes[38])
    copaMundo2026.adicionarParticipante(selecoes[52])
    copaMundo2026.adicionarParticipante(selecoes[2])
    copaMundo2026.adicionarParticipante(selecoes[0])
    copaMundo2026.adicionarParticipante(selecoes[4])
    copaMundo2026.adicionarParticipante(selecoes[86])
    copaMundo2026.adicionarParticipante(selecoes[57])
    copaMundo2026.adicionarParticipante(selecoes[85])
    copaMundo2026.adicionarParticipante(selecoes[87])
    copaMundo2026.adicionarParticipante(selecoes[14])
    copaMundo2026.adicionarParticipante(selecoes[26])
    copaMundo2026.adicionarParticipante(selecoes[16])
    copaMundo2026.adicionarParticipante(selecoes[31])
    copaMundo2026.adicionarParticipante(selecoes[53])
    copaMundo2026.primeiraFase()
    grupoA(copaMundo2026, 0)
    grupoB(copaMundo2026, 1)
    grupoC(copaMundo2026, 2)
    grupoD(copaMundo2026, 3)
    grupoE(copaMundo2026, 4)
    grupoF(copaMundo2026, 5)
    grupoG(copaMundo2026, 6)
    grupoH(copaMundo2026, 7)
    grupoI(copaMundo2026, 8)
    grupoJ(copaMundo2026, 9)
    grupoK(copaMundo2026, 10)
    grupoL(copaMundo2026, 11)
    desseseisAvos(copaMundo2026)
    oitavasFinal(copaMundo2026)
    quartasFinal(copaMundo2026)
    semiFinal(copaMundo2026)
    terceiroLugar(copaMundo2026)
    final(copaMundo2026)    
    copaMundo2026.atualizarTudo(ordemFases)
}

function grupoA(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Raúl Jiménez', favor: true}, { nome: 'Quiñones', favor: true}], [], new Date(2026, 5, 11, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Krejcí', favor: true}], [{ nome: 'Oh Hyeon-Gyu', favor: true}, { nome: 'Hwang In-Beom', favor: true}], new Date(2026, 5, 11, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Romo', favor: true}], new Date(2026, 5, 18, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Mokoena', favor: true}], [{ nome: 'Sadílek', favor: true}], new Date(2026, 5, 18, 13, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Mateo Chávez', favor: true}, { nome: 'Quiñones', favor: true}, { nome: 'Fidalgo', favor: true}], [], new Date(2026, 5, 24, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Maseko', favor: true}], [], new Date(2026, 5, 24, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoB(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Larin', favor: true}], [{ nome: 'Lukic', favor: true}], new Date(2026, 5, 12, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Embolo', favor: true}], [{ nome: 'Muheim', favor: false}], new Date(2026, 5, 13, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Jonathan David', favor: true}, { nome: 'Jonathan David', favor: true},{ nome: 'Jonathan David', favor: true}, { nome: 'Manai', favor: false},{ nome: 'Saliba', favor: true}, { nome: 'Larin', favor: true}], new Date(2026, 5, 18, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Mahmic', favor: true}], [{ nome: 'Xhaka', favor: true}, { nome: 'Manzambi', favor: true},{ nome: 'Manzambi', favor: true}, { nome: 'Vargas', favor: true}], new Date(2026, 5, 18, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Promise David', favor: true}], [{ nome: 'Manzambi', favor: true}, { nome: 'Vargas', favor: true}], new Date(2026, 5, 24, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Mahmic', favor: true}, { nome: 'Al-Brake', favor: false}, { nome: 'Alajbegovic', favor: true}], [{ nome: 'Al-Haydos', favor: true}], new Date(2026, 5, 24, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoC(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Vini Jr.', favor: true}], [{ nome: 'Saibari', favor: true}], new Date(2026, 5, 13, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'McGinn', favor: true}], [], new Date(2026, 5, 13, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Vini Jr.', favor: true}, { nome: 'Matheus Cunha', favor: true}, { nome: 'Matheus Cunha', favor: true}], new Date(2026, 5, 19, 21, 30, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Saibari', favor: true}], [], new Date(2026, 5, 19, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Vini Jr.', favor: true}, { nome: 'Vini Jr.', favor: true}, { nome: 'Matheus Cunha', favor: true}], [], new Date(2026, 5, 24, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Saibari', favor: true}, { nome: 'Hakimi', favor: true}, { nome: 'Rahimi', favor: true}, { nome: 'Yassine', favor: true}], [{ nome: 'Isidor', favor: true}, { nome: 'Bono', favor: false}], new Date(2026, 5, 24, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoD(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Reyna', favor: true}, { nome: 'Balogun', favor: true}, { nome: 'Balogun', favor: true}, { nome: 'Bobadilla', favor: false}], [{ nome: 'Maurício', favor: true}], new Date(2026, 5, 12, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [], [{ nome: 'Metcalfe', favor: true}, { nome: 'Irankunda', favor: true}], new Date(2026, 5, 14, 1, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Freeman', favor: true}, { nome: 'Burgess', favor: false}], new Date(2026, 5, 19, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Galarza', favor: true}], [], new Date(2026, 5, 20, 0, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Trusty', favor: true}, { nome: 'Berhalter', favor: true}], [{ nome: 'Güler', favor: true}, { nome: 'Kökçü', favor: true}, { nome: 'Ayhan', favor: true}], new Date(2026, 5, 25, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [], [], new Date(2026, 5, 25, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoE(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Havertz', favor: true}, { nome: 'Havertz', favor: true},{ nome: 'Undav', favor: true}, { nome: 'Brown', favor: true},{ nome: 'Musiala', favor: true}, { nome: 'Schlotterbeck', favor: true},{ nome: 'Nmecha', favor: true}], [{ nome: 'Comenencia', favor: true}], new Date(2026, 5, 14, 14, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [], [{ nome: 'Diallo', favor: true}], new Date(2026, 5, 14, 20, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [{ nome: 'Kessié', favor: true}], [{ nome: 'Undav', favor: true}, { nome: 'Undav', favor: true}], new Date(2026, 5, 20, 17, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [], [], new Date(2026, 5, 20, 21, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Sané', favor: true}], [{ nome: 'Angulo', favor: true}, { nome: 'Plata', favor: true}], new Date(2026, 5, 25, 17, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [], [{ nome: 'Pépé', favor: true}, { nome: 'Pépé', favor: true}], new Date(2026, 5, 25, 17, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoF(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Summerville', favor: true}, { nome: 'Van Dijk', favor: true}], [{ nome: 'Kamada', favor: true}, { nome: 'Nakamura', favor: true}], new Date(2026, 5, 14, 17, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Rekik', favor: true}], [{ nome: 'Ayari', favor: true}, { nome: 'Ayari', favor: true}, { nome: 'Svanberg', favor: true}, { nome: 'Gyökeres', favor: true}, { nome: 'Isak', favor: true}], new Date(2026, 5, 14, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [{ nome: 'Elanga', favor: true}], [{ nome: 'Summerville', favor: true}, { nome: 'Gakpo', favor: true}, { nome: 'Gakpo', favor: true}, { nome: 'Brobbey', favor: true}, { nome: 'Brobbey', favor: true}], new Date(2026, 5, 20, 14, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Ueda', favor: true}, { nome: 'Ueda', favor: true}, { nome: 'Junya Ito', favor: true}, { nome: 'Kamada', favor: true}], [], new Date(2026, 5, 21, 1, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Skhiri', favor: false}, { nome: 'Brobbey', favor: true}, { nome: 'Van Hecke', favor: true}], [{ nome: 'Mastouri', favor: true}], new Date(2026, 5, 25, 20, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Maeda', favor: true}], [{ nome: 'Elanga', favor: true}], new Date(2026, 5, 25, 20, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoG(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Hany', favor: false}], [{ nome: 'Ashour', favor: true}], new Date(2026, 5, 15, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Just', favor: true}, { nome: 'Just', favor: true}], [{ nome: 'Mohebi', favor: true}, { nome: 'Rezaeian', favor: true}], new Date(2026, 5, 15, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [], new Date(2026, 5, 21, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Zico', favor: true}, { nome: 'Salah', favor: true}, { nome: 'Trézéguet', favor: true}], [{ nome: 'Surman', favor: true}], new Date(2026, 5, 21, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Trossard', favor: true}, { nome: 'Trossard', favor: true}, { nome: 'De Bruyne', favor: true}, { nome: 'Lukaku', favor: true}, { nome: 'Saelemaekers', favor: true}], [{ nome: 'Just', favor: true}], new Date(2026, 5, 27, 0, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Saber', favor: true}], [{ nome: 'Rezaeian', favor: true}], new Date(2026, 5, 27, 0, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoH(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [], [], new Date(2026, 5, 15, 13, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Maxi Araújo', favor: true}], [{ nome: 'Al-Amri', favor: true}], new Date(2026, 5, 15, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Oyarzabal', favor: true}, { nome: 'Oyarzabal', favor: true},{ nome: 'Lamine Yamal', favor: true}, { nome: 'Tambakti', favor: false}], new Date(2026, 5, 21, 13, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Hélio Varela', favor: true}, { nome: 'Kevin Pina', favor: true}], [{ nome: 'Canobbio', favor: true}, { nome: 'Maxi Araújo', favor: true}], new Date(2026, 5, 21, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Baena', favor: true}], [], new Date(2026, 5, 26, 21, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [], [], new Date(2026, 5, 26, 21, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoI(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Mbappé', favor: true}, { nome: 'Mbappé', favor: true},{ nome: 'Barcola', favor: true}], [{ nome: 'Mbaye', favor: true}], new Date(2026, 5, 16, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Aymen Hussein', favor: false}, { nome: 'Östigaard', favor: true}, { nome: 'Haaland', favor: true}, { nome: 'Haaland', favor: true}], [{ nome: 'Aymen Hussein', favor: true}], new Date(2026, 5, 16, 19, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Mbappé', favor: true}, { nome: 'Mbappé', favor: true}, { nome: 'Dembélé', favor: true}], new Date(2026, 5, 22, 18, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Ismaïla Sarr', favor: true}, { nome: 'Ismaïla Sarr', favor: true}], [{ nome: 'Pedersen', favor: true}, { nome: 'Haaland', favor: true}, { nome: 'Haaland', favor: true}], new Date(2026, 5, 22, 21, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Dembélé', favor: true}, { nome: 'Dembélé', favor: true}, { nome: 'Dembélé', favor: true}, { nome: 'Doué', favor: true}], [{ nome: 'Aasgaard', favor: true}], new Date(2026, 5, 26, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Iliman Ndiaye', favor: true}, { nome: 'Pape Gueye', favor: true}, { nome: 'Pape Gueye', favor: true}, { nome: 'Ismaïla Sarr', favor: true}, { nome: 'Diarra', favor: true}], [], new Date(2026, 5, 26, 16, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoJ(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Messi', favor: true}, { nome: 'Messi', favor: true}, { nome: 'Messi', favor: true}], [], new Date(2026, 5, 16, 22, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Olwan', favor: true}], [{ nome: 'Arnautovic', favor: true}, { nome: 'Al-Arab', favor: false},{ nome: 'Schmid', favor: true}], new Date(2026, 5, 17, 1, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Messi', favor: true}, { nome: 'Messi', favor: true}], new Date(2026, 5, 22, 14, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Gouiri', favor: true}, { nome: 'Benbouali', favor: true}], [{ nome: 'Al-Rashdan', favor: true}], new Date(2026, 5, 23, 0, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Lo Celso', favor: true}, { nome: 'Lautaro Martínez', favor: true}, { nome: 'Messi', favor: true}], [{ nome: 'Al-Tamari', favor: true}], new Date(2026, 5, 27, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Belghali', favor: true}, { nome: 'Mahrez', favor: true}, { nome: 'Mahrez', favor: true}], [{ nome: 'Arnautovic', favor: true}, { nome: 'Sabitzer', favor: true}, { nome: 'Kalajdzic', favor: true}], new Date(2026, 5, 27, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoK(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'João Neves', favor: true}], [{ nome: 'Wissa', favor: true}], new Date(2026, 5, 17, 14, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [{ nome: 'Campaz', favor: true}, { nome: 'Luis Díaz', favor: true},{ nome: 'Muñoz', favor: true}], [{ nome: 'Fayzullaev', favor: true}], new Date(2026, 5, 17, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [{ nome: 'Cristiano Ronaldo', favor: true}, { nome: 'Nuno Mendes', favor: true}, { nome: 'Cristiano Ronaldo', favor: true}, { nome: 'Khusanov', favor: false}, { nome: 'Rafael Leão', favor: true}], new Date(2026, 5, 23, 14, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [], [{ nome: 'Muñoz', favor: true}], new Date(2026, 5, 23, 23, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [], [], new Date(2026, 5, 27, 20, 30, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Wissa', favor: true}, { nome: 'Mayele', favor: true}, { nome: 'Wissa', favor: true}], [{ nome: 'Shomurodov', favor: true}], new Date(2026, 5, 27, 20, 30, 0), copaMundo2026.fases[0].fase[grupo])
}

function grupoL(copaMundo2026, grupo){
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[0], [{ nome: 'Rashford', favor: true}, { nome: 'Bellingham', favor: true}, { nome: 'Harry Kane', favor: true}, { nome: 'Harry Kane', favor: true}], [{ nome: 'Musa', favor: true}, { nome: 'Baturina', favor: true}], new Date(2026, 5, 17, 17, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[1], [], [{ nome: 'Yirenkyi', favor: true}], new Date(2026, 5, 17, 20, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[2], [], [], new Date(2026, 5, 23, 17, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[3], [{ nome: 'Budimir', favor: true}], [], new Date(2026, 5, 23, 20, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[4], [{ nome: 'Bellingham', favor: true}, { nome: 'Harry Kane', favor: true}], [], new Date(2026, 5, 27, 18, 0, 0), copaMundo2026.fases[0].fase[grupo])
    copaMundo2026.placar(copaMundo2026.fases[0].fase[grupo].jogos[5], [{ nome: 'Petar Sucic', favor: true}, { nome: 'Vlasic', favor: true}], [{ nome: 'Luckassen', favor: true}], new Date(2026, 5, 27, 18, 0, 0), copaMundo2026.fases[0].fase[grupo])
}

function desseseisAvos(copaMundo2026){
    copaMundo2026.faseEliminatoria(copaMundo2026.fases[0], '16 Avos', confronto16Avos)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[0], [{ nome: 'Havertz', favor: true}], [{ nome: 'Enciso', favor: true}], new Date(2026, 5, 29, 17, 30, 0), 'Oitavas de Final', true, [], [], 3, 4)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[1], [{ nome: 'Mbappé', favor: true}, { nome: 'Barcola', favor: true}, { nome: 'Mbappé', favor: true}], [], new Date(2026, 5, 30, 18, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[2], [], [{ nome: 'Eustáquio', favor: true}], new Date(2026, 5, 28, 16, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[3], [{ nome: 'Gakpo', favor: true}], [{ nome: 'Diop', favor: true}], new Date(2026, 5, 29, 22, 0, 0), 'Oitavas de Final', true, [], [], 2, 3)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[4], [{ nome: 'Cristiano Ronaldo', favor: true}, { nome: 'Gonçalo Ramos', favor: true}], [{ nome: 'Perisic', favor: true}], new Date(2026, 6, 2, 20, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[5], [{ nome: 'Oyarzabal', favor: true}, { nome: 'Oyarzabal', favor: true}, { nome: 'Pedro Porro', favor: true}], [], new Date(2026, 6, 2, 16, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[6], [{ nome: 'Balogun', favor: true}, { nome: 'Tillman', favor: true}], [], new Date(2026, 6, 1, 21, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[7], [{ nome: 'Lukaku', favor: true}, { nome: 'Tielemans', favor: true}], [{ nome: 'Diarra', favor: true}, { nome: 'Ismaïla Sarr', favor: true}], new Date(2026, 6, 1, 17, 0, 0), 'Oitavas de Final', true, [{ nome: 'Tielemans', favor: true}], [])
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[8], [{ nome: 'Casemiro', favor: true}, { nome: 'Gabriel Martinelli', favor: true}], [{ nome: 'Sano', favor: true}], new Date(2026, 5, 29, 14, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[9], [{ nome: 'Diallo', favor: true}], [{ nome: 'Nusa', favor: true},{ nome: 'Haaland', favor: true}], new Date(2026, 5, 30, 14, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[10], [{ nome: 'Raúl Jiménez', favor: true},{ nome: 'Quiñones', favor: true}], [], new Date(2026, 5, 30, 22, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[11], [{ nome: 'Harry Kane', favor: true}, { nome: 'Harry Kane', favor: true}], [{ nome: 'Cipenga', favor: true}], new Date(2026, 6, 1, 13, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[12], '', '', new Date(2026, 6, 3, 19, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[13], '', '', new Date(2026, 6, 3, 15, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[14], '', '', new Date(2026, 6, 3, 0, 0, 0), 'Oitavas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[1].fase[15], '', '', new Date(2026, 6, 3, 22, 30, 0), 'Oitavas de Final', true)
}

function oitavasFinal(copaMundo2026){
    copaMundo2026.faseEliminatoria(copaMundo2026.fases[1], 'Oitavas de Final', confrontoOitavasFinal)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[0], '', '', new Date(2026, 6, 4, 18, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[1], '', '', new Date(2026, 6, 4, 14, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[2], '', '', new Date(2026, 6, 6, 16, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[3], '', '', new Date(2026, 6, 6, 21, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[4], '', '', new Date(2026, 6, 5, 16, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[5], '', '', new Date(2026, 6, 5, 21, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[6], '', '', new Date(2026, 6, 7, 13, 0, 0), 'Quartas de Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[2].fase[7], '', '', new Date(2026, 6, 7, 17, 0, 0), 'Quartas de Final', true)
}

function quartasFinal(copaMundo2026){
    copaMundo2026.faseEliminatoria(copaMundo2026.fases[2], 'Quartas de Final', confrontosQuartasFinal)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[3].fase[0], '', '', new Date(2026, 6, 9, 17, 0, 0), 'Semi Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[3].fase[1], '', '', new Date(2026, 6, 10, 16, 0, 0), 'Semi Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[3].fase[2], '', '', new Date(2026, 6, 11, 18, 0, 0), 'Semi Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[3].fase[3], '', '', new Date(2026, 6, 11, 22, 0, 0), 'Semi Final', true)
}

function semiFinal(copaMundo2026){
    copaMundo2026.faseEliminatoria(copaMundo2026.fases[3], 'Semi Final', confrontosSemiFinal)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[4].fase[0], '', '', new Date(2026, 6, 14, 16, 0, 0), 'Final', true)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[4].fase[1], '', '', new Date(2026, 6, 15, 16, 0, 0), 'Final', true)
}

function terceiroLugar(copaMundo2026){
    copaMundo2026.faseEliminatoria(copaMundo2026.fases[4], '3° Lugar', confrontoFinal, false)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[5].fase[0], '', '', new Date(2026, 6, 18, 18, 0, 0), ['3° Lugar', '4° Lugar'], true)
}

function final(copaMundo2026){
    copaMundo2026.faseEliminatoria(copaMundo2026.fases[4], 'Final', confrontoFinal)
    copaMundo2026.placarEliminatorio(copaMundo2026.fases[6].fase[0], '', '', new Date(2026, 6, 19, 16, 0, 0), ['Campeão', 'Vice Campeão'], true)
}
