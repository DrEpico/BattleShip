import { Ship } from "./ship";

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
        const positions = []; // Array to track positions for this ship

        // First, check if the ship can be placed without collision
        for (let i = 0; i < shipLength; i++) {
            if (direction === 'right') {
                if (this.board[x][y + i] !== null) {
                    throw new Error(`Collision detected at (${x}, ${y + i}). Ship cannot be placed.`);
                }
                positions.push([x, y + i]); // Track position
            } else if (direction === 'down') {
                if (this.board[x + i][y] !== null) {
                    throw new Error(`Collision detected at (${x + i}, ${y}). Ship cannot be placed.`);
                }
                positions.push([x + i, y]); // Track position
            }
        }

        for(let i = 0; i < shipLength; i++){
            if (direction === 'right') {
                this.board[x][y + i] = ship; // Place the ship horizontally
            } else if (direction === 'down') {
                this.board[x + i][y] = ship; // Place the ship vertically
            }
        }

        // Store the ship's positions in the Ship object
        ship.setPositions(positions);

        this.ships.push(ship);
    }

    //Reveal coordinate: place "Revealed for the coordinates that was clicked but did not hit"
    receiveAttack(x,y){//take coordinates in
        const cell = this.board[x][y];
        if (cell === null) {
            this.board[x][y] = 'R'; // 'R' for Revealed
        } else if (cell instanceof Ship) {
            cell.hit();
            this.board[x][y] = 'H'; // 'H' for Hit

            if (cell.getIsSunk()) {
                this.incrementSunken();
            }
        }
    }

    incrementSunken(){
        this.numOfSunken++;
        if (this.numOfSunken >= this.numOfShips) {
            return 'Game Over! All ships have been sunk.';
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

    logBoardTable() {
        console.table(this.board.map(row => 
            row.map(cell => {
                if (cell === 'H') return 'H'; // Hit
                if (cell === 'R') return 'R'; // Revealed
                if (cell instanceof Ship) return 'S'; // Ship
                return '.'; // Empty cell
            })
        ));
    }
}