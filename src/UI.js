import { Player } from './player';
import { Gameboard } from './gameboard';
import { Ship } from './ship';

const gameboardElement = document.getElementById('gameboard');

gameboardElement.addEventListener('click', (event) => {
    const x = event.target.dataset.x; 
    const y = event.target.dataset.y;
    
    // Now you can handle an attack
    player.gameboard.receiveAttack(x, y);
    
    // Update the UI
    updateBoardUI();
    console.log("stuff were called");
});