function titulo(texto){
    let h2 = document.createElement('h2')
    h2.classList.add('h2-titulo')
    h2.innerHTML = texto
    return h2
}

function subTitulo(texto){
    let h3 = document.createElement('h3')
    h3.classList.add('h3-titulo')
    h3.innerHTML = texto
    return h3
}

function h1(texto){
    let div = document.createElement('div')
    div.classList.add('nome-foto')
    let h1 = document.createElement('h1')
    h1.innerHTML = texto
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = 'https://github.com/clovisbalreira.png'
    img.alt = `Foto do ${texto}`
    div.appendChild(img)
    return div
}

function h4(nome){
    let h4 = document.createElement('h4')
    h4.innerHTML = nome
    return h4
}

function divDadosPessoais(nome, site){
    let div = document.createElement('div')
    div.classList.add('div-dados-pessoais')
    div.appendChild(h4(nome))
    div.appendChild(a(site))
    return div
}

function a(site){
    let a = document.createElement('a')
    a.innerHTML = site
    a.href = site
    a.target = "_blank"
    return a
}

function strong(texto){
    let strong = document.createElement('strong')
    strong.innerHTML = texto
    return strong
}

function p(texto){
    let p = document.createElement('p')
    p.innerHTML = texto
    return p
}

function empresas(contratos){
    let divGlobal = document.createElement('div')
    contratos.forEach(contrato => {
        let div = document.createElement('div')
        div.appendChild(strong(contrato.nome))
        div.appendChild(p('|'))
        div.appendChild(p(contrato.data_inicio))
        div.appendChild(p('-'))
        div.appendChild(p(contrato.data_fim))
        divGlobal.appendChild(div)
    })
    return divGlobal
}

function experienciaProfissional(cargos, idioma){
    let div = document.createElement('div')
    div.classList.add('div-experiencia-profissional')
    cargos.forEach( cargo => {
        if(idioma == 'portugues'){
            div.appendChild(subTitulo(cargo.portugues.nome))
            div.appendChild(empresas(cargo.empresa.portugues))
        }
        if(idioma == 'espanhol'){
            div.appendChild(subTitulo(cargo.espanhol.nome))
            div.appendChild(empresas(cargo.empresa.espanhol))
        }
        if(idioma == 'ingles'){
            div.appendChild(subTitulo(cargo.ingles.nome))
            div.appendChild(empresas(cargo.empresa.ingles))
        }
    })
    return div
}

function formacaoAcademica(formacao){
    let div = document.createElement('div')
    div.classList.add('div-formacao-academica')
    div.appendChild(strong(formacao.nome))
    div.appendChild(p(' - '))
    div.appendChild(p(formacao.instituicao))
    div.appendChild(p('|'))
    div.appendChild(p(formacao.data_inicio))
    div.appendChild(p('-'))
    div.appendChild(p(formacao.data_fim))
    return div
}

function objetivos(texto){
    let div = document.createElement('div')
    div.classList.add('objetivos')
    div.appendChild(p(texto))
    return div
}
function interesseProfissionais(profissionais){
    let divGlobal = document.createElement('div')
    divGlobal.classList.add('div-interesse-pessoal')
    profissionais.forEach(profissional => {
        divGlobal.appendChild(p(profissional.nome))
    })
    return divGlobal
}

function competenciaTecnicas(competencias){
    let divGlobal = document.createElement('div')
    competencias.forEach(competencia => {
        let div = document.createElement('div')
        div.classList.add('div-competencia-tecnicas-idiomas-projetos')
        div.appendChild(strong(competencia.nome))
        div.appendChild(strong(':'))
        div.appendChild(p(competencia.tecnicas))
        divGlobal.appendChild(div)
    })
    return divGlobal
}

function idiomas(idiomas){
    let divGlobal = document.createElement('div')
    idiomas.forEach(idioma => {
        let div = document.createElement('div')
        div.classList.add('div-competencia-tecnicas-idiomas-projetos')
        div.appendChild(strong(idioma.nome))
        div.appendChild(strong(':'))
        div.appendChild(a(idioma.nivel))
        divGlobal.appendChild(div)
    })
    return divGlobal
}

