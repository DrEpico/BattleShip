import { GameController } from "./gameController";
import { domModule } from "./domModule";

const gameController = new GameController();
gameController.startGame();

// Example: Bind click events to Player 1's board for attacks
domModule.bindBoardClickEvents('player2', (x, y) => {
    computer.gameboard.receiveAttack(x, y);
    domModule.updateBoardUI(computer.gameboard, 'player2');
});