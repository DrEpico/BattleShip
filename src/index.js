import { domModule } from './domModule';
import { Player } from './player';
import { Ship } from './ship';
import './style.css';

domModule.renderHomeScreen();

const player = new Player('human');
// populate player’s Gameboard with predetermined coordinates.
player.gameboard.placeShip(new Ship(5), 2,2, 'right');
player.gameboard.placeShip(new Ship(4), 5,4, 'down');
player.gameboard.placeShip(new Ship(3), 8,7, 'right');
player.gameboard.placeShip(new Ship(3), 0,0, 'down');
player.gameboard.placeShip(new Ship(2), 6,6, 'down');

const computer = new Player('computer');

domModule.updateBoardUI(player.gameboard, 'player1', true);
domModule.updateBoardUI(computer.gameboard, 'player2',);

// Example: Bind click events to Player 1's board for attacks
domModule.bindBoardClickEvents('player2', (x, y) => {
    computer.gameboard.receiveAttack(x, y);
    domModule.updateBoardUI(computer.gameboard, 'player2');
});