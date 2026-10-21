# Busca de Amigos — datas de aniversário no navegador

Sistema 100% no navegador, sem backend de servidor. **A linguagem escolhida no
seletor é quem executa o sistema** (busca, cadastro, edição e exclusão):

| Seletor        | Quem executa o sistema                                   |
|----------------|----------------------------------------------------------|
| **Python**     | `python/` rodando no navegador (PyScript/Pyodide, WASM)  |
| **JavaScript** | `js/backend/javascript/` rodando no próprio navegador    |
| **C**          | `c/src/` compilado para WebAssembly (`c/app.wasm`)       |
| **Java**       | `java/src/` compilado para WebAssembly (`java/app.wasm`) |
| **PHP**        | `php/` rodando no navegador (php-wasm, WASM)             |

O sistema começa em Python. Ao trocar, o backend antigo é desativado (edição e modal
encerrados), o novo assume a tela e a lista é redesenhada com a mesma busca e os
mesmos filtros. Os dois usam o **mesmo banco** e a mesma tela (`index.html`).

Peças compartilhadas, comuns aos dois backends:

- **SQLite** (sql.js, WebAssembly) guarda os amigos.
- **WebAssembly próprio** (`wasm/`, AssemblyScript) calcula a idade e é registrado no
  SQLite como a função `idade_completa()`.
- **Roteador** (`js/backend/roteador.js`) liga os botões da página ao backend ativo.

## Como a troca funciona

Os botões da página têm `data-acao="..."` (nada de `py-click`). O roteador os liga
uma única vez e repassa cada ação ao backend ativo. Cada backend se registra com:

```
{ ativar(), desativar(), acoes: { buscar, ordenar, listar_todos, limpar_filtros,
                                  cadastrar, cancelar_edicao,
                                  confirmar_exclusao, cancelar_exclusao, escape } }
```

- JavaScript: `registrar("javascript", backendJavaScript)` em `js/main.js`.
- C e Java: `js/main.js` carrega `c/app.wasm` e `java/app.wasm` e registra cada backend
  quando fica pronto (se falhar, o indicador mostra o motivo).
- PHP: o runtime (~12 MB) só é baixado quando o PHP é escolhido pela primeira vez
  (`registrarSobDemanda`). Se o download falhar, o indicador mostra o motivo e escolher
  PHP de novo tenta outra vez.
- Python: `window.backends.registrar("python", ...)` no fim de `python/app.py`
  (quando o Pyodide termina de carregar; até lá o indicador mostra "Carregando...").
- Python e PHP acessam o banco pela ponte `js/backend/ponteJson.js` (texto JSON).
  O backend JavaScript chama `select/insert/update/delete` diretamente.

## Backend em C

O C não roda no navegador por si só: `c/src/` é compilado para um módulo WebAssembly
(`c/app.wasm`, ~15 KB), **sem libc**. A lógica do sistema fica toda no C: validar,
formatar datas e idades, escolher mensagens, controlar edição e modal, montar a lista.

O navegador só oferece **primitivas**, que o C importa (contrato em `c/src/host.h`,
implementação em `js/backend/wasm/host.js`, **a mesma usada pelo Java**):

- **DOM** por números (handles): criar elemento, anexar, definir texto/valor/atributo,
  ouvir clique (o clique volta ao C pela função exportada `ao_clicar`).
- **Banco**: buscar, inserir, atualizar e excluir (o SQLite continua sendo o sql.js).
- **Utilidades**: data de hoje e cópia de textos entre o navegador e o módulo.

Memória: duas áreas fixas, sem `malloc`: 4 MB transitórios (zerados a cada ação) e
2 MB para a lista (zerados a cada redesenho). Funciona com milhares de amigos; se uma
busca devolver dezenas de milhares de linhas, a tela mostra "Memória insuficiente"
em vez de travar, e uma busca mais estreita volta a funcionar.

Para recompilar depois de mexer em `c/src/`:

```bash
pip install ziglang     # compilador (zig cc), uma vez
cd c
make                    # gera c/app.wasm
```

(Com `clang` + `wasm-ld`: `make WASMCC="clang --target=wasm32"`.)

## Backend em Java

O Java também não roda no navegador por si só: `java/src/` é compilado para um módulo
WebAssembly (`java/app.wasm`, ~230 KB) pelo **TeaVM**. A lógica é toda em Java (mesma
divisão de responsabilidades do C): validar, formatar, mensagens, edição, modal, lista.

- O contrato com o navegador é o mesmo do C: as funções importadas são declaradas em
  `java/src/amigos/Host.java` com as anotações `@Import`, e as ações que o roteador chama
  são os métodos `@Export` de `java/src/amigos/App.java`.
