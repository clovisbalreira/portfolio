// ========================================
// Funções personalizadas do SQLite
//
// norm(texto)            -> minúsculas e sem acentos
// idade_completa(data)   -> idade em anos (calculada no WebAssembly)
//
// IMPORTANTE: o sql.js apaga as funções registradas sempre que
// o banco é exportado (db.export()). Por isso registrarFuncoes()
// precisa ser chamada de novo depois de cada exportação.
// ========================================

export function normalizar(texto) {

    if (texto === null || texto === undefined) {
        return null;
    }

    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

export function registrarFuncoes(banco, calcularIdadeWasm) {

    banco.create_function("norm", normalizar);

    banco.create_function("idade_completa", nascimento => {

        const partes = /^(\d{4})-(\d{2})-(\d{2})/.exec(nascimento);

        if (!partes) {
            return null;
        }

        // Data local do navegador (e não UTC, como o 'now' do SQLite),
        // para a idade não mudar às 21h no horário de Brasília.
        const hoje = new Date();

        return calcularIdadeWasm(
            Number(partes[1]),
            Number(partes[2]),
            Number(partes[3]),
            hoje.getFullYear(),
            hoje.getMonth() + 1,
            hoje.getDate()
        );
    });
}
