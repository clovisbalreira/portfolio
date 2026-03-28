import { usuarios } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = `../../img/${imagemPerfil}`;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        usuarios.forEach( usuario => {
            if(usuario.nome == nomePerfil){
                mostrarCarousel(container, usuario)
            }
        })
    }
});

function mostrarCarousel(container, usuario){
    usuario.categories.forEach(category => {
        const carousel = createCarousel(category);
        container.appendChild(carousel);
    })
}