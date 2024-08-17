import { Player } from "./player";
import { game } from "./driver";

domModule.renderHomeScreen();

game();

domModule.updateBoardUI(player1.gameboard, 'player1');
domModule.updateBoardUI(player2.gameboard, 'player2');

// Example: Bind click events to Player 1's board for attacks
domModule.bindBoardClickEvents('player1', (x, y) => {
    player2.gameboard.receiveAttack(x, y);
    domModule.updateBoardUI(player2.gameboard, 'player2');
});