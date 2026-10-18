// Módulo WebAssembly do projeto (AssemblyScript).
// Calcula a idade completa, em anos, na data informada.
//
// É a única implementação de idade do sistema: o JavaScript a registra no
// SQLite como a função idade_completa(), usada nos filtros, na ordenação e
// na tela.

export function calcularIdade(
  anoNascimento: i32,
  mesNascimento: i32,
  diaNascimento: i32,
  anoHoje: i32,
  mesHoje: i32,
  diaHoje: i32
): i32 {
  let idade = anoHoje - anoNascimento;

  const aindaNaoFezAniversario =
    mesHoje < mesNascimento ||
    (mesHoje == mesNascimento && diaHoje < diaNascimento);

  if (aindaNaoFezAniversario) {
    idade -= 1;
  }

  return idade;
}