function projeto(projetos){
    let divGlobal = document.createElement('div')
    projetos.forEach(projeto => {
        let div = document.createElement('div')
        div.classList.add('div-competencia-tecnicas-idiomas-projetos')
        div.appendChild(strong(projeto.nome))
        div.appendChild(strong(':'))
        div.appendChild(a(projeto.site))
        divGlobal.appendChild(div)
    })
    return divGlobal
}

function formacaoProfissional(formacoes, idioma){
    let divGlobal = document.createElement('div')
    divGlobal.classList.add('div-formacao-profissional')
    for(let i = 0; i < formacoes.length; i++){
        if(idioma == 'portugues'){
            divGlobal.appendChild(subTitulo(formacoes[i].portugues.nome))
        }else if(idioma == 'espanhol'){
            divGlobal.appendChild(subTitulo(formacoes[i].espanhol.nome))
        }else if(idioma == 'ingles'){
            divGlobal.appendChild(subTitulo(formacoes[i].ingles.nome))
        }
        for(let k = 0; k < formacoes[i].instituicoes.length; k = formacoes[i].instituicoes.length){
            if(idioma == 'portugues'){
                formacoes[i].instituicoes[0].portugues.forEach( instituicao => {
                    divGlobal.appendChild(h4(instituicao.nome))
                    divGlobal.appendChild(p(instituicao.descricao))
                })
            }else if(idioma == 'espanhol'){
                formacoes[i].instituicoes[1].espanhol.forEach( instituicao => {
                    divGlobal.appendChild(h4(instituicao.nome))
                    divGlobal.appendChild(p(instituicao.descricao))
                })
            }else if(idioma == 'ingles'){
                formacoes[i].instituicoes[2].ingles.forEach( instituicao => {
                    divGlobal.appendChild(h4(instituicao.nome))
                    divGlobal.appendChild(p(instituicao.descricao))
                })
            }
        }
    }
    return divGlobal
}

function portugues(idioma, section){
    section.append(h1(curriculo.nome.portugues.dado))
    section.append(titulo(curriculo.dados_pessoais.portugues.titulo))
    section.append(divDadosPessoais(curriculo.dados_pessoais.dados.linkedin.nome, curriculo.dados_pessoais.dados.linkedin.dado))
    section.append(divDadosPessoais(curriculo.dados_pessoais.dados.github.nome, curriculo.dados_pessoais.dados.github.dado))
    section.append(titulo(curriculo.experiencia_profissional.portugues.titulo))
    section.append(experienciaProfissional(curriculo.experiencia_profissional.dados, idioma))
    section.append(titulo(curriculo.formação_academica.portugues.titulo))
    section.append(formacaoAcademica(curriculo.formação_academica.dados.portugues))
    section.append(titulo(curriculo.objetivos.portugues.nome))
    section.append(objetivos(curriculo.objetivos.portugues.dado))
    section.append(titulo(curriculo.interesses_profissionais.portugues.titulo))
    section.append(interesseProfissionais(curriculo.interesses_profissionais.dados.portugues))
    section.append(titulo(curriculo.competencias_tecnicas.portugues.titulo))
    section.append(competenciaTecnicas(curriculo.competencias_tecnicas.dados.portugues))
    section.append(titulo(curriculo.idiomas.portugues.titulo))
    section.append(idiomas(curriculo.idiomas.dados.portugues))
    section.append(titulo(curriculo.projetos.portugues.titulo))
    section.append(projeto(curriculo.projetos.dados))
    section.append(titulo(curriculo.formacao_profissional.portugues.titulo))
    section.append(formacaoProfissional(curriculo.formacao_profissional.dados, idioma))
}

