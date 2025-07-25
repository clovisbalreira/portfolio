export function legendas(){
    let section = document.getElementById('legendas')
    section.innerHTML = '' 
    let regioes = [
        { nome: 'Data F.I.F.A.', cor: 'blue'},
        { nome: 'Mundial', cor: 'green'},
        { nome: 'Continental', cor: 'red'},
        { nome: 'Nacional', cor: 'yellow'},
        { nome: 'Regional', cor: 'orange'},
        { nome: 'Estadual', cor: 'purple'},
    ]

    regioes.forEach( (regiao, index) => {
        let div = document.createElement('div')
        let divRegiao = document.createElement('div')
        divRegiao.style.backgroundColor = regiao.cor
        div.appendChild(divRegiao)
        let p = document.createElement('p')
        p.textContent = regiao.nome
        div.appendChild(p)
        section.appendChild(div)
    })
}