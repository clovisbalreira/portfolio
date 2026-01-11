export function criarLabelSelect(elemento, texto, id, socios, associacao, placeholder, optgroups, selecionado){
    elemento.appendChild(criarLabel(texto, id))
    elemento.appendChild(criarSelect(socios, associacao, id, placeholder, optgroups, selecionado))
}

function criarLabel(texto, id){
    let label = document.createElement('label')
    label.textContent = texto
    label.setAttribute('for', id)
    return label
}

function criarSelect(principal, filtrando, id, placeholder, optgroups, selecionado){
    let select = document.createElement('select')
    select.id = id
    select.appendChild(option('', placeholder))
    if(optgroups != ''){
        optgroups.forEach( opt => {
            select.appendChild(optgroup(principal, filtrando, opt.texto, opt.condicao, selecionado))
        })
    }else{
        principal.forEach( dado => {
            select.appendChild(option(dado, dado, selecionado))
        })
    }
    return select
}

function optgroup(principal, filtrando, texto, condicao, selecionado){
    let sociosFiltrar = principal.filter( texto => {
        if(condicao) return texto.status.nome == filtrando.nome
        else return texto.status.nome != filtrando.nome
    })
    sociosFiltrar.sort((a, b) => 
        a.nome.localeCompare(b.nome, 'pt-BR')
    )
    let optgroup = document.createElement('optgroup')
    optgroup.label = texto
    sociosFiltrar.forEach(socio => {
        optgroup.appendChild(option(socio.nome, socio.nome, selecionado))
    })
    return optgroup
}

function option(nomeValue, nomeTexto, selecionado){
    let option = document.createElement('option')
    option.value = nomeValue
    option.textContent = nomeTexto
    if(selecionado == nomeValue) option.selected = true
    return option
}