async function pegarSalic(endPoint) {
  let url = endPoint
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error(`Erro na requisição: ${resposta.status}`);
    }
    const dados = await resposta.json();
    return dados
  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

async function mostrarTabelaFornecedores() {
  let titulos = ['Nome', 'Email']
  let variaveis = []
  comecarBusca()
  try {
    const dados = await pegarSalic(`https://api.salic.cultura.gov.br/api/v1/fornecedores?limit=100&offset=${(parseInt(document.getElementById('numero-pagina').textContent) - 1)}`).then( res => {
      return res._embedded.fornecedores.map( fornecedore => {
        return item = fornecedore
      })
    })
    finalizarBusca()
    if (dados.length > 0) {
      dados.forEach(fornecedor => {
        variaveis.push(fornecedor._links.produtos)
        variaveis.push(fornecedor.nome)
        variaveis.push(fornecedor.email)
      })
      selectSegundario('')
      mostrarTabela(titulos, variaveis, 'fornecedores')
    } else {
      console.error('Nenhum fornecedor encontrado.')
    }
  } catch (erro) {
    console.error('Erro ao mostrar fornecedores:', erro)
  }
}

async function mostrarTabelaIncentivadores(filtro){
  let titulos = ['Nome','Municipio','UF','Tipo','Doação']
  let variaveis = []
  comecarBusca()
  try {
    const dados = await pegarSalic(`https://api.salic.cultura.gov.br/api/v1/incentivadores?limit=100&offset=${(parseInt(document.getElementById('numero-pagina').textContent) - 1)}`).then( res => {
      return res._embedded.incentivadores.map( incentivadore => {
        return item = incentivadore
      })
    })
    let dadosAtualizados = filtro == undefined || filtro.filtro == '' ? dados : filtrarDados(dados, filtro)
    finalizarBusca()
    if (dadosAtualizados.length > 0) {
      dadosAtualizados.forEach(incentivador => {
        variaveis.push(incentivador._links.doacoes)
        variaveis.push(incentivador.nome)
        variaveis.push(incentivador.municipio)
        variaveis.push(incentivador.UF)
        variaveis.push(incentivador.tipo_pessoa.charAt(0).toUpperCase() + incentivador.tipo_pessoa.slice(1).toLowerCase())
        variaveis.push(`R$ ${incentivador.total_doado.toFixed(2).replace('.',',')}`)
      });
      const selects = [
        { label: 'Municipio', dados: [...new Set(dados.map(p => p.municipio))], placeholder: 'Escolha o municipio', id: 'incentivador-municipio', filtro: filtroSelecionado(filtro, 'municipio')},
        { label: 'Estado', dados: [...new Set(dados.map(p => p.UF))], placeholder: 'Escolha o estado', id: 'incentivador-estado', filtro: filtroSelecionado(filtro, 'estado')},
        { label: 'Tipo', dados: [...new Set(dados.map(p => p.tipo_pessoa))], placeholder: 'Escolha o tipo', id: 'incentivador-tipo', filtro: filtroSelecionado(filtro, 'tipo')},
      ]
      selectSegundario(selects)
      escolherSelectSegundario(selects)
      mostrarTabela(titulos, variaveis, 'incentivador')
    } else {
      console.error('Nenhum fornecedor encontrado.')
    }
  } catch (erro) {
    console.error('Erro ao mostrar fornecedores:', erro)
  }
}

