export class Ship{
    constructor(length){
        this.length = length;
        this.numOfHits = 0;
        this.isSunk = false;
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