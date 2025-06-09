let nomes = [
    {nome: 'Alex', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Amanda', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Beatriz', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Camila', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Carlos', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Daniel', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Diana', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Eduardo', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Erika', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Felipe', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Fernanda', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Gabriel', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Helena', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Hugo', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Isabela', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Ivan', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'João', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Juliana', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Karina', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Kevin', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Letícia', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Lucas', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Marcela', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Marcelo', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Natália', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Nelson', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Olivia', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Otávio', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Patrícia', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Paulo', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Quélia', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Rafael', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Raquel', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Sabrina', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Samuel', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Tainá', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Thiago', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Ubaldo', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Ursula', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Valentina', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Vitor', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Wagner', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Wanessa', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Xavier', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Ximena', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Yasmin', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Yuri', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Zacarias', sexo: 'men', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/men/${parseInt(Math.random() * 50)}.jpg`},
    {nome: 'Zara', sexo: 'women', telefone: telefone(), imagem: `https://randomuser.me/api/portraits/women/${parseInt(Math.random() * 50)}.jpg`}
]

let cores = ['red','blue','yellow','green','orange','purple','pink','brown','gray','cyan','magenta','silver','violet']

let listenerAdicionado = true

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
    let agenda = document.querySelector('section')
    agenda.innerHTML = ''
    nomes.forEach(nome => {
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
        img.setAttribute('src', nome.imagem)
        divPerson.appendChild(img)
        divContact.classList.add('contact')
        h3.innerHTML = nome.nome
        divContact.appendChild(h3)    
        p.innerHTML = nome.telefone
        divContact.appendChild(p)    
        divPerson.appendChild(divContact)    
        li.appendChild(divPerson)
        ul.appendChild(li)
       if(letra == nome.nome[0]){
           divLetter.style.visibility = 'hidden'
        }    
        divWrapper.appendChild(divLetter)
        divWrapper.appendChild(ul)
        let div = document.createElement('div')
        div.classList.add('icones')
        li = document.createElement('li')
        li.innerHTML = '<ion-icon class="editar" name="pencil"></ion-icon>'
        div.appendChild(li)
        li = document.createElement('li')
        li.innerHTML = '<ion-icon class="deletar" name="trash"></ion-icon>'
        div.appendChild(li)
        divWrapper.appendChild(div)
        agenda.appendChild(divWrapper)
        numero++
        if(numero == 13){
            numero = 0
        }
        letra = nome.nome[0]
    });
    deletar(nomes)
    document.querySelector('.incluir').addEventListener('click', incluir(nomes))
    const botoesEditar = document.querySelectorAll('.editar')

    for (let icone of botoesEditar) {
        icone.addEventListener('click', editar(nomes))
    }
}

lista(nomes)

const filterElement = document.getElementById('filter')
const cards = document.querySelectorAll('.person')
filterElement.addEventListener('input', filterCards)

function tituloModel(titulo){
    let h2 = document.querySelector('.modal-content h2')
    h2.textContent = ''
    h2.textContent = titulo
}

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

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}

function modalId(){
    const botaoAbrir = document.getElementById('abrir-modal')
    const modal = document.getElementById('modal')
    const botaoFechar = document.querySelector('.fechar')
    
    botaoAbrir.addEventListener('click', () => {
        modal.style.display = 'block'
    })
    
    botaoFechar.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    return [modal, document.getElementById('form-contato')]
}

function deletar(nomes){
    const deletar = document.querySelectorAll('.deletar')
    for(let icone of deletar){
        icone.addEventListener('click', () => {
            let array = ''
            const contato = icone.closest('.list-wrapper').querySelector('ul li div div h3').textContent
            array = nomes.filter( nome => {
                return nome.nome != contato
            })
            lista(array)
        })
    }
}

function incluir(nomes){
    tituloModel('Novo Contato')
    const modal = modalId()
    if (!listenerAdicionado) {
        modal[1].addEventListener('submit', (e) => {
        e.preventDefault()
        const nome = document.getElementById('nome').value
        const telefone = document.getElementById('telefone').value
        const sexo = document.getElementById('sexo').value
        let array = nomes
        
        array.push({ nome : capitalizar(nome), sexo : sexo, telefone: telefone, imagem: `https://randomuser.me/api/portraits/${sexo}/${parseInt(Math.random() * 50)}.jpg` })
        lista(array.sort((a,b) => a.nome.localeCompare(b.nome)))
        modal[0].style.display = 'none'
        modal[1].reset()
        })

        listenerAdicionado = true;
    }

    modal[0].style.display = 'block';
}

function editar(nomes) {
    const botoesEditar = document.querySelectorAll('.editar');

    for (let icone of botoesEditar) {
        icone.addEventListener('click', () => {
            const nomeElement = icone.closest('.list-wrapper').querySelector('ul li div div h3');
            if (!nomeElement) {
                console.error('Elemento do nome não encontrado.');
                return;
            }
            const nome = nomeElement.textContent;

            const pessoa = nomes.find(p => p.nome === nome);
            const indice = nomes.findIndex(p => p.nome === nome);

            if (!pessoa) {
                alert('Pessoa não encontrada.');
                return;
            }

            const modalElements = modalId(); 
            if (!modalElements || modalElements.length < 2) {
                console.error('Modal ou formulário do modal não encontrado.');
                return;
            }
            const modalContainer = modalElements[0];
            const oldForm = modalElements[1];

            tituloModel('Editar Contato');
            modalContainer.style.display = 'block';

            const novoForm = oldForm.cloneNode(true);
            oldForm.replaceWith(novoForm);

            const nomeInputModal = novoForm.querySelector('#nome'); 

            const telefoneInputModal = novoForm.querySelector('#telefone'); 
            
            const sexoSelectModal = novoForm.querySelector('#sexo');

            if (nomeInputModal) nomeInputModal.value = pessoa.nome;
            if (telefoneInputModal) telefoneInputModal.value = pessoa.telefone;
            if (sexoSelectModal) {
                sexoSelectModal.value = pessoa.sexo; 
            }

            novoForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const nomeAtualizado = nomeInputModal ? nomeInputModal.value : '';
                const sexoAtualizado = sexoSelectModal ? sexoSelectModal.value : '';
                const telefoneAtualizado = telefoneInputModal ? telefoneInputModal.value : '';

                nomes[indice] = {
                    ...nomes[indice],
                    nome: capitalizar(nomeAtualizado),
                    sexo: sexoAtualizado,
                    telefone: telefoneAtualizado,
                    imagem: `https://randomuser.me/api/portraits/${sexoAtualizado}/${parseInt(Math.random() * 50)}.jpg`
                };

                lista(nomes); 
                modalContainer.style.display = 'none';
            });
        });
    }
}