async function mostrarTabelaProjetos(filtro){
  let titulos = ['Nome do Projeto','Proponente','UF','Situação','Valor Aprovado (R$)']
  let variaveis = []
  comecarBusca()
  try {
    const dados = await pegarSalic(`https://api.salic.cultura.gov.br/api/v1/projetos?limit=100&offset=${(parseInt(document.getElementById('numero-pagina').textContent) - 1)}`).then( res => {
      return res._embedded.projetos.map( projeto => {
        return item = projeto
      })
    })
    finalizarBusca()
    let dadosAtualizados = filtro == undefined || filtro.filtro == '' ? dados : filtrarDados(dados, filtro)
    if (dadosAtualizados.length > 0) {
      dadosAtualizados.forEach(projeto => {
        if(projeto.valor_solicitado > 0){
          variaveis.push(projeto._links.incentivadores)
          variaveis.push(projeto.nome)
          variaveis.push(projeto.proponente)
          variaveis.push(projeto.UF)
          variaveis.push(projeto.situacao)
          variaveis.push(`R$ ${projeto.valor_solicitado.toFixed(2).replace('.',',')}`)
        }
      });
      const selects = [
        { label: 'Estado', dados: [...new Set(dados.map(p => p.UF))], placeholder: 'Escolha o estado', id: 'projetos-estado', filtro: filtroSelecionado(filtro, 'estado')},
        { label: 'Situação', dados: [...new Set(dados.map(p => p.situacao))], placeholder: 'Escolha o situacao', id: 'projetos-situacao', filtro: filtroSelecionado(filtro, 'situacao')},
      ]
      selectSegundario(selects)
      escolherSelectSegundario(selects)
      mostrarTabela(titulos, variaveis, 'projeto')
    } else {
      console.error('Nenhum projeto encontrado.')
    }
  } catch (erro) {
    console.error('Erro ao mostrar projetos:', erro)
  }
}

function comecarBusca(){
  document.getElementById('status').innerHTML = 'Carregando...<div class="spinner"></div>'
  document.getElementById('segundario').textContent = ''
  document.getElementById('tabela').textContent = ''
  document.getElementById('diminuir').disabled = true
  document.getElementById('somar').disabled = true
  document.getElementById('menu-principal').disabled = true
}

function finalizarBusca(){
  document.getElementById('status').textContent = ''
  document.getElementById('diminuir').disabled = false
  document.getElementById('somar').disabled = false
  document.getElementById('menu-principal').disabled = false
}

async function mostrarTabelaProponentes(filtro){
  let titulos = ['Nome','Municipio','UF','Tipo','Valor (R$)']
  let variaveis = []
  comecarBusca()
  try {
    const dados = await pegarSalic(`https://api.salic.cultura.gov.br/api/v1/proponentes?limit=100&offset=${(parseInt(document.getElementById('numero-pagina').textContent) - 1)}`).then( res => {
      return res._embedded.proponentes.map( proponente => {
        return item = proponente
      })      
    })
    let dadosAtualizados = filtro == undefined ? dados : filtrarDados(dados, filtro)
    finalizarBusca()
    if (dadosAtualizados.length > 0) {
      dadosAtualizados.forEach(proponente => {
        variaveis.push(proponente._links.projetos)
        variaveis.push(proponente.nome)
        variaveis.push(proponente.municipio)
        variaveis.push(proponente.UF)
        variaveis.push(proponente.tipo_pessoa.charAt(0).toUpperCase() + proponente.tipo_pessoa.slice(1).toLowerCase())
        variaveis.push(valorMonetario(proponente.total_captado))
      });
      const selects = [
        { label: 'Municipio', dados: [...new Set(dados.map(p => p.municipio))], placeholder: 'Escolha o municipio', id: 'proponentes-municipio', filtro: filtroSelecionado(filtro, 'municipio')},
        { label: 'Estado', dados: [...new Set(dados.map(p => p.UF))], placeholder: 'Escolha o estado', id: 'proponentes-estado', filtro: filtroSelecionado(filtro, 'estado')},
        { label: 'Tipo', dados: [...new Set(dados.map(p => p.tipo_pessoa))], placeholder: 'Escolha o tipo', id: 'proponentes-tipo', filtro: filtroSelecionado(filtro, 'tipo')},
      ]
      selectSegundario(selects)
      escolherSelectSegundario(selects)
      mostrarTabela(titulos, variaveis, 'proponentes')
    } else {
      console.error('Nenhum proponente encontrado.')
    }
  } catch (erro) {
    console.error('Erro ao mostrar proponentes:', erro)
  }
}

