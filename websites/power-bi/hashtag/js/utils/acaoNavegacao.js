import { projetos } from "../mvc/controll/projetos.js";
import { criarDashbord } from "../mvc/view/criarDashbord.js"

export function acaoNavegacao() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            removerClasse(buttons)
            button.classList.add('ativo');
            criarDashbord(projetos[index]);
        });
    });
}

function removerClasse(buttons){
    buttons.forEach(btn => {
        btn.classList.remove('ativo');
    });
}