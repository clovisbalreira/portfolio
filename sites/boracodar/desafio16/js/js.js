let nomes = [
    {nome: 'Alex', sexo: 'men'},
    {nome: 'Amanda', sexo: 'women'},
    {nome: 'Beatriz', sexo: 'women'},
    {nome: 'Camila', sexo: 'women'},
    {nome: 'Carlos', sexo: 'men'},
    {nome: 'Daniel', sexo: 'men'},
    {nome: 'Diana', sexo: 'women'},
    {nome: 'Eduardo', sexo: 'men'},
    {nome: 'Erika', sexo: 'women'},
    {nome: 'Felipe', sexo: 'men'},
    {nome: 'Fernanda', sexo: 'women'},
    {nome: 'Gabriel', sexo: 'men'},
    {nome: 'Helena', sexo: 'women'},
    {nome: 'Hugo', sexo: 'men'},
    {nome: 'Isabela', sexo: 'women'},
    {nome: 'Ivan', sexo: 'men'},
    {nome: 'João', sexo: 'men'},
    {nome: 'Juliana', sexo: 'women'},
    {nome: 'Karina', sexo: 'women'},
    {nome: 'Kevin', sexo: 'men'},
    {nome: 'Letícia', sexo: 'women'},
    {nome: 'Lucas', sexo: 'men'},
    {nome: 'Marcela', sexo: 'women'},
    {nome: 'Marcelo', sexo: 'men'},
    {nome: 'Natália', sexo: 'women'},
    {nome: 'Nelson', sexo: 'men'},
    {nome: 'Olivia', sexo: 'women'},
    {nome: 'Otávio', sexo: 'men'},
    {nome: 'Patrícia', sexo: 'women'},
    {nome: 'Paulo', sexo: 'men'},
    {nome: 'Quélia', sexo: 'women'},
    {nome: 'Rafael', sexo: 'men'},
    {nome: 'Raquel', sexo: 'women'},
    {nome: 'Sabrina', sexo: 'women'},
    {nome: 'Samuel', sexo: 'men'},
    {nome: 'Tainá', sexo: 'women'},
    {nome: 'Thiago', sexo: 'men'},
    {nome: 'Ubaldo', sexo: 'men'},
    {nome: 'Ursula', sexo: 'women'},
    {nome: 'Valentina', sexo: 'women'},
    {nome: 'Vitor', sexo: 'men'},
    {nome: 'Wagner', sexo: 'men'},
    {nome: 'Wanessa', sexo: 'women'},
    {nome: 'Xavier', sexo: 'men'},
    {nome: 'Ximena', sexo: 'women'},
    {nome: 'Yasmin', sexo: 'women'},
    {nome: 'Yuri', sexo: 'men'},
    {nome: 'Zacarias', sexo: 'men'},
    {nome: 'Zara', sexo: 'women'}
]

let cores = ['red','blue','yellow','green','orange','purple','pink','brown','gray','cyan','magenta','silver','violet']

function telefone(){
    let numero = ''
    for(let i = 0; i < 11; i++){
        let digito = parseInt(Math.random() * 10)
        if(i == 0){
            numero += `(${digito}`
        }else if(i == 1){
            numero += `${digito}) `
        }else if(i == 7){
            numero += `-${digito}`
        }else{
            numero += digito
        }
    }
    return numero
}

function lista(nomes){
    let letra = ''
    let numero = 0
    nomes.forEach(nome => {
        let agenda = document.querySelector('section')
        let divWrapper = document.createElement('div')
        let divLetter = document.createElement('div')
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        let divPerson = document.createElement('div')
        let img = document.createElement('img')
        let divContact = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')    
        divWrapper.classList.add('list-wrapper')
        divWrapper.classList.add('flex')
        divLetter.classList.add('letter')
        divLetter.style.backgroundColor = cores[numero]
        divLetter.innerHTML = nome.nome[0]
        divPerson.classList.add('person')
        divPerson.classList.add('flex')
        img.setAttribute('src',`https://randomuser.me/api/portraits/${nome.sexo}/${parseInt(Math.random() * 50)}.jpg`)
        divPerson.appendChild(img)
        divContact.classList.add('contact')
        h3.innerHTML = nome.nome
        divContact.appendChild(h3)    
        p.innerHTML = telefone()
        divContact.appendChild(p)    
        divPerson.appendChild(divContact)    
        li.appendChild(divPerson)
        ul.appendChild(li)
        if(letra == nome.nome[0]){
            divLetter.style.visibility = 'hidden'
        }    
        divWrapper.appendChild(divLetter)
        divWrapper.appendChild(ul)
        agenda.appendChild(divWrapper)
        numero++
        if(numero == 13){
            numero = 0
        }
        letra = nome.nome[0]
    });
}

lista(nomes)

const filterElement = document.getElementById('filter')
const cards = document.querySelectorAll('.person')
filterElement.addEventListener('input', filterCards)
function filterCards(){
    if(filterElement.value != ''){
        for(let card of cards){
            let first = card.parentElement.parentElement.parentElement.querySelector('.letter')
            first.style.display = 'none'
            let title = card.querySelector('.contact h3')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)){
                card.style.display = 'none'
            }else{
                card.style.display = 'block'
            }
        }
    }else{
        for(let card of cards){
            let first = card.parentElement.parentElement.parentElement.querySelector('.letter')
            first.style.display = 'block'
            card.style.display = 'block'
        }
    }
}