async function mostrarTabelaPropostas(filtro){
  let titulos = ['Nome','Resumo','Data Inicio','Data Fim']
  let variaveis = []
  comecarBusca()
  try {
    const dados = await pegarSalic(`https://api.salic.cultura.gov.br/api/v1/propostas?limit=100&offset=${(parseInt(document.getElementById('numero-pagina').textContent) - 1)}`).then( res => {
      return res._embedded.propostas.map( proposta => {
        return item = proposta
      })
    })
    let dadosAtualizados = filtro == undefined || filtro.filtro == '' ? dados : filtrarDados(dados, filtro)
    finalizarBusca()
    if (dadosAtualizados.length > 0) {
      dadosAtualizados.forEach(proposta => {
        variaveis.push(proposta._links.self)
        variaveis.push(proposta.nome)
        variaveis.push(limitarTextoPorPalavra(proposta.resumo, 20))
        variaveis.push(proposta.data_inicio)
        variaveis.push(proposta.data_fim)
      });
      selectSegundario('')
      mostrarTabela(titulos, variaveis, 'propostas')
    } else {
      console.error('Nenhum proposta encontrado.')
    }
  } catch (erro) {
    console.error('Erro ao mostrar propostas:', erro)
  }
}

async function modalProponente(url){
  const modal = document.querySelector('dialog');
  modal.innerHTML = ''
  modal.appendChild(criarButaoFechar(modal))
  try {
    const dados = await pegarSalic(url) 
    let ul = document.createElement('ul')
    if (dados.length == undefined) {
      dados._embedded.projetos.forEach( (projeto, index) => {
        if(projeto.nome != '') ul.appendChild(criarLi('Nome do Projeto', projeto.nome))
        if(projeto.proponente != '') ul.appendChild(criarLi('Proponente', projeto.proponente))
        if(projeto.valor_projeto != '') ul.appendChild(criarLi('Valor Projeto', valorMonetario(projeto.valor_projeto)))
        if(projeto.valor_aprovado != '') ul.appendChild(criarLi('Valor Aprovado', valorMonetario(projeto.valor_aprovado)))
        if(projeto.municipio != '') ul.appendChild(criarLi('Municipio', projeto.municipio))
        if(projeto.UF != '') ul.appendChild(criarLi('UF', projeto.UF))
        if(projeto.resumo != '') ul.appendChild(criarLi('Resumo', projeto.resumo))
        if(projeto.segmento != '') ul.appendChild(criarLi('Segmento', projeto.segmento))
        if(projeto.sinopse != '') ul.appendChild(criarLi('Sinopse', projeto.sinopse))
        if(projeto.situacao != '') ul.appendChild(criarLi('Situação', projeto.situacao))
        if(projeto.acessibilidade != '') ul.appendChild(criarLi('Accessibilidade', projeto.acessibilidade))
        if(projeto.democratizacao != '') ul.appendChild(criarLi('Democratização', projeto.democratizacao))
        if(projeto.impacto_ambiental != '') ul.appendChild(criarLi('Impacto ambiental', projeto.impacto_ambiental))
        if(projeto.especificacao_tecnica != '') ul.appendChild(criarLi('Especificacao tecnica', projeto.especificacao_tecnica))
        if(projeto.etapa != '') ul.appendChild(criarLi('Etapa', projeto.etapa))
        if(projeto.ficha_tecnica != '') ul.appendChild(criarLi('Ficha Tecnica', projeto.ficha_tecnica))
        if(projeto.objetivos != '') ul.appendChild(criarLi('Objetivos', projeto.objetivos))
        if(projeto.providencia != '') ul.appendChild(criarLi('Providencia', projeto.providencia))
        if(index < dados._embedded.projetos.length -1){
          let hr = document.createElement('hr')
          ul.appendChild(hr)
        }
      })
    } else {
      console.error('Nenhum projeto encontrado.')
    }
    modal.appendChild(ul)
  } catch (erro) {
    console.error('Erro ao mostrar projetos:', erro)
  }
  modal.showModal()
}

