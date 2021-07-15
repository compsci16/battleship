import Ship from '../Models/Ship';
import Application from '../Controllers/Application';

let draggedShip,
    draggedShipLength,
    shipBlockNumberDragged,
    draggedShipDirection;

export default function letHumanDragShips(boardHuman) {
    document
        .querySelectorAll(".ship-yard[data-id = '1'] .ship")
        .forEach((ship) => {
            ship.addEventListener('dragstart', handleDragStart);
            ship.addEventListener('dragend', (e) =>
                handleDragEnd(e, boardHuman)
            );
        });
}

function handleDragStart(e) {
    e.stopPropagation();
    draggedShip = e.target;
    e.dataTransfer.setData('text', '');
    console.log('set data on drag start required by firefox');
    if (!draggedShip.matches('.ship')) {
        console.log('not matches');
        return;
    }
    try {
        this.style.opacity = '0.4';

        draggedShipLength = draggedShip.childElementCount;
        const rect = draggedShip.getBoundingClientRect();
        draggedShipDirection =
            window.getComputedStyle(draggedShip).flexDirection;
        if (draggedShipDirection === 'row') {
            const blockWidth = rect.width / draggedShipLength;
            shipBlockNumberDragged = Math.floor(e.offsetX / blockWidth + 1);
        } else if (draggedShipDirection === 'column') {
            const blockHeight = rect.height / draggedShipLength;
            shipBlockNumberDragged = Math.floor(e.offsetY / blockHeight + 1);
        }
    } catch {
        restoreOpacity(e);
    }
}

function handleDragEnd(e, boardHuman) {
    e.preventDefault();
    e.stopPropagation();
    // if (!draggedShip.matches('.ship')) {
    //     console.log('not matches');
    //     restoreOpacity(e);
    //     return;
    // }
    // on which element does drag end on screen - returns an array with parents included
    try {
        const elem = document.elementsFromPoint(e.clientX, e.clientY);
        // if it's a block in the right grid
        if (
            elem[0].matches(`.grid[data-id = '1'] .block`) &&
            draggedShipLength >= 2
        ) {
            const block = elem[0];
            const [row, column] = getUICoords(block);
            const startingBlock = getStartingBlock(
                row,
                column,
                draggedShipDirection
            );
            console.log(startingBlock);
            if (!startingBlock) {
                console.log('NOT starting block');
                restoreOpacity(e);
                return;
            }
            const [x, y] = getUICoords(startingBlock);
            const orientation =
                draggedShipDirection === 'row' ? 'horizontal' : 'vertical';

        } else restoreOpacity(e);
    } catch {
        restoreOpacity(e);
    }
}

function getStartingBlock(row, column, direction) {
    if (direction === 'row')
        return document.querySelector(
            `.grid[data-id = '1'] .block[data-row = '${row}'][data-column = '${
                column - shipBlockNumberDragged + 1
            }']`
        );
    else if (direction === 'column') {
        return document.querySelector(
            `.grid[data-id = '1'] .block[data-row = '${
                row - shipBlockNumberDragged + 1
            }'][data-column = '${column}']`
        );
    } else {
        throw new Error('No direction specified');
    }
}

function paintShipOnGrid(index, orientation) {
    if (orientation === 'horizontal')
        for (let i = 0; i < draggedShipLength; i++) {
            const currentBlock = document.querySelector(
                `.grid[data-id = '1'] .block[data-number = '${index++}']`
            );
            currentBlock.classList.add('ship-block-in-grid');
        }
    else if (orientation === 'vertical') {
        for (let i = 0; i < draggedShipLength; i++) {
            const currentBlock = document.querySelector(
                `.grid[data-id = '1'] .block[data-number = '${index}']`
            );
            currentBlock.classList.add('ship-block-in-grid');
            index += 10;
        }
    }
}

function restoreOpacity(e) {
    if (draggedShip.matches('.ship')) draggedShip.style.opacity = 1;
}

function getUICoords(block) {
    const x = block.getAttribute('data-row');
    const y = block.getAttribute('data-column');
    return [x, y];
}
