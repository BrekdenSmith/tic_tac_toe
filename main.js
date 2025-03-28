//gives framework for gameboard
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

//creates the gameboard using previous function
const gameBoard = createGameBoard(3, 3);
console.log(gameBoard)

class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    }
}
//create players 1 and 2 (p1,p2) [change names back to Player 1 and Player 2 when finished]
const p1 = new Player('Max', 'x')
const p2 = new Player('Ruby', 'o')

//creates alternating turns
let currentPlayer = 1;
function nextTurn() {
    currentPlayer = 3 - currentPlayer;
    console.log(`current player: Player ${currentPlayer}`);
}
console.log(`current player: Player ${currentPlayer}`); //for removal at end

//assigns the currentPlayer value to the created players (p1,p2)
if (currentPlayer=1) {
    currentPlayer= p1
} else {
    currentPlayer= p2
}




// determine outcome 

//display outcome

//reset button

//add clickevent

//connect ui

