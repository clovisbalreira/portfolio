export function adicionarDetails(texto){
    let details = document.createElement('details')
    details.textContent = texto
    let summary = document.createElement('summary')
    summary.textContent = 'Descrição'
    details.appendChild(summary)
    return details
}