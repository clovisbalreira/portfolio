// TIC TAC TOE
const tic_tac_toe = {

    player: 'X',
    cpu: 'O',

    // ATTRIBUTES
    board: ['','','','','','','','',''],
    symbols: {
                options: ['X','O'],
                turn_index: 0,
                change(){
                    this.turn_index = ( this.turn_index === 0 ? 1:0 );
                }
            },
    container_element: null,
    gameover: false,
    winning_sequences: [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ],

    // FUNCTIONS
    init(container) {
        this.container_element = container;
    },

    make_play(position) {
        if (this.gameover || this.board[position] !== '') return false;

        const currentSymbol = this.symbols.options[this.symbols.turn_index];
        this.board[position] = currentSymbol;
        this.draw();

        const winning_sequences_index = this.check_winning_sequences(currentSymbol);

        if (winning_sequences_index >= 0) {
            this.game_is_over(currentSymbol);
            this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index]);
        } else if (this.is_game_over()) {
            this.game_is_over(null); // empate
        } else {
            this.symbols.change();

            // se for turno da CPU, ela joga
            if (this.symbols.options[this.symbols.turn_index] === this.cpu) {
                setTimeout(() => this.cpu_play(), 400); // pequeno delay pra parecer humano
            }
        }

        return true;
    },

    cpu_play() {
        if (this.gameover) return;

        // 1. tentar ganhar
        let move = this.find_best_move(this.cpu);

        // 2. bloquear jogador
        if (move === null) {
            move = this.find_best_move(this.player);
        }

        // 3. jogada aleatória
        if (move === null) {
            const empty = this.board
                .map((v, i) => v === '' ? i : null)
                .filter(v => v !== null);

            move = empty[Math.floor(Math.random() * empty.length)];
        }

        this.make_play(move);
    },

    find_best_move(symbol) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i] === '') {
                this.board[i] = symbol;

                if (this.check_winning_sequences(symbol) >= 0) {
                    this.board[i] = '';
                    return i;
                }

                this.board[i] = '';
            }
        }
        return null;
    },

    stylize_winner_sequence(winner_sequence) {
        winner_sequence.forEach((position) => {
          this
            .container_element
            .querySelector(`div:nth-child(${position + 1})`)
            .classList.add('winner');
        });
      },

    check_winning_sequences(symbol) {

        for ( let i in this.winning_sequences ) {
            if (this.board[ this.winning_sequences[i][0] ] == symbol  &&
                this.board[ this.winning_sequences[i][1] ] == symbol &&
                this.board[ this.winning_sequences[i][2] ] == symbol) {
                console.log('winning sequences INDEX:' + i);
                return i;
            }
        };
        return -1;
    },

    game_is_over(winner) {
        this.gameover = true;
        console.log('GAME OVER');
        this.vencedor(winner)
    },

    is_game_over() {
        return !this.board.includes('');
    },

    start() {
        this.board.fill('');
        this.draw();
        this.gameover = false;   
        this.symbols.turn_index = 1; // O começa (CPU)
        this.cpu_play();
        const el = document.querySelector('.winner');
        if (el) el.innerHTML = '';    
    },

    restart() {
        if (this.is_game_over() || this.gameover) {
            this.start();
            console.log('this game has been restarted!')
        } else if (confirm('Are you sure you want to restart this game?')) {
            this.start();
            console.log('this game has been restarted!')
        }
    },

    draw() {
        this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
    },

    vencedor(winner) {
        const el = document.querySelector('.winner');

        if (winner) {
            el.innerHTML = `🎉 Jogador <span>${winner}</span> venceu!`;
        } else {
            el.innerHTML = `😐 Deu empate!`;
        }
    }
};