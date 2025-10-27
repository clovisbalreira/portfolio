import { mostrarSkills } from "./mvc/view/skill.js"
import { mostrarCursos } from "./mvc/view/cursos.js"
import { mostrarProjetos } from "./mvc/view/projetos.js"
import { tema } from "./utils/tema.js"

inicio()

function inicio(){
    mostrarSkills()
    mostrarCursos()
    mostrarProjetos()
    tema()
}