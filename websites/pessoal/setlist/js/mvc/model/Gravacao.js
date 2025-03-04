import { Musica } from "./Musica.js";
import { Interprete } from "./Interprete.js";

export class Gravacao {
    constructor(interprete, musica) {
        this.interprete = new Interprete(interprete);
        this.musica = new Musica(musica);
    }
}