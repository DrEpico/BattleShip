export class Gameboard {
    constructor(){
        this.size = 10;
        this.board = this.createBoard(this.size);
    }

    createBoard(size){
        const board = []; // Create a local variable `board`
        for(let i = 0; i < size; i++){
            board[i] = new Array(size).fill(null); // Initialize each row of the board
        }
        return board; // Return the local variable `board`
    }
}