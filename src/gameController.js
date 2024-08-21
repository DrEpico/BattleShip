import { Player } from "./player";
import { domModule } from "./domModule";
import { Ship } from "./ship";

export class GameController {
    constructor() {
        this.humanPlayer = new Player('human');
        this.computerPlayer = new Player('computer');
        this.currentPlayer = this.humanPlayer; // Human starts first
        this.shipsToPlace = [5, 4, 3, 3, 2]; // Ship lengths to be placed
        this.currentShipIndex = 0; // Track which ship is being placed
    }

    startGame() {
        domModule.renderHomeScreen();
        this.promptShipPlacement();
    }

    promptShipPlacement() {
        const currentShipLength = this.shipsToPlace[this.currentShipIndex];
        alert(`Place your ship of length ${currentShipLength}. Click on the board to place it, and choose a direction.`);

        // Bind the click event for ship placement
        domModule.bindBoardClickEvents('player1', (x, y) => {
            this.handleShipPlacement(x, y, currentShipLength);
        });
    }

    handleShipPlacement(x, y, length) {
        const direction = prompt("Enter the direction to place the ship (right/down):").toLowerCase();
        try {
            this.humanPlayer.gameboard.placeShip(new Ship(length), parseInt(x), parseInt(y), direction);
            this.updateUI();
            this.currentShipIndex++;

            if (this.currentShipIndex < this.shipsToPlace.length) {
                this.promptShipPlacement();
            } else {
                this.startCombatPhase();
            }
        } catch (error) {
            alert(error.message);
        }
    }

    startCombatPhase() {
        alert("All ships placed! The game begins now.");
        // Allow the user to attack the computer's board
        domModule.bindBoardClickEvents('player2', (x, y) => {
            this.humanTurn(x, y);
        });
        this.updateUI();
    }

    // // Method to start the game
    // startGame() {
    //     domModule.renderHomeScreen();
    //     //TODO: players to decide their ship positions
    //     this.humanPlayer.gameboard.placeShip(new Ship(5), 2,2, 'right');
    //     this.humanPlayer.gameboard.placeShip(new Ship(4), 5,4, 'down');
    //     this.humanPlayer.gameboard.placeShip(new Ship(3), 8,7, 'right');
    //     this.humanPlayer.gameboard.placeShip(new Ship(3), 0,0, 'down');
    //     this.humanPlayer.gameboard.placeShip(new Ship(2), 6,6, 'down');
    //     console.log("game starts");
    //     this.updateUI();


    //     // Bind click events for the human player to attack the computer's board
    //     domModule.bindBoardClickEvents('player2', (x, y) => {
    //         this.humanTurn(x, y);
    //     });
    // }

    // Human player's turn
    humanTurn(x, y) {
        if (this.currentPlayer !== this.humanPlayer) return;

        this.computerPlayer.gameboard.receiveAttack(x, y);
        this.updateUI();

        if (this.computerPlayer.gameboard.isGameover()) {
            alert("You win! All enemy ships have been sunk.");
            return;
        }

        this.currentPlayer = this.computerPlayer;
        setTimeout(() => this.computerTurn(), 1000); // Slight delay for computer's turn
    }

    // Computer player's turn
    computerTurn() {
        if (this.currentPlayer !== this.computerPlayer) return;

        let x, y;
        do {
            x = Math.floor(Math.random() * this.humanPlayer.gameboard.size);
            y = Math.floor(Math.random() * this.humanPlayer.gameboard.size);
        } while (['H', 'R'].includes(this.humanPlayer.gameboard.board[x][y])); // Avoid cells already hit or revealed

        // Attack the randomly chosen coordinates
        this.humanPlayer.gameboard.receiveAttack(x, y);
        // Update the UI to reflect the attack
        this.updateUI();

        if (this.humanPlayer.gameboard.isGameover()) {
            alert("Computer wins! All your ships have been sunk.");
            return;
        }

        this.currentPlayer = this.humanPlayer; // Switch back to the human player's turn
    }

    // Update the UI for both boards
    updateUI() {
        console.log("update UI");
        domModule.updateBoardUI(this.humanPlayer.gameboard, 'player1', true);
        domModule.updateBoardUI(this.computerPlayer.gameboard, 'player2', false);
        this.humanPlayer.gameboard.logBoardTable();
    }
}
