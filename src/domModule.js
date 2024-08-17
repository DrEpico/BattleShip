import { Ship } from "./ship";

export const domModule = {
    // Method to set up the initial home screen with headers and two game boards
    renderHomeScreen() {
        const body = document.querySelector('body');
        body.innerHTML = ''; // Clear existing content

        // Create the header
        const header = document.createElement('header');
        header.innerText = 'Battleship Game';
        body.appendChild(header);

        // Create the container for both game boards
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');
        
        // Create Player 1's game board
        const player1Container = document.createElement('div');
        player1Container.classList.add('player-container');
        const player1Label = document.createElement('h2');
        player1Label.innerText = 'Player 1';
        const player1Board = document.createElement('div');
        player1Board.id = 'player1-board';
        player1Board.classList.add('gameboard');
        player1Container.appendChild(player1Label);
        player1Container.appendChild(player1Board);

        // Create Player 2's game board
        const player2Container = document.createElement('div');
        player2Container.classList.add('player-container');
        const player2Label = document.createElement('h2');
        player2Label.innerText = 'Player 2';
        const player2Board = document.createElement('div');
        player2Board.id = 'player2-board';
        player2Board.classList.add('gameboard');
        player2Container.appendChild(player2Label);
        player2Container.appendChild(player2Board);

        // Append both player containers to the main game container
        gameContainer.appendChild(player1Container);
        gameContainer.appendChild(player2Container);

        // Append the game container to the body
        body.appendChild(gameContainer);
    },

    // Method to update the UI for a specific player's game board
    updateBoardUI(gameboard, player) {
        const boardElement = document.getElementById(`${player}-board`);
        boardElement.innerHTML = ''; // Clear the existing board
        
        // Iterate through the gameboard and create cells based on the state
        gameboard.board.forEach((row, x) => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            row.forEach((cell, y) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.dataset.x = x;
                cellElement.dataset.y = y;

                // Apply different classes based on the cell content
                if (cell === 'H') {
                    cellElement.classList.add('hit');
                } else if (cell === 'R') {
                    cellElement.classList.add('revealed');
                } else if (cell instanceof Ship) {
                    cellElement.classList.add('ship');
                } else {
                    cellElement.classList.add('empty');
                }
                
                rowElement.appendChild(cellElement);
            });
            boardElement.appendChild(rowElement);
        });
    },

    // Optional: Method to bind click events to cells on a player's board
    bindBoardClickEvents(player, callback) {
        const boardElement = document.getElementById(`${player}-board`);
        boardElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('cell')) {
                const x = event.target.dataset.x;
                const y = event.target.dataset.y;
                callback(x, y);
            }
        });
    }
};