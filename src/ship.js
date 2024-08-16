export class Ship{
    constructor(length){
        this.length = length;
        this.numOfHits = 0;
        this.isSunk = false;
        this.positions = []; // Array to store positions occupied by the ship
    }

    // Add a method to set positions when the ship is placed
    setPositions(positions) {
        this.positions = positions;
    }

    hit(){
        this.numOfHits += 1;
        this.checkIsSunk();
    }

    checkIsSunk(){
        if(this.numOfHits >= this.length){
            this.isSunk = true;
        }
    }

    getIsSunk(){
        return this.isSunk;
    }

}