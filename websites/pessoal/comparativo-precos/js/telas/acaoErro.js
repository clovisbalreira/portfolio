export function acaoErro(texto, id){
    let p = document.getElementById(id)
    p.textContent = texto
    p.classList.add('erro');
    p.classList.add('mostrar');
    p.style.display = 'block' 
    setTimeout(() => {
        p.classList.remove('erro');
        p.classList.remove('mostrar');
        p.style.display = 'none' 
    }, 5000);       
}