- O módulo é WASI (como o TeaVM gera). `js/backend/java/wasi.js` oferece o mínimo para ele
  iniciar e para `System.out` ir ao console. **Atenção:** o WASI precisa entregar `argv[0]`;
  com zero argumentos o runtime do TeaVM corrompe o heap e quebra no primeiro ciclo do
  coletor de lixo (isso foi descoberto nos testes).
- Ao contrário do C, não há áreas de memória fixas: o heap do TeaVM cresce sozinho.

Para recompilar depois de mexer em `java/src/` (Node 22+ e um JDK 17+ com `javac`):

```bash
cd java/build
npm install     # baixa o compilador TeaVM (ele próprio em WebAssembly)
npm run build   # gera java/app.wasm
```

O build usa o `javac` do JDK (que aceita as anotações) e depois o backend do TeaVM;
no fim confere se o módulo importa e exporta exatamente o contrato esperado.
Veja `java/build/NOTICE.md` para os avisos de terceiros.

## Backend em PHP

O PHP roda no navegador compilado para WebAssembly pelo **php-wasm**
(PHP 8.3, versão fixa `php-wasm@0.2.0` pelo jsDelivr). A lógica está nos arquivos
`.php` reais de `php/`, que o carregador (`js/backend/php/app.js`) copia para o sistema
de arquivos virtual do PHP e executa. É a mesma ideia do Python com PyScript:

- O PHP acessa a página diretamente, pela ponte **Vrzno** do php-wasm: `new Vrzno`
  representa o escopo global do JavaScript, então `$janela->document->getElementById(...)`,
  `->value = ...`, `->addEventListener('click', fn)` etc. funcionam como em JavaScript
  (`php/interface/dom.php`). Closures PHP viram ouvintes de clique.
- Os dados vêm pela mesma ponte JSON do Python.
- O estado (modo de edição, modal) persiste entre uma ação e outra.
- Ao terminar de carregar, `php/app.php` cria o objeto de backend e o deixa em
  `window.backendPhp`; o carregador o entrega ao roteador.

Particularidades do PHP no navegador, tratadas no código:

- Sem `mbstring`: os caracteres são contados com `preg_match_all('/./su')`.
- O PHP usa UTC; a data de hoje vem do navegador (`vrzno_eval`).
- É o backend mais lento: cada operação de DOM atravessa a ponte PHP↔JavaScript
  (~2,5 s para desenhar 5.000 amigos; 13 amigos são instantâneos).

Para hospedar o php-wasm por conta própria (sem CDN), copie os arquivos do pacote npm
`php-wasm` e aponte `URL_RUNTIME` em `js/backend/php/app.js` para eles.

## Como rodar

O navegador não carrega `.wasm`/`fetch` via `file://`; sirva a pasta por HTTP:

```bash
python -m http.server 8000
# abra http://localhost:8000
```

## Dados

Os amigos ficam salvos no navegador (IndexedDB). O `bancoDados/amigos.db` é só o
banco inicial, usado na primeira visita ou em **Restaurar original**.
Na seção **Seus dados** da página é possível **exportar** e **importar** um `.db`.

> Se for publicar o projeto (GitHub Pages, por exemplo), lembre que o
> `bancoDados/amigos.db` fica público. Confira se não há dados de pessoas reais.

## Recompilar o módulo WebAssembly

O `wasm/idade.wasm` já está compilado. Para recompilar depois de mexer em
`wasm/assembly/idade.ts`:

```bash
cd wasm
npm install
npm run build
```

## Estrutura

```
index.html            página
css/style.css         estilos
js/                   roteador, backend JavaScript, banco, visualizador de código
  backend/roteador.js        liga a tela ao backend escolhido
  backend/javascript/        backend JavaScript completo
  backend/c/                 carregador do backend C
  backend/java/              carregador do backend Java e shim WASI
  backend/php/               carregador do backend PHP (php-wasm)
  backend/wasm/host.js       host (DOM/banco) compartilhado por C e Java
  backend/ponteJson.js       funções JSON usadas por Python e PHP
  conexao/                   carregamento do banco, IndexedDB, funções SQL, loader do wasm
  select|insert|update|delete/   operações no banco (compartilhadas)
python/               backend Python completo (PyScript)
c/                    backend C: fonte em src/, binário app.wasm, Makefile
java/                 backend Java: fonte em src/amigos/, binário app.wasm, build/
php/                  backend PHP: arquivos .php (carregados no php-wasm)
wasm/                 fonte e binário do módulo WebAssembly que calcula a idade
bancoDados/amigos.db  banco inicial
```
