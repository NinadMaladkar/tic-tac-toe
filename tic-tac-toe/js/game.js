class Game {
    constructor() {
        this.inProgress = true;
        this.winner = null; //O or X
        this.currentTurn = Game.O;
        this.movesMade = 0;
        this.squares = new Array(9).fill().map(s => new Square());

        this.makeMove = function (index) {
            if (this.inProgress && !this.squares[index].value) {
                this.squares[index].value = this.currentTurn;
            }

            this.movesMade++;
            this.checkForWinner();
            this.currentTurn = (this.currentTurn === Game.O) ? this.currentTurn = Game.X : Game.O;
        }

        this.checkForWinner = function () {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]

            winningCombinations.forEach(winner => {
                const [a, b, c] = winner
                const A = this.squares[a];
                const B = this.squares[b];
                const C = this.squares[c];


                // If we have a winner
                if (A.value && A.value === B.value && A.value === C.value) {
                    this.inProgress = false;
                    this.winner = A.value;
                    A.isHighlighted = B.isHighlighted = C.isHighlighted = true;
                }

                //If it's a tie

                if (this.movesMade === this.squares.length) {
                    this.inProgress = false;

                }
            })
        }
    }


}

Game.O = 'O';
Game.X = 'X';