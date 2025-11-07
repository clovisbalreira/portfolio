import { modal } from "./modal.js"

export function selecionar(id, dados, escolhaUsuario){
  let trs = document.querySelectorAll(`#${id} table tbody tr`)
  trs.forEach( tr => {
    tr.addEventListener('click', (e) => {
      id == 'partidos' ? modal(id, e.currentTarget.dataset.partido, dados, escolhaUsuario) : modal(id, e.currentTarget.dataset.deputado, dados, escolhaUsuario)
    })
  })
}