import { Gameboard } from "./gameboard";

export class Player{
    constructor(type){
        if(type === "computer"){
            initCompter();
        } else if (type === "human"){
            initPlayer();
        }
    }

    initPlayer(){
        const gameboard = new Gameboard();
    }

    initCompter(){
        const gameboard = new Gameboard();
    }
}