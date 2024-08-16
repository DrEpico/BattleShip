import { Ship } from "./ship";
import { Gameboard } from "./gameboard";
import { Player } from "./player";

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

describe('gameboard', () => {
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

    test('Gameboards should be able to report whether or not all of their ships have been sunk ', () => {
        const gameboard = new Gameboard();
        //TODO: implement actual game logic of hitting and sinking ships
        gameboard.incrementSunken();
        gameboard.incrementSunken();
        gameboard.incrementSunken();
        gameboard.incrementSunken();
        gameboard.incrementSunken();
        expect(gameboard.isGameover()).toBe(true);
    });
    
    test('should correctly hit ships on the board or reveal the empty coords otherwise', () => {
        const gameboard = new Gameboard();
        const board = gameboard.board;

        const ship = new Ship(3); // Create a ship with length 3
        gameboard.placeShip(ship, 1,3, 'right');

        gameboard.receiveAttack(1,4);
        
        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, ship, 'H',  ship, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];

        expect(board).toEqual(expectedBoard);
        gameboard.receiveAttack(4,6);

        const expectedBoard2 = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, ship, 'H',  ship, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 'R',  null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];

        expect(board).toEqual(expectedBoard2);

        // gameboard.logBoardTable();
    });

});

describe('placeShip', () => {
    test('Should correctly place the ships horizontally on the 2D array ', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3); // Create a ship with length 3
        
        gameboard.placeShip(ship, 1,3, 'right');

        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, ship, ship, ship, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];

        // Check if the board matches the expected state
        expect(gameboard.board).toEqual(expectedBoard);

    }); 

    test('Should correctly place the ships vertically on the 2D array ', () => {
        const gameboard = new Gameboard();
        const ship = new Ship(3); // Create a ship with length 3
        

        gameboard.placeShip(ship, 1,3, 'down');

        const expectedBoard = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, ship, null, null, null, null, null, null],
            [null, null, null, ship, null, null, null, null, null, null],
            [null, null, null, ship, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ];

        // Check if the board matches the expected state
        expect(gameboard.board).toEqual(expectedBoard);
    }); 

    test('Should correctly place the 2 ships of different sizes in different directions', () => {
        const gameboard = new Gameboard();
        const ship1 = new Ship(3); // Create a ship with length 3
        const ship2 = new Ship(4); // Create a ship with length 3
        

        gameboard.placeShip(ship1, 1, 3, 'down');  // Placing ship1 vertically from (1,3)
        gameboard.placeShip(ship2, 3, 6, 'right'); // Placing ship2 horizontally from (3,6)

        const expectedBoard = [
            [null, null, null, null,  null, null, null,  null,  null,  null],
            [null, null, null, ship1, null, null, null,  null,  null,  null], // ship1 starts here
            [null, null, null, ship1, null, null, null,  null,  null,  null], // ship1 continues here
            [null, null, null, ship1, null, null, ship2, ship2, ship2, ship2],// ship1 ends here, ship2 starts
            [null, null, null, null,  null, null, null,  null,  null,  null],
            [null, null, null, null,  null, null, null,  null,  null,  null],
            [null, null, null, null,  null, null, null,  null,  null,  null],
            [null, null, null, null,  null, null, null,  null,  null,  null],
            [null, null, null, null,  null, null, null,  null,  null,  null],
            [null, null, null, null,  null, null, null,  null,  null,  null]
        ];

        // Check if the board matches the expected state
        expect(gameboard.board).toEqual(expectedBoard);
    }); 
    
    test('Should correctly place the 2 ships of different sizes in different directions', () => {
        const gameboard = new Gameboard();
        const ship1 = new Ship(3); // Create a ship with length 3
        const ship2 = new Ship(4); // Create a ship with length 4     

        gameboard.placeShip(ship1, 1,3, 'down');

        // Check if the board matches the expected state
        expect(() => {
            gameboard.placeShip(ship2, 1, 3, 'down'); // This should cause a collision
            // gameboard.logBoard();
        }).toThrow(Error);
    }); 
});

describe('Player initialisation', () => {
    test('should place 5 ships on the board without overlaps', () => {
        const computerPlayer = new Player('computer');
        const board = computerPlayer.gameboard.board;

        // Check if the correct number of ships were placed
        const shipsOnBoard = board.flat().filter(cell => cell instanceof Ship).length;
        const expectedShipCells = [5, 4, 3, 3, 2].reduce((sum, length) => sum + length, 0);
        /*flat() is a method that flattens the 2D array into a 1D array. This converts the array from [[row1], [row2], ...] to 
        [cell1, cell2, ..., cellN]. This makes it easier to iterate through all cells on the board.*/ 
        /* cell => cell instanceof Ship checks if a cell contains a Ship object (as opposed to null). 
        The filter method then collects all the cells that contain ships into a new array. */


        expect(shipsOnBoard).toBe(expectedShipCells);

        // Check that ships do not overlap and are placed correctly
        const visited = new Set();
        /*Validation: The test ensures that no two ship parts occupy the same coordinates by checking 
        whether the cell’s coordinates have been recorded before.*/
        board.forEach((row, x) => {
            row.forEach((cell, y) => {
                if (cell instanceof Ship) {
                    const position = `${x},${y}`;
                    expect(visited.has(position)).toBe(false);
                    visited.add(position);
                }
            });
        });

        // Ensure that all ships are within board boundaries
        computerPlayer.gameboard.ships.forEach(ship => {
            const positions = ship.positions; // Ship class stores its positions
            positions.forEach(([x, y]) => {
                expect(x).toBeGreaterThanOrEqual(0);
                expect(x).toBeLessThan(computerPlayer.gameboard.size);
                expect(y).toBeGreaterThanOrEqual(0);
                expect(y).toBeLessThan(computerPlayer.gameboard.size);
            });
        });
    });
});
