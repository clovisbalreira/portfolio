import { skills } from "../controll/skills.js";
import { criarElemento } from "../../utils/criarElemento.js";

export function mostrarSkills(){
    let divSkillContainer = document.getElementById('skill-container')
    skills.forEach( skill => {
        let divItem = criarElemento('div', 'item')
        let divInfo = criarElemento('div', 'info')
        let spanNome = criarElemento('span', 'nome')
        spanNome.innerHTML = skill.skill == 'hardskill' ? '<i class="fa-solid fa-code"></i>' : '<i class="fa-solid fa-person-rays">'
        spanNome.innerHTML += skill.tecnologia
        divInfo.appendChild(spanNome)
        let spanPorcent = criarElemento('span', 'porcent')
        spanPorcent.textContent = skill.porcento
        divInfo.appendChild(spanPorcent)
        divItem.appendChild(divInfo)
        let divBarra = criarElemento('div', 'barra')
        let divProgresso = criarElemento('div', 'progresso')
        divProgresso.style.width = `${skill.porcento}%`
        divBarra.appendChild(divProgresso)
        divItem.appendChild(divBarra)
        divSkillContainer.appendChild(divItem)
    })
}