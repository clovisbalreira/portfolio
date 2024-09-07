function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    
    section.innerHTML = ''

    let campoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase()

    if(campoPesquisa == ""){
        erro(section, "Você não digitou nada..")
        return
    }

    let resultado = false
    let nome = ""
    let descricao = ""
    estados.forEach(estado => {
        nome = estado.nome.toLowerCase()
        descricao = estado.descricao.toLowerCase()
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultado = true
            let div = document.createElement('div');
            div.classList.add('item-resultado');
            div.style.backgroundImage = adicionarGradiente(estado.cores);
    
            let h2 = document.createElement('h2');
            h2.textContent = `${estado.nome}`; 
            div.appendChild(h2);
    
            let p = document.createElement('p');
            p.textContent = `${estado.descricao}`;
            div.appendChild(p);
    
            let button = document.createElement('button');
            button.textContent = 'Mais informações';
            button.classList.add("mais-informacoes")
            div.appendChild(button);
    
            section.appendChild(div);
        }
    });
    abrirPopup()

    if(!resultado){
        erro(section, "Não foi encontrado")
    }
}

function erro(section, texto){
    section.innerHTML = ""
    let p = document.createElement('p');
    p.classList.add('erro')
    p.textContent = texto;
    section.appendChild(p);
}

function abrirPopup(){
    const btnMaisInfo = document.querySelectorAll('.mais-informacoes');
    const popup = document.getElementById('popup');
    
    btnMaisInfo.forEach( clicado => {
        clicado.addEventListener('click', () => {
            popup.style.display = 'flex';
            dadosPopUp(clicado.parentNode.querySelector('h2').textContent)
            return
        });
    })
    
}

function fecharPopup(){
    const popup = document.getElementById('popup');
    const btnFechar = document.querySelector('.fechar');
    btnFechar.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

function adicionarGradiente(cores){
    let divisao = 100 / cores.length
    let nomeCores = ''
    cores.forEach((cor, indice) => {
        nomeCores += `${cor}`
        if(indice != cores.length - 1){
            nomeCores += ` ${parseInt(divisao)}%, `
        }
    })

    return `linear-gradient(100deg, ${nomeCores})`
}

function dadosPopUp(estado){
    const estadosFiltrados = filtrarPorNomeOuSigla(estados, estado);
    let popUp = document.getElementById('popup')
    popUp.innerHTML = ''
    popUp.style.backgroundImage = adicionarGradiente(estadosFiltrados[0].cores);
    let div = document.createElement('div')
    div.classList.add('popup-content')
    let h2 = document.createElement('h2')
    h2.textContent = `${estadosFiltrados[0].nome} - ${estadosFiltrados[0].sigla}`
    div.appendChild(h2)
    div.classList.add('popup-content')
    let p = document.createElement('p')
    p.textContent = `${estadosFiltrados[0].descricao}`
    div.appendChild(p)
    let pCapital = document.createElement('p')
    pCapital.innerHTML = `<strong>Capital : </strong> ${estadosFiltrados[0].capital}`
    div.appendChild(pCapital)
    
    div.appendChild(criarTabela('Simbolos', estadosFiltrados[0].simbolos))
    div.appendChild(criarTabela('Pratos Tipicos', estadosFiltrados[0].pratosTipicos))
    div.appendChild(criarTabela('Pontos Turisticos', estadosFiltrados[0].pontosTuristicos))
    let button = document.createElement('button')
    button.classList.add('fechar')
    button.innerText = 'Fechar'
    div.appendChild(button)
    popUp.appendChild(div)
    fecharPopup()   
}

function filtrarPorNomeOuSigla(estados, termo) {
    return estados.filter(estado => {
      return estado.nome.toLowerCase().includes(termo.toLowerCase()) ||
             estado.sigla.toLowerCase() === termo.toLowerCase();
    });
  }

  function criarTabela(titulo, dados){
    let table = document.createElement('table')
    let caption = document.createElement('caption')
    caption.textContent = titulo
    table.appendChild(caption)
    let tHead = document.createElement('thead')
    let trHead = document.createElement('tr')
    let thNome = document.createElement('th')
    thNome.textContent = "Nome"
    trHead.appendChild(thNome)
    let thDescricao = document.createElement('th')
    thDescricao.textContent = "Descrição"
    trHead.appendChild(thDescricao)
    if(dados[0].tipo != undefined){
        let thTipo = document.createElement('th')
        thTipo.textContent = "Tipo"
        trHead.appendChild(thTipo)
    }
    tHead.appendChild(trHead)
    table.appendChild(tHead)
    let tBody = document.createElement('tBody')
    dados.forEach(dado => {
        let trBody = document.createElement('tr')
        let tdNome = document.createElement('td')
        tdNome.textContent = dado.nome
        trBody.appendChild(tdNome)
        let tdDescricao = document.createElement('td')
        tdDescricao.textContent = dado.descricao
        trBody.appendChild(tdDescricao)
        let tdTipo = document.createElement('td')
        tdTipo.textContent = dado.tipo
        trBody.appendChild(tdTipo)
        tBody.appendChild(trBody)
    })
    
    table.appendChild(tBody)
    return table
  }