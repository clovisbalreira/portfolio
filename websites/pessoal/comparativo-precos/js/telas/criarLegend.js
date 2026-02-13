export function criarLegend(texto){
    let legend = document.createElement('legend')
    legend.textContent = texto 
    return legend
}