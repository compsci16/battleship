import Application from './Application';

export default function setBlockClickListeners() {
    document.querySelectorAll('.block').forEach((block) => {
        block.addEventListener('click', blockClickHandler);
    });
}

export function blockClickHandler(e) {
    const block = e.target;

    const gridNumber = parseInt(block.parentElement.getAttribute('data-id'));
    if (!isValidPlayerClick(gridNumber)) return; // is the right player attacking the right grid?
    const [x, y] = getBlockCoords(block);
    Application.currentPlayer.attack(x - 1, y - 1);
    if (block.matches('.ship-block-in-grid')) {
        shipBlockClickHandler(block);
    } else {
        gridBlockClickHandler(block);
        console.log('left grid block handler');
        Application.updatePlayer(); // update player only when grid block is clicked
    }

    block.removeEventListener('click', blockClickHandler);
}

function isValidPlayerClick(gridNumber) {
    if (gridNumber === 1 && Application.currentPlayer === Application.player2)
        return true;
    else if (
        gridNumber === 2 &&
        Application.currentPlayer === Application.player1
    )
        return true;
    return false;
}

function gridBlockClickHandler(gridBlock) {
    gridBlock.classList.add('bad-attack');
    gridBlock.textContent = `☠️`;
}

function shipBlockClickHandler(shipBlock) {
    shipBlock.classList.add('attacked-ship');
    shipBlock.textContent = `💥`;
    //shipBlock.textContent = `🔥`;
}

function getBlockCoords(block) {
    const x = block.getAttribute('data-row');
    const y = block.getAttribute('data-column');
    return [x, y];
}
