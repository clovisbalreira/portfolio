import { apagarTabela } from "./apagarTabela.js";

export function mouseEnterLeaveCalendario() {
  let divCampeonatos = document.querySelectorAll('[class^="dia-"]');

  divCampeonatos.forEach(campeonato => {
    let div = campeonato.querySelector('.campeonato');
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

export function mouseEnterTabela(){
  let calendario = document.getElementById('calendario')
  calendario.addEventListener('mouseenter', () => {
    apagarTabela()
  })
}

