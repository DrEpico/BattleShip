import { Player } from './player';
import { Gameboard } from './gameboard';
import { Ship } from './ship';

export function game(){
    let player = new Player("human");
    let computer = new Player("computer");

    //populate player’s Gameboard with predetermined coordinates.
    player.gameboard.placeShip(new Ship(5), 2,2, 'right');
    player.gameboard.placeShip(new Ship(4), 5,4, 'down');
    player.gameboard.placeShip(new Ship(3), 8,7, 'right');
    player.gameboard.placeShip(new Ship(3), 0,0, 'down');
    player.gameboard.placeShip(new Ship(2), 6,6, 'down');

    player.gameboard.logBoardTable();
}






