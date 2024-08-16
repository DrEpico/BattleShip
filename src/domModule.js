export const domModule = {
    updateBoardUI(gameboard) {
        const boardElement = document.getElementById('gameboard');
        // Clear and update the board based on the gameboard state
        boardElement.innerHTML = '';
        gameboard.forEach(row => {
            const rowElement = document.createElement('div');
            row.forEach(cell => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                if (cell === 'H') {
                    cellElement.classList.add('hit');
                } else if (cell === 'R') {
                    cellElement.classList.add('revealed');
                } else if (cell instanceof Ship) {
                    cellElement.classList.add('ship');
                }
                rowElement.appendChild(cellElement);
            });
            boardElement.appendChild(rowElement);
        });
    },
};