async function modalProposta(url){
  const modal = document.querySelector('dialog');
  modal.innerHTML = ''
  modal.appendChild(criarButaoFechar(modal))
  try {
    const dados = await pegarSalic(url) 
    let ul = document.createElement('ul')
    if (dados.length == undefined) {
      if(dados.nome != '') ul.appendChild(criarLi('Nome do Projeto', dados.nome))
      if(dados.resumo != '') ul.appendChild(criarLi('Resumo', dados.resumo))
      if(dados.sinopse != '') ul.appendChild(criarLi('Sinopse', dados.sinopse))
      if(dados.acessibilidade != '') ul.appendChild(criarLi('Accessibilidade', dados.acessibilidade))
      if(dados.democratizacao != '') ul.appendChild(criarLi('Democratização', dados.democratizacao))
      if(dados.especificacao_tecnica != '') ul.appendChild(criarLi('Especificacao tecnica', dados.especificacao_tecnica))
      if(dados.objetivos != '') ul.appendChild(criarLi('Objetivos', dados.objetivos))
      if(dados.ficha_tecnica != '') ul.appendChild(criarLi('Ficha tecnica', dados.ficha_tecnica))
      if(dados.impacto_ambiental != '') ul.appendChild(criarLi('Impacto ambiental', dados.impacto_ambiental))
      if(dados.estrategia_execucao != '') ul.appendChild(criarLi('Estrategia execucao', dados.estrategia_execucao))
      if(dados.etapa != '') ul.appendChild(criarLi('Etapa', dados.etapa))
    } else {
      console.error('Nenhum projeto encontrado.')
    }
    modal.appendChild(ul)
  } catch (erro) {
    console.error('Erro ao mostrar projetos:', erro)
  }
  modal.showModal()
}

async function modalFornecedor(url){
  const modal = document.querySelector('dialog');
  modal.innerHTML = ''
  modal.appendChild(criarButaoFechar(modal))
  try {
    const dados = await pegarSalic(url) 
    let ul = document.createElement('ul')
    if (dados.length == undefined) {
      dados._embedded.produtos.forEach( produto => {
        if(produto.nome != '') ul.appendChild(criarLi('Nome do Produto', produto.nome))
        if(produto.nome_fornecedor != '') ul.appendChild(criarLi('Nome fornecedor', produto.nome_fornecedor))
        if(produto.valor_pagamento != '') ul.appendChild(criarLi('Valor pagamento', valorMonetario(produto.valor_pagamento)))
        if(produto.tipo_forma_pagamento != '') ul.appendChild(criarLi('Forma pagamento', produto.tipo_forma_pagamento))
        if(produto.tipo_documento != '') ul.appendChild(criarLi('Tipo documento', produto.tipo_documento))
        let hr = document.createElement('hr')
        ul.appendChild(hr)
      })
    } else {
      console.error('Nenhum produto encontrado.')
    }
    let valorTotal = dados._embedded.produtos.reduce( (total, produto) => total + produto.valor_pagamento, 0)
    ul.appendChild(criarLi('Valor', valorMonetario(valorTotal)))
    modal.appendChild(ul)
  } catch (erro) {
    console.error('Erro ao mostrar produtos:', erro)
  }
  modal.showModal()
}

