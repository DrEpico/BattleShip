import { Ship } from "./ship";

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