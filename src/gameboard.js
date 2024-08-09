class Gameboard {
    constructor(){
        this.size = 10;
        this.board = this.createBoard(this.size);
    }

    createBoard(size){
        const board = [];
        for(let i = 0; i < size; i++){
            board[i] = new Array(size).fill(null);
        }
        return board;
    }
}