let participantes = [
    {
        nome: 'João Pedro Marques Silva',
        email: 'joaopedro@gmail.com',
        dataInscricao: new Date(2024, 2, 23, 10, 15),
        dataCheckIn: new Date(2024, 2, 26, 14, 45)
    },
    {
        nome: 'Ana Carolina Fonseca',
        email: 'anacarolina@gmail.com',
        dataInscricao: new Date(2024, 2, 23, 11, 20),
        dataCheckIn: null
    },
    {
        nome: 'Lucas Henrique de Souza',
        email: 'lucashenrique@gmail.com',
        dataInscricao: new Date(2024, 2, 24, 9, 55),
        dataCheckIn: new Date(2024, 2, 27, 10, 22)
    },
    {
        nome: 'Patrícia Almeida Prado',
        email: 'patriciaprado@gmail.com',
        dataInscricao: new Date(2024, 2, 24, 14, 37),
        dataCheckIn: new Date(2024, 2, 27, 18, 47)
    },
    {
        nome: 'Eduardo Rocha Lima',
        email: 'eduardorocha@gmail.com',
        dataInscricao: new Date(2024, 2, 25, 8, 30),
        dataCheckIn: new Date(2024, 2, 28, 11, 15)
    },
    {
        nome: 'Sofia Martins Pereira',
        email: 'sofiamartins@gmail.com',
        dataInscricao: new Date(2024, 2, 25, 12, 50),
        dataCheckIn: new Date(2024, 2, 28, 15, 50)
    },
    {
        nome: 'Carlos Eduardo Vieira',
        email: 'carloseduardo@gmail.com',
        dataInscricao: new Date(2024, 2, 26, 10, 42),
        dataCheckIn: new Date(2024, 2, 29, 9, 50)
    },
    {
        nome: 'Fernanda Oliveira Machado',
        email: 'fernandamachado@gmail.com',
        dataInscricao: new Date(2024, 2, 26, 13, 20),
        dataCheckIn: new Date(2024, 2, 29, 12, 30)
    },
    {
        nome: 'Rafael Santos Costa',
        email: 'rafaelsantos@gmail.com',
        dataInscricao: new Date(2024, 2, 27, 15, 45),
        dataCheckIn: new Date(2024, 2, 30, 14, 10)
    }
]

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
    if(participante.dataCheckIn == null){
        dataCheckIn = `
            <button
                data-email="${participante.email}"             onclick="fazerCheckIn(event)"
            >
                Confirmar check-in
            </button>
        `
    }
    return `
    <tr>
        <td>
            <strong>
                ${participante.nome}
            </strong>
            <br>
            <small>
                ${participante.email}
            </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participantes) => {
    let output = ''
    // pegar informação do html
    for(let participante of participantes){
        output = output + criarNovoParticipante(participante)
    }
    // substituir informação do HTML
    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
        nome : dadosDoFormulario.get('nome'),
        email : dadosDoFormulario.get('email'),
        dataInscricao : new Date(),
        dataCheckIn: null
    }

    const participanteExiste = participantes.find((p) => p.email == participante.email)
    
    if(participanteExiste){
        alert('Email já cadastrado!')
        return
    }

    participantes = [participante, ...participantes]
    atualizarLista(participantes)
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
    if(!confirm('Tem certeza que deseja fazer o check-in')){
        return
    }
    const participante = participantes.find((p) => p.email == event.target.dataset.email)
    participante.dataCheckIn = new Date()
    atualizarLista(participantes)
}
