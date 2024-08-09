import { Ship } from "./ship";
import { Gameboard } from "./gameboard";

describe('Ship class public interface', () => {
    let ship

    beforeEach(() => {
        ship = new Ship(3);
      });

      afterEach(() => {
        ship = null;  // Clean up by setting ship to null
    });

    test('Should count hits to the ship correctly', () => {
        ship.hit();
        ship.hit();
        expect(ship.numOfHits).toBe(2);
    })

    test('isSunk() should return true', () => {
        ship.hit();
        ship.hit();
        expect(ship.getIsSunk()).toBe(false);
        ship.hit();
        expect(ship.getIsSunk()).toBe(true);
    })
})

describe('createBoard', () => {
    test('should create a 2D array of the size 10x10', () => {
        const gameboard = new Gameboard();
        const board = gameboard.board;

        // Check if the board has the correct number of rows
        expect(board.length).toBe(gameboard.size);

        // Check if each row has the correct number of columns
        board.forEach(row => {
            expect(row.length).toBe(gameboard.size);
        });
    });
});
