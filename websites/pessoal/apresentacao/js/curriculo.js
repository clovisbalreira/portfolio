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

function p(texto, classe){
    let p = document.createElement('p')
    p.classList.add(classe)
    p.innerHTML = texto
    return p
}

function span(texto){
    let span = document.createElement('span')
    span.innerHTML = texto
    return span
}

function empresas(contratos){
    let divGlobal = document.createElement('div')
    contratos.forEach(contrato => {
        let div = document.createElement('div')
        div.appendChild(strong(contrato.nome))
        div.appendChild(p('|'))
        div.appendChild(span(`${contrato.data_inicio} - ${contrato.data_fim}`))
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
    div.appendChild(p(' - ', 'deletar'))
    div.appendChild(p(formacao.instituicao))
    div.appendChild(p('|', 'deletar'))
    div.appendChild(span(`${formacao.data_inicio} - ${formacao.data_fim}`))
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

function incluirZero(numero){
    return numero < 10 ? `0${numero}` : numero  
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

function mostrarCursos(cursos, idioma, filtrar){
    let ul = document.getElementById('lista-cursos')
    ul.innerHTML = ''
    cursos.forEach(curso => {
        let instituicao = curso.instituicao
        let posicao = curso.posicao
        curso.cursos.forEach( dados => {
            filtrar ? condicaoFiltro(dados, ul, idioma, dados, instituicao, posicao) : desenharCursos(ul, idioma, dados, instituicao, posicao)            
        })
    })
}

function condicaoFiltro(dados, ul, idioma, dados, instituicao, posicao){
    if(dados.filtro) desenharCursos(ul, idioma, dados, instituicao, posicao)  
}

function desenharCursos(ul, idioma, dados, instituicao, posicao){
    let li = document.createElement('li')
    let data
    let hora 
    if(idioma == 'portugues'){
        li.appendChild(titulo(`${instituicao} - ${dados.portugues.nome}`))
        data = 'Data: '
        hora = ' horas'
    }else if(idioma == 'espanhol'){
        li.appendChild(titulo(`${instituicao} - ${dados.espanhol.nome}`))
        data = 'Datos: '
        hora = ' horas'       
    }else if(idioma == 'ingles'){
        li.appendChild(titulo(`${instituicao} - ${dados.ingles.nome}`))     
        data = 'Date: '
        hora = ' hours'    
    }
    let pData = document.createElement('p')
    pData.appendChild(strong(data))
    let dataInicio = new Date(dados.dataInicio)
    let dataFim = new Date(dados.dataFim)
    instituicao == 'E.J.A.' ? pData.appendChild(span(`${incluirZero(dataFim.getDate())}/${incluirZero(dataFim.getMonth() + 1)}/${dataFim.getFullYear()}`)) : pData.appendChild(span(`${incluirZero(dataInicio.getDate())}/${incluirZero(dataInicio.getMonth() + 1)}/${dataInicio.getFullYear()} - ${incluirZero(dataFim.getDate())}/${incluirZero(dataFim.getMonth() + 1)}/${dataFim.getFullYear()}`))
    let horas = instituicao == 'E.J.A.' ? '' : ` - ${dados.horas} ${hora}`
    pData.appendChild(span(horas))
    li.appendChild(pData)
    li.appendChild(imagemCurso(dados, instituicao, posicao))    
    ul.appendChild(li)
}

function imagemCurso(dados, nome, posicao){
    let div = document.createElement('div')
    div.classList.add('div-imagens-curso')
    if(nome == 'E.J.A.'){
        dados.imagens.forEach(imagem => {
            let img = document.createElement('img')
            img.classList.add('img-vertical')
            img.src = imagem    
            img.alt = dados.nome
            div.appendChild(img)
        })
    }else{
        dados.imagens.forEach((imagem, index) => {
            let img = document.createElement('img')
            index == 0 ? img.classList.add('mostrar') : img.classList.add('esconder')
            img.classList.add(`${posicao == 'vertical' ? 'img-vertical' : 'img-horizontal'}`)
            img.src = imagem    
            img.alt = dados.nome
            div.appendChild(img)
        })
    }
    return div
}

function adicionarLabels(idiomaAtual, labelText){
    let labels = document.querySelectorAll('label')
    labels.forEach((label, index) => {
        if(idiomaAtual == 'portugues')
            label.textContent = labelText.portugues[index]
        else if(idiomaAtual == 'ingles')
            label.textContent = labelText.ingles[index]
        else if(idiomaAtual == 'espanhol')
            label.textContent = labelText.espanhol[index]
    })
}

function adicionarSelectTexto(idiomaAtual, portugues, espanhol, ingles){
    let option = document.createElement('option')
    if(idiomaAtual == 'portugues'){
        option.textContent = portugues
    }else if(idiomaAtual == 'espanhol'){
        option.textContent = espanhol
    }else if(idiomaAtual == 'ingles'){
        option.textContent = ingles
    }
    return option
}

function preencherOptions(select, dados){
    dados.forEach(instituicao => {
        let option = document.createElement('option')
        option.value = instituicao
        option.textContent = instituicao
        select.appendChild(option)
    })
}

function preecherSelectCurso(idiomaAtual, dados){
    let array = []
    if(idiomaAtual == 'portugues'){
        dados.portugues.forEach(dado => {
            dado.forEach(nome => {
                array.push(nome)
            })
        })
    }else if(idiomaAtual == 'espanhol'){
        dados.espanhol.forEach(dado => {
            dado.forEach(nome => {
                array.push(nome)
            })
        })
    }else if(idiomaAtual == 'ingles'){
        dados.ingles.forEach(dado => {
            dado.forEach(nome => {
                array.push(nome)
            })
        })
    }
    return array
}

function preecherSelectTipoCurso(idiomaAtual, dados){
    let array = []
    if(idiomaAtual == 'portugues'){
        dados.portugues.forEach(dado => {
            array.push(dado)
        })
    }else if(idiomaAtual == 'espanhol'){
        dados.espanhol.forEach(dado => {
            array.push(dado)
        })
    }else if(idiomaAtual == 'ingles'){
        dados.ingles.forEach(dado => {
            array.push(dado)
        })
    }
    return array
}

function naoRepetir(anos){
    let dados = []
    anos.forEach(dado => {
        dado.forEach(t => {
            if(!dados.includes(t)){
                dados.push(t)
            }
        })
    })
    return dados
}

function selectAno(idiomaAtual, anos){
    let select = document.getElementById('ano')
    select.innerHTML = ''
    select.appendChild(adicionarSelectTexto(idiomaAtual, 'Selecione o ano:', 'Seleccione el año:', 'Select the year:'))
    preencherOptions(select, naoRepetir(anos).sort((a,b) => b - a))
}

function selectInstituicao(idiomaAtual, instituicoes){
    let select = document.getElementById('instituicao')
    select.innerHTML = ''
    select.appendChild(adicionarSelectTexto(idiomaAtual, 'Selecione a instituição:', 'Seleccione la institución:', 'Select the institution:'))
    preencherOptions(select, instituicoes)
}

function selectCursos(idiomaAtual, nomeCursos){
    let select = document.getElementById('cursos')
    select.innerHTML = ''
    select.appendChild(adicionarSelectTexto(idiomaAtual, 'Selecione o curso:', 'Seleccione el curso:', 'Select the course:'))
    preencherOptions(select, preecherSelectCurso(idiomaAtual, nomeCursos))
}

function selectTipoCurso(idiomaAtual, tipoCursos){
    let select = document.getElementById('tipo')
    select.innerHTML = ''
    select.appendChild(adicionarSelectTexto(idiomaAtual, 'Selecione o tipo de curso:', 'Seleccione el tipo de curso:', 'Select the type of course:'))
    preencherOptions(select, naoRepetir(preecherSelectTipoCurso(idiomaAtual, tipoCursos)))
}

function atualizarSelect(idiomaAtual, anos, instituicoes, nomeCursos, tipoCursos){
    selectAno(idiomaAtual, anos)
    selectInstituicao(idiomaAtual, instituicoes)
    selectCursos(idiomaAtual, nomeCursos)
    selectTipoCurso(idiomaAtual, tipoCursos)
}

function carregarPagina(cursos, idiomaAtual, labelText, instituicoes, nomeCursos, anos){
    mostrarDadosCurriculo(idiomaAtual)
    mostrarCursos(cursos, idiomaAtual, false)
    adicionarLabels(idiomaAtual, labelText)
    atualizarSelect(idiomaAtual, anos, instituicoes, nomeCursos, tipoCursos)
}

carregarPagina(cursos, idiomaAtual, labelText, instituicoes, nomeCursos, anos)

document.getElementById('portugal').addEventListener('click', () => {
    idiomaAtual = 'portugues'
    carregarPagina(cursos, idiomaAtual, labelText, instituicoes, nomeCursos, anos)
    } 
)

document.getElementById('espanha').addEventListener('click', () => {     
    idiomaAtual = 'espanhol'
    carregarPagina(cursos, idiomaAtual, labelText, instituicoes, nomeCursos, anos)
    }
)

document.getElementById('inglaterra').addEventListener('click', () => { 
    idiomaAtual = 'ingles'
    carregarPagina(cursos, idiomaAtual, labelText, instituicoes, nomeCursos, anos)
    }
)

document.getElementById('cursos').addEventListener('change', () => {
    let valor = document.getElementById('cursos').value
    if(valor == 'Selecione o curso:' || valor == 'Seleccione el curso:' || valor == 'Select the course:') return mostrarCursos(cursos, idiomaAtual, false)
    cursos.forEach( curso => {
        curso.cursos.forEach( cursoNome => {
            cursoNome.portugues.nome == valor || cursoNome.espanhol.nome == valor || cursoNome.ingles.nome == valor ? cursoNome.filtro = true : cursoNome.filtro = false
        })
    })
    selectAno(idiomaAtual, anos)
    selectInstituicao(idiomaAtual, instituicoes)
    selectTipoCurso(idiomaAtual, tipoCursos)
    mostrarCursos(cursos, idiomaAtual, true)
}) 

document.getElementById('ano').addEventListener('change', () => {
    let valor = document.getElementById('ano').value
    if(valor == 'Selecione o ano:' || valor == 'Seleccione el año:' || valor == 'Select the year:') return mostrarCursos(cursos, idiomaAtual, false)
    cursos.forEach( curso => {
        curso.cursos.forEach( cursoNome => {
            const anoSelecionado = new Date(cursoNome.dataFim).getFullYear()
            anoSelecionado == valor ? cursoNome.filtro = true : cursoNome.filtro = false
        })
    })
    selectInstituicao(idiomaAtual, instituicoes)
    selectCursos(idiomaAtual, nomeCursos)
    selectTipoCurso(idiomaAtual, tipoCursos)
    mostrarCursos(cursos, idiomaAtual, true)
}) 

document.getElementById('instituicao').addEventListener('change', () => {
    let valor = document.getElementById('instituicao').value
    if(valor == 'Selecione a instituição:' || valor == 'Seleccione la institución:' || valor == 'Select the institution:') return mostrarCursos(cursos, idiomaAtual, false)
    cursos.forEach( curso => {
        curso.cursos.forEach( cursoNome => {
            curso.instituicao == valor ? cursoNome.filtro = true : cursoNome.filtro = false
        })
    })
    selectAno(idiomaAtual, anos)
    selectCursos(idiomaAtual, nomeCursos)
    selectTipoCurso(idiomaAtual, tipoCursos)
    mostrarCursos(cursos, idiomaAtual, true)
}) 

document.getElementById('tipo').addEventListener('change', () => {
    let valor = document.getElementById('tipo').value
    if(valor == 'Selecione o tipo de curso:' || valor == 'Seleccione el tipo de curso:' || valor == 'Select the type of course:') return mostrarCursos
    cursos.forEach( curso => {
        curso.cursos.forEach( cursoNome => {
            cursoNome.portugues.tipo == valor || cursoNome.espanhol.tipo == valor || cursoNome.ingles.tipo == valor ? cursoNome.filtro = true : cursoNome.filtro = false
        })
    })
    selectAno(idiomaAtual, anos)
    selectInstituicao(idiomaAtual, instituicoes)
    selectCursos(idiomaAtual, nomeCursos)
    mostrarCursos(cursos, idiomaAtual, true)
}) 