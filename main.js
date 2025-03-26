function createGameBoard(rows, cols) {
    const board = [];
    for (let i= 0; i < rows; i++) {
        board[i] = [];
        for (let j= 0; j< cols; j++) {
            board[i][j]= null;
        }
    } 
    return board;  
}

const gameBoard = createGameBoard(3, 3);
console.log(gameBoard)

class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
        function sayName(name) {
            console.log(name)
        }
    }
}
const p1 = new Player('Player 1', 'x')
const p2 = new Player('Player 2', 'o')

//alternating turns
let currentPlayer = 1;

function nextTurn() {
    currentPlayer = 3 - currentPlayer;
    console.log(`current player: Player ${currentPlayer}`);
}
console.log(`current player: Player ${currentPlayer}`);

// determine outcome 

//display outcome

//reset button

//add clickevent

//connect ui

