export function scroll(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}