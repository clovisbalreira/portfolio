export function mouseEnterLeaveCalendario() {
  let divCampeonatos = document.querySelectorAll('[class^="dia-"]');
  divCampeonatos.forEach(campeonato => {
    let div = campeonato.querySelector('.conta');
    if (div) {
      campeonato.addEventListener('mouseenter', () => {
        div.classList.add('flex');
      });

      campeonato.addEventListener('mouseleave', () => {
        div.classList.remove('flex');
      });
    }
  });
}