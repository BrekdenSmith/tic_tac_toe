//Create gameboard
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

//create players

// determine outcome

//display outcome

//reset button

//add clickevent

//connect ui