async function modalIncentivador(url){
  const modal = document.querySelector('dialog');
  modal.innerHTML = ''
  modal.appendChild(criarButaoFechar(modal))
  try {
    const dados = await pegarSalic(url) 
    let ul = document.createElement('ul')
    if (dados.length == undefined) {
      dados._embedded.doacoes.forEach( (doacao, index) => {
        if(doacao.nome_doador != '' && index == 0) ul.appendChild(criarLi('Nome do doador', doacao.nome_doador))
        if(doacao.nome_projeto != '') ul.appendChild(criarLi('Nome do projeto', doacao.nome_projeto))
        if(doacao.valor != '') ul.appendChild(criarLi('Valor', valorMonetario(doacao.valor)))
        let hr = document.createElement('hr')
        ul.appendChild(hr)
      })
    } else {
      console.error('Nenhum doação encontrado.')
    }
    let valorTotal = dados._embedded.doacoes.reduce( (total, doacao) => total + doacao.valor, 0)
    ul.appendChild(criarLi('Valor', valorMonetario(valorTotal)))
    modal.appendChild(ul)
  } catch (erro) {
    console.error('Erro ao mostrar doações:', erro)
  }
  modal.showModal()
}

async function modalProjeto(url){ 
  const modal = document.querySelector('dialog');
  modal.innerHTML = ''
  modal.appendChild(criarButaoFechar(modal))
  try {
    const dados = await pegarSalic(url) 
    let ul = document.createElement('ul')
    if (dados.length == undefined) {
      dados._embedded.incentivadores.forEach( incentivador => {
        if(incentivador.nome != '') ul.appendChild(criarLi('Nome do incentivador', incentivador.nome))
        if(incentivador.municipio != '') ul.appendChild(criarLi('Municipio', incentivador.municipio))
        if(incentivador.UF != '') ul.appendChild(criarLi('UF', incentivador.UF))
        if(incentivador.responsavel != ' ') ul.appendChild(criarLi('Responsavel', incentivador.responsavel))
        if(incentivador.tipo_pessoa != '') ul.appendChild(criarLi('Tipo', incentivador.tipo_pessoa))
        if(incentivador.total_doado != '') ul.appendChild(criarLi('Valor', valorMonetario(incentivador.total_doado)))
        let hr = document.createElement('hr')
        ul.appendChild(hr)
      })
    } else {
      console.error('Nenhum incentivador encontrado.')
    }
    let valorTotal = dados._embedded.incentivadores.reduce( (total, incentivador) => total + incentivador.total_doado, 0)
    ul.appendChild(criarLi('Valor', valorMonetario(valorTotal)))
    modal.appendChild(ul)
  } catch (erro) {
    console.error('Erro ao mostrar incentivadores:', erro)
  }
  modal.showModal()
}

function pegarTrs(){
  let trs = document.querySelectorAll('#tabela tbody tr')
  trs.forEach( tr => {
    tr.addEventListener('click', (e) => {
      console.log(e.currentTarget.dataset.id)
      console.log(e.currentTarget.dataset.tipo)
      if(e.currentTarget.dataset.tipo == 'proponentes')modalProponente(e.currentTarget.dataset.id)  
      if(e.currentTarget.dataset.tipo == 'propostas') modalProposta(e.currentTarget.dataset.id)  
      if(e.currentTarget.dataset.tipo == 'fornecedores') modalFornecedor(e.currentTarget.dataset.id)  
      if(e.currentTarget.dataset.tipo == 'incentivador') modalIncentivador(e.currentTarget.dataset.id)  
      if(e.currentTarget.dataset.tipo == 'projeto') modalProjeto(e.currentTarget.dataset.id)  
    })
  })
}

function mostrarTabela(titulos, variaveis, tipo){
  let tabela = document.querySelector('#tabela')
  tabela.appendChild(criarThead(titulos))
  tabela.appendChild(criarTbody(variaveis, titulos.length, tipo))
  pegarTrs()
}

function criarThead(titulos){
  let thead = document.createElement('thead') 
  thead.appendChild(criarTh(titulos))
  return thead
}

function criarTh(titulos){
  let tr = document.createElement('tr')
  titulos.forEach( titulo => {
    let th = document.createElement('th')
    th.textContent = titulo
    tr.appendChild(th)
  })
  return tr
}

