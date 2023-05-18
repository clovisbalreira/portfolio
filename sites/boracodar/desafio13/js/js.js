IMask(document.querySelector('#cc-number'),  {
    mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#cc-validity'),  {
    mask: 'MM{/}YY',
    blocks: {
        MM: {
            mask: IMask.MaskedRange,
            from:1,
            to:12
        },
        YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),
            to: String(new Date().getFullYear() + 10).slice(2)
        }
    }
})

IMask(document.querySelector('#cc-cvv'),  {
    mask: '000'
})

inputNumero = document.getElementById('cc-number')
inputNumero.addEventListener('input', () => {
    cartaoNumero = document.getElementById('cartaoNumero')
    numero = ['*','*','*','*',' ','*','*','*','*',' ','*','*','*','*',' ','*','*','*','*']
    for(var i = 0; i < inputNumero.value.length; i++){
        numero[i] = inputNumero.value[i]
    }
    cartaoNumero.innerHTML = ''
    for(var i = 0; i < numero.length; i++){
        cartaoNumero.innerHTML += numero[i]
    }
})

inputNome = document.getElementById('cc-holder')
inputNome.addEventListener('input', () => {
    cartaoNome = document.getElementById('cartaoNome')
    if(inputNome.value.length < 26){
        cartaoNome.innerHTML = inputNome.value.toUpperCase()
    }
})

inputData = document.getElementById('cc-validity')
inputData.addEventListener('input', () => {
    cartaoData = document.getElementById('cartaoValidade')
    data = ['*','*','/','*','*']
    for(var i = 0; i < inputData.value.length; i++){
        data[i] = inputData.value[i]
    }
    cartaoData.innerHTML = ''
    for(var i = 0; i < data.length; i++){
        cartaoData.innerHTML += data[i]
    }
})

inputCvv = document.getElementById('cc-cvv')
inputCvv.addEventListener('input', () => {
    cartaoCvv = document.getElementById('cartaoCvv')
    cvv = ['*','*','*']
    for(var i = 0; i < inputCvv.value.length; i++){
        cvv[i] = inputCvv.value[i]
    }
    cartaoCvv.innerHTML = ''
    for(var i = 0; i < cvv.length; i++){
        cartaoCvv.innerHTML += cvv[i]
    }
})

select = document.getElementById('cc-bamdeira')
select.addEventListener('click', () => {
    img = document.getElementById('cartaoBandeira')
    switch(select.value){
        case 'visa' :
            img.setAttribute('src', './assets/visa.svg')
            break;
        case 'master' :
            img.setAttribute('src', './assets/master.svg')
            break;
        case 'elo' :
            img.setAttribute('src', './assets/elo.svg')
            break;
        default:
            img.setAttribute('src', './assets/visa.svg')
            break;
    }  
})