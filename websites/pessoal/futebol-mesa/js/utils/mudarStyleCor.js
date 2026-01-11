export function mudarStyleCor(associacao){
    const root = document.documentElement;
    root.style.setProperty('--cor-primary', associacao.corPrimary);
    root.style.setProperty('--cor-secundary', associacao.corSecundary);
    root.style.setProperty('--cor-hover', associacao.corHover);
}