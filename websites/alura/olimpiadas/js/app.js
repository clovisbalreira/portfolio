function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    
    section.innerHTML = ''

    let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase()

    if(campoPesquisa == ""){
        let p = document.createElement('p');
        p.textContent = "Você não digitou nada..";
        section.appendChild(p);
        return
    }

    let resultado = false
    let nome = ""
    let descricao = ""
    let tags = ""

    // Itera sobre cada atleta no array de atletas
    atletas.forEach(atleta => {
        nome = atleta.nome.toLowerCase()
        descricao = atleta.descricao.toLowerCase()
        tags = atleta.tags.toLowerCase()
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultado = true
            // Cria um novo div para cada atleta
            let div = document.createElement('div');
            div.classList.add('item-resultado');
    
            // Cria um elemento h2 para o nome do atleta
            let h2 = document.createElement('h2');
            let aH2 = document.createElement('a');
            aH2.textContent = `${atleta.nome}`; // Define o texto do link como o nome do atleta
            h2.appendChild(aH2);
            div.appendChild(h2);
    
            // Cria um parágrafo para a descrição do atleta
            let p = document.createElement('p');
            p.textContent = `${atleta.descricao}`;
            div.appendChild(p);
    
            // Cria um link para mais informações sobre o atleta
            let a = document.createElement('a');
            a.href = `${atleta.link}`;
            a.target = '_blank'; // Abre o link em uma nova aba
            a.textContent = 'Mais informações';
            div.appendChild(a);
    
            // Adiciona o div criado à seção de resultados
            section.appendChild(div);
        }
        
    });

    if(!resultado){
        section.innerHTML = ""
        let p = document.createElement('p');
        p.textContent = "Não foi encontrado";
        section.appendChild(p);
    }
}