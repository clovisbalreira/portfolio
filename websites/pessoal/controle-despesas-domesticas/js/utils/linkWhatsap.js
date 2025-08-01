export function linkWhatsap(pagador) {
    let a = document.createElement('a')
    a.setAttribute('id' , `whatsapp-${pagador.nome}`)
    a.href = `https://api.whatsapp.com/send?phone=${pagador.telefone}`
    a.target = '_blank'
    a.innerHTML = 'Telefone'
    return a
}
