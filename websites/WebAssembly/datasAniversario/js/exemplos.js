// ========================================
// Dados do visualizador de código
// ========================================

// Linguagens em que o sistema realmente está implementado (javascript,
// python, c, java e php são backends completos): o visualizador mostra os arquivos reais.
export const arquivosReais = {
    javascript: [
        "js/backend/javascript/app.js",
        "js/backend/javascript/amigo.js",
        "js/backend/javascript/bancoAmigos.js",
        "js/backend/javascript/resultados.js",
        "js/backend/javascript/formulario.js",
        "js/backend/javascript/modal.js",
        "js/backend/javascript/mensagens.js",
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
        "python/app.py",
        "python/amigo.py",
        "python/banco/banco_amigos.py",
        "python/interface/resultados.py",
        "python/interface/formulario.py",
        "python/interface/modal.py",
        "python/interface/mensagens.py"
    ],

    c: [
        "c/src/app.c",
        "c/src/amigo.c",
        "c/src/amigo.h",
        "c/src/banco.c",
        "c/src/banco.h",
        "c/src/interface.c",
        "c/src/interface.h",
        "c/src/mini.c",
        "c/src/mini.h",
        "c/src/host.h"
    ],

    java: [
        "java/src/amigos/App.java",
        "java/src/amigos/Amigo.java",
        "java/src/amigos/BancoAmigos.java",
        "java/src/amigos/Resultados.java",
        "java/src/amigos/Formulario.java",
        "java/src/amigos/Modal.java",
        "java/src/amigos/Mensagens.java",
        "java/src/amigos/Host.java"
    ],

    php: [
        "php/app.php",
        "php/amigo.php",
        "php/banco_amigos.php",
        "php/interface/resultados.php",
        "php/interface/formulario.php",
        "php/interface/modal.php",
        "php/interface/mensagens.php",
        "php/interface/dom.php"
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
