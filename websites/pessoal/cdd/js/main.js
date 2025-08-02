import { iniciarFatura } from "./iniciarFatura.js"
import { inicioMensal } from "./inicioMensal.js"
import { inicioEssencial } from "./inicioEssencial.js"

let urlAtual = window.location.href;
if(urlAtual.includes('index')){
    iniciarFatura()
}else if(urlAtual.includes('mensal')){
    inicioMensal()
}else if(urlAtual.includes('essencial')){
    inicioEssencial()
}