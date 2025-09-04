import { Programa } from "../model/Programa.js";
import { locutores } from "./locutores.js";
import { dados } from "./dados.js";

export let programas = []

function incluirPrograma(programa, nome, historia, foto, locutor, rede) {
    let novo = new Programa(nome, historia, foto)
    novo.adicionarLocutor(locutor)
    novo.adicionarRadio(rede)
    programa.push(novo)
}


incluirPrograma(programas, "DJ Star", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "As Mais Pedidas", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "Uma Hora Direto", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[1], dados[0]);
incluirPrograma(programas, "#CNS", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "CNS Hits", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "Expresso do Rock", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "Pop Rock CNS", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "Feedback CNS", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "As Mais Pedidas", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "Pezão Show, com Sr Pezão", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[0]);
incluirPrograma(programas, "Baú da Mix", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[1]);
incluirPrograma(programas, "Toca Pro Face", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[1]);
incluirPrograma(programas, "Mix Tudo", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[1]);
incluirPrograma(programas, "Agora o Bicho Vai Pegar", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[1]);
incluirPrograma(programas, "Club Mix", "", "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[0], dados[1]);