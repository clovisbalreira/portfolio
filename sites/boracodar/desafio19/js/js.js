let sexo = parseInt(Math.random() * 2)
let numeroSorteio = parseInt(Math.random() * 10)
let estrela = parseInt(Math.random() * 5)
let minutos = parseInt(Math.random() * 10)
let metros = parseInt(minutos * 25)
let nomeMasculino = ['Lucas','Pedro','Gabriel','João','Mateus','Guilherme','Leonardo','Rafael','Daniel','André']
let nomeFeminino = ['Maria','Ana','Sofia','Isabella','Laura','Manuela','Julia','Beatriz','Luiza','Valentina']
let carros = ['Ford Mustang','Chevrolet Camaro','BMW M3','Mercedes-Benz S-Class','Audi A4','Toyota Corolla','Honda Civic','Volkswagen Golf','Tesla Model S','Porsche 911']
         
function placa(){
    let placa = ''
    for(let i = 0; i <7; i ++){
        let numero
        let numeroPlaca
        if(i < 3){
            numero = parseInt(Math.random() * 24)
            numeroPlaca = letras(numero)
        }else if(i == 4){
            numero = parseInt(Math.random() * 34)
            numeroPlaca = letrasNumeros(numero)
        }else{
            numero = parseInt(Math.random() * 10)
            numeroPlaca = numero
        }
        placa += numeroPlaca
    }
    return placa
}

function letras(numero){
    let numeroPlaca
    switch(numero){
        case 0: 
            numeroPlaca = 'A' 
            break;
        case 1: 
            numeroPlaca = 'B' 
            break;            
        case 2: 
            numeroPlaca = 'C' 
            break;            
        case 3: 
            numeroPlaca = 'D' 
            break;            
        case 4: 
            numeroPlaca = 'E' 
            break;            
        case 5: 
            numeroPlaca = 'F' 
            break;            
        case 6: 
            numeroPlaca = 'G' 
            break;            
        case 7: 
            numeroPlaca = 'H' 
            break;            
        case 8: 
            numeroPlaca = 'I' 
            break;            
        case 9: 
            numeroPlaca = 'J' 
            break;            
        case 10: 
            numeroPlaca = 'L' 
            break;            
        case 11: 
            numeroPlaca = 'K' 
            break;            
        case 12: 
            numeroPlaca = 'M' 
            break;            
        case 13: 
            numeroPlaca = 'N' 
            break;            
        case 14: 
            numeroPlaca = 'O' 
            break;            
        case 15: 
            numeroPlaca = 'P' 
            break;            
        case 16: 
            numeroPlaca = 'Q' 
            break;            
        case 17: 
            numeroPlaca = 'R' 
            break;            
        case 18: 
            numeroPlaca = 'S' 
            break;            
        case 19: 
            numeroPlaca = 'T' 
            break;            
        case 20: 
            numeroPlaca = 'U' 
            break;            
        case 21: 
            numeroPlaca = 'V' 
            break;            
        case 22: 
            numeroPlaca = 'Y' 
            break;            
        case 23: 
            numeroPlaca = 'X' 
            break;            
        case 24: 
            numeroPlaca = 'Z' 
            break;
        }
    return numeroPlaca
}

function letrasNumeros(numero){
    let numeroPlaca
    numeroPlaca = numero
    switch(numero){
        case 10: 
            numeroPlaca = 'A' 
            break;
        case 11: 
            numeroPlaca = 'B' 
            break;            
        case 12: 
            numeroPlaca = 'C' 
            break;            
        case 13: 
            numeroPlaca = 'D' 
            break;            
        case 14: 
            numeroPlaca = 'E' 
            break;            
        case 15: 
            numeroPlaca = 'F' 
            break;            
        case 16: 
            numeroPlaca = 'G' 
            break;            
        case 17: 
            numeroPlaca = 'H' 
            break;            
        case 18: 
            numeroPlaca = 'I' 
            break;            
        case 19: 
            numeroPlaca = 'J' 
            break;            
        case 20: 
            numeroPlaca = 'L' 
            break;            
        case 21: 
            numeroPlaca = 'K' 
            break;            
        case 22: 
            numeroPlaca = 'M' 
            break;            
        case 23: 
            numeroPlaca = 'N' 
            break;            
        case 24: 
            numeroPlaca = 'O' 
            break;            
        case 25: 
            numeroPlaca = 'P' 
            break;            
        case 26: 
            numeroPlaca = 'Q' 
            break;            
        case 27: 
            numeroPlaca = 'R' 
            break;            
        case 28: 
            numeroPlaca = 'S' 
            break;            
        case 29: 
            numeroPlaca = 'T' 
            break;            
        case 30: 
            numeroPlaca = 'U' 
            break;            
        case 31: 
            numeroPlaca = 'V' 
            break;            
        case 32: 
            numeroPlaca = 'Y' 
            break;            
        case 33: 
            numeroPlaca = 'X' 
            break;            
        case 34: 
            numeroPlaca = 'Z' 
            break;
        }
    return numeroPlaca
}

function motorista(){
    let nomeMotorista = ''
    let imagemMotorista = ''
    if(sexo == 1){
        nomeMotorista = nomeMasculino[numeroSorteio]
        imagemMotorista = `https://randomuser.me/api/portraits/men/${numeroSorteio}.jpg` 
    }else{
        nomeMotorista = nomeFeminino[numeroSorteio]
        imagemMotorista = `https://randomuser.me/api/portraits/women/${numeroSorteio}.jpg` 
    }
    document.querySelector('h1 span').innerHTML = nomeMotorista
    document.querySelector('p span:nth-child(1)').innerHTML = minutos
    document.querySelector('p span:nth-child(2)').innerHTML = metros
    document.querySelector('.driver-name').innerHTML = nomeMotorista
    document.querySelector('.driver-avatar img').setAttribute('src',imagemMotorista)
    document.querySelector('strong').innerHTML = parseInt(estrela).toFixed(1)
    document.querySelector('.car-plate').innerHTML = placa()
    document.querySelector('.car-model').innerHTML = carros[parseInt(numeroSorteio)]
}
motorista()
