// ========================================
// Dados do visualizador de código
// ========================================

// Linguagens em que o sistema realmente está implementado (javascript,
// python, c, java e php são backends completos): o visualizador mostra os arquivos reais.
export const arquivosReais = {
    javascript: [
        "linguagens/javascript/app.js",
        "linguagens/javascript/amigo.js",
        "linguagens/javascript/bancoAmigos.js",
        "linguagens/javascript/resultados.js",
        "linguagens/javascript/formulario.js",
        "linguagens/javascript/modal.js",
        "linguagens/javascript/mensagens.js",
        "js/backend/roteador.js",
        "js/backend/ponteJson.js",
        "js/backend/c/app.js",
        "js/backend/java/app.js",
        "js/backend/java/wasi.js",
        "js/backend/php/app.js",
        "js/backend/wasm/host.js",
        "js/main.js",
        "js/conexao/database.js",
        "js/conexao/persistencia.js",
        "js/conexao/funcoesSql.js",
        "js/conexao/wasmIdade.js",
        "js/select/consultarAmigos.js",
        "js/insert/inserirAmigo.js",
        "js/update/atualizarAmigo.js",
        "js/delete/excluirAmigo.js",
        "js/abas.js",
        "js/visualizador.js",
        "js/exemplos.js",
        "js/backup.js"
    ],

    python: [
        "linguagens/python/app.py",
        "linguagens/python/amigo.py",
        "linguagens/python/banco/banco_amigos.py",
        "linguagens/python/interface/resultados.py",
        "linguagens/python/interface/formulario.py",
        "linguagens/python/interface/modal.py",
        "linguagens/python/interface/mensagens.py"
    ],

    c: [
        "linguagens/c/src/app.c",
        "linguagens/c/src/amigo.c",
        "linguagens/c/src/amigo.h",
        "linguagens/c/src/banco.c",
        "linguagens/c/src/banco.h",
        "linguagens/c/src/interface.c",
        "linguagens/c/src/interface.h",
        "linguagens/c/src/mini.c",
        "linguagens/c/src/mini.h",
        "linguagens/c/src/host.h"
    ],

    java: [
        "linguagens/java/src/amigos/App.java",
        "linguagens/java/src/amigos/Amigo.java",
        "linguagens/java/src/amigos/BancoAmigos.java",
        "linguagens/java/src/amigos/Resultados.java",
        "linguagens/java/src/amigos/Formulario.java",
        "linguagens/java/src/amigos/Modal.java",
        "linguagens/java/src/amigos/Mensagens.java",
        "linguagens/java/src/amigos/Host.java"
    ],

    php: [
        "linguagens/php/app.php",
        "linguagens/php/amigo.php",
        "linguagens/php/banco_amigos.php",
        "linguagens/php/interface/resultados.php",
        "linguagens/php/interface/formulario.php",
        "linguagens/php/interface/modal.php",
        "linguagens/php/interface/mensagens.php",
        "linguagens/php/interface/dom.php"
    ],

    assemblyscript: [
        "wasm/assembly/idade.ts"
    ]
};

// Nome da linguagem no Prism (carregada sob demanda pelo autoloader).
// "none" = sem realce de sintaxe.
export const linguagensPrism = {
    javascript: "javascript",
    python: "python",
    c: "c",
    rust: "rust",
    cpp: "cpp",
    go: "go",
    typescript: "typescript",
    assemblyscript: "typescript",
    php: "php",
    ruby: "ruby",
    lua: "lua",
    bash: "bash",
    csharp: "csharp",
    fsharp: "fsharp",
    java: "java",
    kotlin: "kotlin",
    scala: "scala",
    swift: "swift",
    dart: "dart",
    haskell: "haskell",
    r: "r",
    sql: "sql",
    zig: "none",
    grain: "none",
    moonbit: "none"
};

export const iconesLinguagens = {
    javascript: "devicon-javascript-plain",
    python: "devicon-python-plain",
    c: "devicon-c-plain",
    rust: "devicon-rust-original",
    cpp: "devicon-cplusplus-plain",
    go: "devicon-go-plain",
    zig: "devicon-zig-plain",
    typescript: "devicon-typescript-plain",
    assemblyscript: "devicon-typescript-plain",
    php: "devicon-php-plain",
    ruby: "devicon-ruby-plain",
    lua: "devicon-lua-plain",
    bash: "devicon-bash-plain",
    csharp: "devicon-csharp-plain",
    fsharp: "devicon-fsharp-plain",
    java: "devicon-java-plain",
    kotlin: "devicon-kotlin-plain",
    scala: "devicon-scala-plain",
    swift: "devicon-swift-plain",
    dart: "devicon-dart-plain",
    haskell: "devicon-haskell-plain",
    r: "devicon-r-plain",
    sql: "devicon-azuresqldatabase-plain",
    grain: "devicon-code-plain",
    moonbit: "devicon-code-plain"
};