function criarTbody(variaveis, colunas, tipo){
  let tbody = document.createElement('tbody') 
  let inicio = 0
  let tr =''
  variaveis.forEach( variavel => {
    if(inicio == 0){
      inicio += 1 
      tr = document.createElement('tr')
      tr.dataset.id = variavel
      tr.dataset.tipo = tipo
      return
    }
    inicio += 1
    tr.appendChild(criarTd(variavel))
    if(inicio == colunas + 1){
      inicio = 0
      tbody.appendChild(tr)
    }
  })
  return tbody
}

function criarTd(variavel){
  let td = document.createElement('td')
  td.textContent = variavel
  return td
}

function selectPrincipal(){
  let menus = [
    'Proponente ( Cria e executa o projeto )',
    'Incentivador ( Financia o projeto com dedução fiscal )',
    'Fornecedor ( Vende bens ou serviços ao projeto )',
    'Proposta ( Inicial )',
    'Projeto ( Após aprovação )',
  ]
  let section = document.getElementById('principal')
  let div = document.createElement('div')
  let label = document.createElement('label')
  label.textContent = 'Selecione o menu: '
  label.for = 'menu-principal'
  div.appendChild(label)
  section.appendChild(div)
  let select = document.createElement('select')
  select.id = 'menu-principal'
  menus.forEach( menu => {
    let option = document.createElement('option')
    option.textContent = menu
    select.appendChild(option)
  })
  div.appendChild(select)
  section.appendChild(div)
}

function escolherSelectPrincipal(){
  document.querySelectorAll('#menu-principal').forEach(select => {
    select.addEventListener('change', e => {
      document.getElementById('numero-pagina').textContent = '1'
      if(e.target.value == 'Proponente ( Cria e executa o projeto )'){
        mostrarTabelaProponentes()
      }else if(e.target.value == 'Incentivador ( Financia o projeto com dedução fiscal )'){
        mostrarTabelaIncentivadores()
      }else if(e.target.value == 'Fornecedor ( Vende bens ou serviços ao projeto )'){
        mostrarTabelaFornecedores()
      }else if(e.target.value == 'Proposta ( Inicial )'){
        mostrarTabelaPropostas()
      }else if(e.target.value == 'Projeto ( Após aprovação )'){
        mostrarTabelaProjetos()
      }
    })
  })
}

function selectSegundario(dados){
  let section = document.getElementById('segundario')
  if(dados == '') return
  dados.forEach( dado => {
    let div = document.createElement('div')
    let label = document.createElement('label')
    label.textContent = dado.label
    label.for = dado.id
    div.appendChild(label)
    let select = document.createElement('select')
    select.id = dado.id
    select.appendChild(option(dado.placeholder, '', dado))
    dado.dados.forEach( item => {
      select.appendChild(option(item, item, dado))
    })
    div.appendChild(select)
    section.appendChild(div)
  })
}

function option(dado, valor, selecao){
  let option = document.createElement('option')
  option.textContent = dado
  option.value = valor
  if(selecao.filtro == valor) option.selected = true
  return option
}

function escolherSelectSegundario(dados){
  dados.forEach( dado => {
    document.getElementById(dado.id).addEventListener('change', e => {
      if(dado.id.includes('proponentes')){
        mostrarTabelaProponentes( {id : dado.id, filtro : e.target.value})
      }else if(dado.id.includes('incentivador')){
        mostrarTabelaIncentivadores( {id : dado.id, filtro : e.target.value})
      }else if(dado.id.includes('projetos')){
        mostrarTabelaProjetos( {id : dado.id, filtro : e.target.value})
      }
    })
  })
}

function filtrarDados(dados, filtro){
  if(filtro.id.includes('municipio')){
    return dados.filter( proponente => proponente.municipio == filtro.filtro)
  }else if(filtro.id.includes('estado')){
    return dados.filter( proponente => proponente.UF == filtro.filtro)
  }else if(filtro.id.includes('tipo')){
    return dados.filter( proponente => proponente.tipo_pessoa == filtro.filtro)
  }else if(filtro.id.includes('situacao')){
    return dados.filter( proponente => proponente.situacao == filtro.filtro)
  }
}

