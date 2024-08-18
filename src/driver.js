import { Player } from "./player";
import { domModule } from "./domModule";
import { Ship } from "./ship";

export class GameController {
    constructor() {
        this.humanPlayer = new Player('human');
        this.computerPlayer = new Player('computer');
        this.currentPlayer = this.humanPlayer; // Human starts first
    }

    // Method to start the game
    startGame() {
        domModule.renderHomeScreen();
        this.humanPlayer.gameboard.placeShip(new Ship(5), 2,2, 'right');
        this.humanPlayer.gameboard.placeShip(new Ship(4), 5,4, 'down');
        this.humanPlayer.gameboard.placeShip(new Ship(3), 8,7, 'right');
        this.humanPlayer.gameboard.placeShip(new Ship(3), 0,0, 'down');
        this.humanPlayer.gameboard.placeShip(new Ship(2), 6,6, 'down');
        this.updateUI();

        // Bind click events for the human player to attack the computer's board
        domModule.bindBoardClickEvents('player2', (x, y) => {
            this.humanTurn(x, y);
        });
    }

    // Human player's turn
    humanTurn(x, y) {
        if (this.currentPlayer !== this.humanPlayer) return;

        this.humanPlayer.gameboard.receiveAttack(x, y);
        this.updateUI();

        if (this.humanPlayer.gameboard.isGameover()) {
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
        } while (this.humanPlayer.gameboard.board[x][y] !== null); // Avoid repeating attacks

        this.computerPlayer.gameboard.receiveAttack(x, y);
        this.updateUI();

        if (this.computerPlayer.gameboard.isGameover()) {
            alert("Computer wins! All your ships have been sunk.");
            return;
        }

        this.currentPlayer = this.humanPlayer; // Switch back to the human player's turn
    }

    // Update the UI for both boards
    updateUI() {
        domModule.updateBoardUI(this.humanPlayer.gameboard, 'player1', true);
        domModule.updateBoardUI(this.computerPlayer.gameboard, 'player2', false);
    }
}