// Exemplos demonstrativos das demais linguagens.
// Não fazem parte do sistema: são apenas "Hello World" ilustrativos.
export const exemplosCodigo = {
    javascript: {
        titulo: "JavaScript",
        codigo: `function buscarAmigo(nome) {
    console.log("Buscando amigo:", nome);
}

buscarAmigo("Maria");`
    },

    python: {
        titulo: "Python",
        codigo: `def buscar_amigo(nome):
    print("Buscando amigo:", nome)

buscar_amigo("Maria")`
    },


    rust: {
        titulo: "Rust",
        codigo: `fn main() {
    println!("Buscando amigo: Maria");
}`
    },

    cpp: {
        titulo: "C++",
        codigo: `#include <iostream>
#include <string>

int main() {
    std::string nome = "Maria";
    std::cout << "Buscando amigo: " << nome << std::endl;
    return 0;
}`
    },

    go: {
        titulo: "Go",
        codigo: `package main

import "fmt"

func main() {
    nome := "Maria"
    fmt.Println("Buscando amigo:", nome)
}`
    },

    zig: {
        titulo: "Zig",
        codigo: `const std = @import("std");

pub fn main() void {
    std.debug.print("Buscando amigo: {s}\\n", .{"Maria"});
}`
    },

    typescript: {
        titulo: "TypeScript",
        codigo: `function buscarAmigo(nome: string): void {
    console.log("Buscando amigo:", nome);
}

buscarAmigo("Maria");`
    },


    ruby: {
        titulo: "Ruby",
        codigo: `def buscar_amigo(nome)
  puts "Buscando amigo: #{nome}"
end

buscar_amigo("Maria")`
    },

    lua: {
        titulo: "Lua",
        codigo: `function buscar_amigo(nome)
    print("Buscando amigo: " .. nome)
end

buscar_amigo("Maria")`
    },

    bash: {
        titulo: "Bash",
        codigo: `#!/bin/bash

buscar_amigo() {
    echo "Buscando amigo: $1"
}

buscar_amigo "Maria"`
    },

    csharp: {
        titulo: "C#",
        codigo: `using System;

class Program {
    static void Main() {
        string nome = "Maria";
        Console.WriteLine($"Buscando amigo: {nome}");
    }
}`
    },

    fsharp: {
        titulo: "F#",
        codigo: `let buscarAmigo nome =
    printfn "Buscando amigo: %s" nome

buscarAmigo "Maria"`
    },


    kotlin: {
        titulo: "Kotlin",
        codigo: `fun buscarAmigo(nome: String) {
    println("Buscando amigo: $nome")
}

fun main() {
    buscarAmigo("Maria")
}`
    },

    scala: {
        titulo: "Scala",
        codigo: `object Main {
    def main(args: Array[String]): Unit = {
        val nome = "Maria"
        println(s"Buscando amigo: $nome")
    }
}`
    },

    swift: {
        titulo: "Swift",
        codigo: `func buscarAmigo(nome: String) {
    print("Buscando amigo: \\(nome)")
}

buscarAmigo(nome: "Maria")`
    },

    dart: {
        titulo: "Dart",
        codigo: `void buscarAmigo(String nome) {
  print('Buscando amigo: $nome');
}

void main() {
  buscarAmigo('Maria');
}`
    },

    haskell: {
        titulo: "Haskell",
        codigo: `buscarAmigo :: String -> IO ()
buscarAmigo nome =
    putStrLn ("Buscando amigo: " ++ nome)

main :: IO ()
main = buscarAmigo "Maria"`
    },

    r: {
        titulo: "R",
        codigo: `buscar_amigo <- function(nome) {
    cat("Buscando amigo:", nome, "\\n")
}

buscar_amigo("Maria")`
    },

    sql: {
        titulo: "SQL",
        codigo: `SELECT nome
FROM amigos
WHERE nome = 'Maria';`
    },

    grain: {
        titulo: "Grain",
        codigo: `module Main

let buscarAmigo = (nome: String) =>
  print("Buscando amigo: " ++ nome)

buscarAmigo("Maria")`
    },

    moonbit: {
        titulo: "MoonBit",
        codigo: `fn main {
  println("Buscando amigo: Maria")
}`
    }
};
