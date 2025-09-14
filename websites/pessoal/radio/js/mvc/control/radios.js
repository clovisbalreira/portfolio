import { Radio } from "../model/Radio.js";
let cores = ['', 'red', 'blue']

export const radios = [ new Radio('Músicas', 'FM músicas', 'background-music-instrumental-207886.mp3', 'www.fmmusicas.com', 'fundo.jpg', '#', '#', '#', '', '#', '', '5551999999999', 'A rádio da música', 'radio-fm-musica.png', 'radio-fm-musica.png', 2000, 'Brasil', 'Rio Grande do Sul', 'Canoas'), 
new Radio('Gerações', 'Embalando gerações', 'station-radio-238854.mp3', 'www.embalandogeracoes.com.br', cores[parseInt(Math.random() * 3)], '', '', '', '', '', '', '5551999999999', 'A geração que embala', 'radio-embalando-geracoes.png', 'radio-embalando-geracoes.png', 1996, 'Brasil', 'São Paulo', 'São Paulo')
]