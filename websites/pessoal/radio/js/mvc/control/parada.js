import { dados } from "./dados.js";
import { Parada } from "../model/Parada.js";

let paradaCns = new Parada(dados[0].nomeCompleto, 'As 5+ CNS')
paradaCns.adicionarMusica('Billie Jean','Michael Jackson')
paradaCns.adicionarMusica('Bohemian Rhapsody','Queen')
paradaCns.adicionarMusica('Shape of You','Ed Sheeran')
paradaCns.adicionarMusica('Rolling in the Deep','Adele')
paradaCns.adicionarMusica('Thriller','Michael Jackson')
let paradaMix = new Parada(dados[1].nomeCompleto, 'As 10+ Mix')
paradaMix.adicionarMusica('Billie Jean','Michael Jackson')
paradaMix.adicionarMusica('Bohemian Rhapsody','Queen')
paradaMix.adicionarMusica('Hotel California','The Eagles')
paradaMix.adicionarMusica('Shape of You','Ed Sheeran')
paradaMix.adicionarMusica('Thriller','Michael Jackson')
paradaMix.adicionarMusica('Smells Like Teen Spirit','Nirvana')
paradaMix.adicionarMusica('Rolling in the Deep','Adele')
paradaMix.adicionarMusica('Stairway to Heaven','Led Zeppelin')
paradaMix.adicionarMusica('Like a Prayer','Madonna')
paradaMix.adicionarMusica('Halo','Beyoncé')
export const parada = [paradaCns, paradaMix]