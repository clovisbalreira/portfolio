import { Locutor } from "../mvc/model/Locutor.js"

export function sortearFuncionario(){
    let nomeMasculino = ['Lucas','Pedro','Gabriel','João','Mateus','Guilherme','Leonardo','Rafael','Daniel','André']
    let nomeFeminino = ['Maria','Ana','Sofia','Isabella','Laura','Manuela','Julia','Beatriz','Luiza','Valentina']
    let frases = ['Especialista em músicas dos anos 80 e apresentador do programa matinal.', 'Apaixonada por cultura pop, traz entrevistas exclusivas com artistas.', 'Locutor que adora compartilhar clássicos do rock.', 'Especialista em podcasts e novidades tecnológicas.', 'Músicas animadas, notícias e participação dos ouvintes para começar bem o dia.', 'Entrevistas descontraídas com artistas, influenciadores e personalidades culturais.', 'Do rock ao jazz, uma seleção de clássicos para curtir.', 'Confira as músicas que mais fizeram sucesso entre os ouvintes da Mix Digital.', 'Em entrevista exclusiva, a Banda X comentou sobre o processo criativo de seu novo trabalho.', 'Selecionamos os programas que combinam com o fim do dia, incluindo os clássicos do rock.']
    let sexo = parseInt(Math.random() * 2)
    let numeroSorteio = parseInt(Math.random() * 10)
    let numero = parseInt(Math.random() * 10)
    if(sexo == 1){
        return new Locutor(nomeMasculino[numeroSorteio], frases[numero], `https://randomuser.me/api/portraits/men/${numeroSorteio}.jpg`)
    }else{
        return new Locutor(nomeFeminino[numeroSorteio], frases[numero], `https://randomuser.me/api/portraits/women/${numeroSorteio}.jpg`)
    }
}