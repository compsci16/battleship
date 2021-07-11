let drag = false;

export default function letHumanRotateShips() {
    document
        .querySelectorAll(`.ship-yard[data-id = '1'] .ship`)
        .forEach((ship) => {
            // distinguish b/w drag and click
            // there is a mousemove between mousedown and mouseup in a drag,
            // but not in a click.
            ship.addEventListener('mousedown', () => (drag = false));
            ship.addEventListener('mousemove', () => (drag = true));
            ship.addEventListener('mouseup', (e) => {
                if (!drag) rotateShip(e);
            });
        });
}

function rotateShip(e) {
    e.preventDefault();
    console.log('click');
    const ship = e.target.parentElement; // because target will be a ship block due to event bubbling
    const currentDirection = ship.style.flexDirection;
    ship.style.flexDirection = currentDirection === 'column' ? 'row' : 'column';
}
