import { Programa } from "../model/Programa.js";
import { locutores } from "./locutores.js";
import { radios } from "./radios.js";

export let programas = []

function incluirPrograma(programa, nome, historia, foto, locutor, rede) {
    let novo = new Programa(nome, historia, foto)
    novo.adicionarLocutor(locutor)
    novo.adicionarRadio(rede)
    programa.push(novo)
}

let frases = ['Especialista em músicas dos anos 80 e apresentador do programa matinal.', 'Apaixonada por cultura pop, traz entrevistas exclusivas com artistas.', 'Locutor que adora compartilhar clássicos do rock.', 'Especialista em podcasts e novidades tecnológicas.', 'Músicas animadas, notícias e participação dos ouvintes para começar bem o dia.', 'Entrevistas descontraídas com artistas, influenciadores e personalidades culturais.', 'Do rock ao jazz, uma seleção de clássicos para curtir.', 'Confira as músicas que mais fizeram sucesso entre os ouvintes da Mix Digital.', 'Em entrevista exclusiva, a Banda X comentou sobre o processo criativo de seu novo trabalho.', 'Selecionamos os programas que combinam com o fim do dia, incluindo os clássicos do rock.']
incluirPrograma(programas, "Programa 1", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 2", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 3", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 4", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 5", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 6", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 7", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 8", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 9", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 10", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[0]);
incluirPrograma(programas, "Programa 11", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[1]);
incluirPrograma(programas, "Programa 12", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[1]);
incluirPrograma(programas, "Programa 13", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[1]);
incluirPrograma(programas, "Programa 14", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[1]);
incluirPrograma(programas, "Programa 15", frases[parseInt(Math.random() * 10)], "https://blog.gokursos.com/wp-content/uploads/2023/05/programming-background-with-person-working-with-codes-computer-1200x800.jpg", locutores[parseInt(Math.random() * 5)], radios[1]);