export class Gameboard {
    constructor(){
        this.size = 10;
        this.board = this.createBoard(this.size);
        this.numOfShips = 5;
        this.numOfSunken = 0;
        this.ships = []; 
    }

    createBoard(size){
        const board = []; // Create a local variable `board`
        for(let i = 0; i < size; i++){
            board[i] = new Array(size).fill(null); // Initialize each row of the board
        }
        return board; // Return the local variable `board`
    }

    placeShip(ship, x,y, direction){
        const shipLength = ship.length;

        for (let i = 0; i < shipLength; i++) {
            if (direction === 'right') {
                if (this.board[x][y + i] !== null) {
                    throw new Error(`Collision detected at (${x}, ${y + i}). Ship cannot be placed.`);
                }
            } else if (direction === 'down') {
                if (this.board[x + i][y] !== null) {
                    throw new Error(`Collision detected at (${x + i}, ${y}). Ship cannot be placed.`);
                }
            }
        }

        for(let i = 0; i < shipLength; i++){
            if (direction === 'right') {
                this.board[x][y + i] = ship; // Place the ship horizontally
            } else if (direction === 'down') {
                this.board[x + i][y] = ship; // Place the ship vertically
            }
        }

        this.ships.push(ship);
    }

    receiveAttack(){
        //TODO: Reveal coordinate: place "Revealed for the coordinates that was clicked but did not hit"
    }

    incrementSunken(){
        this.numOfSunken++;
        if (this.numOfSunken >= this.numOfShips) {
            console.log('Game Over! All ships have been sunk.');
            // TODO: Optionally reset the game here
        }
    }

    isGameover(){
        return this.numOfSunken >= this.numOfShips;
    }

    //debug function
    logBoard() {
        console.log('Gameboard:');
        for (let row of this.board) {
            console.log(row.map(cell => cell === null ? '.' : 'S').join(' '));
        }
    }
}