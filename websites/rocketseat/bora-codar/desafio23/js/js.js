let currentStep = 0
const formSteps = document.querySelectorAll('.form-step')
const form = document.querySelector('form')

form.addEventListener('click', (e) => {
    if (!e.target.matches('[data-action]')) {
        return
    }
    const actions = {
        next() {
            if (!invalidInputs()) {
                return
            }
            currentStep++
        },
        prev() {
            currentStep--
        }
    }
    const action = e.target.dataset.action
    actions[action]()
    upDateActiveStep()
    upDateProgressStep()
})

const modal = document.querySelector('dialog')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    modal.showModal()
    data = new FormData(form)
    for(let [key, value] of data){
        const div = document.querySelector('div')
        p = document.createElement('p')
        p.innerHTML = value == '' ? '--------------------------' : value
        span = document.createElement('span')
        span.innerHTML = `${key}:`
        p.appendChild(span)
        div.appendChild(p)
        modal.append(div)
    }
})

const telefone = document.querySelector('#telefone')
telefone.addEventListener('input', () => {
    if(telefone.value.length <= 14){
        numero = telefone.value
    }
    apagar = true
    if((numero.includes('(') && numero.length == 1) || (numero.includes(')') && numero.length == 4) || (numero.includes('-') && numero.length == 10)){
        numero = telefone.value.substr(0,telefone.value.length - 1)
        apagar = false
    }
    if(telefone.value.length == 1 && apagar){
        numero = '(' + numero 
    }else if(telefone.value.length == 3 && apagar){
        numero = numero + ')'
    }else if(telefone.value.length == 9 && apagar){
        numero = numero + '-'
    }
    telefone.value = numero
})

const buttonClose = document.querySelector('dialog button')
buttonClose.addEventListener('click', () => {
    modal.close()
})


function upDateActiveStep() {
    formSteps.forEach(step => step.classList.remove('active'))
    formSteps[currentStep].classList.add('active')
}

const progressStep = document.querySelectorAll('.step-progress [data-step]')
function upDateProgressStep() {
    progressStep.forEach((step, idx) => {
        step.classList.remove('active')
        step.classList.remove('done')
        if (idx < currentStep + 1) {
            step.classList.add('active')
        }
        if (idx < currentStep) {
            step.classList.add('done')
        }
    })
}

function invalidInputs() {
    const currentFormStep = formSteps[currentStep]
    const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')]
    return formFields.every((input) => input.reportValidity())
}

formSteps.forEach(formStep => {
    function addHide() {
        formStep.classList.add('hide')
    }
    formStep.addEventListener('animationend', () => {
        addHide()
        formSteps[currentStep].classList.remove('hide')
    })
})
