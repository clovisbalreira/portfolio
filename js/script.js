function toogleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    const img = document.querySelector('img')
    if(html.classList.contains('light')){
        img.setAttribute('src', 'https://github.com/clovisbalreira.png')
    }else{
        img.setAttribute('src', 'https://github.com/clovisbalreira.png')
    }
}

const ulHtmlCssJavascript = document.getElementById('site-html-css-javascript')

sites.forEach( site => {
    if(site.linguagem.nome == 'HTML, CSS e JavaScript'){
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
        ulHtmlCssJavascript.appendChild(li)
    }
});

/*var listas = document.querySelectorAll('li')
listas.forEach(lista => {
    lista.addEventListener('mouseover' , function(event){
        event.target.childNodes[1].classList.remove('desaparecer')
        event.target.childNodes[1].classList.add('especificacoes')
    })
    lista.addEventListener('mouseout' , function(event){
        event.target.childNodes[1].classList.add('desaparecer')
        event.target.childNodes[1].classList.remove('especificacoes')
    })
})*/



