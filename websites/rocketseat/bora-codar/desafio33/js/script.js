const input = document.querySelector('input')
const button = document.querySelector('button')
const label = document.querySelector('label')
const nameElement = document.querySelector('#name')
const photoElement = document.querySelector('#photo')
const errorElement = document.querySelector('#error')
const sucessElement = document.querySelector('.sucess img')

button.addEventListener('click', async () =>{
  const username = input.value
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  const name = data.name
  const photo = data.avatar_url 
  console.log(data)
  /* nameElement.style.display = 'block'
  photoElement.style.display = 'block' */
  if(data !== undefined && data.message === 'Not Found' && input.value == ''){
    gerarTicket('block', 'Usuário invalído. Verifique e tente novamente.', 'Digite seu usuário do Github', 'none', 'Seu nome aqui', './assets/avatar.png')
  }else if(data.documentation_url === 'https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting' ){
    gerarTicket('block', 'Limite de consultas exedidas.', 'Digite seu usuário do Github', 'none', 'Seu nome aqui', './assets/avatar.png')
  }else{
    gerarTicket('none', '', 'Ticket gerado com sucesso', 'block', name, photo)
  }
})

function gerarTicket(errorDisplay, erroText, labelText, sucess, name, photo){
  errorElement.style.display = errorDisplay
  errorElement.innerHTML = erroText
  label.innerHTML = labelText
  sucessElement.style.display = sucess
  nameElement.innerHTML = name
  photoElement.setAttribute('src', photo)
}
