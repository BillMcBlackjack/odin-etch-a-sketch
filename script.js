// UI
const ROWS = 16;
const COLUMNS = 16;
let enableHover = false;
const gridContainer = document.querySelector('#grid-container');

for (let row = 0; row < ROWS; row++) {
  for (let column = 0; column < COLUMNS; column++) {
    const square = document.createElement('div');
    square.classList.add('cell');
    gridContainer.appendChild(square);

    square.addEventListener('click', function() {
      enableHover = !enableHover;
      // makes sure that the cell clicked changes it's color
      this.style.backgroundColor = 'black';
    });
    square.addEventListener('mouseover', function() {
      if (enableHover) {
      this.style.backgroundColor = 'black';
      }
    })

  }
}