function filtroSelecionado(filtro, condicao){
  return filtro == undefined ? '' : filtro.id.includes(condicao) ? filtro.filtro : '' 
}

function criarBotoesNavegacao(){
  let section = document.getElementById('principal')
  let div = document.createElement('div')
  div.id = 'botoes-navegacao'
  div.appendChild(criarBotao('diminuir', '-'))
  let p = document.createElement('p')
  p.id = 'numero-pagina'
  p.textContent = '1'
  div.appendChild(p)
  div.appendChild(criarBotao('somar', '+'))
  section.appendChild(div)
}

function criarBotao(id, texto){
  let botao = document.createElement('button')
  botao.id = id
  botao.textContent = texto
  return botao
}

function mudarPagina(){
  let numeroPagina = document.getElementById('numero-pagina')
  acaoBotoes('diminuir', numeroPagina)
  acaoBotoes('somar', numeroPagina)
}

function acaoBotoes(id, numeroPagina){
  let botao = document.getElementById(id)
  botao.addEventListener('click', () => {
    numeroPagina.textContent = id == 'diminuir' ? parseInt(numeroPagina.textContent) == 1 ? parseInt(numeroPagina.textContent) : parseInt(numeroPagina.textContent) - 1 : numeroPagina.textContent = parseInt(numeroPagina.textContent) + 1
    verSelecaoPrincipal()
  })
}

function verSelecaoPrincipal(){
  if(pegarSelecaoPrincipal() == 'Proponente ( Cria e executa o projeto )'){
    mostrarTabelaProponentes()
  }else if(pegarSelecaoPrincipal() == 'Incentivador ( Financia o projeto com dedução fiscal )'){
    mostrarTabelaIncentivadores()
  }else if(pegarSelecaoPrincipal() == 'Fornecedor ( Vende bens ou serviços ao projeto )'){
    mostrarTabelaFornecedores()
  }else if(pegarSelecaoPrincipal() == 'Proposta ( Inicial )'){
    mostrarTabelaPropostas()
  }else if(pegarSelecaoPrincipal() == 'Projeto ( Após aprovação )'){
    mostrarTabelaProjetos()
  } 
}

function pegarSelecaoPrincipal(){
  let select = document.getElementById('menu-principal')
  return select.value
}

function limitarTextoPorPalavra(texto, limite) {
  if (texto.length <= limite) return texto;
  let cortado = texto.substring(0, limite);
  return cortado.substring(0, cortado.lastIndexOf(" ")) + "...";
}

function criarButaoFechar(modal){
  let buttonFechar = document.createElement('button')
  buttonFechar.id = 'fechar-modal'
  buttonFechar.textContent = 'X'
  buttonFechar.addEventListener('click', () => {
    modal.close();
  });
  return buttonFechar
}

function criarLi(titulo, texto){
  let li = document.createElement('li')
  li.appendChild(criarP(titulo))
  li.appendChild(criarP(texto))
  return li
}

function criarP(texto){
  let p = document.createElement('p')
  p.textContent = texto
  return p
}

function abrirModal(){
  const abrirBotao = document.querySelector('button');
  const modal = document.querySelector('dialog');
  const fecharBotao = modal.querySelector('button');
  modal.showModal();
  abrirBotao.addEventListener('click', () => {
  });
  fecharBotao.addEventListener('click', () => {
    modal.close();
  }); 
}

function valorMonetario(valor){
  return `R$ ${valor.toFixed(2).replace('.',',')}`
}

function inicio(){
  selectPrincipal()
  escolherSelectPrincipal()
  criarBotoesNavegacao()
  mudarPagina()
  mostrarTabelaProponentes()
}

inicio()