function mostrarLinguagem(){
    var ul = document.getElementById('ul_inicio')
    sites.forEach( site => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            a.classList.add('linkSite')
            a.href = site.url
            a.target = '_blank'
            a.innerHTML = site.nome
            const div = document.createElement('div')
            const repositorio = document.createElement('a')
            repositorio.innerHTML = 'Repositório GitHub'
            repositorio.classList.add('linkRepositorio')
            repositorio.href = site.repositorio
            repositorio.target = '_black'
            repositorio.alt = site.nome
            div.appendChild(repositorio)
            const pDescricao = document.createElement('p')
            pDescricao.innerHTML = 'Descrição: ' + site.descricao
            div.appendChild(pDescricao)
            div.classList.add('especificacoes')
            a.appendChild(div)
            li.appendChild(a)
            ul.appendChild(li)
        
    });
}
