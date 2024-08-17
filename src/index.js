import { domModule } from './domModule';
import { Player } from './player';
import './style.css';

domModule.renderHomeScreen();

const player1 = new Player('human');
const player2 = new Player('computer');

domModule.updateBoardUI(player1.gameboard, 'player1');
domModule.updateBoardUI(player2.gameboard, 'player2');

// Example: Bind click events to Player 1's board for attacks
domModule.bindBoardClickEvents('player1', (x, y) => {
    player2.gameboard.receiveAttack(x, y);
    domModule.updateBoardUI(player2.gameboard, 'player2');
});