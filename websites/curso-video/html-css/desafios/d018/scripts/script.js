const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    //botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
/*

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});*/

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// criar skills
let skills = [
  { skill : 'hardskill', tecnologia: 'HTML5', porcento: 90},
  { skill : 'hardskill', tecnologia: 'CSS3', porcento: 80},
  { skill : 'hardskill', tecnologia: 'JavaScript', porcento: 75},
  { skill : 'hardskill', tecnologia: 'P.H.P.', porcento: 60},
  { skill : 'softskill', tecnologia: 'Comunicação', porcento: 100},
  { skill : 'softskill', tecnologia: 'Trabalha em equipe', porcento: 90},
  { skill : 'softskill', tecnologia: 'Adaptabilidade', porcento: 85},
  { skill : 'softskill', tecnologia: 'Liderança', porcento: 90},
]

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

function criarElemento(tag, classe){
  let elemento = document.createElement(tag)
  elemento.classList.add(classe)
  return elemento
}

//criar formacao
let cursos = [
  { instituicao: 'Curso em Vídeo', nome : 'P.H.P. com M.Y.S.Q.L. - Módulo 00 - Primeiros Passos', dataInicio : new Date('02/03/2022'), dataFim : new Date('03/03/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'P.H.P. com M.Y.S.Q.L. - Módulo 01 - Criando um C.R.U.D.', dataInicio : new Date('02/04/2022'), dataFim : new Date('03/04/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'P.H.P. com M.Y.S.Q.L. - Módulo 02 - Segurança e níveis de acessso', dataInicio : new Date('02/05/2022'), dataFim : new Date('03/05/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 01',  dataInicio : new Date('02/23/2022'), dataFim : new Date('03/23/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 02', dataInicio :  new Date('02/26/2022'), dataFim : new Date('03/26/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 03', dataInicio : new Date('02/27/2022'), dataFim : new Date('03/27/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Javascript', dataInicio : new Date('02/27/2022'), dataFim : new Date('03/29/2022') },   
  { instituicao: 'Curso em Vídeo', nome : 'Java básico - Módulo 00', dataInicio : new Date('02/27/2022'), dataFim : new Date('03/30/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Java P.O.O. - Módulo 00', dataInicio : new Date('02/27/2022'), dataFim : new Date('03/30/2022') },          
  { instituicao: 'Curso em Vídeo', nome : 'WordPress com Gutemberg - modulo 01 - Criação de Site', dataInicio : new Date('03/02/2022'), dataFim : new Date('04/02/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'WordPress com Gutemberg - modulo 02 - Segurança e Performance', dataInicio : new Date('03/03/2022'), dataFim : new Date('04/03/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'WordPress + WooCommerce - modulo 03 - Criação de Loja com WooCommerce', dataInicio : new Date('03/06/2022'), dataFim : new Date('04/06/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'P.H.P. básico', dataInicio : new Date('03/25/2022'), dataFim : new Date('04/25/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'P.H.P. P.O.O.', dataInicio : new Date('03/29/2022'), dataFim : new Date('04/29/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'P.H.P. moderno modulo 01', dataInicio : new Date('03/26/2022'), dataFim : new Date('04/26/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'MYSQL - Modulo 00', dataInicio : new Date('04/02/2022'), dataFim : new Date('05/02/2022') }, 
  { instituicao: 'Curso em Vídeo', nome : 'Modulo 00 - Segurança da Informação - Pilares e principais Riscos', dataInicio : new Date('05/10/2022'), dataFim : new Date('06/10/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Modulo 01 - Segurança da Informação - Redes Sociais, senhas e verificação em duas etapas', dataInicio : new Date('05/10/2022'), dataFim : new Date('06/10/2022') }, 
  { instituicao: 'Curso em Vídeo', nome : 'Desenvolvimento Web 2020 ( HTML5+CSS3 ) Módulo 04',  dataInicio : new Date('07/03/2022'), dataFim : new Date('08/03/2022') },          
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 00 - Fundamentos de Rede', dataInicio : new Date('07/12/2022'), dataFim : new Date('08/12/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Android - Módulo 00 - Primeiros Passos', dataInicio : new Date('07/20/2022'), dataFim : new Date('08/20/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Android - Módulo 01 - Estruturas Básicas', dataInicio : new Date('07/20/2022'), dataFim : new Date('08/20/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Android - Módulo 02 - Interfaces', dataInicio : new Date('07/23/2022'), dataFim : new Date('08/23/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Android - Módulo 03 - Atividades', dataInicio : new Date('07/25/2022'), dataFim : new Date('08/25/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Kotlin - Módulo 00 - Primeiros Passos', dataInicio : new Date('07/25/2022'), dataFim : new Date('08/25/2022'), },
  { instituicao: 'Curso em Vídeo', nome : 'Kotlin - Módulo 01 - Estruturas Básicas', dataInicio : new Date('07/30/2022'), dataFim : new Date('08/30/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 01 - Cabeamento', dataInicio : new Date('08/03/2022'), dataFim : new Date('09/03/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 02 - TCP/IP e WI-FI', dataInicio : new Date('08/03/2022'), dataFim : new Date('09/03/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 03 - Endereçamento IP', dataInicio : new Date('08/07/2022'), dataFim : new Date('09/07/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 04 - Equipamentos de Rede', dataInicio : new Date('08/08/2022'), dataFim : new Date('09/08/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 05 - Protocolos e Modelos OSI', dataInicio : new Date('08/09/2022'), dataFim : new Date('09/09/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Arquitetura de Computadores - Módulo 00', dataInicio : new Date('08/18/2022'), dataFim : new Date('09/18/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'C - Módulo 00 - Primeiros Passos', dataInicio : new Date('08/20/2022'), dataFim : new Date('09/20/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'C - Módulo 01 - Estruturas Básicas', dataInicio : new Date('08/28/2022'), dataFim : new Date('09/28/2022') },
  { instituicao: 'Curso em Vídeo', nome : 'Arquitetura de Computadores - Módulo 01', dataInicio : new Date('10/18/2022'), dataFim : new Date('11/18/2022') }, 
  { instituicao: 'Curso em Vídeo', nome : 'Raspberry Pi - Módulo 00 - Conhecendo o Raspberry Pi', dataInicio : new Date('12/01/2022'), dataFim : new Date('01/01/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Raspberry Pi - Módulo 01 - Programando com Raspberry Pi', dataInicio : new Date('12/02/2022'), dataFim : new Date('01/02/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Raspberry Pi - Módulo 02 - Raspberry Pi Avaçado', dataInicio : new Date('12/03/2022'), dataFim : new Date('01/03/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Raspberry Pi - Módulo 03 - Retro Gaming com Raspberry Pi', dataInicio : new Date('12/08/2022'), dataFim : new Date('01/08/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Linux - Módulo 00 - Primeiros Passos', dataInicio : new Date('01/21/2023'), dataFim : new Date('02/21/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Linux - Módulo 01 - Interface and Terminal', dataInicio : new Date('01/21/2023'), dataFim : new Date('02/21/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Linux - Módulo 02 - Pacotes e gestão de Processos', dataInicio : new Date('01/22/2023'), dataFim : new Date('02/22/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Linux - Módulo 03 - Programação com Linux', dataInicio : new Date('01/23/2023'), dataFim : new Date('02/23/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Linux - Módulo 04 - Terminal Avançado', dataInicio : new Date('01/25/2023'), dataFim : new Date('02/25/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Linux - Módulo 05 - Discos e Raid', dataInicio : new Date('01/26/2023'), dataFim : new Date('02/26/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Eletrônica Básico - Módulo 00 - Fundamentos da Eletrônica', dataInicio : new Date('02/25/2023'), dataFim : new Date('03/25/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Eletrônica Básico - Módulo 01 - Criando Circuito', dataInicio : new Date('02/25/2023'), dataFim : new Date('03/25/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Python - Mundo 01 - Fundamentos', dataInicio : new Date('04/01/2023'), dataFim : new Date('05/01/2023') },       
  { instituicao: 'Curso em Vídeo', nome : 'Python - Mundo 02 - Estrutura de controle', dataInicio : new Date('04/01/2023'), dataFim : new Date('05/01/2023') },          
  { instituicao: 'Curso em Vídeo', nome : 'Python - Mundo 03 - Estrutura compostas', dataInicio : new Date('04/01/2023'), dataFim : new Date('05/01/2023') },   
  { instituicao: 'Curso em Vídeo', nome : 'Arquitetura de Computadores - Módulo 02', dataInicio : new Date('04/16/2023'), dataFim : new Date('05/16/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'S.E.O. - Módulo 01', dataInicio : new Date('05/24/2023'), dataFim : new Date('06/24/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'WordPress - modulo 04 - Adequando Sites e Lojas Virtuais em Wordpress a LGPD', dataInicio : new Date('06/11/2023'), dataFim : new Date('07/11/2023') },  
  { instituicao: 'Curso em Vídeo', nome : 'S.E.O. - Módulo 02',  dataInicio : new Date('07/13/2023'), dataFim : new Date('08/13/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Git - Github', dataInicio : new Date('10/01/2023'), dataFim : new Date('11/01/2023'), },
  { instituicao: 'Curso em Vídeo', nome : 'Inteligência Artificial - Módulo 01', dataInicio : new Date('11/11/2024'), dataFim : new Date('11/12/2024') },      
  { instituicao: 'Curso em Vídeo', nome : 'Produção de Vídeos - Módulo 01 - Cámeras', dataInicio : new Date('10/19/2023'), dataFim : new Date('11/19/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Produção de Vídeos - Módulo 02 - Iluminação', dataInicio : new Date('10/19/2023'), dataFim : new Date('11/19/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Produção de Vídeos - Módulo 03 - Audio com qualidade', dataInicio : new Date('10/19/2023'), dataFim : new Date('11/19/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Produção de Vídeos - Módulo 04 - Edição de Vídeos', dataInicio : new Date('10/19/2023'), dataFim : new Date('11/19/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Produção de Vídeos - Módulo 05 - Criando uma Thumb', dataInicio : new Date('10/19/2023'), dataFim : new Date('11/19/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Produção de Vídeos - Módulo 06 - Animação', dataInicio : new Date('10/19/2023'), dataFim : new Date('11/19/2023') },
  { instituicao: 'Curso em Vídeo', nome : 'Redes de Computadores - Módulo 06 - Transmissão de Sinal', dataInicio : new Date('06/05/2025'), dataFim : new Date('07/05/2025') },
]

let divFormacaoContainer = document.getElementById('formacao-container')
cursos.forEach( curso => {
  let divCurso = criarElemento('div', 'curso')
  let pTitulacao = criarElemento('p', 'periodo')
  pTitulacao.textContent = `${formatarData(curso.dataInicio)} - ${formatarData(curso.dataFim)}`
  divCurso.appendChild(pTitulacao)
  let h3Instituicao = criarElemento('h3', 'instituicao')
  h3Instituicao.textContent = curso.instituicao
  divCurso.appendChild(h3Instituicao)
  let pPeriodo = criarElemento('p', 'titulacao')
  pPeriodo.textContent = curso.nome
  divCurso.appendChild(pPeriodo)
  divFormacaoContainer.appendChild(divCurso)
})

function criarElemento(tag, classe){
  let elemento = document.createElement(tag)
  elemento.classList.add(classe)
  return elemento
}

function formatarData(data){
  return `${acrescentarZero(data.getDate())}/${acrescentarZero(data.getMonth() + 1)}/${data.getFullYear()}`
}

function acrescentarZero(numero){
  return numero < 10 ? `0${numero}` : numero
}
