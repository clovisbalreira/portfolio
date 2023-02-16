function mostrarLinguagem(){
    var ul = document.getElementById('ul_inicio')
    linguagens.forEach( linguagem => {
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.innerHTML = linguagem.nome
        a.setAttribute('href', linguagem.url)
        li.appendChild(a)
        ul.appendChild(li)
    })
}

function mostrarSites(id, linguagem){
    const ul = document.getElementById(id)
    sites.forEach( site => {
        if(site.linguagem.nome == linguagem){
            const li = document.createElement('li')
            const a = document.createElement('a')
            a.classList.add('linkSite')
            a.setAttribute('href', site.url)
            a.setAttribute('target', '_blank' )
            a.innerHTML = site.titulo
            const div = document.createElement('div')
            const pDescricao = document.createElement('p')
            pDescricao.innerHTML = 'Descrição: ' + site.descricao
            div.appendChild(pDescricao)
            div.classList.add('especificacoes')
            const pLinguagem = document.createElement('p')
            pLinguagem.innerHTML = 'Linguagem: ' + site.linguagem.nome
            div.appendChild(pLinguagem)
            const pLinguagemDescricao = document.createElement('p')
            pLinguagemDescricao.setAttribute('class', 'descricoes')
            pLinguagemDescricao.innerHTML = 'Descrição: ' + site.linguagem.descricao
            div.appendChild(pLinguagemDescricao)
            const pTipo = document.createElement('p')
            pTipo.innerHTML = 'Tipo: ' + site.tipo.nome
            div.appendChild(pTipo)
            const pTipoDescricao = document.createElement('p')
            pTipoDescricao.classList.add('descricoes')
            pTipoDescricao.innerHTML = 'Descrição: ' + site.tipo.descricao
            div.appendChild(pTipoDescricao)
            const pProjeto = document.createElement('p')
            pProjeto.innerHTML = 'Projeto: ' + site.projeto.nome
            div.appendChild(pProjeto)
            const pProjetoDescricao = document.createElement('p')
            pProjetoDescricao.classList.add('descricoes')
            pProjetoDescricao.innerHTML = 'Descrição: ' + site.projeto.descricao
            div.appendChild(pProjetoDescricao)
            const pModelo = document.createElement('p')
            pModelo.innerHTML = 'Modelo: ' + site.modelo.nome
            div.appendChild(pModelo)
            const pModelooDescricao = document.createElement('p')
            pModelooDescricao.classList.add('descricoes')
            pModelooDescricao.innerHTML = 'Descrição: ' + site.modelo.descricao
            div.appendChild(pModelooDescricao)
            const pTag = document.createElement('p')
            pTag.innerHTML = 'Tag: ' + site.tag
            div.appendChild(pTag)
            a.appendChild(div)
            li.appendChild(a)
            ul.appendChild(li)
        }
    });
}
