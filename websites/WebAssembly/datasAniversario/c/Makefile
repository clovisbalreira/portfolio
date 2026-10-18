# Compila o backend C para WebAssembly (c/app.wasm).
#
# Requer um compilador C com alvo wasm32. Duas opções:
#
#   1) Zig (recomendado, instala pelo pip):   pip install ziglang
#         make
#
#   2) clang + wasm-ld:
#         make WASMCC="clang --target=wasm32"
#
# O módulo não usa libc (-nostdlib): tudo está em c/src/mini.c.

ZIG ?= python3 -m ziglang
WASMCC ?= $(ZIG) cc -target wasm32-freestanding

FONTES = src/mini.c src/amigo.c src/banco.c src/interface.c src/app.c
CABECALHOS = $(wildcard src/*.h)

FLAGS = -O2 -nostdlib -fno-builtin -Wall -Wextra -Werror
LIGACAO = -Wl,--no-entry -Wl,--gc-sections -Wl,--strip-all

app.wasm: $(FONTES) $(CABECALHOS)
	$(WASMCC) $(FLAGS) $(LIGACAO) -o $@ $(FONTES)

clean:
	rm -f app.wasm

.PHONY: clean
