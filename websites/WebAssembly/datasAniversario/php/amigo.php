<?php

declare(strict_types=1);

/** Modelo Amigo (backend PHP). */
final class Amigo
{
    /**
     * A idade vem do banco (função WebAssembly idade_completa), a única
     * implementação do cálculo no sistema.
     */
    public function __construct(
        public readonly ?int $id,
        public readonly string $nome,
        public readonly string $nascimento,
        private readonly ?int $idade = null,
    ) {
    }

    public function idade(): ?int
    {
        return $this->idade;
    }

    /** Tira espaços das pontas (inclusive o espaço não separável, como Python e JavaScript). */
    public static function aparar(string $texto): string
    {
        return preg_replace('/\A[\s\x{00A0}]+|[\s\x{00A0}]+\z/u', '', $texto) ?? $texto;
    }

    /** Número de caracteres (não de bytes). O php-wasm não traz a extensão mbstring. */
    private static function contarCaracteres(string $texto): int
    {
        return (int) preg_match_all('/./su', $texto);
    }

    /** @return array{0:int,1:int,2:int}|null [ano, mes, dia] se "AAAA-MM-DD" for uma data que existe. */
    private static function lerData(string $texto): ?array
    {
        if (!preg_match('/\A([0-9]{4})-([0-9]{2})-([0-9]{2})\z/', $texto, $partes)) {
            return null;
        }

        [$ano, $mes, $dia] = [(int) $partes[1], (int) $partes[2], (int) $partes[3]];

        return checkdate($mes, $dia, $ano) ? [$ano, $mes, $dia] : null;
    }

    public function formatarNascimento(): string
    {
        if ($this->nascimento === '') {
            return 'Sem data de nascimento.';
        }

        if (self::lerData($this->nascimento) === null) {
            return 'Data de nascimento inválida.';
        }

        $texto = 'nasceu em ' . substr($this->nascimento, 8, 2)
            . '/' . substr($this->nascimento, 5, 2)
            . '/' . substr($this->nascimento, 0, 4);

        if ($this->idade !== null) {
            $texto .= ' e tem ' . $this->idade . ($this->idade === 1 ? ' ano' : ' anos');
        }

        return $texto;
    }

    /** Devolve a mensagem de erro, ou null se estiver tudo certo. */
    public function validar(): ?string
    {
        $nome = self::aparar($this->nome);

        if ($nome === '') {
            return 'Informe o nome.';
        }

        if (self::contarCaracteres($nome) < 3) {
            return 'O nome deve ter pelo menos 3 caracteres.';
        }

        if ($this->nascimento === '') {
            return 'Informe a data de nascimento.';
        }

        $data = self::lerData($this->nascimento);

        if ($data === null) {
            return 'Data de nascimento inválida.';
        }

        [$ano, $mes, $dia] = $data;

        if ($ano * 10000 + $mes * 100 + $dia > Dom::hoje()) {
            return 'A data de nascimento não pode ser futura.';
        }

        return null;
    }

    public function __toString(): string
    {
        return "{$this->id} - {$this->nome} - {$this->nascimento}";
    }
}
