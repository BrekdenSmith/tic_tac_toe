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
    }
}

const p1 = new Player('Player 1', "x")
const p2 = new Player('Player 2', 'o')
console.log(p1.marker)

//alternating turns


// determine outcome 

//display outcome

//reset button

//add clickevent

//connect ui