function espanhol(idioma, section){
    section.append(h1(curriculo.nome.espanhol.dado))
    section.append(titulo(curriculo.dados_pessoais.espanhol.titulo))
    section.append(divDadosPessoais(curriculo.dados_pessoais.dados.linkedin.nome, curriculo.dados_pessoais.dados.linkedin.dado))
    section.append(divDadosPessoais(curriculo.dados_pessoais.dados.github.nome, curriculo.dados_pessoais.dados.github.dado))
    section.append(titulo(curriculo.experiencia_profissional.espanhol.titulo))
    section.append(experienciaProfissional(curriculo.experiencia_profissional.dados, idioma))
    section.append(titulo(curriculo.formação_academica.espanhol.titulo))
    section.append(formacaoAcademica(curriculo.formação_academica.dados.espanhol))
    section.append(titulo(curriculo.objetivos.espanhol.nome))
    section.append(objetivos(curriculo.objetivos.espanhol.dado))
    section.append(titulo(curriculo.interesses_profissionais.espanhol.titulo))
    section.append(interesseProfissionais(curriculo.interesses_profissionais.dados.espanhol))
    section.append(titulo(curriculo.competencias_tecnicas.espanhol.titulo))
    section.append(competenciaTecnicas(curriculo.competencias_tecnicas.dados.espanhol))
    section.append(titulo(curriculo.idiomas.espanhol.titulo))
    section.append(idiomas(curriculo.idiomas.dados.espanhol))
    section.append(titulo(curriculo.projetos.espanhol.titulo))
    section.append(projeto(curriculo.projetos.dados))
    section.append(titulo(curriculo.formacao_profissional.espanhol.titulo))
    section.append(formacaoProfissional(curriculo.formacao_profissional.dados, idioma))
}

function ingles(idioma, section){
    section.append(h1(curriculo.nome.ingles.dado))
    section.append(titulo(curriculo.dados_pessoais.ingles.titulo))
    section.append(divDadosPessoais(curriculo.dados_pessoais.dados.linkedin.nome, curriculo.dados_pessoais.dados.linkedin.dado))
    section.append(divDadosPessoais(curriculo.dados_pessoais.dados.github.nome, curriculo.dados_pessoais.dados.github.dado))
    section.append(titulo(curriculo.experiencia_profissional.ingles.titulo))
    section.append(experienciaProfissional(curriculo.experiencia_profissional.dados, idioma))
    section.append(titulo(curriculo.formação_academica.ingles.titulo))
    section.append(formacaoAcademica(curriculo.formação_academica.dados.ingles))
    section.append(titulo(curriculo.objetivos.ingles.nome))
    section.append(objetivos(curriculo.objetivos.ingles.dado))
    section.append(titulo(curriculo.interesses_profissionais.ingles.titulo))
    section.append(interesseProfissionais(curriculo.interesses_profissionais.dados.ingles))
    section.append(titulo(curriculo.competencias_tecnicas.ingles.titulo))
    section.append(competenciaTecnicas(curriculo.competencias_tecnicas.dados.ingles))
    section.append(titulo(curriculo.idiomas.ingles.titulo))
    section.append(idiomas(curriculo.idiomas.dados.ingles))
    section.append(titulo(curriculo.projetos.ingles.titulo))
    section.append(projeto(curriculo.projetos.dados))
    section.append(titulo(curriculo.formacao_profissional.ingles.titulo))
    section.append(formacaoProfissional(curriculo.formacao_profissional.dados, idioma))
}

function mostrarDadosCurriculo(idioma){
    let section = document.getElementById('curriculo')
    section.innerHTML = ''
    
    if(idioma == 'portugues'){
        portugues(idioma, section)
    }
    else if(idioma == 'espanhol'){
        espanhol(idioma, section)
    }
    else if(idioma == 'ingles'){
        ingles(idioma, section)
    }
}

mostrarDadosCurriculo('portugues')

document.getElementById('portugal').addEventListener('click', () => {
    mostrarDadosCurriculo('portugues')
    } 
)

document.getElementById('espanha').addEventListener('click', () => {     
    mostrarDadosCurriculo('espanhol')
    }
)

document.getElementById('inglaterra').addEventListener('click', () => { 
    mostrarDadosCurriculo('ingles')
    }
)