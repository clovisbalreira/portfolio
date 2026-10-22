<?php

declare(strict_types=1);

/** Acesso ao banco pela ponte JSON (js/backend/ponteJson.js). */
final class BancoAmigos
{
    /** @return Amigo[] */
    public function buscar(
        string $nome = '',
        string $ordem = 'nome_asc',
        string $idadeMinima = '',
        string $idadeMaxima = '',
    ): array {
        $dados = Dom::janela()->buscarAmigos($nome, $ordem, $idadeMinima, $idadeMaxima);

        $resultados = json_decode((string) $dados, true, 512, JSON_THROW_ON_ERROR);

        $amigos = [];

        foreach ($resultados as $registro) {
            $amigos[] = new Amigo(
                (int) $registro['id'],
                (string) $registro['nome'],
                // O banco pode guardar lixo (ex.: o número 2000 em vez de uma data).
                (string) ($registro['nascimento'] ?? ''),
                isset($registro['idade']) ? (int) $registro['idade'] : null,
            );
        }

        return $amigos;
    }

    /** @return array{status:string} */
    public function inserir(string $nome, string $nascimento): array
    {
        return self::decodificar(Dom::janela()->inserirAmigo($nome, $nascimento));
    }

    /** @return array{status:string} */
    public function atualizar(int $idAmigo, string $nome, string $nascimento): array
    {
        return self::decodificar(Dom::janela()->atualizarAmigo($idAmigo, $nome, $nascimento));
    }

    /** @return array{status:string} */
    public function excluir(int $idAmigo): array
    {
        return self::decodificar(Dom::janela()->excluirAmigo($idAmigo));
    }

    private static function decodificar($json): array
    {
        return json_decode((string) $json, true, 512, JSON_THROW_ON_ERROR);
    }
}
