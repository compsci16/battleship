import Ship from '../Models/Ship';
import Application from '../Controllers/Application';

let draggedShip,
    draggedShipLength,
    shipBlockNumberDragged,
    draggedShipDirection;

let clientX, clientY;
// Firefox doesn't recognize clienX and clientY in dragend event so use this hack
document.addEventListener('dragover', (event) => {
    event = event || window.event;
    clientX = event.clientX;
    clientY = event.clientY;
});

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
    e.dataTransfer.setData('text/plain', '');
    console.log('handle drag start'); // required by firefox
    if (!draggedShip.matches('.ship')) {
        console.log(draggedShip);
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
    if (!draggedShip.matches('.ship')) {
        console.log('not matches');
        return;
    }
    console.log('in drag end');
    domManipulation(e, boardHuman);
    console.log('in drag end after dom');
}

function domManipulation(e, boardHuman) {
    try {
        console.log('in dom man');
        const elem = document.elementsFromPoint(clientX, clientY);
        console.log(elem[0]);
        console.log(draggedShip);
        // if it's a block in the right grid
        if (
            elem[0].matches(`.grid[data-id = '1'] .block`) &&
            draggedShipLength >= 2
        ) {
            console.log('matches block of grid 1');
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

            const ship = new Ship(draggedShipLength, orientation);
            try {
                boardHuman.placeShip(ship, x - 1, y - 1); // x-1,y-1 because UI: 1,2,... -> logic:0,1,...\
                ++Application.shipsOfGrid1;
                paintShipOnGrid(
                    parseInt(startingBlock.getAttribute('data-number')),
                    orientation
                );
                const width =
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth;
                console.log(width);
                if (width > 576) draggedShip.style.visibility = 'hidden';
                else draggedShip.style.display = 'none';
                return;
            } catch (err) {
                console.log(err.message);
                restoreOpacity(e);
                return;
            }
        } else {
            console.log('in else of drag fail');
            restoreOpacity(e)};
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
    console.log('in restore opacity');
    console.log(draggedShip);
    draggedShip.style.opacity = 1;
}

function getUICoords(block) {
    const x = block.getAttribute('data-row');
    const y = block.getAttribute('data-column');
    return [x, y];
}
