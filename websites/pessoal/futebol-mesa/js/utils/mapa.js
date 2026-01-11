export function mapa(associacao){
    let iframe = document.createElement('iframe')
    iframe.src = `https://www.google.com/maps?q=${associacao.logradouro},+${associacao.numero},+${associacao.cidade},+${associacao.estado}&output=embed`
    iframe.setAttribute("allowfullscreen", "")
    iframe.setAttribute("loading", "lazy")
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade")
    return iframe
}