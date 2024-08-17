import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

export class Player{
    constructor(type){
        if(type === "computer"){
            this.initCompter();
        } else if (type === "human"){
            this.initPlayer();
        }
    }

    initPlayer(){
        this.gameboard = new Gameboard();
        const shipLengths = [5, 4, 3, 3, 2]; 
        //TODO:implement 
    }

    initCompter(){
        this.gameboard = new Gameboard();

        const shipLengths = [5, 4, 3, 3, 2]; 
        shipLengths.forEach(length => {
            let placed = false;

            while (!placed) {
                const x = Math.floor(Math.random() * this.gameboard.size);
                const y = Math.floor(Math.random() * this.gameboard.size);
                const direction = Math.random() < 0.5 ? 'right' : 'down';

                const ship = new Ship(length);
                
                // Try to place the ship; if it fails, catch the error and retry
                try {
                    this.gameboard.placeShip(ship, x, y, direction);
                    placed = true; // If the ship is successfully placed, exit the loop
                } catch (error) {
                    // If there's an error (e.g., collision), continue the loop to try again
                }
            }
        });
    }
}