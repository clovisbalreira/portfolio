# Avisos de terceiros (ferramenta de build do Java)

Estes arquivos são usados **só para compilar** `java/src` em `java/app.wasm`.
Nada disso é executado pela página.

- `java-compiler-runtime.mjs` e `java-compiler-bindings.mjs`: código de ligação
  (JavaScript) do compilador **TeaVM**, copiado do repositório
  [wasm-oj/forge](https://github.com/wasm-oj/forge) (`src/compiler/vendor/`).
  TeaVM, copyright Alexey Andreev, licença Apache 2.0 (cabeçalho mantido nos arquivos).
- `@wasm-oj/toolchain-java` (npm, instalado por `npm install`): traz o compilador
  TeaVM 0.13.1 compilado para WebAssembly e a biblioteca de classes Java.
  Veja `node_modules/@wasm-oj/toolchain-java/THIRD_PARTY_NOTICES.md`.
- O `java/app.wasm` gerado contém partes da biblioteca de classes do TeaVM
  (Apache 2.0) necessárias ao programa.
