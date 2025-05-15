function tooglePassword(){
    document.querySelectorAll('.eye').forEach( (eye) =>  eye.classList.toggle('hide')       
    )
    const type = senha.getAttribute('type') == 'password' ? 'text' : 'password'
    senha.setAttribute('type', type)
    /* if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
    }else{
        senha.setAttribute('type', 'password')
    } */
}